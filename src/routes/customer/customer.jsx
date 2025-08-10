import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListCustomers from "@fragments/customers/list-customers.jsx";

export default function customer() {
  return (
    <div className="w-full h-screen flex">
      <PageTemplate>
        <div className='w-full h-full'>
          <ListCustomers />
        </div>
      </PageTemplate>
    </div>
  )
}