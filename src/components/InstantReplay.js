import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./InstantReplay.css";
import exampleEvents from "../data/exampleEvents.json";
import { speakerColors, interpolateEvents } from "../utils";

const createSvgGraph = (data, svgRef, parentRef) => {
  data = data.length > 0 ? data : exampleEvents;
  const finalState = data[data.length - 1];
  const maxTimer = Math.max(...Object.values(finalState));

  // Set width and height of display based on container size
  const width =
    parseInt(d3.select(parentRef.current).style("width"), 10) - 2.5 * 16;
  const height = Math.floor((width * 9) / 16);

  const svg = d3
    .select(svgRef.current)
    .attr("width", width)
    .attr("height", height);

  const xScale = d3
    .scaleLinear()
    .domain([0, (data.length - 1) / 60])
    .range([0, width]);

  const yScale = d3
    .scaleLinear()
    .domain([0, maxTimer / 60])
    .range([height, 0]);

  const generateScaledLine = (speakerKey) => (d) =>
    d3
      .line()
      .x((d, i) => xScale(i / 60))
      .y((d) => yScale(d[speakerKey] / 60))(d);

  const xAxis = d3.axisBottom(xScale).ticks(10);
  const yAxis = d3.axisLeft(yScale).ticks(10);

  svg
    .append("g")
    .call(xAxis)
    .attr("transform", `translate(0,${height})`)
    .call((g) =>
      g
        .append("text")
        .attr("x", -32)
        .attr("y", -height - 16)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("↑ Speaking Time (min)")
    );
  svg
    .append("g")
    .call(yAxis)
    .call((g) =>
      g
        .append("text")
        .attr("x", width - 72)
        .attr("y", height + 32)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .text("Meeting Time (min)")
    );

  Object.keys(finalState).forEach((formattedSpeaker) =>
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", generateScaledLine(formattedSpeaker))
      .attr("fill", "none")
      .attr("stroke", speakerColors[formattedSpeaker])
      .attr("stroke-width", 2)
  );
};

const InstantReplay = ({ teamSize, events }) => {
  const svgRef = useRef();
  const parentRef = useRef();
  const [data, setData] = useState(interpolateEvents(teamSize, events));

  // Create SVG chart
  useEffect(() => {
    createSvgGraph(data, svgRef, parentRef);
  }, [data]);

  return (
    <div className="Instant-replay" ref={parentRef}>
      <div className="subtitle">Instant Replay</div>
      <svg ref={svgRef} className="replay-svg"></svg>
    </div>
  );
};

export default InstantReplay;
