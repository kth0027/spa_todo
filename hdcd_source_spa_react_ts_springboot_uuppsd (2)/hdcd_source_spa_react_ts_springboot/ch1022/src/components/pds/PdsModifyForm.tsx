import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "../../Shop.module.css";
import { Pds } from "../../App";

interface Props {
  readonly pdsItem: Pds | null;
  readonly attachments: string[];
  readonly isLoading: boolean;
  readonly onModify: (itemId: string, itemName: string, description: string) => void;
  readonly onAddAttach: (file: File) => void;
  readonly onRemoveAttach: (index: number) => void;
}

function PdsModifyForm({
  pdsItem,
  attachments,
  isLoading,
  onModify,
  onAddAttach,
  onRemoveAttach,
}: Props) {
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      onAddAttach(e.target.files[0]);
    }
  }, [onAddAttach]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(pdsItem) {
      onModify(pdsItem.itemId, itemName, description);
    }
  };

  useEffect(() => {
    if(pdsItem) {
      setItemName(pdsItem.itemName);
      setDescription(pdsItem.description);
    }
  }, [pdsItem]);

  const getOriginalName = (fileName: string) => {
    const idx = fileName.indexOf("_") + 1
    
    return fileName.substr(idx)
  };

  const removeAttach = (index: number) => {
    onRemoveAttach(index);
  };

  return (
    <div className={styles.centered}>
      <h2>공개자료실 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && pdsItem && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>자료번호</td>
                <td>
                  <input value={pdsItem.itemId} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>자료명</td>
                <td>
                  <input type="text" value={itemName} onChange={handleChangeItemName} />
                </td>
              </tr>
              <tr>
                <td>파일</td>
                <td>
                  <input type="file" onChange={handleChangeFile} />
                  <div>
                  {attachments.map((attachment, index) => (
                    <div key={index}>{getOriginalName(attachment)}<span onClick={() => removeAttach(index)}>X</span></div>
                  ))}
                  </div>
                </td>
              </tr>
              <tr>
                <td>자료설명</td>
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
            <Link to={`/pds/read/${pdsItem.itemId}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default PdsModifyForm;
