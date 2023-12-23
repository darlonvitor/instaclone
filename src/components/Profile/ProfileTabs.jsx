import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import { BsGrid3X3, BsPeople, BsFiles } from 'react-icons/bs'
const ProfileTabs = () => {
  const { colorMode } = useColorMode()
  
  return (
    <Flex
      w={'full'}
      justifyContent={'center'}
      gap={{ base: 4, sm: 10 }}
      textTransform={'uppercase'}
      fontWeight={'bold'}
    >
      <Flex borderTop={'1px solid'} borderColor={colorMode == 'dark' ? 'white' : 'gray'} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }} >demandas</Text>
      </Flex>

      <Flex  alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsFiles />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }} >docs</Text>
      </Flex>
      
      <Flex  alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsPeople />
        </Box>
        <Text fontSize={12} display={{ base: 'none', sm: 'block' }} >cadastros</Text>
      </Flex>
    </Flex>
  )
}

export default ProfileTabs