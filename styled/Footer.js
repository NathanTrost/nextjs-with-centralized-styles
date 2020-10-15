import Flex from "@chakra-ui/core/dist/Flex";

const Footer = (props) => (
  <Flex
    as="footer"
    p="40px 20px"
    bg={"blue.200"}
    color={"gray.50"}
    justifyContent="center"
    alignItems="center"
    {...props}
  />
);

export default Footer;
