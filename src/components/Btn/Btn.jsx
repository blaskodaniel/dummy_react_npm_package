import * as React from 'react'
import { useState } from 'react';
import { SimpleText } from "../SimpleText"

const localization = {
    defaulttext: "Click the button please!",
    clickedtext: "Cool! Thanks :)"
}

export const Btn = ({ index, text, border = true, radius = true, width = 100, height = 30}) => {
    const [defText, setdefText] = useState(localization.defaulttext);
    const style = {
        borderRadius: radius ? '5px' : '0',
        backgroundColor: '#3f51b5',
        color: 'white',
        border: border ? '2px solid rgb(0 0 0)' : '0',
        width: `${width}px`,
        height: `${height}px`,
        cursor: 'pointer'
    }

    const onclick = () => {
        setdefText(localization.clickedtext);
        setTimeout(()=>{
            setdefText(localization.defaulttext);
        }, 3000)
    }

    return (
        <div className="cool-button-wrapper">
            <h3>{index + 1}. button</h3>
            <button type="button" style={style} onClick={onclick}>{text}</button>
            <div className="simple-text-wrapper">
                <SimpleText text={defText} />
            </div>
        </div>
    )
}