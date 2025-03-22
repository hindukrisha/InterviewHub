const { OpenAI } = require('openai');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.startMockInterview = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: '❌ Question is required.' });
    }

    console.log("🔍 Sending request to OpenAI:", question);

    const aiResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are an AI interview assistant." },
        { role: "user", content: question },
      ],
    });

    console.log("✅ OpenAI Response:", aiResponse);

    if (!aiResponse.choices || aiResponse.choices.length === 0) {
      throw new Error("⚠️ No response from OpenAI.");
    }

    const answer = aiResponse.choices[0].message.content;
    res.json({ question, answer });
  } catch (error) {
    console.error("🚨 OpenAI API Error:", error.response?.data || error.message);
    res.status(500).json({ error: '❌ AI response failed. Try again later.' });
  }
};
