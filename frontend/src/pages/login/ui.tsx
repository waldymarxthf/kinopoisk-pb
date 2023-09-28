import {
  TextInput,
  PasswordInput,
  Group,
  Checkbox,
  Anchor,
  Button,
  Divider,
  Text,
  Flex,
  Paper,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Navigate, useNavigate } from "react-router-dom";
import LoginGoogleButton from "~features/login-w-google";
import usePocketBase from "~shared/lib/hooks/pb-hook";

export function Login() {
  const { user, login } = usePocketBase();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const handleOnSubmit = async () => {
    await login(form.values.email, form.values.password);
    navigate("/");
  };

  return (
    <>
      {user && <Navigate to="/" replace={true} />}
      <Center maw={400} mx="auto">
        <Paper radius="md" p="md" w={350}>
          <form onSubmit={form.onSubmit(handleOnSubmit)}>
            <TextInput
              label="Email"
              placeholder="you@mantine.dev"
              required
              radius="md"
              icon={<IconAt size="0.9rem" />}
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              radius="md"
              mt="md"
              icon={<IconLock size="0.9rem" />}
              {...form.getInputProps("password")}
            />
            <Group position="apart" mt="lg">
              <Checkbox radius="md" label="Remember me" size="sm" />
              <Anchor href="#" size="sm">
                Forgot password?
              </Anchor>
            </Group>

            <Button radius="xl" type="submit" fullWidth mt="xl">
              Sign in
            </Button>
          </form>
          <Divider label="Or continue with email" labelPosition="center" my="md" />
          <Flex justify="center">
            <LoginGoogleButton>Continue with Google</LoginGoogleButton>
          </Flex>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor href="/registration" size="sm">
              Create account
            </Anchor>
          </Text>
        </Paper>
      </Center>
    </>
  );
}
