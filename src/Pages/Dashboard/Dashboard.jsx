/* eslint-disable no-debugger */
import Sidebar from "../../Layouts/sidebar/sidebar";
import HomeTemplate from "../../Layouts/homeTemplate/home-template";

export default function dashboard() {
    return (
        <>
            <div className="w-full h-screen flex">
                <Sidebar />
                <HomeTemplate>
                    <h1>Dasboard</h1>
                </HomeTemplate>
            </div>
        </>
    )
}