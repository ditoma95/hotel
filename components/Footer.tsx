import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto px-4 w-full py-10 md:py-16">
            <div className="grid md:grid-cols-3 gap-7">
                <div>
                    <Link href="/" className="mb-10 block">
                        <Image src="/logo.png" width={128} height={49} alt="logo"/>
                    </Link>
                    <p className="text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus laboriosam commodi aliquid omnis. Amet assumenda dolores saepe exercitationem, unde reiciendis.
                    </p>
                </div>
                <div className="flex gap-20">
                    <div className="flex-1 md:flex-none">
                        <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                        <ul className="list-item space-y-5 text-gray-400">
                            <li>
                                <Link href="#">Legal</Link>
                            </li>

                            <li>
                                <Link href="#">Term & conditions</Link>
                            </li>
                            <li>
                                <Link href="#">Payement Method</Link>
                            </li>

                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mb-8 text-xl font-semibold text-white">
                    <h4 className="mb-8 text-xl font-semibold text-white">News letter</h4>
                    <p className="text-gray-400">
                        <form action="" className="mt-5">
                            <div className="mb-5">
                                <input type="email" name="email" className="w-full p-3 rounded-sm bg-white" placeholder="john" />
                            </div>

                            <button className="bg-orange-400 p-3 font-bold text-white w-full text-center rounded-sm hover:bg-orange-500">
                                suscribe
                            </button>
                        </form>
                    </p>
                </div>
            </div>
        </div>
        <div className="max-w-screen-xl mx-auto px-4 border-t border-gray-500 py-8 text-center text-base text-gray-500">
            &copy; Coyprigth 2025 | dimitri koutema
        </div>
    </footer>
  )
}

export default Footer