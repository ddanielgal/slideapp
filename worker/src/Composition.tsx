import { FC } from "react";
import { AbsoluteFill, Audio, Img, Series, useVideoConfig } from "remotion";
import { JobInput } from "./types";

const Composition: FC<JobInput> = ({ images, music }) => {
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
      <Series>
        {images.map((image) => (
          <Series.Sequence durationInFrames={5 * fps}>
            <Img src={image} />
          </Series.Sequence>
        ))}
      </Series>
      <Audio src={music} />
    </AbsoluteFill>
  );
};

export default Composition;
