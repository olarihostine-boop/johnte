document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');
    const body = document.body;

    // Array of pleasing colors for background changes
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];

    let colorIndex = 0;

    listItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // Add a click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);

            // Change background color
            body.style.background = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;

            // Show a nice message
            showMessage(`You selected: ${this.textContent}`, this);
        });

        // Add hover sound effect (visual feedback)
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    function showMessage(text, element) {
        // Create a temporary message element
        const message = document.createElement('div');
        message.textContent = text;
        message.style.position = 'fixed';
        message.style.top = '20px';
        message.style.left = '50%';
        message.style.transform = 'translateX(-50%)';
        message.style.background = 'rgba(0,0,0,0.8)';
        message.style.color = 'white';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '25px';
        message.style.fontSize = '1.1em';
        message.style.zIndex = '1000';
        message.style.animation = 'slideDown 0.5s ease-out';

        document.body.appendChild(message);

        // Remove the message after 2 seconds
        setTimeout(() => {
            message.style.animation = 'slideUp 0.5s ease-in';
            setTimeout(() => {
                document.body.removeChild(message);
            }, 500);
        }, 2000);
    }

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
            to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateX(-50%) translateY(0); opacity: 1; }
            to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});