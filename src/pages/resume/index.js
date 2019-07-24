import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <div className="index">{intl.formatMessage({ id: "title" })}</div>
        </>
        )
    })
