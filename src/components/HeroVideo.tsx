import { useEffect, useRef, useState } from 'react';

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Ruta del video con base path
  const videoSrc = `${import.meta.env.BASE_URL}SCROLLING.mp4`;

  useEffect(() => {
    const video = videoRef.current;
    const videoSection = sectionRef.current;
    const progressBar = progressRef.current;

    if (!video || !videoSection || !progressBar) return;

    // Esperar a que el video esté listo
    const handleCanPlay = () => setVideoLoaded(true);
    video.addEventListener('canplay', handleCanPlay);

    // === CONFIGURACION ===
    const VIDEO_SPEED = 2.5;
    const REWIND_SPEED = 0.042;
    const PAUSE_DELAY = 150;

    // === VARIABLES DE ESTADO ===
    let videoCompleted = false;
    let isRewinding = false;
    let wheelTimeout: ReturnType<typeof setTimeout>;

    // === FUNCION DE RETROCESO FLUIDO ===
    const rewindLoop = () => {
      if (!isRewinding) return;

      if (video.currentTime > 0) {
        video.currentTime = Math.max(0, video.currentTime - REWIND_SPEED);
        updateProgress();
        requestAnimationFrame(rewindLoop);
      } else {
        isRewinding = false;
      }
    };

    // === ACTUALIZAR BARRA DE PROGRESO ===
    const updateProgress = () => {
      if (video.duration && progressBar) {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.style.width = percentage + '%';
      }
    };

    // === CONTROL DEL SCROLL ===
    const handleWheel = (e: WheelEvent) => {
      const rect = videoSection.getBoundingClientRect();
      const isInVideoSection = rect.top <= 10 && rect.bottom > window.innerHeight - 10;

      if (isInVideoSection) {
        if (!videoCompleted) {
          e.preventDefault();

          if (e.deltaY > 0) {
            isRewinding = false;
            if (video.currentTime < video.duration) {
              video.playbackRate = VIDEO_SPEED;
              video.play();
            }
          } else if (e.deltaY < 0 && video.currentTime > 0) {
            video.pause();
            if (!isRewinding) {
              isRewinding = true;
              rewindLoop();
            }
          }

          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            video.pause();
            isRewinding = false;
          }, PAUSE_DELAY);
        }
      }

      if (e.deltaY < 0 && video.currentTime > 0.5) {
        videoCompleted = false;
      }
    };

    // === DETECTAR FIN DEL VIDEO ===
    const handleTimeUpdate = () => {
      updateProgress();
      if (video.currentTime >= video.duration - 0.1) {
        videoCompleted = true;
        video.pause();
      }
    };

    const handleEnded = () => {
      videoCompleted = true;
    };

    // === AGREGAR EVENT LISTENERS ===
    window.addEventListener('wheel', handleWheel, { passive: false });
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    // === CLEANUP ===
    return () => {
      window.removeEventListener('wheel', handleWheel);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('canplay', handleCanPlay);
      clearTimeout(wheelTimeout);
    };
  }, []);

  return (
    <>
      {/* Barra de progreso */}
      <div
        ref={progressRef}
        className="hero-video-progress"
      />

      {/* Seccion del video */}
      <section ref={sectionRef} id="inicio" className="hero-video-section">
        <div className="hero-video-container">
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            className="hero-video"
          />

          {/* Indicador de scroll */}
          <div className="hero-scroll-indicator">
            <span>Scroll</span>
            <div className="hero-scroll-arrow">&#8595;</div>
          </div>
        </div>
        <div className="hero-scroll-space" />
      </section>
    </>
  );
};

export default HeroVideo;
