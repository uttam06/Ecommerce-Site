
import connectDB from "./config/db.js"; // Adjust the path if needed
import mongoose from "mongoose";

async function testDB() {
  try {
    await connectDB();
    console.log("✅ MongoDB connection successful!");

    // Optional: Check if any collections exist
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("📌 Available Collections:", collections.map(c => c.name));

    process.exit(0); // Exit the process
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
}

testDB();

