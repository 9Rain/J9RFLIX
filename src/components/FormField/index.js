import React from 'react'

export default function FormField({ tag, label, type, name, value, onChange }) {
    if(tag === "textarea") {
        return (
            <div>
                <label>
                    {label}:&nbsp;
                    <textarea type={type} 
                        name={name} 
                        value={value} 
                        onChange={onChange}
                    ></textarea>
                </label>
            </div>
        );
    }
    else {
        return (
            <div>
                <label>
                    {label}:&nbsp;
                    <input type={type} 
                        name={name} 
                        value={value} 
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    } 
}
