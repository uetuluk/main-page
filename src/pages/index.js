import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"

import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>  
        <Helmet>
            <meta charSet="utf-8" />
            <title>{intl.formatMessage({ id: "title" })}</title>
            <link rel="canonical" href="https://uetuluk.xyz/en" />
        </Helmet>
            <Navbar />
            <div className="index">{intl.formatMessage({ id: "index.title" })}</div>
        </>
        )
    })
