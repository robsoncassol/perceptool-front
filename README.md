## Setup inicial

Inicialmente é necessário instalar o NodeJS (https://nodejs.org/en/). 

Após instalado, abra o terminal nesta pasta e rode o seguinte comando para instalar as dependências: 
```sh
npm install
```

A pasta `node_modules` será criada. Ela armazena todas as dependências.

## Rodando o projeto

Digite o seguinte comando para subir um servidor em node na porta 3000:
```sh
npm run start
```

Qualquer alteração no código fonte irá recarregar a página.

## Build

Digite o seguinte comando para realizar o processo de build:
```sh
gulp buildAll
```

Esse processo irá realizar o build padrão do `create-react-app`, além de compilar o SASS e mover o resultado final para a pasta `src/main/resources/public`.

## Comandos adicionais

O `gulp` está configurado também para realizar a task de `watch` através do seguinte comando:
```sh
gulp watch
```

Isso pode servir como uma alternativa ao servidor node mencionado anteriormente, qualquer modificação irá ativar o comando de `build`.

O desvantagem desse método é que será necessário atualizar a pasta onde os arquivos estão através do Eclipse.