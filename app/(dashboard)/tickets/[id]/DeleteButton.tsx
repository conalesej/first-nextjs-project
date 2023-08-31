"use client";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

interface IDeleteButton {
  id: number;
}
const DeleteButton: React.FC<IDeleteButton> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleClick = async () => {
    setIsLoading(true);
    console.log(`${id}`);
  };
  return (
    <button className="btn-primary" disabled={isLoading} onClick={handleClick}>
      {isLoading ? (
        <>
          <TiDelete />
          Deleting..
        </>
      ) : (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteButton;
