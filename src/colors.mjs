export const atoms = {
    background: '#000',
    foreground: '#888',
    accent: "#007acc",
    foreground_alt: '#bbbbbb',
}

export const styles = {
    bold: 'bold',
    italic: 'italic',
    underline: 'underline',
}

export const concepts = {
    comments: [styles.italic, '#454'],
    variables: '#fff',
    property: '#ffa',
    colors: "#ffffff",
    invalid: "#FF5370",
    keyword: "#666",
    operator: "#89DDFF",
    tag: '#f07178',
    function: '#8af',
    local: '#f07178',
    constant: '#f64',
    string: '#4a6',
    stringpunctuation: '#7b5',
    class: '#98f',
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
    jsonkeylevel0: '#fff',
    jsonkeylevel1: '#888',
    jsonkeylevel2: '#fff',
    jsonkeylevel3: '#888',
    jsonkeylevel4: '#fff',
    jsonkeylevel5: '#888',
    jsonkeylevel6: '#fff',
    jsonkeylevel7: '#888',
    jsonkeylevel8: '#fff',
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
    markuprawblock: '#C792EA',
    markdownrawblockfenced: '#00000050',
    markdownfencedbodeblock: "#00000050",
    markdownfencedbodeblockvariable: '#EEFFFF',
    markdownfencedlanguage: '#65737E',
    markdownfencedseparator: '#65737E',
    markdowntable: '#EEFFFF',
}


export const colors = {
    "tab.inactiveBackground": "#111213",
    "activityBar.background": "#212223",
    "titleBar.activeBackground": "#212223",
    "sideBar.background": "#111213",
    "editor.background": atoms.background,
    "editor.foreground": atoms.foreground,
    "activityBarBadge.background": atoms.accent,
    "sideBarTitle.foreground": atoms.foreground_alt,
}

export const semantics = {
    "class": concepts.class,
    "keyword": concepts.keyword,
    "variable": concepts.variables,
    "type": concepts.class,
    "operator": concepts.operator,
    "property": concepts.property,
}

