// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (nav.classList.contains('active')) {
                        nav.classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Property Modal
    const propertyModal = document.getElementById('propertyModal');
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    const closeModal = document.querySelector('.close-modal');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const modalMainImage = document.getElementById('modalMainImage');
    
    // Property data (in a real application, this would come from a database)
    const propertyData = {
        prop1: {
            title: "Luxury Villa with Pool",
            location: "East Legon, Accra",
            price: "GHS450,000",
            beds: 5,
            baths: 4,
            area: "3,500",
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
            description: "This stunning luxury villa offers the perfect blend of elegance and comfort. Featuring 5 spacious bedrooms, 4 modern bathrooms, a gourmet kitchen, and an expansive living area, this property is ideal for family living and entertaining. The highlight is the beautiful outdoor pool and landscaped garden, providing a private oasis in the heart of East Legon. The property also includes a two-car garage, security system, and is located within minutes of top schools, shopping centers, and restaurants."
        },
        prop2: {
            title: "Modern Apartment",
            location: "Airport Residential, Accra",
            price: "GHS1,200/month",
            beds: 2,
            baths: 2,
            area: "1,200",
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            description: "Experience urban living at its finest in this contemporary apartment located in the prestigious Airport Residential area. This stylish 2-bedroom, 2-bathroom unit features an open-concept living and dining area, a fully equipped kitchen with stainless steel appliances, and a private balcony with city views. The building offers amenities including 24/7 security, a fitness center, and a rooftop lounge. Conveniently located near the Kotoka International Airport, shopping malls, and international schools, this rental is perfect for professionals or small families."
        },
        prop3: {
            title: "Spacious Family Home",
            location: "Cantonments, Accra",
            price: "GHS320,000",
            beds: 4,
            baths: 3,
            area: "2,800",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            description: "This charming family home in the prestigious Cantonments neighborhood offers 4 bedrooms, 3 bathrooms, and generous living spaces perfect for growing families. The property features a well-designed kitchen, separate dining area, and a cozy family room. The master suite includes a walk-in closet and en-suite bathroom. Outside, you'll find a covered patio and a beautifully landscaped yard. Located in a quiet, family-friendly community with excellent schools nearby, this home provides the perfect balance of comfort, convenience, and value."
        },
        prop4: {
            title: "Beachfront Villa",
            location: "Labadi, Accra",
            price: "GHS650,000",
            beds: 6,
            baths: 5,
            area: "4,200",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
            description: "Experience luxury coastal living in this magnificent beachfront villa with direct access to the pristine shores of Labadi Beach. This exceptional property features 6 bedrooms, 5 bathrooms, and expansive living areas with floor-to-ceiling windows that capture breathtaking ocean views. The gourmet kitchen is equipped with high-end appliances, and the master suite offers a private balcony overlooking the water. Outside, enjoy the infinity pool, covered outdoor kitchen, and beautifully landscaped grounds. This rare beachfront property combines privacy, luxury, and an unbeatable location."
        },
        prop5: {
            title: "Luxury Apartment with View",
            location: "Ridge, Accra",
            price: "GHS1,800/month",
            beds: 3,
            baths: 2,
            area: "1,800",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
            description: "Indulge in upscale living in this premium 3-bedroom apartment in the exclusive Ridge neighborhood. This sophisticated residence features high ceilings, premium finishes, and an open floor plan bathed in natural light. The gourmet kitchen includes custom cabinetry and top-of-the-line appliances. The master suite offers a spa-like bathroom and walk-in closet. Building amenities include a concierge service, swimming pool, fitness center, and secure parking. With its central location and proximity to diplomatic missions, international organizations, and fine dining, this rental offers an unparalleled lifestyle."
        },
        prop6: {
            title: "Commercial Office Space",
            location: "Osu, Accra",
            price: "GHS280,000",
            beds: 8,
            baths: 4,
            area: "2,500",
            image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d",
            description: "Prime commercial property in the bustling business district of Osu. This versatile office space features 8 separate rooms, 4 restrooms, a reception area, and a conference room. The property has been recently renovated with modern finishes, efficient lighting, and a reliable HVAC system. With its strategic location on a high-traffic street, ample parking, and proximity to banks, restaurants, and government offices, this property represents an excellent investment opportunity for businesses looking to establish a presence in one of Accra's most vibrant commercial areas."
        }
    };
    
    // Open property modal with details
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const propertyId = this.getAttribute('data-id');
            const property = propertyData[propertyId];
            
            if (property) {
                document.getElementById('modalPropertyTitle').textContent = property.title;
                document.getElementById('modalLocation').textContent = property.location;
                document.getElementById('modalPrice').textContent = property.price;
                document.getElementById('modalBeds').textContent = property.beds;
                document.getElementById('modalBaths').textContent = property.baths;
                document.getElementById('modalArea').textContent = property.area;
                document.getElementById('modalDescription').textContent = property.description;
                document.getElementById('modalMainImage').src = property.image;
                
                propertyModal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            }
        });
    });
    
    // Close modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            propertyModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        });
    }
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === propertyModal) {
            propertyModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Change main image when clicking on thumbnails
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            modalMainImage.src = this.src;
        });
    });
    
    // Testimonial Slider
    const testimonialDots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        const testimonials = document.querySelectorAll('.testimonial');
        
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
        
        testimonialDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentTestimonial = index;
            showTestimonial(currentTestimonial);
        });
    });
    
    // Auto-rotate testimonials
    setInterval(function() {
        currentTestimonial = (currentTestimonial + 1) % testimonialDots.length;
        showTestimonial(currentTestimonial);
    }, 5000);
    
    // Initialize first testimonial
    showTestimonial(0);
    
    // Payment Modal
    const paymentModal = document.getElementById('paymentModal');
    const makeOfferBtn = document.querySelector('.make-offer');
    const paymentTabs = document.querySelectorAll('.payment-tab');
    const paymentContents = document.querySelectorAll('.payment-tab-content');
    const closePaymentModal = paymentModal.querySelector('.close-modal');
    
    // Open payment modal
    if (makeOfferBtn) {
        makeOfferBtn.addEventListener('click', function() {
            const propertyTitle = document.getElementById('modalPropertyTitle').textContent;
            const propertyPrice = document.getElementById('modalPrice').textContent;
            
            // Set payment details
            document.getElementById('paymentAmount').value = propertyPrice;
            document.getElementById('paymentProperty').value = propertyTitle;
            document.getElementById('cardPaymentAmount').value = propertyPrice;
            document.getElementById('bankPaymentAmount').value = propertyPrice;
            
            // Show payment modal
            paymentModal.style.display = 'block';
        });
    }
    
    // Close payment modal
    if (closePaymentModal) {
        closePaymentModal.addEventListener('click', function() {
            paymentModal.style.display = 'none';
        });
    }
    
    // Payment tabs functionality
    paymentTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const paymentType = this.getAttribute('data-payment');
            
            // Update active tab
            paymentTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            paymentContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === paymentType + '-content') {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Mobile Money Form Submission
    const mobileMoneyForm = document.getElementById('mobileMoneyForm');
    
    if (mobileMoneyForm) {
        mobileMoneyForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const provider = this.provider.value;
            const phone = this.phone.value;
            const amount = this.amount.value;
            
            // In a real application, you would send this data to your server
            // For demo purposes, we'll just show an alert
            alert(`Payment request sent! You will receive a prompt on your phone (${phone}) to confirm payment of ${amount} via ${provider}.`);
            
            // Close the modal after submission
            paymentModal.style.display = 'none';
        });
    }
    
    // Card Payment Form Submission
    const cardPaymentForm = document.getElementById('cardPaymentForm');
    
    if (cardPaymentForm) {
        cardPaymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would process the card payment
            // For demo purposes, we'll just show an alert
            alert('Card payment processed successfully!');
            
            // Close the modal after submission
            paymentModal.style.display = 'none';
        });
    }
    
    // Bank Transfer Form Submission
    const bankTransferForm = document.getElementById('bankTransferForm');
    
    if (bankTransferForm) {
        bankTransferForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would process the bank transfer details
            // For demo purposes, we'll just show an alert
            alert('Bank transfer details submitted successfully! Our team will verify your payment and contact you shortly.');
            
            // Close the modal after submission
            paymentModal.style.display = 'none';
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.name.value;
            const email = this.email.value;
            const subject = this.subject.value;
            const message = this.message.value;
            
            // In a real application, you would send this data to your server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been sent. We'll get back to you shortly at ${email}.`);
            
            // Reset the form
            this.reset();
        });
    }
    
    // Scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollBtn);
    
    // Style the button
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.width = '50px';
    scrollBtn.style.height = '50px';
    scrollBtn.style.borderRadius = '50%';
    scrollBtn.style.backgroundColor = 'var(--secondary-color)';
    scrollBtn.style.color = '#fff';
    scrollBtn.style.border = 'none';
    scrollBtn.style.fontSize = '1.2rem';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    scrollBtn.style.zIndex = '999';
    scrollBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add animation to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.property-card, .service-card, .about-content, .testimonial, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll('.property-card, .service-card, .about-content, .testimonial, .contact-content');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run animation on initial load
    animateOnScroll();
});
