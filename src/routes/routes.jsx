
import Inventory from '../Pages/inventory/inventory';
import Customer from '../Pages/customer/customer';
import Dashboard from '../Pages/dashboard/dashboard';
import Home from '../Pages/home/home';

export const routes = [
    {
        route: "/home",
        name: "Home",
        component: <Home />,
    },
    {
        route: "/dashboard",
        name: "Dashboard",
        component: <Dashboard />,
    },
    {
        route: "/inventory",
        name: "Inventario",
        component: <Inventory />,
    },
    {
        route: "/customer",
        name: "Clientes",
        component: <Customer />,
    }
];