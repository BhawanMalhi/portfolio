import "./portfolio.scss";
import listDetails from "../../data/details.json";
import List from "../List/List";
import { useEffect, useState } from "react";
export default function Portfolio() {
  const [active, setActive] = useState("Astronomy Image");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (active) {
      case "Astronomy Image":
        setData(listDetails[0]);
        break;
      case "Trivia":
        setData(listDetails[2]);
        break;
      case "TravelTab":
        setData(listDetails[1]);
        break;
      case "Simon Game":
        setData(listDetails[3]);
        break;
      default:
        setData(listDetails[0]);
    }
  }, [active]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {listDetails.map((item) => (
          <List
            key={item.id}
            title={item.title}
            active={active === item.title}
            setActive={setActive}
            id={item.title}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">

         <a href={data.url} ><img src={data.src} alt={data.title} /></a>
         </div>
         <div className="info">
          <p>{data.discription}</p>
         </div>
      </div>
    </div>
  );
}
