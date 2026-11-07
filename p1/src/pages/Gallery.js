import React from 'react';
// 1. Import your destinations data list
import  destinations  from '../Data/destinations'; 
// 2. Import your custom PhotoCard component
import PhotoCard from '../component/PhotoCard'; 
import '../Style/Gallery.css'; 

export default function Gallery() {
  // Flattening mechanism: If your data is structured as category arrays (e.g. destinations.mountains, destinations.beaches),
  // this extracts all separate internal lists into one collective master photo array.
  const allPhotos = Array.isArray(destinations)
    ? destinations.flatMap(dest => dest.photos || dest)
    : Object.values(destinations).flat();

  return (
    <div className="gallery-page-container">
      <header className="gallery-heading-area">
        <h1>The Master Collection</h1>
        <p>Browse through every captured hidden wonder across all landscapes.</p>
      </header>

      {/* Grid rendering EVERY photo using your reusable PhotoCard component */}
      <div className="gallery-layout-grid">
        {allPhotos.map((photo, index) => (
          <PhotoCard 
            key={photo.id || index} 
            photo={photo}
             showPhotographer={true} // Directly passing the clean photo object into your card
          />
        ))}
      </div>
    </div>
  );
}
