import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
import Post from "./Post"
import { useEffect, useState } from "react"


const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },
      1500)
  }, [])

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && [0, 1, 2, 3].map((_, index) => (
        <VStack key={index} gap={4} alignItems={'flex-start'} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={'flex-start'}>
              <Skeleton h={'10px'} w={'200px'} />
              <Skeleton h={'10px'} w={'200px'} />
            </VStack>
          </Flex>
          <Skeleton w={'full'}>
            <Box h={'500px'}></Box>
          </Skeleton>
        </VStack>
      ))}
      {
        !isLoading && (
          <>
            <Post user={{ username: "asaprogramer_", avatar: "/img1.png", img: "/img1.png", legend: "Feeling good.", comments: 100 }} />
            <Post user={{ username: "BrandonH", avatar: "/img2.png", img: "/img2.png", legend: "New Pic.", comments: 10 }} />
            <Post user={{ username: "Martha", avatar: "/img3.png", img: "/img3.png", legend: "New Cut :)", comments: 25 }} />
            <Post user={{ username: "Joshua", avatar: "/img4.png", img: "/img4.png", legend: "Vacations are on!!!", comments: 67 }} />
          </>
        )
      }
    </Container>
  )
}

export default FeedPosts