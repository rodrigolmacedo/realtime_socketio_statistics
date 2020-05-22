import React from 'react';
import drawCircle from './utilities/canvasLoadAnimation';

export default function Cpu(props){
    const cpu = props.item;
    const canvasId = `cpu-widget-${props.item.macA.replaceAll(':','')}`;
    const canvas = document.querySelector(`.${canvasId}`);
    drawCircle(canvas, cpu.cpuLoad);
    return (
        <div className="col-sm-3 cpu">
            <h3>CPU load</h3>
            <div className="canvas-wrapper">
                <canvas className={canvasId}  width="200" height="200"></canvas>
                <div className="cpu-text">{cpu.cpuLoad}</div>
            </div>
        </div>
    );
}