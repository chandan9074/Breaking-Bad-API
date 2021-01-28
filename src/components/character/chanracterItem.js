import React, { Component } from 'react';

const CharacterItem= ({item}) => {
    return (
        <div className="main_card">
            <div className="card">
                <div className="front_card">
                    <img className="card_img" src={item.img}></img>
                </div>
                <div className="back_card">
                    <h1>{item.name}</h1>
                    <hr style={{width:"250px"}}></hr>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CharacterItem