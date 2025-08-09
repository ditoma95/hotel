import ContactForm from "@/components/contact-form"
import HeaderSection from "@/components/header-section"
import { Metadata } from "next"
import { IoCallOutline, IoLocationOutline, IoMailOutline } from "react-icons/io5"

export const metadata:Metadata = {
    title: "Contact"
}

const ContactPage = () => {
  return (
    <div>
        <HeaderSection title="Contact Us" subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

        <div className="max-w-screen-xl mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-lg text-gray-500 mb-3">Contact Us</h1>
                    <h1 className="text-5xl font-semibold text-gray-900 mb-4">Get In Touch Today</h1>

                    <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus esse sed et quae eveniet impedit!</p>
                    <ul className="list-item space-y-6 pt-8">
                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoMailOutline className="size-7" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Email: </h4>
                                <p>email-devgtfod@gmail.com</p>
                            </div>
                        </li>

                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoCallOutline className="size-7" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Phone Number: </h4>
                                <p>+228 93996422 / +228 98421126</p>
                            </div>
                        </li>

                        <li className="flex gap-5">
                            <div className="flex-none bg-gray-300 p-3 shadow-sm rounded-sm">
                                <IoLocationOutline className="size-7" />
                            </div>

                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Address: </h4>
                                <p>Togo - Lome Rue 42 DEV 78</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* contact form  */}

                <ContactForm />

            </div>
        </div>
    </div>
  )
}

export default ContactPage