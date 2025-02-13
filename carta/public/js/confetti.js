var confetti = {
    maxCount: 150,
    speed: -20,
    frameInterval: 15,
    alpha: 1.0,
    gradient: false,
    start: null,
    stop: null,
    toggle: null,
    pause: null,
    resume: null,
    togglePause: null,
    remove: null,
    isPaused: null,
    isRunning: null
};

(function() {
    confetti.start = startConfetti;
    confetti.stop = stopConfetti;
    confetti.toggle = toggleConfetti;
    confetti.pause = pauseConfetti;
    confetti.resume = resumeConfetti;
    confetti.togglePause = toggleConfettiPause;
    confetti.isPaused = isConfettiPaused;
    confetti.remove = removeConfetti;
    confetti.isRunning = isConfettiRunning;

    var supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
    var colors = ["#FF0000", "#FF1493", "#FF69B4", "#DC143C", "#C71585"];
    var streamingConfetti = false;
    var animationTimer = null;
    var pause = false;
    var lastFrameTime = Date.now();
    var particles = [];
    var waveAngle = 0;
    var context = null;

    function resetParticle(particle, width, height) {
        particle.color = colors[(Math.random() * colors.length) | 0];
        particle.x = Math.random() * width;
        particle.y = Math.random() * height - height;
        particle.size = Math.random() * 15 + 10;
        particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        particle.tiltAngle = Math.random() * Math.PI;
        return particle;
    }

    function drawHeart(ctx, x, y, size, color) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y + size / 4);
        ctx.quadraticCurveTo(x, y, x + size / 4, y);
        ctx.quadraticCurveTo(x + size / 2, y, x + size / 2, y + size / 4);
        ctx.quadraticCurveTo(x + size / 2, y + size / 2, x, y + size);
        ctx.quadraticCurveTo(x - size / 2, y + size / 2, x - size / 2, y + size / 4);
        ctx.quadraticCurveTo(x - size / 2, y, x - size / 4, y);
        ctx.quadraticCurveTo(x, y, x, y + size / 4);
        ctx.fill();
    }

    function drawParticles(context) {
        for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            drawHeart(context, particle.x, particle.y, particle.size, particle.color);
        }
    }

    function updateParticles() {
        var width = window.innerWidth;
        var height = window.innerHeight;
        var particle;
        waveAngle += 0.01;
        for (var i = 0; i < particles.length; i++) {
            particle = particles[i];
            if (!streamingConfetti && particle.y < -15) {
                particle.y = height + 100;
            } else {
                particle.tiltAngle += particle.tiltAngleIncrement;
                particle.x += Math.sin(waveAngle) * 2;
                particle.x += Math.sin(waveAngle) * 2 + (Math.random() - 0.5) * 3;
            }
            if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
                if (streamingConfetti && particles.length <= confetti.maxCount)
                    resetParticle(particle, width, height);
                else {
                    particles.splice(i, 1);
                    i--;
                }
            }
        }
    }

    function startConfetti(timeout, min, max) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        window.requestAnimationFrame = (function() {
            return window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) {
                    return window.setTimeout(callback, confetti.frameInterval);
                };
        })();
        var canvas = document.getElementById("confetti-canvas");
        if (canvas === null) {
            canvas = document.createElement("canvas");
            canvas.setAttribute("id", "confetti-canvas");
            canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none;position:fixed;top:0");
            document.body.prepend(canvas);
            canvas.width = width;
            canvas.height = height;
            window.addEventListener("resize", function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }, true);
            context = canvas.getContext("2d");
        } else if (context === null)
            context = canvas.getContext("2d");
        var count = confetti.maxCount;
        if (min) {
            if (max) {
                if (min == max)
                    count = particles.length + max;
                else {
                    if (min > max) {
                        var temp = min;
                        min = max;
                        max = temp;
                    }
                    count = particles.length + ((Math.random() * (max - min) + min) | 0);
                }
            } else
                count = particles.length + min;
        } else if (max)
            count = particles.length + max;
        while (particles.length < count)
            particles.push(resetParticle({}, width, height));
        streamingConfetti = true;
        pause = false;
        runAnimation();
        if (timeout) {
            window.setTimeout(stopConfetti, timeout);
        }
    }

    function stopConfetti() {
        streamingConfetti = false;
    }

    function removeConfetti() {
        stop();
        pause = false;
        particles = [];
    }

    function toggleConfetti() {
        if (streamingConfetti)
            stopConfetti();
        else
            startConfetti();
    }

    function toggleConfettiPause() {
        if (pause)
            resumeConfetti();
        else
            pauseConfetti();
    }

    function isConfettiPaused() {
        return pause;
    }

    function pauseConfetti() {
        pause = true;
    }

    function resumeConfetti() {
        pause = false;
        runAnimation();
    }

    function isConfettiRunning() {
        return streamingConfetti;
    }

    function runAnimation() {
        if (pause)
            return;
        else if (particles.length === 0) {
            context.clearRect(0, 0, window.innerWidth, window.innerHeight);
            animationTimer = null;
        } else {
            var now = Date.now();
            var delta = now - lastFrameTime;
            if (!supportsAnimationFrame || delta > confetti.frameInterval) {
                context.clearRect(0, 0, window.innerWidth, window.innerHeight);
                updateParticles();
                drawParticles(context);
                lastFrameTime = now - (delta % confetti.frameInterval);
            }
            animationTimer = requestAnimationFrame(runAnimation);
        }
    }
})();
