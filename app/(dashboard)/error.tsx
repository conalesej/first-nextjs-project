"use client";
import React from "react";

interface IError {
  error: any;
  reset: () => void;
}
const Error: React.FC<IError> = ({ error, reset }) => {
  return (
    <main className="text-center">
      <h2 className="text-4xl">Oh no!</h2>
      <p>{error.message}</p>
      <button onClick={reset} className="btn-primary mx-auto my-4">
        Maybe try again?
      </button>
    </main>
  );
};

export default Error;
