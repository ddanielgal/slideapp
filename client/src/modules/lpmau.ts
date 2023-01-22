import { createContext, useContext } from "react";
import { Client } from "@denxyzw/lpmau";

export const LpmauContext = createContext<Client | null>(null);

export default function useLpmauClient() {
  return useContext(LpmauContext) as Client;
}
