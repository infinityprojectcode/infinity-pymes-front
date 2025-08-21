import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListExpenses from "@fragments/expenses/list-expenses.jsx";

export default function expenses() {
  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full space-y-6">
            <ListExpenses />
          </div>
        </PageTemplate>
      </div>
    </>
  );
}