export const scopes = {

    // Comment
    "comment": concepts.comments,
    "punctuation.definition.comment": concepts.comments,
    "variable": concepts.variables,

    // Variables
    "string constant.other.placeholder": concepts.variables,

    // Colors
    "constant.other.color": concepts.colors,

    // Invalid
    "invalid": concepts.invalid,
    "invalid.illegal": concepts.invalid,

    // Keyword, Storage
    "keyword": concepts.keyword,
    "storage.type": concepts.keyword,
    "storage.modifier": concepts.keyword,

    "string.quoted punctuation.definition.string": concepts.stringpunctuation,
    // Operators, Misc
    "keyword.operator": concepts.operator,
    "keyword.control": concepts.keyword,
    "constant.other.color": concepts.operator,
    "meta.tag": concepts.operator,
    "punctuation.definition.tag": concepts.operator,
    "punctuation.separator.inheritance.php": concepts.operator,
    "punctuation.definition.tag.html": concepts.operator,
    "punctuation.definition.tag.begin.html": concepts.operator,
    "punctuation.definition.tag.end.html": concepts.operator,
    "punctuation.section.embedded": concepts.operator,
    "keyword.other.template": concepts.operator,
    "keyword.other.substitution": concepts.operator,

    // Tag
    "entity.name.tag": concepts.tag,
    "meta.tag.sgml": concepts.tag,
    "markup.deleted.git_gutter": concepts.tag,

    // Function, Special Method
    "entity.name.function": concepts.function,
    "meta.function-call": concepts.function,
    "variable.function": concepts.function,
    "support.function": concepts.function,
    "keyword.other.special-method": concepts.function,

    // Block Level Variables
    "meta.block variable.other": concepts.local,

    // Other Variable, String Link
    "support.other.variable": concepts.local,
    "string.other.link": concepts.local,

    // Number, Constant, Function Argument, Tag Attribute, Embedded
    "constant.numeric": concepts.constant,
    "constant.language": concepts.constant,
    "support.constant": concepts.constant,
    "constant.character": concepts.constant,
    "constant.escape": concepts.constant,
    "variable.parameter": concepts.constant,
    "keyword.other.unit": concepts.constant,
    "keyword.other": concepts.constant,

    // String, Symbols, Inherited Class, Markup Heading
    "string": concepts.string,
    "constant.other.symbol": concepts.string,
    "constant.other.key": concepts.string,
    "entity.other.inherited-class": concepts.string,
    "markup.heading": concepts.string,
    "markup.inserted.git_gutter": concepts.string,
    "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js": concepts.string,

    // Class, Support
    "entity.name": concepts.class,
    "support.type": concepts.class,
    "support.class": concepts.class,
    "support.other.namespace.use.php": concepts.class,
    "meta.use.php": concepts.class,
    "support.other.namespace.php": concepts.class,
    "markup.changed.git_gutter": concepts.class,
    "support.type.sys-types": concepts.class,

    // Entity Types
    "support.type": concepts.type,

    // "CSS Class and Support"
    "source.css support.type.property-name": concepts.cssclass,
    "source.sass support.type.property-name": concepts.cssclass,
    "source.scss support.type.property-name": concepts.cssclass,
    "source.less support.type.property-name": concepts.cssclass,
    "source.stylus support.type.property-name": concepts.cssclass,
    "source.postcss support.type.property-name": concepts.cssclass,

    // sub-methods
    "entity.name.module.js": concepts.submethod,
    "variable.import.parameter.js": concepts.submethod,
    "variable.other.class.js": concepts.submethod,

    // Language methods
    "variable.language": concepts.languagemethod,

    // entity.name.method.js
    "entity.name.method.js": concepts.jsmethod,

    // meta.method.js
    "meta.class-method.js entity.name.function.js": concepts.jsmethod,
    "variable.function.constructor": concepts.jsmethod,

    // Attributes
    "entity.other.attribute-name": concepts.attributes,

    // HTML Attributes
    "text.html.basic entity.other.attribute-name.html": concepts.htmlattributes,
    "text.html.basic entity.other.attribute-name": concepts.htmlattributes,

    // CSS Classes
    "entity.other.attribute-name.class": concepts.cssclasses,

    // CSS ID's
    "source.sass keyword.control": concepts.cssid,

    "markup.inserted": concepts.inserted,
    "markup.deleted": concepts.deleted,
    "markup.changed": concepts.changed,

    //  "Regular Expressions"
    "string.regexp": concepts.regexp,

    // "Escape Characters"
    "constant.character.escape": concepts.escapechar,

    // "URL",
    "*url*": concepts.url,
    "*link*": concepts.url,
    "*uri*": concepts.url,

    // Decorators
    "tag.decorator.js entity.name.tag.js": concepts.decorators,
    "tag.decorator.js punctuation.definition.tag.js": concepts.decorators,

    // ES7 Bind Operator
    "source.js constant.other.object.key.js string.unquoted.label.js": concepts.es7bindoperator,

    // JSON levels
    "source.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel0,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel1,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel2,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel3,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel4,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel5,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel6,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel7,
    "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        : concepts.jsonkeylevel8,

    // Markdown - Plain
    "text.html.markdown": concepts.markdownplain,
    "punctuation.definition.list_item.markdown": concepts.markdownplain,

    // Markdown - Markup Raw Inline
    "text.html.markdown markup.inline.raw.markdown": concepts.markdownrawinline,

    // Markdown - Markup Raw Inline Punctuation
    "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown": concepts.markdowninlinepunctuation,

    // Markdown - Heading
    "markdown.heading": concepts.markdownheading,
    "markup.heading | markup.heading entity.name": concepts.markdownheading,
    "markup.heading.markdown punctuation.definition.heading.markdown": concepts.markdownheading,

    // Markup - Italic
    "markup.italic": concepts.markupitalic,

    // Markup - Bold
    "markup.bold": concepts.markupbold,
    "markup.bold string": concepts.markupbold,

    // Markup - Bold-Italic
    "markup.bold markup.italic": concepts.markupbold,
    "markup.italic markup.bold": concepts.markupbold,
    "markup.quote markup.bold": concepts.markupbold,
    "markup.bold markup.italic string": concepts.markupbold,
    "markup.italic markup.bold string": concepts.markupbold,
    "markup.quote markup.bold string": concepts.markupbold,

    // Markup - Underline
    "markup.underline": concepts.markupunderline,

    // Markdown - Blockquote
    "markup.quote punctuation.definition.blockquote.markdown": concepts.markdownblockquote,

    // Markup - Quote
    "markup.quote": concepts.markupquote,

    // Markdown - Link
    "string.other.link.title.markdown": concepts.markdownlink,

    // Markdown - Link Description
    "string.other.link.description.title.markdown": concepts.markdownlinkdescription,
    
    // Markdown - Link Anchor
    "constant.other.reference.link.markdown": concepts.markdownlinkanchor,

    // Markup - Raw Block
    "markup.raw.block": concepts.markuprawblock,

    // Markdown - Raw Block Fenced
    "markup.raw.block.fenced.markdown": concepts.markdownrawblockfenced,

    // Markdown - Fenced Bode Block
    "punctuation.definition.fenced.markdown": concepts.markdownfencedbodeblock,

    // Markdown - Fenced Bode Block Variable
    "markup.raw.block.fenced.markdown": concepts.markdownfencedbodeblockvariable,
    "variable.language.fenced.markdown": concepts.markdownfencedbodeblockvariable,
    "punctuation.section.class.end": concepts.markdownfencedbodeblockvariable,

    // Markdown - Fenced Language
    "variable.language.fenced.markdown": concepts.markdownfencedlanguage,

    // Markdown - Separator
    "meta.separator": concepts.markdownfencedseparator,

    // Markup - Table
    "markup.table": concepts.markdowntable,
}

export function getTokenColors() {
    /** @type { Record<keyof concepts, {name:string, scope:string[], settings: {foreground?:string, fontStyle?:string}}> } */
    const groups = {};
    const list = [];
    for (const scopeName in scopes) {
        const concept = scopes[scopeName];
        if (!groups[concept]) {
            const [color, style] = getConceptColorAndStyle(concept);
            groups[concept] = {
                scope: [],
                settings: {},
            }
            if (style) groups[concept].settings.fontStyle = style;
            if (color) groups[concept].settings.foreground = color;
            list.push(groups[concept]);
        }
        groups[concept].scope.push(scopeName);
    }
    return list;
}

export function getSemanticTokenColors() {
    /** @type { Record<string, string|{ foreground?: string, fontStyle?: string}>} */
    const result = {};
    for (const semanticName in semantics) {
        const semanticValue = semantics[semanticName];
        const [color,style] = getConceptColorAndStyle(semanticValue);
        if (color && !style) {
            result[semanticName] = color;
        }
        else {
            result[semanticName] = {};
            if (color) result[semanticName].foreground = color;
            if (style) result[semanticName].fontStyle = style;
        }
    }
    return result;
}

export function getConceptColorAndStyle(value) {
    let color = atoms.foreground;
    let style = '';
    if (value instanceof Array) {
        for (const item of value) {
            if (item.startsWith('#')) color = item;
            else style = item;
        }
    }
    else {
        if (value.startsWith('#')) color = value;
        else style = value;
    }
    return [color.toUpperCase(), style];
}
