import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../Item.module.css";
import { Item } from "../App";

interface Props {
  readonly item?: Item;
  readonly isLoading: boolean;
  readonly onModify: (itemName: string, price: number, description: string, file?: File) => void;
}

function ItemModifyForm({ item, isLoading, onModify }: Props) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File>();

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number.parseInt(e.target.value));
  };

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(e.target.files[0]);
    }
  }, []);

  const pictureUrl = (itemId: string) => {
    return (
      "/items/display?itemId=" + itemId + "&timestamp=" + new Date().getTime()
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(itemName + " " + price + " " + description);
    console.log(file);

    onModify(itemName, price, description, file);
  };

  useEffect(() => {
    if (item) {
      setItemName(item.itemName);
      setPrice(item.price);
      setDescription(item.description);
    }
  }, [item]);

  return (
    <div className={styles.centered}>
      <h2>상품 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && item && (
        <>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input type="text" value={item.itemId} disabled />
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input
                    type="text"
                    value={itemName}
                    onChange={handleChangeItemName}
                  />
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={price} onChange={handleChangePrice} />
                  &nbsp;원
                </td>
              </tr>
              <tr>
                <td>상품파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} />
                </td>
              </tr>
              <tr>
                <td>미리보기</td>
                <td>
                  <img src={pictureUrl(item.itemId)} alt="" width="200" />
                </td>
              </tr>
              <tr>
                <td>상품설명</td>
                <td>
                  <textarea
                    rows={5}
                    value={description}
                    onChange={handleChangeDescription}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button type="submit">수정</button>
            <Link to={`/read/${item.itemId}`}>취소</Link>
          </div>
        </form>
        </>
      )}
    </div>
  );
}

export default ItemModifyForm;
