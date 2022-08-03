import React from 'react';
import Prod from './Prod';
import  { useState } from "react";


const Posts = () => {
        const [posts] = useState( [
        {id: 1, title: 'classical', body: 'классический вкус из ражаного солода и ржананой муки, напиток обладает тёмным цветом и кисло-сладким вкусом прекрасно подходит в солнечный день', grad: {backgroundImage: "linear-gradient(180deg, rgba(68,105,64,0) 0%, rgba(68,105,64,1) 10%, rgba(68,105,64,1) 90%, rgba(0,0,0,0) 100%)" }, pic: {backgroundImage: 'url(/fitcl.jpg)'} },
        {id: 2, title: 'dark', body: 'предварительно обжаренный и засушенный тёмный солод, обладает значительной горчинкой , серди педовок вы будете самым трушным', grad: {backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(38,38,38,1) 10%, rgba(0,0,0,1) 90%, rgba(215,56,255,0) 100%)" }, pic: {backgroundImage: 'url(/fitalt.jpg)'}},
        {id: 3, title: 'mushrooms', body: 'востановленный рецепт грибного кваса из белорусско-литовской кухни выращенный в лабораториях медузомицет обладает массой полезных свойств начиная от улучшение микрофлоры кишечника заканчивая помощью при бессонице', grad: {backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(185,87,209,1) 10%, rgba(181,126,194,1) 90%, rgba(215,56,255,0) 100%)" }, pic: {backgroundImage: 'url(/fitmh.jpg)'} }
        ])
  return (
    <div>
        {posts.map(post =>
            <Prod post={post} key={post.id} />
        )}
    </div>
  );
}

export default Posts