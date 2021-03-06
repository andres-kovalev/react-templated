[![ci](https://img.shields.io/circleci/build/github/andres-kovalev/react-templated.svg?style=flat-square&logo=circleci)](https://circleci.com/gh/andres-kovalev/react-templated)
[![codecov](https://img.shields.io/codecov/c/github/andres-kovalev/react-templated.svg?style=flat-square&logo=codecov&token=1280f2cf41a24522add9857967be2a73)](https://codecov.io/gh/andres-kovalev/react-templated)
[![downloads](https://img.shields.io/npm/dm/react-templated.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiCj48ZyBmaWxsPSJ3aGl0ZSI+PHBhdGggZD0iTTM3OSwxODAuNWgtMTAydi0xMDBoLTE1M3YxMDBoLTEwMmwxNzguNSwxNzguNWwxNzguNSwtMTc4LDUiLz48L2c+PC9zdmc+Cg==)](https://www.npmjs.com/package/react-templated)
[![node](https://img.shields.io/node/v/react-templated.svg?style=flat-square&logo=node.js&color=007ec6)](https://nodejs.org/)
[![npm](https://img.shields.io/npm/v/react-templated.svg?style=flat-square&logo=npm)](https://www.npmjs.com/package/react-templated)
[![MIT](https://img.shields.io/npm/l/react-templated.svg?color=007ec6&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAA5ElEQVR4AY3SJWyDcRQE8G+MsnIg63XNmMm2ZuB9xjyv5tWYfAZ2TD6tGW9qzHCX3H9bX4rJz7y7K3t8NK20OT7ogHnYl3ndfK5nRwFYgxf4Nl6UBVzfjcoholIiEXbdsBS2TCERdks5HIaPVIfqDnN4HCO8gUm5iZEfc/gYI+gBT3pi5I8M3szxE0LgSYg303ljcGqOtAHFshEjP+VwOkbwCvXyGiOf5rASrkwQhhIJm4zdKg4zYBDe/z8j72Te0bu6GRxSIUzAHXxBF3jSpdudOoX2/5oDQVgEP3ji1y3Ijhv9ABp7euvVsybrAAAAAElFTkSuQmCC&style=flat-square)](https://github.com/andres-kovalev/react-templated/blob/master/LICENSE)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-templated.svg?style=flat-square&logo=data:image/svg+xml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDAwcHgiIGhlaWdodD0iNDAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnIGZpbGw9IndoaXRlIj48cGF0aCBkPSJNNzUsMzBoMTc1bDEwMCwxMDB2MjQwaC0yNzV2LTI0MCIvPjwvZz48ZyBmaWxsPSIjREREIj48cGF0aCBkPSJNMjUwLDMwbDEwMCwxMDBoLTEwMHYtMTAwIi8+PC9nPjwvc3ZnPgo=)](https://www.npmjs.com/package/react-templated)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

# react-templated

Yet another implementation of slot components for React. It's inspired by [WebComponents slots](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots).

> full documentation can be found on [https://andres-kovalev.github.io/react-templated/](https://andres-kovalev.github.io/react-templated/)

# Description

`react-templated` provides several components to created templated components.

* [Content(children, name)](src/components/Content/README.md)
* [Slot(children, name)](src/components/Slot/README.md)
* [Templated(content, children)](src/components/Templated/README.md)
* [withSlots(Template)](src/components/withSlots/README.md)

# Installation

As any other npm package `react-templated` can be added to your project by following command:

```bash
npm i -S react-templated
```

It requires any version of react with new context API support as peer dependency, so it should be installed as well.

```bash
npm i -S react
```

# Quick start

By default content for React component can be accessed by `children` prop:

```js
function Parent() {
    return (
        <Child>
            <div>our div 1</div>
            <div>our div 2</div>
        </Child>
    );
}

...

function Child(props) {
    // here are our divs
    const { children } = props;

    ...
}
```

But some times we need to distribute children between different areas of our component. We might want to create a template. We can extract try to extract separate children and use those:

```js
function Child({ children }) {
    const [ child1, child2 ] = children.props.children;

    return (
        <React.Fragment>
            <div className="header">
                {child1}
            </div>
            <div className="body">
                {child2}
            </div>
        </React.Fragment>
    );
}
```

Looks a bit ugly. Also, we need to provide some safe-checks/fallbacks to prevent issues when user provides less than 2 children and we need to find some way to be able to provide only 2nd/3rd/etc item.

```js
import _ from 'lodash';

function Child({ children }) {
    const [ child1, child2 ] = _.get(children, 'props.children', []);

    ...
}

function Parent() {
    return (
        <React.Fragment />
        <div>body</div>
    );
}
```

Another way is to use different props for different areas:

```js
const Page = ({ header, body, footer }) => (
    <div className="page">
        <div className="header">
            { header }
        </div>
        <div className="body">
            { body }
        </div>
        <div className="header">
            { footer }
        </div>
    </div>
)
```

Looks much better, but it's still not so convenient to use such components and provide default content:

```js
const App = () => (
    <Page
        header={ <Header /> }
        body={ <Body /> }
        footer={ <Footer /> }
        />
);

// or

const App = () => {
    const header = <Header />;
    const body = <Body />;
    const footer = <Footer />;

    const props = { header, body, footer };

    return <Page { ...props } />;
}
```

One more option is to use slots from `react-templated` package. First we need to create our template:

```js
import { Slot, withSlots, Value } from 'react-templated';

// it's not necessary to provide any props for template
const PageTemplate = () => (
    <div className="page">
        <div className="header">
            <Slot name="header">
                Slot content will be found by slot name
                We can provide default content for the slot here
            </Slot>
        </div>
        <div className="body">
            <Slot>
                We can skip name to mark slot as default
            </Slot>
        </div>
        <div className="header">
            <Slot name="footer" />
            {/* it's not necessary to provide default content */}
        </div>
    </div>
);
```

The next step is to enhance our component with slot power:

```js
const Page = withSlots(PageTemplate);
```

Now we can provide any content for `Page` component and it will be distributed automatically:

```js
const App = () => (
    <Page>
        <Value name="header">
            Header content
        </Value>
        <Value name="footer">
            Footer content
        </Value>
        Everything else will be considered as default content
        and will appear in default slot
    </Page>
);
```

That's it. For those, who don't like HoCs `react-templated` provides `Templated` wrapper:

```js
import { Templated } from 'react-templated';

const Page = ({ children }) => (
    <Templated content={ children }>
        <PageTemplate />
    <Templated>
);
```

The code abowe is equivalent to `withSlots()` HoC.

