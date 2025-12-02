
import React from 'react';
export function Title(p){ 
    console.log('in title');
    
    console.log(p);
    const color = p.color;
   
    
    const myStyle = {
        color: color,
    };
    return (<header style={myStyle}>
        <h1>הספרים שלי</h1></header>)
 
}
