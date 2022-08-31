import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const DialogModal = ({ openModal, closeModal }) => {
  return (
    <>
      {openModal && (
        <section className="modal__bg">
          <div className="modal__align">
            <div className="modal__content" entryPopup={openModal}>
              <IoCloseOutline
                className="modal__close"
                arial-label="Close modal"
                onClick={closeModal}
              />
              <div className="modal__video-align">
                <div className="w-full h-full">hello</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DialogModal;
