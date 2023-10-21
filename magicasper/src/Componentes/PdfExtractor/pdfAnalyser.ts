import { PDFExtract, PDFExtractOptions } from 'pdf.js-extract';
const pdfExtract = new PDFExtract();
const options: PDFExtractOptions = {}; /* see below */
pdfExtract
  .extract('historico-analitico-19111157 (4).pdf', options)
  .then((data) => {
    //type Aluno = {}

    const xCoef = data.pages[0].content.find(
      (element) => element.str == 'COEFICIENTE SEMESTRAL',
    ).x;
    let yHistorico = data.pages[0].content.find(
      (element) => element.str == 'Histórico Escolar Analítico',
    ).y;
    const yCabecalho = data.pages[0].content.find(
      (element) => element.str == 'CH',
    ).y;

    const sortFunc = (a, b) => {
      if (a.y - b.y < 0) return -1;
      if (a.y - b.y > 0) return 1;
      return a.x - b.x;
    };
    const aluno = { xCabecalho: undefined, periodos: undefined };
    let cabecalho = false;
    let first = 0;
    let last = 0;
    const queue = {};
    data.pages[0].content
      .filter(
        (element) =>
          element.y > yHistorico &&
          element.y < yCabecalho &&
          element.str != ' ' &&
          element.str != '',
      )
      .sort(sortFunc)
      .forEach((element) => {
        if (yHistorico != element.y) {
          cabecalho = !cabecalho;
          yHistorico = element.y;
        }
        if (cabecalho) {
          aluno[element.str] = undefined;
          queue[last++] = element.str;
        } else {
          aluno[queue[first++]] = element.str;
        }
      });
    aluno.xCabecalho = {};

    data.pages[0].content
      .filter((element) => element.y == yCabecalho && element.str != ' ')
      .forEach((element) => (aluno.xCabecalho[element.str] = element.x));
    aluno.periodos = {};
    let periodo = undefined;
    let inPeriodo = false;
    let indexDisciplina = -1;
    for (const page of data['pages']) {
      page.content
        .filter(
          (element) =>
            element.str != '' && element.str != ' ' && element.y > yCabecalho,
        )
        .sort(sortFunc)
        .forEach((element) => {
          if (
            !inPeriodo &&
            element.x == aluno.xCabecalho['Período'] &&
            element.str != 'Excepcional' &&
            !element.str.includes(':')
          ) {
            inPeriodo = true;
            periodo =
              element.str.includes('/1') || element.str.includes('/2')
                ? element.str
                : element.str + 'Excepcional';
            aluno.periodos[periodo] = { disciplinas: [] };
          } else if (inPeriodo) {
            if (element.x == aluno.xCabecalho['Código']) {
              indexDisciplina =
                aluno.periodos[periodo].disciplinas.push({
                  Código: undefined,
                }) - 1;
              aluno.periodos[periodo].disciplinas[indexDisciplina]['Código'] =
                element.str;
            } else if (element.x == aluno.xCabecalho['Nome']) {
              aluno.periodos[periodo].disciplinas[indexDisciplina]['Nome'] =
                element.str;
            } else if (element.x == aluno.xCabecalho['Média']) {
              aluno.periodos[periodo].disciplinas[indexDisciplina]['Média'] =
                element.str;
            } else if (element.x == aluno.xCabecalho['Conceito']) {
              aluno.periodos[periodo].disciplinas[indexDisciplina]['Conceito'] =
                element.str;
            } else if (element.x == aluno.xCabecalho['CH']) {
              aluno.periodos[periodo].disciplinas[indexDisciplina]['CH'] =
                element.str;
            } else if (element.x == xCoef) {
              aluno.periodos[periodo]['COEFICIENTE SEMESTRAL'] = undefined;
            } else if (
              aluno.periodos[periodo].hasOwnProperty('COEFICIENTE SEMESTRAL')
            ) {
              aluno.periodos[periodo]['COEFICIENTE SEMESTRAL'] = element.str;
              aluno.periodos[periodo]['Número de Disciplinas'] =
                indexDisciplina + 1;
              inPeriodo = false;
            }
          } else {
            console.log('fora periodo:');
            console.log(element);
          }
        });
    }

    console.log(aluno);
    console.log(aluno.periodos['2019/2'].disciplinas);
  })
  .catch((err) => console.log(err));