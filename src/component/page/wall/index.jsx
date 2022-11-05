import React from "react";
import { Link } from "react-router-dom";


import '../wall/styles.css';
import {Container, Row, Col} from 'reactstrap';
import Navigation from '../../base/navbar/index'

//Image
import ProfilePic from '../../../assets/images/profile/user-2.png';
import ProfilePicUser1 from '../../../assets/images/profile/user-1.png';
import ProfilePicUser3 from '../../../assets/images/profile/user-3.png';
import ProfilePicUser4 from '../../../assets/images/profile/user-4.png';
import ProfilePicUser5 from '../../../assets/images/profile/user-5.png';
import IGLogo from '../../../assets/images/logo.png'
import IMAGES from "../../../assets/images/postImages";
import ICONS from "../../../assets/images/icons";



const Wall = () => {
    return (
        <Container className={'container-sm'}>
            <Row className={'mt-3 mb-2'}>
                <Col xs={8}>
                    <img src={IGLogo} alt="Instagram logo" width="100"></img>
                </Col>
                <Col xs={4}>
                    <Link to={'direct-list'} className={'float-end'}>
                        <img src={ICONS.direct} alt="direct icon" className={'ig-icon'} />
                    </Link>
                </Col>
            </Row>

            <div className={'my-2 py-2 border-bottom border-light story'}>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block text-center'}  src={ProfilePic} alt={'profile image'}></img>
                        </div>
                        <div className="text-center">my story</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none  text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser3} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser5} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser1} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser4} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser5} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none  text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser3} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser5} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser1} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser4} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser5} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
                <div className="d-inline-block">
                    <a href="#" className={"text-reset text-decoration-none  text-center d-inline-block"}>
                        <div className={'gradient-border'}>
                            <img className={'profile-img d-block'}  src={ProfilePicUser3} alt={'profile image'}></img>
                        </div>
                        <div>user name</div>
                    </a>
                </div>
            </div>
            <Row className={'my-2 post'}>
                <Col xs={'10'}>
                    <a href="#" className={'text-reset text-decoration-none'}>
                        <img className={'profile-img d-inline-block align-middle'}  src={ProfilePicUser3} alt={'profile image'}></img>
                    </a>
                    <div className={'d-inline-block align-middle'}>
                        <a href="#" className={"text-reset text-decoration-none d-block username"}>
                            User Name
                        </a>
                        <a href="#" className={'post text-reset text-decoration-none'}>
                            location
                        </a>
                    </div>
                </Col>
                <Col xs={'2'}>
                    <div className={'align-middle'}>
                        <img src={ICONS.menudot} alt="menu icon" className={'ig-icon float-end'} />
                    </div>
                </Col>
            </Row>
            <Row className={'my-2 post bt-1'}>
                <Col xs={'12'} className={'border-top border-light'}>
                    <img src={IMAGES.postImage1} alt={'post image'} width={'100%'} />
                </Col>
            </Row>
            <Row className={'my-2'}>
                <Col xs={10}>
                    <img src={ICONS.like} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.comment} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.direct} alt="direct icon" className={'ig-icon float-start'} />
                </Col>
                <Col xs={2}>
                    <img src={ICONS.save} alt="direct icon" className={'ig-icon float-end'} />
                </Col>
            </Row>
            <Row className={'mt-2 mb-4'}>
                <Col>
                    <a href="#" className={'text-reset text-decoration-none d-inline me-1 fw-bold'}>User name</a>
                    <p className={'d-inline'}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries</p>
                </Col>
            </Row>
            <Row className={'my-2 post'}>
                <Col xs={'10'}>
                    <a href="#" className={'text-reset text-decoration-none'}>
                        <img className={'profile-img d-inline-block align-middle'}  src={ProfilePicUser5} alt={'profile image'}></img>
                    </a>
                        <div className={'d-inline-block align-middle'}>
                            <a href="#" className={"text-reset text-decoration-none d-block username"}>
                                User Name
                            </a>
                            <a href="#" className={'post text-reset text-decoration-none'}>
                                location
                            </a>
                        </div>
                   
                </Col>
                <Col xs={'2'}>
                    <div className={'align-middle'}>
                        <img src={ICONS.menudot} alt="menu icon" className={'ig-icon float-end'} />
                    </div>
                </Col>
            </Row>
            <Row className={'my-2 post bt-1'}>
                <Col xs={'12'} className={'border-top border-light'}>
                    <img src={IMAGES.postImage2} alt={'post image'} width={'100%'} />
                </Col>
            </Row>
            <Row className={'my-2'}>
                <Col xs={10}>
                    <img src={ICONS.like} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.comment} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.direct} alt="direct icon" className={'ig-icon float-start'} />
                </Col>
                <Col xs={2}>
                    <img src={ICONS.save} alt="direct icon" className={'ig-icon float-end'} />
                </Col>
            </Row>
            <Row className={'mt-2 mb-4'}>
                <Col>
                    <a href="#" className={'text-reset text-decoration-none d-inline me-1 fw-bold'}>User name</a>
                    <p className={'d-inline'}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries</p>
                </Col>
            </Row>
            <Row className={'my-2 post'}>
                <Col xs={'10'}>
                    <a href="#" className={'text-reset text-decoration-none'}>
                        <img className={'profile-img d-inline-block align-middle'}  src={ProfilePicUser4} alt={'profile image'}></img>
                    </a>
                        <div className={'d-inline-block align-middle'}>
                            <a href="#" className={"text-reset text-decoration-none d-block username"}>
                                User Name
                            </a>
                            <a href="#" className={'post text-reset text-decoration-none'}>
                                location
                            </a>
                        </div>
                   
                </Col>
                <Col xs={'2'}>
                    <div className={'align-middle'}>
                        <img src={ICONS.menudot} alt="menu icon" className={'ig-icon float-end'} />
                    </div>
                </Col>
            </Row>
            <Row className={'my-2 post bt-1'}>
                <Col xs={'12'} className={'border-top border-light'}>
                    <img src={IMAGES.postImage3} alt={'post image'} width={'100%'} />
                </Col>
            </Row>
            <Row className={'my-2'}>
                <Col xs={10}>
                    <img src={ICONS.like} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.comment} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.direct} alt="direct icon" className={'ig-icon float-start'} />
                </Col>
                <Col xs={2}>
                    <img src={ICONS.save} alt="direct icon" className={'ig-icon float-end'} />
                </Col>
            </Row>
            <Row className={'mt-2 mb-4'}>
                <Col>
                    <a href="#" className={'text-reset text-decoration-none d-inline me-1 fw-bold'}>User name</a>
                    <p className={'d-inline'}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries</p>
                </Col>
            </Row>
            <Row className={'my-2 post'}>
                <Col xs={'10'}>
                    <a href="#" className={'text-reset text-decoration-none'}>
                        <img className={'profile-img d-inline-block align-middle'}  src={ProfilePicUser1} alt={'profile image'}></img>
                    </a>
                        <div className={'d-inline-block align-middle'}>
                            <a href="#" className={"text-reset text-decoration-none d-block username"}>
                                User Name
                            </a>
                            <a href="#" className={'post text-reset text-decoration-none'}>
                                location
                            </a>
                        </div>
                   
                </Col>
                <Col xs={'2'}>
                    <div className={'align-middle'}>
                        <img src={ICONS.menudot} alt="menu icon" className={'ig-icon float-end'} />
                    </div>
                </Col>
            </Row>
            <Row className={'my-2 post bt-1'}>
                <Col xs={'12'} className={'border-top border-light'}>
                    <img src={IMAGES.postImage4} alt={'post image'} width={'100%'} />
                </Col>
            </Row>
            <Row className={'my-2'}>
                <Col xs={10}>
                    <img src={ICONS.like} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.comment} alt="direct icon" className={'ig-icon float-start'} />
                    <img src={ICONS.direct} alt="direct icon" className={'ig-icon float-start'} />
                </Col>
                <Col xs={2}>
                    <img src={ICONS.save} alt="direct icon" className={'ig-icon float-end'} />
                </Col>
            </Row>
            <Row className={'mt-2 mb-4'}>
                <Col xs={12}>
                    <a href="#" className={'text-reset text-decoration-none d-inline me-1 fw-bold'}>User name</a>
                    <p className={'d-inline'}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries</p>
                </Col>
            </Row>
            <Navigation />

        </Container>
    )
}

export default Wall;