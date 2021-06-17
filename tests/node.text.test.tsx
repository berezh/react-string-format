import * as React from 'react';
import * as ReactTestRenderer from 'react-test-renderer';

import { format } from '../src/index';

test('node.text.2', () => {
    expectNode(
        'hello {0} man {1} !',
        [<i>0</i>, <i>1</i>],
        <React.Fragment>
            <React.Fragment>hello</React.Fragment>
            <React.Fragment>&nbsp;</React.Fragment>
            <i>0</i>
            <React.Fragment>&nbsp;</React.Fragment>
            <React.Fragment>man</React.Fragment>
            <React.Fragment>&nbsp;</React.Fragment>
            <i>1</i>
            <React.Fragment>&nbsp;</React.Fragment>
            <React.Fragment>!</React.Fragment>
        </React.Fragment>
    );
});

function expectNode(formatString: string, nodes: React.ReactElement[], expected: React.ReactElement) {
    const actual = ReactTestRenderer.create(<React.Fragment>{format(formatString, ...nodes)}</React.Fragment>).toJSON();
    expect(actual).toMatchObject(ReactTestRenderer.create(expected).toJSON() || {});
}
