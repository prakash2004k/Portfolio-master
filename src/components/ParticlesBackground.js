import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const GlowOrbs = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#0d0d0d", // Dark background for better glow effect
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: ["#ff0080", "#00ffff", "#ff6600"], // Vibrant neon colors
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 3,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "bounce",
            },
            attract: {
              enable: false,
            },
          },
          links: {
            enable: false, // No connections between orbs
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Orbs move away when hovered
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default GlowOrbs;
