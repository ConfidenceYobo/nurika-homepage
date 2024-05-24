import Footer from "./footer";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Template() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
