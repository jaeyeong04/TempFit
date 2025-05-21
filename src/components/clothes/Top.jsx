import { useState, useEffect } from "react";
import femaleTanktop from "../../assets/clothes/top/Female_tanktop.png";
import maleTanktop from "../../assets/clothes/top/Male_tanktop.png";
import hoodie from "../../assets/clothes/top/Uni_hoodie.png";
import longShirt from "../../assets/clothes/top/Uni_Longshirt.png";
import shortSweater from "../../assets/clothes/top/Uni_Sweater_Shortsleeve.png";
import sweater from "../../assets/clothes/top/Uni_sweater.png";
import longTshirt from "../../assets/clothes/top/Uni_Tshirt_long.png";
import Tshirt from "../../assets/clothes/top/Uni_Tshirt.png";
import turtleNeck from "../../assets/clothes/top/Uni_turtleNeck.png";

const tops = {
  femaleTanktop,
  maleTanktop,
  hoodie,
  longShirt,
  shortSweater,
  sweater,
  longTshirt,
  Tshirt,
  turtleNeck,
};

const displayNames = {
  femaleTanktop: "나시",
  maleTanktop: "나시",
  hoodie: "후드티",
  longShirt: "셔츠",
  shortSweater: "반팔 니트",
  sweater: "맨투맨/니트",
  longTshirt: "긴팔티",
  Tshirt: "티셔츠",
  turtleNeck: "터틀넥 티",
};

function Top({ top }) {
  if (top === undefined || top.length === 0 || top === null) {
    return (
      <div
        style={{
          gridColumn: "2/3",
          gridRow: "2/6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          fontSize: "30px",
          color: "black",
        }}
      >
        상의
      </div>
    );
  }
  let [currentTop, setCurrentTop] = useState(top[0]);
  useEffect(() => {
    setCurrentTop(top[0]);
  }, [top]);
  const currentIndex = top.indexOf(currentTop);
  const currentTopName = top[currentIndex];
  const currentImage = tops[currentTopName];

  return (
    <div
      style={{
        gridColumn: "2/3",
        gridRow: "2/6",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
      }}
    >
      <button
        onClick={() => {
          const prevIndex = (currentIndex + (top.length - 1)) % top.length;
          setCurrentTop(top[prevIndex]);
        }}
        style={{
          height: "5%",
          borderRadius: "0",
          backgroundColor: "#4d4d4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ↑
      </button>
      <div style={{ height: "80%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "1vw",
          }}
        >
          {displayNames[currentTopName]}
        </div>
        <img
          src={currentImage}
          style={{
            maxWidth: "80%",
            maxHeight: "80%",
            objectFit: "contain",
            aspectRatio: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <button
        onClick={() => {
          const nextIndex = (currentIndex + 1) % top.length;
          setCurrentTop(top[nextIndex]);
        }}
        style={{
          height: "5%",
          borderRadius: "0",
          backgroundColor: "#4d4d4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ↓
      </button>
    </div>
  );
}

export default Top;
