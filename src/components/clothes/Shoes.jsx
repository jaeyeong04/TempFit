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
  let [currentShoes, setCurrentShoes] = useState(null);
  useEffect(() => {
    if (shoes && shoes.length > 0) {
      setCurrentShoes(shoes[0]);
    } else {
      setCurrentShoes(null);
    }
  }, [shoes]);
  const currentIndex = currentShoes ? shoes.indexOf(currentShoes) : -1;
  const currentShoesName = currentShoes ?? null;
  const currentImage = currentShoesName ? shoeTypes[currentShoesName] : null;

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
          if (!shoes || shoes.length === 0) return;
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
      <div
        style={{
          height: "80%",
          width: "40%",
          display: "flex",
          gap: "1%",
          textAlign: "center",
        }}
      >
        {currentShoesName ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "black",
                fontSize: "12px",
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
          </>
        ) : (
          <div
            style={{
              fontSize: "30px",
              color: "black",
            }}
          >
            신발
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (!shoes || shoes.length === 0) return;
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
