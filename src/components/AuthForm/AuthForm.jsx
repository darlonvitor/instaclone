import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        navigate("/");
    };

    return (
        <>
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src='logo.png' h={24} cursor={'pointer'} alt="Site logo" />
                    <Input
                        placeholder='E-mail'
                        fontSize={14}
                        type='email'
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input
                        placeholder='Senha'
                        fontSize={14}
                        type='password'
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />

                    {!isLogin ? (
                        <Input
                            placeholder='Confirme a Senha'
                            fontSize={14}
                            type='password'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    ) : null}

                    <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={14} onClick={handleAuth}>
                        {isLogin ? "Entrar" : "Solicitar"}
                    </Button>

                    {/* OR text */}
                    <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                        <Text mx={1}>OU</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"} />
                    </Flex>

                    <Flex alignItems={'center'} justifyContent={'center'} cursor={"pointer"}>
                        <Image src='/google.png' w={5} alt='Google Logo' />
                        <Text mx={2} color={"blue.500"}>Entrar com o Google</Text>
                    </Flex>
                </VStack>
            </Box>

            {/* Switch between login or sign up */}
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex alignItems={"center"} justifyContent={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Não está cadastrado?" : "Já está cadastrado?"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} fontSize={14} cursor={'pointer'}>
                        {isLogin ? "Solicitar acesso" : "Entrar"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm