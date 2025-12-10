let x = 0;

let interval = setInterval(() => {
    console.log("Number:", x);
    x++;

    if (x === 10) {
        clearInterval(interval);
        console.log("Interval stopped.");
    }
}, 500);
