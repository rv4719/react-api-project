/*
Principais Funcionalidades:
- Exibição de Lista de Fotos:
O componente PhotoList exibe uma lista de fotos em cartões clicáveis.
O usuário pode selecionar o número de fotos exibidas por página e a ordenação das fotos.
Paginação e Ordenação:

O usuário pode selecionar o número de itens por página entre várias opções.
O usuário pode ordenar as fotos por título, ID ou ID do álbum.

- Visualização de Detalhes da Foto:
Ao clicar em uma foto, o usuário pode ver seus detalhes, como título, ID e ID do álbum, no componente PhotoDetails.
Decisões de Design:

Usabilidade:
A interface fornece controles claros para selecionar o número de itens por página e a ordenação das fotos, melhorando a usabilidade do aplicativo.

Estilo Visual:
O Material-UI é utilizado para criar uma interface visualmente atraente e consistente.
Interatividade:
Os cartões de foto na lista são tornados clicáveis para permitir uma interação fácil e intuitiva.
Escalabilidade:
A aplicação é construída de forma a lidar com grandes conjuntos de dados, permitindo a paginação e a ordenação eficientes das fotos.
*/

import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import PhotoDetails from './components/PhotoDetails';
import { Container, Grid } from '@mui/material';

const App = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <Container maxWidth="lg">
      <h1>Bem-vindo à Galeria de Fotos!</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <PhotoList onPhotoClick={handlePhotoClick} />
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedPhoto && <PhotoDetails photo={selectedPhoto} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
