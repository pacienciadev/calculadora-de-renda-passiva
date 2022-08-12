import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box py={10}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Heading as="h1" size="sm" textTransform={"uppercase"}>
          Calculadora de{" "}
          <Text as={"span"} color={"green.400"}>
            Renda Passiva
          </Text>
        </Heading>
      </Flex>

      <Text color={"gray.500"} px={20} textAlign={"center"} mt={6}>
        Essa calculadora é baseada em uma planília feita pelo{" "}
        <Link
          color={"green.400"}
          href="https://www.oprimorico.com.br/thiago-nigro/"
          isExternal
        >
          Thiago Nigro (O Primo Rico)
        </Link>{" "}
        em seu vídeo que acabou me inspirando:
        <br />
        <Link
          color={"green.400"}
          href="https://youtu.be/IazEN13o304"
          isExternal
        >
          COMO GANHAR R$1.500 TODOS OS MESES SEM PRECISAR TRABALHAR! | VIVER DE
          RENDA PASSIVA
        </Link>
      </Text>

      <Text pt={6} fontSize={"lg"} textAlign={"center"}>
        Feito com{" "}
        <Link href="https://vitejs.dev/" color="green.400" isExternal>
          Vite
        </Link>{" "}
        +{" "}
        <Link href="https://pt-br.reactjs.org/" color="green.400" isExternal>
          React
        </Link>{" "}
        +{" "}
        <Link
          href="https://www.typescriptlang.org/"
          color="green.400"
          isExternal
        >
          TS
        </Link>{" "}
        +{" "}
        <Link href="https://chakra-ui.com" color="green.400" isExternal>
          ChakraUI
        </Link>{" "}
        <br />
        Por{" "}
        <Link href="https://github.com/ursones" color="green.400" isExternal>
          Rafael Eduardo
        </Link>{" "}
        🚀
      </Text>
    </Box>
  );
};
