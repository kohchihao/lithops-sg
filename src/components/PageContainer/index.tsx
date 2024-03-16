import { Box } from '@chakra-ui/react';
import { MaxWidthContainer } from '../MaxWidthContainer';
import Navbar from '../Navbar';

type Props = {
  children?: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <Box>
      <Navbar />
      <MaxWidthContainer>{children}</MaxWidthContainer>
    </Box>
  );
};

export default PageContainer;
