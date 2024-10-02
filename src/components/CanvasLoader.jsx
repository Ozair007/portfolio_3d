import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader" />
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 400,
          marginTop: 40,
        }}
      >
        {progress !== 0 ? `${progress.toFixed(2)}%` : "Loading..."}
      </p>
    </Html>
  );
};

export default CanvasLoader;
