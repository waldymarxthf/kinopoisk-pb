import { Avatar, Group, Menu, Text, UnstyledButton, rem } from "@mantine/core";
import { IconChevronDown, IconTrash } from "@tabler/icons-react";
import { useState } from "react";
import { useStyles } from "./ui.styles";
import usePocketBase from "~shared/lib/hooks/pb-hook";

export function AccountMenu() {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { user, pb } = usePocketBase();

  const logoutHandler = () => {
    pb.authStore.clear();
  };
  return (
    <Menu
      width={260}
      position="bottom-end"
      transitionProps={{ transition: "pop-top-right" }}
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton className={cx(classes.user, { [classes.userActive]: userMenuOpened })}>
          <Group spacing={7}>
            <Avatar color="blue" radius="xl" size={26} />
            <Text weight={500} size="md" mr={3}>
              {user?.username}
            </Text>
            <IconChevronDown size={rem(12)} stroke={1.5} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          onClick={logoutHandler}
          color="red"
          icon={<IconTrash size="0.9rem" stroke={1.5} />}
        >
          Quit
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
