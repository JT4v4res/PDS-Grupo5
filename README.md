# Projeto

Desenvolvido focado em discentes e professores universitários, nosso sistema é um sistema focado em auxiliar o aluno em seu planejamento de disciplinas do semestre, utilizando um sistema de recomendação que leva em consideração horário disponível do discente, grau de dificuldade médio da disciplina baseado em feedback de discentes anteriores, bem como a maior praticidade para divulgação de oportunidades de estágios, vagas de emprego, seletivas para projetos de pesquisa e extensão.

### Problemas a serem sanados

1) Sobrecarga de informações: Os discentes geralmente enfrentam a tarefa de analisar manualmente um grande número de disciplinas, horários e combinações possíveis para realizar a matrícula. Isso pode ser demorado e confuso, especialmente quando há várias restrições a serem consideradas, como pré-requisitos, conflitos de horários e disponibilidade de turnos.

2) Planejamento inadequado: Os alunos podem enfrentar dificuldades ao tentar planejar adequadamente sua carga horária para garantir que estejam cumprindo todas as disciplinas necessárias para a conclusão do curso. Isso pode resultar em atrasos na formação ou até mesmo na escolha de disciplinas desnecessárias, levando a uma carga excessiva de trabalho em determinados semestres.

3) Pouca transparência e dificulade na divulgação de vagas de projetos de pesquisa, extensão e vagas de emprego. Isso pode resultar na perda de oportunidades que se complementam ou atendem a seus interesses acadêmicos.

### Expectativas

1)  Espera-se que o sistema de recomendação agilize e simplifique o processo de seleção de disciplinas, fornecendo aos alunos recomendações personalizadas com base em suas preferências, disponibilidade de horários e necessidades acadêmicas. Isso deve resultar em uma matrícula mais eficiente, economizando tempo e esforço para os alunos.

2) Maior visibilidade e descoberta de oportunidades: Espera-se que o sistema ajude os alunos a explorar uma variedade de oportunidades e combinações possíveis, proporcionando uma visão mais abrangente das opções disponíveis. Isso pode incluir a sugestão de disciplinas relacionadas aos interesses acadêmicos do aluno ou que complementem sua formação de maneira significativa, como pesquisa, extensão ou estágios.

3) Feedback e iteração contínua: À medida que os alunos utilizam o sistema e fazem suas matrículas, espera-se que forneçam feedback sobre a eficácia das recomendações. Com base nesse feedback, o sistema pode ser aprimorado e refinado continuamente para oferecer recomendações cada vez mais precisas e relevantes.

## Personas


### Discente

O discente é a pessoa que está na universidade buscando cursar sua graduação da melhor maneira possível, ao mesmo tempo que pode estar interessado em oportunidades, sejam estas de estágio ou efetivo em empresas públicas e privadas ou em busca de oportunidades para contribuir com projetos de pesquisa e de extensão.

Este espera conseguir cursar sua graduação de maneira que se atrase o mínimo possível, ao mesmo tempo que busca desenvolver melhor suas competências profissionais, de modo a adquirir experiência profissional. 

### Docente

O docente é a pessoa que está na universidade buscando lessionar as aulas em suas disciplinas de forma que não prejudique a si mesmo e aos discentes, também é responsável pela produção acadêmica nos quaisquer laboratórios ao qual faça parte, necessitando, periodicamente, da seleção de discentes para atuação em seus projetos de pesquisa.

O docente espera otimizar seu tempo da melhor maneira possível além da expectativa de divulgar de maneira simplificada as vagas disponíveis em seus projetos, bem como as seletivas para tal. 

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
   *Severidade Alta e Probabilidade Alta*.

      Ações para mitigação do risco:

      * Implementar um serviço de autenticação na API, definindo e restringindo acesso aos endpoints via permissões de usuário de nível de autoridade.
      * Permitir que somente usuários com nível de Administrador criem outros usuários administradores.

4. **Risco 4**: A comunicação entre front, back e modelo de recomendação pode conter alguns dados sensíveis, a exposição desses dados pode levar a riscos de ataque man in the middle, ocasionando em furto de informações.
   *Severidade Alta e Probabilidade Alta*.

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
