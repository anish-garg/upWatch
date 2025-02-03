import { Button } from "@/components/ui/button"
import logo from '../assets/output-onlinepngtools.png'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center
        px-10 py-2 w-auto text-custom-white bg-custom-slate bg-gradient-to-l from-custom-white to-custom-slate">
            <div className="flex gap-[4.5rem]">
                <div className="flex items-center gap-2">
                    <img src={logo} className="w-11" />
                    <span className="text-xl font-bold">Up Watch</span>
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