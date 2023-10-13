import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./TeamBarChart.css";
import {
  formatSpeakerName,
  getResponsiveSvgDims,
  speakerColors,
} from "../utils";
import exampleTeamtimers from "../data/exampleTeamTimers.json";

const speakerNameShort = (i) => `#${i}`;

const createSvgGraph = (data, svgRef, parentRef) => {
  // Ignore the noSpeaker timer
  const speakingTimes = data.slice(1);
  const speakers = speakingTimes.length;
  const maxTimer = Math.max(...speakingTimes);

  // Set width and height of display based on container size
  const [width, height] = getResponsiveSvgDims(parentRef);

  const colWidth = width / speakers - 16;

  const svg = d3
    .select(svgRef.current)
    .attr("width", width)
    .attr("height", height);

  const xScale = d3
    .scaleBand()
    .domain(speakingTimes.map((t, i) => speakerNameShort(i + 1)))
    .range([0, width]);

  const yScale = d3.scaleLinear().domain([0, maxTimer]).range([height, 0]);

  const yAxis = d3.axisLeft(yScale).ticks(10);
  const xAxis = d3.axisBottom(xScale).tickSizeOuter(0);

  svg
    .selectAll("rect")
    .data(speakingTimes)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(speakerNameShort(i + 1)))
    .attr("y", (d) => yScale(d))
    .attr("width", colWidth)
    .attr("height", (d) => (d * height) / maxTimer)
    .attr("fill", (d, i) => speakerColors[formatSpeakerName(i + 1)]);

  svg
    .append("g")
    .call(yAxis)
    .call((g) =>
      g
        .append("text")
        .attr("x", -40)
        .attr("y", -16)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Speaking Time (s)")
    );

  svg.append("g").call(xAxis).attr("transform", `translate(-8,${height})`);
};

const TeamBarChart = ({ teamTimers }) => {
  const svgRef = useRef();
  const parentRef = useRef();
  const [data, setData] = useState(
    teamTimers.length > 0 ? teamTimers : exampleTeamtimers
  );

  // Create SVG chart
  useEffect(() => {
    createSvgGraph(data, svgRef, parentRef);
  }, []);

  return (
    <div className="Team-bar" ref={parentRef}>
      <svg ref={svgRef} className="bar-svg"></svg>
    </div>
  );
};

export default TeamBarChart;
