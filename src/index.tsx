import * as React from 'react';

type FormatType = number | string | React.ReactNode;

function format(text: string, ...params: FormatType[]): string | React.ReactNode {
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
                    const { startWhiteSpace, node, endWhiteSpace } = parseContent(x);
                    return (
                        <React.Fragment key={i}>
                            {startWhiteSpace === true ? <React.Fragment>&nbsp;</React.Fragment> : undefined}
                            {node}
                            {endWhiteSpace === true ? <React.Fragment>&nbsp;</React.Fragment> : undefined}
                        </React.Fragment>
                    );
                })}
            </React.Fragment>
        );
    }
}

function parseContent(
    node: any,
): {
    startWhiteSpace?: boolean;
    node: any;
    endWhiteSpace?: boolean;
} {
    const startWhiteSpace = typeof node === 'string' ? !!node.match(/^\s+/gi) : undefined;
    const endWhiteSpace = typeof node === 'string' ? !!node.match(/\s+$/gi) : undefined;

    if(typeof node === 'string'){
        node = node.replace(/^\s+/gi, "").replace(/\s+$/gi, "");
    }

    return {
        startWhiteSpace,
        node,
        endWhiteSpace,
    };
}

function parseAndReplace(source: FormatType[], replaceWith: FormatType, index: number): FormatType[] {
    const result: FormatType[] = [];

    source.forEach(possibleText => {
        if (typeof possibleText === 'string') {
            const pattern = new RegExp(`\\{${index}\\}`, 'gi');
            if (typeof replaceWith === 'string' || typeof replaceWith === 'number') {
                result.push(possibleText.replace(pattern, `${replaceWith}`));
            } else {
                if (typeof possibleText === 'string') {
                    const splits = possibleText.split(pattern);
                    splits.forEach((splitText, i) => {
                        if (splitText) {
                            result.push(splitText);
                        }
                        // if last
                        if (i + 1 < splits.length) {
                            result.push(replaceWith);
                        }
                    });
                } else {
                    result.push(possibleText);
                }
            }
        }
    });

    return result;
}

export { format };