import React from "react";

interface ICard {
  header: string;
  body: string;
}

const Card: React.FC<ICard> = ({ header, body }) => {
  return (
    <div className="card">
      <h3>{header}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;
