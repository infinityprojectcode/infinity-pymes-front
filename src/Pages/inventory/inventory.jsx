import Sidebar from '../../Layouts/sidebar/sidebar'
import HomeTemplate from '../../Layouts/homeTemplate/home-template'

export default function inventory() {
  return (
    <>
      <div className="w-full h-screen flex">
        <Sidebar />
        <HomeTemplate>
          <h1>Inventory</h1>
        </HomeTemplate>
      </div>
    </>
  )
}