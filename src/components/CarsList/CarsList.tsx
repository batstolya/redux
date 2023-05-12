import React from "react";

import { Car } from "../../types/Car";
import { CarCard } from "../CarCard/CarCard";
import "./CarsList.scss";


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
