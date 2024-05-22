const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        // alert ('Please give a valid height');
        results.innerHTML = `Please give a valid height ${height}`;
    }

    else if (weight === '' || weight < 0 || isNaN(weight)) {
        // alert ('Please give a valid height');
        results.innerHTML = `Please give a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height*weight)/10000)).toFixed(2);

        // showing the results
        results.innerHTML = `<span>${bmi}</span>`
    }
})
