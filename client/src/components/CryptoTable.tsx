import { ReactTable } from "../molecules/ReactTable";
import {
  CryptoTableHeader,
  TrackedCryptoCodeOptions,
} from "../utils/constants";
import { useQuery } from "react-query";
import { Spinner, Text, VStack } from "@chakra-ui/react";
import { fetchCryptoDataQueryKey } from "../utils/crypto-utils/crypto-data.queryKeys";
import { fetchCryptoData } from "../utils/crypto-utils/crypto-data.service";
import { MultiSelect } from "chakra-multiselect";
import { useAppDispatch, useAppSelector } from "../redux/store";
import {
  setCryptoCode,
  setPageNum,
  setRecordsPerPage,
} from "../redux/globalSlice";

export const CryptoTable = () => {
  const dispatch = useAppDispatch();
  const cryptoCode = useAppSelector((state) => state.global.cryptoCode);
  const pageNum = useAppSelector((state) => state.global.pageNum);
  const recordsPerPage = useAppSelector((state) => state.global.recordsPerPage);

  const onPageNumChange = (newPageNum: number) => {
    dispatch(setPageNum(newPageNum));
  };

  const onCryptoCodeChange = (newCryptoCode: string) => {
    dispatch(setCryptoCode(newCryptoCode));
  };

  const onRecordsPerPageChange = (newRecordsPerPage: number) => {
    dispatch(setRecordsPerPage(newRecordsPerPage));
  };

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
          onCryptoCodeChange(selectedOptions as unknown as string);
        }}
      />
      <ReactTable
        columns={CryptoTableHeader}
        data={cryptoData.data}
        pageCount={cryptoData.totalPages}
        totalRecords={cryptoData.total}
        pageNum={pageNum}
        setPageNum={onPageNumChange}
        recordsPerPage={recordsPerPage}
        setRecordsPerPage={onRecordsPerPageChange}
      />
    </VStack>
  );
};
