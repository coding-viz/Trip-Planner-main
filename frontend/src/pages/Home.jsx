import React from 'react'; 
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle' // Fixed path to shared/Subtitle
import worldImg from '../assets/images/world.png';

const Home = () => {
  return <>
  {/* ============= Hero section start ========= */}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
         <div className="hero__content">
          <div className="hero__subtitle d-flex align-items-center">
            <Subtitle subtitle={'Know Before You Go'}/>
            <img src={worldImg} alt="" />
          </div>
          <h1>Traveling Opens the Door to creating <span 
          className='highlight'>Memories</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ex, cum voluptate? Odit sint praesentium, non veritatis cupiditate 
            hic blanditiis assumenda recusandae rem similique voluptates accusamus 
            a! Consectetur neque officiis cum?</p>
         </div>
        </Col>

        
        <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg} alt="" />
        </div>
        </Col>

        <Col lg='2'>
        <div className="hero__img-box">
          <video src={heroVideo} alt="" controls/>
        </div>
        </Col>

        <Col lg='2'>
        <div className="hero__img-box">
          <img src={heroImg02} alt="" />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}

export default Home