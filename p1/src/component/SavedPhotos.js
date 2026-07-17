import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard"; // Adjust this import path based on your folders
import '../Style/SavedPhotos.css'; // We will create this simple layout file next

// Assuming you have all your card objects saved in an array inside a 'data.js' file
import  destinations  from "../Data/destinations"; 

function SavedPhotos() {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    // 1. Get the array of saved ID numbers from localStorage
    const savedIds = JSON.parse(localStorage.getItem("savedPhotos")) || [];

    // 2. Filter your complete database array to only keep items matching those IDs
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
