const tree = document.getElementById('tree');

// Add ornaments only when clicking on the tree
tree.addEventListener('click', (e) => {
    const rect = tree.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if click is within the triangle shape
    if (isPointInTriangle(x, y, 200, 400)) {
        createOrnament(e.clientX, e.clientY);
    }
});

// Check if point is inside triangle
function isPointInTriangle(x, y, baseWidth, height) {
    const topX = baseWidth;
    const topY = 0;
    
    const relativeY = y;
    const maxWidth = (relativeY / height) * (baseWidth * 2);
    const leftBound = baseWidth - maxWidth / 2;
    const rightBound = baseWidth + maxWidth / 2;
    
    return x >= leftBound && x <= rightBound && y >= 0 && y <= height;
}

function createOrnament(x, y) {
    const ornament = document.createElement('div');
    ornament.classList.add('ornament');
    
    const colors = ['#e74c3c', '#f1c40f', '#3498db', '#9b59b6', '#e67e22', '#1abc9c', '#ff1493'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    ornament.style.backgroundColor = randomColor;
    ornament.style.left = (x - 9) + 'px'; 
    ornament.style.top = (y - 11) + 'px';

    document.body.appendChild(ornament);
}

// Add Christmas bulbs to the tree
function addBulbs() {
    const colors = [
        { bg: '#ff0000', shadow: 'rgba(255,0,0,0.8)' },
        { bg: '#ffd700', shadow: 'rgba(255,215,0,0.8)' },
        { bg: '#0066ff', shadow: 'rgba(0,102,255,0.8)' },
        { bg: '#ff00ff', shadow: 'rgba(255,0,255,0.8)' },
        { bg: '#00ff00', shadow: 'rgba(0,255,0,0.8)' },
        { bg: '#ff6600', shadow: 'rgba(255,102,0,0.8)' }
    ];

    // Add bulbs distributed across the tree triangle (skip top 20%)
    for(let i = 0; i < 35; i++) {
        const bulb = document.createElement('div');
        bulb.classList.add('bulb');
        
        const color = colors[Math.floor(Math.random() * colors.length)];
        bulb.style.backgroundColor = color.bg;
        bulb.style.boxShadow = `0 0 15px 3px ${color.shadow}`;
        
        // Position bulbs within triangle bounds (skip top 20%)
        const yPos = Math.random() * 80 + 20;
        const maxWidth = yPos * 0.9;
        const xPos = 50 + (Math.random() - 0.5) * maxWidth;
        
        bulb.style.left = xPos + '%';
        bulb.style.top = yPos + '%';
        bulb.style.animationDelay = (Math.random() * 2) + 's';

        tree.appendChild(bulb);
    }
}

// Create falling snow
function createSnow() {
    const snowCount = 60;
    for(let i = 0; i < snowCount; i++) {
        const snow = document.createElement('div');
        snow.classList.add('snowflake');
        
        const size = Math.random() * 5 + 2 + 'px';
        snow.style.width = size;
        snow.style.height = size;
        snow.style.left = Math.random() * 100 + 'vw';
        snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snow.style.animationDelay = (Math.random() * 5) + 's';

        document.body.appendChild(snow);
    }
}

// Initialize
addBulbs();
createSnow();