'use strict';
'format es6'; // force SystemJS to transpile exercise

function write(first, ...strings) {
  const element = document.getElementById('example');

  element.innerHTML = first.toUpperCase() +
    strings.reduce((last, curr) => last + ' ' + curr, ' ')
}

write('JavaScript', 'For', 'Life');
