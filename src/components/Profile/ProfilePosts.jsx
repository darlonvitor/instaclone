import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost"

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, {})

  return (
    <Grid
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 3fr)'
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading && [0, 1, 2, 3, 4, 5].map((_, idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={'full'}>
            <Box h={"300px"}></Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading && (
        <>
          <ProfilePost img='/img1.png' comments={2} nDocs={1} profilePic={'/profilepic.png'} userName={'As a Programmer'} userNickname={'asaprogrammer_'}/>
          <ProfilePost img='/img2.png' comments={5} nDocs={3} profilePic={'/profilepic.png'} userName={'As a Programmer'} userNickname={'asaprogrammer_'}/>
          <ProfilePost img='/img3.png' comments={3} nDocs={2} profilePic={'/profilepic.png'} userName={'As a Programmer'} userNickname={'asaprogrammer_'} />
          <ProfilePost img='/img4.png' comments={1} nDocs={2} profilePic={'/profilepic.png'} userName={'As a Programmer'} userNickname={'asaprogrammer_'}/>

        </>
      )}
    </Grid>
  )
}

export default ProfilePosts