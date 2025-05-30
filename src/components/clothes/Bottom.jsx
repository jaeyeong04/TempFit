import { useState, useEffect } from "react";
import longSkirt from "../../assets/clothes/bottom/Female_longskirt.png";
import cargo from "../../assets/clothes/bottom/Uni_cargo.png";
import jean from "../../assets/clothes/bottom/Uni_jean.png";
import longSweat from "../../assets/clothes/bottom/Uni_longSweatpants.png";
import shorts from "../../assets/clothes/bottom/Uni_shortpants.png";
import shortSweat from "../../assets/clothes/bottom/Uni_shortSweatpants.png";
import slacks from "../../assets/clothes/bottom/Uni_slacks.png";
import linen from "../../assets/clothes/bottom/Uni_linen.png";

const bottoms = {
  longSkirt,
  cargo,
  jean,
  longSweat,
  shorts,
  shortSweat,
  slacks,
  linen,
};

const displayNames = {
  longSkirt: "치마",
  cargo: "카고팬츠",
  jean: "청바지",
  longSweat: "스웻 팬츠",
  shorts: "반바지",
  shortSweat: "스웻 숏팬츠",
  slacks: "슬렉스",
  linen: "린넨 팬츠",
};

function Bottom({ bottom }) {
  let [currentBottom, setCurrentBottom] = useState(null);
  useEffect(() => {
    if (bottom && bottom.length > 0) {
      setCurrentBottom(bottom[0]);
    } else {
      setCurrentBottom(null);
    }
  }, [bottom]);
  const currentIndex = currentBottom ? bottom.indexOf(currentBottom) : -1;
  const currentBottomName = currentBottom ?? null;
  const currentImage = currentBottomName ? bottoms[currentBottomName] : null;

  return (
    <div
      style={{
        gridColumn: "2/3",
        gridRow: "6/11",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
      }}
    >
      <button
        onClick={() => {
          if (!bottom || bottom.length === 0) return;
          const prevIndex =
            (currentIndex + (bottom.length - 1)) % bottom.length;
          setCurrentBottom(bottom[prevIndex]);
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
      <div style={{ height: "80%", textAlign: "center" }}>
        {currentBottomName ? (
          <>
            <div
              style={{
                color: "black",
                fontSize: "25px",
              }}
            >
              {displayNames[currentBottomName]}
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
          </>
        ) : (
          <div
            style={{
              fontSize: "30px",
              color: "black",
            }}
          >
            하의
          </div>
        )}
      </div>
      <button
        onClick={() => {
          if (!bottom || bottom.length === 0) return;
          const nextIndex = (currentIndex + 1) % bottom.length;
          setCurrentBottom(bottom[nextIndex]);
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

export default Bottom;
