"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent() {
    return (
        <MapContainer
            center={[48.8566, 2.3522]}
            zoom={13}
            style={{ height: "250px", width: "100%" }}
        >
            {/* Ajouter un fond de carte */}
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Ajouter un marqueur sur Paris */}
            <Marker position={[48.8566, 2.3522]}>
                <Popup>Paris, France</Popup>
            </Marker>
        </MapContainer>
    );
}
