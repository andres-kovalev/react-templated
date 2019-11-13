<a name="Templated"></a>

## Templated(content, children)
Injects content into template component.

**Params**

- content <code>React.node</code> - content to inject into template
- children <code>React.children</code> - template component (with slots)



**Description**

When you have a template component created using [slots](../Slot/README.md)
and content to inject (component created using [Content](../Content/README.md)),
you can perform injection using `Templated` component:

```js
// Page.js
import { Templated } from 'react-templated';
import PageTemplate from './PageTemplate.js';

export default ({ children }) => (
    <Templated content={ children }>
        <PageTemplate />
    </Templated>
);
```

If our template component consumes some props, we can pass those through:

```js
...

export default ({ children, ...props }) => (
    <Templated content={ children }>
        <PageTemplate { ...props } />
    </Templated>
);
```

We can achieve similar behaviour by using [withSlots() hook](../withSlots/README.md).