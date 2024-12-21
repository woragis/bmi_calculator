import { ChangeEvent, useState } from "react";
import "./App.css";

function App() {
  interface UserData {
    height: number;
    weight: number;
  }
  enum UserHealthStatus {
    underweight = "Underweight",
    normal = "Normal",
    overweight = "Overweight",
    obesity = "Obese",
  }
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const [bmi, setBmi] = useState<number>(0);
  const [userHealthStatus, setUserHealthStatus] = useState<UserHealthStatus>(
    UserHealthStatus.normal
  );
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData(
      (prevState) =>
        (prevState = { ...prevState, [event.target.name]: event.target.value })
    );
    setBmi(userData.weight / userData.height ** 2);
    if (bmi < 18.5) {
      setUserHealthStatus(UserHealthStatus.underweight);
    } else if (bmi < 25) {
      setUserHealthStatus(UserHealthStatus.normal);
    } else if (bmi < 30) {
      setUserHealthStatus(UserHealthStatus.overweight);
    } else {
      setUserHealthStatus(UserHealthStatus.obesity);
    }
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
        <p>Your BMI: {bmi}</p>
        <p>Your health: {userHealthStatus}</p>
      </div>
    </>
  );
}

export default App;
