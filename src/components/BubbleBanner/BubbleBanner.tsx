import { useEffect, useState } from 'react';
import * as d3 from 'd3';
import styles from './styles.module.css';
import { iconArr } from '../../data/data';
import type { Skill } from '../../types';

type BubbleDatum = Skill & { value: number };
type BubbleNode = d3.HierarchyCircularNode<BubbleDatum>;

const BubbleBanner = () => {
    const [nodes, setNodes] = useState<BubbleNode[]>([]);

    useEffect(() => {
        const width = 600;
        const height = 600;

        const data: BubbleDatum[] = iconArr.map((item) => ({
            ...item,
            value: Math.floor(Math.random() * 80) + 20,
        }));

        const root = d3
            .hierarchy<BubbleDatum>({ children: data } as unknown as BubbleDatum, (d) => (d as unknown as { children?: BubbleDatum[] }).children)
            .sum((d) => d.value);
        const pack = d3.pack<BubbleDatum>().size([width, height]).padding(10);
        setNodes(pack(root).leaves());
    }, []);

    return (
        <svg className={styles.bubbleSvg} viewBox="0 0 600 600">
            {nodes.map((node) => {
                const Icon = node.data.Icon;
                return (
                    <g key={node.data.title} transform={`translate(${node.x},${node.y})`}>
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
