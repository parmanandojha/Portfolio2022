
gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.c-loader-text');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.j-loader'), { autoAlpha: 0 });

  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.c-service-wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5
    } });
  });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);



const myText = new SplitType('#j-hero')
 

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.50,
    duration: .1
})

const text = document.querySelector("#j-hero");
const strText =text.textContent;
const splitText = splitText.split("");

text.textContent = "";

for(let i=0; i <splitText.length; i++ ){
  text.innerHTML+="<span>" +splitText[i]+"</span>";
}

let char = 0;
let timer =setInterval(onTick, 50);


function onTrick(){
  const span = text.querySelector('#span')[char];
  span.classList.add('fade');
  char++;
  if(char == splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer=null;
}