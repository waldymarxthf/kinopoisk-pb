import { Button, ButtonProps } from "@mantine/core";
import usePocketBase from "~shared/lib/hooks/pb-hook";
import GoogleIcon from "~shared/ui/google-button";

export function LoginGoogleButton(props: ButtonProps) {
  const { pb } = usePocketBase();

  const loginHandler = () => {
    (async () => {
      await pb
        .collection("users")
        .authWithOAuth2({ provider: "google" })
        .catch((err) => {
          console.error(err);
        });
    })();
  };

  return (
    <Button
      onClick={loginHandler}
      leftIcon={<GoogleIcon />}
      radius="xl"
      variant="default"
      color="gray"
      {...props}
    />
  );
}
