import Sidebar from "../../Layouts/sidebar/sidebar";
import PageTemplate from "../../Layouts/page/page-template";
import ListCustomers from "../../components/customers/list-customers";

export default function customer() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <PageTemplate title='Clientes'>
        <div className='w-full h-full pt-10 p-8'>
          <ListCustomers />
        </div>
      </PageTemplate>
    </div>
  )
}