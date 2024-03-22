ACESSO PELA INTERNET: https://react-api-project-eight.vercel.app/

### Pré-requisitos:

1. **Node.js e npm**: Certifique-se de que o Node.js e o npm estão instalados na máquina.

###   Passo Opcional: Clonar este repositório 

### Passo 1: Configuração do Ambiente de Desenvolvimento

1. Abra o terminal ou prompt de comando.

2. Navegue até o diretório onde deseja criar o projeto.

### Passo 2: Inicialização do Projeto

1. Execute o seguinte comando para criar um novo aplicativo React:

    ```bash
    npx create-react-app nome-do-seu-app
    ```

    Substitua "nome-do-seu-app" pelo nome que deseja dar ao seu aplicativo.

2. Após a criação do projeto, navegue até o diretório do projeto:

    ```bash
    cd nome-do-seu-app
    ```

### Passo 3: Adição de Dependências

1. Como o projeto utiliza o Material-UI e o Axios, você precisa instalá-los. Execute o seguinte comando:

    ```bash
    npm install @mui/material @emotion/react @emotion/styled axios
    ```

    Isso instalará o Material-UI, bem como as dependências relacionadas ao estilo.

### Passo 4: Criação dos Componentes

1. No diretório `src` do seu projeto, crie dois arquivos: `PhotoList.js` e `PhotoDetails.js`.

2. Copie o código fornecido para `PhotoList.js` e `PhotoDetails.js`, respectivamente.

3. Crie um arquivo chamado `styles.css` no diretório `src` e cole o código CSS fornecido nele.

### Passo 5: Adaptação do Código

1. No arquivo `App.js`, remova o conteúdo existente e substitua-o pelo seguinte código:

    ```jsx
    import React from 'react';
    import PhotoList from './PhotoList';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Galeria de Fotos</h1>
          </header>
          <main>
            <PhotoList />
          </main>
        </div>
      );
    }

    export default App;
    ```

### Passo 6: Execução do Projeto

1. No terminal, dentro do diretório do projeto, execute o seguinte comando para iniciar o servidor de desenvolvimento:

    ```bash
    npm start
    ```

2. Agora, você pode abrir seu navegador e acessar `http://localhost:3000` para visualizar o aplicativo em execução.

