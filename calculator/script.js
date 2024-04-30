const scrn = document.querySelector('.screen');
const btns = document.querySelectorAll('.btn');
const maxDig = 15; 
let result = '';
let isResult = false;

btns.forEach(button => {
  button.addEventListener('click', e => {
    const value = e.target.textContent;
    if (value === 'C') {
      result = '';
      isResult = false;
    } else if (value === 'DEL') {
      result = result.slice(0, -1);
      isResult = false;
    } else if (value === '=') {
      try {
        result = eval(result);
        isResult = true;
      } catch {
        result = 'Error';
        isResult = true;
      }
    } else {
      if (result.length >= maxDig && !isNaN(value)) {
        return;
      }
      result += value;
      isResult = false;
    }
    if (isResult) {
      scrn.innerHTML = `<span style="color: black;">${result}</span>`;
    } else {
      scrn.textContent = result;
    }
  });
});
