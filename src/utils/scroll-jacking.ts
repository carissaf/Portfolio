const sections: NodeListOf<Element> = document.querySelectorAll(".section-scroll");
let currentSectionIndex: number = 0;
let isThrottled: boolean = false;
const navbar = document.querySelector("nav");
let deltaSum = 0;
const isMobile = () => {
    return window.innerWidth <= 1668;
};
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

if(!isMobile()){

    document.addEventListener("wheel", (event: WheelEvent): void =>{
        event.preventDefault();

        accumulateAndScroll(event.deltaY);
    },{ passive: false })

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    currentSectionIndex = Array.from(sections).indexOf(entry.target); //entry.target -> dom element that is currently in view
                    updateNavbarVisibility();
                }
            });
        },
        { threshold: 0.5 } // trigger when 50% of the section is visible
    );

// observe each sections
    sections.forEach((section) => observer.observe(section));
}

const accumulateAndScroll = (deltaY: number) => {
    deltaSum += deltaY;

    // if theres already an ongoing timeout clear then reset the timer
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        if (Math.abs(deltaSum) > 50) { //threshold of 50
            const direction = Math.sign(deltaSum); // 1 = down, -1 = up

            if (!isThrottled) {
                if (direction > 0) {
                    goToNextSection();
                } else {
                    goToPrevSection();
                }
                throttleScroll();
            }
        }
        deltaSum = 0; // reset to 0
    }, 10);
};


const throttleScroll = ()=>{
    isThrottled = true;
    setTimeout(()=>{
        isThrottled = false;
    }, 1000)
}

const goToNextSection = () => {
    if(currentSectionIndex < sections.length-1) {
        currentSectionIndex++;
        scrollToSection(currentSectionIndex);
    }
}

const goToPrevSection = () => {
    if(currentSectionIndex > 0) {
        currentSectionIndex--;
        scrollToSection(currentSectionIndex);
    }
}

const scrollToSection = (currentSectionIndex: number) => {
    console.log(currentSectionIndex);
    updateNavbarVisibility();

    sections[currentSectionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}

const updateNavbarVisibility = () => {
    if (currentSectionIndex === sections.length - 1) {
        navbar?.classList.add("opacity-0", "invisible");
    } else {
        navbar?.classList.remove("opacity-0", "invisible");
    }

};