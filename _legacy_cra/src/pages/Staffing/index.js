import {React, useState} from "react";
import { Row, Col, Container,Card,Button} from "react-bootstrap";
import {withRouter } from "react-router-dom";
import "./styles.scss";
import horizontalLine from "../../images/horizontalLine.svg"
import Rectangle from "../../images/Rectangle.svg"
import DesignSubtract from "../../images/DesignSubtract.svg"
import Carousel from 'react-multi-carousel';
import { ReactComponent as LeftArrow } from "../../images/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/rightArrow.svg";
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from "react-responsive";
import figma from "../../images/staffing/tech/figma.svg";
import sketch from "../../images/staffing/tech/sketch.svg"
import adobe from "../../images/staffing/tech/adobe.svg"
import ps from "../../images/staffing/tech/ps.svg"
import google from "../../images/staffing/tech/google.svg"
import aws from "../../images/staffing/tech/aws.svg"
import digital from "../../images/staffing/tech/digital.svg"
import heroku from "../../images/staffing/tech/heroku.svg"
import meet from "../../images/staffing/tech/meet.svg"
import zoom from "../../images/staffing/tech/zoom.svg"
import jira from "../../images/staffing/tech/jira.svg"
import trillo from "../../images/staffing/tech/trillo.svg"
import basecamp from "../../images/staffing/tech/basecamp.svg"
import ms from "../../images/staffing/tech/ms.svg"
import react from "../../images/staffing/tech/react.svg"
import angular from "../../images/staffing/tech/angular.svg"
import vue from "../../images/staffing/tech/vue.svg"
import sql from "../../images/staffing/tech/sql.svg"
import mongo from "../../images/staffing/tech/mongo.svg"
import postsql from "../../images/staffing/tech/postsql.svg"
import mysql from "../../images/staffing/tech/mysql.svg"
import dynamo from "../../images/staffing/tech/dynamo.svg"
import github from "../../images/staffing/tech/github.svg"
import bitbucket from "../../images/staffing/tech/bitbucket.svg"
import gitlab from "../../images/staffing/tech/gitlab.svg"
import dotnet from "../../images/staffing/tech/dotnet.svg"
import node from "../../images/staffing/tech/node.svg"
import ruby from "../../images/staffing/tech/ruby.svg"
import laravel from "../../images/staffing/tech/laravel.svg"
import php from "../../images/staffing/tech/php.svg"
import golang from "../../images/staffing/tech/golang.svg"
import other from "../../images/staffing/tech/other.svg"
import slack from "../../images/staffing/tech/slack.svg"
import microsoft from "../../images/staffing/tech/microsoft.svg"
import hangout from "../../images/staffing/tech/hangout.svg"
import ios from "../../images/staffing/tech/ios.svg"
import android from "../../images/staffing/tech/android.svg"
import flutter from "../../images/staffing/tech/flutter.svg"
import ionic from "../../images/staffing/tech/ionic.svg"
import kotlin from "../../images/staffing/tech/kotlin.svg"
import sales from "../../images/staffing/tech/sales.svg"
import dynamic from "../../images/staffing/tech/dynamic.svg"
import teamcity from "../../images/staffing/tech/teamcity.svg"
import bamboo from "../../images/staffing/tech/bamboo.svg"
import circle from "../../images/staffing/tech/circle.svg"
import jerkin from "../../images/staffing/tech/jerkin.svg"
import apps from "../../images/staffing/tech/apps.svg"
import git from "../../images/staffing/tech/git.svg"
import apache from "../../images/staffing/tech/apache.svg"
import xcode from "../../images/staffing/tech/xcode.svg"
import fastlane from "../../images/staffing/tech/fastlane.svg"
import gradle from "../../images/staffing/tech/gradle.svg"
import maven from "../../images/staffing/tech/maven.svg"
import anisble from "../../images/staffing/tech/anisble.svg"
import chef from "../../images/staffing/tech/chef.svg"
import puppet from "../../images/staffing/tech/puppet.svg"
import wordpress from "../../images/staffing/tech/wordpress.svg"
import drupal from "../../images/staffing/tech/drupal.svg"
import jsonData from "./data.js"


