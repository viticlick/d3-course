import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 50;
const mouthWidth = 20;
const mouthRadius = 150;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthRadius + mouthWidth)
  .startAngle(Math.PI / 2)
  .endAngle(Math.PI * 3/2);

const BackgroundCircle = ({radius}) => (
  <circle
    r={radius}
    fill="yellow"
    stroke="black"
    stroke-width={strokeWidth}
  />
);

const Eye = ({offsetX, offsetY, radius}) =>(
  <circle
    cx={offsetX}
    cy={offsetY}
    r={radius}
  />
);

const Smile = () =>(
  <path d={mouthArc()}/>
)


const Face = () =>
  (<svg width={width} height={height} >
    <g transform={`translate(${centerX},${centerY})`}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} />
      <Eye offsetX={-eyeOffsetX} offsetY={-eyeOffsetY} radius={eyeRadius}/>
      <Eye offsetX={eyeOffsetX} offsetY={-eyeOffsetY} radius={eyeRadius}/>
      <Smile />
    </g>
  </svg>);

export default Face;
