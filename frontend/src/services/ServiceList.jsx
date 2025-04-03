import React from 'react'
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationsImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: 'Calculate Weather',
    desc: 'Get accurate weather forecasts for your travel destinations.'
  },
  {
    imgUrl: guideImg,
    title: 'Best Tour Guide',
    desc: 'Explore detailed travel guides for various locations.'
  },
  {
    imgUrl: customizationsImg,
    title: 'Customizations',
    desc: 'Personalize your travel experience with custom options.'
  },
]


const ServiceList = () => {
  return ( 
  <>
    {servicesData.map((item,index) => (
    <Col lg='3' key={index}>
      <ServiceCard item={item} /> 
      </Col> 
    ))}
  </>
  );
};

export default ServiceList
