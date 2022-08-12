import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { CgMoon } from "react-icons/cg";
import { BsFillSunFill, BsGithub } from "react-icons/bs";

export function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"}>
            <Avatar name="$" size={"sm"} bgColor="green.400"></Avatar>
            <Box>
              <Heading as="h1" size="sm" textTransform={"uppercase"}>
                Calculadora de {" "}
                <Text as={'span'} color={'green.400'}>
                  Renda Passiva
                </Text>
              </Heading>
            </Box>
          </Stack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode} size="md">
                {colorMode === "light" ? (
                  <CgMoon size="1.5rem" />
                ) : (
                  <BsFillSunFill size="1.5rem" />
                )}
              </Button>
              <Link
                href="https://github.com/Ursones/calculadora-de-porcentagem"
                isExternal
              >
                <Button size="md">
                  <BsGithub size="1.5rem" />
                </Button>
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
