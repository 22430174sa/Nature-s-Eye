import destinations from "../../Data/destinations";
import PhotoCard from "../../Components/PhotoCard";

function ExploreAll() {

  return (

    <div>

      <h1>Explore All Destinations</h1>

      <div className="gallery">

        {destinations.map(photo => (

          <PhotoCard
            key={photo.id}
            photo={photo}
          />

        ))}

      </div>

    </div>

  );
}

export default ExploreAll;