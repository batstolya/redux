import React, { FormEvent, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../features/cars";
import { Car } from "../../types/Car";

type Props = {
  setFieldValue: (value: boolean) => void;
  type: string;
  value: string;
  defaultValue: string;
  car: Car;
};

export const EditableField: React.FC<Props> = ({
  setFieldValue,
  type,
  value,
  defaultValue,
  car,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFieldValue(false);
    console.log(car, value, inputRef);
    dispatch(actions.test(car, value, inputRef.current?.value));
  };

  const handleCanceling = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event.target);
    if (event.key === "Escape") {
      setFieldValue(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input'
        type={type}
        ref={inputRef}
        onKeyDown={handleCanceling}
        defaultValue={defaultValue}
        autoFocus
        onBlur={() => {
          setFieldValue(false);
        }}
      />
    </form>
  );
};
