<a name="Content"></a>

## Content(children, [name])
Component to provide slot content.
If no `name` prop provided, content will be considered as default.
Should be used within templated component, otherwise will just render its children.

**Params**

- children <code>React.node</code> - slot content
- [name] <code>string</code> - slot name



**Description**

To provide content for slots from [Slot example](../Slot/README.md):

```js
// App.js
import { Content } from 'react-templated';
import Page from './Page';

export default () => (
    <Page>
        <Content name="header">Header content</Content>
        <Content name="footer">Footer content</Content>
        Body content
        <Content>Additional body content</Content>
    </Page>
);
```