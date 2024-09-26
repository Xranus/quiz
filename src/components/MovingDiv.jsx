import { useState, useEffect } from 'react';

export default function MoivngDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('pointermove', handleMove);
    return () => {
      window.removeEventListener('pointermove', handleMove);
    };
  }, []);

  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#48CFCB',
      borderRadius: '50%',
      opacity: 0.3,
      zIndex:  -999,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -30,
      top: -30,
      width: 70,
      height: 70,
      transition: 'all 0.15s'
    }} className='movingDiv' />
  );
}