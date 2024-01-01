import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      World Wise...
      <Link to="/app">Go To App </Link>
    </div>
  );
}
