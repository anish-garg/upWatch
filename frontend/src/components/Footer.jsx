import logo from "../assets/output-onlinepngtools.png"
import { Linkedin, Instagram, Github, Twitter, Contact } from "lucide-react"
import ContactUs from "./ContactUs";

const sections = [
    {
        title: "Product",
        links: [
            { name: "Overview", href: "#" },
            { name: "Pricing", href: "#" },
            { name: "Marketplace", href: "#" },
            { name: "Features", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About", href: "#" },
            { name: "Team", href: "#" },
            { name: "Blog", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Resources",
        links: [
            { name: "Help", href: "#" },
            { name: "Sales", href: "#" },
            { name: "Advertise", href: "#" },
            { name: "Privacy", href: "#" },
        ],
    },
];

const Footer = () => {
    return (
        <section className="py-6 mx-4">
            <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left"></div>
            <div className="container">
                <footer>
                    <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
                        <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
                            <div>
                                <span className="flex items-center justify-center gap-4 lg:justify-start">
                                    <img
                                        src={logo}
                                        alt="logo"
                                        className="h-11"
                                    />
                                    <p className="text-3xl text-white font-bold">Up Watch</p>
                                </span>
                                <p className="mt-6 text-sm text-muted-foreground">
                                    A collection of 100+ responsive HTML templates for your
                                    startup business or side project.
                                </p>
                            </div>
                            <ul className="flex items-center space-x-6 text-muted-foreground">
                                <li className="font-medium hover:text-primary">
                                    <a href="https://www.instagram.com/_simply.anish/" target="blank">
                                        <Instagram className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="https://www.linkedin.com/in/anish-garg-48ba1512a/" target="blank">
                                        <Linkedin className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="https://github.com/anish-garg" target="blank">
                                        <Github className="size-6" />
                                    </a>
                                </li>
                                <li className="font-medium hover:text-primary">
                                    <a href="https://x.com/anish_garg_" target="blank">
                                        <Twitter className="size-6" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ContactUs />
                        <div className="grid grid-cols-3 gap-6 lg:gap-20">
                            {sections.map((section, sectionIdx) => (
                                <div key={sectionIdx}>
                                    <h3 className="mb-6 font-bold">{section.title}</h3>
                                    <ul className="space-y-4 text-sm text-muted-foreground">
                                        {section.links.map((link, linkIdx) => (
                                            <li
                                                key={linkIdx}
                                                className="font-medium hover:text-primary"
                                            >
                                                <a href={link.href}>{link.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
                        <p>© 2025 Up Watch. All rights reserved.</p>
                        <ul className="flex justify-center gap-4 lg:justify-start">
                            <li className="hover:text-primary">
                                <a href="#"> Terms and Conditions</a>
                            </li>
                            <li className="hover:text-primary">
                                <a href="#"> Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}

export default Footer