import React from "react";
import CardListEntry from "./CardListEntry.jsx";

const Recent5 = ({ topData }) => {
  const Cards = () => {
    let result = [];
    for (let time in topData) {
      result.push(
        <div className="recent_card">
          <div className="img_container">
            <img src={`./images/${time}.jpeg`} className="recent_cards_img" />
          </div>
          <CardListEntry time={topData[time]} />
        </div>
      );
    }
    return result;
  };
  return (
    <div className="cards_container">
      <Cards />
    </div>
  );
};

export default Recent5;
