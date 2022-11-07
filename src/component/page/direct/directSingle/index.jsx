import { useState, useEffect,useRef } from 'react'
import DirectHeader from '../../../base/direct-header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';



import { Container,Row, Input, Col, Button } from 'reactstrap';
import './styles.css'
import { ADD_MESSAGE } from '../../../../redux/slices/messages';
import ICONS from '../../../../assets/images/icons';

export default function SingleDirectPage() {

  

  const [data, setData] =useState([]);
  const [text, setText] =useState('');
  const [isTyping, setIsTyping] =useState(false);

  const {id, slug} = useParams();

  const messageList = useSelector((state) => state.message.value)

  

  const dispatch = useDispatch();

  const messageEndRef = useRef(null);

  useEffect(()=>{
    messageEndRef.current?.scrollIntoView()
  },[messageList])
  
  useEffect(() => {
    getMsg();  
  }, [])
  
  
  
  // --------------------------get data with axios---------------

  const getMsg = async () => {
    try{
      const {data} = await axios({
        url:`http://localhost:9000/friends/${id}`,
        method: 'GET'
      })
      setData(data.chatlog.reverse());
    } catch(error){
      console.log(error);
    }
  }
  
  const sendText = (e) => {
    setIsTyping(true);
    setText(e.target.value)
  }

  const SendNewMessage = () => {
    if(!text.trim()){
      return
    }
    else{
      dispatch(ADD_MESSAGE({id: id, text: text, timestamp: new Date().toLocaleString(), side: "right"}));
      setTimeout(() => {
        dispatch(ADD_MESSAGE({id: id, text: "Your message will be answered soon", timestamp: new Date().toLocaleString(), side: "left"}));
      }, 2000);
      setIsTyping(false)
      setText(' ');  
    }
  }

  return (
    <Container>
      <DirectHeader userProfileId = {id} />
      <Row className={'fix-y-space'}>
      {data &&
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

      {messageList[id] &&
        messageList[id].map((message,index) => {
          return(
            <Col xs={12} key={index.toString()}>
              <div className='chat-container py-2' >
                <div className={'mb-2 ' + (message.side == "right" ? "text-end" : "text-start" )}>
                  <span className={'chat rounded-5 other-user'}>
                    {message.text}
                    <div className={'text-end time'}>
                      {new Date(message.timestamp).getHours() + ":" +new Date(message.timestamp).getMinutes()}
                    </div>
                  </span>
                </div>
              </div>
            </Col>
          )
        })
      }
      <div ref={messageEndRef}></div>
      
      
      </Row>
     
      <Row className='position-fixed input-row bottom-0 mb-2 fix-size'>
        <Col xs={12}>
          <Input value={text} onChange={sendText} type='text' placeholder='Message...' className={'rounded-5'}/>
          <Button className={'input-action fw-bold bg-transparent border-0 btn btn-secondary position-absolute top-0' + (!isTyping ? ' d-none' : "" )} onClick={SendNewMessage}  type="submit">send</Button>
          <div className={'input-action position-absolute' + (isTyping ? ' d-none' : "" )}>
            <a href='#'>
              <img src={ICONS.microphone} className={'ig-icon'}/>
            </a>
            <a href='#'>
              <img src={ICONS.gallery} className={'ig-icon'}/>
            </a>
            <a href='#'>
              <img src={ICONS.sticker} className={'ig-icon'}/>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
