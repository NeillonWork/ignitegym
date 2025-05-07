import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/input";
import { Button } from "@components/Button";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export function SignUp() {
  const navigator = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>();

  function handleBackHome() {
    navigator.goBack();
  }

  function handleSignUp({
    name,
    email,
    password,
    passwordConfirm,
  }: FormDataProps) {
    console.log({ name, email, password, passwordConfirm });
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
          w="$full"
          h={624}
          position="absolute"
          alt="pessoas treinando"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="$gray100" fontSize="$sm">
              Treine sua mente e o seu corpo
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="$gray100">Crie sua conta</Heading>

            <Controller
              control={control}
              name="name"
              rules={{
                required: "Informe o Nome!",
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Nome"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.name?.message && (
              <Text color="$red500">{errors.name.message}</Text>
            )}

            <Controller
              control={control}
              name="email"
              rules={{
                required: "Informe o E-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "E-mail inválido",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="E-mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            {errors.email?.message && (
              <Text color="$red500">{errors.email?.message}</Text>
            )}

            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a Senha" }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.password?.message && (
              <Text color="$red500">{errors.password?.message}</Text>
            )}

            <Controller
              control={control}
              name="passwordConfirm"
              rules={{
                required: "Confirme a Senha",
              }}
              render={({ field: { onChange, value } }) => (
                <Input
                  placeholder="Confirme a Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  value={value}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType="send"
                />
              )}
            />
            {errors.passwordConfirm?.message && (
              <Text color="$red500">{errors.passwordConfirm?.message}</Text>
            )}

            <Button
              title="Criar e acessar"
              onPress={handleSubmit(handleSignUp)}
            />
          </Center>

          <Button
            title="Voltar para o login"
            variant="outline"
            mt="$12"
            onPress={handleBackHome}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
