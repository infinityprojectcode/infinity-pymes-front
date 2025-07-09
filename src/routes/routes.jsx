
import Inventory from '../Pages/inventory/inventory';
import Customer from '../Pages/customer/customer';
import Dashboard from '../Pages/dashboard/dashboard';
import Home from '../Pages/home/home';
import HomeIcon from '../assets/icons/home-icon';
import DashboardIcon from '../assets/icons/dashboard-icon';
import InventoryIcon from '../assets/icons/inventory-icon';
import BillingIcon from '../assets/icons/billing-icon';
import ClientsIcon from '../assets/icons/clients-icon';


export const routes = [
    {
        id: crypto.randomUUID(),
        route: "/home",
        name: "Inicio",
        component: <Home />,
        icon: <HomeIcon/>
    },
    {
        id: crypto.randomUUID(),
        route: "/dashboard",
        name: "Panel",
        component: <Dashboard />,
        icon: <DashboardIcon/>
    },
    {
        id: crypto.randomUUID(),
        route: "/inventory",
        name: "Inventario",
        component: <Inventory />,
        icon: <InventoryIcon/>
    },
    {
        id: crypto.randomUUID(),
        route: "/billing",
        name: "Facturacion",
        component: <Inventory />,
        icon: <BillingIcon/>
    },
    {
        id: crypto.randomUUID(),
        route: "/customer",
        name: "Clientes",
        component: <Customer />,
        icon: <ClientsIcon/>
    }
];