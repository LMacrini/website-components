import React from "react";
import "./index.css";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Footer = React.lazy(() => import("./components/Footer"));
const HeroCard = React.lazy(() => import("./components/HeroCard"));
const SpotLight = React.lazy(() => import("./components/SpotLight"));
const TextBlock = React.lazy(() => import("./components/TextBlock"));
const Cards = React.lazy(() => import("./components/Cards"));
const Blogs = React.lazy(() => import("./components/Blogs"));
const Block2 = React.lazy(() => import("./components/Block2"));
const Switch = React.lazy(() => import("./components/Switch"));
const GridList = React.lazy(() => import("./components/GridList"));
const GridList2 = React.lazy(() => import("./components/GridList2"));
const Person = React.lazy(() => import("./components/Person"));
const Tabs = React.lazy(() => import("./components/Tabs"));
const Alert = React.lazy(() => import("./components/Alert"));
const Container = React.lazy(() => import("./components/Container"));
const Header = React.lazy(() => import("./components/Header"));

export default {
  Navbar,
  Footer,
  HeroCard,
  SpotLight,
  TextBlock,
  Blogs,
  Cards,
  Block2,
  Switch,
  GridList,
  GridList2,
  Person,
  Tabs,
  Alert,
  Container,
  Header,
};
