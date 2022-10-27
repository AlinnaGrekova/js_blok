function buttonClick(){
        let elem = document.getElementById('elem');
        elem.innerHTML = 'Ку-Ку! Я <b>жирный </b>';
    }


    function buttonClick1(){
        let elem1 = document.getElementById('elem1');
        elem1.innerHTML = '<h3>Абзац поменялся на h3</h3>';
    }

    function buttonClick2(){
        let elem2 = document.getElementById('elem2');
        elem2.innerHTML = '<h3>Абзац поменялся на h3, но текст остался</h3>';
    }

    function sum(){
        var num1 = Number(document.getElementById("num1").value);
        var num2 = Number(document.getElementById("num2").value);
        result = num1 + num2;
        document.getElementById('result').innerHTML=result;
    }

    function number(){
        let elems = document.querySelectorAll('.a');
        for(let i = 0; i<elems.length; i++){
            elems[i].innerHTML = i+1;
        }
    }