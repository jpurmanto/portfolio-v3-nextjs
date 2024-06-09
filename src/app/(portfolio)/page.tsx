import CertificateComponent from "./components/Certificate/CertificateComponent";
import HomeComponent from "./components/Home/HomeComponent";
import ClientCertificatePreview from "./components/Certificate/ClientCertificatePreview";
export default async function Home() {
  return (
    <>
      <ClientCertificatePreview />
      <HomeComponent />
      <CertificateComponent />
    </>
  );
}
