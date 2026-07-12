import destinations from "../../Data/destinations";
import PhotoCard from "../../component/PhotoCard";

function Beaches() {

  const beaches = destinations.filter(
    item => item.category === "Beaches"
  );

  return (
    <div>

      <h1>Beaches</h1>

      <div className="gallery">

        {beaches.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>
  );
}

export default Beaches;