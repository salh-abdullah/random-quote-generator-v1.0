import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Link from "next/link";


export default function SocialIcons() {


    const socails = [
        {
            id: 1,
            link: "https://twitter.com/salh__xoshnaw",
            icon: <FaTwitter />,
        },
        {
            id: 2,
            link: "https://github.com/salh-abdullah",
            icon: <FaGithub />,
        },
        {
            id: 3,
            link: "https://www.instagram.com/salh__xoshnaw/",
            icon: <FaInstagram />,
        },
        {
            id: 4,
            link: "https://www.facebook.com/salh.ali.abdullah",
            icon: <FaFacebook />,
        }
    ]

    return (

        <div className="absolute  flex items-center md:mt-0 lg:mt-1 mt-10 justify-around flex-row top-0 h-20 bg-transparent  w-3/4  ">

            {
                socails.map(({ id, link, icon }) => {
                    return (<Link className="text-3xl hover:scale-110 hover:text-[#482084] duration-200 text-slate-100 flex"
                        target='_blank'
                        rel='noopner noreferrer'
                        href={link}
                        key={id}> {icon}
                    </Link>)
                })
            }
        </div>


    )
}