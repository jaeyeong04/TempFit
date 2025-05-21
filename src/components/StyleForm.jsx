import { useState } from "react";

function StyleForm({ onSubmit }) {
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gender || !style) {
      alert("성별과 스타일을 모두 선택해주세요.");
      return;
    }
    console.log("제출완료");
    onSubmit({ gender, style });
  };

  return (
    <div
      style={{
        gridColumn: "1/4",
        gridRow: "1/2",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        color: "black",
      }}
    >
      <form onSubmit={handleSubmit} className="flexForm">
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            남성
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            여성
          </label>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="style"
              value="casual"
              checked={style === "casual"}
              onChange={(e) => setStyle(e.target.value)}
            />
            캐주얼
          </label>
          <label style={{ display: "flex", alignItems: "center" }}>
            <input
              type="radio"
              name="style"
              value="formal"
              checked={style === "formal"}
              onChange={(e) => setStyle(e.target.value)}
            />
            포멀
          </label>
        </div>
        <button
          type="submit"
          style={{ width: "100px", height: "50px", padding: "0" }}
        >
          제출
        </button>
      </form>
    </div>
  );
}

export default StyleForm;
