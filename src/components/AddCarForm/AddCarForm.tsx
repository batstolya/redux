import React, { FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as carActions } from "../../features/cars";
import { RootState } from "../../app/store";
import { Car } from "../../types/Car";
import { TextField } from "../TextField";

export const AddCarForm = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const isValidForm = Boolean(
    brand.trim() && model.trim() && year.trim() && color.trim()
  );

  const dispatch = useDispatch();
  const cars = useSelector<RootState, Car[]>((state) => state.cars);

  const handlerSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const cenereteId = Math.max(...cars.map((car) => +car.id));
    const newId = cenereteId < 0 ? 1 : cenereteId + 1;

    const newCar = {
      id: newId,
      brand,
      model,
      year,
      color,
      description,
      imgUrl,
    };

    if (isValidForm) {
      dispatch(carActions.add(newCar));
    }

    setBrand('')
    setColor('')
    setYear('')
    setModel('')
    setDescription('')
    setImgUrl('')
  };

  return (
    <form className='NewCars' onSubmit={handlerSubmit}>
      <h2 className='title'>Add a Car</h2>

      <TextField
        name='brand'
        label='Brand'
        value={brand}
        onChange={setBrand}
        required
      />

      <TextField
        name='model'
        label='Model'
        value={model}
        onChange={setModel}
        required
      />

      <TextField
        name='year'
        label='Year'
        value={year}
        onChange={setYear}
        required
      />

      <TextField
        name='color'
        label='Color'
        value={color}
        onChange={setColor}
        required
      />

      <TextField
        name='description'
        label='Description'
        value={description}
        onChange={setDescription}
      />

      <TextField
        name='imgUrl'
        label='Image URL'
        value={imgUrl}
        onChange={setImgUrl}
      />

      <div className='field is-grouped'>
        <div className='control'>
          <button
            type='submit'
            data-cy='submit-button'
            className='button is-link'
            disabled={!isValidForm}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
