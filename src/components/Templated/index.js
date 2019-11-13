const React = require('react');
const PropTypes = require('prop-types');

const ContentContext = require('../../context');
const Content = require('../Content');

module.exports = Templated;

function Templated({ content, children }) {
    const contentMap = {};

    const extractSlots = (child) => {
        if (typeof child !== 'object') {
            return child;
        }

        const { type, props } = child;

        if (type === Content) {
            // eslint-disable-next-line react/prop-types
            const { name, children: contentChildren } = props;

            if (!name) {
                return contentChildren;
            }

            contentMap[name] = contentChildren;
            return null;
        }

        const childProps = props && {
            ...props,
            children: React.Children.map(props.children, extractSlots)
        };

        return React.createElement(type, childProps);
    };

    contentMap.default = React.Children.map(content, extractSlots);

    return (
        <ContentContext.Provider value={contentMap}>
            {children}
        </ContentContext.Provider>
    );
}

Templated.propTypes = {
    content: PropTypes.node,
    children: PropTypes.node
};
