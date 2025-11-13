export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ status: "error", error: "Method not allowed" });
  }

  const { summary } = req.body;

  if (!summary) {
    return res.status(400).json({ status: "error", error: "No summary provided" });
  }

  try {
    // Log or handle the summary (you can store or send it elsewhere)
    console.log("Received summary:", summary);

    // Respond to Watsonx or frontend
    res.status(200).json({
      status: "success",
      message: "Summary received successfully",
      summary
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", error: error.message });
  }
}
