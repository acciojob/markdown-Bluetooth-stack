import React, { useEffect, useState } from "react";

const Markdown = () => {
    let [text, setText] = useState('');

    useEffect(()=>{
        let str = text.replace(/\n/g, " ");
        setText(str);
    }, [text])

    return (
        <div>
            <div className="app">
                <textarea rows={40} cols={80} onChange={(e) => { setText(e.target.value) }}></textarea>
            </div>
            <div className="preview">
                <h1>
                    {text}
                </h1>
            </div>
        </div>
    )
}

export default Markdown;

