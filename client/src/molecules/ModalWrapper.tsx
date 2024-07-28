import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

type ModalWrapperProps = {
  children: React.ReactNode;
  body: React.ReactNode;
  header: React.ReactNode;
};

export const ModalWrapper = ({ children, body, header }: ModalWrapperProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
