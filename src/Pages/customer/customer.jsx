import Sidebar from "../../Layouts/sidebar/sidebar";
import HomeTemplate from "../../Layouts/homeTemplate/home-template";

export default function customer() {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <HomeTemplate>
        <h1>Customers</h1>
      </HomeTemplate>
    </div>
  )
}