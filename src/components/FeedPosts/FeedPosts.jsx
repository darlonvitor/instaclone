import { Container } from "@chakra-ui/react"
import Post from "./Post"


const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <Post user = {{username:"asaprogramer_", avatar:"/img1.png", img:"/img1.png" , legend:"Feeling good.", comments: 100}}/>
        <Post user = {{username:"BrandonH", avatar:"/img2.png", img:"/img2.png" , legend:"New Pic.", comments: 10}}/>
        <Post user = {{username:"Martha", avatar:"/img3.png", img:"/img3.png" , legend:"New Cut :)", comments: 25}}/>
        <Post user = {{username:"Joshua", avatar:"/img4.png", img:"/img4.png" , legend:"Vacations are on!!!", comments: 67}}/>
    </Container>
  )
}

export default FeedPosts