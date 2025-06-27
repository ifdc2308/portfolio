'use client'

import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Container,
  Flex,
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

      {/* Flex container com wrap para permitir dois por linha */}
      <Flex wrap="wrap" gap={6} mt={6}>
        {projects.map((project) => (
          <Flex
            key={project.title}
            direction="row"
            gap={4}
            padding={4}
            borderRadius="lg"
            bg="gray.900"
            flex="1 1 45%"
            minW="300px"
            cursor='pointer'
            _hover={{
              transform: 'scale(1.03)'
            }}
          >
            <Image
              borderRadius="lg"
              boxSize="180px"
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              objectFit='contain'
            />
            <Flex direction="column" justifyContent="center" flex="1">
              <TagsProject tags={project.tags} />
              <Text fontSize="xl" fontWeight="bold" color="white" mt={2}>
                {project.title}
              </Text>
              <Text fontSize="sm" color="gray.300" mt={1}>
                {project.description}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Container>
  )
}
