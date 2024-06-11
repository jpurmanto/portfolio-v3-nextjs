"use client";
import { Box } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

const AudioPlayer = ({ src }: { src: string }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const playAudio = () => {
      if (audio) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    };

    const box = document.getElementById("audio-box"); // Mengambil elemen box berdasarkan ID
    if (box) {
      box.addEventListener("click", playAudio); // Menambahkan event listener untuk klik pada box
    }

    return () => {
      if (box) {
        box.removeEventListener("click", playAudio); // Menghapus event listener saat komponen di-unmount
      }
    };
  }, []);

  return (
    <Box
      id="audio-box"
      position="absolute"
      top={0}
      right={0}
      bottom={0}
      left={0}
    >
      <audio ref={audioRef} src={src} loop />
    </Box>
  );
};

export default AudioPlayer;
