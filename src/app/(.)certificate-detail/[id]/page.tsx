"use client";
import { Text, Image } from "@chakra-ui/react";
import certificateList from "~/assets/CertificateList/CertificateList";
import Modal from "@/app/(portfolio)/components/Core/Modal/Modal";
export default function CertificateDetailModal(props: any) {
  const { params } = props;
  const id = Number(params.id);
  return (
    <Modal>
      <Text style={{ color: "whitesmoke" }} mb={5} fontSize={"sm"}>
        Click on dark area to close preview
      </Text>

      <Image
        className="animate__animated animate__zoomIn"
        src={certificateList[id - 1].img}
        width={{ base: "90vw", xl: "120vh" }}
        alt={certificateList[id - 1].altImg}
      />
    </Modal>
  );
}
