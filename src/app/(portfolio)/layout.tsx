import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import BackToTop from "./components/BackToTopButton/BackToTop";
import Footer from "./components/Footer/Footer";
import { NavbarComponent } from "./components/Navbar/Navbar";
export default function Layout(props: any) {
  return (
    <>
      <NavbarComponent />
      {props.children}
      <BackToTop />
      <Footer />
      <AudioPlayer src="/audio/song.mp3" />
    </>
  );
}
