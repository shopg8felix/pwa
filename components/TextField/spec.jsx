/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mount, shallow } from 'enzyme';
import TextField from './index';

const inputProps = {
  name: 'test-input',
};

describe('<TextField />', () => {
  it('should render a simple text field', () => {
    const wrapper = mount(
      <TextField {...inputProps} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should render the text field as password', () => {
    const wrapper = mount(
      <TextField {...inputProps} password />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input[type="password"]').length).toBe(1);
  });

  it('should render the text field with a default value', () => {
    const wrapper = mount(
      <TextField {...inputProps} value="FooBar" />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input[value="FooBar"]').length).toBe(1);
  });

  it('should trigger the onChange callback', () => {
    const onChangeMock = jest.fn();

    const wrapper = mount(
      <TextField {...inputProps} onChange={onChangeMock} />
    );

    wrapper.find('input').simulate('change', { target: { value: 'a' } });

    expect(wrapper).toMatchSnapshot();
    expect(onChangeMock.mock.calls.length).toBe(2);
  });

  it('should receive the correct value while typing', () => {
    const wrapper = mount(
      <TextField {...inputProps} />
    );

    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'foobar' } });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().value).toBe('foobar');
  });

  it('should sanitize the input', () => {
    const wrapper = mount(
      <TextField {...inputProps} onSanitize={value => value.toUpperCase()} />
    );

    const input = wrapper.find('input');

    input.simulate('change', { target: { value: 'foobar' } });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().value).toBe('FOOBAR');
  });

  it('should trigger the validation callback', () => {
    const onValidateMock = jest.fn();

    const wrapper = mount(
      <TextField {...inputProps} onValidate={onValidateMock} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(onValidateMock).toHaveBeenCalled();
  });

  it('should focus the input', () => {
    const onFocusMock = jest.fn();

    const wrapper = mount(
      <TextField {...inputProps} onFocusChange={onFocusMock} />
    );

    const input = wrapper.find('input');

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().isFocused).toBe(false);

    input.simulate('focus');

    expect(wrapper.instance().isFocused).toBe(true);

    input.simulate('blur');
    expect(wrapper.instance().isFocused).toBe(false);
  });

  it('should show the error message', () => {
    const errorText = 'This is an error here';

    const wrapper = shallow(
      <TextField {...inputProps} errorText={errorText} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.childAt(4).childAt(0).props().string).toEqual(errorText);
  });

  it('should show the label', () => {
    const label = 'This is the label';

    const wrapper = shallow(
      <TextField {...inputProps} label={label} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.childAt(1).childAt(0).props().string).toEqual(label);
  });

  it('should show the hint text', () => {
    const hintText = 'This is the hint text';

    const wrapper = shallow(
      <TextField {...inputProps} hintText={hintText} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.childAt(0).childAt(0).props().string).toEqual(hintText);
  });

  it('should replace the error text with custom validation error', () => {
    /**
     * A custom validation method that always returns an error.
     * @return {string} The error message.
     */
    const onValidate = () => 'Custom validation error';

    const wrapper = mount(
      <TextField {...inputProps} onValidate={onValidate} />
    );

    expect(wrapper).toMatchSnapshot();
    // Expect at least one element containing the validation error text.
    expect(wrapper.findWhere((node) => {
      try {
        return node.text() === onValidate();
      } catch (e) {
        return false;
      }
    }).length).toBeGreaterThan(0);
  });
});
