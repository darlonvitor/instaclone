import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useColorMode } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";

const PostFooter = ({ username, legend, comments, isProfilePage }) => {
    const { colorMode } = useColorMode();
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1)
        } else {
            setLiked(true);
            setLikes(likes + 1)
        }
    }
    return (
        <Box mb={10} mt={'auto'}>
            <Flex alignItems={"center"} gap={4} w={'full'} pt={0} mb={2} mt={4}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? (<NotificationsLogo colorMode={colorMode} />) : (<UnlikeLogo colorMode={colorMode} />)}
                </Box>

                <Box cursor={"pointer"} fontSize={18}>
                    <CommentLogo colorMode={colorMode} />
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={'sm'}>
                {`${likes} ${likes == 1 ? "like" : "likes"}`}
            </Text>

            {!isProfilePage && (
                <>
                    <Text fontSize={'sm'} fontWeight={700}>
                        {username}{" "}
                        <Text as={'span'} fontWeight={400}>
                            {legend}
                        </Text>
                    </Text>
                    <Text
                        fontSize={'sm'}
                        color={'gray'}
                        cursor={"pointer"}
                    >
                        {comments > 10 ? `Ver todos os ${comments} comentários` : `Ver os comentários`}
                    </Text>
                </>
            )}

            <Flex
                alignItems={"center"}
                gap={2}
                justifyContent={"space-between"}
                w={"full"}
            >
                <InputGroup>
                    <Input variant={'flushed'} placeholder="Add um comentário..." />
                    <InputRightElement>
                        <Button
                            fontSize={14}
                            color={'blue.500'}
                            fontWeight={600}
                            cursor={'pointer'}
                            bg={'transparent'}
                        >
                            Postar
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>

        </Box>
    )
}

export default PostFooter