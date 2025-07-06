// Member data for portfolio
const memberData = {
    'president': {
        name: 'Huỳnh Tuấn Hưng',
        role: 'President',
        bio: 'Tôi không biết tôi đang làm gì với cái web này nữa',
        achievements: [
            {
                title: 'Khởi xướng dự án Thưởng thức Vật lí',
                description: 'Đề xuất và thực hiện ý tưởng tạo ra một nền tảng học tập vật lí trực quan và tương tác cho học sinh THPT.'
            },
            {
                title: 'Phát triển hệ thống mô phỏng',
                description: 'Chỉ đạo việc xây dựng các công cụ mô phỏng thí nghiệm vật lí giúp học sinh dễ dàng tiếp cận và hiểu bài.'
            },
            {
                title: 'Chưa bị hạ hạnh kiểm lần nào',
                description: 'Hạnh kiểm tốt 11 năm liền'
            }
        ],
        projects: [
            {
                title: 'Website Thưởng thức Vật lí',
                description: 'Phát triển và duy trì website chính của dự án với giao diện thân thiện và tính năng đa dạng.'
            },
            {
                title: 'Hệ thống quản lý nội dung',
                description: 'Thiết kế hệ thống quản lý và phân loại các tài liệu, bài giảng và thí nghiệm.'
            }
        ],
        avatar: 'Assets/members/president.jpg',
        initials: 'HTH'
    },
    'vice-president': {
        name: 'Chưa cập nhật',
        role: 'Vice President',
        bio: 'Hỗ trợ điều hành và phát triển dự án, đóng vai trò quan trọng trong việc phối hợp các hoạt động và đảm bảo tiến độ thực hiện.',
        achievements: [
            {
                title: 'Hỗ trợ điều hành dự án',
                description: 'Phối hợp với President trong việc quản lý và điều hành các hoạt động của dự án.'
            }
        ],
        projects: [
            {
                title: 'Quản lý tiến độ',
                description: 'Theo dõi và đảm bảo tiến độ thực hiện các mục tiêu đã đề ra.'
            }
        ],
        avatar: 'Assets/members/vice-president1.jpg',
        initials: 'VP'
    },
    'pr-head': {
        name: 'Chưa cập nhật',
        role: 'Head of Public Relations',
        bio: 'Chịu trách nhiệm quản lý mối quan hệ công chúng, truyền thông và xây dựng hình ảnh thương hiệu cho dự án.',
        achievements: [
            {
                title: 'Xây dựng thương hiệu',
                description: 'Phát triển và duy trì hình ảnh thương hiệu của dự án trên các nền tảng truyền thông.'
            }
        ],
        projects: [
            {
                title: 'Chiến lược truyền thông',
                description: 'Xây dựng và triển khai các chiến dịch truyền thông hiệu quả.'
            }
        ],
        avatar: 'Assets/members/pr-head.jpg',
        initials: 'PR'
    },
    'media-head': {
        name: 'Chưa cập nhật',
        role: 'Head of Media & Design',
        bio: 'Chuyên gia về thiết kế đồ họa và sản xuất nội dung media, tạo ra những sản phẩm trực quan và hấp dẫn.',
        achievements: [
            {
                title: 'Thiết kế hệ thống visual',
                description: 'Tạo ra hệ thống nhận diện thương hiệu và giao diện người dùng thân thiện.'
            }
        ],
        projects: [
            {
                title: 'Thiết kế giao diện website',
                description: 'Phát triển giao diện người dùng hiện đại và responsive cho website.'
            }
        ],
        avatar: 'Assets/members/media-head.jpg',
        initials: 'MD'
    },
    'specialist-head': {
        name: 'Chưa cập nhật',
        role: 'Head of Specialists',
        bio: 'Chuyên gia về nội dung học thuật, chịu trách nhiệm phát triển và kiểm duyệt các tài liệu chuyên môn.',
        achievements: [
            {
                title: 'Phát triển nội dung chuyên môn',
                description: 'Biên soạn và kiểm duyệt các chuyên đề vật lí chuyên sâu.'
            }
        ],
        projects: [
            {
                title: 'Thư viện chuyên đề',
                description: 'Xây dựng kho tàng chuyên đề vật lí từ cơ bản đến nâng cao.'
            }
        ],
        avatar: 'Assets/members/specialist-head.jpg',
        initials: 'SP'
    },
    'translation-head': {
        name: 'Chưa cập nhật',
        role: 'Head of Translation',
        bio: 'Chuyên gia về dịch thuật và bản địa hóa, đảm bảo nội dung được truyền tải một cách chính xác và dễ hiểu.',
        achievements: [
            {
                title: 'Bản địa hóa nội dung',
                description: 'Dịch thuật và chuyển đổi các tài liệu quốc tế phù hợp với học sinh Việt Nam.'
            }
        ],
        projects: [
            {
                title: 'Dự án dịch thuật',
                description: 'Dịch thuật các tài liệu và công cụ học tập từ tiếng Anh sang tiếng Việt.'
            }
        ],
        avatar: 'Assets/members/translation-head.jpg',
        initials: 'TR'
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            } else {
                window.location.href = targetId;
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Team member modal functionality
    const modal = document.getElementById('memberModal');
    const closeModal = document.querySelector('.close');
    const teamMembers = document.querySelectorAll('.team-member');

    // Open modal when clicking on team member
    teamMembers.forEach(member => {
        member.addEventListener('click', function() {
            const memberType = this.getAttribute('data-member');
            const memberInfo = memberData[memberType];
            
            if (memberInfo) {
                populateModal(memberInfo);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Populate modal with member data
    function populateModal(memberInfo) {
        document.getElementById('modalName').textContent = memberInfo.name;
        document.getElementById('modalRole').textContent = memberInfo.role;
        document.getElementById('modalBio').textContent = memberInfo.bio;
        document.getElementById('modalInitials').textContent = memberInfo.initials;
        
        // Set avatar
        const modalAvatar = document.getElementById('modalAvatar');
        const modalAvatarPlaceholder = document.getElementById('modalAvatarPlaceholder');
        
        modalAvatar.src = memberInfo.avatar;
        modalAvatar.onerror = function() {
            modalAvatar.style.display = 'none';
            modalAvatarPlaceholder.style.display = 'flex';
        };
        modalAvatar.onload = function() {
            modalAvatar.style.display = 'block';
            modalAvatarPlaceholder.style.display = 'none';
        };

        // Populate achievements
        const achievementsList = document.getElementById('modalAchievements');
        achievementsList.innerHTML = '';
        memberInfo.achievements.forEach(achievement => {
            const achievementItem = document.createElement('div');
            achievementItem.className = 'achievement-item';
            achievementItem.innerHTML = `
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
            `;
            achievementsList.appendChild(achievementItem);
        });

        // Populate projects
        const projectsList = document.getElementById('modalProjects');
        projectsList.innerHTML = '';
        memberInfo.projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            `;
            projectsList.appendChild(projectItem);
        });
    }

    // Add loading animation for team member avatars
    const avatarImages = document.querySelectorAll('.member-avatar img');
    avatarImages.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            this.nextElementSibling.style.display = 'flex';
        });
        img.addEventListener('load', function() {
            this.style.display = 'block';
            this.nextElementSibling.style.display = 'none';
        });
    });

// Development Banner Functions - Global scope
function closeBanner() {
    const banner = document.getElementById('devBanner');
    const navbar = document.querySelector('.navbar');
    
    banner.classList.add('hidden');
    
    // Remove the banner from DOM after animation
    setTimeout(() => {
        banner.remove();
        // Adjust navbar position and body padding when banner is closed
        navbar.style.top = '0';
        document.body.style.paddingTop = '5rem'; // Only navbar space
    }, 500);
    
    // Store banner state in localStorage
    localStorage.setItem('devBannerClosed', 'true');
}

// Check if banner should be hidden on page load
document.addEventListener('DOMContentLoaded', function() {
    const bannerClosed = localStorage.getItem('devBannerClosed');
    if (bannerClosed === 'true') {
        const banner = document.getElementById('devBanner');
        const navbar = document.querySelector('.navbar');
        if (banner) {
            banner.remove();
            navbar.style.top = '0';
            document.body.style.paddingTop = '5rem'; // Only navbar space
        }
    }
});
});

// Legacy functions for backward compatibility
function displayDocument() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const documentDisplay = document.getElementById('documentDisplay');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileType = file.type;
            let content = '';

            if (fileType === 'application/pdf') {
                content = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="600px" />`;
            } else if (fileType === 'text/plain') {
                content = `<pre>${e.target.result}</pre>`;
            } else {
                content = `<p>Unsupported file type: ${fileType}</p>`;
            }

            documentDisplay.innerHTML = content;
        };
        reader.readAsDataURL(file);
    } else {
        documentDisplay.innerHTML = '<p>No file selected</p>';
    }
}

// Team Carousel Functionality
class TeamCarousel {
    constructor() {
        this.currentIndex = 0;
        this.membersPerView = this.getMembersPerView();
        this.totalMembers = document.querySelectorAll('.team-member').length;
        this.maxIndex = Math.max(0, this.totalMembers - this.membersPerView);
        
        // Debug log
        console.log('TeamCarousel initialized:', {
            totalMembers: this.totalMembers,
            membersPerView: this.membersPerView,
            maxIndex: this.maxIndex
        });
        
        this.initializeCarousel();
        this.bindEvents();
    }
    
    getMembersPerView() {
        const width = window.innerWidth;
        
        // Calculate based on member width + gap
        let memberWidth = 350; // Desktop member width
        let gap = 48; // Desktop gap (3rem)
        
        if (width <= 480) {
            memberWidth = 280;
            gap = 24;
        } else if (width <= 768) {
            memberWidth = 300;
            gap = 32;
        }
        
        // Calculate how many members can actually fit in the viewport
        // Account for carousel padding (2rem on each side = 4rem total = 64px)
        const availableWidth = width - 64; // Subtract carousel padding
        const totalMemberWidth = memberWidth + gap;
        const maxFit = Math.floor(availableWidth / totalMemberWidth);
        
        // Apply limits based on screen size
        if (width <= 480) return Math.min(maxFit, 1);
        if (width <= 768) return Math.min(maxFit, 2);
        if (width <= 1024) return Math.min(maxFit, 2);
        
        // For large screens, limit to a reasonable maximum
        return Math.min(maxFit, 4); // Max 4 members visible at once
    }
    
    initializeCarousel() {
        // Check if carousel structure already exists
        if (document.querySelector('.team-carousel-container')) {
            // Structure already exists, just store references
            this.teamGrid = document.querySelector('.team-grid');
            this.prevBtn = document.querySelector('.carousel-nav.prev');
            this.nextBtn = document.querySelector('.carousel-nav.next');
            
            // Create indicators if they don't exist
            let indicators = document.querySelector('.carousel-indicators');
            if (!indicators.children.length) {
                // Calculate total slides based on actual scrollable positions
                const maxPossibleIndex = Math.max(0, this.totalMembers - this.membersPerView);
                const totalSlides = maxPossibleIndex + 1; // +1 because we include position 0
                
                for (let i = 0; i < totalSlides; i++) {
                    const indicator = document.createElement('button');
                    indicator.className = 'carousel-indicator';
                    if (i === 0) indicator.classList.add('active');
                    indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
                    indicator.addEventListener('click', () => this.goToSlide(i));
                    indicators.appendChild(indicator);
                }
            }
            
            this.indicators = indicators.querySelectorAll('.carousel-indicator');
            this.updateCarousel();
            return;
        }
        
        // Original code for creating carousel structure
        const teamSection = document.querySelector('.team .container');
        if (!teamSection) return;
        
        // Create carousel structure
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'team-carousel-container';
        
        const carousel = document.createElement('div');
        carousel.className = 'team-carousel';
        
        const teamGrid = document.querySelector('.team-grid');
        if (!teamGrid) return;
        
        // Move team grid into carousel
        carousel.appendChild(teamGrid);
        carouselContainer.appendChild(carousel);
        
        // Create navigation buttons
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-nav prev';
        prevBtn.innerHTML = '‹';
        prevBtn.setAttribute('aria-label', 'Previous members');
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-nav next';
        nextBtn.innerHTML = '›';
        nextBtn.setAttribute('aria-label', 'Next members');
        
        carouselContainer.appendChild(prevBtn);
        carouselContainer.appendChild(nextBtn);
        
        // Create indicators
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        // Calculate total slides based on actual scrollable positions
        const maxPossibleIndex = Math.max(0, this.totalMembers - this.membersPerView);
        const totalSlides = maxPossibleIndex + 1; // +1 because we include position 0
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            if (i === 0) indicator.classList.add('active');
            indicator.setAttribute('aria-label', `Go to slide ${i + 1}`);
            indicator.addEventListener('click', () => this.goToSlide(i));
            indicators.appendChild(indicator);
        }
        
        carouselContainer.appendChild(indicators);
        
        // Replace content
        const sectionHeader = teamSection.querySelector('.section-header');
        teamSection.innerHTML = '';
        if (sectionHeader) teamSection.appendChild(sectionHeader);
        teamSection.appendChild(carouselContainer);
        
        // Store references
        this.teamGrid = teamGrid;
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        this.indicators = indicators.querySelectorAll('.carousel-indicator');
        
        this.updateCarousel();
    }
    
    bindEvents() {
        // Bind navigation buttons
        const prevBtn = document.querySelector('.carousel-nav.prev');
        const nextBtn = document.querySelector('.carousel-nav.next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }
        
        // Store references
        this.prevBtn = prevBtn;
        this.nextBtn = nextBtn;
        
        // Handle window resize
        window.addEventListener('resize', () => {
            const newMembersPerView = this.getMembersPerView();
            if (newMembersPerView !== this.membersPerView) {
                this.membersPerView = newMembersPerView;
                this.maxIndex = Math.max(0, this.totalMembers - this.membersPerView);
                // Ensure current index doesn't exceed the new maximum
                const maxPossibleIndex = this.totalMembers - this.membersPerView;
                this.currentIndex = Math.min(this.currentIndex, maxPossibleIndex);
                this.updateCarousel();
                this.updateIndicators();
            }
        });
        
        // Touch/swipe support
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        if (this.teamGrid) {
            this.teamGrid.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
            });
            
            this.teamGrid.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                e.preventDefault();
            });
            
            this.teamGrid.addEventListener('touchend', () => {
                if (!isDragging) return;
                isDragging = false;
                
                const diffX = startX - currentX;
                if (Math.abs(diffX) > 50) { // Minimum swipe distance
                    if (diffX > 0) {
                        this.next();
                    } else {
                        this.prev();
                    }
                }
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prev();
            } else if (e.key === 'ArrowRight') {
                this.next();
            }
        });
    }
    
    prev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
            this.updateIndicators();
        }
    }
    
    next() {
        // Ensure we don't scroll beyond the last member
        const maxPossibleIndex = this.totalMembers - this.membersPerView;
        if (this.currentIndex < maxPossibleIndex) {
            this.currentIndex++;
            this.updateCarousel();
            this.updateIndicators();
        }
    }
    
    goToSlide(index) {
        // Direct index mapping - each indicator represents one scroll position
        const maxPossibleIndex = Math.max(0, this.totalMembers - this.membersPerView);
        this.currentIndex = Math.min(index, maxPossibleIndex);
        this.updateCarousel();
        this.updateIndicators();
    }
    
    updateCarousel() {
        if (!this.teamGrid) return;
        
        // Recalculate members per view in case window was resized
        this.membersPerView = this.getMembersPerView();
        
        // Calculate member width based on screen size including gap
        let memberWidth = 350; // desktop: member width
        let gap = 48; // desktop: gap (3rem = 48px)
        const width = window.innerWidth;
        
        if (width <= 480) {
            memberWidth = 280; // mobile: smaller width
            gap = 24; // mobile: smaller gap (1.5rem = 24px)
        } else if (width <= 768) {
            memberWidth = 300; // tablet: medium width
            gap = 32; // tablet: medium gap (2rem = 32px)
        }
        
        // Ensure currentIndex doesn't exceed maximum possible
        const maxPossibleIndex = Math.max(0, this.totalMembers - this.membersPerView);
        this.currentIndex = Math.min(this.currentIndex, maxPossibleIndex);
        
        // Calculate the exact offset to prevent over-scrolling
        const totalWidth = memberWidth + gap;
        const offset = this.currentIndex * totalWidth;
        
        this.teamGrid.style.transform = `translateX(-${offset}px)`;
        
        // Update navigation buttons
        if (this.prevBtn) {
            this.prevBtn.disabled = this.currentIndex === 0;
        }
        
        if (this.nextBtn) {
            this.nextBtn.disabled = this.currentIndex >= maxPossibleIndex;
        }
    }
    
    updateIndicators() {
        if (!this.indicators) return;
        
        // Direct mapping - indicator index equals current index
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
}

// Global variable to store carousel instance
let teamCarousel;

// Initialize team carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit for other scripts to finish
    setTimeout(() => {
        teamCarousel = new TeamCarousel();
    }, 100);
});