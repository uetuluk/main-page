import React from "react"
import("./index.scss")

export default props =>
    {
        return (
            <div className="LanguageButton">
                <span>{props.locale}</span>
            </div>
        )
    }