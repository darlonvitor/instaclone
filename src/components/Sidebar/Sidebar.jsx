import { Avatar, Box, Flex, Link, Tooltip, useColorMode } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'
import { ClientLogo, ClientMobileLogo, CreatePostLogo, NotificationsLogo, SearchLogo } from '../../assets/constants'
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
    const { colorMode } = useColorMode();
    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Buscar",
        },
        {
            icon: <NotificationsLogo colorMode={colorMode} />,
            text: "Notificações",
        },
        {
            icon: <CreatePostLogo />,
            text: "Criar",
        },
        {
            icon: <Avatar size={"sm"} name={'Nome user'} src='/profilepic.png' border={`1px solid ${colorMode == 'dark' ? "white" : "black"}`} />,
            text: "Perfil",
            link: "/asaprogrammer"
        },
    ];
    return (
        <Box
            height={"100vh"}
            borderRight={"1px solid"}
            borderColor={colorMode == 'dark' ? "whiteAlpha.300" : "gray.300"}
            py={8}
            px={{ base: 2, md: 4 }}
            position={'sticky'}
            top={0}
            left={0}
        >
            <Flex direction={"column"} gap={10} w="full" height={"full"}>
                <Link
                    to={"/"}
                    as={ReactRouterLink}
                    pl={2}
                    display={{ base: "none", md: "block" }}
                >
                    <ClientLogo />
                </Link>
                <Link
                    to={"/"}
                    as={ReactRouterLink}
                    p={2}
                    display={{ base: "block", md: "none" }}
                    borderRadius={6}
                    _hover={{ bg: "whiteAlpha.200" }}
                    w={10}
                >
                    <ClientMobileLogo />
                </Link>
                <Flex direction={"column"} gap={5}>
                    {sidebarItems.map((item, index) => (
                        <Tooltip
                            key={index}
                            hasArrow
                            label={item.text}
                            placement='right'
                            ml={1}
                            openDelay={500}
                            display={{ base: "block", md: "none" }}
                        >
                            <Link
                                display={'flex'}
                                to={item.link || null}
                                as={ReactRouterLink}
                                alignItems={'center'}
                                justifyContent={{ base: 'center', md: 'flex-start' }}
                                _hover={{ bg: colorMode == 'dark' ? "whiteAlpha.400" : "gray.200" }}
                                borderRadius={6}
                                gap={4}
                                p={2}
                                w={{ base: 10, md: "full" }}
                            >
                                {item.icon}
                                <Box display={{ base: "none", md: "block" }} >
                                    {item.text}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </Flex>
                <Tooltip
                    hasArrow
                    label={"Sair"}
                    placement='right'
                    ml={1}
                    openDelay={500}
                    display={{ base: "block", md: "none" }}
                >
                    <Link
                        display={'flex'}
                        to={"/auth"}
                        as={ReactRouterLink}
                        alignItems={'center'}
                        justifyContent={{ base: 'center', md: 'flex-start' }}
                        _hover={{ bg: colorMode == 'dark' ? "whiteAlpha.400" : "gray.200" }}
                        borderRadius={6}
                        gap={4}
                        p={2}
                        w={{ base: 10, md: "full" }}
                        mt={"auto"}
                    >
                        <BiLogOut size={25}/>
                        <Box display={{ base: "none", md: "block" }} >
                            Sair
                        </Box>
                    </Link>
                </Tooltip>
            </Flex>
        </Box>
    )
}

export default Sidebar