import React from "react";

const CardList = ({ time }) => {
  const Card = () => {
    return time.map((prompts) => {
      return (
        <tr>
          <p>{prompts.Prompt}</p>
        </tr>
      );
    });
  };
  return (
    <div className="card_text">
      <table>
        <Card />
      </table>
    </div>
  );
};

export default CardList;
