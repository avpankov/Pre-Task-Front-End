const commentArea = document.getElementById('comment'),
    phoneArea = document.getElementById('phonenumber'),
    btn = document.querySelector('.btn');
    
let regexp = /^(\+375)(29|25|44|33)(\d{7})$/;
let div = document.createElement('div');
let tooltip = document.createElement('div');

function checkComment() {
    while (commentArea.value === '') {
        commentArea.value = 'apankov4696@gmail.com';
    }
};

function validate() {
    if (!regexp.test(phoneArea.value)) {
        div.className = 'invalid';
        div.innerText = 'Invalid number!';
        td.append(div);
    } else {
        div.className = 'valid';
        div.innerText = 'Valid number!';
        td.append(div);
    };
};

function showTooltip(e) {
  let tooltipHTML = e.target.dataset.tooltip;
  tooltip.className = 'tooltip';
  tooltip.innerHTML = tooltipHTML;
  document.body.append(tooltip);

  let coords = e.target.getBoundingClientRect();
  let left = coords.left + (e.target.offsetWidth - tooltip.offsetWidth) / 2;
  let top = coords.top - tooltip.offsetHeight - 5;

  tooltip.style.left = left + 'px';
  tooltip.style.top = top + 'px';
};

function hideTooltip(e) {
  if (tooltip) {
    tooltip.remove();
  }
};

btn.addEventListener('click', checkComment);
btn.addEventListener('click', validate);
commentArea.addEventListener('mouseover', showTooltip);
commentArea.addEventListener('mouseleave', hideTooltip);