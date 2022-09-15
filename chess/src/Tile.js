import React from 'react';
import './Tile.css';

interface Pops{
    number: number
}
function Tile(number):Pops{
    if(number % 2 === 0){
        return <div className='black-tile'>Hello</div>;
    }else{
        return <div className='white-tile'>Hello</div>;
    }
}
export default Tile;