import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import LanguageButton from "../LanguageButton"
import("./index.scss")

const positionList = {
    "": 0,
    "resume": 1,
    "portfolio": 2,
    "about": 3
}

const positionDecider = (linkTo) => {
    const currentPath = window.location.pathname.split("/")[2];
    console.log(linkTo)
    console.log(positionList[linkTo], positionList[currentPath])
    if (positionList[linkTo] > positionList[currentPath] ){
        console.log("left")
        return "left"
    } else {
        console.log("right")
        return "right"
    }
}

export default injectIntl(
    ({ intl }) => {
        return (
        <div className="Navbar">
            <div className="siteTitle"><AniLink cover bg="#F8C053" direction={positionDecider("resume")} to={"/" + intl.locale + "/"}>{intl.formatMessage({ id: "name" })}</AniLink></div>
            <div className="Navbar-menu">
                <span><AniLink cover bg="#F8C053" direction={positionDecider("resume")} to={"/" + intl.locale + "/resume/"}>{intl.formatMessage({ id: "navbar.resume" })}</AniLink></span>
                <span><AniLink cover bg="#F8C053" direction={positionDecider("portfolio")} to={"/" + intl.locale + "/portfolio/"}>{intl.formatMessage({ id: "navbar.portfolio" })}</AniLink></span>
                <span><AniLink cover bg="#F8C053" direction={positionDecider("about")} to={"/" + intl.locale + "/about/"}>{intl.formatMessage({ id: "navbar.about" })}</AniLink></span>
                <span><a href="https://blog.uetuluk.xyz">{intl.formatMessage({ id: "navbar.blog" })}</a></span>
                <LanguageButton locale={intl.locale} />
            </div>
        </div>
        )
    })
