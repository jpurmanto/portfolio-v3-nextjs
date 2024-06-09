import certificateList from "../../../../../../public/assets/CertificateList/CertificateList";
import CertificateCard from "./CertificateCard";

export default function CertificateListCardMap() {
  return certificateList
    .slice()
    .reverse()
    .map((certificate) => (
      <CertificateCard
        key={certificate.id}
        id={certificate.id}
        from={certificate.from}
        title={certificate.title}
        img={certificate.img}
        altImg={certificate.altImg}
        dateObtained={certificate.dateObtained}
      />
    ));
}
