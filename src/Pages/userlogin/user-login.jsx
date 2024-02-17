import Sidebar from '../../Layouts/sidebar/sidebar'
import PageTemplate from '../../Layouts/page/page-template'

export default function UserLogin() {
    return (
        <div className="w-full h-screen flex">
            <Sidebar />
            <PageTemplate>
                <h1 className='text-100'>Ususario</h1>
            </PageTemplate>
        </div>
    )
}