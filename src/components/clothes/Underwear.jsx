import { useState, useEffect } from "react";
import inner from "../../assets/clothes/underwear/Uni_inner.png";
const underwears = {
  inner,
};

const displayNames = {
  inner: "내복",
};

function Underwear({ underwear }) {
  let [currentUnderwear, setCurrentUnderwear] = useState(null);
  useEffect(() => {
    if (underwear && underwear.length > 0) {
      setCurrentUnderwear(underwear[0]);
    } else {
      setCurrentUnderwear(null);
    }
  }, [underwear]);
  const currentIndex = currentUnderwear
    ? underwear.indexOf(currentUnderwear)
    : -1;
  const currentUnderwearName = currentUnderwear ?? null;
  const currentImage = currentUnderwearName
    ? underwears[currentUnderwearName]
    : null;

  return (
    <div
      style={{
        gridColumn: "3/4",
        gridRow: "2/7",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
      }}
    >
      <button
        onClick={() => {
          if (!underwear || underwear.length === 0) return;
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
      <div style={{ textAlign: "center" }}>
        {currentUnderwearName ? (
          <>
            <div
              style={{
                color: "black",
                fontSize: "25px",
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
          </>
        ) : (
          <div
            style={{
              fontSize: "30px",
              color: "black",
            }}
          >
            내복
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (!underwear || underwear.length === 0) return;
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
