import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import {
  FaAddressBook,
  FaBasketballBall,
  FaClock,
  FaCouch,
  FaCreativeCommonsNcEu,
  FaPhotoVideo,
  FaTshirt,
} from 'react-icons/fa'

import {
  GiBabyBottle,
  GiCarWheel,
  GiDrill,
  GiPhotoCamera,
} from 'react-icons/gi'

export default function SaleTab() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue)
  }

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaTshirt />}
        label="Men"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaAddressBook />}
        label="Women"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaCreativeCommonsNcEu />}
        label="Cosmetics"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaClock />}
        label="Accessories"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<GiPhotoCamera />}
        label="Eelctronics"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaCouch />}
        label="Furniture"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaBasketballBall />}
        label="Sport"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<GiCarWheel />}
        label="Automobile"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<GiDrill />}
        label="Hardware"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<GiBabyBottle />}
        label="Baby products"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaPhotoVideo />}
        label="Photos"
      />
      <Tab
        sx={{
          fontSize: '14px',
        }}
        icon={<FaTshirt />}
        label="Clothes"
      />
    </Tabs>
  )
}
