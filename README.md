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

3. Set up environment variables (if using OpenAI or Anthropic):

4. Optional: Add to your `.bashrc` or `.zshrc` for global access:

```bash
alias ytitle='node ~/path/to/ytitle/dist/main.js'

# use like this:
ytitle https://www.youtube.com/watch?v=videoId
```

## How It Works

1. Uses Puppeteer to scrape video information:

   - Original title
   - Video description
   - Full transcript

2. Processes the information through an AI model

3. Generates three alternative titles following these guidelines:
   - Informative and factual
   - No clickbait or sensationalism
   - Clear, straightforward language
   - Focuses on main topics
   - Neutral tone

## Examples

### Example 1 - [video link](https://www.youtube.com/watch?v=bk-nQ7HF6k4)

**Original Title:**

EMERGENCY EPISODE: Ex-Google Officer Finally Speaks Out On The Dangers Of AI! - Mo Gawdat | E252

**Generated Alternatives:**

1. Mustafa Suleyman on AI, Creativity, and the Future of Humanity
2. AI, Creativity and the Future of Work with Mustafa Suleyman
3. Artificial Intelligence and the Challenges Ahead: A Conversation with Mustafa Suleyman

### Example 2 - [video link](https://www.youtube.com/watch?v=rOYlOdDgYUU)

**Original Title:**

Dr Joe Dispenza: You MUST Do This Before 10am To Fix It!

**Generated Alternatives:**

1. The Intersection of Science and Mindfulness with Joe Dispenza
2. Transforming Ourselves through the Power of Knowledge: A Conversation with Joe Dispenza
3. Mind, Body, and Spirit: Unpacking Life's Big Questions with Joe Dispenza

## Contributing

Contributions are welcome! Please feel free to submit pull requests.

## License

MIT
