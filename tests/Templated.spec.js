/* eslint-disable react/prop-types */
const React = require('react');
const { mount } = require('enzyme');

const { Templated, Slot, Content } = require('..');

describe('Templated', () => {
    describe('by default', () => {
        let wrapper;

        const Template = ({ children }) => (
            <Templated content={ children }>
                <div id='header'>
                    <Slot name='header'>
                        <div>Header</div>
                    </Slot>
                </div>
                <div id='body'>
                    <Slot>
                        <div>Body</div>
                    </Slot>
                </div>
            </Templated>
        );

        beforeEach(() => {
            wrapper = mount(
                <Template>
                    <div>Body 1</div>
                    <Content name='header'>
                        <div>Custom header</div>
                    </Content>
                    <Content name='footer'>
                        <div id='footer'>Custom footer</div>
                    </Content>
                    <Content>
                        <div>Body 2</div>
                    </Content>
                </Template>
            );
        });

        it('should render content in conrresponding slots (by name)', () => {
            const headerContent = wrapper.find('div#header div');

            expect(headerContent.text()).toBe('Custom header');
        });

        it('should not render content in not corresponding slot defined (by name)', () => {
            const footer = wrapper.find('div#footer');

            expect(footer.exists()).toBeFalsy();
        });

        it('should render rest of content in default slot', () => {
            const bodyContent = wrapper.find('div#body div');

            expect(bodyContent).toHaveLength(2);
        });
    });
});
