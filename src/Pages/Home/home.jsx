import Sidebar from './../../Layouts/sidebar/sidebar'
import HomeTemplate from './../../Layouts/homeTemplate/home-template'
import '../../index.css';

function home() {
    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <HomeTemplate>
                    <h1 className='text-100' >Home</h1>
                </HomeTemplate>
            </div>
        </>
    )
}

export default home