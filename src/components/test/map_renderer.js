import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./map_renderer.module.css";

const containerStyle = {
  width: "50%",
  height: "400px",
};

const center = {
  lat: -3.7183,
  lng: -38.5434,
};

const MapComponent = () => {
  return (

    <LoadScript googleMapsApiKey="AIzaSyBvwJw5pbsA4an1b_NIlHIw8WkliCxwcnk">
      
      <div className={styles.text}>
        mapinha do google uhuuulll!!
      </div>

      <div className={styles.mapa}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>
      </div>

    </LoadScript>

  );
};

export default MapComponent;
