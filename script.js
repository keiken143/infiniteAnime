Shery.imageEffect("#back", {
    style: 4,
    gooey: true,
    config: {
        a: { value: 2, range: [0, 30] },
        b: { value: -0.89, range: [-1, 1] },
        zindex: { value: -9996999, range: [-9999999, 9999999] },
        aspect: { value: 0.9548254470539219 },
        ignoreShapeAspect: { value: true },
        shapePosition: { value: { x: 0, y: 0 } },
        shapeScale: { value: { x: 0.52, y: 0.5 } },
        shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
        shapeRadius: { value: 0, range: [0, 2] },
        currentScroll: { value: 0 },
        scrollLerp: { value: 0.07 },
        gooey: { value: true },
        infiniteGooey: { value: true },
        growSize: { value: 4, range: [1, 15] },
        durationOut: { value: 1.04, range: [0.1, 5] },
        durationIn: { value: 1.04, range: [0.1, 5] },
        displaceAmount: { value: 0.5 },
        masker: { value: true },
        maskVal: { value: 1.34, range: [1, 5] },
        scrollType: { value: 0 },
        geoVertex: { range: [1, 64], value: 1 },
        noEffectGooey: { value: false },
        onMouse: { value: 0 },
        noise_speed: { value: 0.2, range: [0, 10] },
        metaball: { value: 0.27, range: [0, 2], _gsap: { id: 1 } },
        discard_threshold: { value: 0.72, range: [0, 1] },
        antialias_threshold: { value: 0, range: [0, 0.1] },
        noise_height: { value: 0.43, range: [0, 2] },
        noise_scale: { value: 11.45, range: [0, 100] }
    }
});


var elems = document.querySelectorAll(".elem");
elems.forEach(function (elem) {
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;
    document.querySelector("#main").addEventListener("click", function () {
        if (!animating) {
            animating = true;
            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: .5,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    animating = false;
                },
            });

            index === h1s.length - 1 ? (index = 0) : index++;

            gsap.to(h1s[index], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: .5,

            });
            audioPlayer.src = audioFiles[index];
            audioPlayer.play();
        };
    });
});



const audioFiles = [
    "./audio/N.mp3",
    "./audio/N.mp3",
    "./audio/DB.mp3",
    "./audio/DS.mp3",
    "./audio/JJK.mp3",
    "./audio/SXF.mp3",
    "./audio/GOW.mp3",
    "./audio/WWy.mp3",
    "./audio/YN.mp3",
  ];

  const audioPlayer = document.getElementById("player");
  const h1s = document.querySelectorAll(".elem h1");

  let index = 0;
  let animating = false;

  // 🔹 Click anywhere on window
  window.addEventListener("click", () => {
    if (!animating) {
      animating = true;

      // Animate current text out
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: "expo.inOut",
        duration: 0.5,
        onComplete: function () {
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        }
      });

      // Move to next index (loop)
      index = (index + 1) % h1s.length;

      // Animate next text in
      gsap.to(h1s[index], {
        top: "-=100%",
        ease: "expo.inOut",
        duration: 0.5
      });

      // 🎵 Stop current & play new song
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
      audioPlayer.src = audioFiles[index];
      audioPlayer.play();
    }
  });



