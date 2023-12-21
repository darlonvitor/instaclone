import { Avatar, Box, Flex, Text } from "@chakra-ui/react"


const PostHeader = ({username, avatar}) => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={'full'} my={2}>
            {/* We gonna have a Flex with a espace between elements */}
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} alt="user profile pic" size={"sm"} />
                <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                    {username}
                    <Box color={"gray.500"}>&#8226; 1s</Box>
                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Text
                    fontSize={12}
                    fontWeight={'bolder'}
                    color={"blue.400"}
                    _hover={{
                        color:"gray.500",
                    }}
                    transition={'0.2s ease-in-out'}
                >
                    Unfollow
                </Text>
            </Box>
        </Flex>
    )
}

export default PostHeader