export default function homeTemplate({ children }) {
    return (
        <>
            <div className='w-full h-full p-8 overflow-y-auto'>
                {children}
            </div>
        </>
    )
}