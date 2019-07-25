import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import("../../styles/index.scss")
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Hero">
                <div className="Hero-container">
                    <h1>{intl.formatMessage({id: "about.title"})}</h1>
                    <p>
                        {intl.formatMessage({id: "about.text"})}
                    </p>
                    <h2>{intl.formatMessage({id: "about.Social Links"})}</h2>
                    <a href="https://www.linkedin.com/in/utku-tuluk" ><img src={require("../../images/LinkedIN_white.svg")} alt="LinkedIN" /></a>
                    <a href="https://github.com/uetuluk/" ><img src={require("../../images/Github_white.svg")} alt="Github" /></a>
                    <a href="mailto:utkuegetuluk@gmail.com" ><img src={require("../../images/Gmail_white.svg")} alt="Gmail" /></a>
                    <a href="https://t.me/utkuege" ><img src={require("../../images/Telegram_white.svg")} alt="Telegram" /></a>
                </div>

            </div>
        </>
        )
    })
