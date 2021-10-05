import React, { useEffect, useRef } from 'react';

import {
  Banner,
  Video,
  Canvas,
  BannerTitle,
  Headline,
} from '../../styles/homeStyles';

// customHook
import useWindowSize from '../../hooks/useWindowSize';

// context
import { useGlobalStateContext } from '../../context/globalContext';

// video
import featuredVideo from '../../assets/video/featured-video.mp4';

function HomeBanner() {
  let canvas = useRef(null);
  const size = useWindowSize();

  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    let renderingElement = canvas.current;
    // create an offscreen canvas only for the drawings
    let drawingElement = renderingElement.cloneNode();
    let drawingCtx = drawingElement.getContext('2d');
    let renderingCtx = renderingElement.getContext('2d');
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = 'source-over';
    renderingCtx.fillStyle = currentTheme === 'dark' ? '#000000' : '#ffffff';
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener('mouseover', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('click', (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mouseup', (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener('mousemove', (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = 'source-over';
        renderingCtx.globalCompositeOperation = 'destination-out';
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = 'round';
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, [currentTheme, size.height, size.width]);

  // variants
  const parent = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const child = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: { duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  return (
    <Banner>
      <Video>
        <video
          width="100%"
          height="100%"
          autoPlay
          loop
          src={featuredVideo}
        ></video>
      </Video>
      <Canvas width={size.width} height={size.height} ref={canvas} />

      <BannerTitle
        variants={parent}
        transition="transition"
        initial="initial"
        animate="animate"
      >
        <Headline variants={child}> DIG </Headline>
        <Headline variants={child}> DEEP </Headline>
      </BannerTitle>
    </Banner>
  );
}

export default HomeBanner;
