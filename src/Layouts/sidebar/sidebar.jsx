import React from 'react'
import { Link } from "react-router-dom";
import { routes } from '../../routes/routes';

export default function Sidebar() {
    return (
        <div className='flex flex-col relative top-0 left-0 h-screen w-1/6 bg-300'>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center text-center p-8'>
                    <h1 className='text-2xl font-base text-100 font-bold '>
                        Infinit Pymes
                    </h1>
                </div>
                <div className='flex flex-col h-full gap-4'>
                    {routes.map((item, index) => (
                        <Link key={index} className='text-200' to={item.route}>
                            <div key={item.id} className='w-full h-16 p-4 flex flex-row justify-center hover:bg-white hover:cursor-pointer hover:text-black font-semibold'>
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}