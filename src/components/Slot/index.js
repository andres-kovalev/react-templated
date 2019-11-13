const React = require('react');
const PropTypes = require('prop-types');

const { useContext } = React;

const ContentContext = require('../../context');

module.exports = Slot;

function Slot({ children, name }) {
    const { [name]: content } = useContext(ContentContext);

    return content || children;
}

Slot.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node
};

Slot.defaultProps = {
    name: 'default'
};
