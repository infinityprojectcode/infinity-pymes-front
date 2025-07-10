import { Link } from "react-router-dom";

export default function PageTemplate({ title, children }) {
    return (
        <>
            <div className='w-full h-full overflow-y-auto bg-400'>
                <div style={{ borderBottom: '0.1px solid white'}} className='relative flex top-0 h-18 p-2 right-0 left-42 justify-between bg-400'>
                    <div>
                        <h1 className='text-100 text-2xl pl-6'>{title}</h1>
                    </div>
                </div>
                {children}
            </div >
        </>
    )
}