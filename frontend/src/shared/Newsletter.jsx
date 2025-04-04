import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'

import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
    return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe Now to Get Useful Traveling Information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter Your Email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>We won't send you spam or product updates</p>
                        <p>We care about your data and privacy. Read our <span>Privacy Policy</span></p>
                    </div>
                </Col>

                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt='Newsletter' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
  
}

export default Newsletter
