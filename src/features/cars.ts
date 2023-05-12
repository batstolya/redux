import { Car } from "../types/Car";

type AddAction = {
    type: "car/ADD";
    payload: Car;
};

type TakeAction = {
    type: 'car/TAKE';
    payload: Car;
};

type ClearAction = {
    type: 'car/CLEAR';
};

type Action = AddAction | TakeAction | ClearAction;

const add = (value: Car): AddAction => ({
    type: 'car/ADD',
    payload: value,
});

const take = (value: Car): TakeAction => ({
    type: 'car/TAKE',
    payload: value,
});

const clear = (): ClearAction => ({
    type: 'car/CLEAR',
});

export const actions = { add, take, clear };

const carsReducer = (cars: Car[] = [], action: Action) => {
    switch (action.type) {
        case "car/ADD":
            return [...cars, action.payload]
        case "car/TAKE":
            return cars.filter(car => car.id !== action.payload.id)
        case "car/CLEAR":
            return [];

        default:
            return cars;
    }
};


export default carsReducer;
