import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            Resume
        </>
        )
    })
