import { Carousel } from 'react-carousel-minimal'

const CarouselComponent = ({ images }) => {
  const data = images.map((item) => {
    return {
      image: item.img,
      caption: item.alt
    }
  })
  
  const captionStyle = {
    display: 'none',
  }

  return (
    <Carousel
      data={data}
      width="100%"
      height="100%"
      slideNumber={false}
      automatic={false}
      captionStyle={captionStyle}
      dots={true}
      slideBackgroundColor="darkgrey"
      slideImageFit="contain"
      style={{
        margin: '15px 0px',
      }}
    />
  )
}

export default CarouselComponent
