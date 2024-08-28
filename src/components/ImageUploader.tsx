import React, { ChangeEvent } from "react";
import { FiUpload } from "react-icons/fi";

interface ImageUploaderProps {
  onImageUpload: (image: string) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  onImageUpload,
}) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        onImageUpload(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-[300px] h-[300px] rounded-lg border-2 border-separate border-gray-400 shadow-md">
      <label
        htmlFor="file-input"
        className="flex flex-col items-center cursor-pointer"
      >
        <FiUpload className="text-black text-4xl mb-2" />
        <span className="text-black">Clique ou arraste a imagem aqui</span>
        <input
          id="file-input"
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
    </div>
  );
};
