import type { ButtonProps } from "../model/types";
import "../style.scss"

export function Button({ text, classnames }: ButtonProps) {
    return (
        <button 
            className={
                `button 
                ${classnames ? classnames.join(" ") : ''}`
            }>
                <span>{text}</span>
            </button>
    )
}