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

    else {
        // const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters ** 2)).toFixed(2);

        // showing the results
        results.innerHTML = `<span>${bmi}</span>`;

        console.log('BMI:', bmi);

        if (bmi < 18.6) {
            document.body.style.backgroundColor = '#FFD700';
            document.body.style.color = '#000000';
            console.log('Background color set to yellow');

        } else if (bmi >= 18.6 && bmi <= 24.9) {
            document.body.style.backgroundColor = '#32CD32';
            console.log('Background color set to green');

        } else {
            document.body.style.backgroundColor = '#FF4500';
            document.body.style.color = '#FFFFFF';
            console.log('Background color set to red');
        }
    }

})
