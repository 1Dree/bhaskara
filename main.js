const input = document.querySelectorAll('input'),
    calculate = document.querySelector('#calculate'),
    resultArea = document.querySelector('#result');

function bhask(a, b, c) {
    const d = ((b ** 2) - 4 * a) * c;

    if (d < 0) {
        alert('numero imaginário');
    } else {
        const x1 = (-b + Math.sqrt(d)) / 2 * a,
            x2 = (-b - Math.sqrt(d)) / 2 * a;

        return precise(x1, x2);
    }
}

function precise(...nums) {
    const toAll = nums.map(num => {
        return (parseFloat(num).toPrecision(2));
    });

    console.log(toAll);

    return toAll;
}

function validation() {
    const resultCalc = bhask(input[0].value, input[1].value, input[2].value);
    resultArea.textContent = '';

    resultCalc.forEach(x => {
        (x === 'NaN') ? resultArea.innerHTML =
            '<h3>Um dos campos não foi preenchido corretamente.</h3>' :
            resultArea.innerHTML = `<h2>x1 = ${resultCalc[0]}<br> x2 = ${resultCalc[1]}</h2>`
    })
}

calculate.addEventListener('click', validation);