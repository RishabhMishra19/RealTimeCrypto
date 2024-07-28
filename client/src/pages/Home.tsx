import { SetupComponent } from "../components/SetupComponent";
import { HStack } from "@chakra-ui/react";
import { AppDescription } from "../components/AppDescription";
import { CryptoTable } from "../components/CryptoTable";
import { SetupForm } from "../components/SetupForm";

export const Home = () => {
  return (
    <HStack
      style={{
        height: "100vh",
        width: "100vw",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "30px 50px",
      }}
    >
      <AppDescription />
      <CryptoTable />
      <SetupForm />
      {/* <SetupComponent /> */}
    </HStack>
  );
};
