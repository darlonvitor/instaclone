import { Avatar, Flex, Link, Text } from "@chakra-ui/react"
import { Link as ReactRouterLink } from 'react-router-dom'

const SugestedHeader = ({username, avatar}) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar name="As a Programmer" size={'md'} src={avatar} border={'2px solid'}/>
                <Text fontSize={12} fontWeight={'bold'}>
                    {username}
                </Text>
            </Flex>
            <Link
                as={ReactRouterLink}
                to={'/auth'}
                fontSize={14}
                fontWeight={'medium'}
                color={'blue.400'}
                style={{textDecoration:'none'}}
                cursor={'pointer'}
            >
                Sair
            </Link>
        </Flex>
    )
}

export default SugestedHeader