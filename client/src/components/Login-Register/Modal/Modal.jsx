import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeModal();
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [closeModal]);

  return (
    <div className="modal">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-alert-circle"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        {modalContent}
      </p>
    </div>
  );
};

export default Modal;
