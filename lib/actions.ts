"use server";

import { prisma } from "@/lib/prisma";
import { ContactSchema, RoomSchema } from "./zod";
import { redirect } from "next/navigation";
import { del } from "@vercel/blob";
import { revalidatePath } from "next/cache";


export const ContactMessage = async (
  prevState: unknown,
  formData: FormData
) => {
  const validateFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return { error: validateFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validateFields.data;

  try {
    await prisma.contact.create({
      data: { name, email, subject, message },
    });
    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};


export const saveRoom = async (
  image:string,
  prevState: unknown,
  formData: FormData
) => {
  if(!image) return {message: "Image is Required"}

  const rawData = {
    name: formData.get("name"),
    description: formData.get("description"),
    capacity: formData.get("capacity"),
    price: formData.get("price"),
    amenities: formData.getAll("amenities")
  };

  const validateFields = RoomSchema.safeParse(rawData);
  if (!validateFields.success) {
    return {error: validateFields.error.flatten().fieldErrors}
  }

  const {name, description, price, capacity, amenities} = validateFields.data;

  try {
    await prisma.room.create({
      data: {
        name,
        description,
        image,
        price,
        capacity,
        RoomAmenities:{
          createMany: {
            data: amenities.map((item)=>({
              amenitiesId: item
            }))
          }
        }
      }
    })
  } catch (error) {
    console.log(error);
  }
  redirect("/admin/room");
}


// Delete Room 

export const deleteRoom = async (id:string, image: string) => {
  try {
    await del(image);
    await prisma.room.delete({
      where: {id}
    })
  } catch (error) {
    console.log(error); 
  }
  revalidatePath("/admin/room");
}


