import "dotenv/config";
import fs from "fs";
import OpenAI from "openai";

async function main() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Brak OPENAI_API_KEY w .env");
  }
  if (!process.env.OPENAI_VECTOR_STORE_ID) {
    throw new Error("Brak OPENAI_VECTOR_STORE_ID w .env");
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const vectorStoreId = process.env.OPENAI_VECTOR_STORE_ID;

  const filePath = "knowledge/Informator_EM2024_matematyka_pp.pdf";

  if (!fs.existsSync(filePath)) {
    throw new Error(`Nie znaleziono pliku: ${filePath}`);
  }

  console.log("📤 Wysyłam plik:", filePath);

  const file = await openai.files.create({
    file: fs.createReadStream(filePath),
    purpose: "assistants",
  });

  console.log("✅ Plik wgrany do OpenAI:", file.id);
  await openai.vectorStores.files.create(vectorStoreId, {
    file_id: file.id,
  });

  console.log("🎉 Plik dodany do Vector Store:", vectorStoreId);
}

main().catch((e) => {
  console.error("❌ Błąd uploadu:", e);
  process.exit(1);
});
