const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const query = req.query;
  const prompt = query.prompt;

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(response.data);

    res.send(200, { url: response.data.data.url });
  } catch (error) {
    res.send(error.message);
  }
}
