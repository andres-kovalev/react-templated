const React = require('react');
const { mount } = require('enzyme');

const { Slot } = require('..');
const ContentContext = require('../src/context');

describe('Slot', () => {
    describe('by default', () => {
        it('should render its default content', () => {
            const defaultContent = <div>Hello</div>;

            const wrapper = mount(
                <Slot>
                    {defaultContent}
                </Slot>
            );

            expect(wrapper.find('div').text()).toBe('Hello');
        });
    });

    describe('when name is not defined', () => {
        it('should render default content from context', () => {
            const defaultContent = <div>Hello</div>;
            const context = {
                default: <div>Bye</div>
            };

            const wrapper = mount(
                <ContentContext.Provider value={context}>
                    <Slot>
                        {defaultContent}
                    </Slot>
                </ContentContext.Provider>
            );

            expect(wrapper.find('div').text()).toBe('Bye');
        });
    });

    describe('when name defined', () => {
        it('should render named value from context', () => {
            const defaultContent = <div>Hello</div>;
            const context = {
                'slot-name': <div>Bye</div>
            };

            const wrapper = mount(
                <ContentContext.Provider value={context}>
                    <Slot name='slot-name'>
                        {defaultContent}
                    </Slot>
                </ContentContext.Provider>
            );

            expect(wrapper.find('div').text()).toBe('Bye');
        });
    });
});
