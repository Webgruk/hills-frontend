import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesOptions from "../../particles.json";
export default function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  return (
    <div>
      <Particles options={particlesOptions} />
    </div>
  );
}
