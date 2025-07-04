document.getElementById('btn').addEventListener('click', calculate);

function calculate() {
    let xInput = document.getElementById('x').value.trim();
    let yInput = document.getElementById('y').value.trim();
    let operation = document.getElementById('sel').value;
    let val = document.getElementById('result');

    let e1 = document.getElementById('er1');
    let e2 = document.getElementById('er2');
    let e3 = document.getElementById('er3');

    // Reset error messages
    e1.style.display = 'none';
    e2.style.display = 'none';
    e3.style.display = 'none';

    // Validation before converting to number
    if (xInput === '') {
        e1.innerHTML = "<span style='color:red;font-size:15px;'>*Fill the value</span>";
        e1.style.display = 'block';
        val.style.display = 'none';
        return;
    }

    if (yInput === '') {
        e2.innerHTML = "<span style='color:red;font-size:15px;'>*Fill the value</span>";
        e2.style.display = 'block';
        val.style.display = 'none';
        return;
    }

    if (operation === '') {
        e3.innerHTML = "<span style='color:red;font-size:15px;'>*Select any operation</span>";
        e3.style.display = 'block';
        val.style.display = 'none';
        return;
    }

    // Convert only after validation
    let n1 = Number(xInput);
    let n2 = Number(yInput);

    // Perform operation
    if (operation === 'ad') {
        val.innerHTML = n1 + n2;
    } else if (operation === 'sb') {
        val.innerHTML = n1 - n2;
    } else if (operation === 'ml') {
        val.innerHTML = n1 * n2;
    } else if (operation === 'dv') {
        val.innerHTML = n1 / n2;
        
    }
    val.style.display = 'block';
    //display message only if no error
    
}


