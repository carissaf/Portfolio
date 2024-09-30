const sections: NodeListOf<Element> = document.querySelectorAll(".section-scroll");
let currentSectionIndex: number = 0;
let isThrottled: boolean = false;
const navbar = document.querySelector("nav");

const isMobile = () => {
    return window.innerWidth <= 1668;
};

if(!isMobile()){

    document.addEventListener("wheel", (event: WheelEvent): void =>{
        event.preventDefault();

        if(isThrottled) return;

        const delta = Math.sign(event.deltaY); //sign returns -1 if number is negative and 1 if number is positive
        if(delta > 0){ //scroll down
            goToNextSection();
        }else if(delta < 0){ //scroll up
            goToPrevSection();
        }

        throttleScroll()
    },{ passive: false })
}

const throttleScroll = ()=>{
    console.log("throtltltlelelel")
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
    if(currentSectionIndex == sections.length - 1){
        navbar?.classList.add("opacity-0");
    }else navbar?.classList.remove("opacity-0");

    sections[currentSectionIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}