"use server";

import { prisma } from "@/lib/prisma";
import { ContactSchema } from "./zod";


export const ContactMessage = async (prevState: unknown, formData: FormData) => {
  const validateFields = ContactSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validateFields.success) {
    return { error: validateFields.error.flatten().fieldErrors };
  }

  const { name, email, subject, message } = validateFields.data;

  try {
    await prisma.contact.create({
      data: {name, email, subject,message},
    });
    return { message: "Thanks for contact us." };
  } catch (error) {
    console.log(error);
  }
};
