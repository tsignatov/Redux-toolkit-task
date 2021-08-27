import React, { FC } from "react";

interface Props {
  labelName: string;
  type: string;
  step?: string;
  value: number;
  handleInpuChange?: (value: number) => void;
  disabled?: boolean;
}

export const InputField: FC<Props> = ({
  labelName,
  type,
  step,
  value,
  handleInpuChange,
  disabled,
}) => {
  const inpuVlidation = (value: number) => {
    if (value >= 0) {
      handleInpuChange && handleInpuChange(value);
    }
  };
  return (
    <div>
      <label>{labelName}</label>
      <input
        type={type}
        step={step}
        value={value}
        onChange={(event) =>
          handleInpuChange && inpuVlidation(parseInt(event.target.value))
        }
        disabled={disabled}
      />
    </div>
  );
};
