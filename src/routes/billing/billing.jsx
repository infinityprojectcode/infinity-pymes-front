import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListBilling from "../../components/facturacion/list-billing";

export default function customer() {
  return (
    <div className="w-full h-screen flex">
      <PageTemplate>
        <div className='w-full h-full'>
          <ListBilling />
        </div>
      </PageTemplate>
    </div>
  )
}