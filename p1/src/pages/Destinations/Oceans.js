import destinations from "../../Data/destinations";
import PhotoCard from "../../component/PhotoCard";

function Oceans() {

  const oceans = destinations.filter(
    item => item.category === "Oceans"
  );

  return (
    <div>

      <h1>Oceans</h1>

      <div className="gallery">

        {
            oceans.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>
  );
}

export default Oceans;
