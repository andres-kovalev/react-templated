<a name="Slot"></a>

## Slot(children, [name])
Component to define template slot. Should be used within template component.

**Params**

- children <code>React.node</code> - default slot content
- [name] <code>string</code> <code> = &quot;default&quot;</code> - slot name



**Description**

By default Slot component consumes `name` prop.
Content will be injected into slot by name.
If name is not provided, slot will be considered as default.
```js
// PageTemplate.js
import { Slot } from 'react-templated';

export default () => (
    <div className="page">
        <div className="header">
            <Slot name="header">Default header content</Slot>
        </div>
        <div className="body">
            <Slot>Default body content</Slot>
        </div>
        <div className="footer">
            <Slot name="footer">Default footer content</Slot>
        </div>
    </div>
);
```
To provide content for defined slots we should use [Content](../Content/README.md) component.