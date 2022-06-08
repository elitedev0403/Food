import Link from 'next/link'
import React from 'react'
import Button from '../button/button'
import Caption from '../caption/caption'
import Content from '../content/content'
import Stack from '../Stack/stack'

const Card: React.FC<CardProps> = ({ imgUrl, title, content, id }) => {
  const handleClick = () => {
    console.log(`You clicked blog with title of ${title}`)
  }
  return (
    <Link href={{ pathname: `/blog/${id}`, query: { id: id } }}>
      <a onClick={handleClick}>
        <div className="transition duration-500 hover:sepia">
          <Stack>
            <img src={imgUrl} className=" border-b-custom-red border-b-4 border-solid" alt="" />
            <Caption>{title}</Caption>
            <Content>{content}</Content>
            <Button>READ MORE</Button>
          </Stack>
        </div>
      </a>
    </Link>
  )
}

export interface CardProps {
  imgUrl?: string | ''
  title?: string | ''
  content?: string | ''
  id?: number | -1
}

export default Card
