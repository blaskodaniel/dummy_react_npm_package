import * as React from 'react'
import "../../style.css";
import { Btn } from "../Btn";

export const CoolButton = ({ buttons }) => {
    return buttons.map((btn, index) => (
        <Btn key={index} index={index} { ...btn } />
    ));
}