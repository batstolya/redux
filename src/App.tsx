import "./App.scss";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import { Car } from "./types/Car";
import { AddCarForm } from "./components/AddCarForm";
import { CarsList } from "./components/CarsList";

const App: React.FC = () =>  {
  const cars = useSelector<RootState, Car[]>((state) => state.cars);

  return (
    <div className='page'>
      <div className='page-content'>
        {!cars.length && (
          <h1 className='page-content--notification'>you have no cars...</h1>
        )}
        {!cars.length && <div className='page-content--background-image'></div>}
        <CarsList cars={cars} />
      </div>
      <div className='sidebar'>
        <AddCarForm />
      </div>
    </div>
  );
}

export default App;
