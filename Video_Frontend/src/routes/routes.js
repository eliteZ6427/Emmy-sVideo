import Header from "pages/header";
import Footer from "pages/footer";
import ISPUsersManagement from 'pages/ispUsersManagementProgram/ispUserManagementProgramPage';
import ClientManagement from "pages/clientManagementProgram/clientManagementProgramPage";
import TourManagementProgram from "pages/tourManagementProgram";
import CameraProgram from "pages/cameraProgram";
import PricingProgram from "pages/pricingProgram";
import TourplaceProgram from "pages/tourplaceProgram";
import Dashboard from "pages/dashboard";

import PaymentProgram from 'pages/paymentProgram';

import { IoPeopleSharp } from "react-icons/io5";
import { PiFilmReelFill } from "react-icons/pi";
import { FaPeopleGroup, FaNetworkWired } from "react-icons/fa6";
import { BsCameraReelsFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";
import { MdPriceCheck } from "react-icons/md";
import { MdTour } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import InvoiceProgram from "pages/invoiceProgram";
import { FaFileInvoiceDollar } from "react-icons/fa6";

const routes = [

  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <MdDashboard size="15px" color="inherit" />,
    route: "/dashboard",
    component: <Dashboard />,
    noCollapse: true,
    access_type: [1,2,3],
  },
  {
    type: "collapse",
    name: "Header Video",
    key: "header",
    icon: <PiFilmReelFill size="15px" color="inherit" />,
    route: "/header",
    component: <Header />,
    noCollapse: true,
    access_type: [1],
  },
  {
    type: "collapse",
    name: "Footer Video",
    key: "footer",
    icon: <PiFilmReelFill size="15px" color="inherit" />,
    route: "/footer",
    component: <Footer />,
    noCollapse: true,
    access_type: [1],
  },
  {
    type: "collapse",
    name: "ISP Users",
    key: "ispUsersManagement",
    icon: <IoPeopleSharp size="15px" color="inherit" />,
    route: "/ispUsersManagement",
    component: <ISPUsersManagement />,
    noCollapse: true,
    access_type: [1],
  },
  {
    type: "collapse",
    name: "Clients",
    key: "clientManagement",
    icon: <FaPeopleGroup size="15px" color="inherit" />,
    route: "/clientManagement",
    component: <ClientManagement />,
    noCollapse: true,
    access_type: [1, 2],
  },
  {
    type: "collapse",
    name: "Tour Place",
    key: "tourplaceProgram",
    icon: <MdTour size="15px" color="inherit" />,
    route: "/tourplaceProgram",
    component: <TourplaceProgram />,
    noCollapse: true,
    access_type: [1],
  },
  {
    type: "collapse",
    name: "Camera Program",
    key: "cameraProgram",
    icon: <FaNetworkWired size="15px" color="inherit" />,
    route: "/cameraProgram",
    component: <CameraProgram />,
    noCollapse: true,
    access_type: [2],
  },
  // {
  //   type: "collapse",
  //   name: "Tour Program",
  //   key: "tourManagementProgram",
  //   icon: <BsCameraReelsFill size="15px" color="inherit" />,
  //   route: "/tourManagementProgram",
  //   component: <TourManagementProgram />,
  //   noCollapse: true,
  //   access_type: [1, 2, 3],
  // },
  {
    type: "collapse",
    name: "Pricing Program",
    key: "pricingProgram",
    icon: <MdPriceCheck size="15px" color="inherit" />,
    route: "/pricingProgram",
    component: <PricingProgram />,
    noCollapse: true,
    access_type: [2],
  },
  {
    type: "collapse",
    name: "Payment Program",
    key: "paymentProgram",
    icon: <MdOutlinePayment size="15px" color="inherit" />,
    route: "/paymentProgram",
    component: <PaymentProgram />,
    noCollapse: true,
    access_type: [1, 2, 3],
  },
  {
    type: "collapse",
    name: "Invoice Program",
    key: "invoiceProgram",
    icon: <FaFileInvoiceDollar  size="15px" color="inherit" />,
    route: "/invoiceProgram",
    component: <InvoiceProgram />,
    noCollapse: true,
    access_type: [ 1, 2, 3],
  },
];
export default routes;
