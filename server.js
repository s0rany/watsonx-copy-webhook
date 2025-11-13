import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// POST endpoint Watsonx will call
app.post("/copy-summary", (req, res) => {
  const { summary } = req.body;

  if (!summary) {
    return res.status(400).json({ error: "No summary provided" });
  }

  console.log("Received summary:", summary);

  // Respond with summary so the frontend can copy it
  res.json({
    message: "Summary received successfully",
    summary,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
