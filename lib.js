function avg(numbers){
    let s = numbers.reduce((prev, curr) => prev + curr, 0);
    return s / numbers.length;
}

function prime(num){
    if(num == 1){
        return false;
    }
    else if(num == 2){
        return true;
    }
    else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}

function fact(num){
    if(num == 0){
        return 1;
    }
    else{
        return num * fact(num - 1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}