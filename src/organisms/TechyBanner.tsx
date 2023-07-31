import {fill} from "../theme"
import {Controller, Scene} from 'react-scrollmagic'
import {Timeline, Tween} from 'react-gsap'
import {gsap} from "gsap"
import {RoughEase} from "gsap/EasePack"
import {TextPlugin} from "gsap/TextPlugin"
import {BannerButton} from '../molecules/BannerButton'
import {useEffect, useRef} from 'react'
import {Box, Container} from '@mui/material'

gsap.registerPlugin(TextPlugin, RoughEase)

export const TechyBanner = (): JSX.Element => {
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
  const text = "TECHY STUFF"

    return (
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          minHeight: '96vh',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
          zIndex: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${process.env.PUBLIC_URL}/media/techy-banner.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
          },
          '& > *': {
            position: 'relative',
            zIndex: 1,
          },
        }}>
        <Controller>
          <Scene
            duration={600}
            triggerHook="onEnter"
          >
            <Timeline target={<BannerButton path={'/techy-stuff'}/>}>
              <Tween to={{text}} target="typo"/>
            </Timeline>
          </Scene>
        </Controller>
        <Box ref={boxRef}
          sx={{
            ...fill,
            backgroundColor: 'transparent',
            zIndex: -1,
          }} />
      </Container>
    )
  }
  