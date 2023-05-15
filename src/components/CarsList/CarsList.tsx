import React from "react";

import { Car } from "../../types/Car";
import "./CarsList.scss";
import { CarCard } from "../CarCard";


interface Props {
  cars: Car[];
}

export const CarsList: React.FC<Props> = ({ cars }) => (
  <div className='cars'>
    {cars.map((car) => (
      <CarCard car={car} />
    ))}
  </div>
);
