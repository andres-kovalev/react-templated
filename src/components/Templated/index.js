const React = require('react');
const PropTypes = require('prop-types');

const ContentContext = require('../../context');
const Content = require('../Content');

module.exports = Templated;

/**
 * @param {React.node} content content to inject into template
 * @param {React.children} children template component (with slots)
 * @description Injects content into template component.
 * @docs
 * When you have a template component created using [slots](../Slot/README.md)
 * and content to inject (component created using [Content](../Content/README.md)),
 * you can perform injection using `Templated` component:
 *
 * ```js
 * // Page.js
 * import { Templated } from 'react-templated';
 * import PageTemplate from './PageTemplate.js';
 *
 * export default ({ children }) => (
 *     <Templated content={ children }>
 *         <PageTemplate />
 *     </Templated>
 * );
 * ```
 *
 * If our template component consumes some props, we can pass those through:
 *
 * ```js
 * ...
 *
 * export default ({ children, ...props }) => (
 *     <Templated content={ children }>
 *         <PageTemplate { ...props } />
 *     </Templated>
 * );
 * ```
 *
 * We can achieve similar behaviour by using [withSlots() hook](../withSlots/README.md).
 */
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

    return React.createElement(
        ContentContext.Provider,
        { value: contentMap },
        children
    );
}

Templated.propTypes = {
    content: PropTypes.node,
    children: PropTypes.node
};
