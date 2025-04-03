import React from 'react';
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle' // Fixed path to shared/Subtitle
import worldImg from '../assets/images/world.png';

import experienceImg from '../assets/images/experience.png';

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'; // Fixed path to services/ServiceList
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testtimonials from '../components/Testimonial/Testimonials'; 
import Newsletter from '../shared/Newsletter'; // Fixed path to shared/Newsletter

const Home = () => {
  return <>
    {/* ============= Hero section start ========= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
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
            <div className="hero__img-box mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>
    {/* ============= Hero section end ========= */}
    {/* ============= Services Section Start ========= */}
    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className='services__title'>We offer our best services</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>
    {/* ============= Services Section End ========= */}


    {/* ============= Featured Tour Section Start ========= */}

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5">
            <Subtitle subtitle={'Explore the World'} />
            <h2 className='featured__tour-title'>Our Featured Tours</h2>
          </Col>

          <FeaturedTourList />
        </Row>

      </Container>
    </section>

    {/* ============= Featured Tour Section End ========= */}

    {/* ============= Experience Section Start ========= */}
    <section>
      <Container>
        <Row>
          <Col lg='6' >
            <div className="experiance__content">
              <Subtitle subtitle={'Experience'} />

              <h2>With Our all Experiance <br /> We Will Serve You</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                accusamus, eos porro cum quam commodi et eveniet.
              </p>
            </div>
            <div className="counter__wrapper d-flex align-item-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trips</h6>
              </div>

              <div className="counter__box">
                <span>2k+</span>
                <h6>Reguler clients</h6>
              </div>

              <div className="counter__box">
                <span>15</span>
                <h6>Years Experience</h6>
              </div>
            </div>
          </Col>
          <Col lg='6' >
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============= Experience Section End ========= */}

    {/* ============= Gallery Section Start ========= */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className="gallery__title">Visit our customers tour gallery</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============= Gallery Section End ========= */}

    {/* ============= Testimonial Section Start ========= */}

    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtitle subtitle={'Fans Love'} />
            <h2 className='testimonial__title'>What our Fans say's about us</h2>
          </Col>
          <Col lg='12'>
            <Testtimonials />
          </Col>
        </Row>
      </Container>
    </section>

    {/* ============= Testimonial Section Start ========= */}
    {/* ============= Newsletter Section Start ========= */}
    <Newsletter />
  </>
}

export default Home