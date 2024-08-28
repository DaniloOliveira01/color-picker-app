"use client";
import { ColorDisplay, ImagePreview, ImageUploader } from "@/components";
import { useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const [pickedColor, setPickedColor] = useState<string>("");

  const handleImageUpload = (image: any) => {
    setImageSrc(image);
  };

  const handleColorPick = (color: string) => {
    setPickedColor(color);
  };

  return (
    <main className="bg-slate-300 flex justify-center flex-col items-center w-full h-screen">
      <h1 className="text-blue-500 text-2xl">Color Picker</h1>
      {!imageSrc ? (
        <>
          <p className="text-black text-sm">
            Clique na imagem para ativar o conta-gotas.
          </p>
          <ImageUploader onImageUpload={handleImageUpload} />
        </>
      ) : (
        <div className="flex flex-col justify-start items-center gap-3">
          <p className="text-black text-sm">
            Clique na imagem para ativar o conta-gotas.
          </p>
          <ImagePreview imageSrc={imageSrc} onColorPick={handleColorPick} />
          <ColorDisplay color={pickedColor} />
        </div>
      )}
    </main>
  );
}
