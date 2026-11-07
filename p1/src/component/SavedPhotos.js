import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard"; 
import '../Style/SavedPhotos.css';

import  destinations  from "../Data/destinations"; 

function SavedPhotos() {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("savedPhotos")) || [];

    const filteredPhotos = destinations.filter(photo => 
      savedIds.includes(photo.id)
    );

    setSavedList(filteredPhotos);
  }, []);

  return (
    <div className="saved-photos-page">
      <h2>Your Saved Collection</h2>
      
      {savedList.length === 0 ? (
        <p className="empty-message">You haven't saved any locations yet. 🤍</p>
      ) : (
        <div className="photos-grid">
          {savedList.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedPhotos;
