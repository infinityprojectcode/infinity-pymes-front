import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListMovements from "@fragments/movements/list-movements.jsx";

export default function movements() {
  return (
    <div className="w-full h-screen flex">
      <PageTemplate>
        <div className="w-full h-full">
          <ListMovements />
        </div>
      </PageTemplate>
    </div>
  );
}
