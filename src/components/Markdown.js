import React, { useEffect, useState } from "react";
// import marked from 'marked'

const Markdown = () => {
    let [render, setRender] = useState(text);
    let [text, setText] = useState('');
    
    useEffect(() => {
        let str = '';
        text && (str = text.replace(/\n/g, " "));
        let str1 = str.split(' ');
        setRender(str1[1]);
    }, [text])
    
    return (
        <div>
            <div className="app">
                <textarea rows={40} cols={80} onChange={(e) => { setText(e.target.value) }}></textarea>
            </div>
            <div className="preview">
                <h1>
                    <strong>
                        {render}
                    </strong>
                </h1>
            </div>
        </div>
    )   
}

export default Markdown;


