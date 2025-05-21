import { useState, useEffect } from "react";
import maleBlazer from "../../assets/clothes/outer/Male_blazer.png";
import femaleBlazer from "../../assets/clothes/outer/Female_blazer.png";
import cardigan from "../../assets/clothes/outer/Uni_cardigan.png";
import longCoat from "../../assets/clothes/outer/Uni_long-coat.png";
import mustang from "../../assets/clothes/outer/Uni_mustang.png";
import outerShirt from "../../assets/clothes/outer/Uni_outer-shirt.png";
import paddedCoat from "../../assets/clothes/outer/Uni_padded-coat.png";
import shortCoat from "../../assets/clothes/outer/Uni_short-coat.png";
import windbreaker from "../../assets/clothes/outer/Uni_windbreaker.png";

const outers = {
  maleBlazer,
  femaleBlazer,
  cardigan,
  longCoat,
  mustang,
  outerShirt,
  paddedCoat,
  shortCoat,
  windbreaker,
};

const displayNames = {
  maleBlazer: "블레이저",
  femaleBlazer: "블레이저",
  cardigan: "가디건",
  longCoat: "롱코트",
  mustang: "무스탕",
  outerShirt: "셔츠",
  paddedCoat: "패딩",
  shortCoat: "자켓",
  windbreaker: "바람막이",
};

function Outer({ outer }) {
  if (outer === undefined || outer.length === 0 || outer === null) {
    return (
      <div
        style={{
          gridColumn: "1/2",
          gridRow: "2/12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          fontSize: "30px",
          color: "black",
        }}
      >
        외투
      </div>
    );
  }
  let [currentOuter, setCurrentOuter] = useState(outer[0]);
  useEffect(() => {
    setCurrentOuter(outer[0]);
  }, [outer]);
  const currentIndex = outer.indexOf(currentOuter);
  const currentOuterName = outer[currentIndex];
  const currentImage = outers[currentOuterName];
  return (
    <div
      style={{
        gridColumn: "1/2",
        gridRow: "2/12",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
      }}
    >
      <button
        onClick={() => {
          const prevIndex = (currentIndex + (outer.length - 1)) % outer.length;
          setCurrentOuter(outer[prevIndex]);
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
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "1.8vw",
          }}
        >
          {displayNames[currentOuterName]}
        </div>
        <img
          src={currentImage}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            aspectRatio: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <button
        onClick={() => {
          const nextIndex = (currentIndex + 1) % outer.length;
          setCurrentOuter(outer[nextIndex]);
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

export default Outer;
