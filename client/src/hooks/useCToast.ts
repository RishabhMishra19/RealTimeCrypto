import { useToast } from "@chakra-ui/react";

export const useCToast = () => {
  const toast = useToast();
  return ({ title }: { title: string }) => {
    return toast({
      position: "top-right",
      title,
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };
};
