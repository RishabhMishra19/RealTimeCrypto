import { SetupComponent } from "../components/SetupComponent";
import { CryptoDataTable2 } from "../components/CryptoDataTable2";
import { HStack } from "@chakra-ui/react";
import { AppDescription } from "../components/AppDescription";

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
      <CryptoDataTable2 />
      <SetupComponent />
    </HStack>
  );
};
