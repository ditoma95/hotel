import { getRooms } from "@/lib/data"
import { formaDate, formatCurrency } from "@/lib/utils";
import Image from "next/image";
import { DeleteButton, EditButton } from "./button";

const RoomTable = async () => {

    const rooms = await getRooms();

    console.log(rooms);
    
    if(!rooms?.length) return <p>No Room Found</p>


  return (
    <div className="bg-white p-4 mt-5 shadow-sm">
        <table className="w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase text-left">Images</th>
                    <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Room Name</th>
                    <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Price</th>
                    <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Created At</th>
                    <th className="px-6 py-3 text-sm font-bold text-gray-700 uppercase">Actions</th>
                </tr>
            </thead>
            <tbody>
                {rooms.map((room)=>(
                <tr className="divide-gray-200" key={room.id}>
                    <td className="px-6 py-4">
                        <div className="h-20 w-32 relative overflow-hidden">
                            <Image 
                                src={room.image} 
                                fill 
                                sizes="20vw" 
                                alt="room image" 
                                className="object-cover" 
                            />
                        </div> 
                    </td>
                    <td className="px-6 py-4"> {room.name} </td>
                    <td className="px-6 py-4"> {formatCurrency(room.price)} </td>
                    <td className="px-6 py-4"> {formaDate(room.createdAt.toString())} </td>
                    <td className="px-6 py-4 text-right">
                        <div className="flex items-center gap-2">
                            <EditButton id={room.id} />
                            <DeleteButton id={room.id} image={room.image} />
                        </div>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default RoomTable