const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-sm shadow-sm">
        <form action="">
            <div className="grid md:grid-cols-2 gap-7 mt-6">
                <div>
                    <input type="text" name="name" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="subject"/>

                    <div aria-live="polite" aria-atomic="true">
                        <p className="tex-sm text-red-500 mt-2">messages</p>
                    </div>
                </div>
                <div>
                    <input type="email" name="email" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="d@gmail.com*"/>
                <div aria-live="polite" aria-atomic="true">
                    <p className="tex-sm text-red-500 mt-2">messages</p>
                </div>
                </div>
            </div>

            <div className="md:col-span-2 mt-2">
                <input type="text" name="subject" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Subject*"/>
                <div aria-live="polite" aria-atomic="true">
                    <p className="tex-sm text-red-500 mt-2">messages</p>
                </div>
            </div>


            <div className="md:col-span-2 mt-2">
                <textarea name="message" rows={5} className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Your message">
                </textarea>

                <div aria-live="polite" aria-atomic="true">
                    <p className="tex-sm text-red-500 mt-2"></p>
                </div>
            </div>

            <button 
                type="submit"
                className="px-10 py-4 text-center font-semibold text-white w-full bg-orange-400 rounded-sm hover:bg-orange-500 cursor-pointer">
                    Send Message
            </button>


        </form>
    </div>
  )
}

export default ContactForm