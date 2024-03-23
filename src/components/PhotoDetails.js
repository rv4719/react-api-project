/*
   Este componente exibe os detalhes de uma foto selecionada.
   Utiliza o Material-UI para renderizar componentes como `Container`, `Card`, `CardMedia`, `CardContent`, `Typography`, etc.
   Recebe um objeto `photo` como propriedade e exibe seus detalhes, como título, ID e ID do álbum.
*/

import React, { useState } from 'react';
import { Container, Card, CardMedia, CardContent, Typography, TextField, Button } from '@mui/material';
import './styles.css';

const PhotoDetails = ({ photo }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState({});
  const photoId = photo ? photo.id : null;

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== '') {
      setComments({
        ...comments,
        [photoId]: [...(comments[photoId] || []), comment]
      });
      setComment('');
    }
  };

  return (
    <Container maxWidth="md" className="photo-details-container">
      {photo && (
        <div>
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
              <TextField
                label="Digite seu comentário"
                value={comment}
                onChange={handleCommentChange}
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
                Comentar
              </Button>
            </CardContent>
          </Card>
          <div>
            <Typography variant="h6" gutterBottom>Comentários:</Typography>
            {comments[photoId] && comments[photoId].map((comment, index) => (
              <Typography key={index} variant="body2" gutterBottom>
                {comment}
              </Typography>
            ))}
          </div>
        </div>
      )}
    </Container>
  );
};

export default PhotoDetails;
