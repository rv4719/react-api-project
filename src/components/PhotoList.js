/* - Este componente é responsável por exibir a lista de fotos.
   - Utiliza o Material-UI para renderizar componentes como `Grid`, `Card`, `Select`, `MenuItem`, etc.
   - Utiliza estados para controlar o número de itens por página, a página atual e o critério de ordenação.
   - Usa o hook `useEffect` para buscar fotos da API quando os estados relevantes mudam.
   - Fornece controles para selecionar o número de itens por página e o critério de ordenação.
   - Cada foto é representada por um cartão clicável que permite visualizar os detalhes da foto.
*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Select, MenuItem } from '@mui/material';
import './styles.css';

const PhotoList = ({ onPhotoClick }) => {
  const [photos, setPhotos] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${pageSize}&_sort=${sortBy}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, [currentPage, pageSize, sortBy]);

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="photo-list-container">
      <Typography variant="h5" gutterBottom>Clique na imagem desejada abaixo para ver os detalhes:</Typography>
      <div className="controls">
        <div className="pagination">
          <Typography variant="body1">Itens por página:</Typography>
          <Select value={pageSize} onChange={handlePageSizeChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
            <MenuItem value={500}>500</MenuItem>
            <MenuItem value={1000}>1000</MenuItem>
            <MenuItem value={-1}>Todas</MenuItem>
          </Select>
        </div>
        <div className="sort">
          <Typography variant="body1">Ordenar por:</Typography>
          <Select value={sortBy} onChange={handleSortChange}>
            <MenuItem value="">Padrão</MenuItem>
            <MenuItem value="title">Nome</MenuItem>
            <MenuItem value="id">ID</MenuItem>
            <MenuItem value="albumId">Album ID</MenuItem>
          </Select>
        </div>
      </div>
      <Grid container spacing={3} className="photo-list">
        {photos.map(photo => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <Card
              className="photo-card"
              onClick={() => onPhotoClick(photo)}
            >
              <CardMedia
                component="img"
                height="200"
                image={photo.thumbnailUrl}
                alt={photo.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {photo.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PhotoList;
