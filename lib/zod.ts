import { array, coerce, object, string } from "zod";

export const RoomSchema = object({
    name: string().min(1),
    description: string().min(50),
    capacity: coerce.number().gt(0),
    price: coerce.number().gt(0),
    amenities: array(string()).nonempty(),
});

export const ContactSchema = object({
    name: string().min(3, "Name at least 6 characers"),
    email : string().min(3, "Email at lest 6 characters").email("Please enter a valid email"),
    subject: string().min(3, "Subject at least 6 characters"),
    message: string().min(5, "Message at least 50 characters").max(200, "Message maxium 200 characters")
});