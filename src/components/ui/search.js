import Header from './header';
import React, { Component, useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')

    const onchange = (q) => {
        setText(q)
        getQuery(q)

    }
        return ( 
            <div className="center">
                <input style={{width:"350px"}}
                className="searchChar" 
                autoFocus 
                value={text}
                onChange={(e) => onchange(e.target.value)}
                placeholder="Search Here"
                ></input>
            </div>
         );
}
 
export default Search;

