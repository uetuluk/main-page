import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import LanguageButton from "../LanguageButton"
import { Location } from '@reach/router';
import("./index.scss")

const positionList = {
    "": 0,
    "resume": 1,
    "portfolio": 2,
    "about": 3
}

const positionDecider = (linkTo ,location) => {
    const currentPath = location.pathname.split("/")[2];
    if (positionList[linkTo] > positionList[currentPath] ){
        return "left"
    } else {
        return "right"
    }
}

export default injectIntl(
    ({ intl }) => {
        return (
        <Location>
            {({location}) => 
                <div className="Navbar">
                    <div className="siteTitle"><AniLink cover bg="#F8C053" direction={positionDecider("resume", location )} to={"/" + intl.locale + "/"}>{intl.formatMessage({ id: "name" })}</AniLink></div>
                    <div className="Navbar-menu">
                        <span><AniLink cover bg="#F8C053" direction={positionDecider("resume", location )} to={"/" + intl.locale + "/resume/"}>{intl.formatMessage({ id: "navbar.resume" })}</AniLink></span>
                        <span><AniLink cover bg="#F8C053" direction={positionDecider("portfolio", location )} to={"/" + intl.locale + "/portfolio/"}>{intl.formatMessage({ id: "navbar.portfolio" })}</AniLink></span>
                        <span><AniLink cover bg="#F8C053" direction={positionDecider("about", location )} to={"/" + intl.locale + "/about/"}>{intl.formatMessage({ id: "navbar.about" })}</AniLink></span>
                        <span><a href="https://blog.uetuluk.xyz">{intl.formatMessage({ id: "navbar.blog" })}</a></span>
                        <LanguageButton locale={intl.locale} />
                    </div>
                </div>
            }
            
        </Location>
        )
    })
