var input = document.getElementById('input');

function dis(num) {
    if (input.value == "0") {
        input.value = "";
        input.value += num;
          document.getElementById('persen').style.pointerEvents = 'auto';
          document.getElementById('muduls').style.pointerEvents = 'auto'; document.getElementById('multipul').style.pointerEvents = 'auto'; document.getElementById('subtract').style.pointerEvents = 'auto'; document.getElementById('plus').style.pointerEvents = 'auto';
    } else {
        input.value += num;
        document.getElementById('persen').style.pointerEvents = 'auto';
        document.getElementById('muduls').style.pointerEvents = 'auto'; document.getElementById('multipul').style.pointerEvents = 'auto'; document.getElementById('subtract').style.pointerEvents = 'auto'; document.getElementById('plus').style.pointerEvents = 'auto';
    }
    
  
}


function block() {
    document.getElementById('persen').style.pointerEvents = 'none';
    document.getElementById('muduls').style.pointerEvents = 'none'; document.getElementById('multipul').style.pointerEvents = 'none'; document.getElementById('subtract').style.pointerEvents = 'none'; document.getElementById('plus').style.pointerEvents = 'none';
}

function solve() {
    input.value = eval(input.value);
}

function allclr() {
    input.value = 0;
}

function oneclr() {
    var str = input.value;
    var newinput = str.substring(0, str.length - 1);
    if (newinput == "") {
        input.value = "0";
    } else {
        input.value = newinput;
    }

}
