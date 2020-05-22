import React from 'react';
import moment from 'moment';
import drawCircle from './utilities/canvasLoadAnimation';

export default function Info(props) {
    const info = props.item;
   
    return (
        <div className="col-sm-3 col-sm-offset-1 cpu-info">
            <h3>Operating System</h3>
            <div className="widget-text">{info.osType}</div>
            <h3>Time Online</h3>
            <div className="widget-text">{secondsToHms(info.upTime)} </div>
            <h3>Processor information</h3>
            <div className="widget-text"><strong>Type: </strong>{info.cpuModel}</div>
            <div className="widget-text"><strong>Number of Cores: </strong>{info.numCores}</div>
            <div className="widget-text"><strong>Clock Speed: </strong>{info.cpuSpeed}</div>
        </div>
    );
}

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour " : " hours ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute " : " minutes ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}