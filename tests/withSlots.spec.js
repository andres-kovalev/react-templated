const React = require('react');
const { mount } = require('enzyme');

const { withSlots, Templated } = require('..');

describe('withSlots', () => {
    it('should wrap component with Templated', () => {
        const Template = () => <div id='template' />;
        const TemplateWithSlots = withSlots(Template);

        const wrapper = mount(
            <TemplateWithSlots>
                <div id='content' />
            </TemplateWithSlots>
        );

        expect(wrapper.find(Templated).exists()).toBeTruthy();
    });
});
