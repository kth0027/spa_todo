import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Item } from "../../App";

interface Props {
  readonly item: Item | null;
  readonly isLoading: boolean;
  readonly onModify: (itemId: string, itemName: string, price: number, description: string, file?: File, previewFile?: File) => void;
}

function ItemModifyForm({
  item,
  isLoading,
  onModify,
}: Props) {
  const [itemName, setItemName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<File>();
  const [previewFile, setPreviewFile] = useState<File>();
  const [description, setDescription] = useState("");

  const handleChangeItemName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  }, []);

  const handleChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number.parseInt(e.target.value));
  }, []);

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(e.target.files[0]);
    }
  }, []);

  const handleChangePreviewFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setPreviewFile(e.target.files[0]);
    }
  }, []);

  const handleChangeDescription = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(item) {
      onModify(item.itemId, itemName, price, description, file, previewFile);
    }
  };

  useEffect(() => {
    if(item) {
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
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>상품번호</td>
                <td>
                  <input value={item.itemId} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>상품명</td>
                <td>
                  <input type="text" value={itemName} onChange={handleChangeItemName} />
                </td>
              </tr>
              <tr>
                <td>상품가격</td>
                <td>
                  <input type="text" value={price} onChange={handleChangePrice} />
                </td>
              </tr>
              <tr>
                <td>상품파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} />
                </td>
                <td></td>
              </tr>
              <tr>
                <td>미리보기파일</td>
                <td>
                  <input type="file" onChange={handleChangePreviewFile} />
                </td>
                <td></td>
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
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link to={`/item/read/${item.itemId}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default ItemModifyForm;
