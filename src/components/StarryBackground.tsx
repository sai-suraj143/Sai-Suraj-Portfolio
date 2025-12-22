import React, { useEffect, useRef } from 'react';

const ElasticGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Grid settings
    const spacing = 40; 
    let points: Point[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initGrid();
    };

    class Point {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      friction: number;
      ease: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originY = y;
        this.vx = 0;
        this.vy = 0;
        this.friction = 0.9; // How fast it slows down
        this.ease = 0.1; // How fast it returns to home
      }

      update() {
        // Distance to mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repel force
        const forceDistance = 150;
        let force = 0;
        let angle = 0;

        if (distance < forceDistance) {
            force = (forceDistance - distance) / forceDistance;
            angle = Math.atan2(dy, dx);
            const moveX = Math.cos(angle) * force * 15;
            const moveY = Math.sin(angle) * force * 15;
            this.vx -= moveX;
            this.vy -= moveY;
        }

        // Spring back to origin
        this.vx += (this.originX - this.x) * this.ease;
        this.vy += (this.originY - this.y) * this.ease;

        // Apply friction
        this.vx *= this.friction;
        this.vy *= this.friction;

        // Move
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(150, 150, 200, 0.4)'; // Subtle bluish-grey
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initGrid = () => {
      points = [];
      for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
          points.push(new Point(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.strokeStyle = 'rgba(150, 150, 200, 0.15)';
      ctx.beginPath();
      
      // Note: Drawing full grid lines is heavy, so we just draw points 
      // or short interactions. Let's stick to points + slight lines for speed.
      
      points.forEach(point => {
        point.update();
        point.draw();
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    resize();
    animate();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
};

export default ElasticGrid;