import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./CarCard.scss";
import { Car } from "../../types/Car";
import { useDispatch } from "react-redux";
import { actions } from "../../features/cars";
import { EditableField } from "../EditableField";

type Props = {
  car: Car;
};

const img =
  "https://amiel.club/uploads/posts/2022-03/1647646506_2-amiel-club-p-kartinki-narisovannie-mashini-2.jpg";

export const CarCard: React.FC<Props> = ({ car }) => {
  const dispatch = useDispatch();
  const closeHandler = () => {
    dispatch(actions.take(car));
  };

  const [isDescription, setIsDescription] = useState(false);
  const [isBrand, setIsBrand] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [isYear, setIsYear] = useState(false);

  const handleDoubleClick = () => {
    setIsDescription(true);
  };

  const handleBrandDoubleClick = () => {
    setIsBrand(true);
  };

  const handleColorDoubleClick = () => {
    setIsColor(true);
  };

  const handleYearDoubleClick = () => {
    setIsYear(true);
  };
  const detailsVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  return (
    <AnimatePresence>
      <motion.div
        className='card'
        data-cy='car-card'
        variants={detailsVariants}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <button
          className='delete is-medium right'
          aria-label='close'
          onClick={closeHandler}
        ></button>
        <div className='card-image'>
          <figure className='image is-4by3'>
            <img
              src={car.imgUrl.length < 10 ? img : car.imgUrl}
              alt='Film logo'
            />
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
              {isBrand && (
                <EditableField
                  setFieldValue={setIsBrand}
                  type='text'
                  value='brand'
                  defaultValue={car.brand}
                  car={car}
                />
              )}
              {!isBrand && (
                <p
                  className='title is-8'
                  onDoubleClick={handleBrandDoubleClick}
                >
                  {car.brand}
                </p>
              )}
            </div>
          </div>

          <div className='content'>
            <span onDoubleClick={handleColorDoubleClick}>Color: </span>
            {isColor && (
              <EditableField
                setFieldValue={setIsColor}
                type='text'
                value='color'
                defaultValue={car.color}
                car={car}
              />
            )}
            {!isColor && <span>{car.color}</span>}
            <br />
            <span onDoubleClick={handleYearDoubleClick}>Year: </span>
            {isYear && (
              <EditableField
                setFieldValue={setIsYear}
                type='text'
                value='year'
                defaultValue={car.year}
                car={car}
              />
            )}
            {!isYear && <span>{car.year}</span>}
          </div>

          {isDescription && (
            <EditableField
              setFieldValue={setIsDescription}
              type='text'
              value='description'
              defaultValue={car.description}
              car={car}
            />
          )}
          {!isDescription && (
            <div className='content' onDoubleClick={handleDoubleClick}>
              {car.description}
              <br />
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
