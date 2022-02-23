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
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab
        sx={{
          fontSize: '12px',
          ':active': {
            color: 'rgb(210, 63, 87) !important',
          },
        }}
        icon={<FaTshirt />}
        label="Men"
      />
      <Tab
        sx={{
          fontSize: '12px',

          ':active': { color: 'rgb(210, 63, 87) !important' },
        }}
        icon={<FaAddressBook />}
        label="Women"
      />
      <Tab icon={<FaCreativeCommonsNcEu />} label="Cosmetics" />
      <Tab icon={<FaClock />} label="Accessories" />
      <Tab icon={<GiPhotoCamera />} label="Eelctronics" />
      <Tab icon={<FaCouch />} label="Furniture" />
      <Tab icon={<FaBasketballBall />} label="Sport" />
      <Tab icon={<GiCarWheel />} label="Automobile" />
      <Tab icon={<GiDrill />} label="Hardware" />
      <Tab icon={<GiBabyBottle />} label="Baby products" />
      <Tab icon={<FaPhotoVideo />} label="Photos" />
      <Tab icon={<FaTshirt />} label="Clothes" />
    </Tabs>
  )
}
