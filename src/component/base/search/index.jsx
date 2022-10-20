import React from 'react';
import { useOnChangeHandler } from '../../../hooks/useOnChangeHandler';

import { Row, Col, Input} from 'reactstrap';

export default function Search() {
    const [inputValue, OnChangeInputValue] = useOnChangeHandler('');

  return (
    <Row className={'fix-top'}>
        <Col>
          <Input onChange={OnChangeInputValue} id='Search' placeholder={'Search'} className={'search-icon border border-0 rounded-3'} bsSize="sm" type="search" />
        </Col>
    </Row>
  )
}
