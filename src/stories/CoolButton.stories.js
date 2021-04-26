import React from'react';
import { storiesOf } from '@storybook/react';
import '../style.css';

import { CoolButton } from '../components/CoolButton';

const stories = storiesOf('Component test', module);

stories.add('Buttons', () => {
    const buttons = [
        { 
            text: "First button", 
            border: false, 
            radius: true, 
            width: 100, 
            height: 30
        },
        { 
            text: "Second button", 
            border: false, 
            radius: false, 
            width: 200, 
            height: 30
        }
    ]
    return (
        <CoolButton buttons={buttons} />
    )
})