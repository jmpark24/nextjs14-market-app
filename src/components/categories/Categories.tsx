import React from 'react'
import { FaSkiing } from 'react-icons/fa'
import { GiBoatFishing, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { TbBeach, TbMountain, TbTool } from 'react-icons/tb'

export const categories = [
  {
    label: '디지털기기',
    path: 'digital',
    icon: TbBeach,
    description: '디지털기기 카테고리입니다.'
  },
  {
    label: '생활가전',
    path: 'appliances',
    icon: GiWindmill,
    description: '생활가전 카테고리입니다.'
  },
  {
    label: '가구/인테리어',
    path: 'interior',
    icon: MdOutlineVilla,
    description: '가구/인테리어 카테고리입니다.'
  },
  {
    label: '여성의류',
    path: 'woman-clothing',
    icon: TbMountain,
    description: '여성의류 카테고리입니다.'
  },
  {
    label: '남성패션/잡화',
    path: 'man-fashion',
    icon: TbTool,
    description: '남성패션/잡화 카테고리입니다.'
  },
  {
    label: '뷰티/미용',
    path: 'beauty',
    icon: GiIsland,
    description: '뷰티/미용 카테고리입니다.'
  },
  {
    label: '스포츠/레져',
    path: 'sports',
    icon: GiBoatFishing,
    description: '스포츠/레져 카테고리입니다.'
  },
  {
    label: '중고차',
    path: 'used-car',
    icon: FaSkiing,
    description: '중고차 카테고리입니다.'
  },
]

const Categories = () => {
  return (
    <div>Categories</div>
  )
}

export default Categories