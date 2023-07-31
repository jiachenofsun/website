import {Box, Container, Typography} from '@mui/material'
import {useEffect, useRef} from 'react'
import {ArrowDownward} from '@mui/icons-material'
import {MotionBox, fill} from '../theme'
import 'typeface-vt323'

export const VHSBanner = (): JSX.Element => {
  const boxRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const generateSnow = (ctx: CanvasRenderingContext2D) => {
    var w = ctx.canvas.width,
      h = ctx.canvas.height,
      d = ctx.createImageData(w, h),
      b = new Uint32Array(d.data.buffer),
      len = b.length;

    for (var i = 0; i < len; i++) {
      b[i] = ((255 * Math.random()) | 0) << 24
    }

    ctx.putImageData(d, 0, 0)
  }

  useEffect(() => {
    const updateSize = () => {
      if (!canvasRef.current || !boxRef.current) return
      
      const box = boxRef.current.getBoundingClientRect()
      canvasRef.current.width = box.width
      canvasRef.current.height = box.height
    }
  
    if (!boxRef.current) return
  
    if (!canvasRef.current) {
      const box = boxRef.current.getBoundingClientRect()
      const canvas = document.createElement('canvas')
      const ctx = canvas?.getContext("2d")
      
      if (!ctx) return
      canvas.width = box.width
      canvas.height = box.height
  
      canvas.style.backgroundColor = '#aaa'
      canvas.style.opacity = '0.2'
      
      boxRef.current.appendChild(canvas)
      canvasRef.current = canvas
    }
  
    window.addEventListener('resize', updateSize)
  
    const ctx = canvasRef.current.getContext('2d')
    if (!ctx) return
    
    const animate = () => {
      generateSnow(ctx)
      setTimeout(() => {
        requestAnimationFrame(animate)
      }, 350)
    }
  
    animate()
  
    return () => {
      window.removeEventListener('resize', updateSize)
    };
  }, [])

  const bounceAnimation = {
    repeat: Infinity,
    duration: 2,
    ease: "easeInOut",
  }

  return (
    <Container sx={{
      position: 'relative',
      minHeight: '96vh',
      zIndex: 0,
    }}>
      {/* VIGNETTE */}
      <Box sx={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/media/crt-vignette.png)`,
        ...fill,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
        zIndex: 10000,
        }} />
        {/* SNOW */}
        <Box ref={boxRef}
          sx={{
            ...fill,
            backgroundColor: 'transparent',
            zIndex: 9999,
          }} />
        {/* SCANLINES */}
        <Box sx={{
          ...fill,
          zIndex: 9998,
          background: `
            linear-gradient(
            transparent 50%, 
            rgba(18, 16, 16, 0.75) 50%
            ), 
            linear-gradient(
            90deg, 
            rgba(255, 0, 0, 0.06),
            rgba(0, 255, 0, 0.02),
            rgba(0, 0, 255, 0.06)
            )`,
          backgroundSize: {xs: "100% 3px, 6px 100%", md:"100% 4px, 6px 100%"},
          pointerEvents: "none",
        }} />
        {/* TEXT */}
        <Box sx={{
            ...fill,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9997,
            animation: 'wobbley 150ms infinite',
            '@keyframes wobbley': {
              '0%': {
                transform: 'translateY(0.4px)',
              },
              '100%': {
                transform: 'translateY(0)',
              },
            },
          }}>
          <Typography variant="h1" sx={{
            fontFamily: 'VT323', 
            fontSize: {xs: '4rem', md: '9rem !important'},
            color: 'white',
            letterSpacing: {xs: '1rem', md: '1.6rem'}, 
            }}>WELCOME</Typography>

          <Typography variant="body1" sx={{
            fontFamily: 'VT323', 
            fontSize: {xs: '1.5rem', md: '2.5rem'}, 
            color: 'white',
            }}>SCROLL TO SEE SECTIONS</Typography>
          <MotionBox animate={{ y: ['0%', '10%', '0%'] }} transition={bounceAnimation}>
            <ArrowDownward fontSize='large' sx={{color: 'white'}}/>
          </MotionBox>
        </Box>

        {/* IMAGE */}
        <Box sx={{
            ...fill,
            filter: "blur(1.2px)",
            backgroundImage: `url(${process.env.PUBLIC_URL}/media/welcome-banner.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.8,
            zIndex: 9996,
          }} />
    </Container>
  )
}
