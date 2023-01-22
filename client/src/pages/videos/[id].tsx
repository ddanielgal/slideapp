import useLpmauClient from "@/modules/lpmau";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function VideoPlayerView() {
  const lpmau = useLpmauClient();
  const id = Number(useRouter().query.id);
  const { data: video } = useQuery(["videos", id], lpmau.getJobs, {
    select: (videos) => videos.find((video) => video.id === id),
  });
  if (!video) return "404";
  return (
    <>
      <h1>{String(video.input.title)}</h1>
      <video width="320" height="240" controls>
        <source src={video.result} type="video/mp4" />
      </video>
    </>
  );
}
