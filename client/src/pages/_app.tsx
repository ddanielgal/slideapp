import "../globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { Client } from "@denxyzw/lpmau";
import { LpmauContext } from "@/modules/lpmau";

export default function App({ Component, pageProps }: AppProps) {
  const [lpmauClient, setLpmauClient] = useState<Client | null>(null);

  useEffect(() => {
    const client = new Client("http://localhost:5000");
    setLpmauClient(client);
  }, []);

  if (!lpmauClient) return "Initializing...";

  return (
    <LpmauContext.Provider value={lpmauClient}>
      <main>
        <Component {...pageProps} />
      </main>
    </LpmauContext.Provider>
  );
}
