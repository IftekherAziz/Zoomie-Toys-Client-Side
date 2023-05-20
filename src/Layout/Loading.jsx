const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default Loading;
