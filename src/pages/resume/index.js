import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Navbar from "../../components/Navbar"
import SEO from "../../components/SEO"
import { StaticQuery, graphql } from "gatsby"
import Collapse from "@kunukn/react-collapse";
import("../../styles/index.scss")
import("./index.scss")

const fieldList = [
    "Experience",
    "Education",
    "Certification",  
    "Skills",
    "Extracurricular Activities",
    "Interests",
];

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openSection: [true, false, false, false, false, false] };
        
    }

    toggleSection = (e) => {
        const index = e.target.getAttribute('index');
        const { openSection: openList } = this.state;
        openList[index] = !openList[index];
        this.setState({openSection: openList})
    }
    openAllSections = () => this.toggleAllSections(true);
    closeAllSections = () => this.toggleAllSections(false);
    toggleAllSections = (state) => {
        this.setState({openSection: [state, state, state, state, state, state, state]});
    }
    
    render(){
        const {intl} = this.props; 
        return (
        <>
            <SEO locale={intl.locale} title={intl.formatMessage({ id: "title" })} />  
            <Navbar />
            <div className="Resume">
                <div className="Background">
                    <div className="Container">
                        <h1>{intl.formatMessage({ id: "resume.title" })}<a href={require("../../images/Resume.pdf")} className="Download" > </a></h1>
                        <div>
                            <span className="openAll" onClick={this.openAllSections}>{intl.formatMessage({ id: "resume.Open All" })}</span>
                            <span className="closeAll" onClick={this.closeAllSections}>{intl.formatMessage({ id: "resume.Close All" })}</span>
                        </div>
                        <div className="SectionContainer">
                            {fieldList.map((title)=> {
                                return (
                                    <div key={title} className="ContentContainer">
                                        <h2 index={fieldList.indexOf(title)} onClick={this.toggleSection}>{intl.formatMessage({ id: "resume." + title })}<span className="image"><img alt="" src={require(`../../images/icons/${title}.svg`)} /></span></h2>
                                        
                                        <Collapse isOpen={this.state.openSection[fieldList.indexOf(title)]}>
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
                                        </Collapse>
                                    </div>
                                ) 

                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
    

export default injectIntl(Resume);