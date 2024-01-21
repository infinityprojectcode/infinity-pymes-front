import Sidebar from '../../Layouts/sidebar/sidebar'
import HomeTemplate from '../../Layouts/homeTemplate/home-template'

export default function UserLogin() {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <HomeTemplate>
                <h1 className='text-100'>Ususario</h1>
            </HomeTemplate>
        </div>
    )
}