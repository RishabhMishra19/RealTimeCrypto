// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, AppDispatch } from "../redux/store";
// import {
//   fetchSetupData,
//   setPollingEnabled,
//   setPollingInterval,
//   setTrackedCryptoCodes,
//   setCurrency,
// } from "../redux/setupSlice";
// import { Box, Button, DarkMode, Flex, Icon, Text } from "@chakra-ui/react";
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
// } from "@chakra-ui/react";
// import { ModalWrapper } from "../molecules/ModalWrapper";
// import { SetupForm } from "./SetupForm";

// export const SetupComponent: React.FC = () => {
//   const dispatch: AppDispatch = useDispatch();
//   const setup = useSelector((state: RootState) => state.setup);

//   useEffect(() => {
//     // Fetch setup data when the component mounts
//     dispatch(fetchSetupData());
//   }, [dispatch]);

//   const handlePollingEnabledChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     dispatch(setPollingEnabled(event.target.checked));
//   };

//   const handlePollingIntervalChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     dispatch(setPollingInterval(Number(event.target.value)));
//   };

//   const handleTrackedCryptoCodesChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     const value = event.target.value.split(",").map((code) => code.trim());
//     dispatch(setTrackedCryptoCodes(value));
//   };

//   const handleCurrencyChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     dispatch(setCurrency(event.target.value));
//   };

//   const bg =
//     "linear-gradient(127.09deg, rgba(24, 29, 60, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)";
//   const textColor = "white";
//   const bgColor = "gray.800";
//   const nameColor = "white";
//   return (
//     <Flex flexDirection="column" style={{ width: "300px" }}>
//       <Box
//         display="flex"
//         flexDirection="column"
//         width="100%"
//         position="relative"
//         minWidth="0px"
//         backgroundClip="border-box"
//         bg={bg}
//         borderRadius="15px"
//         p="1.5rem"
//         my="1rem"
//       >
//         <Box display="flex" width="100%" pt="28px" px="21px" p="0px">
//           <Flex justifyContent="space-between" w="100%">
//             <Flex direction="column" maxWidth="70%">
//               <Text color={nameColor} fontSize="md" fontWeight="bold" mb="10px">
//                 Setup
//               </Text>
//               <Text color="gray.400" fontSize="sm" fontWeight="semibold">
//                 Polling Enabled:{" "}
//                 <Text as="span" color="gray.500">
//                   {setup.pollingEnabled ? "Yes" : "No"}
//                 </Text>
//               </Text>
//               <Text color="gray.400" fontSize="sm" fontWeight="semibold">
//                 Polling Interval(In Seconds){" "}
//                 <Text as="span" color="gray.500">
//                   {setup.pollingIntervalInSec + `Seconds`}
//                 </Text>
//               </Text>
//               <Text color="gray.400" fontSize="sm" fontWeight="semibold">
//                 Currency:{" "}
//                 <Text as="span" color="gray.500">
//                   {setup.currency ?? "USD"}
//                 </Text>
//               </Text>
//               <Text color="gray.400" fontSize="sm" fontWeight="semibold">
//                 Tracked Crypto Codes:{" "}
//                 <Flex direction={"column"} alignItems={"flex-start"}>
//                   {setup.trackedCryptoCodes.map((code) => (
//                     <Text as="span" color="gray.500">
//                       {code}
//                     </Text>
//                   ))}
//                 </Flex>
//               </Text>
//             </Flex>
//             <Flex
//               direction={{ sm: "column", md: "row" }}
//               alignItems="flex-start"
//               p={{ md: "1.5rem" }}
//             >
//               <Button p="0px" bg="transparent">
//                 <Flex
//                   color={textColor}
//                   cursor="pointer"
//                   alignItems="center"
//                   p="12px"
//                 >
//                   <Icon mr="4px" />
//                   <ModalWrapper
//                     body={<SetupForm />}
//                     children={
//                       <Text fontSize="sm" fontWeight="semibold">
//                         EDIT
//                       </Text>
//                     }
//                     header={"Update Setup"}
//                   />
//                 </Flex>
//               </Button>
//             </Flex>
//           </Flex>
//         </Box>
//       </Box>
//     </Flex>
//   );
// };

// export default SetupComponent;
