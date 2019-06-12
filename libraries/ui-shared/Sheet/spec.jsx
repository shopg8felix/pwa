import React from 'react';
import { shallow, mount } from 'enzyme';
import mockRenderOptions from '@shopgate/pwa-common/helpers/mocks/mockRenderOptions';
import Sheet from './index';

window.requestAnimationFrame = () => {};

describe('<Sheet />', () => {
  it('should render closed without content', () => {
    const wrapper = shallow(<Sheet />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render opened without content', () => {
    const wrapper = shallow(<Sheet isOpen />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with content and title', () => {
    const wrapper = shallow((
      <Sheet isOpen title="Test-Title">
        <div>Test</div>
      </Sheet>
    ));
    expect(wrapper).toMatchSnapshot();
  });

  it('should call onDidOpen callback when the Sheet was opened', () => {
    const onOpen = jest.fn();
    const onDidOpen = jest.fn();

    const wrapper = mount(
      (
        <Sheet isOpen={false} onOpen={onOpen} onDidOpen={onDidOpen}>
          <div>Test</div>
        </Sheet>
      ), mockRenderOptions
    );

    expect(onOpen).not.toHaveBeenCalled();
    expect(onDidOpen).not.toHaveBeenCalled();

    wrapper.setProps({ isOpen: true });
    expect(onOpen).toHaveBeenCalled();
    wrapper.find('Drawer').simulate('animationEnd');
    expect(onDidOpen).toHaveBeenCalled();
  });

  it('should trigger onClose callback and close the Sheet', () => {
    const spy = jest.fn();

    const wrapper = mount(
      (
        <Sheet isOpen title="Test-Title" onClose={spy}>
          <div>Test</div>
        </Sheet>
      ), mockRenderOptions
    );

    // Trigger a click on the close button of the Sheet.
    wrapper.find('button').first().simulate('click');

    return new Promise((resolve) => {
      // Wait until the drawer is closed and has updated it's state.
      setTimeout(() => {
        resolve();
      }, wrapper.find('Drawer').prop('animation').duration);
    }).then(() => {
      // Check if onClose callback was called.
      expect(spy).toHaveBeenCalled();

      // Check if the Drawer component was closed.
      expect(wrapper.find('Drawer').prop('isOpen')).not.toBeTruthy();

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should open', () => {
    const wrapper = mount(
      (
        <Sheet isOpen={false} title="Test-Title">
          <div>Test</div>
        </Sheet>
      ), mockRenderOptions
    );

    wrapper.setProps({ isOpen: true });
    wrapper.update();
    expect(wrapper.find('Drawer').prop('isOpen')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
