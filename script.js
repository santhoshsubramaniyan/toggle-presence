'use strict;';

function toggle(e)  {
  if (e.className == 'fa-solid fa-x mark absent') {
    e.className = 'fa-solid fa-check present';
  } else {
    e.className = 'fa-solid fa-x mark absent';
  }
}
