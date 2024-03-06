import Assistant from "@quasarbrains/assistant";
import { config } from "dotenv";

// CHECK FOR API KEY
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error("OpenAI API Key not found");
  process.exit(1);
}

const model = new Assistant.ChatModels.OpenAI({
  apiKey: OPENAI_API_KEY,
  agentModel: "gpt-4",
  planningModel: "gpt-4",
});

const assistant = new Assistant({
  model,
  name: "",
  description: "",
  datastoreDirectory: "datastore/",
});
