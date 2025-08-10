import { auth } from "@/auth"
import { prisma } from "./prisma";

export const getAmenities = async () => {
    const session = await auth();
    if (!session || !session.user) {
        throw new Error("Unauthorized Acces");
    }
    try {
        const result = await prisma.amenities.findMany();
        return result;
    } catch (error) {
        console.log(error);
        
    }
}