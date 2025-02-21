import { useState, useEffect, useRef, useCallback } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button, Alert } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useAddToBasket } from "../../store/GlobalStates";

// Configure Leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const DEFAULT_CENTER = [50.4165, -3.7038];
const DEFAULT_ZOOM = 4;
const ZOOM_LEVEL = 13;

const MyMap = () => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const userMarkerRef = useRef(null);
  const selectedMarkerRef = useRef(null);
  const watchIdRef = useRef(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [geolocationEnabled, setGeolocationEnabled] = useState(false);

  // Function to update or create the selected marker
  const updateSelectedMarker = useCallback((lat, lng) => {
    if (selectedMarkerRef.current) {
      selectedMarkerRef.current.setLatLng([lat, lng]);
    } else {
      selectedMarkerRef.current = L.marker([lat, lng])
        .bindPopup("Selected Location")
        .addTo(mapInstance.current);
    }
    mapInstance.current.setView([lat, lng], ZOOM_LEVEL);
  }, []);

  // Initialize map once
  useEffect(() => {
    mapInstance.current = L.map(mapRef.current, {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      mapInstance.current
    );

    // Add click event handler for selecting a location
    mapInstance.current.on("click", (e) => {
      const { lat, lng } = e.latlng;
      setInputValue(`${lat.toFixed(4)}, ${lng.toFixed(4)}`);
      updateSelectedMarker(lat, lng);
    });

    return () => {
      mapInstance.current.off("click");
      mapInstance.current.remove();
      navigator.geolocation.clearWatch(watchIdRef.current);
    };
  }, [updateSelectedMarker]);

  // Handle geolocation updates
  const updateUserLocation = useCallback((coords) => {
    const newLocation = [coords.latitude, coords.longitude];
    if (userMarkerRef.current) {
      userMarkerRef.current.setLatLng(newLocation);
    } else {
      userMarkerRef.current = L.marker(newLocation)
        .bindPopup("Your Location")
        .addTo(mapInstance.current);
    }
    mapInstance.current.setView(newLocation, ZOOM_LEVEL);
  }, []);

  // Toggle geolocation
  const handleGeolocationToggle = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    if (geolocationEnabled) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      setGeolocationEnabled(false);
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }
    } else {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (position) => updateUserLocation(position.coords),
        (err) => setError(`Error getting location: ${err.message}`),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
      setGeolocationEnabled(true);
    }
  }, [geolocationEnabled, updateUserLocation]);

  //this to pass location to Checkout form;
  const setTakeLocationLongAndAlt= useAddToBasket(
  (state) => state.setTakeLocationLongAndAlt
  );
  useEffect(()=>{
 setTakeLocationLongAndAlt(inputValue)
  },[inputValue])

  return (
    <div className="w-full h-96 relative rounded-lg z-10 overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />

      <div className="absolute top-[85%] left-[50%] translate-x-[-50%] z-[1000] space-y-2 max-w-[280px] w-full ">
        <Button
          fullWidth
          className={
            "!text-[0.9rem]  " +
            (!geolocationEnabled
              ? "!bg-greenPrimary"
              : "!bg-gray-300 !text-greenPrimary")
          }
          variant="contained"
          onClick={handleGeolocationToggle}
          startIcon={<LocationOnIcon />}
        >
          {geolocationEnabled ? "Disable Geolocation" : "Enable Geolocation"}
        </Button>
        {error && (
          <Alert severity="error" className="mt-2">
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MyMap;
