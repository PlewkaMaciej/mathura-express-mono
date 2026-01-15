// scripts/createVectorStore.ts
import "dotenv/config";
import OpenAI from "openai";

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Brak OPENAI_API_KEY w .env");
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const vs = await openai.vectorStores.create({
    name: "matura-matematyka-pp",
  });

  console.log("OPENAI_VECTOR_STORE_ID =", vs.id);
}

main().catch((e) => {
  console.error("Błąd tworzenia vector store:", e);
  process.exit(1);
});
