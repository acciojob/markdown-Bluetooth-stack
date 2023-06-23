import React, {useState} from "react";

const Markdown = ()=>{
    let [text, setText] = useState('');

    return(
        <div>
            <div>
                <textarea rows={40} cols={80} onChange={(e)=>{setText(e.target.value)}}></textarea>
            </div>
            <div>
                {text}
            </div>
        </div>
    )
}

export default Markdown;

