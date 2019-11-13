const React = require('react');
const { mount } = require('enzyme');

const { Content } = require('..');

describe('Content', () => {
    it('should render provided content', () => {
        const content = <div>Hello</div>;

        const wrapper = mount(
            <Content>
                { content }
            </Content>
        );

        expect(wrapper.find('div').text()).toBe('Hello');
    });
});
