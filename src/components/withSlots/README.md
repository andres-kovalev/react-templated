<a name="withSlots"></a>

## withSlots(Template) ⇒ <code>React.Component</code>
Wraps template component with [Templated](../Templated/README.md) component.

**Returns**: <code>React.Component</code> - templated component (wrapped with [Templated](../Templated/README.md))
**Params**

- Template <code>React.Component</code> - template component



**Description**

To [inject content](../Content/README.md) into template component with [slots](../Slot/README.md)
we need to wrap it with [Templated](../Templated/README.md) component.
Since we need to perform wrapping for every template component, `withSlots()` HoC was introduced.
To achieve same effect as [here](../Templated/README.md) just do the thing below:

```js
import { withSlots } from 'react-templated';
import PageTemplate from './PageTemplate.js';

export default withSlots(PageTemplate);
```