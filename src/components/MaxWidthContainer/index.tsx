import { Flex } from '@chakra-ui/react';

type Props = {
  children?: React.ReactNode;
};

export const MaxWidthContainer = ({ children, ...props }: Props) => {
  return (
    <Flex
      display="flex"
      maxW="1280px"
      mx="auto"
      mt="40px"
      mb="150px"
      px="20px"
      {...props}
    >
      {children}
    </Flex>
  );
};
