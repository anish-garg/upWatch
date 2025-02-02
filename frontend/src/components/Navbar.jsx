const Navbar = () => {
    return (
        <nav className="flex justify-between">
            <div className="flex gap-[4.5rem]">
                <span>Up Watch</span>
                <div className="flex gap-12">
                    <span>Home</span>
                    <span>Monitoring</span>
                    <span>Pricing</span>
                    <span>Documentation</span>
                </div>
            </div>
            <div className="flex gap-8">
                <button>Sign in</button>
                <button>Sign Up</button>
            </div>
        </nav>
    )
}

export default Navbar