const Staffing = ()=>{
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [isActive, setActive] = useState("");
    const ToggleClass = (e) => {
      setActive(prev => prev===e ? "" : e );  
    };


    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 2000, min: 1430 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1430, min: 1023 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1023, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const urlPathName = window.location.pathname;
      const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="carousel-button-group customeCss">
            <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} > <LeftArrow className="arrowIcon"/> </Button>
            <Button onClick={() => next()} > <RightArrow className="arrowIcon" /> </Button>
          </div>
        );
      };

    return(<>
            {(jsonData || []).map((item)=>{
                return(
                    <>
                        {item.pathname===urlPathName ? 
                            <>
                                {item?.banner.map((data)=>{
                                    return(<>
                                        <Container className="serviceBannerRow"> 
                                            <div className="webDesignBannerDiv">
                                                <p className="red serviceBannerTitleText "> <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/> {data?.mainHeading} <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/></p>
                                                <p className="serviceBannerHeading"> {data?.heading.text1}<span className="red"> {data.heading.text2} </span> {data?.heading.text3} </p>
                                                <p className="serviceBannerDescription">{data?.descritption}</p>
                                                <Button className="serviceBannerButton">Let’s Discus your Idea</Button>
                                            </div>
                                        </Container>
                                        <Container>
                                            <Row className="bannerIconsRow">
                                                {(Array.from(data?.icons || [])).map((items)=>{
                                                    return(<>  
                                                        <Col>
                                                            <div className="d-flex" md={2}>
                                                                <img src={items.src} className="bannerIcon" alt="i" />
                                                                <span>{items.icon}</span>
                                                            </div>
                                                        </Col>      
                                                    </>)
                                                })}      
                                            </Row> 
                                        </Container>
                                    </>)
                                })}

                                {(item.ourServices || []).map((item)=>{
                                    return(<>
                                        <Container className="ourServicesRow">
                                            <Col>
                                                <p className="red ourServiceText">Our Services <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/></p>
                                                <h4 className="ourServiceSubHeading">{item.subheading.text1} <span className="red"> {item.subheading.text2}</span></h4>
                                            </Col>
                                            <Row>
                                                {(item.cardBoxData || []).map((item)=>{
                                                    return( <> 
                                                        <Col md={6} className="ourServiceDescptionCol">    
                                                            <Card className="ourServiceDescptionCard">
                                                                <div className="ourServiceDescptionDiv" >
                                                                    <img src={Rectangle} alt="i" className="ourServiceDescptionLine"/>
                                                                </div>
                                                                <Card.Body>
                                                                    <Card.Title className="ourServiceHeadings">{item.title}</Card.Title>
                                                                    <Card.Text className="ourServiceDescription">{item.text}</Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                        </>)
                                                    })}
                                            </Row>
                                        </Container>
                                    </>)
                                })}

                                {(item.benefits || []).map((item)=>{
                                    return(<>
                                        <Container className="benefitsMainRow">
                                            <Col>
                                                <p className="red benefitsText">Benefits <img src={horizontalLine} alt="horizontal Line"/></p>
                                                <h4 className="benefitsSubHeading">{item?.subheading?.text1} <span className="red"> {item?.subheading?.text2}</span> {item?.subheading?.text3}<span className="red"> {item?.subheading?.text4}</span><span> {item?.subheading?.text5}</span></h4>
                                            </Col>
                                            <Row>
                                                {item.cardBoxData.map((item)=>{
                                                    return(
                                                        <Col md={4} className="benefitsCol">
                                                            <Card className="benefitsCardBox">
                                                                <Card.Body>
                                                                    <img  src={item.src} alt="benefitIcons" />
                                                                    <Card.Title className="benefitsCardTitleText">{item.title}</Card.Title>
                                                                    <Card.Text className="cardTextBenefits">{item.text}</Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Container>
                                    </>)
                                })}

                                {(item.whyChooseUs || []).map((item)=>{
                                    return(<>
                                        <Container className="whyChooseMainRow">
                                            <Col className="whyChooseusCol">
                                                <p className="red whyChosseHeading"> <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/> Why Choose us <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/></p>
                                                <h4 className="whyChooseSubHeading">{item.subheading.text1}<span className="red"> {item.subheading.text2} </span>{item.subheading.text3}<span className="red"> {item.subheading.text4}</span>{item.subheading.text5}</h4>
                                            </Col>
                                            <Row className="whyChooseusCarouselRow">    
                                                <div className="bottom-content">
                                                    <Carousel 
                                                        responsive={responsive}
                                                        itemclass="p-2"
                                                        autoPlaySpeed={10000}
                                                        keyBoardControl={true}
                                                        infinite={true}
                                                        swipeable={true}
                                                        draggable={true}
                                                        autoPlay={ true }
                                                        customLeftArrow={null}
                                                        arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />}
                                                    >
                                                        {item.cardBoxData.map((item)=>{
                                                            return(      
                                                                <Card className=" p-3 mx-3 carouselCard"> 
                                                                    <Card.Body>
                                                                        <img src={item.src} alt="i" className="caroselImg"  />
                                                                        <Card.Title className="carouselCardTitle">{item.title}</Card.Title>
                                                                        <Card.Text className="carouselCardTitleText">{item.text}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            )
                                                        })}
                                                    </Carousel>
                                                </div>  
                                            </Row>
                                        </Container>
                                    </>)
                                })}

                                {(item.designProcess  || []).map((item)=>{
                                    return(<>
                                        <Container className="designprocessRow">
                                            <Col>
                                                <p className="red designProcessText">Design Process <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/></p>
                                                <h4 className="designProcessSubHeading">{item.subheading.text1}<span className="red"> {item.subheading.text2}</span></h4>
                                            </Col>
                                            <Row className="float-container">
                                                <Col className={isMobile ?"designProcessDescptionColMobile":"designProcessDescptionCol"}>
                                                    {(item.cardBoxData || []).map((item,index,arr)=>{
                                                        return( <>
                                                            <span  onClick={() =>ToggleClass(index)} className={isMobile? `tech-title ${isActive === index ? "tech-active" : ""}`:'customeTech-tile'}>
                                                                <span  className={`tech-menu ${isActive === index ? "child-wrap" : ""}`}>
                                                                    <Card  className="designProcessDescptionCard float-child">
                                                                        <Card.Body>      
                                                                            <span>                                                          
                                                                            <div className="designProcessDescptionDiv" >
                                                                                <img src={item.src} alt="i" className=""/>
                                                                            </div>
                                                                            <Card.Title className="designProcessHeadings">{item.title}</Card.Title>
                                                                            </span>
                                                                            <Card.Text className="designProcessDescription">{item.text}</Card.Text>
                                                                        </Card.Body>
                                                                    </Card>                        
                                                                </span>
                                                            </span> 
                                                            <img src={DesignSubtract} alt="i" style={arr.length -1 === index ? { display: 'none' }  :{} } className={`designSubtractSvg ${index}`} />                                              
                                                        </>)
                                                    })}     
                                                </Col>
                                            </Row>
                                        </Container>
                                    </>)
                                })}
                                <div className="tech-expertise">
                                <Container className="tech-expertise-section">
                                    <Row className="top-content">
                                    <Col>
                                        <p className="red">Our Technology Expertise----</p>
                                        <h1>We use <span className="red">best-in-class tools, state-of-the-art technologies and modern approaches</span> to scale up your business</h1>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col className="bottom-content">
                                        <Row className="tech-software">
                                        <Col xs="12" lg="3" className="tech-list">
                                            <h5 onClick={() =>ToggleClass("design")} className={`tech-title ${isActive === "design" ? "tech-active" : ""}`}>Design</h5>
                                            <div  className={`tech-menu ${isActive === "design" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={figma} />Figma</a></li>
                                                <li><a href="#"><img src={sketch} />Sketch</a></li>
                                                <li><a href="#"><img src={adobe} />Adobe Illustrator</a></li>
                                                <li><a href="#"><img src={ps} />Adobe Photoshop</a></li>                       
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("frontend")} className={`tech-title ${isActive === "frontend" ? "tech-active" : ""}`}>Front-end</h5>
                                            <div className={`tech-menu ${isActive === "frontend" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={react} />ReactJS</a></li>
                                                <li><a href="#"><img src={angular} />Angular</a></li>
                                                <li><a href="#"><img src={vue} />Vue.JS</a></li>                    
                                            </ul>
                                            </div>
                                            <h5  onClick={() =>ToggleClass("backend")} className={`tech-title ${isActive === "backend" ? "tech-active" : ""}`}>Back-end</h5>
                                            <div className={`tech-menu ${isActive === "backend" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={dotnet} />.Net</a></li>
                                                <li><a href="#"><img src={node} />Node JS</a></li>
                                                <li><a href="#"><img src={dotnet} />Java</a></li>                    
                                                <li><a href="#"><img src={ruby} />Ruby On Rails</a></li>                    
                                                <li><a href="#"><img src={laravel} />Laravel</a></li>                    
                                                <li><a href="#"><img src={php} />PHP</a></li>                    
                                                <li><a href="#"><img src={golang} />Golang</a></li>                    
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("Other")} className={`tech-title ${isActive === "Other" ? "tech-active" : ""}`}>Other</h5>
                                            <div className={`tech-menu ${isActive === "Other" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={other} />Agile TDD</a></li>
                                            </ul>
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="3" className="tech-list">
                                        <h5 onClick={() =>ToggleClass("server")} className={`tech-title ${isActive === "server" ? "tech-active" : ""}`}>Server</h5>
                                            <div className={`tech-menu ${isActive === "server" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={google} />Azure,Google Cloud</a></li>
                                                <li><a href="#"><img src={aws} />AWS</a></li>
                                                <li><a href="#"><img src={digital} />Digital Ocean</a></li>                       
                                                <li><a href="#"><img src={heroku} />Heroku</a></li>                       
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("Database")} className={`tech-title ${isActive === "Database" ? "tech-active" : ""}`}>Database</h5>
                                            <div className={`tech-menu ${isActive === "Database" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={sql} />MS SQL</a></li>
                                                <li><a href="#"><img src={mongo} />MongoDB</a></li>
                                                <li><a href="#"><img src={postsql} />PostgreSQL</a></li>                    
                                                <li><a href="#"><img src={mysql} />MySQL</a></li>                    
                                                <li><a href="#"><img src={dynamo} />Dynamo DB</a></li>                  
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("Mobile")} className={`tech-title ${isActive === "Mobile" ? "tech-active" : ""}`}>Mobile</h5>
                                            <div className={`tech-menu ${isActive === "Mobile" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={ios} />iOS</a></li>
                                                <li><a href="#"><img src={android} />Android</a></li>
                                                <li><a href="#"><img src={flutter} />Flutter</a></li>                    
                                                <li><a href="#"><img src={react} />React Native</a></li>                    
                                                <li><a href="#"><img src={ionic} />Ionic</a></li>                    
                                                <li><a href="#"><img src={kotlin} />Kotlin</a></li>                   
                                            </ul>
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="3" className="tech-list">
                                        <h5 onClick={() =>ToggleClass("vc")} className={`tech-title ${isActive === "meet" ? "tech-active" : ""}`}>Meeting</h5>
                                            <div className={`tech-menu ${isActive === "meet" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={meet} />Google Meet</a></li>
                                                <li><a href="#"><img src={zoom} />Zoom</a></li>                  
                                            </ul>
                                            </div>
                                        <h5 onClick={() =>ToggleClass("vc")} className={`tech-title ${isActive === "vc" ? "tech-active" : ""}`}>Version Control</h5>
                                            <div className={`tech-menu ${isActive === "vc" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={github} />Github</a></li>
                                                <li><a href="#"><img src={bitbucket} />BitBucket</a></li>
                                                <li><a href="#"><img src={gitlab} />Gitlab</a></li>                     
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("CRM")} className={`tech-title ${isActive === "CRM" ? "tech-active" : ""}`}>CRM</h5>
                                            <div className={`tech-menu ${isActive === "CRM" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={sales} />Salesforce</a></li>
                                                <li><a href="#"><img src={dynamic} />Microsoft Dynamic 365</a></li>
                                                <li><a href="#"><img src={teamcity} />TeamCity</a></li>                    
                                                <li><a href="#"><img src={bamboo} />Bamboo</a></li>                    
                                                <li><a href="#"><img src={circle} />Circleci Hudson</a></li>                    
                                                <li><a href="#"><img src={jerkin} />Jenkins</a></li>                    
                                                <li><a href="#"><img src={apps} />Apps</a></li>                    
                                                <li><a href="#"><img src={git} />Git</a></li>                    
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("CMS")} className={`tech-title ${isActive === "CMS" ? "tech-active" : ""}`}>CMS</h5>
                                            <div className={`tech-menu ${isActive === "CMS" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={wordpress} />WordPress</a></li>
                                                <li><a href="#"><img src={drupal} />Drupal</a></li>                   
                                            </ul>
                                            </div>
                                        </Col>
                                        <Col xs="12" lg="3" className="tech-list">
                                        <h5 onClick={() =>ToggleClass("Devops")} className={`tech-title ${isActive === "tools" ? "tech-active" : ""}`}>Project Management Tools</h5>
                                            <div className={`tech-menu ${isActive === "tools" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={jira} />Jira</a></li>
                                                <li><a href="#"><img src={trillo} />Trello</a></li>
                                                <li><a href="#"><img src={basecamp} />BaseCamp</a></li>
                                                <li><a href="#"><img src={ms} />MS Project</a></li>                      
                                            </ul>
                                            </div>
                                        <h5 onClick={() =>ToggleClass("Devops")} className={`tech-title ${isActive === "Devops" ? "tech-active" : ""}`}>Devops</h5>
                                            <div className={`tech-menu ${isActive === "Devops" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={apache} />Apacheant</a></li>
                                                <li><a href="#"><img src={xcode} />Xcode</a></li>
                                                <li><a href="#"><img src={fastlane} />Fastlane Gant</a></li>
                                                <li><a href="#"><img src={gradle} />Gradle</a></li>                       
                                                <li><a href="#"><img src={maven} />Maven</a></li>                       
                                                <li><a href="#"><img src={anisble} />Ansible</a></li>                       
                                                <li><a href="#"><img src={chef} />Chef</a></li>                       
                                                <li><a href="#"><img src={puppet} />Puppet</a></li>                       
                                            </ul>
                                            </div>
                                            <h5 onClick={() =>ToggleClass("Project")} className={`tech-title ${isActive === "Project" ? "tech-active" : ""}`}>Project Management Tools</h5>
                                            <div className={`tech-menu ${isActive === "Project" ? "child-wrap" : ""}`}>
                                            <ul className="tech-sub sub-ul">
                                                <li><a href="#"><img src={jira} />Jira</a></li>
                                                <li><a href="#"><img src={trillo} />Trello</a></li>
                                                <li><a href="#"><img src={basecamp} />BaseCamp</a></li>                    
                                                <li><a href="#"><img src={ms} />MS Project</a></li>                    
                                            </ul>
                                            </div>
                                        </Col>
                                        </Row>
                                    </Col>
                                    </Row>
                                </Container>
                                </div>
                            </>:null
                        }
                    </>)
                })
            }
    </>)
}

export default withRouter(Staffing);