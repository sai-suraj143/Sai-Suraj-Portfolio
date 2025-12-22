import React, { useEffect, useRef } from 'react';

const BlackPulseLines: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    const lines: { x: number; vx: number; speed: number; phase: number }[] = [];

    // Vertical pulsing lines with horizontal movement
    for (let i = 0; i < 35; i++) {
      lines.push({
        x: (i / 35) * canvas.width,
        vx: (Math.random() - 0.5) * 0.3, // Gentle horizontal drift
        speed: 0.4 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      // Fast fade
      ctx.fillStyle = 'rgba(0, 0, 0, 0.12)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      lines.forEach(line => {
        // Horizontal movement
        line.x += line.vx;
        if (line.x < 0 || line.x > canvas.width) line.vx *= -1;

        // Pulsing wave height
        const wave = Math.sin(time * 0.03 + line.phase) * 25 + 25;
        
        // Base line - much dimmer
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, canvas.height);
        ctx.stroke();

        // Pulsing segments - reduced opacity
        for (let y = 0; y < canvas.height; y += 45) {
          const pulse = Math.sin((y / canvas.height) * Math.PI * 2 + time * 0.05 + line.phase) * 0.4 + 0.4;
          ctx.strokeStyle = `rgba(255, 255, 255, ${pulse * 0.15})`; // Reduced from 0.6 to 0.15
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(line.x - 1.5, y);
          ctx.lineTo(line.x + 1.5, y);
          ctx.stroke();
        }
      });

      time += 1;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default BlackPulseLines;