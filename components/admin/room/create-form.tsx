import { IoCloudUploadOutline } from "react-icons/io5"

const CreateForm = () => {
  return (
    <form action="">
        <div className="grid md:grid-cols-12 gap-5">
            <div className="col-span-8 bg-white p-4">
                <div className="mb-4">
                    <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Room name ---"/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <div className="mb-4">
                    <textarea name="description" rows={8} className="py-2 px-4 rounded-sm border border-gray-400 w-fulf" placeholder="description"></textarea>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <div className="mb-4 grid md:grid-cols-3">
                    <input type="checkbox" name="amenities" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
                    <label className="ms-2 text-sm font-medium text-gray-900 capitalize">spa</label>

                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>



            </div>

            <div className="col-span-4 bg-white p-4">


                <div className="mb-4">
                    <input type="text" name="capacity" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Room capacity ---"/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <label htmlFor="input-file" className="flex flex-col mb-4 items-center justify-center aspect-video border-2 border-gray-300 border-dashed rounded-md cursor-pointer bg-gray-50 relative">
                    <div className="flex flex-col items-center justify-center text-gray-500 pt-5 pb-6 z-10">
                        <div className="flex flex-col items-center justify-center">
                            <IoCloudUploadOutline className="size-8"/>
                            <p className="mb-1 text-sm font-bold">select Image</p>
                            <p className="text-xs">SVG, PNG, JPG, GIF, or Others (Max: 4MB)</p>
                        </div>
                    </div>
                    <input type="file" id="input-file" className="hidden"/>
                </label>


                <div className="mb-4">
                    <input type="text" name="price" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Room price ---"/>
                    <div aria-live="polite" aria-atomic="true">
                        <span className="text-sm text-red-500 mt-2">message</span>
                    </div>
                </div>

                <button className="bg-orange-400 text-white w-full hover:bg-orange-500 py-2.5 px-6 md:px-1 text-lg font-semibold cursor-pointer">save</button>
            </div>
        </div>
    </form>
  )
}

export default CreateForm