import React from "react";

const CardList = ({ time }) => {
  const Card = () => {
    return time.map((prompts, idx) => {
      return (
        <tr key={idx} className="recent_messagerow">
          <td className="recent_messagedate">
            {new Date(prompts.LastSent).toDateString()}
          </td>
          <td className="recent_messageprompt">{prompts.Prompt}</td>
        </tr>
      );
    });
  };
  return (
    <div className="card_text">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="all_recentmessages">
          <Card />
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
