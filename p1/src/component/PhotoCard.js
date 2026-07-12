import { useEffect, useState } from "react";
import '../Style/PhotoCard.css';

function PhotoCard({ photo }) {

  const [saved, setSaved] = useState(false);

  useEffect(() => {

    const savedPhotos =
      JSON.parse(localStorage.getItem("savedPhotos")) || [];

    setSaved(savedPhotos.includes(photo.id));

  }, [photo.id]);

  const handleSave = () => {

    let savedPhotos =
      JSON.parse(localStorage.getItem("savedPhotos")) || [];

    if (saved) {

      savedPhotos = savedPhotos.filter(id => id !== photo.id);

    } else {

      savedPhotos.push(photo.id);

    }

    localStorage.setItem(
      "savedPhotos",
      JSON.stringify(savedPhotos)
    );

    setSaved(!saved);
  };

  return (

    <div className="photo-card">

      <img src={photo.image} alt={photo.title} />

      <h3>{photo.title}</h3>
       <p className="photo-description">{photo.description}</p>
       

      <button onClick={handleSave}>

        {saved ? "❤️ Saved" : "🤍 Save"}

      </button>

    </div>

  );
}

export default PhotoCard;