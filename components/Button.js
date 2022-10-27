import classNames from "classnames";
import React from "react";
import theme from "../themes/default";

const Button = React.forwardRef(function Button(props, ref) {
  const {
    tag = "button",
    type = tag === "button" ? "button" : undefined,
    disabled = false,
    size = "regular",
    layout = "primary",
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props;
  const button = theme.button;
  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  // warn(
  //   hasIcon() && !other['aria-label'] && !children,
  //   'Button',
  //   'You are using an icon button, but no "aria-label" attribute was found. Add an "aria-label" attribute to work as a label for screen readers.'
  // )

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = button.base;
  const blockStyle = button.block;
  const sizeStyles = {
    larger: button.size.larger,
    large: button.size.large,
    regular: button.size.regular,
    small: button.size.small,
    /**
     * Only used in Pagination.
     * Not meant for general use.
     */
    pagination: button.size.pagination,
  };
  const iconSizeStyles = {
    larger: button.size.icon.larger,
    large: button.size.icon.large,
    regular: button.size.icon.regular,
    small: button.size.icon.small,
    pagination: button.size.icon.regular,
  };
  const iconStyle = button.icon[size];
  const layoutStyles = {
    primary: button.primary.base,
    outline: button.outline.base,
    link: button.link.base,
  };
  const activeStyles = {
    primary: button.primary.active,
    outline: button.outline.active,
    link: button.link.active,
  };
  const disabledStyles = {
    primary: button.primary.disabled,
    outline: button.outline.disabled,
    link: button.link.disabled,
  };

  /**
   * Only used in DropdownItem.
   * Not meant for general use.
   */
  const dropdownItemStyle = button.dropdownItem.base;

  const buttonStyles =
    layout === "__dropdownItem"
      ? classNames(dropdownItemStyle, className)
      : classNames(
        baseStyle,
        // has icon but no children
        hasIcon() && !children && iconSizeStyles[size],
        // has icon and children
        hasIcon() && children && sizeStyles[size],
        // does not have icon
        !hasIcon() && sizeStyles[size],
        layoutStyles[layout],
        disabled ? disabledStyles[layout] : activeStyles[layout],
        block ? blockStyle : null,
        className
      );

  const iconLeftStyles = classNames(
    iconStyle,
    children ? button.icon.left : ""
  );
  const iconRightStyles = classNames(
    iconStyle,
    children ? button.icon.right : ""
  );

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft
      ? React.createElement(IconLeft, {
        className: iconLeftStyles,
        "aria-hidden": true,
      })
      : null,
    children,
    IconRight
      ? React.createElement(IconRight, {
        className: iconRightStyles,
        "aria-hidden": true,
      })
      : null
  );
});

export default Button;
