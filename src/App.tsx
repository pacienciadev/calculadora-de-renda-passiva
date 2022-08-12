import {
  Box,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import { TooltipHelper } from "./components/TooltipHelper";
import { StateProps } from "./types";
import { currencyFormatter } from "./utils/currencyFormatter";

const percentage = (value: number) => value / 100;

function App() {
  const [state, setState] = useState<StateProps>({
    desiredMonthlyPassiveIncome: "",
  });
  const [annualMonthlyIncome] = useState(4000);
  const [currentSavingsPercentage] = useState(25);
  const [currentEconomyMoney, setCurrentEconomyMoney] = useState(0);
  const [passiveIncomePerformance] = useState(4);
  const [applicationPerformance] = useState(8);
  const [annualContribution, setAnnualContribution] = useState(0);
  const [finalValue, setFinalValue] = useState(0);
  const [currentPassiveIncome, setCurrentPassiveIncome] = useState(0);

  const desiredMonthlyPassiveIncomeHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      desiredMonthlyPassiveIncome: event.target.value,
    });
  };

  useEffect(() => {
    if (annualMonthlyIncome && currentSavingsPercentage) {
      const currentEconomyMoneyResult =
        annualMonthlyIncome * percentage(currentSavingsPercentage);
      setCurrentEconomyMoney(currentEconomyMoneyResult);
    }
  }, [annualMonthlyIncome, currentSavingsPercentage]);

  useEffect(() => {
    if (annualMonthlyIncome && currentSavingsPercentage) {
      setAnnualContribution(currentEconomyMoney * 12);
    } else {
      setAnnualContribution(0);
    }
  }, [currentEconomyMoney]);

  useEffect(() => {
    if (applicationPerformance) {
      setFinalValue(
        annualContribution +
          annualContribution * percentage(applicationPerformance)
      );
    } else {
      setFinalValue(0);
    }
  }, [annualContribution]);

  useEffect(() => {
    if (finalValue) {
      setCurrentPassiveIncome(
        percentage(passiveIncomePerformance) * finalValue
      );
    } else {
      setCurrentPassiveIncome(0);
    }
  }, [finalValue]);

  return (
    <>
      <Nav />
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 16 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Planeje a sua{" "}
            <Text as={"span"} color={"green.400"}>
              renda passiva
            </Text>{" "}
          </Heading>
        </Stack>

        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          mt={16}
        >
          <Stack spacing={4} direction="row">
            <Box flex={1}>
              <FormControl id="desiredMonthlyPassiveIncome">
                <TooltipHelper text="É a renda que você deseja descobrir através do cálculo que será feito" />
                <FormLabel>Renda passiva mensal desejada</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1rem"
                    children="R$"
                  />
                  <Input
                    type="number"
                    value={state.desiredMonthlyPassiveIncome}
                    onChange={desiredMonthlyPassiveIncomeHandler}
                    placeholder="0,00"
                  />
                </InputGroup>
              </FormControl>
            </Box>
            <Box flex={1}>
              <FormControl id="desiredMonthlyPassiveIncome">
                <FormLabel>Renda mensal atual</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="1rem"
                    children="R$"
                  />
                  <Input type="number" placeholder="0,00" />
                </InputGroup>
              </FormControl>
            </Box>
          </Stack>
        </Box>

        <Stack as={Box} textAlign={"center"}>
          <Text as={"span"} color={"black.400"}>
            Renda mensal atual ={" "}
            {annualMonthlyIncome
              ? currencyFormatter({ value: annualMonthlyIncome })
              : "Não declarada"}
            <br />
            Economial atual porcentagem ={" "}
            {currentSavingsPercentage
              ? currentSavingsPercentage + "%"
              : "Aguardando informações"}
            <br />
            Economial atual Monetária ={" "}
            {currentEconomyMoney
              ? currencyFormatter(currentEconomyMoney)
              : "Aguardando informações"}
            <br />
            Rendimento da renda passiva ={" "}
            {passiveIncomePerformance
              ? passiveIncomePerformance + "%"
              : "Aguardando informações"}
            <br />
            Rendimento das aplicações ={" "}
            {applicationPerformance
              ? applicationPerformance + "%"
              : "Aguardando informações"}
            <br />
            GRANDE OBJETIVO ={" "}
            {state.desiredMonthlyPassiveIncome && passiveIncomePerformance
              ? currencyFormatter(
                  (state.desiredMonthlyPassiveIncome * 12) /
                    percentage(passiveIncomePerformance)
                )
              : "Aguardando informações"}
          </Text>

          <Divider />

          <Text as={"span"} color={"black.400"}>
            Aporte anual ={" "}
            {annualContribution
              ? currencyFormatter(annualContribution)
              : "Aguardando informações"}{" "}
            <br />
            Rendimento anual ={" "}
            {applicationPerformance
              ? applicationPerformance + "%"
              : "Aguardando informações"}{" "}
            <br />
            Valor final ={" "}
            {finalValue
              ? currencyFormatter(finalValue)
              : "Aguardando informações"}{" "}
            <br />
            Renda passiva atual =
            {currentPassiveIncome
              ? currencyFormatter(currentPassiveIncome)
              : "Aguardando informações"}{" "}
            <br />
          </Text>
        </Stack>
      </Container>

      <Footer />
    </>
  );
}

export default App;
