import HomeIcon from "./atoms/HomeIcon";
import ChevronDownIcon from "./atoms/ChevronDownIcon";
import DotCircleIcon from "./atoms/DotCircleIcon";
import PagesIcon from "./atoms/PagesIcon";
import LockIcon from "./atoms/LockIcon";
import LayoutsIcon from "./atoms/LayoutsIcon";
import ChevronUpIcon from "./atoms/ChevronUpIcon";
import CardsSideBarIcon from "./atoms/CardsSideBarIcon";
import TablesSideBarIcon from "./atoms/TablesSideBarIcon";
import DocumentationSideBarIcon from "./atoms/DocumentationSideBarIcon";
import { Link } from "react-router-dom";

export const routeDashboard = [
  {
    icon: <HomeIcon />,
    url: "/",
    title: "Dashboard",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
    dropDown: true,
  },
];

export const layOutsAndPages = [
  {
    icon: <PagesIcon />,
    title: "Pages",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
    dropDown: true,

    subTitles: [
       <Link style={{color:"white"}} to="/">Dashboard</Link> ,
       <Link style={{color:"white"}} to="/pricing">Pricing</Link>,
       <Link style={{color:"white"}} to="/account">Account</Link>,
       <Link style={{color:"white"}} to="/login">Login</Link>,
       <Link style={{color:"white"}} to="/signUp">SignUp</Link>
    ],
  },
  {
    icon: <LockIcon />,
    title: "Authentication",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
    dropDown: false,
    subTitles: [],
  },
  {
    icon: <LayoutsIcon />,
    title: "Layouts",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
    dropDown: false,
    subTitles: [],
  },
];
export const uiComponents = [
  {
    icon: <CardsSideBarIcon />,
    title: "Cards",
  },
  {
    icon: <TablesSideBarIcon />,
    title: "Tables",
  },
  {
    icon: <CardsSideBarIcon />,
    title: "Components",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
  },
  {
    icon: <CardsSideBarIcon />,
    title: "Tables",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
  },
  {
    icon: <CardsSideBarIcon />,
    title: "Utilities",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
  },
  {
    icon: <CardsSideBarIcon />,
    title: "Components",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
  },
  {
    icon: <DocumentationSideBarIcon />,
    title: "Documentation",
    iconArrowDown: <ChevronDownIcon />,
    iconArrowUp: <ChevronUpIcon />,
  },
];
