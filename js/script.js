


function showInputs(){
    // let labelA = document.querySelector('#labelA').innerHTML;
    // let labelB = document.querySelector('#labelB').innerHTML;

    if(circle.checked == true){
        console.log('is circle')
        
        document.querySelector('.sub_container_inputs_circle').style.display = 'flex';
        document.querySelector('.sub_container_inputs_square').style.display = 'none';
        document.querySelector('.sub_container_inputs_triangle').style.display = 'none';
        document.querySelector('.sub_container_inputs_sphere').style.display = 'none';
        document.querySelector('.sub_container_inputs_cube').style.display = 'none';

        document.querySelector('.container_showResults').style.display = 'flex';
        document.querySelector('#container_showResults_volume').style.display = 'none';
    }
    else if(square.checked == true){
        console.log('is square')
        document.querySelector('.sub_container_inputs_circle').style.display = 'none';
        document.querySelector('.sub_container_inputs_square').style.display = 'flex';
        document.querySelector('.sub_container_inputs_triangle').style.display = 'none';
        document.querySelector('.sub_container_inputs_sphere').style.display = 'none';
        document.querySelector('.sub_container_inputs_cube').style.display = 'none';
        
        document.querySelector('.container_showResults').style.display = 'flex';
        document.querySelector('#container_showResults_volume').style.display = 'none';
    }
    else if(triangle.checked == true){
        console.log('is triangle')

        document.querySelector('.sub_container_inputs_circle').style.display = 'none';
        document.querySelector('.sub_container_inputs_square').style.display = 'none';
        document.querySelector('.sub_container_inputs_triangle').style.display = 'flex';
        document.querySelector('.sub_container_inputs_sphere').style.display = 'none';
        document.querySelector('.sub_container_inputs_cube').style.display = 'none';

        document.querySelector('.container_showResults').style.display = 'flex';
        document.querySelector('#container_showResults_volume').style.display = 'none';
    }
    else if(sphere.checked == true){
        console.log('is sphere')
        document.querySelector('.sub_container_inputs_circle').style.display = 'none';
        document.querySelector('.sub_container_inputs_square').style.display = 'none';
        document.querySelector('.sub_container_inputs_triangle').style.display = 'none';
        document.querySelector('.sub_container_inputs_sphere').style.display = 'flex';
        document.querySelector('.sub_container_inputs_cube').style.display = 'none';
        document.querySelector('#container_showResults_volume').style.display = 'none';

        document.querySelector('.container_showResults').style.display = 'none';
        document.querySelector('#container_showResults_volume').style.display = 'flex';
    }
    else if(cube.checked == true){
        console.log('is cube')
        document.querySelector('.sub_container_inputs_circle').style.display = 'none';
        document.querySelector('.sub_container_inputs_square').style.display = 'none';
        document.querySelector('.sub_container_inputs_triangle').style.display = 'none';
        document.querySelector('.sub_container_inputs_sphere').style.display = 'none';
        document.querySelector('.sub_container_inputs_cube').style.display = 'flex';
        
        document.querySelector('.container_showResults').style.display = 'none';
        document.querySelector('#container_showResults_volume').style.display = 'flex';
    }
}


