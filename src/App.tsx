import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  interface UserData {
    height: number;
    weight: number;
  }
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [bmi, setBmi] = useState<number>(0);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData(
      (prevState) =>
        (prevState = { ...prevState, [event.target.name]: event.target.value })
    );
    setBmi((userData.weight * 100) / userData.height ** 2);
  };

  return (
    <>
      <label htmlFor="height">
        Height (in centimeters):
        <input
          type="number"
          name="height"
          id="height"
          value={userData.height}
          onChange={handleChange}
        />
      </label>
      <br />
      <label htmlFor="weight">
        Weight (in kg):
        <input
          type="number"
          name="weight"
          id="weight"
          value={userData.weight}
          onChange={handleChange}
        />
      </label>
      <div className="result">
        <p>Your BMI: {bmi && bmi}</p>
      </div>
    </>
  );
}

export default App;
