import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <div className="Navbar">Navbar</div>
        )
    })
