import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();



    const socails = [
        {
            id: 1,
            link: "https://twitter.com/salh__xoshnaw",
            icon: <FaTwitter />
        },
        {
            id: 2,
            link: "https://twitter.com/salh__xoshnaw",
            icon: <FaGithub />
        },
        {
            id: 3,
            link: "https://twitter.com/salh__xoshnaw",
            icon: <FaInstagram />
        },
        {
            id: 4,
            link: "https://twitter.com/salh__xoshnaw",
            icon: <FaFacebook />
        },
    ]
    return (
        <>
            {/* Socail Icons */}
            <div className="absolute flex flex-row h-20 w-44">
                {
                    socails.map(({ id, link, icon }) => {
                        <Link className="text-rose-500 absolute p-20 bottom-0 flex flex-row "
                            key={id} href={link}>{icon}</Link>
                    })
                }
            </div>


            <div className="flex flex-row absolute bottom-0 text-slate-100">
                <h1>© {currentYear} Salh Ali</h1>
            </div>
        </>
    )
}