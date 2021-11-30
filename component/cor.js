import { App } from 'react';
import { Carousel } from 'react-bootstrap';

<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="../build/5.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="../buld/4.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../build/3.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>