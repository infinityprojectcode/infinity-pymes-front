import Sidebar from '../../Layouts/sidebar/sidebar'
import PageTemplate from '../../Layouts/page/page-template'
import ListInventory from '../../components/inventory/list-inventory'

export default function inventory() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate title="Inventario">
          <div className='w-full h-full pt-10 p-8'>
            <ListInventory />
          </div>
        </PageTemplate>
      </div>
    </>
  )
}