import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchJobCodeList } from "../../lib/api";
import styles from "../../Shop.module.css";
import { Member, CodeValue, UserObject } from "../../App";

interface Props {
  readonly member: Member | null;
  readonly isLoading: boolean;
  readonly onModify: (userNo: string, userObject: UserObject) => void;
}

function MemberModifyForm({
  member,
  isLoading,
  onModify,
}: Props) {
  const [jobCodes, setJobCodes] = useState<CodeValue[]>([]);

  const [userName, setUserName] = useState("");
  const [job, setJob] = useState("");

  const [auth1, setAuth1] = useState("");
  const [auth2, setAuth2] = useState("");
  const [auth3, setAuth3] = useState("");

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleChangeJob = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setJob(e.target.value);
  };

  const handleChangeAuth1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth1(e.target.value);
  };

  const handleChangeAuth2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth2(e.target.value);
  };

  const handleChangeAuth3 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAuth3(e.target.value);
  };
  
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(member) {
      const userNo = member.userNo;

      const userObject: UserObject = {
        userId : member.userId,
        userPw : member.userPw,
        userName : userName,
        job : job,
        authList : [
          {
            userNo : userNo,
            auth : auth1
          },
          {
            userNo : userNo,
            auth : auth2
          },
          {
            userNo : userNo,
            auth : auth3
          }
        ]
      };
  
      onModify(member.userNo, userObject);
    }
  };

  const getJobCodeList = async () => {
    try {
      const response = await fetchJobCodeList();
      setJobCodes(response.data);
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    getJobCodeList();
  }, []);

  useEffect(() => {
    if(member) {
      setUserName(member.userName);
      setJob(member.job);

      setAuth1(member.authList[0] && member.authList[0].auth);
      setAuth2(member.authList[1] && member.authList[1].auth);
      setAuth3(member.authList[2] && member.authList[2].auth);
    }
  }, [member]);

  return (
    <div className={styles.centered}>
      <h2>회원 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && member && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input value={member.userNo} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>
                  <input value={member.userId} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>사용자명</td>
                <td>
                  <input type="text" value={userName} onChange={handleChangeUserName}
                  />
                </td>
              </tr>
              <tr>
              <td>직업</td>
                <td>
                  <select value={job} onChange={handleChangeJob}>
                    {jobCodes.map((jobCode) => (
                      <option value={jobCode.value} key={jobCode.value}>{jobCode.label}</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 1</td>
                <td>
                  <select value={auth1} onChange={handleChangeAuth1}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 2</td>
                <td>
                  <select value={auth2} onChange={handleChangeAuth2}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>권한 - 3</td>
                <td>
                  <select value={auth3} onChange={handleChangeAuth3}>
                    <option value="">=== 선택해 주세요 ===</option>
                    <option value="ROLE_USER">사용자</option>
                    <option value="ROLE_MEMBER">회원</option>
                    <option value="ROLE_ADMIN">관리자</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <div className={styles.align_center}>
            <button type="submit">수정</button>
            <Link to={`/member/read/${member.userNo}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default MemberModifyForm;
