import React from "react";
import "./CarCard.scss";
import { Car } from "../../types/Car";
import { useDispatch } from "react-redux";
import { actions } from "../../features/cars";

type Props = {
  car: Car;
};

const img =
  "https://amiel.club/uploads/posts/2022-03/1647646506_2-amiel-club-p-kartinki-narisovannie-mashini-2.jpg";

export const CarCard: React.FC<Props> = ({ car }) => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(actions.take(car))
  }

  return (
    <div className='card' data-cy='car-card'>
      <button className='delete is-medium right' aria-label='close' onClick={closeHandler}></button>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={car.imgUrl === "" ? img : car.imgUrl} alt='Film logo' />
        </figure>
      </div>

      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img
                src='https://cdn-icons-png.flaticon.com/512/334/334998.png'
                alt='imdb'
              />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-8'>{car.brand}</p>
          </div>
        </div>

        <div className='content'>
          Color: {car.color}
          <br />
          Year: {car.year}
        </div>
        <div className='content'>
          {car.description}
          <br />
        </div>
      </div>
    </div>
  );
};
