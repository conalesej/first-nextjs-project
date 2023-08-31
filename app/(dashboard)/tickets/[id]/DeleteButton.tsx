"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";

interface IDeleteButton {
  id: number;
}
const DeleteButton: React.FC<IDeleteButton> = ({ id }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    setIsLoading(true);

    const res = await fetch(
      `${window.location.protocol}//${window.location.host}/api/tickets/${id}`,
      {
        method: "DELETE",
      }
    );
    const json = await res.json();

    if (json.error) setIsLoading(false);
    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
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
