import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

try {
  await connectDB();
  app.listen(process.env.PORT, () =>
    console.log(`Server on ${process.env.PORT}`),
  );
} catch (err) {
  console.error("Startup failed:", err);
  process.exit(1);
}
