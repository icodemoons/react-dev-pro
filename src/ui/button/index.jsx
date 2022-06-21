import PrimaryButton from "./primary";
import SecondaryButton from "./secondary";
import OutlineButton from "./outline";

import styles from "./styles.module.css";

export { PrimaryButton, SecondaryButton, OutlineButton };

export default function Button({
  children,
  big = false,
  block = false,
  renderLeftIcon = () => {},
  renderRightIcon = () => {},
  className,
  leftIconClassName,
  contentClassName,
  rightIconClassName,
  onClick,
  value,
  ...rest
}) {
  const leftIcon = renderLeftIcon();
  const rightIcon = renderRightIcon();

  return (
    <button
      className={`${styles.button}  ${className} ${
        block ? "block w-fit" : big
      } flex items-center  space-around`}
      {...rest}
      value={value}
      onClick={(e) => onClick(e.target.value)}
    >
      {leftIcon && (
        <div className={`${leftIconClassName || "justify-start"}`}>
          {leftIcon}
        </div>
      )}

      <div
        className={`${
          contentClassName || "flex-nowrap whitespace-nowrap w-full"
        }`}
      >
        {children}
      </div>
      {rightIcon && (
        <div className={`${rightIconClassName || "justify-end"}`}>
          {rightIcon}
        </div>
      )}
    </button>
  );
}
