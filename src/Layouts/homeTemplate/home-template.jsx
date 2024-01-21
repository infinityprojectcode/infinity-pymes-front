import { Link } from "react-router-dom";

export default function homeTemplate({ children }) {
    return (
        <>
            <div className='w-full h-full p-8 overflow-y-auto'>
                <div className='fixed top-6 right-5'>
                    <Link to='/'>
                        <button className=' flex flex-row text-white p-2 rounded-full gap-2 bg-300'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-logout-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2' /><path d='M15 12h-12l3 -3' /><path d='M6 15l-3 -3' /></svg>
                            <p className='text-white'>
                                Salir
                            </p>
                        </button>
                    </Link>
                </div>
                {children}
            </div >
        </>
    )
}