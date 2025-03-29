import React, { useEffect, useState } from "react";
import "./Destination.css";

export default function Destination() {
  const [destination, setDestination] = useState([]);
  const [destinationImg, setDestinationImg] = useState("");
  const [planetName, setPlanetName] = useState("");
  const [planetDescription, setPlanetDescription] = useState("");
  const [planetDistance, setPlanetDistance] = useState("");
  const [planetTravel, setPlanetTravel] = useState("");

  const [activePlanet, setActivePlanet] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((datas) => {
        setDestination(datas.destinations);

        // set problem for default mode
        if (datas.destinations.length > 0) {
          const firstPlanet = datas.destinations[0];
          setDestinationImg(firstPlanet.images.png);
          setPlanetName(firstPlanet.name);
          setPlanetDescription(firstPlanet.description);
          setPlanetDistance(firstPlanet.distance);
          setPlanetTravel(firstPlanet.travel);
          setActivePlanet(firstPlanet.name);
        }
      });
  }, []);

  const planethandeler = (datas) => {
    setDestinationImg(datas.images.png);
    setPlanetName(datas.name);
    setPlanetDescription(datas.description);
    setPlanetDistance(datas.distance);
    setPlanetTravel(datas.travel);
    setActivePlanet(datas.name);
  };

  return (
    <div className="destination-container">
      <h2 className="planet-title">01 Pick your destination</h2>

      <picture className="planet-img-container">
        <img id="planet-img" src={destinationImg} alt={planetName} />
      </picture>

      <div className="planets-button-container">
        {destination.map((planet) => (
          <button
            className={`planets-button ${
              activePlanet === planet.name ? "active" : ""
            }`}
            onClick={() => planethandeler(planet)}
            key={planet.name}
          >
            {planet.name}
          </button>
        ))}
      </div>

      <div className="planet-info-container">
        <article className="planet-info">
          <h1 className="planet-info-title">{planetName}</h1>
          <p className="planet-info-description">{planetDescription}</p>
        </article>

        <div className="planet-num-info">
          <div>
            <h3 className="Avg-distance">Avg.distance</h3>
            <p className="Avg-distance-num">{planetDistance}</p>
          </div>

          <div>
            <h3 className="Est-travel-time">Est.travel time</h3>
            <p className="Est-travel-time-num">{planetTravel}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
