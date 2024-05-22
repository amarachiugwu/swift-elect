import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { ArrowDown } from '../icon'
import { FatherAndSon, People } from '../images'

const AboutPage = () => {
  return (
    <div>

        <Navbar />


        {/* Header */}
        <section className="w-5/6 md:w-4/5 mx-auto pt-[170px] mb-16 text-center">
            <div className='flex justify-center'>
                <span className='text-xs text-primary-09 bg-[#e7f0ed] rounded-xl p-1'>We aim for transparency, ease and progress</span>
            </div>

            <div className="md:w-4/5 mx-auto">
                <h1 className='leading-loose font-Grotesk text-4xl lg:text-5xl font-bold lg:py-6'>Building a seamless system and better Nigeria!</h1>
                <p className='text-neutral-08 leading-loose lg:w-4/5 mx-auto'>A unique platform that sets to empowering citizens of all ages, backgrounds, and distances to exercise their voting rights effortlessly. Redefining the voting process for a truly inclusive democracy.</p>
            </div>
        </section>

        {/* About Image */}
        <section className="hidden lg:block w-[90%] py-16 gap-4 mx-auto text-center">
            <div className="w-full flex justify-center">
                <div className="xl:w-3/5 rounded-xl">
                    <People />
                </div>
                <div className="hidden xl:block w-2/5">
                    <FatherAndSon />
                </div>
            </div>
        </section>

        {/* Mission */}
        <section className='w-[90%] xl:w-5/6 py-16 mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 justify-center lg:justify-start flex gap-2 xl:gap-4 ">
                    <h2 className="font-Grotesk text-3xl lg:text-4xl pb-4 font-bold lg:text-left ">
                    Our Mission
                    </h2>
                    <span className='hidden lg:inline-block'><ArrowDown /></span>
                </div>

                <div className="w-4/5 mx-auto lg:mx-0 lg:w-3/5">
                    <p className="text-neutral-10 leading-loose text-center lg:text-left">
                    Swift Elect, revolutionizes the voting experience of the traditional challenges associated with going to polling points and waiting in long queues? Swift Elect is your solution, paving the way for increased voting turnouts and enhanced accessibility.At Swift Elect, we believe in simplifying the democratic process. With just three straightforward steps, you can effortlessly exercise your rights as a citizen. We've reimagined the voting journey to make it more convenient, ensuring that every voice is heard without the hassle. Swift Elect is designed to empower citizens, making voting a seamless and accessible part of civic duty.
                    </p>
                </div>
            </div>
        </section>


        {/* Vision */}
        <section className='w-[90%] xl:w-5/6 py-16 mx-auto'>
            <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/5 justify-center lg:justify-start flex gap-2 xl:gap-4 ">
                    <h2 className="font-Grotesk text-3xl lg:text-4xl pb-4 font-bold lg:text-left ">
                    Our Vision
                    </h2>
                    <span className='hidden lg:inline-block'><ArrowDown /></span>
                </div>

                <div className="w-4/5 mx-auto lg:mx-0 lg:w-3/5">
                    <p className="text-neutral-10 leading-loose text-center lg:text-left">
                    We aspire to create a landscape where voting turnouts soar, and accessibility is the cornerstone of democratic participation. Picture a world where the democratic process is streamlined, and citizens engage effortlessly in shaping the future of their communities. Our vision is encapsulated in the belief that every voice matters. Through innovative solutions and a commitment to user-friendly experiences, we're transforming the way people participate in elections. Swift Elect is dedicated to fostering a democratic environment where the power to vote is within reach for all.
                    </p>
                </div>
            </div>
        </section>


        {/* Team */}
        <section className="w-5/6 md:w-4/5 mx-auto  my-16 text-center">
            <h1 className='leading-loose font-Grotesk text-3xl lg:text-5xl font-bold lg:py-6'>Meet the Team</h1>
            <p className='text-neutral-10 leading-loose lg:w-3/5 mx-auto pb-8'>we aim to revolutionize the voting process, ensuring it is not only free and fair but also provides a comfortable and accessible experience for every participant.</p>
      
            <div className="flex gap-8 justify-center flex-col md:flex-row">
                <img src="images/amara.png" alt="" />
                <img src="images/chidimma.png" alt="" />
            </div>

        </section>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default AboutPage
