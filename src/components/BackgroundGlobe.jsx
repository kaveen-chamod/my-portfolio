import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundGlobe() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 220;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Globe Main Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const GLOBE_RADIUS = 75;

    // Helper: Convert Lat/Lon to 3D Sphere Vector
    const latLonToVector3 = (lat, lon, radius) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // 2. Base Dotted Sphere Particles (Network Matrix)
    const particleCount = 1400;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;

      const x = GLOBE_RADIUS * Math.cos(theta) * Math.sin(phi);
      const y = GLOBE_RADIUS * Math.sin(theta) * Math.sin(phi);
      const z = GLOBE_RADIUS * Math.cos(phi);

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      const rand = Math.random();
      if (rand > 0.6) {
        particleColors[i * 3] = 0.02; // Cyan
        particleColors[i * 3 + 1] = 0.71;
        particleColors[i * 3 + 2] = 0.83;
      } else if (rand > 0.3) {
        particleColors[i * 3] = 0.23; // Blue
        particleColors[i * 3 + 1] = 0.51;
        particleColors[i * 3 + 2] = 0.96;
      } else {
        particleColors[i * 3] = 0.38; // Indigo
        particleColors[i * 3 + 1] = 0.4;
        particleColors[i * 3 + 2] = 0.94;
      }
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    globeGroup.add(particleSystem);

    // 3. Country Hub Nodes
    const majorLocations = [
      { name: 'London', lat: 51.5, lon: -0.12 },
      { name: 'New York', lat: 40.71, lon: -74.0 },
      { name: 'Tokyo', lat: 35.67, lon: 139.65 },
      { name: 'Sydney', lat: -33.86, lon: 151.2 },
      { name: 'Singapore', lat: 1.35, lon: 103.81 },
      { name: 'Dubai', lat: 25.2, lon: 55.27 },
      { name: 'Frankfurt', lat: 50.11, lon: 8.68 },
      { name: 'California', lat: 37.77, lon: -122.41 },
      { name: 'Mumbai', lat: 19.07, lon: 72.87 },
      { name: 'Cape Town', lat: -33.92, lon: 18.42 },
    ];

    const hubPoints = [];
    const hubGeometry = new THREE.BufferGeometry();
    const hubPositions = [];

    majorLocations.forEach((loc) => {
      const vec = latLonToVector3(loc.lat, loc.lon, GLOBE_RADIUS);
      hubPoints.push(vec);
      hubPositions.push(vec.x, vec.y, vec.z);
    });

    hubGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(hubPositions, 3)
    );
    const hubMaterial = new THREE.PointsMaterial({
      size: 5.5,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const hubs = new THREE.Points(hubGeometry, hubMaterial);
    globeGroup.add(hubs);

    // 4. Sri Lanka Focal Highlight Beacon
    const sriLankaVec = latLonToVector3(7.87, 80.77, GLOBE_RADIUS);

    const slDotGeo = new THREE.SphereGeometry(2.5, 16, 16);
    const slDotMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const slDot = new THREE.Mesh(slDotGeo, slDotMat);
    slDot.position.copy(sriLankaVec);
    globeGroup.add(slDot);

    const ringGeo = new THREE.RingGeometry(2.5, 4.5, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const radarRing = new THREE.Mesh(ringGeo, ringMat);
    radarRing.position.copy(sriLankaVec);
    radarRing.quaternion.setFromUnitVectors(
      new THREE.Vector3(0, 0, 1),
      sriLankaVec.clone().normalize()
    );
    globeGroup.add(radarRing);

    const uplinkEnd = sriLankaVec.clone().multiplyScalar(1.35);
    const uplinkGeo = new THREE.BufferGeometry().setFromPoints([
      sriLankaVec,
      uplinkEnd,
    ]);
    const uplinkMat = new THREE.LineBasicMaterial({
      color: 0x67e8f9,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
    });
    const uplinkBeam = new THREE.Line(uplinkGeo, uplinkMat);
    globeGroup.add(uplinkBeam);

    // 5. Orbiting Satellites
    const SATELLITE_COUNT = 3;
    const satellites = [];
    const satGroup = new THREE.Group();
    globeGroup.add(satGroup);

    for (let i = 0; i < SATELLITE_COUNT; i++) {
      const satMesh = new THREE.Mesh(
        new THREE.OctahedronGeometry(2.2, 0),
        new THREE.MeshBasicMaterial({
          color: 0xa5f3fc,
          wireframe: true,
        })
      );
      satellites.push({
        mesh: satMesh,
        speed: 0.004 + i * 0.002,
        orbitRadius: GLOBE_RADIUS + 30 + i * 14,
        inclination: (i * Math.PI) / 3,
        angle: Math.random() * Math.PI * 2,
      });
      satGroup.add(satMesh);
    }

    // 6. Dynamic Laser Beams
    const MAX_BEAMS = 3;
    const laserBeams = [];
    for (let i = 0; i < MAX_BEAMS; i++) {
      const lineGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(),
        new THREE.Vector3(),
      ]);
      const lineMat = new THREE.LineBasicMaterial({
        color: i % 2 === 0 ? 0x38bdf8 : 0x818cf8,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const beam = new THREE.Line(lineGeo, lineMat);
      beam.visible = true;
      globeGroup.add(beam);
      laserBeams.push(beam);
    }

    // Static Flight Paths to Sri Lanka
    hubPoints.slice(0, 6).forEach((hub) => {
      const mid = new THREE.Vector3()
        .addVectors(sriLankaVec, hub)
        .multiplyScalar(0.5);
      mid.multiplyScalar(1.28);

      const curve = new THREE.QuadraticBezierCurve3(sriLankaVec, mid, hub);
      const points = curve.getPoints(40);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(points);
      const arcMat = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });
      globeGroup.add(new THREE.Line(arcGeo, arcMat));
    });

    // 7. Scroll Tracking
    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      targetScroll = window.scrollY || window.pageYOffset;
    };

    let animationFrameId = null;
    let contextLost = false;

    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    const handleContextLost = (event) => {
      event.preventDefault();
      contextLost = true;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    const handleContextRestored = () => {
      contextLost = false;
      startAnimation();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      } else {
        startAnimation();
      }
    };

    renderer.domElement.addEventListener('webglcontextlost', handleContextLost);
    renderer.domElement.addEventListener('webglcontextrestored', handleContextRestored);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 8. Animation Loop
    const clock = new THREE.Clock();
    let idleRotation = -1.4; // Initial angle focused on Sri Lanka
    let pulseScale = 1;
    let pulseGrowing = true;

    const animate = () => {
      animationFrameId = null;
      if (contextLost || document.visibilityState === 'hidden') return;
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // [1] සෙමින් අඛණ්ඩව කැරකැවීම (Idle Auto-rotation)
      idleRotation += 0.001;

      // [2] Scroll අගය smooth ලෙස එකතු කිරීම
      currentScroll += (targetScroll - currentScroll) * 0.05;

      // භ්‍රමණය = ස්වයංක්‍රීය සෙමින් කැරකැවීම + Scroll මඟින් සිදුවන කැරකැවීම
      globeGroup.rotation.y = idleRotation + currentScroll * 0.0015;
      globeGroup.rotation.x = 0.2 + currentScroll * 0.0003;

      // [3] අමතර Movement: අභ්‍යවකාශයේ පාවීම (Floating Bobbing Effect)
      // තත්පර කිහිපයකට වරක් ඉහළ පහළ පාවෙයි
      globeGroup.position.y = Math.sin(elapsedTime * 0.8) * 3.5;
      globeGroup.position.x = Math.cos(elapsedTime * 0.5) * 2.0;

      // Pulse Sri Lanka Beacon
      if (pulseGrowing) {
        pulseScale += 0.01;
        if (pulseScale >= 1.8) pulseGrowing = false;
      } else {
        pulseScale -= 0.01;
        if (pulseScale <= 1.0) pulseGrowing = true;
      }
      radarRing.scale.set(pulseScale, pulseScale, 1);
      ringMat.opacity = 0.9 - (pulseScale - 1.0) * 0.8;

      // Update Satellites & Lasers
      satellites.forEach((sat, idx) => {
        sat.angle += sat.speed;
        const x =
          sat.orbitRadius *
          Math.cos(sat.angle) *
          Math.cos(sat.inclination);
        const y = sat.orbitRadius * Math.sin(sat.angle);
        const z =
          sat.orbitRadius *
          Math.cos(sat.angle) *
          Math.sin(sat.inclination);

        sat.mesh.position.set(x, y, z);
        sat.mesh.rotation.x += 0.01;
        sat.mesh.rotation.y += 0.01;

        const targetBeam = laserBeams[idx];
        if (targetBeam) {
          const targetNode =
            idx === 0 ? sriLankaVec : hubPoints[idx % hubPoints.length];
          const positions = targetBeam.geometry.attributes.position.array;
          positions[0] = sat.mesh.position.x;
          positions[1] = sat.mesh.position.y;
          positions[2] = sat.mesh.position.z;
          positions[3] = targetNode.x;
          positions[4] = targetNode.y;
          positions[5] = targetNode.z;
          targetBeam.geometry.attributes.position.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
    };

    function startAnimation() {
      if (
        animationFrameId === null &&
        !contextLost &&
        document.visibilityState !== 'hidden'
      ) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    startAnimation();

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost);
      renderer.domElement.removeEventListener('webglcontextrestored', handleContextRestored);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
      if (container && renderer.domElement) {
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 blur-[1px] brightness-75"
      style={{
        maskImage:
          'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at center, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 80%)',
      }}
    />
  );
}