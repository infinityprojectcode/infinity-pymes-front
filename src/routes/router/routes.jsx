import Inventory from "@routes/inventory/inventory.jsx";
import Customer from "@routes/customer/customer.jsx";
import Dashboard from "@routes/dashboard/dashboard.jsx";
import Home from "@routes/home/home.jsx";
import HomeIcon from "@assets/icons/home-icon";
import DashboardIcon from "@assets/icons/dashboard-icon";
import InventoryIcon from "@assets/icons/inventory-icon";
import BillingIcon from "@assets/icons/billing-icon";
import ClientsIcon from "@assets/icons/clients-icon";

export const appRoutes = [
  {
    id: crypto.randomUUID(),
    path: "/home",
    name: "Inicio",
    element: Home,
    icon: <HomeIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/dashboard",
    name: "Panel",
    element: Dashboard,
    icon: <DashboardIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/inventory",
    name: "Inventario",
    element: Inventory,
    icon: <InventoryIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/customer",
    name: "Clientes",
    element: Customer,
    icon: <ClientsIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/billing",
    name: "Facturacion",
    element: Inventory,
    icon: <BillingIcon />,
  },
];
