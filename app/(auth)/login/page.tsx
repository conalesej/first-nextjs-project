"use client"
import React from "react";
import AuthForm from "../AuthForm";

const Login = () => {
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    e.preventDefault();
    console.log("user login", { email, password });
    
  };
  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
};

export default Login;
