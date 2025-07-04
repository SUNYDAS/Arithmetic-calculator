document.getElementById('btn').addEventListener('click', operation);

function operation(){
    let n1=Number(document.getElementById('x').value);
    let n2=Number(document.getElementById('y').value);
    let val=document.getElementById('result');
    let x=document.getElementById('sel').value;
    let e1=document.getElementById('er1');
    let e2=document.getElementById('er2');
    let e3=document.getElementById('er3');
    
    if(n1==''){
        e1.innerHTML="<span style='color:red;font-size:15px;'>*Fill the value</span>";
        e1.style='display:block;';
        return;
    }
    else if(n2==''){
        e2.innerHTML="<span style='color:red;font-size:15px;'>*Fill the value</span>";
         e2.style='display:block;';
        return;
    }
    else if(x==''){
        e3.innerHTML="<span style='color:red;font-size:15px;'>*Select any operation</span>";
         e3.style='display:block;';
        return;
    }
    else if (x=='ad'){
        val.innerHTML=n1+n2;
    }
    else if(x=='sb'){
        val.innerHTML=n1-n2;
    }
    else if(x=='ml'){
        val.innerHTML=n1*n2;
    }
    else if(x=='dv'){
        val.innerHTML=n1/n2;
    }

    e1.style='display:none;';
    e2.style='display:none;';
    e3.style='display:none;';

    val.classList.add('addon');
}


