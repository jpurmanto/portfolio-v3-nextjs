import BackToTop from "./components/BackToTopButton/BackToTop";
import Footer from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Navbar/Navbar";
export default function Layout(props: any) {
  console.log(props);
  return (
    <>
      <NavbarComponent />
      {props.children}
      {props.test}
      <BackToTop />
      <Footer />
    </>
  );
}
