import Sidebar from "@layouts/sidebar/sidebar.jsx";
import PageTemplate from "@layouts/template/page-template.jsx";
import ListSchedule from "@fragments/schedule/list-schedule.jsx";

export default function Schedule() {
  return (
    <>
      <div className="w-full h-screen flex">
        <PageTemplate>
          <div className="w-full h-full">
            <ListSchedule />
          </div>
        </PageTemplate>
      </div>
    </>
  );
}
