import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, Select, MenuItem, TextField } from '@mui/material';
import './styles.css';

const PhotoList = ({ onPhotoClick }) => {
  const [photos, setPhotos] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=${pageSize}&_sort=${sortBy}&q=${searchTerm}`)
      .then(response => {
        setPhotos(response.data);
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
      });
  }, [currentPage, pageSize, sortBy, searchTerm]);

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

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="photo-list-container">
      <Typography variant="h5" gutterBottom>Clique na imagem desejada para exibir os detalhes:</Typography>
      <TextField
        label="Buscar por nome"
        value={searchTerm}
        onChange={handleSearchTermChange}
        style={{ marginBottom: '10px' }}
      />
      <div className="controls">
        <div className="search">
          <Typography variant="body1">Itens por página:</Typography>
          <Select value={pageSize} onChange={handlePageSizeChange}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
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
                <Typography gutterBottom variant="h7" component="div">
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
