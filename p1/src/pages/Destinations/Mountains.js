import destinations from "../../Data/destinations";
import PhotoCard from "../../component/PhotoCard";

function Mountains() {

  const mountains = destinations.filter(
    item => item.category === "Mountains"
  );

  return (
    <div>

      <h1>Mountains</h1>

      <div className="gallery">

        {mountains.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>
  );
}

export default Mountains;