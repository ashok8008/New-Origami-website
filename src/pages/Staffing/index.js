import {React, useState} from "react";
import { Row, Col, Container,Card,Button} from "react-bootstrap";
import {withRouter } from "react-router-dom";
import "./styles.scss";
import horizontalLine from "../../images/horizontalLine.svg"
import Rectangle from "../../images/Rectangle.svg"
import Responsive from "../../images/Responsive.svg"
import Upgradation from "../../images/Upgradation.svg"
import Security from "../../images/Security.svg"
import Maintenance from "../../images/Maintenance.svg"
import Migrations from "../../images/Migrations.svg"
import PWA from "../../images/PWA.svg"
import EffectiveLayout from "../../images/EffectiveLayout.svg"
import DesignSubtract from "../../images/DesignSubtract.svg"
import Carousel from 'react-multi-carousel';
import { ReactComponent as LeftArrow } from "../../images/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../images/rightArrow.svg";
import 'react-multi-carousel/lib/styles.css';
import { useMediaQuery } from "react-responsive";



const Staffing = () => {

    const [isActive, setActive] = useState("");
    const ToggleClass = (e) => {
      setActive(prev => prev===e ? "" : e );  
    };
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const serviceBannerJsonData=[
        {
            "pathname":"/Staffing",
            "banner":[
                {
                    "mainHeading"  : "Web designing Services",
                    "heading":{
                        "text1" :"Providing Cutting-Edge",
                        "text2" :"Web Design"
                    },
                    "descritption" : "Origami Softwatre's ensures to deliver custom website design services, globally! We are adept at designing responsive, fast-loading, and user-friendly websites that offer a consistent look and use across different web browsers.",
                    "icons":[
                        {
                            "icon":"Responsive",
                            "src":Responsive,
                        },
                        {
                            "icon":"Upgradation",
                            "src":Upgradation
                        },
                        {
                            "icon":"Security",
                            "src":Security,
                        },
                        {
                            "icon":"Maintenance",
                            "src":Maintenance,
                        },
                        {
                            "icon":"Migrations",
                            "src":Migrations
                        },
                        {
                            "icon":"PWA",
                            "src":PWA
                        }
                    ]
                }
            ],
            "ourServices":[
                {   
                    "subheading":{
                        "text1":"We Deliver Comprehensive",
                        "text2":"Website Design Services"
                    },
                    "cardBoxData":[
                        {
                            "title":"Corporate Website Design",
                            "text" :"Our aim is to strengthen your brand by building a reputation. The first impression for your potential customer is through your website. We offer an exquisite and informative website that caters to your services and operations. We tailor our website design services with the objective that your brand represents.",
                        },
                        {
                            "title":"eCommerce Websites",
                            "text":"We understand the significance of an admirable website for your business. We will enhance your online reputation with aesthetically appealing web design services. We will include easy call-to-action buttons and multiple categories relating to your business for effortless use."
                        },
                        {
                            "title":"Customized Website",
                            "text":"Without a touch of personalization, your website is just another page on the internet. As a proficient website design company, we promise to create a website that would make your audience put trust in your ability to offer service."
                        },
                        {
                            "title":"Landing Page Design",
                            "text":"The first thing that your customer would see is a landing page. It should be astonishing enough to keep the viewer stay on the webpage. We’ll hook you up with a landing page that would flaunt your business’s goals and achievements."
                        },
                        {
                            "title":"Responsive Web Design",
                            "text":"There is no room for boring web pages anymore! It’s time to delve into responsive web design to provide your customers experience that is flexible and fluidic on different devices. We will make this possible with our exemplary web design services."
                        },
                        {
                            "title":"Wireframing",
                            "text":"As a renowned website design company, we offer services for enhanced wireframing. Our profound and experienced professional will illustrate the basic structure and elements for your website on different webpages. This will give you an idea of how your website is going to appear in front of the viewers."
                        },
                        {
                            "title":"Graphics Design",
                            "text":"With the extensive creative competence of our designers, you won’t have to worry about the appearance of the website. We provide your business an online presence with exemplary visual design."
                        },
                        {
                            "title":"Blog Website Design",
                            "text":"Blog design holds great significance on a webpage as well. Therefore, we will cater to a separate blog page for your website, to highlight the content related to your industry."
                        }                
                    ]
                }
            ],
            "benefits":[
                {   
                    "subheading":{
                        "text1":"How Choosing Us As Your ",
                        "text2":"Website Design Company",
                        "text3":"will Benefit you?",
                    },
                    "cardBoxData":[
                        {
                            "title":"Effective Layout",
                            "text":"We create a layout that is sleek yet aesthetically appealing."
                        },
                        {
                            "title":"Personalization",
                            "text":"We will create a website that speaks your language with alluring web design."
                        },
                        {
                            "title":"Effective  Call-to-Action",
                            "text":"Your customer will be able to easily contact you with facile call-to-action buttons."
                        },
                        {
                            "title":"Easy Access To Information",
                            "text":"Your customer will be able to easily contact you with facile call-to-action buttons."
                        },
                        {
                            "title":"Maintenance",
                            "text":"Make your website maintenance hassle-free with our services."
                        },                
                    ]
                }
            ],
            "whyChooseUs":[
                {   
                    "subheading":{
                        "text1":"Why",
                        "text2":"Choose our",
                        "text3":"Web Design",
                        "text4":"Services",
                        "text5":"?",
                    },
                    "cardBoxData":[
                        {
                            "title":"Professional Designer",
                            "text":"We are not stretching when we say that visualization is the key element when it comes to the website. We offer illustrious, visually appealing with top-notch content for your website."
                        },
                        {
                            "title":"Reputation",
                            "text":"As a web design company, we hold a pronounced reputation in the industry. With the expertise we have gained in years of hard work, we can deliver exemplary website designs for our clients."
                        },
                        {
                            "title":"Well-Organized Project Plan",
                            "text":"After we have discussed and studied all the website elements that are required by the client, we create a precise time-bound project plan. This would ensure that your website will be ready promptly."
                        },              
                    ]
                }
            ],
            "designProcess":[
                {   
                    "subheading":{
                        "text1":"Our Seemless",
                        "text2":"Web design Process",
                    },
                    "cardBoxData":[
                        {
                            "title":"Strategizing",
                            "text":"We identify your website requirements and goals that meet your business needs."
                        },
                        {
                            "title":"Designing",
                            "text":"In this phase, we will create a wireframe and initiate the design of your website."
                        },
                        {
                            "title":"Developing",
                            "text":"At this stage, the developers will work their charm on the CMS, coding, and server realization."
                        },
                        {
                            "title":"Testing",
                            "text":"We will deploy the website on the live server. We will fix the bugs and errors if any."
                        },
                        {
                            "title":"Testing",
                            "text":"We will deploy the website on the live server. We will fix the bugs and errors if any."
                        },              
                    ]
                }
            ],
        }
    ]

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
        <Container className="ourServiceContainer">   
            {(serviceBannerJsonData || []).map((item)=>{
                return(
                    <>
                        {item.pathname===urlPathName ? 
                            <>
                                {item?.banner.map((data)=>{
                                  return(<>
                                    <Row className="serviceBannerRow"> 
                                      <div className="webDesignBannerDiv">
                                          <p className="red serviceBannerTitleText "> <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/> {data?.mainHeading} <img src={horizontalLine} className="whyChooseusHrLine" alt="horizontal Line"/></p>
                                          <p className="serviceBannerHeading"> {data?.heading.text1}<span className="red"> {data.heading.text2} </span>Services</p>
                                          <p className="serviceBannerDescription">{data?.descritption}</p>
                                          <Button className="serviceBannerButton">Let’s Discus your Idea</Button>
                                      </div>
                                      <Row className="bannerIconsRow">
                                          {data?.icons.map((items)=>{
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
                                    </Row>
                                  </>)
                                })}

                                {(item.ourServices || []).map((item)=>{
                                    return(<>
                                        <Row className="ourServicesRow">
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
                                        </Row>
                                    </>)
                                })}

                                {(item.benefits || []).map((item)=>{
                                    return(<>
                                        <Row className="benefitsMainRow">
                                            <Col>
                                                <p className="red benefitsText">Benefits <img src={horizontalLine} alt="horizontal Line"/></p>
                                                <h4 className="benefitsSubHeading">{item.subheading.text1} <span className="red"> {item.subheading.text2}</span> {item.subheading.text3}{(urlPathName==="/Services/ecommerce-Website-Services") ?<span className="red"> {item.subheading.text4}</span>:null} </h4>
                                            </Col>
                                            <Row>
                                                {item.cardBoxData.map((item)=>{
                                                    return(
                                                        <Col md={4} className="benefitsCol">
                                                            <Card className="benefitsCardBox">
                                                                <Card.Body>
                                                                    <img  src={EffectiveLayout} alt="benefitIcons" />
                                                                    <Card.Title className="benefitsCardTitleText">{item.title}</Card.Title>
                                                                    <Card.Text className="cardTextBenefits">{item.text}</Card.Text>
                                                                </Card.Body>
                                                            </Card>
                                                        </Col>
                                                    )
                                                })}
                                            </Row>
                                        </Row>
                                    </>)
                                })}

                                {(item.whyChooseUs || []).map((item)=>{
                                    return(<>
                                        <Row className="whyChooseMainRow">
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
                                                                <Card className="align-items-center p-3 mx-3 carouselCard">
                                                                    <img src={EffectiveLayout} alt="i"  />
                                                                    <Card.Body>
                                                                        <Card.Title className="carouselCardTitle">{item.title}</Card.Title>
                                                                        <Card.Text className="carouselCardTitleText">{item.text}</Card.Text>
                                                                    </Card.Body>
                                                                </Card>
                                                            )
                                                        })}
                                                    </Carousel>
                                                </div>  
                                            </Row>
                                        </Row>
                                    </>)
                                })}

                                {(item.designProcess  || []).map((item)=>{
                                    return(<>
                                        <Row className="designprocessRow">
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
                                                                                <img src={EffectiveLayout} alt="i" className=""/>
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
                                        </Row>
                                    </>)
                                })}

                            </>:null
                        }
                    </>)
                })
            }
        </Container>
    </>)
}

export default withRouter(Staffing);