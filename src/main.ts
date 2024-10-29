import { ChatAnthropic } from '@langchain/anthropic';
import { ChatOllama } from '@langchain/ollama';
import { ChatOpenAI } from '@langchain/openai';
import 'dotenv/config';
import puppeteer from 'puppeteer';

async function getVideoInfo(videoUrl): Promise<string> {
  const browser = await puppeteer.launch();
  // const browser = await puppeteer.launch({ headless: false, args: ['--mute-audio'] });
  const page = await browser.newPage();

  try {
    await page.goto(videoUrl, { waitUntil: 'networkidle0' });
    await page.locator('#description-inner').click();
    await page.locator('::-p-aria([name="Show transcript"][role="button"])').click();
    await page.locator('#segments-container').wait();
    return await page.evaluate(() => {
      const title = document.querySelector('#title h1 yt-formatted-string')?.textContent?.trim();
      const description = document
        .querySelector('#description-inline-expander > yt-attributed-string')
        ?.textContent?.trim();
      const segments = document.querySelectorAll('ytd-transcript-segment-renderer');
      const transcriptText = Array.from(segments)
        .map((s) => s.querySelector('.segment-text')?.textContent?.trim())
        .join('\n');
      return `<originalTitle>${title}</originalTitle> \n\n <transcript>${transcriptText}</transcript> \n\n <description>${description}</description>`;
    });
  } finally {
    await browser.close();
  }
}

async function getTitles(videoInfo): Promise<string> {
  // const model = new ChatOllama({
  //   model: 'dolphin-llama3:latest',
  //   numThread: 16,
  // });
  const model = new ChatOpenAI({
    modelName: 'gpt-3.5-turbo',
    // apiKey: process.env.OPENAI_API_KEY,
  });
  // const model = new ChatAnthropic({});
  const response = await model.invoke([
    {
      role: 'system',
      content: `As an AI language model, your task is to generate titles for videos based on provided information. Adhere to the following guidelines:

Create informative, factual titles that accurately reflect the video content.
Avoid sensationalism, exaggeration, or misleading information.
Do not use clickbait tactics or overly dramatic language.
Ensure titles are short, with a maximum of 60 characters.
Focus on the main topic or key message of the video.
Use clear, straightforward language appropriate for the subject matter.
Incorporate relevant keywords when applicable, but prioritize clarity and accuracy.
Maintain a neutral tone, avoiding bias or opinion.
If the video covers multiple topics, prioritize the most significant or overarching theme.npm i --save-dev @types/node
Double-check that the title aligns with the provided video information.
Use a calm, clear tone, avoiding overly dramatic or sensational language.
Do not use Questions or statements that could be interpreted as questions.

Remember: Your goal is to create titles that inform users about the video content accurately and concisely, encouraging clicks through relevance rather than sensationalism.`,
    },
    {
      role: 'user',
      content: `${videoInfo} /n/n Write me 3 title options`,
    },
  ]);
  return response.content.toString();
}

async function main() {
  let videoUrl = process.argv[2];
  if (!videoUrl) videoUrl = 'https://www.youtube.com/watch?v=rOYlOdDgYUU';
  const videoInfo = await getVideoInfo(videoUrl);
  const titles = await getTitles(videoInfo);
  console.log(titles);
}

main();
