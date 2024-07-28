import { ReactTable } from "../molecules/ReactTable";
import {
  CryptoTableHeader,
  TrackedCryptoCodeOptions,
} from "../utils/constants";
import { useQuery } from "react-query";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { fetchCryptoDataQueryKey } from "../utils/crypto-utils/crypto-data.queryKeys";
import { fetchCryptoData } from "../utils/crypto-utils/crypto-data.service";
import { MultiSelect } from "chakra-multiselect";

export const CryptoTable = () => {
  const [pageNum, setPageNum] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [cryptoCode, setCryptoCode] = useState("BTC");

  const { data: cryptoData, isLoading: isLoadingCryptoData } = useQuery(
    [fetchCryptoDataQueryKey, pageNum, recordsPerPage, cryptoCode],
    () =>
      fetchCryptoData({
        page: pageNum,
        limit: recordsPerPage,
        cryptoCode,
      }),
    {
      select(response) {
        return response.data;
      },
    }
  );

  if (isLoadingCryptoData) {
    return <Spinner />;
  }

  if (!cryptoData) {
    return <Text color={"red"}>Some Error Occured</Text>;
  }

  return (
    <VStack>
      <MultiSelect
        value={cryptoCode}
        options={TrackedCryptoCodeOptions}
        placeholder="Select currency"
        single
        onChange={(selectedOptions) => {
          setCryptoCode(selectedOptions as unknown as string);
        }}
      />
      <ReactTable
        columns={CryptoTableHeader}
        data={cryptoData.data}
        pageCount={cryptoData.totalPages}
        totalRecords={cryptoData.total}
        pageNum={pageNum}
        setPageNum={setPageNum}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={setRecordsPerPage}
      />
    </VStack>
  );
};
