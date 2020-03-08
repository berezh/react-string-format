import * as React from 'react';

type FormatType = number | string | React.ReactElement;

export const WhiteSpaceChar = '&nbsp;';

function format(text: string, ...params: string[]): string;
function format(text: string, ...params: FormatType[]): string | React.ReactElement;
function format(text: string, ...params: FormatType[]): string | React.ReactElement {
    let result: FormatType[] = [text];
    params.forEach((param, i) => {
        result = parseAndReplace(result, param, i);
    });

    if (result.length === 0) {
        return '';
    } else if (result.length === 1 && typeof result[0] === 'string') {
        return result[0];
    } else {
        return (
            <React.Fragment>
                {result.map((x, i) => {
                    return <React.Fragment key={i}>{x}</React.Fragment>;
                })}
            </React.Fragment>
        );
    }
}

function replaceWhiteSpace(text: string): FormatType[] {
    const result: FormatType[] = [];
    let start = false;
    let end = false;
    if (!!text.match(/^\s+/gi)) {
        text = text.replace(/^\s+/gi, '');
        start = true;
    }
    if (!!text.match(/\s+$/gi)) {
        text = text.replace(/\s+$/gi, '');
        end = true;
    }
    if (start) {
        result.push(<React.Fragment>&nbsp;</React.Fragment>);
    }
    result.push(text);
    if (end) {
        result.push(<React.Fragment>&nbsp;</React.Fragment>);
    }

    return result;
}

function parseAndReplace(source: FormatType[], replaceWith: FormatType, index: number): FormatType[] {
    const result: FormatType[] = [];

    source.forEach(possibleText => {
        if (typeof possibleText === 'string') {
            const pattern = new RegExp(`\\{${index}\\}`, 'gi');
            if (typeof replaceWith === 'string' || typeof replaceWith === 'number') {
                result.push(possibleText.replace(pattern, `${replaceWith}`));
            } else {
                const splits = possibleText.split(pattern);
                splits.forEach((splitText, i) => {
                    if (splitText) {
                        replaceWhiteSpace(splitText).forEach(text => result.push(text));
                    }
                    // if NOT last
                    if (i + 1 < splits.length) {
                        result.push(replaceWith);
                    }
                });
            }
        } else {
            result.push(possibleText);
        }
    });

    return result;
}

export { format };
