import { Box, Container, Flex } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts"
import SugestedUsers from "../../components/SugestedUsers/SugestedUsers"

const HomePage = () => {
  
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>
        <Box flex={3} mr={20}
          display={{ base: 'none', lg: 'block' }}
          maxW={'300px'}
        >
          <SugestedUsers user = {{username:"asaprogrammer_", avatar:"/profilepic.png"}} />
        </Box>
      </Flex>
    </Container>
  )
}

export default HomePage