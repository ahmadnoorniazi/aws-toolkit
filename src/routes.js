/*!

=========================================================
* Material Dashboard React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import ProductList from "views/ProductLiist/ProductList";
import CustomersList from "views/CustomersList/CustomersList";
import Billing from "views/Billing/Billing.jsx";
import Not from "./components/Notification/index";
import CurrentBills from "views/CurrentBills/CurrentBills.jsx";
import ReceivedStocks from "views/ReceivedStock/index";
import AvailableStock from "views/AvailableStock/index";
// core components/views for RTL layout

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/productList",
    name: "Product List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: ProductList,
    layout: "/admin"
  },
  {
    path: "/Current-Bills",
    name: "Current Bills",
    rtlName: "قائمة الجدول",
    icon: Person,
    component: CurrentBills,
    layout: "/admin"
  },
  {
    path: "/Customers-List",
    name: "Customers List",
    rtlName: "قائمة الجدول",
    icon: Person,
    component: CustomersList,
    layout: "/admin"
  },
  {
    path: "/Billing",
    name: "Billing",
    icon: Unarchive,
    component: Billing,
    layout: "/admin"
  },
  {
    path: "/received_stocks",
    name: "Received Stocks",
    icon: Unarchive,
    component: ReceivedStocks,
    layout: "/admin"
  },
  {
    path: "/Noti",
    name: "Noti",
    icon: BubbleChart,
    component: Not,
    layout: "/admin"
  },

  {
    path: "/available_stocks",
    name: "Available Stocks",
    icon: BubbleChart,
    component: AvailableStock,
    layout: "/admin"
  }
];

export default dashboardRoutes;
