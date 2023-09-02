"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { addTicket } from "../action";
import SubmitButton from "@/app/components/SubmitButton";

const CreateForm = () => {
  // const router = useRouter();

  // const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    // <form action="" className="w-1/2" onSubmit={handleSubmit}>
    <form action={addTicket} className="w-1/2">
      <label>
        <span>Title:</span>
        <input name="title" required type="text" />
      </label>
      <label>
        <span>Body:</span>
        <textarea name="body" required />
      </label>
      <label>
        <span>Priority:</span>
        <select name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <SubmitButton />
      {/* <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button> */}
    </form>
  );
};

export default CreateForm;
