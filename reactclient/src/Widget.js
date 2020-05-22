import React from 'react';
import Cpu from './Cpu';
import Mem from './Mem';
import Info from './Info';

export default function Widget(props){
    const item = props.item;    
    return (
        <div className="widget col-sm-12">
            {!item.isActive ? <div className="not-active">Offline</div> : ''}
            <Cpu item={item} />
            <Mem item={item} />
            <Info item={item} />
        </div>
    );

}