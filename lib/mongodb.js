import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.DB_NAME;

if (!MONGODB_URI) {
  throw new Error("MongoDB-uri saknas");
}

if (!MONGODB_DB) {
  throw new Error("MongoDB-namn saknas");
}

let cachedClient = null;
let cachedDB = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDB) {
    return {
      client: cachedClient,
      db: cachedDB,
    };
  }

  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  let client = new MongoClient(MONGODB_URI, options);
  await client.connect();
  let db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDB = db;

  return {
    client: cachedClient,
    db: cachedDB,
  };
}
