import React from 'react'

export default function Contact() {
    return (
        <div className='pt-24 text-black bg-Bg h-screen  text-custom text'>
            <h1 className='text-6xl p-8  font-extrabold ps-[10rem] mb-10'><span className='border-b-4 border-custom'>Contact Me!</span></h1>
            <form className="w-full max-w-lg mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-4  md:mb-0 " >
                        <label
                            className="block uppercase tracking-wide text-custom text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            className="appearance-none  block w-full bg-gray-200 text-white border-2 border-custom rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-secondBg"
                            id="name"
                            type="text"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label
                            className="block uppercase tracking-wide text-custom text-xs font-bold mb-2"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-white border-2 border-custom rounded py-3 px-4 leading-tight focus:outline-none bg-secondBg focus:border-gray-500"
                            id="email"
                            type="email"
                            placeholder="johndoe@example.com"
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-custom text-xs font-bold mb-2"
                        htmlFor="subject"
                    >
                        Subject
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-white border-2 border-custom rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-secondBg focus:border-gray-500"
                        id="subject"
                        type="text"
                        placeholder="Subject of your message"
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block uppercase tracking-wide text-custom text-xs font-bold mb-2"
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        className="appearance-none block w-full bg-gray-200 text-white border-2 border-custom rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-secondBg focus:border-gray-500 h-24 resize-none"
                        id="message"
                        placeholder="Your message here"
                        style={{height:"200px"}}
                    ></textarea>
                </div>
                <div className="flex justify-center " >
                    <button
                        className="border-custom border-2 snd send-msg font-bold py-2 px-4 rounded focus:outline-none hover:text-black focus:shadow-outline"
                        type="button"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}
