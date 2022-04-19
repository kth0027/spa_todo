import React, { useState } from "react";

function App() {
  const [form, setForm] = useState({
    userId: "",
    password: "",
    introduction: "",
    foreigner: false,
    gender: "",
    nationality: "",
  });

  const {
    userId,
    password,
    introduction,
    foreigner,
    gender,
    nationality,
  } = form;

  const handleChange = (e) => {
    let inputValue = "";
    if (e.target.name === "foreigner") {
      console.log("e.target.value = " + e.target.value);
      console.log("e.target.checked = " + e.target.checked);

      inputValue = !(e.target.value === "true");
    } else {
      inputValue = e.target.value;
    }

    const nextForm = {
      ...form,
      [e.target.name]: inputValue,
    };

    setForm(nextForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("userId : " + userId);
    console.log("password : " + password);
    console.log("introduction : " + introduction);
    console.log("foreigner : " + foreigner);
    console.log("gender : " + gender);
    console.log("nationality : " + nationality);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input
                type="text"
                name="userId"
                value={userId}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>소개</td>
            <td>
              <textarea
                name="introduction"
                rows="5"
                value={introduction}
                onChange={handleChange}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>외국인 여부</td>
            <td>
              <input
                type="checkbox"
                name="foreigner"
                checked={foreigner}
                value={foreigner}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>성별</td>
            <td>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleChange}
              />
              남성
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleChange}
              />
              여성
            </td>
          </tr>
          <tr>
            <td>국적</td>
            <td>
              <select
                name="nationality"
                onChange={handleChange}
                value={nationality}
              >
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

export default App;
