import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import { tsParticles, type Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useTheme } from "@/components/ThemeProvider";

let initPromise: Promise<void> | null = null;
function initEngineOnce(): Promise<void> {
  if (!initPromise) {
    initPromise = loadSlim(tsParticles as unknown as Engine).then(() => undefined);
  }
  return initPromise;
}

export function ParticleField() {
  const [ready, setReady] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    initEngineOnce().then(() => setReady(true));
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 160, links: { opacity: 0.4 } } },
      },
      particles: {
        color: { value: theme === "dark" ? "#a78bfa" : "#7c5cff" },
        links: {
          enable: true,
          color: theme === "dark" ? "#7c5cff" : "#a78bfa",
          distance: 130,
          opacity: 0.25,
          width: 1,
        },
        move: { enable: true, speed: 0.6, outModes: { default: "out" as const } },
        number: { value: 55, density: { enable: true, area: 900 } },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2.5 } },
      },
    }),
    [theme],
  );

  if (!ready) return null;
  return <Particles id="hero-particles" className="absolute inset-0" options={options} />;
}
