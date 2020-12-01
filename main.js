function buttonClick(mode){
    switch (mode) {
        case 'bin-density':
            binDensity();
            break;
        case 'kumul-density':
            accumulatedDensity();
            break;
    }
}

function binDensity(){
    const k = document.getElementById('k').value;
    const n = document.getElementById('n').value;
    const p = document.getElementById('p').value;
    const len = document.getElementById('len').value;

    let result = binomialDistribution(k, n, p)
    let resString = `P(X = ${k}) = ${result.toPrecision(len)}`;
    displayRes(resString);
}
function accumulatedDensity() {
    const k = document.getElementById('k').value;
    const n = document.getElementById('n').value;
    const p = document.getElementById('p').value;
    const len = document.getElementById('len').value;

    let accumulation = 0;
    for (let i = k; i >= 0; i--) {
        let current = binomialDistribution(i, n, p);
        accumulation += current;
    }
    const resStr = `P(X <= ${k}) = ${accumulation.toPrecision(len)}`;
    displayRes(resStr);
}

function binomialDistribution(k, n, p){
    return n_over_k(k,  n) * Math.pow(p, k) * Math.pow((1 - p), n - k);
}


function n_over_k(k, n) {
    return (factorial(n) / (factorial(k) * (factorial(n - k))));
}

function factorial(num) {
    if (num < 0)
        return -1;
    else if (num === 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}

function displayRes(res){
    document.querySelector('#res').style.display = 'block';
    document.getElementById('resBox').innerText = res;
}