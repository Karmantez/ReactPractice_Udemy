import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../components/Settings';
import SearchInput from './SearchInput';
import History from '../../common/components/History';
import { ACTIONS } from '../state';

export default function Search() {
  const history = useSelector(state => state.search.history);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ACTIONS.fetchAllHistory());
  }, [dispatch]);

  return (
    <>
      <Row justify="end" style={{ padding: 20 }}>
        <Col>
          <Settings logout={() => {}} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 100 }}>
        <Col>
          <Typography.Title>찾 아 야 한 다</Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <SearchInput />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={20} md={16} lg={12}>
          <History items={history} />
        </Col>
      </Row>
    </>
  );
}
