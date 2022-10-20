import React,{ useState, useEffect } from 'react'
import DirectHeader from '../../../base/direct-header';
import { useOnChangeHandler } from '../../../../hooks/useOnChangeHandler';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux'
// import { addMsg } from '../../../../redux/slices/chatMsg';


import { Container,Row, Input, Col, Button } from 'reactstrap';
import './styles.css'

export default function SingleDirectPage() {

  

  const [inputValue , onChangeInputValue] = useOnChangeHandler('');
  const [data, setData] =useState([]);
  const {id, slug} = useParams();

  // const msgList = useSelector((state) => state.chat.value)
  // const dispatch = useDispatch();
  
  // const dispatch = useDispatch(ADD_MESSAGE());

// --------------------------get data with axios---------------
  useEffect(() => {
    getMsg();
  }, [])

  const getMsg = async () => {
    try{
      const {data} = await axios({
        url:`http://localhost:9000/friends/${id}`,
        method: 'GET'
      })
      console.log(data);
      setData(data.chatlog.reverse());
    } catch(error){
      console.log(error);
    }
  }

// --------------add data with thunk------
  // const sendData = async () => {
  //   return (dispatch) => {
  //     dispatch(ADD_MESSAGE());

  //     axios
  //       .post(`http://localhost:9000/friends/`,{
  //         data: dispatch
  //       })
  //       .then(res => {
  //         dispatch(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       })
        
  //   }
  // }




  return (
    <Container>
      <DirectHeader />
      <Row className={'fix-y-space'}>
      {
        data.map((chat) => {
          return( 
        <Col xs={12} key={chat.message_id}>
          <div className='chat-container py-2' >
            <div className={'mb-2 ' + (chat.side == "right" ? "text-end" : "" )}>
              <span className={'chat rounded-5 other-user'}>
                {chat.text}
                <div className={'text-end time'}>
                  {chat.timestamp}
                </div>
              </span>
            </div>
          </div>
        </Col>
          )

        })
      }

      
      </Row>
      <Row className='position-fixed input-row bottom-0 mb-2 fix-size'>
        <Col xs={10}>
          <Input onChange={onChangeInputValue} type='text' placeholder='Message...' className={'rounded-5'}/>
        </Col>
        <Col xs={2}>
        {/* <Button onClick={() => {dispatch(addMsg({text: inputValue}))}}  className='rounded-5' color='info'>Send</Button> */}
        </Col>
      </Row>
    </Container>
  )
}
