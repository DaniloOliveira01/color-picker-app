import React from 'react';
import Image from 'next/image';

interface ImagePreviewProps {
  imageSrc: string;
  onColorPick: (color: string) => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imageSrc, onColorPick }) => {
  const handleImageClick = async () => {
    if (window.EyeDropper) {
      try {
        const dropper = new window.EyeDropper();
        const result = await dropper.open();
        onColorPick(result.sRGBHex);
      } catch (error) {
        console.error('Error using EyeDropper:', error);
      }
    } else {
      console.error('EyeDropper API is not supported by this browser.');
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="relative overflow-hidden rounded-lg w-[600px] h-[400px] cursor-crosshair"
        onClick={handleImageClick}
      >
        <Image
          src={imageSrc}
          alt="Uploaded Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};
