import React from "react";

interface ColorDisplayProps {
  color: string;
}

export const ColorDisplay: React.FC<ColorDisplayProps> = ({ color }) => {
  return (
    <div className="border-2 border-gray-800 rounded-lg p-1">
      <p className="text-black">
        COLOR: <span className="uppercase" style={{ color }}>{color}</span>
      </p>
    </div>
  );
};
