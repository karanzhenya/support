import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './MyButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const MyButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps
    }
) => {
    const finalClassName = `${s.button} ${red ? s.red : s.default} ${className}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default MyButton
