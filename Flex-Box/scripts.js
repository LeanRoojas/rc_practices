const candles = [1,2,4,3,2,4,3,3,4];

let candle = (candles) =>{
    let max = Math.max(...candles);
    let i =0 ;
    candles.forEach(element => {
        if(element === max) i++;
    });
    return i;
}

let i = candle(candles);