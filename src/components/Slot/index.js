const React = require('react');
const PropTypes = require('prop-types');

const { useContext } = React;

const ContentContext = require('../../context');

module.exports = Slot;

/**
 * @param {React.node} children default slot content
 * @param {string} [name=default] slot name
 * @description Component to define template slot. Should be used within template component.
 * @docs
 * By default Slot component consumes `name` prop.
 * Content will be injected into slot by name.
 * If name is not provided, slot will be considered as default.
 * ```js
 * // PageTemplate.js
 * import { Slot } from 'react-templated';
 *
 * export default () => (
 *     <div className="page">
 *         <div className="header">
 *             <Slot name="header">Default header content</Slot>
 *         </div>
 *         <div className="body">
 *             <Slot>Default body content</Slot>
 *         </div>
 *         <div className="footer">
 *             <Slot name="footer">Default footer content</Slot>
 *         </div>
 *     </div>
 * );
 * ```
 * To provide content for defined slots we should use [Content](../Content/README.md) component.
 */
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
