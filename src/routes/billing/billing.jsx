import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListBilling from "../../components/facturacion/list-billing";

export default function customer() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <PageTemplate>
        <div className='w-full h-full pt-10 p-8'>
          <ListBilling />
        </div>
      </PageTemplate>
    </div>
  )
}