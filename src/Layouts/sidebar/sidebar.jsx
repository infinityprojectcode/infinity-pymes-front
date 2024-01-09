import React from 'react'
import { Link } from "react-router-dom";
import { routes } from '../../routes/routes';

export default function Sidebar() {
    return (
        <div className='flex flex-col relative top-0 left-0 h-screen w-1/6 bg-gray-500  '>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-center text-center p-8'>
                    <h1 className='text-2xl font-base'>
                        Infinit Pymes
                    </h1>
                </div>
                <div className='flex flex-col h-full'>
                    {routes.map((item, index) => (
                        <div key={index}>
                            <Link to={item.route}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}