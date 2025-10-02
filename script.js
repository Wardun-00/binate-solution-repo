
document.addEventListener('DOMContentLoaded', () => {
   
    const journeySection = document.getElementById('journey-section');
    const counters = document.querySelectorAll('.counter');

   
    const startCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const suffix = counter.getAttribute('data-suffix') || '';
        const duration = 2000; 
        const stepTime = 10; 

        let currentCount = 0;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;

        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                counter.innerText = target + suffix;
                clearInterval(timer);
            } else {
                counter.innerText = Math.ceil(currentCount) + suffix;
            }
        }, stepTime);
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          
            if (entry.isIntersecting) {
                
                counters.forEach(counter => startCounter(counter));
              
                observer.unobserve(journeySection);
            }
        });
    }, {
        threshold: 0.3 
    });

   
    observer.observe(journeySection);
});
