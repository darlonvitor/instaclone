import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from "@chakra-ui/react"

const ProfileHeader = () => {

  return (
    <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: "row" }}>

      <AvatarGroup
        size={{ base: 'xl', md: '2xl' }}
        justifySelf={'center'}
        alignSelf={'flex-start'}
        mx={"auto"}
      >
        <Avatar name='As a programmer' src="/profilepic.png" alt='As a programmer logo' />
      </AvatarGroup>

      <VStack alignItems={'start'} gap={2} mx={'auto'} flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justifyContent={{ base: 'center', sm: 'flex-start' }}
          alignItems={'center'}
          w={'full'}
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>asaprogrammer_</Text>
          <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
            <Button
              bg={'white'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.800' }}
              size={{ base: 'xs', md: 'sm' }}
            >
              Editar Perfil
            </Button>
          </Flex>
        </Flex>

        <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }} fontSize={{ base: 'xs', md: 'sm' }}>

          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>67</Text>
            Demandas
          </Text>
          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>75</Text>
            Documentos
          </Text>
          <Text>
            <Text as={'span'} fontWeight={'bold'} mr={1}>40</Text>
            Cadastros
          </Text>

        </Flex>

        <Flex alignItems={'center'} gap={4}>
          <Text fontSize={'sm'} fontWeight={'bold'}>As a Programmer</Text>
        </Flex>
        <Text fontSize={'sm'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader