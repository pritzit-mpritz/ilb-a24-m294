import {useEffect, useState} from "react";
import {Button, Card, CardContent} from "@mui/material";

export function CounterCard() {
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        console.log("CounterCard was rendered");
        setCount(10);

        return () => {
            console.log("CounterCard was unmounted");
            setCount(0);
        }
    }, []);

    function handleClick() {
        setCount((count) => count + 1)
    }

    return (
        <Card>
            <CardContent>
                <Button variant={"outlined"} onClick={handleClick}>
                    count is {count == 0 ? 'empty' : count}
                </Button>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </CardContent>
        </Card>
    )
}