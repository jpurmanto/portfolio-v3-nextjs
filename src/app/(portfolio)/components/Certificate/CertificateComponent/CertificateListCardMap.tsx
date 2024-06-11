import certificateList, {
  type Certificate,
} from "~/assets/CertificateList/CertificateList";
import ClientCertificateCard from "../ClientComponent/ClientCertificateCard";
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
      <ClientCertificateCard
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
