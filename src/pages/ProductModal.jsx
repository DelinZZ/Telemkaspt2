import React from "react";

// Ensure you added <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script> to public/index.html

const Modal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
        >
          &times;
        </button>
        <h3 className="text-xl font-semibold mb-4 text-center">3D View</h3>
        <model-viewer
          src={item.model}
          alt={`3D model of lighter ${item.id}`}
          camera-controls
          auto-rotate
          style={{ width: "100%", height: "400px" }}
          background-color="#ffffff"
        ></model-viewer>
      </div>
    </div>
  );
};

export default Modal;
