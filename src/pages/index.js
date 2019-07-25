import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../components/Navbar"
import SEO from "../components/SEO"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import("../styles/index.scss")

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Hero">
                <div className="Hero-Title">{intl.formatMessage({ id: "index.title" })}</div>
                <div className="Hero-SubTitle">{intl.formatMessage({ id: "index.subtitle" })}</div>
                <AniLink paintDrip hex="#FFFFFF" direction="top" to={"/" + intl.locale + "/portfolio/"}><div className="Hero-button"><span>{intl.formatMessage({ id: "navbar.portfolio" })}</span></div></AniLink>
            </div>
        </>
        )
    })
