import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./pages/Home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MultiSelectTheme } from "chakra-multiselect";

const theme = extendTheme({
  components: {
    MultiSelect: MultiSelectTheme,
  },
});

export const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider theme={theme}>
        <Home />
      </ChakraProvider>
    </ReduxProvider>
  );
};
