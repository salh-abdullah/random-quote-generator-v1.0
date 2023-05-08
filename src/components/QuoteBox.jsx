import { FaTwitter, FaCloudMoon, FaCloudSun } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Link from "next/link";


export default function QuoteBox({ darkMode, setDarkMode }) {



    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`https://api.quotable.io/random?maxLength=100`);
        const newData = await response.json();
        setData(newData);
    };


    useEffect(() => {
        fetchData();
    }, [])


    return (
        <div id='quote-box'  className=" max-h-min bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100
         md:w-2/4 lg:w-1/2  w-11/12 shadow-2xl flex flex-col items-center justify-center 
        duration-75 absolute -translate-x-1/2 -translate-y-1/2  rounded-3xl bg-red-400 top-1/2  p-10 left-2/4 text-center">

            {/* Quote Content and Author name */}
            <h2 className="text-3xl mb-10  relative after::content-none text-slate-100 after:w-20 after:h-1 after:rounded-md  
                after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2
               after:bg-cyan-500">Quote of the day</h2>
            <blockquote className='text-slate-100 text-xl lg:text-3xl md:text-2xl max-h-screen m-5 min-h-[110px] min-w-fit'>{data.content}</blockquote>
            <span className='text-slate-100 block mt-3 float-right minw-fit relative before::content-none before:w-5
                before:h-[2px] before:bg-cyan-500 before:absolute before:top-1/2 before:left-[-30px]'>{data.author}</span>

            {/* Buttons */}
            <div className="w-[100%] mt-[50px] flex justify-center">
                <button onClick={fetchData} className="bg-cyan-500 quote-button  duration-300 ease-in-out  text-slate-50 rounded-[25px] border-cyan-500 w-[150px]
                    h-[50px] flex items-center hover:scale-110 min-w-[120px] justify-center m-[5px] mt-[20px] cursor-pointer">
                    New Quote
                </button>

                <Link href={'https://twitter.com/intent/tweet?text=' + data.content + '     ---' + data.author} target="__blank" >


                    <button className=" text-cyan-500 hover:scale-110 duration-300 ease-in-out hover:bg-cyan-500 hover:text-slate-100 rounded-[25px] border-2 border-cyan-500 w-[120px]
                    h-[50px] flex items-center justify-center m-[5px] bg-transparent mt-[20px]  cursor-pointer">
                        <FaTwitter className='mr-[10px] w-[20px]' />Tweet</button>
                </Link>
            </div>
        </div>

    )
}