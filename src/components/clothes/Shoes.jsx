import { useState, useEffect } from "react";
import femaleLoafers from "../../assets/clothes/shoes/Female_loafers.png";
import femaleLowheel from "../../assets/clothes/shoes/Female_lowheel.png";
import femaleSandals from "../../assets/clothes/shoes/Female_sandals.png";
import maleLoafers from "../../assets/clothes/shoes/Male_loafers.png";
import maleSandals from "../../assets/clothes/shoes/Male_sandals.png";
import sneakers from "../../assets/clothes/shoes/Uni_sneakers.png";

const shoeTypes = {
  femaleLoafers,
  femaleLowheel,
  femaleSandals,
  maleLoafers,
  maleSandals,
  sneakers,
};

const displayNames = {
  femaleLoafers: "로퍼",
  femaleLowheel: "로우힐 샌들",
  femaleSandals: "샌들",
  maleLoafers: "로퍼",
  maleSandals: "샌들",
  sneakers: "운동화",
};

function Shoes({ shoes }) {
  if (shoes === undefined || shoes.length === 0 || shoes === null) {
    return (
      <div
        style={{
          gridColumn: "2/3",
          gridRow: "11/12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          fontSize: "30px",
          color: "black",
        }}
      >
        신발
      </div>
    );
  }
  let [currentShoes, setCurrentShoes] = useState(shoes[0]);
  useEffect(() => {
    setCurrentShoes(shoes[0]);
  }, [shoes]);
  const currentIndex = shoes.indexOf(currentShoes);
  const currentShoesName = shoes[currentIndex];
  const currentImage = shoeTypes[currentShoesName];

  return (
    <div
      style={{
        gridColumn: "2/3",
        gridRow: "11/12",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
        boxSizing: "border-box",
      }}
    >
      <button
        onClick={() => {
          const prevIndex = (currentIndex + (shoes.length - 1)) % shoes.length;
          setCurrentShoes(shoes[prevIndex]);
        }}
        style={{
          height: "100%",
          width: "5%",
          borderRadius: "0",
          backgroundColor: "#4d4d4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ←
      </button>
      <div style={{ height: "80%", display: "flex", gap: "1%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "black",
            fontSize: "0.7vw",
            width: "100%",
          }}
        >
          {displayNames[currentShoesName]}
        </div>
        <img
          src={currentImage}
          style={{
            maxWidth: "200%",
            maxHeight: "200%",
            objectFit: "contain",
            aspectRatio: "auto",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>
      <button
        onClick={() => {
          const nextIndex = (currentIndex + 1) % shoes.length;
          setCurrentShoes(shoes[nextIndex]);
        }}
        style={{
          height: "100%",
          width: "5%",
          borderRadius: "0",
          backgroundColor: "#4d4d4d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        →
      </button>
    </div>
  );
}

export default Shoes;
