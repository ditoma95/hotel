import { object, string } from "zod";

export const ContactSchema = object({
    name: string().min(6, "Name at least 6 characers"),
    email : string().min(6, "Email at lest 6 characters").email("Please enter a valid email"),
    subject: string().min(6, "Subject at least 6 characters"),
    message: string().min(50, "Message at least 50 characters")
    .max(200, "Message maxium 200 characters"),
    
});