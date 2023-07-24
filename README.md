# Projeto

Entrar na universidade representa uma mudança de paradigma na vida de qualquer pessoa. Esse processo pode ser turbulento, uma vez que a carga de responsabilidades e autonomia que recai sobre o indivíduo nessa fase tende a ser um fator dificultante.

No contexto acadêmico, o aumento da autonomia e das responsabilidades pode dificultar o planejamento adequado dos passos que o estudante deve tomar em sua vida acadêmica. Isso torna desafiadora a conciliação de seus compromissos acadêmicos com os externos, podendo levar à evasão do curso, algo que afeta diretamente o estudante e a universidade à qual está associado.

Nosso sistema tem como foco auxiliar o estudante, de forma que ele possa planejar seu semestre de acordo com suas necessidades de tempo e conciliação com atividades externas à universidade, bem como enfrentar imprevistos e dificuldades familiares. Além disso, fornecemos um panorama geral dos dados envolvendo as matérias, como taxa de aprovação, reprovação e quantidade de vagas ofertadas em relação ao número de alunos matriculados.

O diferencial do projeto é o uso de aprendizagem de máquina para conseguir equilibrar suas atribuições da vida cotidiana, seus horários disponíveis e circunstâncias inesperadas (acidente, morte na família, demissão, gravidez), de forma que o horário gerado a cada semestre seja o mais conveniente possível para o discente, seja qual for a condição que ele se encontre.

O objetivo deste sistema é fornecer suporte ao discente para que ele consiga concluir sua formação acadêmica em um tempo que lhe seja cabível.

#### Consequências

- Evasão
- Aumento de tempo do aluno na universidade
- Desmotivação

### Problemas a serem sanados

1) Sobrecarga de informações: Os discentes geralmente enfrentam a tarefa de analisar manualmente um grande número de disciplinas, horários e combinações possíveis para realizar a matrícula. Isso pode ser demorado e confuso, especialmente quando há várias restrições a serem consideradas, como pré-requisitos, conflitos de horários e disponibilidade de turnos, além de eventuais outras tarefas que o mesmo possua fora da universidade como a parternidade ou maternidade, ou até mesmo uma gravidez.

2) Planejamento inadequado: Os alunos podem enfrentar dificuldades ao tentar planejar adequadamente sua carga horária para garantir que estejam cumprindo todas as disciplinas necessárias para a conclusão do curso. Isso pode resultar em atrasos na formação ou até mesmo na escolha de muitas disciplinas com elevado grau de dificuldade, levando a uma carga excessiva de trabalho em determinados semestres.

### Expectativas

1)  Espera-se que o sistema de recomendação agilize e simplifique o processo de seleção de disciplinas, fornecendo aos alunos recomendações personalizadas com base em suas preferências, disponibilidade de horários e necessidades acadêmicas. Isso deve resultar em uma matrícula mais eficiente, economizando tempo e esforço para os alunos, além de auxiliar aos coordenadores de curso no processo de aconselhamento dos alunos, quando o mesmo se fizer necessário.
   
2) Feedback e iteração contínua: À medida que os alunos utilizam o sistema e fazem suas matrículas, espera-se que forneçam feedback sobre a eficácia das recomendações. Com base nesse feedback, o sistema pode ser aprimorado e refinado continuamente para oferecer recomendações cada vez mais precisas e relevantes.

3) Auxílio e redução do tempo de trabalho para coordenadores de curso: O coordenador de curso acumula funções muito burocráticas, que demandam tempo, principalmente quando precisa avaliar estatísticas acerca de inúmeras matérias, um sistema que forneça estatísticas mais precisas e resumidas, principalmente de disciplinas que estejam enfrentando "gargalo" no curso, devido ao seu alto grau de dificuldade, podem auxiliar o coordenador no planejamento semestral e na distribuição de docentes entre as disciplinas ofertadas no curso, oferencedo um direcionamento maior e reduzindo o tempo que o mesmo precisa para fazer tal análise, ainda mais levando em consideração um feedback fornecido diretamente pelos próprios discentes.

## Personas

### Discente

O discente é a pessoa que está na universidade buscando cursar sua graduação da melhor maneira possível.

O discente possui as seguintes características:
- Possivelmente imaturo
- Dificuldades técnicas no curso
- Dificuldade de colocação profissional
- Desmotivação
- Possível falta de apoio familiar

## Marcos

Devemos entregar **pequenas versões frequentes**. 

### Marco 1 - 20/12/2022

Acreditamos que esse `Marco 1` vai conseguir `resultado esperado`. Saberemos que isso aconteceu com base em `métricas para validar a hipótese do negócio`.

