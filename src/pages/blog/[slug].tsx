import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@src/components/layout/layout'
import { CardProps } from '@src/components/card/card'
import Stack from '@src/components/Stack/stack'
import Heading from '@src/components/heading/heading'
import Caption from '@src/components/caption/caption'

const Blog = () => {
  const router = useRouter()
  const { id } = router.query
  const [isLoading, setLoading] = useState(false)
  const [cardInfo, setCardInfo] = useState<CardProps>({})

  useEffect(() => {
    setLoading(true)

    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((data: CardProps[]) => {
        const index = data.findIndex((item) => String(item.id) == id)
        setCardInfo(data[index])
        setLoading(false)
      })
  }, [])

  return (
    <Layout loading={isLoading}>
      <Stack>
        <Heading>{cardInfo.title}</Heading>
        <div className="flex sm:flex-row flex-col gap-10 items-center justify-center mb-16">
          <img src={cardInfo.imgUrl} alt="" className="w-full grayscale" />
          <Caption>{cardInfo.content}</Caption>
        </div>
      </Stack>
    </Layout>
  )
}

export default Blog
