import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CoinPayList from "../../components/coin/CoinPayList";
import { fetchPayList, FETCH_PAY_LIST } from "../../modules/coin";
import { RootState } from "../../modules";

const CoinPayListContainer = () => {
  const dispatch = useDispatch();

  const { payCoins, isLoading } = useSelector(({ coin, loading }: RootState) => ({
    payCoins: coin.payCoins,
    isLoading: loading[FETCH_PAY_LIST],
  }));

  useEffect(() => {
    dispatch(fetchPayList());
  }, [dispatch]);

  return <CoinPayList payCoins={payCoins} isLoading={isLoading} />;
};

export default CoinPayListContainer;
