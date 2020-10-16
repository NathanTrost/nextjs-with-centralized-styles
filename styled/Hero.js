import { Flex, Heading } from "@chakra-ui/core";

const Hero = ({ title, children, ...props }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    m="40px"
    {...props}
  >
    {children}
    <Heading fontSize="10vw">{title}</Heading>
  </Flex>
);

export default Hero;
