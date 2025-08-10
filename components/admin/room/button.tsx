import { deleteRoom } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import { IoPencil, IoTrashOutline } from "react-icons/io5";

export const DeleteButton = ({ id, image }: { id: string; image: string }) => {
  const DeleteRoomWithId = deleteRoom.bind(null, id, image);
  return (
    <form action={DeleteRoomWithId}>
      <button
        type="submit"
        className="rounded-sm p-1 hover:bg-gray-200 cursor-pointer">
        <IoTrashOutline className="size-5" />
      </button>
    </form>
  );
};




export const EditButton = ({ id }: { id: string }) => {
  return (
    <Link 
        href={`/admin/room/edit/${id}`}
        className="rounded-sm p-1 hover:bg-gray-200"
    >
        <IoPencil className="size-5" />
    </Link>
  );
};

