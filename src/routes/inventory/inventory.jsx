import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListInventory from "@components/inventory/list-inventory.jsx";

export default function inventory() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <PageTemplate>
          <div className="w-full h-full pt-10 p-8">
            <ListInventory />
          </div>
        </PageTemplate>
      </div>
    </>
  );
}
