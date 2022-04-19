import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";

interface Props {
  readonly onRegister: (itemName: string, price: number, description: string, file: File, previewFile: File) => void;
}

function ItemRegisterForm({ onRegister }: Props) {
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

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(file && previewFile) {
        onRegister(itemName, price, description, file, previewFile);
      }
    },
    [itemName, price, description, file, previewFile, onRegister]
  );

  return (
    <div className={styles.centered}>
      <h2>상품 등록</h2>

      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
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
          <button type="submit">등록</button>
          <Link to="/item">취소</Link>
        </div>
      </form>
    </div>
  );
}

export default ItemRegisterForm;
