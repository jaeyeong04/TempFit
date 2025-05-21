function ClothesDisplay({ children }) {
  return (
    <>
      <div
        style={{
          width: "63%",
          height: "100%",
          backgroundColor: "rgb(105, 105, 105, 0.6)",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gridTemplateRows: "repeat(11, minmax(0, 1fr))",
          padding: "15px",
          gap: "15px",
          boxSizing: "border-box",
          justifyContent: "space-between",
        }}
      >
        {children}
      </div>
    </>
  );
}

export default ClothesDisplay;
