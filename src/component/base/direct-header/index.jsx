import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import {Row, Col} from 'reactstrap';
import './styles.css';
import { useDispatch, useSelector } from 'react-redux'
import { getUserProfile, getMyProfile } from '../../../redux/slices/userProfile'

import ICONS from "../../../assets/images/icons";
import ProfilePicUser2 from '../../../assets/images/profile/user-2.png';


export default function DirectHeader(props) {

    const dispatch = useDispatch();
    const dispatcher = useDispatch();
  //   const [profile, setProfile]  =useState([]);

    const userId = props.userProfileId;
    console.log("userid", userId);

 
    useEffect (() => {
      // getProfile()
      dispatch(getUserProfile());
      // dispatcher(getMyProfile());
    }, []);

    console.log(userId)
    const userProfiles =  useSelector((state) => state.userprofile.friends);
    console.log('⛔️ type: ', typeof(userProfiles))
    console.log('-biron- type userProfiles: ', userProfiles)


    // const myProfile = useSelector((state) => state.userprofile.friends);
    
    // console.log(Object.keys(myProfile));
    // if (myProfile) {
    //   const keys = Object.keys(myProfile);
    //   console.log('key ', keys[1])
    // } else {
    //   // 👇️ this runs
    //   console.log('⛔️ Object is falsy');
    // }

 
    // const picked = (({ id, name }) => ({ id, name }))(myProfile);
    // console.log("selector my profile ",picked)

   
    // else{
    //   if (userProfiles) {
    //     const keys = Object.entries(myProfile);
    //     console.log('entries userprofile ', keys)
    //   } else {
    //     // 👇️ this runs
    //     console.log('⛔️ Object is falsy');
    //   }
    // }

    // if(!myProfile){
    //   return (<div></div>);
    // }else{
    //   console.log("selector my profile ", myProfile['name'])

    // }
    let userProfile;

    if(!userProfiles){
      console.log('⛔️ ⛔️ ⛔️ ⛔️ ⛔️ ⛔️ ⛔️');
      return (<div></div>);

    }else{
      if(userId != 1){
        console.log(' inside if')
        console.log('--- type userProfiles: ', userProfiles)

        userProfile = userProfiles.filter(value=> value.id == userId)
        console.log('too',userProfile)
        
      }else{
            console.log('type my profile: ', typeof(myProfile))
      }
    }
    // console.log('biron',userProfile[0].name)

   
  
    // const getProfile = async() => {
    //   try{
    //     const {data} = await axios ({
    //       url: 'http://localhost:9000/profile',
    //       method: 'GET'
    //     })
    //     // console.log(data);
    //     setProfile(data);
    //   } catch (error){
    //     console.log(error);
    //   }
    // }

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
                    {/* {userProfile && !myProfile ? userProfile[0].name : myProfile['name'] } */}
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
