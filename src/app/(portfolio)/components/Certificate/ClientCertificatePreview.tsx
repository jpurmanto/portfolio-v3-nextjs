"use client";

import CertificatePreview from "./ClientCertificate/CertificatePreview";
import { usePreviewCertificate } from "@/app/utils/Zustand";
export default function ClientCertificatePreview() {
  const previewCertificate = usePreviewCertificate(
    (state: any) => state.previewCertificate
  );

  if (!previewCertificate) {
    return null;
  }

  return <CertificatePreview />;
}
