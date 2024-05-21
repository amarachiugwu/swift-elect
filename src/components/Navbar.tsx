import { Link } from "react-router-dom"
import { Logo } from "../images"
import { HamburgerIcon } from "../icon"
import { useEffect, useRef, useState } from "react"
const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen)
    }

    const nav = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if(nav.current &&  !nav.current.contains(e.target as Node)){
                setMobileMenuOpen(false)
            }
        }
        
        document.addEventListener("mousedown", handler)

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, [])

    return (
        <nav ref={nav} className="bg-white w-full z-40 fixed h-20 px-6 md:px-16">
            <div className="flex justify-between items-center py-5">
                <div>
                    <Logo />
                </div>

                {/* Desktop Nav links */}
                <div className="hidden md:flex items-center text-neutral-09 space-x-8">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/#faq">FAQ</Link>
                    <Link to="/login">
                        <button className="border border-neutral-07 rounded-lg font-semibold py-2 px-6 hover:transition-colors ease-in-out duration-300 hover:bg-primary-09 hover:text-white">
                            Login
                        </button>
                    </Link> 
                </div>

                {/* Mobile Nav menue */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu}>
                        <HamburgerIcon />
                    </button>
                </div>

            </div>

            <div  className={`transition-all ease-in-out duration-500 absolute flex flex-col space-y-4 font-semibold p-4 right-0 top-20 border bg-white w-60 ${mobileMenuOpen? 'translate-x-0' : 'translate-x-full'}`}>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/#faq">FAQ</Link>
                <Link to="/login">
                    <button className="rounded-lg bg-primary-09 text-white py-2 px-6 hover:transition-colors ease-in-out duration-500 hover:bg-white hover:text-neutral-09 border border-white hover:border-neutral-07">
                        Login
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
