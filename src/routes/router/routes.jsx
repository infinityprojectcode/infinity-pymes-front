import Inventory from "@routes/inventory/inventory.jsx";
import Customer from "@routes/customer/customer.jsx";
import Configuration from "../configuration/configuration";
import Home from "@routes/home/home.jsx";
import Billing from "@routes/billing/billing.jsx";
import HomeIcon from "@assets/icons/home-icon";
import PointOfSale from "@routes/point-of-sale/point-of-sale.jsx";
import PointOfSaleIcon from "@assets/icons/point-of-sale.jsx";
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
    path: "/point-of-sale",
    name: "Punto de Venta",
    element: PointOfSale,
    icon: <PointOfSaleIcon />,
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
    element: Billing,
    icon: <BillingIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/config",
    name: "Configuración",
    element: Configuration,
    icon: <DashboardIcon />,
  },
];
