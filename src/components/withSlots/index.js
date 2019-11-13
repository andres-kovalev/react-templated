const React = require('react');
const hoist = require('hoist-non-react-statics');

const Templated = require('../Templated');

module.exports = withSlots;

function withSlots(Template) {
    // eslint-disable-next-line react/prop-types
    const Wrapped = ({ children, ...props }) => (
        <Templated content={children}>
            <Template {...props} />
        </Templated>
    );

    hoist(Wrapped, Template);

    return Wrapped;
}
