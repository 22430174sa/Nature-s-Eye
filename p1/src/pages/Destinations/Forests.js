import destinations from "../../Data/destinations";
import PhotoCard from "../../component/PhotoCard";

function Forests() {

  const forests = destinations.filter(
    item => item.category === "Forests"
  );

  return (
    <div>

      <h1>Forests</h1>

      <div className="gallery">

        {forests.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>
  );
}

export default Forests;
