import React from 'react'
import classes from './MenuToggle.module.css'

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        // 'fa'
    ]

    if (props.isOpen) {
        // cls.push('fa-times')
        cls.push(classes.open)
    } else {
        // cls.push('fa-bars')
    }
    return (
        <div>
            <p className={cls.join(' ')}
               onClick={props.onToggle}>меню</p>
        </div>
    )
}

export default MenuToggle