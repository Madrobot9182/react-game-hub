import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameContainerProp {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameContainerProp) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
