import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListCustomers from "@components/customers/list-customers.jsx";

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