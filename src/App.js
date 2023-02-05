import "./App.css";
import { arc } from "d3";
const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 110;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 40;
const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(5)
  .endAngle(7.7);

function App() {
  console.log(Math.PI);
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          <circle
            r={centerY - strokeWidth / 2}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
          ></circle>
          <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <path d={mouthArc()} />
        </g>
      </svg>
      <svg height="140" width="500">
        <ellipse
          cx="200"
          cy="80"
          rx="100"
          ry="50"
          style={{ fill: "yellow", stroke: "purple", strokeWidth: 2 }}
        />
      </svg>
    </>
  );
}

export default App;
