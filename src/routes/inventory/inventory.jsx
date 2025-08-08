import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListInventory from "@fragments/inventory/list-inventory.jsx";

export default function inventory() {
  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full">
            <ListInventory />
          </div>
        </PageTemplate>
      </div>
    </>
  );
}
