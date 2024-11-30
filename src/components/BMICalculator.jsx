import { useState } from "react";

const BMICalculator = () => {

    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBMI] = useState(null);
    const [status, setStatus] = useState("");


    // Calculate BMI
    const BMICalculate = () => {
        if(weight && height) {
           const heightInMeters = height / 100;
           const calculateBMI = (weight / (heightInMeters ** 2)).toFixed(2);
           setBMI(calculateBMI);

           if (calculateBMI < 18.5) {
            setStatus("Underweight");
           } else if(calculateBMI >= 18.5 && calculateBMI <=24.9) {
            setStatus("Normal Weight");
           } else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
            setStatus("overWeight");
           } else {
            setStatus("Obesity");
           }

        }else {
            alert("Please enter valud values for weight and Height");
        }
    }

  return (
    <>
      <div className="container">
        <h1 className='title'>BMI Calculator</h1>
        <div className="inputGroup">
            <input type="number"
                placeholder='wieght (kg)'
                className='inputField'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
             <input type="number"
                placeholder='height (cm)'
                className='inputField'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
            />
        </div>
        <button onClick={BMICalculate} className="button">Calculate BMI</button>
       {
        bmi && (
            <div className="result">
            <h2>Your BMI: {bmi}</h2>
            <h3>Status: {status}</h3>
        </div>
        )
       }
      </div>
    </>
  )
}

export default BMICalculator;
