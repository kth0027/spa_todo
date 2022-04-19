import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserItemRead from "../../components/useritem/UserItemRead";
import { fetchOne, FETCH_ONE } from "../../modules/useritem";
import { RootState } from "../../modules";

interface Props {
  readonly userItemNo: string;
}

const UserItemReadContainer = ({ userItemNo }: Props) => {
  const dispatch = useDispatch();

  const { userItem, isLoading } = useSelector(({ useritem, loading }: RootState) => ({
    userItem: useritem.userItem,
    isLoading: loading[FETCH_ONE],
  }));

  useEffect(() => {
    dispatch(fetchOne(userItemNo));
  }, [dispatch, userItemNo]);

  return (
    <UserItemRead
      userItem={userItem}
      isLoading={isLoading}
    />
  );
};

export default UserItemReadContainer;
