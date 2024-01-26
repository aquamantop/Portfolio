import { Box, Button } from '@mui/material'
import { useState } from 'react'
import {
  BoxImagesContainer,
  BoxImage,
  ImageSX,
  ButtonImage,
} from '../pages/styles/CustomMui'

const CarouselComponent = ({ images }) => {
  const data = images.map((item) => {
    return {
      src: item.img,
      alt: item.alt,
    }
  })
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % images.length)
  }
  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length)
  }

  return (
    <Box sx={{ ...BoxImagesContainer }}>
      <Box sx={{ ...BoxImage }}>
        <Button sx={{ ...ButtonImage }} size="small" onClick={prev}>
          {'\u276E'}
        </Button>
        <img
          style={{ ...ImageSX }}
          src={data[current].src}
          alt={data[current].alt}
        />
        <Button sx={{ ...ButtonImage }} size="small"onClick={next}>
          {'\u276F'}
        </Button>
      </Box>
    </Box>
  )
}

export default CarouselComponent
