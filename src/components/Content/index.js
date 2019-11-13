const PropTypes = require('prop-types');

module.exports = Content;

function Content({ children }) {
    return children;
}

Content.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string
};
