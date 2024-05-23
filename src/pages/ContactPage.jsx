import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage(props) {
    

    return (
        <>
        {/* Navbar */}
        <Navbar />


        {/* Contact Body */}

        <section className="w-4/5 mx-auto flex gap-16 justify-between flex-col lg:flex-row text-neutral-12 pt-[130px] lg:pt-[170px] mb-20 ">
            <div className="w-full lg:w-1/2">
                <h1 className='font-Grotesk bold text-4xl lg:text-5xl'>Get in touch</h1>
                <p className="py-8">
                Our friendly team would love to hear from you.
                </p>

                <form action="" className='text-[#667085] text-sm md:text-base'>
                    <div className="md:flex gap-6">
                        <div className="flex w-full md:w-1/2 gap-2 flex-col">
                            <label htmlFor="firstname" id="firstname">Firstname</label>
                            <input className="text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="text" placeholder='Firstname' id="firstname" />
                        </div>

                        <div className="mt-6 md:mt-0 flex w-full md:w-1/2 gap-2 flex-col">
                            <label htmlFor="lastname">Lastname</label>
                            <input className="text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="text" placeholder='Lastname' id="lastname" />

                        </div>
                    </div>

                    <div className="mt-6 flex w-full gap-2 flex-col">
                        <label htmlFor="email" id="email">Email</label>
                        <input className="text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="email" placeholder='example@gmail.com' id="email" />
                    </div>

                    <div className="mt-6 md:flex gap-6">
                        <div className="flex w-full md:w-1/2 gap-2 flex-col">
                            <label htmlFor="state" id="state">State</label>
                            <input className="text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="text" placeholder='Enugu' id="state" />
                        </div>

                        <div className="mt-6 md:m-0 flex w-full md:w-1/2 gap-2 flex-col">
                            <label htmlFor="phone">Phone</label>
                            <input className="text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="number" placeholder='+2349063399674' id="phone" />
                        </div>

                    </div>

                    <div className="mt-6 flex w-full gap-2 flex-col">
                        <label htmlFor="message" id="message">Message</label>
                        <textarea className="resize-none h-24 text-sm px-3 py-2 border border-[#D0D5DD] bg-white shadow-sm rounded-md focus:ring-1 focus:outline-none focus:ring-primary-05 focus:border-[#D0D5DD] placeholder-neutral-08" type="text" placeholder='Your message' id="message" ></textarea>
                    </div>

                    <div className="w-full mt-6 flex gap-2 item-center">
                        <input type="checkbox" className='item-center h-4 w-4 border border-[#D0D5DD] rounded' />
                        <span className='text-sm'>You agree to our friendly privacy policy.</span>
                    </div>

                    <input type="text" className="mt-6 w-full bg-primary-09 bold px-3 py-2 text-white rounded-lg text-center" value="Send Message" />
                </form>
            </div>

            <img className='hidden lg:block w-1/2 h-auto object-cover rounded-xl' src="images/person-contact.png" alt="" />


        </section>

        {/* Footer */}
        <Footer />

        </>
    )
}
