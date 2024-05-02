const marquee = document.querySelector('.marquee');
function animateMarquee() {
  const marqueeWidth = marquee.offsetWidth;
  
  const textWidth = marquee.firstElementChild.offsetWidth;

  const duration =(textWidth + marqueeWidth) / 20;
  marquee.computedStyleMap.animationDuration = duration + 's'
  marquee.computedStyleMap.animationIterationCount = 'infinite';

  marquee.classList.add('marquee-animate');

  animateMarquee();
}