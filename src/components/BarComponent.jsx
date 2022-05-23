import React, { useRef, useEffect } from 'react'
import './styles/BarComponent.scss'
import * as d3 from 'd3'

export default function Bar() {
    const chartRef = useRef(null);
    const w = 700, h = 500;

    let currentRef;
    let data = [12, 36, 30, 45, 55, 60, 70, 85, 97, 24];

    const genRandomColor = () => {

        let col1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
        let col2 = "#" + Math.floor(Math.random() * 16777215).toString(16);

        if (col1 === "#f1eee9" || col2 === "#f1eee9")
            genRandomColor();

        return { col1, col2 }
    }

    const changeChart = () => {
        for (let i = 0; i < data.length; i++) {
            data[i] = Math.floor(Math.random() * 50) + 10;
        }

        let { col1, col2 } = genRandomColor();

        let ref = currentRef.selectAll("rect")
            .data(data)

        ref.enter()
            .append("rect")
            .merge(ref)
            .transition()
            .duration(1000)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d) => h - 10 * d)
            .attr("width", 55)
            .attr("height", (d) => d * 10)
            .attr("fill", (d) => d > 40 ? col1 : col2)
    }


    const createChart = () => {
        let { col1, col2 } = genRandomColor();

        currentRef = d3.select(chartRef.current)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style('padding', 10)

        currentRef.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d) => d * 10)
            .attr("fill", (d) => d > 40 ? col1 : col2)
    }

    useEffect(() => {
        createChart();
        // eslint-disable-next-line
    }, [])


    return (
      
        <div className="chart">
           <h1>Click graph to change data</h1>
            <div
                ref={chartRef}
                onClick={changeChart}
            ></div>
           
        </div>
    )
}