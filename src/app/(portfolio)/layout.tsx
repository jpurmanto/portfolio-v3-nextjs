import BackToTop from "./components/BackToTopButton/BackToTop";
import Footer from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Navbar/Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarComponent />
      {children}
      <BackToTop />
      <Footer />
    </>
  );
}
