/* eslint-disable no-debugger */
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useEffect, useState } from "react";

function Dashboard() {

    debugger;
    const [task, setTask] = useState([]);

    useEffect(() => {
        if (task.length === 0) {
            fetchData();
        }
    }, [task]);

    async function fetchData() {
        const response = await fetch("http://localhost:8080/task/1");
        const data = await response.json();
        setTask(...data);
    }


    return (
        <div className="w-full h-screen">
            <Header />
            <h1 className="text-3xl font-bold underline"> Inicio </h1>
            <div>
                {task.length > 0 ? (
                    <ul>
                        {task.map((taskItem) => (
                            <li key={taskItem.id}> {taskItem.title}</li>
                        ))}
                    </ul>
                ) : null}


            </div>
            <Footer />
        </div>
    );
}


export default Dashboard;