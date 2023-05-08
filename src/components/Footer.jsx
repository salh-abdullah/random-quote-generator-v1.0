import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();




    return (
        <>

            <div className="flex  flex-row mb-5 -mt-10 absolute bottom-16 lg:bottom-0 md:bottom-0 text-slate-100">
                <h1>© {currentYear} Salh Ali</h1>
            </div>
        </>
    )
}