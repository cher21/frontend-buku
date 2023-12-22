"use client";

import { Modal } from "flowbite-react";
import React, { useState } from "react";

interface Props {
  header: string;
  handleClose: any;
  children?: any;
}

const Modals: React.FC<Props> = ({ handleClose, header, children }) => {
  return (
    <>
      <Modal show={handleClose} size="lg" popup onClose={handleClose}>
        <Modal.Header className="px-6 pt-3.5 border-b-2 font-poppins-medium text-xs">
          {header}
        </Modal.Header>
        <Modal.Body className="">{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
