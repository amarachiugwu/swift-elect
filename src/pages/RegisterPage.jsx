import { Link } from "react-router-dom"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const RegisterPage = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <section className="w-full flex items-stretch">

      <div className="w-3/5 hidden lg:block">
        <Slider {...settings} className="w-full h-full">
          <div className="w-full h-full">
            <img src="images/slide1.png" alt="slide1" className=" lg:h-full xl:h-auto" />
          </div>
          <div>
            <img src="images/slide2.png" alt="slide2" className=" lg:h-full xl:h-auto" />
          </div>
          <div>
            <img src="images/slide3.png" alt="slide3" className=" lg:h-full xl:h-auto" />
          </div>
        </Slider>
      </div>

      <div className="w-full lg:w-2/5 px-8 py-12">
        <h1 className="font-Grotesk text-[#101828] my-4 text-4xl lg-5xl font-medium">Sign up</h1>
        <p className="text-[#667085] mb-8">Create an account to get started</p>

        <form action="" className="w-full">
          <div className="mt-4 flex flex-col w-full gap-2">
            <label htmlFor="username" className="text-[#344054]">Username</label>
            <input type="text" id="username" placeholder="chidimmaugwu" className="text-sm rounded-md w-full px-3 py-2 border border-[#D0D5DD] placeholder-[#667085] focus:outline-none focus:ring-1 focus:ring-primary-05 focus:border-primary-05" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <label htmlFor="nin" className="text-[#344054]">NIN</label>
            <input type="text" id="nin" placeholder="INC2 1298 0567 845" className="text-sm rounded-md w-full px-3 py-2 border border-[#D0D5DD] placeholder-[#667085] focus:outline-none focus:ring-1 focus:ring-primary-05 focus:border-primary-05" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <label htmlFor="email" className="text-[#344054]">Email</label>
            <input type="email" id="email" placeholder="example@gmail.com" className="text-sm rounded-md w-full px-3 py-2 border border-[#D0D5DD] placeholder-[#667085] focus:outline-none focus:ring-1 focus:ring-primary-05 focus:border-primary-05" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <label htmlFor="password" className="text-[#344054]">Password</label>
            <input type="password" id="password" placeholder="*********" className="text-sm rounded-md w-full px-3 py-2 border border-[#D0D5DD] placeholder-[#667085] focus:outline-none focus:ring-1 focus:ring-primary-05 focus:border-primary-05" />
          </div>

          <div className="mt-4 flex flex-col w-full gap-2">
            <label htmlFor="phone" className="text-[#344054]">Phone</label>
            <input type="text" id="phone" placeholder="+23490786789675" className="text-sm rounded-md w-full px-3 py-2 border border-[#D0D5DD] placeholder-[#667085] focus:outline-none focus:ring-1 focus:ring-primary-05 focus:border-primary-05" />
          </div>

          <input type="text" className="w-full px-3 py-2 text-center rounded-md mt-12 bg-primary-08 text-white" value="Sign Up" />

          <button type="text" className="w-full px-3 py-2 rounded-md mt-6 bg-neutral-03 text-white flex justify-center gap-2 items-center" >
            <img src="images/google.png" alt="google" />
            <span className="text-[#333333]">Sign up with Google</span>
          </button>

          <p className="text-center pt-12">Already have an account?  <Link className="text-primary-08" to="/login">Login Here</Link></p>
        </form>
      </div>
      
    </section>
  )
}

export default RegisterPage
