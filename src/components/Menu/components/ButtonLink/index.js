import React from 'react'

export default function ButtonLink(props) {
    return (
        <a href={props.href} target={props.target} className={props.className}>
            {props.children}
        </a>
    )
}
