import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchCryptoList } from "../redux/cryptoSlice";
import { ReactTable } from "../molecules/ReactTable";
import { CryptoTableHeader } from "../utils/constants";

export const CryptoTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cryptoData = useSelector((state: RootState) => state.crypto);

  useEffect(() => {
    dispatch(fetchCryptoList());
  }, [dispatch]);

  return (
    <ReactTable
      columns={CryptoTableHeader}
      data={cryptoData.data}
      fetchMoreData={(pageIndex) => console.log({ pageIndex })}
      pageCount={cryptoData.totalPages}
      totalCount={cryptoData.total}
    />
  );
};
