import Sidebar from './../../Layouts/sidebar/sidebar'
import PageTemplate from '../../Layouts/page/page-template'
import '../../index.css';

function home() {
    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <PageTemplate>
                    <h1 className='text-200' >Bienvenido</h1>

                    <div className='flex justify-center items-center'>
                        <img src='./../../assets/images/home.jpg' className='w-[500px] h-[500px] rounded-lg' />
                    </div>

                </PageTemplate>
            </div>
        </>
    )
}

export default home