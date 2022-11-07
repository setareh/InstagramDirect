import React, { useEffect} from 'react';
import { Row,Col} from 'reactstrap';
import { Link} from 'react-router-dom';
import { slugGenerator } from '../../../helpers/slug';
import { useSelector,useDispatch } from 'react-redux';
import { getFriends } from '../../../redux/slices/user';

import ICONS from "../../../assets/images/icons";

import './styles.css'

export default function DirectListInfo() {

  const {friends} = useSelector((state) => state.friend);

  
  const dispatch = useDispatch();
  
  useEffect(()=> {
    dispatch(getFriends());
  },[])
  
  return (

  <div className='direct-list my-2'>
     {
      friends.map((friend) => {
        return(
          <Row className='my-3' key={friend.id}>
            <Col xs={10} className={'align-self-center'}>
              <Link to={`/single-direct-page/${friend.id}/${slugGenerator(friend.name)}`} className={'text-reset text-decoration-none d-block'}>
                  <img className={'profile-img d-inline-block align-middle me-2'}  src={friend.picture} alt={'profile image'}></img>              
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
              <div className={'rounded-circle status '}></div>
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
  )
}
