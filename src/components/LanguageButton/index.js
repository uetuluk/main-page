import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import("./index.scss")

const languageList = {
    "en": "EN",
    "ja": "日",
    "tr": "TR",
    "zh": "中"
}
export default props =>
    {
        return (
            <div className="LanguageButton">
                
                <IntlContextConsumer>
                    {({ languages, language: currentLocale }) => 
                        <div className="dropDown">
                        <span key={currentLocale} onClick={() => changeLocale(currentLocale)}>{languageList[currentLocale]}</span>
                        <div className="dropDown-content">
                            {
                                languages.filter(language => currentLocale !== language).map((language) =>
                                    <div key={language} onClick={() => changeLocale(language)}>{ languageList[language] }</div>
                                )
                                
                            }
                        </div>
                        </div>
                           
                     
                    }
                </IntlContextConsumer>   
                         
            </div>
        )
    }