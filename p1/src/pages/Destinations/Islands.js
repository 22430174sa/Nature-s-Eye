import destinations from "../../Data/destinations";
import PhotoCard from "../../component/PhotoCard";

function Islands() {

  const islands = destinations.filter(
    item => item.category === "Islands"
  );

  return (
    <div>

      <h1>Islands</h1>

      <div className="gallery">

        {islands.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>
  );
}

export default Islands;
