import React from 'react'
import {useParams} from "react-router";

const ColorWords = () => {
    const {keyword, textcolor, backgroundc} = useParams();
  return (
    <div style={{backgroundColor:backgroundc, textAlign:'center'}}>
        <h1 style={{color:textcolor}}>The word is: {keyword}</h1>
    </div>
  )
}

export default ColorWords

