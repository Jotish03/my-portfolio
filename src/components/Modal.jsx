import React from "react";

const Modal = ({ isOpen, message, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md flex flex-col items-center w-full max-w-md mx-5">
        <p className="text-center text-xl font-semibold text-black mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-[#00ff00] text-black py-3 px-8 rounded-xl font-bold shadow-md shadow-primary"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
