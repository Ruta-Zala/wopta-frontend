import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

export function mardownToHtml(markdownString: string = "") {
    return { __html: md.render(markdownString) };
}