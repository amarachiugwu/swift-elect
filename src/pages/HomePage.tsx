import FaqData from '../components/FaqData'
import Navbar from '../components/Navbar'
import YoutubeEmbed from '../components/YoutubeEmbed'
import { ClockIcon, DesktopIcon, EyeIcon, MailIcon, MapIcon, SafetyIcon, UsersIcon } from '../icon'
import { HeroImage, } from '../images'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="w-full top-[-100px] relative">
        <div className='hidden lg:block pt-16 xl:pt-0'>
          <HeroImage />
        </div>

        <div className="text-center lg:text-left lg:absolute z-0 pt-[250px] mb-8 lg:pt-0 lg:top-[250px] xl:top-[270px] px-8 sm:px-16 lg:px-12 w-full lg:w-1/2">
          <h1 className=' leading-relaxed font-bold text-4xl xl:text-5xl font-Grotesk'>Redefining the voting process</h1>
          <p className='text-neutral-10 font-Grotesk leading-loose xl:leading-normal xl:text-2xl mt-2 xl:mt-6'>A unique platform that sets to empowering citizens of all ages, backgrounds, and distances to exercise their voting rights effortlessly. Redefining the voting process for a truly inclusive democracy.</p>

          <button className="w-full md:w-52 mt-8 bg-primary-09 rounded-lg border border-primary-09 py-4 px-7 text-white hover:bg-white hover:text-neutral-09 hover:border-neutral-09 transition ease-in-out duration-300">Get Started</button>
        </div>
      </section>


      {/* Why Section */}
      <section id='whyus' className="w-5/6 md:w-4/5 mx-auto pd-16 text-center">
        <p className='text-primary-09'> Qualities</p>
        <h2 className="font-semibold text-4xl leading-loose	font-Grotesk">Here is why you should use swift Elect</h2>
        <p className='w-5/6 md:w-4/6 mx-auto text-neutral-08 leading-loose'>Swift Elect addresses 80% of voting challenges, paving the way for increased awareness and accessibility, redefining the future of the voting process.</p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6  gap-y-12 pt-16">
          <div>
            <div className='flex justify-center'><MapIcon /></div>
            <h3 className='font-medium text-xl py-3'>Easy voting</h3>
            <p className="text-neutral-08 leading-loose">
            Vote online and bid farewell to long queues! Our web app ensures a hassle-free voting experience, reducing discomfort and challenges for those who've changed residence.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><SafetyIcon /></div>
            <h3 className='font-medium text-xl py-3'>Voting safety</h3>
            <p className="text-neutral-08 leading-loose">
            Prioritize safety without compromising civic duty. Our online voting platform ensures voters can cast their ballots securely from the comfort of their own space.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><EyeIcon /></div>
            <h3 className='font-medium text-xl py-3'>Voting transparency</h3>
            <p className="text-neutral-08 leading-loose">
            Illuminate the democratic process! Our platform guarantees transparency, giving voters a clear view into the entire voting journey for a more accountable democracy.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><DesktopIcon /></div>
            <h3 className='font-medium text-xl py-3'>Realtime result transmission</h3>
            <p className="text-neutral-08 leading-loose">
            Witness democracy unfold in real-time! Our web app enables swift and accurate transmission of election results, fostering trust and efficiency in the electoral process.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><ClockIcon /></div>
            <h3 className='font-medium text-xl py-3'>Time management</h3>
            <p className="text-neutral-08 leading-loose">
            Empower every voice, regardless of location! Our platform breaks down geographical barriers, ensuring accessibility for all voters, fostering a truly inclusive democracy.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><UsersIcon /></div>
            <h3 className='font-medium text-xl py-3'>Voting accessibility</h3>
            <p className="text-neutral-08 leading-loose">
            maximize your time without compromising civic responsibility! With our efficient online voting system, you can cast your vote swiftly, allowing for better time
            </p>
          </div>

         
        </div>
      </section>

      {/* How it Works */}
      <section className="w-5/6 md:w-4/5 mx-auto mt-8 py-16 text-center">
      <p className='text-primary-09'> How it works</p>
        <h2 className="font-semibold text-4xl leading-loose	font-Grotesk">How Swift Elect works with voting</h2>
        <p className='w-5/6 md:w-4/6 mx-auto text-neutral-08 leading-loose'>Swift Elect addresses  the traditional challenges of going to polling points and queuing to vote paving the way for increased voting turnups and accessibility, With just 3 simple steps  you can carry out your rights as a citizen.</p>

        <div className="bg-neutral-10 w-full max-w-[758px] h-auto max-h-[512px] mx-auto rounded-3xl my-16">
          <YoutubeEmbed embedId="JT9N0EefS7o?si=PVkWBaZYcug4gMK3" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6  gap-y-12 pt-16">
          <div>
            <div className='flex justify-center'><MailIcon /></div>
            <h3 className='font-medium text-xl py-3'>Register with VIN</h3>
            <p className="text-neutral-08 leading-loose">
            online, to reduce the discomfort of sunburn, Queuing at polling points, less voting challenges for voters who changed residence.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><MailIcon /></div>
            <h3 className='font-medium text-xl py-3'>select a candidate</h3>
            <p className="text-neutral-08 leading-loose">
            online, to reduce the discomfort of sunburn, Queuing at polling points, less voting challenges for voters who changed residence.
            </p>
          </div>

          <div>
            <div className='flex justify-center'><MailIcon /></div>
            <h3 className='font-medium text-xl py-3'>Cast a vote for candidate</h3>
            <p className="text-neutral-08 leading-loose">
            online, to reduce the discomfort of sunburn, Queuing at polling points, less voting challenges for voters who changed residence.
            </p>
          </div>

         
        </div>
      </section>

      {/* FAQ */}
      <section id='faq' className="w-4/5 mx-auto py-16">
        <h2 className="font-semibold text-4xl leading-loose text-center font-Grotesk">Frequently asked questions</h2>
        
        <FaqData />
        
      </section>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default HomePage
