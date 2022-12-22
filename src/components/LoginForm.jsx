import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaUnlockAlt } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "hhz@gmail.com",
      password: "asdffdsa",
    },
    onSubmit: async (user) => {
      const { data } = await axios.post(
        "https://app.iwcygn.com/api/v1/login",
        user
      );
      console.log(data);
      if(data?.success) navigate('/dashboard')
      formik.values.email = "";
      formik.values.password = "";
    },
  });
  return (
    <>
      <Box display={"flex"} alignItems="top" gap="5" mb="5">
        <Image src={logo} objectFit="cover" width={"50px"} mb="5" />
        <Box>
          <Text fontSize={"xl"} fontWeight="extrabold">
            Yangon Industrial
          </Text>
          <Text>Waste Collection</Text>
        </Box>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <FormControl mb="5">
          <FormLabel>အီးမေးလ် လိပ်စာ</FormLabel>
          <Input
            type={"email"}
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl mb="5">
          <FormLabel>လျှို့ဝှက် နံပါတ်</FormLabel>
          <Input
            type={"password"}
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </FormControl>
        <Checkbox mb="5">မှတ်သားမည်</Checkbox>
        <Button
          w={"full"}
          colorScheme="blue"
          variant="solid"
          display={"flex"}
          alignItems="center"
          gap="2"
          type="submit"
        >
          <FaUnlockAlt style={{ marginBottom: "2px" }} />
          <span>အကောင့်ဝင်မည်</span>
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
