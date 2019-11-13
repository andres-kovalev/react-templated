const PropTypes = require('prop-types');

module.exports = Content;

/**
 * @param {React.node} children slot content
 * @param {string} [name] slot name
 * @description
 * Component to provide slot content.
 * If no `name` prop provided, content will be considered as default.
 * Should be used within templated component, otherwise will just render its children.
 * @docs
 * To provide content for slots from [Slot example](../Slot/README.md):
 *
 * ```js
 * // App.js
 * import { Content } from 'react-templated';
 * import Page from './Page';
 *
 * export default () => (
 *     <Page>
 *         <Content name="header">Header content</Content>
 *         <Content name="footer">Footer content</Content>
 *         Body content
 *         <Content>Additional body content</Content>
 *     </Page>
 * );
 * ```
 */
function Content({ children }) {
    return children;
}

Content.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string
};
