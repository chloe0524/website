document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("animated-text");
    const originalName = "Chloé Correia";
    const incorrectName = "ChloÃ© Correia";
    let index = 0;
    let isDeleting = false;
    let isCorrecting = false;

    function typeWriter() {
        if (!isDeleting && !isCorrecting && index < incorrectName.length) {
            nameElement.innerHTML = incorrectName.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, Math.random() * (400 - 200) + 200);
        } else if (isDeleting && index > 4) {
            nameElement.innerHTML = incorrectName.substring(0, index - 1);
            index--;
            setTimeout(typeWriter, Math.random() * (400 - 200) + 200);
        } else if (index === 4 && !isCorrecting) {
            isDeleting = false;
            isCorrecting = true;
            index = 4;
            setTimeout(typeWriter, 1000);
        } else if (isCorrecting && index < originalName.length) {
            nameElement.innerHTML = originalName.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, Math.random() * (400 - 200) + 200);
        }

        if (index === incorrectName.length && !isCorrecting) {
            isDeleting = true;
            setTimeout(typeWriter, 1000);
        }
    }

    setTimeout(typeWriter, 1000);
});