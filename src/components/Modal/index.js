import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_ud0sete";
const PUBLIC_KEY = "RW2AWjA0hWRuQ7a6Q";
const TEMPLATE_ID = "service_ud0sete";

export default function Modal({dismiss}){

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((success)=>console.log("Mail sent successfully")).catch((e)=>console.log("an error occured"));
    }

    return(
        <div className="bg-gray-500 bg-opacity-75 fixed inset-0 z-50 transition-opacity " role="dialog" aria-modal="true">
            <div className="flex h-screen justify-center items-center">
                <div className="relative bg-white py-5 px-5 border-2 fixed z-100">
                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={()=>dismiss()}>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
            </button>
                    <div className="py-6 px-6 lg:px-8">
                        <h1 className="mb-4 text-xl font-semibold text-indigo-900">Let's get in touch</h1>

            <div className="mt-5 md:col-span-2 md:mt-0">
                <form onSubmit={handleSubmit}>
                    <div className="overflow-hidden shadow sm:rounded-md">
                    <div className="bg-white px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-3 sm:col-span-3">
                                <input type="text" name="firstname" id="firstname" autocomplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Firstname"/>
                            </div>
                            <div className="col-span-3 sm:col-span-3">
                                <input type="text" name="lastname" id="lastname" autocomplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Lastname"/>
                            </div>

                        <div className="col-span-6 sm:col-span-4">
                            <input type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email address"/>
                        </div>

                        <div className="col-span-6">
                            <input type="tel" name="phone_number" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Phone number"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <input type="text" name="city" id="city"className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Company"/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <textarea  name="message" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Your message"></textarea>
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-left sm:px-6">
                        <button type="submit" className="inline-flex rounded-sm justify-center border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">Send</button>
                    </div>
                    </div>
                </form>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}