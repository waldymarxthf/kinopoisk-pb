import {
  Group,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Anchor,
  Text,
  Paper,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAt, IconUser, IconLock } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import usePocketBase from "~shared/lib/hooks/pb-hook";

export function Registration() {
  const { register } = usePocketBase();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      // firstName: "",
      // lastName: "",
      email: "",
      // name: "",
      password: "",
      // confirm_password: "",
    },
    validate: {
      // firstName: (value) => (value.length < 2 ? "Name must have at least 2 letters" : null),
      // lastName: (value) => (value.length < 2 ? "Name must have at least 2 letters" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // name: (value) => (value.length < 2 ? "Username must have at least 2 letters" : null),
      password: (value) => (value.length < 8 ? "Password must have at least 8 characters" : null),
      // confirm_password: (value, values) =>
      //   value !== values.password ? "Passwords did not match" : null,
    },
  });

  const handleOnSubmit = async () => {
    await register(form.values.email, form.values.password);
    navigate("/login");
  };

  return (
    <Center maw={400} mx="auto">
      <Paper radius="md" p="md" w={350}>
        <form onSubmit={form.onSubmit(handleOnSubmit)}>
          <Group grow>
            <TextInput
              label="First Name"
              placeholder="Your first name"
              required
              radius="md"
              // {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Last Name"
              placeholder="Your last name"
              required
              radius="md"
              // {...form.getInputProps("lastName")}
            />
          </Group>
          <TextInput
            label="Email"
            placeholder="you@mantine.dev"
            required
            radius="md"
            mt="xs"
            icon={<IconAt size="0.9rem" />}
            {...form.getInputProps("email")}
          />
          <TextInput
            label="Username"
            placeholder="Username"
            required
            radius="md"
            mt="xs"
            icon={<IconUser size="0.9rem" />}
            // {...form.getInputProps("name")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            radius="md"
            mt="xs"
            icon={<IconLock size="0.9rem" />}
            {...form.getInputProps("password")}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm password"
            required
            radius="md"
            mt="xs"
            icon={<IconLock size="0.9rem" />}
            // {...form.getInputProps("confirm_password")}
          />
          <Group position="apart" mt="lg">
            <Checkbox
              radius="md"
              label="I agree to the processing of personal data"
              size="sm"
              required
            />
          </Group>

          <Button radius="xl" type="submit" fullWidth mt="xl">
            Register
          </Button>
        </form>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          <Anchor href="/login" size="sm">
            Have an account? Login
          </Anchor>
        </Text>
      </Paper>
    </Center>
  );
}
