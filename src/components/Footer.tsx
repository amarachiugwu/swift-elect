import { FacebookIcon, LinkedinIcon, TwitterIcon } from '../icon'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <section className='w-full bg-primary-09 py-16'>
        <div className="w-5/6 mx-auto">
          <h2 className=" font-bold text-4xl leading-relaxed md:leading-loose text-center text-secondry-01 font-Grotesk">
            Empower Your Voice, <span className='text-[#A4C64A]'>Ignite</span> Change.
          </h2>

          <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-8 mx-auto">
            <div className='hidden lg:block'>
              <h6 className='text-xl font-medium text-secondry-01 '>Swift Elect</h6>
              <div className="my-6 flex w-full gap-4">
                <a href=""><FacebookIcon /></a>
                <a href=""><LinkedinIcon /></a>
                <a href=""><TwitterIcon /></a>
              </div>
              <p className='text-xs text-secondry-04'>© 2024. All Rights Reserved.</p>
            </div>

            <div className='flex flex-col gap-4 text-secondry-04'>
              <h6 className='text-xl font-medium text-secondry-01'>Company</h6>
              <Link to="#honme">Home</Link>
              <Link to="/about">About</Link>
              <Link to="#whyus">Why Us</Link>
            </div>

            <div className='flex flex-col gap-4 text-secondry-04'>
              <h6 className='text-xl font-medium text-secondry-01'>Legal</h6>
              <Link to="">Terms & Conditions</Link>
              <Link to="">Privacy policy</Link>
              <Link to="#faq">FAQ</Link>
            </div>

            <div className='flex flex-col gap-4 text-secondry-04'>
              <h6 className='text-xl font-medium text-secondry-01'>Contact</h6>
              <a href="mailto:support@swiftelect.com">support@swiftelect.com</a>
              <a href="tel:support@swiftelect.com">0104567345</a>
              <Link to="#faq">FAQ</Link>
            </div>
          </div>

          <div className="mt-12 flex w-2/5 sm:w-1/4 justify-between mx-auto gap-4 lg:hidden">
            <a href=""><FacebookIcon /></a>
            <a href=""><LinkedinIcon /></a>
            <a href=""><TwitterIcon /></a>
          </div>
        </div>
      </section>
  )
}

export default Footer
