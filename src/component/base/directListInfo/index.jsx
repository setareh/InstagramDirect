import React, { useEffect, useState} from 'react';
import { Row,Col} from 'reactstrap';
import { Link, useParams} from 'react-router-dom';
import axios from 'axios';
import { slugGenerator } from '../../../helpers/slug';
import { useSelector,useDispatch } from 'react-redux';
import { getFriends } from '../../../redux/slices/user';

// Images
import ICONS from "../../../assets/images/icons";
// import ProfilePic from '../../../assets/images/profile/user-2.png';
// import ProfilePicUser1 from '../../../assets/images/profile/user-1.png';
// import ProfilePicUser3 from '../../../assets/images/profile/user-3.png';
// import ProfilePicUser4 from '../../../assets/images/profile/user-4.png';
// import ProfilePicUser5 from '../../../assets/images/profile/user-5.png';
import './styles.css'

export default function DirectListInfo() {

  // const [profileFriends, setProfileFriends]  =useState([]);
  const {friends} = useSelector((state) => state.friend);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getFriends());
  },[])

  // console.log("frieeeends",friends);


// AXIOS

  // useEffect (() => {
  //   getProfileFriends()
  // }, []);

  // const getProfileFriends = async() => {
  //   try{
  //     const {data} = await axios ({
  //       url: `http://localhost:9000/profile`,
  //       method: 'GET'
  //     })
  //     // console.log(data.friends);
  //     setProfileFriends(data.friends);
  //   } catch (error){
  //     console.log(error);
  //   }
  // }
  return (

  <div className='direct-list my-2'>
     {
      friends.map((friend) => {
        return(
          <Row className='my-3' key={friend.id}>
            <Col xs={10} className={'align-self-center'}>
              <Link to={`/single-direct-page/${friend.id}/${slugGenerator(friend.name)}`} className={'text-reset text-decoration-none d-block'}>
                  <img className={'profile-img d-inline-block align-middle me-2'}  src={friend.picture} alt={'profile image'}></img>
                  {/* <img className={'profile-img d-inline-block align-middle me-2'}  src={ProfilePicUser4} alt={'profile image'}></img> */}
              
              <div className={'d-inline-block align-middle content-width'}>
                  <div className={"text-reset text-decoration-none d-block username fw-bold"}>
                      {friend.name}
                  </div>
                  <div href="#" className={'post text-reset text-decoration-none light-gray last-chat'}>
                      {friend.lastChat}
                  </div>
              </div>
              </Link>
            </Col>
            <Col xs={1} className={'align-self-center'}>
              <div className={'rounded-circle status new-msg'}></div>
            </Col>
            <Col xs={1} className={'align-self-center'}>
              <a href='#'>
                <img src={ICONS.camera} alt="camera" className={'ig-icon float-end'} />
              </a>
            </Col>
        </Row>
        )
      })
    }   
    </div>

  // map  of axios data array

  //   <div className='direct-list my-2'>
  //   {
  //     profileFriends.map((friend) => {
  //       return(
  //         <Row className='my-3' key={friend.id}>
  //           <Col xs={10} className={'align-self-center'}>
  //             <Link to={`/single-direct-page/${friend.id}/${slugGenerator(friend.name)}`} className={'text-reset text-decoration-none d-block'}>
  //                 <img className={'profile-img d-inline-block align-middle me-2'}  src={friend.picture} alt={'profile image'}></img>
  //                 {/* <img className={'profile-img d-inline-block align-middle me-2'}  src={ProfilePicUser4} alt={'profile image'}></img> */}
              
  //             <div className={'d-inline-block align-middle content-width'}>
  //                 <div className={"text-reset text-decoration-none d-block username fw-bold"}>
  //                     {friend.name}
  //                 </div>
  //                 <div href="#" className={'post text-reset text-decoration-none light-gray last-chat'}>
  //                     {friend.lastChat}
  //                 </div>
  //             </div>
  //             </Link>
  //           </Col>
  //           <Col xs={1} className={'align-self-center'}>
  //             <div className={'rounded-circle status new-msg'}></div>
  //           </Col>
  //           <Col xs={1} className={'align-self-center'}>
  //             <a href='#'>
  //               <img src={ICONS.camera} alt="camera" className={'ig-icon float-end'} />
  //             </a>
  //           </Col>
  //       </Row>
  //       )
  //     })
  //   }   
  //   </div>

  )
}
