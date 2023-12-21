import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react"
import SugestedHeader from "./SugestedHeader"
import SugestedUser from "./SugestedUser"

const SugestedUsers = ({ user }) => {
    const { username, avatar } = user
    return (
        <VStack py={8} px={5} gap={4}>
            <SugestedHeader username={username} avatar={avatar} />

            <Flex alignItems={'center'} justifyContent={'space-between'} w={"full"}>
                <Text fontSize={12} fontWeight={'bold'} color={'gray.500'} >
                    Grupo
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.300' }} cursor={"pointer"}>
                    Ver todos
                </Text>
            </Flex>

            <SugestedUser name="Bucky" avatar="https://th.bing.com/th/id/OIG.OfVReUYrjJo9YMLW9Up6?pid=ImgGn" orders={101}/>
            <SugestedUser name="Sophie" avatar="https://th.bing.com/th/id/OIG.ZJVF8kovbjPDgSzuCsnt?pid=ImgGn" orders={30}/>
            <SugestedUser name="Severus" avatar="/img2.png" orders={47}/>

            <Box
                fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}
            >
                &copy; 2023 Built by {" "}
                <Link href="https://github.com/darlonvitor" target="_blank" color={'blue.500'} fontSize={14}>
                    Darlon Vítor
                </Link>
            </Box>
        </VStack>
    )
}

export default SugestedUsers