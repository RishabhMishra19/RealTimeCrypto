import { Column } from "react-table";
import { ICrypto } from "../redux/cryptoSlice";
import { SelectProps } from "@chakra-ui/react";

export const CryptoTableHeader: Column<ICrypto>[] = [
  {
    Header: "Code",
    accessor: "code",
  },
  { Header: "Name", accessor: "name" },
  { Header: "Symbol", accessor: "symbol" },
  { Header: "Rank", accessor: "rank" },
  { Header: "Rate", accessor: "rate" },
  { Header: "Volume", accessor: "volume" },
  { Header: "Cap", accessor: "cap" },
];

export const CryptoCurrencyOptions = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "JPY", value: "JPY" },
  { label: "GBP", value: "GBP" },
  { label: "AUD", value: "AUD" },
  { label: "CAD", value: "CAD" },
  { label: "CHF", value: "CHF" },
  { label: "CNY", value: "CNY" },
  { label: "SEK", value: "SEK" },
  { label: "NZD", value: "NZD" },
];

export const CryptoOptions = [
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "JPY", value: "JPY" },
  { label: "GBP", value: "GBP" },
  { label: "AUD", value: "AUD" },
  { label: "CAD", value: "CAD" },
  { label: "CHF", value: "CHF" },
  { label: "CNY", value: "CNY" },
  { label: "SEK", value: "SEK" },
  { label: "NZD", value: "NZD" },
];
