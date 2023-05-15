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

type Test = {
    type: 'car/TEST';
    payload: Car;
    field: string;
    fieldValue: string;
};


type Action = AddAction | TakeAction | ClearAction | Test;

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

const test = (value: Car, field: string, fieldValue: any): Test => ({
    type: 'car/TEST',
    payload: value,
    field: field,
    fieldValue: fieldValue,
});

export const actions = { add, take, clear, test };

const carsReducer = (cars: Car[] = [], action: Action) => {
    switch (action.type) {
        case "car/ADD":
            return [...cars, action.payload]
        case "car/TAKE":
            return cars.filter(car => car.id !== action.payload.id)
        case "car/CLEAR":
            return [];
        case "car/TEST":
            const index = cars.findIndex(car => car.id === action.payload.id);
            const updateCar = {
                ...action.payload,
                [action.field]: action.fieldValue
            }

            cars[index] = updateCar;
            return [...cars]

        
        default:
            return cars;
    }
};


export default carsReducer;
