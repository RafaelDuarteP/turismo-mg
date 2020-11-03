# turismo-mg
Projeto acadêmico para a disciplina TIAW na PUC Minas - 2020/2




## Instruções para utilização do bundler
Este projeto utiliza o RollupJS para compilação de JS e SASS.

Para saber mais sobre o RollupJS acesse [a documentação](https://rollupjs.org/guide/en/).


**Instalação:**
- O RollupJS requer o Node e o NPM instalados. [Informações sobre instalação aqui](https://phoenixnap.com/kb/install-node-js-npm-on-windows).

- Com o Node e NPM instalados, de dentro da pasta scripts, instale as dependências do projeto:
`npm install`


**Rodando o bundler:**
- Para apenas compilar o código, utilize: `npm run build`
- Para compilar o código com hot reloading, utilize: `npm run watch`


**Código fonte**

O código fonte dos scripts JS do projeto estão na pasta *scripts/src/scripts*. Todos os módulos ou componentes criados devem ser importados no arquivo main.js para surtirem algum efeito nas páginas.

As folhas de estilo geradas pelo bundler são criadas a partir das folhas SASS contidas em *scripts/src/styles*. Todas as folhas criadas devem ser importadas pelo arquivo main.scss.

A pasta templates contém templates html usados para injetar componentes dinamicamente a partir do JS. A sintaxe específica utilizada por ser consultada na documentação do plugin [posthtml](https://www.npmjs.com/package/rollup-plugin-posthtml-template).


**Output**

O código compilado é salvo na pasta *scripts/build*.