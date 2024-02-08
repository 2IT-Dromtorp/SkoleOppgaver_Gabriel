import React from 'react';
import { useParams } from 'react-router-dom';
import images from './images.json'; // Adjust the path as necessary

function ImagePage() {
  const { id } = useParams();
  const image = images.find(img => img.id === id);
  
  return (
    <div>
      {image ? (
        <>
          <h1>Image {id}</h1>
          <img src={image.url} alt={`Image ${id}`} />
        </>
      ) : (
        <p>Image not found</p>
      )}
    </div>
  );
}

export default ImagePage;
