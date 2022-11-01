/// <reference types="plugin-typings" />
declare function parseTextStyle(node: TextNode, start?: number, end?: number, styleName?: FontStyleNames[]): LetterStyle[];
declare function splitTextStyleIntoLines(textStyle: LetterStyle[], removeNewlineCharacters?: boolean, removeEmptylines?: boolean): LineStyle[];
declare function joinTextLinesStyles(textStyle: LineStyle[], addNewlineCharacters?: boolean | '\n' | '\u2028'): any;
declare function applyTextStyleToTextNode(textStyle: LetterStyle[], textNode?: TextNode, isLoadFonts?: boolean): Promise<TextNode>;
declare function changeCharactersTextStyle(textStyle: LetterStyle[], characters: string): LetterStyle[];
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'fontSize', newValue: number, beforeValue?: number): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'fontName', newValue: FontName, beforeValue?: FontName): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'textCase', newValue: TextCase, beforeValue?: TextCase): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'textDecoration', newValue: TextDecoration, beforeValue?: TextDecoration): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'letterSpacing', newValue: LetterSpacing, beforeValue?: LetterSpacing): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'lineHeight', newValue: LineHeight, beforeValue?: LineHeight): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'fills', newValue: Paint[], beforeValue?: Paint[]): any;
declare function changeTextStyle(textStyle: LetterStyle[], styleName: 'textStyleId' | 'fillStyleId', newValue: string, beforeValue?: string): any;
export { parseTextStyle, splitTextStyleIntoLines, joinTextLinesStyles, applyTextStyleToTextNode, changeCharactersTextStyle, changeTextStyle };
