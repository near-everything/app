import classNames from "classnames";
import React from "react";
import theme from "../themes/default";

const Card = React.forwardRef(function Card(props, ref) {
  const { className, children, colored = false, ...other } = props;
  const card = theme.card;

  const baseStyle = card.base;
  const uncoloredStyle = card.default;

  const cls = classNames(baseStyle, !colored && uncoloredStyle, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default Card;
