import React from 'react'
import PostHeader from './PostHeader'
import { Box, Image } from '@chakra-ui/react'
import PostFooter from './PostFooter'

const Post = ({user}) => {
  const {username, avatar, img , legend, comments} = user
  return (
    <>
      <PostHeader username={username} avatar={avatar} />
      <Box borderRadius={4} overflow={'hidden'}>
        <Image src={img} alt={username} />
      </Box>
      <PostFooter username={username} legend={legend} comments={comments}/>
    </>
  )
}

export default Post