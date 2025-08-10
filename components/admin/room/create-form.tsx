"use client";

import { Amenities } from "@/app/generated/prisma";
import { saveRoom } from "@/lib/actions";
import { PutBlobResult } from "@vercel/blob";
import clsx from "clsx";
import Image from "next/image";
import { useActionState, useRef, useState, useTransition } from "react";
import { IoCloudUploadOutline, IoTrashOutline } from "react-icons/io5";
import { FadeLoader } from "react-spinners";

const CreateForm = ({ amenities }: { amenities: Amenities[] }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  const handleUpload = () => {
    if (!inputFileRef.current?.files) return null;
    const file = inputFileRef.current.files[0];
    const formData = new FormData();
    formData.set("file", file);

    startTransition(async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "PUT",
          body: formData,
        });
        const data = await response.json();
        if (response.status !== 200) {
          setMessage(data.message);
        }
        const img = data as PutBlobResult;
        setImage(img.url);
      } catch (error) {
        console.log(error);
      }
    });
  };

  const deleteImage = (image: string) => {
    startTransition(async () => {
      try {
        await fetch(`/api/upload/?imageUrl=${image}`, {
          method: "DELETE",
        });
        setImage("");
      } catch (error) {
        console.log(error);
      }
    });
  };


  const [state, formAction, isPending] = useActionState(saveRoom.bind(null, image), null);



  return (
    <form action={formAction}>
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Room name ---"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2"> {state?.error?.name} </span>
            </div>
          </div>

          <div className="mb-4">
            <textarea
              name="description"
              rows={8}
              className="py-2 px-4 rounded-sm border border-gray-400 w-fulf"
              placeholder="description"
            ></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2"> {state?.error?.description} </span>
            </div>
          </div>

          <div className="mb-4 grid md:grid-cols-3">

            {amenities.map((item)=>(

              
              <div className="flex items-center mb-4" key={item.id}>
              <input
                type="checkbox"
                name="amenities"
                defaultValue={item.id}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                />
              <label className="ms-2 text-sm font-medium text-gray-900 capitalize">
                {item.name}
              </label>
            </div>
              ))}

            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2"> {state?.error?.amenities} </span>
            </div>
          </div>
        </div>

        <div className="col-span-4 bg-white p-4">
          

          <label
            htmlFor="input-file"
            className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative">
            <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
              {pending ? <FadeLoader color="#c6d832" /> : null}

              {image ? (
                <button
                  type="button"
                  onClick={() => deleteImage(image)}
                  className="flex items-center cursor-pointer justify-center bg-transparent size-6 rounded-sm absolute right-1 top-1 text-white hover:bg-red-400"
                >
                  <IoTrashOutline className="size-4 text-transparent hover:text-white" />
                </button>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <IoCloudUploadOutline className="size-8" />
                  <p className="mb-1 text-sm font-bold">select Image</p>
                  {message ? (
                    <p className="mb-1 text-sm font-bold">Select Image</p>
                  ) : (
                    <p className="text-xs">
                      SVG, PNG, JPG, GIF, or Others (Max: 4MB)
                    </p>
                  )}
                </div>
              )}
            </div>
            {!image ? (
              <input
                type="file"
                ref={inputFileRef}
                onChange={handleUpload}
                id="input-file"
                className="hidden"
              />
            ) : (
              <Image
                src={image}
                alt="image"
                width={640}
                height={360}
                className="rounded-md absolute aspect-video object-cover"
              />
            )}
          </label>

          <div className="mb-4">
            <input
              type="text"
              name="capacity"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Room capacity ---"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2"> {state?.error?.capacity} </span>
            </div>
          </div>




          <div className="mb-4">
            <input
              type="text"
              name="price"
              className="py-2 px-4 rounded-sm border border-gray-400 w-full"
              placeholder="Room price ---"
            />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2"> {state?.error?.price} </span>
            </div>
          </div>

                  {/* General message  */}

        {state?.message ? (
          <div className="mb-4 bg-red-200 p-2">
            <span className="text-sm text-gray-700 mt-2"> {state?.message} </span>
          </div>
        ): null}

          <button disabled={isPending} className={clsx(
            "bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-1 text-lg font-semibold cursor-pointer",
            {
              "opacity-50 cursor-progress": isPending
            }
          )}>
            {isPending ? "Saving ...." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateForm;
