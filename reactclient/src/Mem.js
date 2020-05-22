import React from 'react';
import drawCircle from './utilities/canvasLoadAnimation';

export default function Mem(props) {
    const mem = props.item;
    const totalMemInGB = Math.floor((mem.totalMem/1073741824*100))/100;
    const freeMemInGB = Math.floor((mem.freeMem/1073741824*100))/100;
    const canvasId = `memk-widget-${props.item.macA.replaceAll(':','')}`;
    const canvas = document.querySelector(`.${canvasId}`);
    drawCircle(canvas, mem.memUseage * 100);

    return (
        <div className="col-sm-3 mem">
            <h3>Memory Usage</h3>
            <div className="canvas-wrapper">
                <canvas className={canvasId} width="200" height="200"></canvas>
                <div className="mem-text">
                    {Math.floor(mem.memUseage * 100)}%
                </div>
            </div>
            <div>
                Total Memory: {totalMemInGB}GB
            </div>
            <div>
                Free Memory: {freeMemInGB}GB
            </div>
        </div>
    );
}