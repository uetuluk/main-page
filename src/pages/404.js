import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"

import("../styles/index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "404.title" })} />  
            <Navbar />
            <div className="Background">
                <div className="Container">
                    <h1 >{intl.formatMessage({ id: "404.title" })}</h1>
                    <h2 >{intl.formatMessage({ id: "404.subtitle" })}</h2>
                </div>
            </div>
        </>
        )
    })
