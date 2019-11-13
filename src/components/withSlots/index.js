const React = require('react');
const hoist = require('hoist-non-react-statics');

const Templated = require('../Templated');

module.exports = withSlots;

/**
 * @param {React.Component} Template template component
 * @returns {React.Component} templated component (wrapped with [Templated](../Templated/README.md))
 * @description
 * Wraps template component with [Templated](../Templated/README.md) component.
 * @docs
 * To [inject content](../Content/README.md) into template component with [slots](../Slot/README.md)
 * we need to wrap it with [Templated](../Templated/README.md) component.
 * Since we need to perform wrapping for every template component, `withSlots()` HoC was introduced.
 * To achieve same effect as [here](../Templated/README.md) just do the thing below:
 *
 * ```js
 * import { withSlots } from 'react-templated';
 * import PageTemplate from './PageTemplate.js';
 *
 * export default withSlots(PageTemplate);
 * ```
 */
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
