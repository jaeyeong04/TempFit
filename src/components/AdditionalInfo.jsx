function AdditionalInfo({ rainInfo, hasBigTempDiff }) {
  let elements = [];
  for (let i = 0; i < rainInfo.length; i++) {
    if (rainInfo[0] == 0) {
      continue;
    } else {
      elements.push(
        <div key="rain">
          6시간 내에 비 예보가 있어, 외출 시 우산을 가지고 가는 것을 추천합니다
        </div>
      );
      break;
    }
  }
  if (hasBigTempDiff) {
    elements.push(
      <div key="tempDiff">일교차가 심해, 옷을 겹쳐 입는 것을 추천합니다</div>
    );
  }
  if (elements.length == 0) {
    return (
      <div
        style={{
          gridColumn: "3/4",
          gridRow: "7/12",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          fontSize: "20px",
          color: "black",
        }}
      >
        특이 사항 없음
      </div>
    );
  }
  return (
    <div
      style={{
        gridColumn: "3/4",
        gridRow: "7/12",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(105, 105, 105, 0.6)",
        fontSize: "20px",
        color: "black",
      }}
    >
      {elements}
    </div>
  );
}

export default AdditionalInfo;
