import { colors, getTokenColors } from "./colors.mjs";
import { writeFile } from 'fs/promises'

const theme = {
	"semanticHighlighting": true,
	"name": "concept",
    colors,
    tokenColors: getTokenColors(),
}

const content =  JSON.stringify(theme, undefined, '\t');
await writeFile('./themes/concept-color-theme.json', content, "utf-8");