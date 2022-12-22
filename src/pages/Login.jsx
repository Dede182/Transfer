import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import truck from "../assets/truck.jpg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <Flex minH={"100vh"}>
      <Box w={["0%", "30%", "0%", "60%"]} className="my-clip-path">
        <Image
          width={"100%"}
          height="100vh"
          objectFit={"cover"}
          src={truck}
          className="my-clip-path"
        />
      </Box>
      <Box
        w={["100%", "70%", "100%", "40%"]}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Box w="350px">
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
