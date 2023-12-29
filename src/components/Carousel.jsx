import { Carousel } from 'react-carousel-minimal'

const CarouselComponent = ({ images }) => {
  const data = images.map((item) => {
    return {
      image: item.img,
    }
  })

  return (
    <Carousel
      data={data}
      width="100%"
      height="100%"
      slideNumber={false}
      automatic={false}
      dots={true}
      slideBackgroundColor="darkgrey"
      slideImageFit="contain"
      style={{
        margin: '1vw',
      }}
    />
  )
}

export default CarouselComponent
