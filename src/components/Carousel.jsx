import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Box, useMediaQuery } from '@mui/material'
import { ImagesCarousel } from '../pages/styles/CustomMui'

const CarouselComponent = ({ images }) => {
  const isMobile = useMediaQuery('(max-width:768px)')
  const isPc = useMediaQuery('(min-width:1800px)')

  return (
    <Box>
      <Swiper
        style={
          isMobile
            ? { height: '350px' }
            : isPc
            ? { height: '850px' }
            : { height: '700px' }
        }
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              style={{ ...ImagesCarousel }}
              src={image.src}
              alt={image.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default CarouselComponent
