import { notFound } from "next/navigation";
import React from "react";

const NotFound = () => {
  notFound(); // It will serve us the nearest not-found.tsx from this file
};

export default NotFound;
