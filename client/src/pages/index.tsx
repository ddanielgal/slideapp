import useLpmauClient from "@/modules/lpmau";
import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const lpmau = useLpmauClient();
  const { data: videos } = useQuery(["videos"], lpmau.getJobs);
  return (
    <>
      <Head>
        <title>SlideApp - Videos</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Videos</h1>
      {!videos && <div>Loading videos...</div>}
      {videos && (
        <ul>
          {videos.map(({ id, status, input: { title } }) => (
            <li key={id}>
              <Link href={`/videos/${id}`}>
                <span>{String(title)}</span>
                <span>{status}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
