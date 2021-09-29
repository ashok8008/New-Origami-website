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
import jsonData from "./data.js"


const Services = ()=>{
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
                                                <h4 className="benefitsSubHeading">{item?.subheading?.text1} <span className="red"> {item?.subheading?.text2}</span> {item?.subheading?.text3}<span className="red"> {item?.subheading?.text4}</span><span>{item?.subheading?.text5}</span></h4>
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

                            </>:null
                        }
                    </>)
                })
            }
    </>)
}

export default withRouter(Services);