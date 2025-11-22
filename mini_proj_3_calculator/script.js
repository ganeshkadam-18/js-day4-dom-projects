let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let res = document.getElementById("result");

document.getElementById("add").onclick = () => {
    res.innerText = Number(n1.value) + Number(n2.value);
}

document.getElementById("sub").onclick = () => {
    res.innerText = Number(n1.value) - Number(n2.value);
}

document.getElementById("mul").onclick = () => {
    res.innerText = Number(n1.value) * Number(n2.value);
}

document.getElementById("div").onclick = () => {
    res.innerText = Number(n1.value) / Number(n2.value);
}
