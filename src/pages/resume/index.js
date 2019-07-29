import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import { StaticQuery, graphql } from "gatsby"
import("../../styles/index.scss")
import("./index.scss")

const fieldList = [
    "Experience",
    "Education",
    "Extracurricular Activities",
    "Certification",  
    "Skills",
    "Interests",
];

const toggleSection = (e) => {
    e.target.parentNode.classList.toggle('Open');
    e.target.parentNode.scrollIntoView(true);
}

const toggleAllSections = (e) => {
    document.querySelectorAll('.ContentContainer').forEach((element) => {
        element.classList.add('Open')
    })
}


export default injectIntl(
    ({ intl }) => {
        
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Resume">
                <div className="Background">
                    <div className="Container">
                        <h1>{intl.formatMessage({ id: "resume.title" })}<a href={require("../../images/Resume.pdf")} className="Download" > </a></h1>
                        <div onClick={toggleAllSections}>{intl.formatMessage({ id: "resume.Open All" })}</div>
                        <div className="SectionContainer">
                            {fieldList.map((title)=> {
                                return (
                                    <div key={title} className={`ContentContainer${title === fieldList[0] ? ' Open' : '' }`}>
                                        <h2 onClick={toggleSection}>{intl.formatMessage({ id: "resume." + title })}<span className="image"><img alt="" src={require(`../../images/icons/${title}.svg`)} /></span></h2>
                                        
                                        <div className="Content">
                                            <StaticQuery
                                                query={
                                                    graphql`
                                                        query ResumeQuery {
                                                            enYaml {
                                                                resume {
                                                                    Certification
                                                                    Education
                                                                    Experience
                                                                    Extracurricular_Activities
                                                                    Interests
                                                                    Skills
                                                                }
                                                            }
                                                        }
                                                    `
                                                }
                                                render={data => (
                                                    // console.log(data.enYaml.resume[title.replace(/\s/g, '_')])
                                                    data.enYaml.resume[title.replace(/\s/g, '_')].map((element => {
                                                        return <p key={element}>{element}</p>
                                                    }))
                                                )}
                                            />
                                        </div>
                                    </div>
                                ) 

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    })
