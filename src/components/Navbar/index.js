import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { Link } from "gatsby-plugin-intl"
import LanguageButton from "../LanguageButton"
import("./index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <div className="Navbar">
            <div className="siteTitle"><Link to="/">{intl.formatMessage({ id: "name" })}</Link></div>
            <div className="Navbar-menu">
                <span><Link to="/resume/">{intl.formatMessage({ id: "navbar.resume" })}</Link></span>
                <span><Link to="/portfolio/">{intl.formatMessage({ id: "navbar.portfolio" })}</Link></span>
                <span><Link to="/about/">{intl.formatMessage({ id: "navbar.about" })}</Link></span>
                <span><a href="https://blog.uetuluk.xyz">{intl.formatMessage({ id: "navbar.blog" })}</a></span>
                <LanguageButton locale={intl.locale} />
            </div>
        </div>
        )
    })
