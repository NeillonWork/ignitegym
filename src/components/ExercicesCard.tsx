import { Heading, HStack, Image, VStack,Text } from "@gluestack-ui/themed";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack bg="$gray500" alignItems="center" p="$2" pr="$4" rounded="$md">
        <Image
          source={{
            uri: "https://cdn.vidaativa.pt/uploads/2018/09/treino-costas.jpg",
          }}
          alt="imagem do exercicio"
          w="$16"
          h="$16"
          rounded="$md"
          resizeMode="cover"
        />

        <VStack flex={1}>
            <Heading fontSize="$lg" color="$white" fontFamily="$heading">Puxada frontal</Heading>
            <Text> série x 12 repetições</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}
