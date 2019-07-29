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


export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Background">
                <div className="Container">
                    <h1>{intl.formatMessage({ id: "resume.title" })}</h1>
                    <div>{intl.formatMessage({ id: "resume.Open All" })}</div>
                    {fieldList.map((title)=> {
                        return (
                            <div key={title} className="ContentContainer">
                                <h2>{intl.formatMessage({ id: "resume." + title })}</h2>
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
                                                return <p>{element}</p>
                                            }))
                                        )}
                                    />
                                </div>
                            </div>
                        ) 

                    })}
                </div>
            </div>
        </>
        )
    })
