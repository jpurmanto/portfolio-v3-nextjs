import certificateList, {
  type Certificate,
} from "../../../../../../public/assets/CertificateList/CertificateList";
import CertificateCard from "./CertificateCard";
import { getBlur } from "@/app/utils/GetBlur";

export default async function CertificateListCardMap() {
  const certificates: Certificate[] = await Promise.all(
    certificateList.map(async (certificate) => {
      return {
        ...certificate,
        blurDataURL: (await getBlur(certificate.img)).base64,
      };
    })
  );

  return certificates
    .slice()
    .reverse()
    .map((certificate) => (
      <CertificateCard
        key={certificate.id}
        id={certificate.id}
        from={certificate.from}
        title={certificate.title}
        img={certificate.img}
        blurDataURL={certificate.blurDataURL}
        altImg={certificate.altImg}
        dateObtained={certificate.dateObtained}
      />
    ));
}
