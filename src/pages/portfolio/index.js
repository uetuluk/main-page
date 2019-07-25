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
            <div className="Background">
                <div className="Container">
                    <h1>{intl.formatMessage({ id: "portfolio.title" })}</h1>
                </div>
            </div>
        </>
        )
    })
