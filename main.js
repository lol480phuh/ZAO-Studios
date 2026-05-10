(function() {
      (function() {
          // Get all the FAQ elements.
        // Initially hide all the answers and set their height to 0.
        gsap.set('.faq-answer', { autoAlpha: 0, height: 0 });
        gsap.set('.faq-icon svg', { rotate: 0 });
        const faqs = gsap.utils.toArray('.faq');
        /**
         * Listen for click event on each FAQ.
         * 1. Toggle the visibility of the answer
         * 2. Rotate the icon
         * 3. Animate the height of the answer
         */
        faqs.forEach(faq => {
            const question = faq.querySelector('.faq-question');
            const answer = faq.querySelector('.faq-answer');
            const icon = faq.querySelector('.faq-icon svg');

            // create timeline.
            let tl = gsap.timeline({ paused: true });
            tl.to(answer, { duration: .25, autoAlpha: 1, height: 'auto', visibility: 'visible', ease: "power1.out" });
            tl.to(icon, { rotate: 180, duration: 0.3, ease: "linear" }, "-=0.05");

            // Reset the timeline.
            tl.reverse();

            faq.addEventListener('click', () => {
                tl.reversed(!tl.reversed());
            });
        });

        })();

    })();