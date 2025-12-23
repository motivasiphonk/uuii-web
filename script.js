// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Program Detail Modal
const modal = document.getElementById('programModal');
const modalBody = document.getElementById('modalBody');

const programDetails = {
    teknik: {
        title: 'Teknik Industri',
        icon: '🏭',
        description: 'Program Studi Teknik Industri di UUII dirancang untuk menghasilkan lulusan yang mampu merancang, mengimplementasikan, dan meningkatkan sistem terintegrasi yang melibatkan manusia, material, peralatan, energi, dan informasi.',
        keunggulan: [
            'Kurikulum berbasis industri 4.0',
            'Laboratorium modern dan lengkap',
            'Kerjasama dengan industri terkemuka',
            'Dosen berpengalaman dan tersertifikasi',
            'Program magang di perusahaan multinasional'
        ],
        prospek: [
            'Industrial Engineer',
            'Production Manager',
            'Quality Assurance Manager',
            'Supply Chain Manager',
            'Operations Consultant',
            'Process Improvement Specialist'
        ],
        durasi: '4 Tahun (8 Semester)',
        gelar: 'Sarjana Teknik (S.T.)'
    },
    pertanian: {
        title: 'Pertanian',
        icon: '🌾',
        description: 'Program Studi Pertanian di UUII fokus pada pengembangan ilmu pengetahuan dan teknologi pertanian modern yang berkelanjutan untuk meningkatkan produktivitas dan kualitas hasil pertanian.',
        keunggulan: [
            'Lahan praktik dan greenhouse modern',
            'Teknologi pertanian precision farming',
            'Penelitian berbasis sustainable agriculture',
            'Kemitraan dengan petani dan agribisnis',
            'Program pemberdayaan masyarakat'
        ],
        prospek: [
            'Agricultural Consultant',
            'Farm Manager',
            'Agribusiness Entrepreneur',
            'Research & Development Specialist',
            'Agricultural Extension Officer',
            'Sustainable Agriculture Specialist'
        ],
        durasi: '4 Tahun (8 Semester)',
        gelar: 'Sarjana Pertanian (S.P.)'
    }
};

function showProgramDetail(programType) {
    const program = programDetails[programType];
    
    if (!program) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${program.icon}</div>
            <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${program.title}</h2>
            <p style="margin-bottom: 2rem; line-height: 1.8;">${program.description}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Keunggulan Program:</h3>
            <ul style="list-style: none; padding-left: 0;">
                ${program.keunggulan.map(item => `
                    <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--success-color); font-weight: bold;">✓</span>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">Prospek Karir:</h3>
            <ul style="list-style: none; padding-left: 0;">
                ${program.prospek.map(item => `
                    <li style="padding: 0.5rem 0; padding-left: 1.5rem; position: relative;">
                        <span style="position: absolute; left: 0; color: var(--warning-color); font-weight: bold;">→</span>
                        ${item}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="background-color: var(--light-color); padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem;">
            <p style="margin-bottom: 0.5rem;"><strong>Durasi Studi:</strong> ${program.durasi}</p>
            <p style="margin-bottom: 0;"><strong>Gelar Lulusan:</strong> ${program.gelar}</p>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <a href="#contact" onclick="closeModal()" style="display: inline-block; background-color: var(--primary-color); color: white; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold;">Daftar Sekarang</a>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    alert(`Terima kasih, ${name}! Pesan Anda telah diterima. Kami akan segera menghubungi Anda melalui email ${email}.`);
    
    // Reset form
    contactForm.reset();
});

// Add active class to navigation on scroll
let sections = document.querySelectorAll('section');
let navLinksScroll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksScroll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation to program cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe program cards
document.addEventListener('DOMContentLoaded', () => {
    const programCards = document.querySelectorAll('.program-card');
    programCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Observe info items
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add year to footer
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2024', currentYear);
    }
});
