import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";
import { Home } from "./pages/Home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MultiSelectTheme } from "chakra-multiselect";
import { QueryClient, QueryClientProvider } from "react-query";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "#1a202c",
        color: "#e2e8f0",
      },
    },
  },
  components: {
    MultiSelect: MultiSelectTheme,
  },
});

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <ChakraProvider theme={theme}>
          <Home />
        </ChakraProvider>
      </ReduxProvider>
    </QueryClientProvider>
  );
};
