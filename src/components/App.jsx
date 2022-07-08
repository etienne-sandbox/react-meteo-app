import { useState } from "react";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Weather } from "./Weather";

export function App() {
  const [places, setPlaces] = useState([]);
  const [selectedPlaceId, setSelectedPlaceId] = useState(undefined);

  const selectedPlace = selectedPlaceId ? places.find((p) => p.id === selectedPlaceId) ?? null : null;

  const onToggle = (place) => {
    setPlaces((prev) => {
      const exists = prev.find((p) => p.id === place.id);
      if (exists) {
        return prev.filter((p) => p.id !== place.id);
      }
      return [...prev, place];
    });
  };

  return (
    <div className="App">
      <div className="App--inner">
        <Header />
        <div className="App--content">
          <Menu
            places={places}
            selectedPlaceId={selectedPlaceId}
            onPlaceClick={(placeId) => setSelectedPlaceId(placeId)}
          />
          <main>
            {selectedPlaceId === undefined ? null : selectedPlace === null ? (
              <Search places={places} onToggle={onToggle} />
            ) : (
              <Weather place={selectedPlace} key={selectedPlace.id} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
