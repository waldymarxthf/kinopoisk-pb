import { PocketBaseContext } from "~app/providers/pb-provider";
import { useContext } from "react";

export default function usePocketBase() {
  return useContext(PocketBaseContext);
}
