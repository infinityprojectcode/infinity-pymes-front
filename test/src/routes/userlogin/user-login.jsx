import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";

export default function UserLogin() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <PageTemplate title="Ususario"></PageTemplate>
    </div>
  );
}
