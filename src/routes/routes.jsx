
import Inventory from '../Pages/inventory/inventory';
import Customer from '../Pages/customer/customer';
import Dashboard from '../Pages/dashboard/dashboard';
import Home from '../Pages/home/home';

export const routes = [
    {
        id: crypto.randomUUID(),
        route: "/home",
        name: "Home",
        component: <Home />,
    },
    {
        id: crypto.randomUUID(),
        route: "/dashboard",
        name: "Dashboard",
        component: <Dashboard />,
    },
    {
        id: crypto.randomUUID(),
        route: "/inventory",
        name: "Inventario",
        component: <Inventory />,
    },
    {
        id: crypto.randomUUID(),
        route: "/customer",
        name: "Clientes",
        component: <Customer />,
    }
];