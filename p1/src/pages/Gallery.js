import React from 'react';

import  destinations  from '../Data/destinations'; 

import PhotoCard from '../component/PhotoCard'; 
import '../Style/Gallery.css'; 

export default function Gallery() {
 
  const allPhotos = Array.isArray(destinations)
    ? destinations.flatMap(dest => dest.photos || dest)
    : Object.values(destinations).flat();

  return (
    <div className="gallery-page-container">
      <header className="gallery-heading-area">
        <h1>The Master Collection</h1>
        <p>Browse through every captured hidden wonder across all landscapes.</p>
      </header>

      <div className="gallery-layout-grid">
        {allPhotos.map((photo, index) => (
          <PhotoCard 
            key={photo.id || index} 
            photo={photo}
             showPhotographer={true} 
          />
        ))}
      </div>
    </div>
  );
}
