import Inventory from "@routes/inventory/inventory.jsx";
import Customer from "@routes/customer/customer.jsx";
import Configuration from "../configuration/configuration";
import Home from "@routes/home/home.jsx";
import Billing from "@routes/billing/billing.jsx";
import Movements from "@routes/movements/movements.jsx";
import HomeIcon from "@assets/icons/home-icon";
import expenses from "@routes/expenses/expenses.jsx";
import Suppliers from "@routes/suppliers/suppliers.jsx";  
import Schedule from "../schedule/schedule.jsx";
import PointOfSale from "@routes/point-of-sale/point-of-sale.jsx";
import PointOfSaleIcon from "@assets/icons/point-of-sale.jsx";
import DashboardIcon from "@assets/icons/dashboard-icon";
import InventoryIcon from "@assets/icons/inventory-icon";
import BillingIcon from "@assets/icons/billing-icon";
import ClientsIcon from "@assets/icons/clients-icon";
import MovementsIcon from "@assets/icons/movements-icon.jsx";
import ExpensesIcon from "@assets/icons/expenses-icon.jsx";
import SuppliersIcon from "../../assets/icons/suppliers-icon.jsx";
import ScheduleIcon from "../../assets/icons/schedule-icon.jsx";

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
    path: "/suppliers",
    name: "Proveedores",
    element: Suppliers,
    icon: <SuppliersIcon />,
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
    path: "/movements",
    name: "Movimientos de Caja",
    element: Movements,
    icon: <MovementsIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/expenses",
    name: "Gastos",
    element: expenses,
    icon: <ExpensesIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/schedule",
    name: "Calendario",
    element: Schedule,
    icon: <ScheduleIcon />,
  },
  {
    id: crypto.randomUUID(),
    path: "/config",
    name: "Configuración",
    element: Configuration,
    icon: <DashboardIcon />,
  },
];
