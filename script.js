// Create Snow
        function createSnow() {
            for(let i = 0; i < 50; i++) {
                const snow = document.createElement('div');
                snow.className = 'snowflake';
                const size = Math.random() * 5 + 2 + 'px';
                snow.style.width = size;
                snow.style.height = size;
                snow.style.left = Math.random() * 100 + 'vw';
                snow.style.animationDuration = (Math.random() * 3 + 2) + 's';
                snow.style.animationDelay = Math.random() * 5 + 's';
                document.body.appendChild(snow);
            }
        }

        // Get all tree layers
        const treeLayers = document.querySelectorAll('.tree-layer');
        const treeContainer = document.getElementById('treeContainer');

        // Add click event to each tree layer only
        treeLayers.forEach(layer => {
            layer.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent event from bubbling up
                
                // Check if click is actually on the visible triangle part
                const rect = layer.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Get layer width from CSS variable
                const style = getComputedStyle(layer);
                const width = parseInt(style.getPropertyValue('--w'));
                const height = parseInt(style.getPropertyValue('--h'));
                
                // Check if point is within triangle bounds
                // Triangle: top center at (width, 0), spreads to full width at bottom
                const relativeY = y;
                const maxWidth = (relativeY / height) * (width * 2);
                const leftBound = width - maxWidth / 2;
                const rightBound = width + maxWidth / 2;
                
                // Only create ornament if click is within triangle
                if (x >= leftBound && x <= rightBound && y >= 0 && y <= height) {
                    const ornament = document.createElement('div');
                    ornament.className = 'ornament';
                    const colors = ['#e74c3c', '#f1c40f', '#3498db', '#9b59b6', '#e67e22', '#1abc9c'];
                    ornament.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Position ornament at click location
                    ornament.style.left = (e.clientX - 9) + 'px';
                    ornament.style.top = (e.clientY - 11) + 'px';
                    
                    document.body.appendChild(ornament);
                }
            });
        });

        createSnow();