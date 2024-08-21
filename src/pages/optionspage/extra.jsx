import React, { useState } from 'react';
import Navbar from '../navbar/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Extra = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('남성');
  const [travelDate, setTravelDate] = useState(new Date());
  const [isLocal, setIsLocal] = useState(false);  // 초기값을 false로 변경
  const { region } = location.state || {};


  const handleNextClick = () => {

    console.log(region, age, gender, travelDate, isLocal);
    navigate('/concept', { state: { region, age, gender, travelDate, isLocal } });
  };

  return (
    <div className="options">
      <Navbar />
      <Container className="min-vh-100 d-flex flex-column justify-content-start">
        <Row className="mb-5">
          <Col md={5} className="d-flex flex-column justify-content-start">
            <h1 className="fw-bold" style={{ fontSize: '90px' }}>
              조금 더<br />
              알려주세유.
            </h1>
          </Col>
          <Col md={7} className="d-flex flex-column align-items-left mt-5">
            {/* 나이 체크 바와 성별 선택 */}
            <Row className="mb-4">
              <Col md={6}>
                    <div className="mb-4">
                    <h4>나이를 선택해주새요.</h4>
                    <hr/>
                    <Form.Range
                        min={0}
                        max={100}
                        step={1}
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                    />
                    <p>선택된 나이: {age}</p>
                    </div>
                </Col>
                <Col md ={6}>
                    <div className="mb-4">
                    <h4>성별을 선택해주세요.</h4>
                    <hr/>
                    <Button
                        variant={gender === '남성' ? 'warning' : 'light'}
                        onClick={() => setGender('남성')}
                        className="m-1"
                    >
                        남성
                    </Button>
                    <Button
                        variant={gender === '여성' ? 'warning' : 'light'}
                        onClick={() => setGender('여성')}
                        className="m-1"
                    >
                        여성
                    </Button>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
              <Col md={6}>
                    <div className="mb-4">
                    <h4>여행 일정을 알려주세요.</h4>
                    <hr/>
                    <DatePicker
                        selected={travelDate}
                        onChange={(date) => setTravelDate(date)}
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                    />
                    </div>
                </Col>
                <Col>
                    <div className="mb-4">
                    <h4>대전 사람인가요?</h4>
                    <hr/>
                    <Form.Check
                        type="switch"
                        id="isLocal"
                        label={isLocal ? '예' : '아니오'}
                        checked={isLocal}
                        onChange={(e) => setIsLocal(e.target.checked)}
                    />
                    </div>
                </Col>
                </Row>
                <Row className="m-auto">
                    <Col className="text-end">
                        <Button
                        className="fw-bold btn-lg"
                        style={{ backgroundColor: '#FFA500', borderRadius: '30px', border: '1px solid black' }}
                        onClick={handleNextClick}
                        >
                        다음
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Extra;
