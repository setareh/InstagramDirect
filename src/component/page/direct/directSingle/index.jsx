import { useState, useEffect,useRef } from 'react'
import DirectHeader from '../../../base/direct-header';
// import { useOnChangeHandler } from '../../../../hooks/useOnChangeHandler';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';



import { Container,Row, Input, Col, Button } from 'reactstrap';
import './styles.css'
import { ADD_MESSAGE } from '../../../../redux/slices/messages';

export default function SingleDirectPage() {

  

  // const [inputValue , onChangeInputValue] = useOnChangeHandler('');
  const [data, setData] =useState([]);
  const [text, setText] =useState('');

  const {id, slug} = useParams();

  const messageList = useSelector((state) => state.message.value)
  // const personalChat = messageList.valueOf().id;

  

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
  
  const sendText = (e) => setText(e.target.value)

  const SendNewMessage = () => {
    if(!text.trim()){
      // alert('please fill the inpute')
      return
    }
    else{
      dispatch(ADD_MESSAGE({id: id, text: text, timestamp: new Date().toLocaleString(), side: "right"}));
      setTimeout(() => {
        dispatch(ADD_MESSAGE({id: id, text: "Your message will be answered soon", timestamp: new Date().toLocaleString(), side: "left"}));
      }, 2000);
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
        <Col xs={10}>
          <Input value={text} onChange={sendText} type='text' placeholder='Message...' className={'rounded-5'}/>
        </Col>
        <Col xs={2}>
          {/* <Button onClick={() => {dispatch(ADD_MESSAGE({id, text}))}}  className='rounded-5' color='info'>Send</Button> */}
          <Button onClick={SendNewMessage}  type="submit">send</Button>
          {/* <Button onClick={SinglePostPage({id:id})}>test</Button> */}
        </Col>
      </Row>
    </Container>
  )
}
