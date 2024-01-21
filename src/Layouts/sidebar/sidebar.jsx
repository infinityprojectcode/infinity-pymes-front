import { Link } from 'react-router-dom';
import { routes } from '../../routes/routes';

export default function Sidebar() {
    return (
        <div className='flex flex-col relative top-0 left-0 h-screen w-1/6 bg-300'>
            <div className='flex flex-col h-full justify-start'>
                <div className='flex flex-col justify-center text-center p-8'>
                    <div>
                        <Link to='/user-login' >
                            <button className='text-200'>
                                <svg xmlns='http://www.w3.org/2000/svg' className='icon icon-tabler icon-tabler-user-circle' width='84' height='84' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' /><path d='M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855' /></svg>
                            </button>
                        </Link>
                    </div>
                    <h1 className='text-2xl font-base text-100 font-bold '>
                        @User
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
            <div className='flex flex-col justify-end text-center p-8'>
                <p className='text-200'>
                    © 2024 Infinit Pymes
                </p>
            </div>
        </div>
    )
}