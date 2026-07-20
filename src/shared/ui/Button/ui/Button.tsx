import type { ButtonProps } from "../model/types";
import "../style.scss"

export function Button({ text, classnames, children }: ButtonProps) {
    return (
        <button 
            className={
                `button 
                ${classnames ? classnames.join(" ") : ''}`
            }>
                {children}
                <span>{text}</span>
            </button>
    )
}