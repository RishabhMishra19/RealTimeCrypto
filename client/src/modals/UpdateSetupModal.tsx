import { Button } from "@chakra-ui/react";
import { ModalWrapper } from "./ModalWrapper";
import { SetupForm } from "../components/SetupForm";

export const UpdateSetupModal = () => {
  return (
    <ModalWrapper
      body={<SetupForm />}
      children={<Button>Open Modal</Button>}
      header={"Update Setup"}
      onSubmit={() => console.log("submitted")}
    />
  );
};
