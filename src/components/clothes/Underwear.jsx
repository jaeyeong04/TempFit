import { useState, useEffect } from "react";
import inner from "../../assets/clothes/underwear/Uni_inner.png";
const underwears = {
  inner,
};

const displayNames = {
  inner: "내복",
};

function Underwear({ underwear }) {
  if (underwear === undefined || underwear.length === 0 || underwear === null) {
    return (
      <div
        style={{
          gridColumn: "3/4",
          gridRow: "2/7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          fontSize: "30px",
          color: "black",
        }}
      >
        내복
      </div>
    );
  }
  let [currentUnderwear, setCurrentUnderwear] = useState(underwear[0]);
  useEffect(() => {
    setCurrentUnderwear(underwear[0]);
  }, [underwear]);
  const currentIndex = underwear.indexOf(currentUnderwear);
  const currentUnderwearName = underwear[currentIndex];
  const currentImage = underwears[currentUnderwearName];

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
          const prevIndex =
            (currentIndex + (underwear.length - 1)) % underwear.length;
          setCurrentUnderwear(underwear[prevIndex]);
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
          {displayNames[currentUnderwearName]}
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
          const nextIndex = (currentIndex + 1) % underwear.length;
          setCurrentUnderwear(underwear[nextIndex]);
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

export default Underwear;
