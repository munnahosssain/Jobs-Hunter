import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  Tooltip,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const Statistics = () => {
  const data = [
    {
      subject: "A1",
      A: 60,
      B: 60,
    },
    {
      subject: "A2",
      A: 60,
      B: 58,
    },
    {
      subject: "A3",
      A: 60,
      B: 60,
    },
    {
      subject: "A4",
      A: 60,
      B: 60,
    },
    {
      subject: "A5",
      A: 60,
      B: 58,
    },
    {
      subject: "A6",
      A: 60,
      B: 60,
    },
    {
      subject: "A7",
      A: 60,
      B: 60,
    },
    {
      subject: "A8",
      A: 60,
      B: 60,
    },
  ];
  return (
    <div className="hero">
      <div className="hero-content text-center">
        <RadarChart
          className="m-0"
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 60]} />
          <Radar
            name="Total Marks"
            dataKey="A"
            stroke="#D21312"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Get Marks"
            dataKey="B"
            stroke="#393646"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </div>
    </div>
  );
};

export default Statistics;
