import { useState, useEffect, useCallback, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useTexture, Html } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Tour Location Data ─── */
const TOUR_LOCATIONS = [
  {
    id: 'campus-overview',
    title: 'University Building (UB Block)',
    category: 'Campus Zones',
    thumb: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=200',
    panorama: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=2400',
    description: 'Aerial view of the sprawling 22-acre Eswar College campus on Chilakaluripet Road, Narasaraopet.',
  },
  {
    id: 'main-entrance',
    title: 'Arch Gate',
    category: 'Landmarks',
    thumb: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=200',
    panorama: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=2400',
    description: 'The grand entrance gate of Eswar College of Engineering welcomes students and visitors.',
  },
  {
    id: 'academic-block',
    title: 'Academic Block',
    category: 'Learning Areas',
    thumb: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=200',
    panorama: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=2400',
    description: 'Multi-storey academic block housing smart classrooms, seminar halls, and department offices.',
  },
  {
    id: 'cse-lab',
    title: 'CSE & AI/ML Labs',
    category: 'Labs',
    thumb: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200',
    panorama: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2400',
    description: 'State-of-the-art computer labs with 150+ high-performance workstations and GPU computing cluster.',
  },
  {
    id: 'library',
    title: 'Central Library',
    category: 'Learning Areas',
    thumb: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=200',
    panorama: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=2400',
    description: 'Two-floor central library with 25,000+ volumes and digital journal subscriptions.',
  },
];

const CATEGORIES = ['All', 'Campus Zones', 'Learning Areas', 'Labs', 'Landmarks', 'Hostels', 'Sports'];

/* ══════════════════════════════════════════════════════════════
   THREE.JS VIRTUAL TOUR SCENE
   ══════════════════════════════════════════════════════════════ */
