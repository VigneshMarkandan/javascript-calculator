const b = document.querySelectorAll('button');
const shown = document.querySelector('.show');
let cal = [];
let ac;

function main(button) {
  const value = button.textContent;
  if (value === " clear ") {
    cal = [];
    shown.textContent = '.';
  } else if (value === " = ") {
    console.log(ac);
    shown.textContent = eval(ac);
  } else {
    cal.push(value);
    ac = cal.join('');
    console.log(ac);
    shown.textContent = ac;
  }
}

b.forEach(button => button.addEventListener('click', () => main(button)));
