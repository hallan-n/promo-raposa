import { useState, useRef, useEffect } from "react"
import logo_full from "../assets/logo_full_white.svg"
import logo_icon from "../assets/logo_icon.svg"
import { Bars4Icon } from "@heroicons/react/24/solid"

export default function Header() {
    const [active, setActive] = useState("home")
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        })
    }

    const linkClass = (name) =>
        `cursor-pointer block px-4 py-2 transition-all ${
            active === name ? "font-bold text-primary" : "text-white hover:text-primary"
        }`

    const handleClick = (name) => {
        setActive(name)
        setOpen(false)
        scrollTo(name)
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
            <div className="container flex items-center justify-between mx-auto p-4">
                <img className="hidden md:block" src={logo_full} alt="" />
                <img className="block w-12 md:hidden" src={logo_icon} alt="" />

                <div className="hidden md:flex">
                    <button className={linkClass("home")} onClick={() => handleClick("home")}>Home</button>
                    <button className={linkClass("information")} onClick={() => handleClick("information")}>Informações</button>
                    <button className={linkClass("groups")} onClick={() => handleClick("groups")}>Grupos</button>
                    <button className={linkClass("questions")} onClick={() => handleClick("questions")}>Dúvidas</button>
                </div>

                <div className="relative md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        <Bars4Icon className="w-6 h-6 cursor-pointer text-white transition-all hover:text-primary" />
                    </button>

                    {open && (
                        <div
                            ref={menuRef}
                            className="absolute right-0 top-full mt-2 w-48 bg-secondary rounded-lg shadow-lg border border-white/10"
                        >
                            <button className={linkClass("home")} onClick={() => handleClick("home")}>Home</button>
                            <button className={linkClass("information")} onClick={() => handleClick("information")}>Informações</button>
                            <button className={linkClass("groups")} onClick={() => handleClick("groups")}>Grupos</button>
                            <button className={linkClass("questions")} onClick={() => handleClick("questions")}>Dúvidas</button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}