function TourScene({ panoramaUrl, introComplete, setIntroComplete, setCompassAngle }: { 
  panoramaUrl: string; 
  introComplete: boolean; 
  setIntroComplete: (c: boolean) => void;
  setCompassAngle: (a: number) => void;
}) {
  const texture = useTexture(panoramaUrl);
  texture.colorSpace = THREE.SRGBColorSpace;
  // Ensure texture wraps perfectly
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;

  const { camera } = useThree();
  const controlsRef = useRef<any>(null);
  const timeRef = useRef(0);
  const startAnimRef = useRef(false);

  useEffect(() => {
    // Reset camera for Little Planet intro
    if (!introComplete) {
      (camera as THREE.PerspectiveCamera).fov = 140; // Wide FOV for planet effect
      camera.position.set(0, 0, 0);
      camera.rotation.set(-Math.PI / 2, 0, 0); // Look straight down
      camera.updateProjectionMatrix();
      timeRef.current = 0;
      startAnimRef.current = false;
    }
  }, [camera, introComplete, panoramaUrl]);

  useFrame((state, delta) => {
    if (!introComplete) {
      timeRef.current += delta;
      
      // Rotate the planet slowly
      if (timeRef.current < 2.5) {
        state.scene.rotation.y += 0.005;
      }

      // After 2.5 seconds, zoom in (transition to normal view)
      if (timeRef.current > 2.5) {
        startAnimRef.current = true;
      }

      if (startAnimRef.current) {
        const pCam = camera as THREE.PerspectiveCamera;
        
        // Lerp FOV from 140 to 60 (normal view)
        pCam.fov = THREE.MathUtils.lerp(pCam.fov, 65, 0.04);
        
        // Lerp camera pitch from -90 deg (-Math.PI/2) to 0
        const currentRotX = pCam.rotation.x;
        pCam.rotation.x = THREE.MathUtils.lerp(currentRotX, 0, 0.04);
        
        pCam.updateProjectionMatrix();

        // Stop intro mode when zoomed in
        if (pCam.fov < 66 && Math.abs(pCam.rotation.x) < 0.02) {
          pCam.fov = 65;
          pCam.rotation.x = 0;
          pCam.updateProjectionMatrix();
          setIntroComplete(true);
        }
      }
    } else {
      // In normal mode, slightly auto-rotate if user isn't interacting
      if (controlsRef.current) {
        // Stop auto rotation if user is holding interactions
        controlsRef.current.update();
        // Update compass angle based on camera azimuthal angle
        const angle = controlsRef.current.getAzimuthalAngle();
        setCompassAngle((angle * 180 / Math.PI + 360) % 360);
      }
    }
  });

  return (
    <>
      <ambientLight intensity={1.5} />
      {introComplete && (
        <OrbitControls 
          ref={controlsRef} 
          enableZoom={true} 
          minDistance={0.1}
          maxDistance={50}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
          rotateSpeed={-0.5} // Invert rotation for natural dragging
          target={[0, 0, -0.1]} // Look forward
        />
      )}
      <mesh scale={[-1, 1, 1]}> {/* Scale -1 on X maps the texture inside-out */}
        <sphereGeometry args={[500, 64, 40]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

// Custom Loader that looks like SRM's
function TourHtmlOverlay({ introComplete, onSkip }: { introComplete: boolean; onSkip: () => void }) {
  if (introComplete) return null;
  
  return (
    <Html center className="pointer-events-auto" zIndexRange={[100, 0]}>
      <div className="flex flex-col items-center justify-center animate-pulse" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
        <img src="/logo.png" alt="Logo" className="w-16 h-16 mb-4 filter drop-shadow-xl opacity-90" />
        <div className="text-white font-bold tracking-[0.3em] uppercase whitespace-nowrap mb-2" style={{ fontSize: '13px' }}>
          Eswar College of Engineering
        </div>
        <div className="text-white/80 tracking-widest text-xs mb-8">LOADING VIRTUAL TOUR...</div>
        
        <button 
          onClick={onSkip}
          className="mt-8 px-6 py-2 bg-black/40 border border-white/30 text-white rounded-full text-xs font-bold tracking-widest hover:bg-gold hover:text-navy hover:border-gold transition-all backdrop-blur-sm"
        >
          SKIP INTRO
        </button>
      </div>
    </Html>
  );
}

/* ══════════════════════════════════════════════════════════════
   SATELLITE MAP OVERLAY
   ══════════════════════════════════════════════════════════════ */
function SatelliteMapOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-40 bg-black/80 backdrop-blur flex items-center justify-center pt-12">
      <div className="w-[95%] max-w-5xl bg-navy rounded-xl overflow-hidden shadow-2xl border border-white/10" style={{ height: '80vh' }}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-light/5">
          <div className="text-gold font-bold text-lg">Eswar Virtual Tour — Satellite Map</div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="relative w-full h-[calc(100%-60px)]">
          <iframe
            title="Eswar College Location"
            src="https://maps.google.com/maps?q=Eswar+College+of+Engineering,+Kesanupalli,+Narasaraopeta,+Andhra+Pradesh&t=k&z=16&ie=UTF8&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN VIRTUAL TOUR PAGE
   ══════════════════════════════════════════════════════════════ */
export default function VirtualTourPage() {
  const [activeLocation, setActiveLocation] = useState(TOUR_LOCATIONS[0]);
  const [_activeCategory, _setActiveCategory] = useState('All');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const [showGrid, setShowGrid] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [compassAngle, setCompassAngle] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const handleLocationChange = (loc: typeof TOUR_LOCATIONS[0]) => {
    if (loc.id === activeLocation.id) return;
    setActiveLocation(loc);
    setShowGrid(false);
  };

  const getCategoryLocations = (cat: string) => TOUR_LOCATIONS.filter(l => l.category === cat);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden font-inter"
      style={{ height: isFullscreen ? '100vh' : 'calc(100vh - 120px)', minHeight: '600px' }}
    >
      {/* ═══ TOP NAVBAR (SRM STYLE) ═══ */}
      <div className="absolute top-0 left-0 right-0 z-30 bg-[#004A99] shadow-lg flex items-center justify-between px-6" style={{ height: '60px' }}>
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Eswar" className="h-10 w-10 bg-white rounded-full p-1" />
          <div className="text-white hidden md:block">
            <div className="font-bold text-lg leading-none tracking-wide text-gold">ESWAR</div>
            <div className="text-[10px] opacity-80 tracking-widest mt-0.5">VIRTUAL TOUR</div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-1">
          {CATEGORIES.filter(c => c !== 'All').map(cat => (
            <div key={cat} className="relative group" onMouseEnter={() => setOpenDropdown(cat)} onMouseLeave={() => setOpenDropdown(null)}>
              <button className="text-white px-4 py-5 font-bold text-[13px] hover:text-gold flex items-center gap-1">
                {cat}
                <svg className="w-3 h-3 opacity-70 group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </button>
              {openDropdown === cat && (
                <div className="absolute top-full left-0 bg-[#003875] min-w-[200px] py-2 shadow-2xl border-t-2 border-gold">
                  {getCategoryLocations(cat).map(loc => (
                    <button key={loc.id} onClick={() => handleLocationChange(loc)}
                      className="w-full text-left px-5 py-2.5 text-white/90 hover:text-gold hover:bg-white/5 text-[13px] transition-colors">
                      {loc.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ═══ TRUE 3D VIEWER ═══ */}
      <div className="absolute inset-0 cursor-move">
        <Canvas>
          <Suspense fallback={null}>
            <TourScene 
              panoramaUrl={activeLocation.panorama} 
              introComplete={introComplete}
              setIntroComplete={setIntroComplete}
              setCompassAngle={setCompassAngle}
            />
            <TourHtmlOverlay introComplete={introComplete} onSkip={() => setIntroComplete(true)} />
          </Suspense>
        </Canvas>
      </div>

      {/* ═══ LEFT SIDEBAR ═══ */}
      {introComplete && (
        <>
          <div className={`absolute left-0 top-[60px] bottom-0 z-20 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} style={{ width: '180px' }}>
            <div className="h-full bg-navy/80 backdrop-blur-md border-r border-[#698cb0]/20 overflow-y-auto py-4 px-3 custom-scrollbar">
              <div className="text-gold font-bold text-xs uppercase tracking-widest mb-4 px-2">Locations</div>
              {TOUR_LOCATIONS.map((loc) => (
                <button key={loc.id} onClick={() => handleLocationChange(loc)}
                  className="w-full flex flex-col items-center py-3 px-2 mb-2 group">
                  <div className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 ${activeLocation.id === loc.id ? 'ring-2 ring-gold ring-offset-2 ring-offset-navy shadow-[0_0_15px_rgba(200,144,10,0.5)] scale-110' : 'opacity-80 group-hover:opacity-100 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white/30'}`}>
                    <img src={loc.thumb} alt="" className="w-full h-full object-cover" crossOrigin="anonymous" />
                  </div>
                  <span className={`mt-3 text-center leading-tight font-bold transition-colors ${activeLocation.id === loc.id ? 'text-gold' : 'text-white/70 group-hover:text-white'}`} style={{ fontSize: '11px' }}>
                    {loc.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute z-20 top-[80px] bg-navy/80 text-white/80 hover:text-gold p-2 rounded-r-lg backdrop-blur-sm transition-all"
            style={{ left: sidebarOpen ? '180px' : '0' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${!sidebarOpen ? 'rotate-180' : ''}`}><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        </>
      )}

      {/* ═══ BOTTOM UI OVERLAYS ═══ */}
      {introComplete && (
        <>
          {/* Compass */}
          <div className="absolute top-[80px] right-6 z-20 pointer-events-none">
            <div className="relative w-14 h-14 bg-navy/50 backdrop-blur-md rounded-full border border-white/20 flex flex-col items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" style={{ transform: `rotate(${compassAngle}deg)`, transition: 'transform 0.1s' }}>
                <path d="M12 2L19 21L12 17L5 21L12 2Z" fill="#C8900A" />
                <path d="M12 17L12 2L5 21L12 17Z" fill="#E8B02A" opacity="0.6" />
              </svg>
              <span className="text-white/60 font-bold mt-1" style={{ fontSize: '9px' }}>N</span>
            </div>
          </div>

          {/* Bottom Title Badge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <div className="bg-navy/80 backdrop-blur-xl px-6 py-3 rounded text-center border border-[#698cb0]/20 shadow-2xl">
              <div className="text-gold text-[10px] font-bold tracking-widest uppercase mb-1">{activeLocation.category}</div>
              <div className="text-white text-base font-bold whitespace-nowrap">{activeLocation.title}</div>
            </div>
          </div>

          {/* Bottom Right Controls */}
          <div className="absolute bottom-8 right-6 z-20 flex items-center gap-2">
            <button onClick={() => setShowGrid(true)} className="w-[42px] h-[42px] bg-white text-navy hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z"/></svg>
            </button>
            <button onClick={() => setShowMap(true)} className="w-[42px] h-[42px] bg-white text-navy hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </button>
            <button onClick={toggleFullscreen} className="w-[42px] h-[42px] bg-white text-navy hover:bg-gold rounded-full flex items-center justify-center shadow-lg transition-colors">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                 {isFullscreen 
                  ? <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3" />
                  : <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                 }
               </svg>
            </button>
          </div>
        </>
      )}

      {/* Grid Overlay */}
      {showGrid && (
        <div className="absolute inset-0 z-50 bg-black/95 flex flex-col pt-[60px]">
          <div className="flex justify-end p-6 border-b border-white/10">
            <button onClick={() => setShowGrid(false)} className="text-white hover:text-gold flex items-center gap-2 font-bold group">
              <span className="text-sm">CLOSE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-90 transition-transform"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-8 overflow-auto">
            {TOUR_LOCATIONS.map(loc => (
              <button key={loc.id} onClick={() => handleLocationChange(loc)} className="text-left group outline-none">
                <div className="aspect-video rounded overflow-hidden mb-3 relative">
                  <img src={loc.thumb} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" crossOrigin="anonymous" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                  {activeLocation.id === loc.id && <div className="absolute inset-0 border-2 border-gold rounded" />}
                </div>
                <div className="text-white font-bold text-sm leading-snug group-hover:text-gold transition-colors">{loc.title}</div>
                <div className="text-white/50 text-[11px] font-medium tracking-widest uppercase mt-1">{loc.category}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {showMap && <SatelliteMapOverlay onClose={() => setShowMap(false)} />}
    </div>
  );
}
