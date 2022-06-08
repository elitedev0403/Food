import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Heading from '@src/components/heading/heading'
import Grid from '@src/components/grid/grid'
import Stack from '@src/components/Stack/stack'
import Caption from '@src/components/caption/caption'
import Content from '@src/components/content/content'
import Title from '@src/components/title/title'
import Card, { CardProps } from '@src/components/card/card'
import Highlight from '@src/components/highlight/highlight'
import Layout from '@src/components/layout/layout'
import Modal from '@src/components/image-modal/image-modal'
import ImageButton from '@src/components/image-button/image-button'

const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [cardInfo, setCardInfo] = useState<CardProps[]>([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch('/data/blogs.json')
      .then((res) => res.json())
      .then((data) => {
        setCardInfo(data)
        setLoading(false)
      })
  }, [])

  const setModal = (url: string) => {
    setImageUrl(url)
    setShowModal(true)
  }


  return (
    <Layout loading={isLoading}>
      <Grid>
				<ImageButton imageUrl="/assets/images/blog1.jpg" onClick={(url) => setModal(url)}/>

        <Stack>
					<ImageButton imageUrl="/assets/images/blog2.jpg" onClick={(url) => setModal(url)}/>
					<ImageButton imageUrl="/assets/images/blog3.jpg" onClick={(url) => setModal(url)}/>
        </Stack>

        <div className="xl:col-span-1 sm:col-span-2 col-span-1">
          <Stack>
            <Title>ANSWER YOUR BODY'S NEEDS</Title>
            <Content>
              The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our
              body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that
              artificial flavourings are getting in the way. This can be reversed by focusing on high-quality
              ingredients and being mindful as your appetite guides you to consume according to your body's needs.
            </Content>
            <Highlight>BE MINDFUL</Highlight>
            <Caption>
              Sourcing local or organic food is a good way to start being more mindful about what you're cooking and
              eating.
            </Caption>
          </Stack>
        </div>
      </Grid>

      <Heading>ALL THE LATEST FROM AEG</Heading>

      <Grid>
        {cardInfo.map((card, index) => (
          <Card key={`card_${index}`} {...card}></Card>
        ))}
      </Grid>

      <Modal
        onClose={() => {
          setShowModal(false)
        }}
        show={showModal}
        imageUrl={imageUrl}
      ></Modal>
    </Layout>
  )
}

export default Home
