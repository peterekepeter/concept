export const atoms = {
    background: '#000',
    foreground: '#fff',
    accent: "#007acc",
    foreground_alt: '#bbbbbb',
}

export const styles = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
}

export const concepts = {
    comments: [styles.italic, '#546e7a'],
    variables: '#EEFFFF',
    colors: "#ffffff",
    invalid: "#FF5370",
    keyword: "#C792EA",
    operator: "#89DDFF",
    tag: '#f07178',
    function: '#82AAFF',
    local: '#f07178',
    constant: '#F78C6C',
    string: '#C3E88D',
    class: '#FFCB6B',
    type: '#B2CCD6',
    cssclass: '#B2CCD6',
    submethod: '#FF5370',
    languagemethod: '#FF5370',
    jsmethod: '#82AAFF',
    attributes: '#C792EA',
    htmlattributes: '#FFCB6B',
    cssclasses: '#FFCB6B',
    cssid: '#82AAFF',
    inserted: '#C3E88D',
    deleted: '#FF5370',
    changed: '#C792EA',
    regexp: '#89DDFF',
    escapechar: '#89DDFF',
    url: styles.underline,
    decorators: '#82AAFF',
    es7bindoperator: '#FF5370',
    jsonkeylevel0: '#C792EA',
    jsonkeylevel1: '#FFCB6B',
    jsonkeylevel2: '#F78C6C',
    jsonkeylevel3: '#FF5370',
    jsonkeylevel4: '#C17E70',
    jsonkeylevel5: '#82AAFF',
    jsonkeylevel6: '#f07178',
    jsonkeylevel7: '#C792EA',
    jsonkeylevel8: '#C3E88D',
    markdownplain: '#EEFFFF',
    markdownrawinline: '#C792EA',
    markdowninlinepunctuation: '#65737E',
    markdownheading: '#C3E88D',
    markupitalic: [styles.italic, '#f07178'],
    markupbold: [styles.bold, '#f07178'],
    markupunderline: [styles.underline, '#F78C6C'],
    markdownblockquote: '#65737E',
    markupquote: styles.italic,
    markdownlink: '#82AAFF',
    markdownlinkdescription: '#C792EA',
    markdownlinkanchor: '#FFCB6B',
    markdownrawblockfenced: '#00000050',
    markdownfencedbodeblock: "#00000050",
    markdownfencedbodeblockvariable: '#EEFFFF',
    markdownfencedlanguage: '#65737E',
    markdownfencedseparator: '#65737E',
    markdowntable: '#EEFFFF',
}


export const colors = {
    "activityBarBadge.background": atoms.accent,
    "editor.background": atoms.background,
    "editor.foreground": atoms.foreground,
    "sideBarTitle.foreground": atoms.foreground_alt,
}

/** @type{Array<{name:string,scope:string[]}>} */
export const tokenColors = [];

function token(name, style, color, ...scopes) {
    tokenColors.push({
        name, scope: scopes, settings: { foreground: color }
    })
    if (style) {
        tokenColors[tokenColors.length-1].settings.fontStyle = style;
    }
}