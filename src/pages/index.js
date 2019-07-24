import React from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <div className="index">{intl.formatMessage({ id: "title" })}</div>
        </>
        )
    })
