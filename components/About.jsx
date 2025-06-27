'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'


const projects = [
  {
    title: "www.gestaotributaria.br",
    description: "Research software, EFD-Reinf module, and complementary tools in the tax area. I work as a front-end developer implementing new functionalities, UI/UX improvements, and more.",
    image: "assets/gt.png",
    tags: ["Next.js", "Javascript"],
    author: "Ítalo Dórea",
  },
  {
    title: "www.redacaoexito1000.com.br",
    description: "Exito 1000 writing platform, responsible for the development and maintenance of pages, as well as UI/UX improvements",
    image: "assets/exito1000.png",
    tags: ["Next.js", "Javascript"],
    author: "Ítalo Dórea",
  },
   {
    title: "CNPJ Search",
    description: "A tool for querying data about Brazilian companies using their CNPJ. All the information you need about a company in one place.",
    image: "assets/cnpjSearch.png",
    tags: ["TypeScript"],
    author: "Ítalo Dórea",
  },

]

const TagsProject = ({ tags, marginTop = 0 }) => (
  <HStack spacing={2} marginTop={marginTop}>
    {tags.map((tag) => (
      <Tag size="md" variant="solid" bgColor='#4299e1' key={tag}>
        {tag}
      </Tag>
    ))}
  </HStack>
)

export const About = () => {
  return (
    <Container maxW='full' paddingInline='10%' paddingBlock={5}>
      <Heading size='lg' marginTop="10">
        Projects I Created or Contributed To
      </Heading>
      <Divider marginTop="5" />

      {/* Primeiro artigo destacado em layout horizontal */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <Box
            key={project.title}
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: isEven ? 'row' : 'row-reverse' }}
            justifyContent="space-between"
            alignItems="center"
            gap={5}
            // border='1px solid #fff'
            borderRadius={10}
          >
            <Box
              display="flex"
              flex="1"              
              position="relative"
              alignItems="center"
              padding={3}
            >
              <Box
                padding={3}
                zIndex="2"                
                marginTop="5%"
              >
                <Image
                  borderRadius="lg"
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  objectFit="cover"
                />
              </Box>
            </Box>

            <Box
              display="flex"
              flex="1"
              padding={3}
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}
            >
              <TagsProject tags={project.tags} />
              <Text textDecoration="none" fontSize="3xl" color="#fff">
                {project.title}
              </Text>
              <Text as="p" marginTop="2" color="gray.200" fontSize="md">
                {project.description}
              </Text>
              <Text>{project.author}</Text>
            </Box>
          </Box>
        )
      })}

    </Container>
  )
}