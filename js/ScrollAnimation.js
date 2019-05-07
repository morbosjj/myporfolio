var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from("#project-text", .2, {y:100, opacity: 0});
tl.from(".img-project", .5, {y: 200, opacity: 0});
tl.from(".behance-label", .8, {y: 200, opacity: 100});


const scene = new ScrollMagic.Scene({
    triggerElement: ".jdev-projects",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".jdev-projects")
    .setTween(tl)
      .addTo(controller);

function updatePercentage() {
    tl.progress();
}