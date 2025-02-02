import { Button } from "@/components/ui/button"
import logo from '../assets/Screenshot_2025-02-03_005651-removebg-preview.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-white/10 border border-white/20 
        px-10 py-4 rounded-full backdrop-blur-xl shadow-lg sticky top-0 z-50">
            <div className="flex gap-[4.5rem]">
                <div className="flex items-center">
                    <img src={logo} className="w-11" />
                    <span>Up Watch</span>
                </div>
                <div className="flex gap-12 items-center">
                    <span>Home</span>
                    <span>Monitoring</span>
                    <span>Pricing</span>
                    <span>Documentation</span>
                </div>
            </div>
            <div className="flex gap-6">
                <Button className="">Sign in</Button>
                <Button variant="secondary">Sign up</Button>
            </div>
        </nav>
    )
}

export default Navbar