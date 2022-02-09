import { Carousel } from 'react-bootstrap';
import "./carousel.css"

const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={2000} style={{'height':"300px",borderRadius:"12px"}}>
        <img
           style={{'height':"300px",borderRadius:"25px"}}
          className="d-block w-100"
          src={"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer;