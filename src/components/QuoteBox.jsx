import Buttons from "./Buttons";
import { FaTwitter } from 'react-icons/fa';
import { useEffect, useState } from "react";
import Link from "next/link";


export default function QuoteBox({ darkMode, setDarkMode }) {




    // const [data, setData] = useState({ data: [] });
    // const [isLoading, setIsLoading] = useState(false);
    // const [err, setErr] = useState('');

    // const handleClick = async () => {
    //     setIsLoading(true);

    //     try {
    //         const response = await fetch('https://api.quotable.io/random', {
    //             method: 'GET',
    //             headers: {
    //                 Accept: 'application/json',
    //             },
    //         });

    //         if (!response.ok) {
    //             throw new Error(`Error! status: ${response.status}`);
    //         }

    //         const result = await response.json();

    //         // console.log('result is: ', JSON.stringify(result, null, 4));

    //         setData(result);
    //     } catch (err) {
    //         setErr(err.message);
    //     } finally {
    //         setIsLoading(false);
    //     }
    // };


    // useEffect(()=>{

    // })

    const [data, setData] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`https://api.quotable.io/random`);
        const newData = await response.json();
        setData(newData);
    };
    useEffect(() => {
        fetchData();
    }, [])






    // const api_url = "https://api.quotable.io/random";

    // async function getQuote(url) {
    //     const respone = await fetch(url);
    //     var data = respone.json();
    //     console.log(data);
    // }

    // getQuote(api_url);

    return (
        <>


            <div className="quote-box md:w-2/4 lg:w-1/2 w-3/4 shadow-2xl   duration-75 absolute -translate-x-1/2 -translate-y-1/2 
            rounded-xl bg-[#fff] top-2/4 p-11 left-2/4 text-center">

                {/* Quote Content and Author name */}
                <h2 className="text-3xl mb-10 relative after::content-none after:w-20 after:h-1 after:rounded-md  
                after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2
               after:bg-cyan-500">Quote of the day</h2>
                <blockquote className='text-2xl min-h-[110px] '>{data.content}</blockquote>
                <span className='block mt-3 float-right relative before::content-none before:w-5
                before:h-[2px] before:bg-cyan-500 before:absolute before:top-1/2 before:left-[-30px]'>{data.author}</span>

                {/* Buttons */}
                <div className="w-[100%] mt-[50px] flex justify-center">
                    <button onClick={fetchData} className="bg-cyan-500 text-slate-50 rounded-[25px] border-cyan-500 w-[150px]
                    h-[50px] flex items-center justify-center m-[5px] cursor-pointer">
                        New Quote
                    </button>

                    <Link href={'https://twitter.com/intent/tweet?text=' + data.content + '     ---' + data.author} target="__blank" >


                    <button className=" text-cyan-500 rounded-[25px] border-2 border-cyan-500 w-[150px]
                    h-[50px] flex items-center justify-center m-[5px] bg-transparent  cursor-pointer">
                        <FaTwitter className='mr-[10px] w-[20px]' />Tweet</button>
                    </Link>
                </div>
            </div>
        </>
    )
}