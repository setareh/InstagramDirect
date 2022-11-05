import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col} from 'reactstrap';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile } from '../../../redux/slices/userProfile'

import ICONS from "../../../assets/images/icons";
import ProfilePicUser2 from '../../../assets/images/profile/user-2.png';


export default function DirectHeader(props) {

    const dispatch = useDispatch();

    const userId = props.userProfileId;

 
    useEffect (() => {
      dispatch(getUserProfile());
    }, []);

    const userProfiles =  useSelector((state) => state.userprofile.friends);

    let userProfile;

    if(!userProfiles){
      return (<div></div>);

    }else{
      if(userId != 1){
        userProfile = userProfiles.filter(value=> value.id == userId)        
      }
    }

  return (
    <Row className={'pt-3 pb-2 bg-white fix-size position-fixed top-0'}>
        <Col xs={1}>
            <Link to={userId == 1 ? '/' : '/direct-list'} className={'float-start'}>
            <img src={ICONS.leftArrow} alt="back" className={'ig-icon'} />
            </Link>
        </Col>
        <Col xs={6}>
            <div className={'position-relative'}>
                <img className={'profile-img d-inline-block align-middle me-2 small-image'}  
                src={userProfile ? userProfile[0].picture : ProfilePicUser2 }                    
                alt={'profile image'}></img>
                <a href='#' className={'text-reset text-decoration-none text-start fs-4 fw-bold'}>
                    {userProfile ? userProfile[0].name : 'SETARE' }                    
                </a>
                <div className={'position-absolute rounded-circle bg-danger text-white msg-counter d-inline'}>
                    <span className={'position-relative'}>2</span>
                </div>
            </div>
        </Col>
        {userId == 1 ? 
          (<Col xs={5} className={'text-end'}>
              <img src={ICONS.edit} alt="edit" className={'ig-icon float-end'} />
              <img src={ICONS.movieCameraPlus} alt="movie" className={'ig-icon float-end'} />
          </Col>):
          (<Col xs={5} className={'text-end'}>
              <img src={ICONS.movieCamera} alt="movie" className={'ig-icon float-end'} />
              <img src={ICONS.call} alt="edit" className={'ig-icon float-end'} />
          </Col>)  
      }
    </Row>
  )
}
