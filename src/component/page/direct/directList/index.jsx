import React from 'react'

import DirectHeader from '../../../base/direct-header';
import Search from '../../../base/search';
import DirectListInfo from '../../../base/directListInfo';
import { useParams } from 'react-router-dom';

// Styles
import { Container,Row , Col} from 'reactstrap';
import './styles.css';  



export default function DirectList() {
  const {id, slug} = useParams();


  return (
    <Container className={'container-sm'}>
      
      <DirectHeader userProfileId = {1} />

      <Search/>

      <Row className={'mt-2 mb-3'}>
        <Col xs={6} className={'text-start fw-bold'}>
          <div className={'text-start fw-bold text-reset text-decoration-none'}>Message</div>
        </Col>
        <Col xs={6} className={'text-end fw-bold'}>
          <a href='#' className={'text-end fw-bold text-reset text-decoration-none gray-text'}>Request</a>
        </Col>
      </Row>

      <DirectListInfo />

    </Container>
  )
}
