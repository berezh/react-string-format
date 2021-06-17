import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { format } from '../index';

test('node', () => {
    expectNode('{0}', [<i>0</i>], <i>0</i>);
});

test('node.2', () => {
    expectNode(
        '{0} {1}',
        [<i>0</i>, <i>1</i>],
        <React.Fragment>
            <i>0</i>
            <React.Fragment>&nbsp;</React.Fragment>
            <i>1</i>
        </React.Fragment>
    );
});

test('node.3', () => {
    expectNode(
        '{0} {1} {2}',
        [<i>0</i>, <i>1</i>, <i>2</i>],
        <React.Fragment>
            <i>0</i>
            <React.Fragment>&nbsp;</React.Fragment>
            <i>1</i>
            <React.Fragment>&nbsp;</React.Fragment>
            <i>2</i>
        </React.Fragment>
    );
});

function expectNode(formatString: string, nodes: React.ReactElement[], expected: React.ReactElement) {
    const actual = ReactTestRenderer.create(<React.Fragment>{format(formatString, ...nodes)}</React.Fragment>).toJSON();
    expect(actual).toMatchObject(ReactTestRenderer.create(expected).toJSON() || {});
}
