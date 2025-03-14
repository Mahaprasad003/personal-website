import React, { useEffect, useRef } from 'react';

const DotGrid = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let dots = [];

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize dots
    const initDots = () => {
      dots = [];
      const spacing = 40; // Increased spacing between dots
      const rows = Math.ceil(canvas.height / spacing);
      const cols = Math.ceil(canvas.width / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dots.push({
            x: j * spacing + spacing / 2,
            y: i * spacing + spacing / 2,
            baseRadius: 1, // Smaller base radius
            radius: 1,
            alpha: 0.15, // Lower initial opacity
            targetAlpha: 0.15
          });
        }
      }
    };

    // Draw dots
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        // Calculate distance from mouse
        const dx = dot.x - mousePos.current.x;
        const dy = dot.y - mousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 70; // Reduced from 150 for a more focused effect

        // Update dot properties based on mouse proximity
        if (distance < maxDistance) {
          const influence = 1 - distance / maxDistance;
          dot.targetAlpha = 2.0; // Increased from 0.4 for darker hover effect
          dot.radius = dot.baseRadius + (influence * 1.5);
        } else {
          dot.targetAlpha = 0.15;
          dot.radius = dot.baseRadius;
        }

        // Slower transition for alpha
        dot.alpha += (dot.targetAlpha - dot.alpha) * 0.08;

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(179, 157, 219, ${dot.alpha})`; // Using your accent color
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      initDots();
    };

    // Initialize
    setCanvasSize();
    initDots();
    draw();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      <style jsx>{`
        canvas {
          opacity: 0.5; // Lower overall opacity
        }
      `}</style>
    </>
  );
};

export default DotGrid; 