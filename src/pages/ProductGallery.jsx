import React, { useState } from "react";
import Modal from "./ProductModal";

const images = [
  { id: 1, src: "/lighter1.jpg", model: "/lighter1.glb" },
  { id: 2, src: "/lighter1.jpg", model: "/lighter1.glb" },
  { id: 3, src: "/lighter1.jpg", model: "/lighter1.glb" },
];

const ProductGallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Lighter</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer hover:scale-105 transition"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.src}
              alt={`Lighter ${item.id}`}
              className="w-full h-48 object-cover rounded shadow"
            />
          </div>
        ))}
      </div>

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
};

export default ProductGallery;
