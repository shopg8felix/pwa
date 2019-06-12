import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasePicker from '@shopgate/pwa-common/components/Picker';
import Sheet from '@shopgate/pwa-ui-shared/Sheet';
import { SheetList } from '@shopgate/engage/components';
import Button from './components/Button';
import { picker, withButton } from './style';

/**
 * The template version of the Picker component.
 * @param {Object} props The same component props as in the base Picker component.
 */
class Picker extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    buttonComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    buttonProps: PropTypes.shape(),
    clickDelay: PropTypes.number,
    hasButton: PropTypes.bool,
    sheetProps: PropTypes.shape(),
  };

  static defaultProps = {
    buttonComponent: null,
    buttonProps: {},
    /**
     * Time in ms that delays picker interaction in order
     * to let animations complete first.
     */
    clickDelay: 150,
    hasButton: true,
    sheetProps: {},
  };

  /**
   * Constructor
   * @param {Object} props Props of the component
   */
  constructor(props) {
    super(props);

    this.modalComponent = sheetProps => (
      <Sheet
        {...{
          ...this.props.sheetProps,
          ...sheetProps,
        }}
        title={this.props.label}
        onDidOpen={this.onDidOpen}
      />
    );

    this.pickerRef = React.createRef();
    this.firstSelectableItemRef = React.createRef();

    this.listComponent = ({
      items, onSelect, selectedIndex, onClose,
    }) => (
      <SheetList>
        {items.map((item, index) => (
          <SheetList.Item
            key={item.value}
            title={item.label}
            onClick={() => {
              setTimeout(() => {
                onSelect(item.value);
                onClose();
              }, this.props.clickDelay);
            }}
            isDisabled={item.disabled}
            isSelected={index === selectedIndex}
            rightComponent={item.rightComponent}
            testId={item.label}
            ref={index === selectedIndex ? this.firstSelectableItemRef : null}
          />
          ))}
      </SheetList>
    );
  }

  /**
   * Focuses the picker button for screen readers.
   */
  onDidOpen = () => {
    if (this.firstSelectableItemRef.current) {
      this.firstSelectableItemRef.current.focus();
    }
  }

  /**
   * Focuses the first selectable item for screen readers.
   */
  onClose = () => {
    if (this.pickerRef.current) {
      this.pickerRef.current.focus();
    }
  };

  /**
   * Render
   * @returns {JSX}
   */
  render() {
    const { hasButton, sheetProps: ignore, ...restProps } = this.props;
    const classes = classNames(picker, {
      [withButton]: hasButton,
    });

    return (
      <BasePicker
        {...restProps}
        className={classes}
        modalComponent={this.modalComponent}
        buttonProps={this.props.buttonProps}
        buttonComponent={this.props.buttonComponent || Button}
        listComponent={this.listComponent}
        onSelect={this.onClose}
        ref={this.pickerRef}
      />
    );
  }
}

export default Picker;
