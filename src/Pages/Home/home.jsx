import Sidebar from './../../Layouts/sidebar/sidebar'
import PageTemplate from '../../Layouts/page/page-template'
import '../../index.css';

function home() {
    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <PageTemplate title='Bienvenido'>
                    <div className='w-full h-full'>

                    </div>
                </PageTemplate>
            </div>
        </>
    )
}

export default home