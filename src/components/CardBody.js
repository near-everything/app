import classNames from "classnames";
import React from "react";
import theme from "../themes/default";

const CardBody = React.forwardRef(function CardBody(props, ref) {
  const { className, children, ...other } = props;
  const cardBody = theme.cardBody;
  const baseStyle = cardBody.base;

  const cls = classNames(baseStyle, className);

  return (
    <div className={cls} ref={ref} {...other}>
      {children}
    </div>
  );
});

export default CardBody;
