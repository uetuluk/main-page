import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import("../../styles/index.scss")
import("./index.scss")

const imageListToObject = (data) =>  {
    let list = {}
    let image = ""
    console.log(data)
    data.map((ele) => {
        image = ele.node.childImageSharp.fluid
        list[image.originalName] = image
        return null
    })
    return list
} 

const openPopup = (e) => {
    console.log("Click: ", e.target);
}

export default injectIntl(
    ({ intl }) => {
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Background">
                <div className="Container">
                    <h1>{intl.formatMessage({ id: "portfolio.title" })}</h1>
                </div>
                
                <div className="ContentContainer">
                    <StaticQuery
                        query={
                            graphql`
                            query PortfolioQuery { enYaml { portfolio {
                                title
                                description
                                link
                                picture
                                } }
                                allFile(filter: {relativeDirectory: {eq: "test"}}) {
                                    edges {
                                      node {
                                        childImageSharp {
                                          id
                                          fluid(maxWidth: 1000) {
                                            originalName
                                            ...GatsbyImageSharpFluid
                                          }
                                        }
                                      }
                                    }
                                  }
                            } 
                              
                            `
                        }
                        render={data => (
                            data.enYaml.portfolio.map((project)=> {
                                console.log(project)
                                const imageObject = imageListToObject(data.allFile.edges)
                                console.log(imageObject[project.picture.split("/").pop()])
                                return (
                                <div key={project.title} className="Content" onClick={openPopup}>
                                    <h2 className="Project-Title">{project.title}</h2>
                                    <div className="Project-image">
                                        <Img fluid={imageObject[project.picture.split("/").pop()]} alt={project.title} />
                                    </div>
                                    <div className="Project-Description">
                                        <div className="Description-Long">
                                            <p>{project.description}</p>
                                        </div>
                                        <div className="Description-Link">
                                            <a href={project.link}>Check it Out</a>
                                        </div>

                                    </div>

                                </div>
                                )
                            })
                        )
                        }
                        
                    />
                </div>
            </div>
        </>
        )
    })
