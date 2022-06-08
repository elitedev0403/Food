import React from 'react'
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

const Home: NextPage = () => {

	const [showModal, setShowModal] = React.useState(false);
	const [imageUrl, setImageUrl] = React.useState("");

  const cardInfo: CardProps[] = [
    {
      imgUrl: '/assets/images/card1.jpg',
      title: 'Summer Lunch Menu By Mark Best',
      content:
        'AEG ambassador Mark Best’s summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
    },
    {
      imgUrl: '/assets/images/card2.jpg',
      title: 'A Traditional Christmas Eve, Mark Best Style',
      content:
        "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    },
    {
      imgUrl: '/assets/images/card3.jpg',
      title: 'Summer Lunch Menu By Mark Best',
      content:
        'This exclusive cookbook gives you all the know‑how you need. We’ve designed it to make sure you get the most out of our products – and the best out of your food.',
    },
  ];

	const setModal = (url: string) => {
		setImageUrl(url);
		setShowModal(true);
	}

	const imageLink = (url: string) => (
		<>
			<img src={url} className="cursor-pointer transition duration-300 hover:scale-95 hover:blur-sm w-full" alt=""  onClick={ () => setModal(url) }/>
		</>
	)

  return (
    <Layout>
      <Grid>
        {imageLink("/assets/images/blog1.jpg")}

        <Stack>
        	{imageLink("/assets/images/blog2.jpg")}
        	{imageLink("/assets/images/blog3.jpg")}
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

			<Modal onClose={() => {setShowModal(false)}} show={showModal} imageUrl={imageUrl}></Modal>
    </Layout>
  )
}

export default Home
