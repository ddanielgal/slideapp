import { Worker } from "@denxyzw/lpmau";
import { JobInput } from "./types";
import renderVideo from "./renderVideo";

const worker = new Worker<JobInput>(
  "amqp://localhost:5672",
  "http://localhost:3000",
  renderVideo
);
worker.listen();
