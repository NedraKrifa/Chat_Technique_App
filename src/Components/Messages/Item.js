import React from 'react'
import SyntaxCode from './SyntaxCode';
import detectLang from "lang-detector"

function Item({msg}) {
    const language= detectLang(msg).toLowerCase(); 
    console.log(language);
    console.log(msg);
    return (
        <li className="Messages-message">
            <span
                className="avatar"
                style={{ backgroundColor: '#05296d' }}
            />
            <div className="Message-content">
                <div className="username">
                    nedra
                </div>
                <div className="text">
                    {(language === "unknown") ?(
                        msg
                    ):(
                        <SyntaxCode textCode={msg} language={language} />  
                    )}   
                </div>
            </div>
        </li>
    )
}

export default Item;
