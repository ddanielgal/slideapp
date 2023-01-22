import useLpmauClient from "@/modules/lpmau";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CreateVideoView() {
  const [title, setTitle] = useState("Untitled video");
  const [photos, setPhotos] = useState<string[]>([]);
  const [music, setMusic] = useState<string | null>(null);
  const [duration, setDuration] = useState(5);
  const lpmau = useLpmauClient();
  return (
    <>
      <h1>Create video</h1>
      <Link href="/">
        <button>Discard</button>
      </Link>
      <label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <div>
        <button
          onClick={() => {
            const photo = prompt("Please enter a photo url:");
            if (!photo) return;
            setPhotos([...photos, photo]);
          }}
        >
          Add photo
        </button>
        {!!photos.length &&
          photos.map((photo) => <Image key={photo} src={photo} alt={photo} />)}
      </div>
      <div>
        <button
          onClick={() => {
            const music = prompt("Please enter a music url:");
            if (!music) return;
            setMusic(music);
          }}
        >
          Add music
        </button>
      </div>
      <div>
        <input
          type="number"
          value={duration}
          onChange={(event) => {
            setDuration(+event.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          lpmau.submitJob({ photos, music, duration });
        }}
      >
        Produce
      </button>
    </>
  );
}
