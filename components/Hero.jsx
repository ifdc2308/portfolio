'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export default function SplitScreen() {
  return (
    <Stack paddingTop={24} paddingBottom={2} direction={{ base: 'column', md: 'row' }}>
      <Flex paddingInline='10%'  align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'gray.600',
                zIndex: -1,
              }}>
              Ítalo Dórea
            </Text>
            <br />{' '}
            <Text fontSize= '3xl' color={'blue.400'} as={'span'}>
              Software Analyst and Developer
            </Text>{' '}
          </Heading>
          <Text fontSize={''} color={'gray.400'}>
            Software Developer with experience in building complete applications, combining skills in front-end and full-stack development, databases, cloud infrastructure, and UX/UI design. Focused on creating practical and efficient solutions to enhance user experience. I have participated in several projects, contributing to the development of functional solutions while valuing continuous learning.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              start project
            </Button>
            <Button rounded={'full'}>view projects</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        {/* <Image
          alt={'Login Image'}
          objectFit='fill'
          width='md'
          src={'/IconLogo.svg'}
        /> */}
      </Flex>
    </Stack>
  )
}