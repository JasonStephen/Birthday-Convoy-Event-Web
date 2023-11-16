// 获取当前URL中的锚点值
const currentHash = window.location.hash;
// 如果当前URL中存在锚点值，则将锚点值移除并重新加载页面
if (currentHash) {
  window.location.replace(window.location.href.split('#')[0]);
}

/* guide alpha */
const targetDiv1 = document.querySelector('.index-div-p1 img');
const colorChangeDiv1 = document.querySelector('#guide-div-color');
const observer1 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    colorChangeDiv1.classList.remove('changed');
  } else {
    colorChangeDiv1.classList.add('changed');
  }
}, { threshold: 0 });

observer1.observe(targetDiv1);

/* show it 1*/
const targetDiv2 = document.querySelector('.showit');
const colorChangeDiv2 = document.querySelector('#showchange');
const observer2 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    colorChangeDiv2.classList.add('changed');
  }
  else
  {
    /* colorChangeDiv2.classList.remove('changed'); */
  }
}, { threshold: 0 });

observer2.observe(targetDiv2);

/* show it 2*/
const targetDiv3 = document.querySelector('.showit2');
const colorChangeDiv3 = document.querySelector('#showchange2');
const observer3 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    colorChangeDiv3.classList.add('changed');
  }
}, { threshold: 0 });

observer3.observe(targetDiv3);

/* show it 3*/
const targetDiv4 = document.querySelector('.showit3');
const colorChangeDiv4 = document.querySelector('#showchange3');
const observer4 = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    colorChangeDiv4.classList.add('changed');
  }
}, { threshold: 0 });

observer4.observe(targetDiv4);