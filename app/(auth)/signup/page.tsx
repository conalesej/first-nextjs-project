"use client";
import React from "react";
import AuthForm from "../AuthForm";

const Signup = () => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    console.log("user signup", { email, password });
  };
  return (
    <main>
      <AuthForm handleSubmit={handleSubmit} />
      <h2 className="text-center">Signup</h2>
    </main>
  );
};

export default Signup;
