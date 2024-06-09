"use client";
import { useClipboard, Tooltip, IconButton } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
export default function ClientMailCopy() {
  const { hasCopied, onCopy } = useClipboard("kurniawanmarc93@gmail.com");
  return (
    <Tooltip
      label={hasCopied ? "Email Copied!" : "Copy Email"}
      closeOnClick={false}
      hasArrow
    >
      <IconButton
        aria-label="email"
        variant="ghost"
        size="lg"
        fontSize="3xl"
        icon={<MdEmail />}
        _hover={{
          bg: "yellow.400",
          color: "white",
        }}
        onClick={onCopy}
        isRound
      />
    </Tooltip>
  );
}
