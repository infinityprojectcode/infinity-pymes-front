import Sidebar from '../../Layouts/sidebar/sidebar'
import PageTemplate from '../../Layouts/page/page-template'

export default function inventory() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <h1 className='text-100'>Inventory</h1>
        </PageTemplate>
      </div>
    </>
  )
}