import React from 'react';
import { useLocation } from 'react-router-dom';
interface resultProps{
    ansCount: number,
    count: number
}
const Result:React.FC = () => {
    const location = useLocation();
    const result = location.state as resultProps;
    const deg = (a:number, b:number)=> {
        return (360*a) / (a+b)
    }
    return (
        <div>
            <h2>Result Page</h2>
            <h3 style={{color:'green', margin:"0px", padding:"5px"}}> Correct is {result.ansCount}</h3>
            <h3 style={{color:"red", margin:"0", padding:"5px"}}>Wrong ans {result.count - result.ansCount}</h3>
            <div
                style={{
                    width: "400px",
                    height: "400px",
                    backgroundImage: `conic-gradient(
                            green 0deg ${deg(result.ansCount, result.count - result.ansCount)}deg, 
                            red ${deg(result.ansCount, result.count - result.ansCount)}deg 360deg)
                            `,
                    borderRadius: "50%",
                    margin: "auto"
                }}
            />
        </div>
    );
};

export default Result;