import Link from 'next/link'
import React from 'react'
import Button from '../button/button'
import Caption from '../caption/caption'
import Content from '../content/content'
import Stack from '../Stack/stack'

const Card: React.FC<CardProps> = ({ imgUrl, title, content }) => (
  <Link href="/asdf">
		<a>
			<div className='transition duration-500 hover:sepia'>
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

export interface CardProps {
  imgUrl: string
  title: string
  content: string
}

export default Card
