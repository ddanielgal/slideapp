import { FC } from "react";
import { Composition, getInputProps, registerRoot } from "remotion";
import MyComposition from "./Composition";
import { JobInput } from "./types";
import VerticalExperiment from "./VerticalExperiment";

const RemotionRoot: FC = () => {
  const { images }: JobInput = getInputProps();
  const { imageCount }: { imageCount: number } = getInputProps();
  const videoDuration = (images?.length ?? imageCount) * 30 * 5;
  return (
    <>
      <Composition
        id="HelloWorld"
        durationInFrames={videoDuration}
        fps={30}
        width={1920}
        height={1080}
        component={MyComposition}
      />
      <Composition
        id="VerticalExperiment"
        durationInFrames={videoDuration}
        fps={30}
        width={1920}
        height={1080}
        component={VerticalExperiment}
      />
    </>
  );
};

registerRoot(RemotionRoot);
