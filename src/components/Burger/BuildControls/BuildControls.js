import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    {label: 'Meat', type: 'meat'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Salad', type: 'salad'},
];

const buildControls = (props) => {
    return (
        <div>
            {
                controls.map(control => {
                    return <BuildControl
                        key={control.label}
                        type={control.type}
                        label={control.label}
                        added={() => props.addIngredient(control.type)}
                        removed={() => props.removeIngredient(control.type)}
                        disabled={props.disabled[control.type]}
                    />
                })
            }
        </div>
    );
}

export default buildControls;