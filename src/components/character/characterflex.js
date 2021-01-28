import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CharacterItem from "./chanracterItem";
import Spinner from "./../ui/spinner"

const CharacterFlex = ({items, isloading}) => {
   return isloading ? (<Spinner/>) : <section className="cards">
       {items.map(item =>(
           <CharacterItem key={item.char_id}  item={item}/>
       ))}
   </section> 

}
export default CharacterFlex