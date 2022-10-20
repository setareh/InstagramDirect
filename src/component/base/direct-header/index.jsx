import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
import './styles.css';

import ICONS from "../../../assets/images/icons";
import ProfilePicUser4 from '../../../assets/images/profile/user-4.png';


export default function DirectHeader(props, ...others) {

    const [profile, setProfile]  =useState([]);

    useEffect (() => {
      getProfile()
    }, []);
  
    const getProfile = async() => {
      try{
        const {data} = await axios ({
          url: 'http://localhost:9000/profile',
          method: 'GET'
        })
        // console.log(data);
        setProfile(data);
      } catch (error){
        console.log(error);
      }
    }

  return (
    <Row className={'pt-3 pb-2 bg-white fix-size position-fixed top-0'}>
        <Col xs={1}>
            <Link to={'/'} className={'float-start'}>
            <img src={ICONS.leftArrow} alt="back" className={'ig-icon'} />
            </Link>
        </Col>
        <Col xs={6}>
            <div className={'position-relative'}>
                <img className={'profile-img d-inline-block align-middle me-2 small-image'}  src={profile.picture} alt={'profile image'}></img>
                <a href='#' className={'text-reset text-decoration-none text-start fs-4 fw-bold'}>
                    {profile.name}
                </a>
                <div className={'position-absolute rounded-circle bg-danger text-white msg-counter d-inline'}>
                    <span className={'position-relative'}>2</span>
                </div>
            </div>
        </Col>
        <Col xs={5} className={'text-end'}>
            <img src={ICONS.edit} alt="edit" className={'ig-icon float-end'} />
            <img src={ICONS.movieCameraPlus} alt="movie" className={'ig-icon float-end'} />
        </Col>
    </Row>
  )
}
