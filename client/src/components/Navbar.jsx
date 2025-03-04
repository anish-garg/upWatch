import { Button } from "@/components/ui/button"
import logo from '../assets/output-onlinepngtools.png'
import { useAuth0 } from "@auth0/auth0-react"
// import { NavLink } from "react-router-dom"

const Navbar = () => {
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
    return (
        <nav className="flex justify-between items-center
        px-10 py-2 w-auto text-custom-white bg-custom-slate bg-gradient-to-l from-custom-white to-custom-slate">
            <div className="flex gap-[4.5rem]">
                <div className="flex items-center gap-2">
                    <img src={logo} className="w-8" />
                    <span className="text-xl font-bold">Up Watch</span>
                </div>
                <div className="flex gap-12 items-center">
                    <a href="/">Home</a>
                    <a href="/monitoring">Monitoring</a>
                    <span>Pricing</span>
                    <span>Documentation</span>
                </div>
            </div>
            <div className="flex gap-6 items-center">
                {isAuthenticated ? (<img src={user.picture} alt="profile" className="w-6 h-6 rounded-full" />) : (<><Button onClick={() => loginWithRedirect()}>Sign in</Button><Button onClick={() => loginWithRedirect()} variant="secondary">Sign up</Button></>)}
                {isAuthenticated && (<Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button>)}
            </div>
        </nav >
    )
}

export default Navbar