import React from 'react';
import { Container, Card, CardMedia, CardContent, Typography } from '@mui/material';
import './styles.css';

const PhotoDetails = ({ photo }) => {
  return (
    <Container maxWidth="md" className="photo-details-container">
      <Typography variant="h5" gutterBottom>Detalhes da Imagem:</Typography>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={photo.url}
          alt={photo.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="photo-details-title"
          >
            {photo.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" className="photo-details-text">
            ID: {photo.id}
          </Typography>
          <Typography variant="body1" color="text.secondary" className="photo-details-text">
            Album ID: {photo.albumId}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PhotoDetails;
