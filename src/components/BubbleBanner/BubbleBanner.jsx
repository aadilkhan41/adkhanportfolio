import React, { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from './styles.module.css';
import { iconArr } from '../../data/data';

const BubbleBanner = () => {
    const svgRef = useRef();
    const [nodes, setNodes] = useState([]);

    useEffect(() => {
        const width = 600;
        const height = 600;

        const data = iconArr.map((item) => ({
            ...item,
            value: Math.floor(Math.random() * 80) + 20,
            name: item.title,
        }));

        const root = d3.hierarchy({ children: data }).sum((d) => d.value);
        const pack = d3.pack().size([width, height]).padding(10);
        const bubbleData = pack(root).leaves();
        setNodes(bubbleData);
    }, []);

    return (
        <svg ref={svgRef} className={styles.bubbleSvg} viewBox="0 0 600 600">
            {nodes.map((node, i) => {
                const Icon = node.data.Icon;
                return (
                    <g key={i} transform={`translate(${node.x},${node.y})`}>
                        <foreignObject x={-node.r} y={-node.r} width={node.r * 2} height={node.r * 2}>
                            <section className={styles.bubbleContent}>
                                <Icon />
                            </section>
                        </foreignObject>
                    </g>
                );
            })}
        </svg>
    );
};

export default BubbleBanner;