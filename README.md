# YTitle - YouTube Title Generator

yTitle is a command-line tool that generates informative, non-clickbait titles for YouTube videos. It's designed to work alongside the [DeArrow browser extension](https://github.com/ajayyy/DeArrow) (NOT affiliated) to improve the YouTube viewing experience by providing more accurate and meaningful video titles.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/jThenElse/ytitle
cd ytitle
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables (if using OpenAI or Anthropic): Create a `.env` file with your API keys if you plan to use OpenAI or Anthropic models.

4. Optional: Use build script and add to your `.bashrc` for global access:

```bash
alias ytitle='node ~/path/to/ytitle/dist/main.js'
```

## Usage

Basic usage:

```bash
ytitle https://www.youtube.com/watch?v=videoId
```

With transcript:

```bash
ytitle -t https://www.youtube.com/watch?v=videoId
```

## How It Works

1. Uses Puppeteer to scrape video information:

   - Original title
   - Video description
   - Transcript (optional, use --transcript flag)

2. Processes the information through an AI model

3. Generates three alternative titles following these guidelines:
   - Informative and factual
   - No clickbait or sensationalism
   - Capitalized like sentences
   - Clear, straightforward language
   - Focuses on main topics
   - Neutral tone

## Examples

### Example 1 - [video link](https://www.youtube.com/watch?v=bk-nQ7HF6k4)

**Original Title:**

EMERGENCY EPISODE: Ex-Google Officer Finally Speaks Out On The Dangers Of AI! - Mo Gawdat | E252

**Generated Alternatives:**

1. Mo Gawdat discusses AI's future and its societal impact
2. Debate on AI capabilities, dangers, and societal impact
3. Insights on artificial intelligence from ex-Google exec Mo Gawdat

### Example 2 - [video link](https://www.youtube.com/watch?v=rOYlOdDgYUU)

**Original Title:**

Dr Joe Dispenza: You MUST Do This Before 10am To Fix It!

**Generated Alternatives:**

1. How Joe Dispenza merges science with mindfulness
2. Exploring behavioral change and healing with Joe Dispenza
3. Joe Dispenza discusses the science of self-healing and mindfulness

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

MIT
