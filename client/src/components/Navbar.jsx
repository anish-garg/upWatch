import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "../assets/output-onlinepngtools.png";
import Profile from "./Profile";

const Navbar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("authToken"); 
        const userData = localStorage.getItem("userData");

        if (token && userData) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        // Remove authentication details
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");

        setIsAuthenticated(false);
    };

    return (
        <nav className="flex justify-between items-center px-10 py-2 w-auto text-custom-white bg-custom-slate bg-gradient-to-l from-custom-white to-custom-slate">
            <div className="flex gap-[4.5rem]">
                <div className="flex items-center gap-2">
                    <img src={logo} className="w-8" alt="Up Watch Logo" />
                    <span className="text-xl font-bold">Up Watch</span>
                </div>
                <div className="flex gap-12 items-center">
                    <a href="/">Home</a>
                    <a href="/monitoring">Monitoring</a>
                    <span>Pricing</span>
                    <span>Documentation</span>
                </div>
            </div>
            <div className="flex gap-6">
                {isAuthenticated ?
                    <><Profile />
                        <Button onClick={handleLogout}>Logout</Button></>
                    : <a href="/login"><Button>Sign in</Button></a>}
            </div>
        </nav>
    );
};

export default Navbar;
