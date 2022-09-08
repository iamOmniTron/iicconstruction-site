import React from "react";
import PropTypes from "prop-types";

const variants = { FillRedA700: "bg-red_A700 text-white_A700" };
const sizes = { sm: "p-[11px] 3xl:p-[13px] lg:p-[8px] xl:p-[9px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className}  ${variants[variant] || ""} ${
        sizes[size] || ""
      } common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["FillRedA700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", variant: "FillRedA700", size: "sm" };

export { Button };
