# Título: Test_Automation_Cypress_TheInternet

## Descrição
O projeto contém algumas suites de testes automatizados em Cypress para validação de algumas funcionalidades do site [The Internet](https://the-internet.herokuapp.com/). Sendo elas:

- Validação de Login
- Validação após download de elemento em tela
- Captura e log de elemento dentro de frames

## Pré Requisitos

- Ter a versão 18 do Node.js

Para verificar se o Node já está instalado no computador, no terminal utilize o comando:

node -v

Também é necessário ter instalado o Node Packge Maneger, para verificar se já está instalado e a versão, digite no terminal o comando:

npm -v


Caso necessário, os downloads podem ser realizados através das seguintes URLs:

- [Node](https://nodejs.org/en)
- [npm](https://www.npmjs.com/package/download)

## Executando Teste

Com o projeto aberto na IDE, basta utilizar os comandos a seguir no terminal, para que sejam baixadas as dependências e seja inicializada as suites de testes.

Para abrir a interface gráfica do Cypress, rode no terminal o comando:

npx cypress open

Para rodar os testes através do terminal, utilize o comando:

npx cypress run

## Verificação dos Reports

Ao rodar um teste, automaticamente será gerado um report em HTML e JSON, contendo os detalhes do Teste.

O report pode ser acessado na pasta "cypress\reports\html" dentro do projeto.

**Importante**: A cada nova execução de teste, os arquivos da pasta são apagados e reinseridos conforme resultado no novo teste.


