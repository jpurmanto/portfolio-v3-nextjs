import BackToTop from "./components/BackToTopButton/BackToTop";
import Footer from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Navbar/Navbar";
import ModalWelcome from "./components/ModalPlaySong/ModalWelcome";
export default function Layout(props: any) {
  return (
    <>
      <ModalWelcome />
      <NavbarComponent />
      {props.children}
      <BackToTop />
      <Footer />
    </>
  );
}
