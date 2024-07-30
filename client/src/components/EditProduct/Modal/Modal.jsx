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
   <div className="modal-edit">
     <p>
       {modalContent}
     </p>
   </div>
 );

};

export default Modal;
