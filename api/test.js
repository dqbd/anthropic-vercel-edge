import { Anthropic } from "@anthropic-ai/sdk";

export const config = { runtime: "edge" };

export default async function () {
  console.log(Anthropic);
  return new Response("Hello world");
}
