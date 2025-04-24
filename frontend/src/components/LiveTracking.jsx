import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_API;

const LiveTracking = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const [currentPosition, setCurrentPosition] = useState({
    lng: 0,
    lat: 0,
  });

  // Initialize map only once
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const initialCoords = { lat: latitude, lng: longitude };
      setCurrentPosition(initialCoords);

      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [longitude, latitude],
        zoom: 15,
      });

      // Add marker
      markerRef.current = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(mapRef.current);
    });
  }, []);

  // Watch user's location
  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords;
      const newCoords = { lat: latitude, lng: longitude };
      setCurrentPosition(newCoords);

      if (markerRef.current) {
        markerRef.current.setLngLat([longitude, latitude]);
        mapRef.current?.flyTo({ center: [longitude, latitude], speed: 0.5 });
      }
    });

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        ref={mapContainerRef}
        style={{ width: "100%", height: "100%", borderRadius: "8px" }}
      />
    </div>
  );
};

export default LiveTracking;