#### Funcionalidades

- [x] Funcionalidade 1.
- [x] Funcionalidade 2.
- [x] Funcionalidade 3.

[Release Notes ](release_notes_1.md)

### Marco 2 - 20/01/2023

Acreditamos que esse `Marco 1` vai conseguir `resultado esperado`. Saberemos que isso aconteceu com base em `métricas para validar a hipótese do negócio`.

#### Funcionalidades 

- [x] Funcionalidade 1.
- [x] Funcionalidade 2.
- [ ] Funcionalidade 3.

[Release Notes ](release_notes_1.md)

## Riscos

1. **Risco 1**: O sistema pode enfrentar problemas de compatibilidade ou inconsistência ao analisar o PDF enviado pelo aluno. Isso pode ocorrer devido a diferentes formatos de PDF, estruturas variadas ou erros de extração de dados.
*Severidade Baixa e Probabilidade Alta*.

   Ações para mitigação do risco:

   * Implementar uma etapa de pré-processamento robusta que verifique e normalize os dados extraídos do PDF. Uso de NLP; Incluir o usuário na etapa de revisão e correção de dados extraídos.

2. **Risco 2**: O sistema pode recomendar combinações de disciplinas que não sejam viáveis para o aluno devido a conflitos de horários ou pré-requisitos não atendidos.
*Severidade Média e Probabilidade Alta*.

   Ações para mitigação do risco:

   * Implementar restrições no algoritmo de recomendação para garantir que as combinações propostas respeitem os horários e os pré-requisitos das disciplinas. Avaliar a melhor forma de obter os feedbacks sobre requisitos e complexidade da disciplina.
   * Fornecer opção de revisar e ajustar recomendações durante o período de matrícula no sistema acadêmico.

3. **Risco 3**: A API do sistema pode ficar disponível para acessos externos, possibilitando o acesso a dados sensíveis dos usuários.
   *Severidade Alta e Probabilidade Média*.

      Ações para mitigação do risco:

      * Implementar um serviço de autenticação na API, definindo e restringindo acesso aos endpoints via permissões de usuário de nível de autoridade.
      * Permitir que somente usuários com nível de Administrador criem outros usuários administradores.

4. **Risco 4**: A comunicação entre front, back e modelo de recomendação pode conter alguns dados sensíveis, a exposição desses dados pode levar a riscos de ataque man in the middle, ocasionando em furto de informações.
   *Severidade Alta e Probabilidade Média*.

      Ações para mitigação do risco:

      * Uso de criptografia para comunicação, cifrando os dados sensíveis, dificultando a leitura e interpretação dos mesmos.

## Componentes

### Aplicativo Web 
Aplicativo web composto por interfaces feitas com o uso de React, NestJS para criação da API do Back-end e transações com o SGBD MySQL.

### Algoritmo de classificação
Algoritmo de aprendizado de máquina utilizado para recomendar as disciplinas para os alunos.

## Stakeholders

Prof. Dr. Ranilson Paiva <br />
*Key User - Professor do Instituto de Computação da Universidade Federal de Alagoas - IC/UFAL* <br />
*ranilsonpaiva@ic.ufal.br* <br />

Prof. Dr. Rodrigo Paes <br />
*Key User - Professor do Instituto de Computação da Universidade Federal de Alagoas - IC/UFAL* <br />
*rodrigo@edge.ufal.br* <br />

Prof. Dr. Willy Tiengo <br />
*Key User - Professor do Instituto de Computação da Universidade Federal de Alagoas - IC/UFAL* <br />
*willy@ic.ufal.br* <br />

## Equipe

César Henrique Cicero <br />
*Desenvolvedor Back-end* <br />
*chc@ic.ufal.br* <br />
[Github César]()

João Vitor Santos Tavares <br />
*Gerente do projeto e Desenvolvedor Back-end* <br />
*jvst@ic.ufal.br* <br />
[Github João Tavares](https://github.com/JT4v4res)

Paloma da Silva Lacerda dos Santos <br />
*Desenvolvedora Front-end* <br />
*psls@ic.ufal.br* <br />
[Github Paloma](https://github.com/palomallacerda)

Thalyssa de Almeida Monteiro <br />
*Desenvolvedora Front-end* <br />
*tam@ic.ufal.br* <br />
[Github Thalyssa](https://github.com/thalyssa)

Yanka Raíssa Ribeiro da Silva <br />
*Cientista de Dados* <br />
*yrrs@ic.ufal.br* <br />
[Github Yanka](https://github.com/yrribeiro)
