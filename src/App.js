/*

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
