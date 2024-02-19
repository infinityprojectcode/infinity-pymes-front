import { Link } from "react-router-dom";

export default function PageTemplate({ title, children }) {
    return (
        <>
            <div className='w-full h-full overflow-y-auto bg-400'>
                <div style={{ borderBottom: '0.1px solid white'}} className='relative flex top-0 h-18 p-2 right-0 left-42 justify-between bg-400'>
                    <div>
                        <h1 className='text-100 text-2xl pl-6'>{title}</h1>
                    </div>
                    <div>
                        <Link to='/'>
                            <button className=' flex flex-row text-white p-2 rounded-full gap-2 bg-200'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-logout-2' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2' /><path d='M15 12h-12l3 -3' /><path d='M6 15l-3 -3' /></svg>
                                <p className='text-white'>
                                    Salir
                                </p>
                            </button>
                        </Link>
                    </div>
                </div>
                {children}
            </div >
        </>
    )
}