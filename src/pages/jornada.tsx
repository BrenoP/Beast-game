import { useEffect, useState } from "react";

export default function Jorney() {

    const [timeScreen, setTimeScreen] = useState(1)

    useEffect(() => {
        if(timeScreen < 3) {
            if(timeScreen === 1) {
                setTimeout(() => {
                    setTimeScreen(2)
                }, 5000)
            } else {
                setTimeout(() => {
                    setTimeScreen(3)
                }, 2000)
            }
        }
    }, [timeScreen]);

    return (
        <h1>
            {
                timeScreen === 1 ? "criatura" : 
                timeScreen === 2 ? "lutando..." : 
                "resultado" 
            }
        </h1>
    );
}