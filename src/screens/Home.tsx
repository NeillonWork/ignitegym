import { useState } from "react";
import { FlatList } from "react-native";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { VStack, Text, Heading, HStack } from "@gluestack-ui/themed";
import { ExerciseCard } from "@components/ExercicesCard";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home() {
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);

  const [groups, setGroups] = useState([
    "Costas",
    "Biceps",
    "Triceps",
    "Ombro",
  ]);
  const [groupSelected, setGroupSelected] = useState("Costas");
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDatails() {
    navigation.navigate("exercise");
  }

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercicios
          </Heading>
          <Text>{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard name={item} onPress={handleOpenExerciseDatails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
