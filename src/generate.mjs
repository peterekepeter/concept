import { colors, getTokenColors, getSemanticTokenColors } from "./colors.mjs";
import { writeFile, mkdir } from 'fs/promises'

const theme = {
	"semanticHighlighting": true,
	"name": "concept",
    colors,
    tokenColors: getTokenColors(),
    semanticTokenColors: getSemanticTokenColors(),
}

const content =  JSON.stringify(theme, undefined, '\t');
await mkdir('./themes', { recursive: true });
await writeFile('./themes/concept-color-theme.json', content, "utf-8");