
butRavno = document.querySelector('.ravno');
otvet = document.querySelector('.otvet');
document.getElementById("result");

butPlus = document.querySelector('.plus');
butMinus = document.querySelector('.minus');
butDel = document.querySelector('.del');
butUmn = document.querySelector('.umn');

const c = document.querySelector('.img1');
const idshnik = document.getElementById("but");


function ShowImg() {

	if (c.style.display == 'none') 
	{
		c.style.display='block';
		idshnik.innerText ="закрыть"
		idshnik.style.color = "red";
		
	} 
	else if (c.style.display != 'none') 
	{
		c.style.display='none'; 
		idshnik.innerText ="открыть"
		idshnik.style.color = "green";
	}
}


butPlus.onclick = function Sum()
{
	const a = document.querySelector('.num1').value;
	const b = document.querySelector('.num2').value;
	let result = parseInt(a) + parseInt(b);
	otvet.value = result;
	
}


butMinus.onclick = function Minus()
{
	const a = document.querySelector('.num1').value;
	const b = document.querySelector('.num2').value;
	let result = parseInt(a) - parseInt(b);
	otvet.value = result;
	
}

butDel.onclick = function Delit()
{
	const a = document.querySelector('.num1').value;
	const b = document.querySelector('.num2').value;
	let result = parseInt(a) / parseInt(b);
	otvet.value = result;
	
}

butUmn.onclick = function Proizv()
{
	const a = document.querySelector('.num1').value;
	const b = document.querySelector('.num2').value;
	let result = parseInt(a) * parseInt(b);
	otvet.value = result;
	
}


