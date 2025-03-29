import { React, useState, useEffect } from "react";
import "./crew.css";

export default function Crew() {
  const [crew, setCrew] = useState([]);
  const [crewImg, setCrewImg] = useState(
    "../src/assets/image/crew/image-douglas-hurley.png"
  );
  const [crewRole, setCrewRole] = useState("Commander");
  const [crewName, setCrewName] = useState("Douglas Hurley");
  const [crewBio, setCrewBio] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((datas) => {
        setCrew(datas.crew);
      });
  });

  const crewHandeler = (data) => {
    setCrewImg(data.images.png);
    setCrewRole(data.role);
    setCrewName(data.name);
    setCrewBio(data.bio);
  };

  return (
    <div className="crew-container">
      <h2 className="crew-header">02 Meet your crew</h2>
      <div className="crew-btn-container">
        {crew.map((data) => (
          <button
            key={data.name}
            onClick={() => crewHandeler(data)}
            className="crew-btn"
          ></button>
        ))}
      </div>

      <article className="crew-info-content">
        <h4 className="crew-role">{crewRole}</h4>
        <h1 className="crew-name">{crewName}</h1>
        <p className="crew-bio">{crewBio}</p>
      </article>

      <picture className="crew-image-container">
        <img src={crewImg} alt={crewName} />
      </picture>
    </div>
  );
}
