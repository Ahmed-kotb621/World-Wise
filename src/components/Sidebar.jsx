import { Outlet } from "react-router-dom";
import style from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={style.footer}>
        &copy; Copyright {new Date().getFullYear()} by World Wise Inc.
      </footer>
    </div>
  );
}

export default Sidebar;
