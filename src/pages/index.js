import React from "react"
import { injectIntl } from "gatsby-plugin-intl"

import Navbar from "../components/Navbar"

import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <Navbar />
            <div className="index">{intl.formatMessage({ id: "title" })}</div>
        </>
        )
    })
