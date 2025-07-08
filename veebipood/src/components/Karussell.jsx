import Carousel from 'react-bootstrap/Carousel';

function Karussell() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          src="https://carwow-uk-wp-1.imgix.net/2025-Ferrari-F80-front-static-lead.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVMMSqnkFsRVSdo8ejj9ZFGbBw5eQ3xtNQyg&s"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-reveulto-104-67aa3276672fb.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Karussell;