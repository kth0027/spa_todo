import React from "react";

function UserForm({
  userId,
  password,
  introduction,
  foreigner,
  gender,
  nationality,
  onChangeUserId,
  onChangePassword,
  onChangeIntroduction,
  onChangeForeigner,
  onChangeGender,
  onChangeNationality,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" value={userId} onChange={onChangeUserId} />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
              />
            </td>
          </tr>
          <tr>
            <td>소개</td>
            <td>
              <textarea
                rows="5"
                value={introduction}
                onChange={onChangeIntroduction}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>외국인 여부</td>
            <td>
              <input
                type="checkbox"
                checked={foreigner}
                onChange={onChangeForeigner}
              />
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                value="male"
                checked={gender === "male"}
                onChange={onChangeGender}
              />
              남성
              <input
                type="radio"
                value="female"
                checked={gender === "female"}
                onChange={onChangeGender}
              />
              여성
            </td>
          </tr>
          <tr>
            <td>국적</td>
            <td>
              <select onChange={onChangeNationality} value={nationality}>
                <option value="">Please select one</option>
                <option value="01">Korea</option>
                <option value="02">Germany</option>
                <option value="03">Australia</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}

export default UserForm;
