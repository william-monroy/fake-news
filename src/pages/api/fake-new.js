const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  console.log(req.body);
  // const {keys} = req.body;

  // let prompt = "Create an article with these keywords: ";

  // keys.forEach((key) => {
  //   prompt += key + ", ";
  // });

  // prompt = ``

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt:
        "Create an article with these keywords: Plan B, Reforma Electoral, AMLO, iniciativas, no aprobadas, SCJN, México.\n\nMéxico está entrando en una etapa de reformas políticas sin precedentes. El Presidente Andrés Manuel López Obrador (AMLO) ha sido el principal impulsor de estas reformas, y una de ellas es la Reforma Electoral. Esta reforma, que fue aprobada por el Congreso el año pasado, prevé una serie de cambios en el sistema de votación y el financiamiento de campañas electorales.\n\nSin embargo, el gobierno de AMLO ha enfrentado una fuerte resistencia a sus iniciativas. La Corte Suprema de Justicia de México (SCJN) ha rechazado varias de sus propuestas, incluida la Reforma Electoral. Esto ha llevado al gobierno a explorar “Plan B” para poner en marcha sus reformas sin la aprobación de la SCJN.\n\nEl “Plan B” de AMLO contempla una serie de med",
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // use utf-8 encoding to get the correct string format
    res.send(200, response.data.choices[0].text.replace(""));
  } catch (error) {
    res.send(error.message);
  }
}
