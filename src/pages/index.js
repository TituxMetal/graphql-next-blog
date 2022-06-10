import tw from 'twin.macro'

const Container = tw.section`flex flex-col h-screen m-auto`
const Footer = tw.footer`m-auto bg-gray-700 w-full text-center`
const Main = tw.main`flex-auto`
const Text = tw.p`p-4`
const Title = tw.h1`mx-auto my-4 text-center text-4xl`

const HomePage = () => (
  <Container>
    <Main>
      <Title>Home Page</Title>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolores inventore saepe
        cupiditate perspiciatis hic minima ipsum vero labore, nam error aliquam incidunt dolor iste
        dicta eaque tenetur similique ipsa.
      </Text>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolores inventore saepe
        cupiditate perspiciatis hic minima ipsum vero labore, nam error aliquam incidunt dolor iste
        dicta eaque tenetur similique ipsa.
      </Text>
    </Main>
    <Footer>
      <Text>Created with love and lots of coffee by Titux Metal</Text>
    </Footer>
  </Container>
)

export default HomePage
