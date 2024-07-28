import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { Home } from "./pages/Home";

export const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </ReduxProvider>
  );
};
