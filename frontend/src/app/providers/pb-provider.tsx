import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import PocketBase, { AdminModel, RecordAuthResponse, RecordModel } from "pocketbase";
import { createContext } from "react";

export function PocketBaseProvider({ children }: { children: ReactNode }) {
  // Make sure to register http://127.0.0.1:8090/api/oauth2-redirect as redirect url.
  const pb = useMemo(() => new PocketBase("http://127.0.0.1:8090"), []);
  pb.autoCancellation(false);
  const [, setToken] = useState(pb.authStore.token);
  const [user, setUser] = useState(pb.authStore.model);

  useEffect(() => {
    return pb.authStore.onChange((token, model) => {
      setToken(token);
      setUser(model);
    });
  }, [pb.authStore]);

  const register = useCallback(
    async (email: string, password: string) => {
      return await pb.collection("users").create({ email, password, passwordConfirm: password });
    },
    [pb],
  );

  const login = useCallback(
    async (email: string, password: string) => {
      return await pb.collection("users").authWithPassword(email, password);
    },
    [pb],
  );

  return (
    <PocketBaseContext.Provider value={{ pb, user, register, login }}>
      {children}
    </PocketBaseContext.Provider>
  );
}

interface IPocketBaseContext {
  pb: PocketBase;
  user: RecordModel | AdminModel | null;
  register: (email: string, password: string) => Promise<RecordModel>;
  login: (email: string, password: string) => Promise<RecordAuthResponse<RecordModel>>;
}

export const PocketBaseContext = createContext<IPocketBaseContext>({} as IPocketBaseContext);