document.getElementById("submitOperation").addEventListener("click", operation);
function operation(){

    const circle = document.querySelector('#circle');
    const square = document.querySelector('#square');
    const triangle = document.querySelector('#triangle');
    const sphere = document.querySelector('#sphere');
    const cube = document.querySelector('#cube');
    
    const buttonSelected = document.getElementsByName('figures').checked;
    
    if(circle.checked == true){
        console.log('is circle')
        const inputA = document.querySelector('#inputCircleA').value;
        const inputB = document.querySelector('#inputCircleB').value;
        const results_field_one = document.querySelector('#result_output_one');
        const results_field_two = document.querySelector('#result_output_two');

        if(inputA == '' || inputB == ''){
            let showError = document.querySelector('#error_NaN')
            alert('Error. You must enter numeric type values')
        }
        else{
            // * OPERATIONS MATHEMATIC
            // * OPERATIONS MATHEMATIC
            let results_one = Math.pow(parseFloat(inputA), 2);
            results_field_one.innerHTML = `${results_one}`

            let results_two = parseFloat(inputB) * Math.PI
            results_two = parseFloat(results_two.toFixed(2))
            results_field_two.innerHTML = `${results_two}` 
        }
    }
    else if(square.checked == true){
        console.log('is square')
        const inputA = document.querySelector('#inputSquareA').value;
        const inputB = document.querySelector('#inputSquareB').value;
        const results_field_one = document.querySelector('#result_output_one');
        const results_field_two = document.querySelector('#result_output_two');

        if( inputA == '' && inputB == ''){
            alert('Error. You must enter numeric type values')
        }
        else{
            // * OPERATIONS MATHEMATIC
            // * OPERATIONS MATHEMATIC
            let results_one = parseFloat(inputA) + parseFloat(inputB);
            results_one = parseFloat(results_one.toFixed(2))
            results_field_one.innerHTML = `${results_one}` 

            let results_two = parseFloat(inputA) * parseFloat(inputB)
            results_two = parseFloat(results_two.toFixed(2))
            results_field_two.innerHTML = `${results_two}` 
        }
    }
    else if(triangle.checked == true){
        console.log('is triangle')
        const inputA = document.querySelector('#inputTriangleA').value;
        const inputB = document.querySelector('#inputTriangleB').value;
        const inputBase = document.querySelector('#inputTriangleBase').value;
        const inputHeight = document.querySelector('#inputTriangleHeight').value;
        const results_field_one = document.querySelector('#result_output_one');
        const results_field_two = document.querySelector('#result_output_two');

        if(inputA == '' || inputB == '' || inputBase == '' || inputHeight == ''){
            alert('Error. You must complete the fields and enter numeric type values')
        }
        else{
            // * OPERATIONS MATHEMATIC
            // * OPERATIONS MATHEMATIC
            let results_one = parseFloat(inputA) + parseFloat(inputB) + parseFloat(inputBase);
            results_one = parseFloat(results_one.toFixed(2))
            results_field_one.innerHTML = `${results_one}`


            let results_two = parseFloat(inputBase) * parseFloat(inputHeight) / 2; 
            results_two = parseFloat(results_two.toFixed(2))
            results_field_two.innerHTML = `${results_two}`
        }

    }
    else if(sphere.checked == true){
        console.log('is sphere')
        const inputA = document.querySelector('#inputSphereA').value;
        const results_field_one = document.querySelector('#result_output_one_volume');
        const results_field_two = document.querySelector('#result_output_two_volume');


        if(inputA == ''){
            alert('Error. You must complete the fields and enter numeric type values')
        }
        else{
            // * OPERATIONS MATHEMATIC
            // * OPERATIONS MATHEMATIC
            let results_one = parseFloat(4) * Math.PI * parseFloat(inputA);
            results_one = parseFloat(results_one.toFixed(2));
            results_field_one.innerHTML = `${results_one}`;

            let results_two = (4/3) * Math.PI * Math.pow(inputA, 3);
            results_two = parseFloat(results_two.toFixed(2))
            results_field_two.innerHTML = `${results_two}` 
        }
    }
    else if(cube.checked == true){
        console.log('is cube')
        const inputA = document.querySelector('#inputCubeA').value;
        const results_field_one = document.querySelector('#result_output_one_volume');
        const results_field_two = document.querySelector('#result_output_two_volume');

        if(inputA == ''){
            alert('Error. You must complete the fields and enter numeric type values')
        }
        else{
            // * OPERATIONS MATHEMATIC
            // * OPERATIONS MATHEMATIC
            let results_one = Math.pow(parseFloat(inputA), 3);
            results_one = parseFloat(results_one.toFixed(2))
            results_field_one.innerHTML = `${results_one}`


            let results_two = 6 * parseFloat(inputA) * parseFloat(inputA); 
            results_two = parseFloat(results_two.toFixed(2))
            results_field_two.innerHTML = `${results_two}` 
        }
    }
}
