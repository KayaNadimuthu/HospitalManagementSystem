import React from "react";

const Input = ({
  type,
  label,
  placeholder,
  PhoneIcon,
  Icon,
  value,
  setValue,
  required,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label>{label}</label>
      <div className="flex w-full gap-1 pl-1 bg-cyan-50 h-10 border border-cyan-400 rounded shadow  ">
        {Icon}
        <input
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-full bg-transparent border-0 w-full focus:outline-none"
          required={required}
        ></input>
      </div>
    </div>
  );
};

export default Input;
