import { Badge } from "@chakra-ui/react";

interface CriticScoreProp {
    score: number;
}

const CriticScore = ({ score }: CriticScoreProp) => {
    let color = score > 75 ? 'green' : score > 50 ? 'yellow' : 'red'
  
    return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore