import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import * as path from "path";
import { JobInput } from "./types";

export default async function renderVideo({ images, music }: JobInput) {
  // The composition you want to render
  const compositionId = "HelloWorld";

  // You only have to do this once, you can reuse the bundle.
  const entry = "./src/RemotionRoot";
  console.log("Creating a Webpack bundle of the video");
  const bundleLocation = await bundle(path.resolve(entry));
  console.log(`Bundle created at ${bundleLocation}`);

  // Extract all the compositions you have defined in your project
  // from the webpack bundle.
  const comps = await getCompositions(bundleLocation, {
    inputProps: { images, music },
  });

  console.log(`Found ${comps.length} compositions`);

  // Select the composition you want to render.
  const composition = comps.find((c) => c.id === compositionId);

  // Ensure the composition exists
  if (!composition) {
    throw new Error(
      `No composition with the ID ${compositionId} found. Review "${entry}" for the correct ID.`
    );
  }

  const outputLocation = `out/${compositionId}.mp4`;
  console.log("Attempting to render:", outputLocation);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation,
    inputProps: { images, music },
  });
  console.log("Render done!");

  return outputLocation;
}
