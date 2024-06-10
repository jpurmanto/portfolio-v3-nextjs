import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import type { Certificate } from "~/assets/CertificateList/CertificateList";

type CertificateCardProps = Certificate;

export default function CertificateCard({
  id,
  img,
  altImg,
  blurDataURL,
}: CertificateCardProps) {
  return (
    <Link href={`/certificate-detail/${id}`} scroll={false}>
      <Box
        _hover={{
          cursor: "pointer",
          transform: "scale(1.05)",
          filter: "grayscale(0%)",
        }}
        filter={"grayscale(100%)"}
        transition={"all 0.5s ease"}
        borderRadius={"xl"}
        overflow={"hidden"}
      >
        <Image
          src={img}
          alt={altImg}
          loading="lazy"
          height={283}
          width={445}
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </Box>
    </Link>
  );
}
