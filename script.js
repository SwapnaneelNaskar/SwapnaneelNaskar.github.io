/* ==========================================================================
   Swapnaneel Naskar — Architectural Portfolio Engine
   Multi-Agent Swarm, 7-Layer Stack Inspector, Wireframe Engine & Sound
   ========================================================================== */

// --- 7-Layer Interactive Stack Data ---
const STACK_LAYERS = {
  1: {
    tag: "LAYER 01 // NEURAL BIOMETRICS",
    title: "Client-Side FaceAPI Neural Core",
    desc: "100% on-device biometric verification running via WebAssembly and TensorFlow.js. Extracts 68 facial landmarks and generates a 128-dimensional Euclidean facial vector descriptor in real time — completely eliminating biometric data leakage to third-party cloud servers.",
    code: `// Real-Time 128-d Face Descriptor Extraction
const detections = await faceapi
  .detectSingleFace(videoElement, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.85 }))
  .withFaceLandmarks()
  .withFaceDescriptor();

if (detections) {
  const match = faceMatcher.findBestMatch(detections.descriptor);
  dispatchVerification({ verified: match.distance < 0.45, distance: match.distance });
}`,
    stats: { latency: "< 42ms", mode: "Client WASM", privacy: "100% Sovereign" }
  },
  2: {
    tag: "LAYER 02 // REACT 19 RUNTIME",
    title: "React 19 State & Action Pipeline",
    desc: "Engineered using modern React 19 concurrent features: actions, optimistic updates, and strict unidirectional data flow. Enforces clean component hierarchies and immutable state transformations across academic grade rosters and student records.",
    code: `// React 19 Optimistic State & Action Flow
const [optimisticStudents, setOptimistic] = useOptimistic(
  students,
  (state, update) => state.map(s => s.id === update.id ? { ...s, ...update } : s)
);

const handleGradeUpdate = async (formData) => {
  setOptimistic({ id: formData.get('id'), cgpa: formData.get('cgpa') });
  await academicApi.syncRecord(formData);
};`,
    stats: { latency: "< 8ms", mode: "Concurrent React", privacy: "Strict Typing" }
  },
  3: {
    tag: "LAYER 03 // IDENTITY & SSO",
    title: "Multi-Role Institutional SSO & RBAC",
    desc: "Hierarchical role-based access control (RBAC) delineating discrete privilege boundaries across Students, Department Faculty, and University Administrators. Secure credential hashing with audit-logging for all grade modifications.",
    code: `// Role-Based Guard & Session Verification
export const verifyAuthority = (session, requiredRole) => {
  if (!session?.token || session.isExpired()) throw new SecurityException("UNAUTHORIZED");
  const roleHierarchy = { ADMIN: 3, FACULTY: 2, STUDENT: 1 };
  return roleHierarchy[session.role] >= roleHierarchy[requiredRole];
};`,
    stats: { latency: "< 12ms", mode: "RBAC Guard", privacy: "Zero Trust" }
  },
  4: {
    tag: "LAYER 04 // ALGORITHMIC SORTING",
    title: "Immutable CGPA Ranking Engine",
    desc: "Deterministic O(N log N) sorting and ranking algorithms operating over high-density student matriculation datasets. Supports multi-predicate sorting by CGPA, semester credits, departmental tier, and attendance thresholds.",
    code: `// Stable Multi-Key Academic Rank Sorter
export const computeRanks = (roster) => {
  return [...roster].sort((a, b) => {
    if (b.cgpa !== a.cgpa) return b.cgpa - a.cgpa;
    return b.attendancePercentage - a.attendancePercentage;
  }).map((entry, rank) => ({ ...entry, rank: rank + 1 }));
};`,
    stats: { latency: "0.4ms / 1k", mode: "O(N log N)", privacy: "Pure Function" }
  },
  5: {
    tag: "LAYER 05 // VISUAL FABRIC",
    title: "Glassmorphic Op-Art UI Architecture",
    desc: "Responsive design system crafted with dynamic CSS backdrop filters, custom CSS variables, and high-contrast accessibility tokens. Delivers instantaneous touch feedback, fluid layout transitions, and seamless cross-device ergonomics.",
    code: `/* Noir Glassmorphic System Fabric */
.glass-panel {
  background: rgba(14, 17, 23, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45);
}`,
    stats: { latency: "60 FPS", mode: "GPU Composite", privacy: "A11y Compliant" }
  },
  6: {
    tag: "LAYER 06 // RESILIENCE & STORAGE",
    title: "Offline-First Local Persistence Pattern",
    desc: "Repository abstraction layer bridging browser LocalStorage and IndexedDB caches. Guarantees zero data loss during network dropouts by maintaining an optimistic transaction replay journal.",
    code: `// Optimistic Offline Storage Engine
export class LocalPersistenceRepository {
  static save(key, payload) {
    try {
      const envelope = { timestamp: Date.now(), data: payload };
      localStorage.setItem(key, JSON.stringify(envelope));
    } catch (e) {
      console.warn("Storage quota exceeded, switching to memory buffer");
    }
  }
}`,
    stats: { latency: "< 1ms", mode: "IndexedDB / LS", privacy: "Local-Only" }
  },
  7: {
    tag: "LAYER 07 // AUDITABILITY",
    title: "Cryptographic Tamper-Evident Audit Trails",
    desc: "State change observer logging all administrative modifications with immutable timestamps and cryptographic hashes. Generates verifiable audit manifests ready for academic compliance reviews.",
    code: `// Audit Event Seal Generator
const createAuditRecord = (actor, action, targetId) => ({
  eventId: crypto.randomUUID(),
  actorId: actor.id,
  actionType: action,
  targetId: targetId,
  timestamp: new Date().toISOString(),
  checksum: generateSHA256(\`\${actor.id}:\${action}:\${targetId}\`)
});`,
    stats: { latency: "< 2ms", mode: "SHA-256 Seal", privacy: "Immutable" }
  }
};

// --- Multi-Agent Swarm Simulation ---
class SwarmEngine {
  constructor() {
    this.agents = [];
    this.totalAgents = 28;
    this.container = document.body;
    this.active = true;
    this.boundingBox = null;
    this.boxTimer = null;
    this.colors = ['#ef4444', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#3b82f6'];
    this.roles = [
      'Orchestrator', 'State Pipeline', 'FaceAPI Verifier', 'Code Synthesizer',
      'Security Audit', 'UI Engine', 'Logistics Router', 'Entropy Scanner',
      'FastAPI Sentry', 'Axiomatic Checker', 'ML Forecaster', 'CUDA Pipeline',
      'Docker Monitor', 'Cache Manager', 'Network Guard', 'Tailwind Styler'
    ];
    this.init();
  }

  init() {
    // Spawn 12 active visible floating agent cursors across the viewport
    const visibleCount = 10;
    for (let i = 0; i < visibleCount; i++) {
      const id = i + 1;
      const color = this.colors[i % this.colors.length];
      const role = this.roles[i % this.roles.length];
      const agent = this.createAgent(id, color, role);
      this.agents.push(agent);
    }

    this.createCadBoundingBox();
    this.animate();
    this.scheduleCadHighlights();
  }

  createAgent(id, color, role) {
    const el = document.createElement('div');
    el.className = 'agent-cursor';
    el.innerHTML = `
      <svg class="cursor-pointer-svg" viewBox="0 0 24 24" fill="none">
        <path d="M5 3L19 12L12 14L9 21L5 3Z" fill="${color}" stroke="#000" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>
      <div class="agent-name-tag" style="background: ${color};">
        Agent-${id.toString().padStart(2, '0')} (${role})
      </div>
    `;

    this.container.appendChild(el);

    return {
      el,
      x: Math.random() * window.innerWidth * 0.8 + 50,
      y: Math.random() * window.innerHeight * 0.8 + 80,
      targetX: Math.random() * window.innerWidth * 0.8 + 50,
      targetY: Math.random() * window.innerHeight * 0.8 + 80,
      speed: 0.02 + Math.random() * 0.02,
      idleCounter: 0,
      id
    };
  }

  createCadBoundingBox() {
    this.boundingBox = document.createElement('div');
    this.boundingBox.className = 'cad-bounding-box';
    this.boundingBox.innerHTML = `
      <div class="cad-handle tl"></div>
      <div class="cad-handle tr"></div>
      <div class="cad-handle bl"></div>
      <div class="cad-handle br"></div>
      <div class="cad-dimension-badge">1346 x 100</div>
    `;
    this.boundingBox.style.display = 'none';
    document.body.appendChild(this.boundingBox);
  }

  scheduleCadHighlights() {
    const targets = [
      '.hero-intro', '.portrait-card', '.hero-runtime-card',
      '.master-ecosystem-card', '.philosophy-quote', '.verification-card'
    ];

    setInterval(() => {
      if (!this.active) return;
      const sel = targets[Math.floor(Math.random() * targets.length)];
      const targetEl = document.querySelector(sel);
      if (targetEl && this.boundingBox) {
        const rect = targetEl.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;

        this.boundingBox.style.top = `${rect.top + scrollY - 6}px`;
        this.boundingBox.style.left = `${rect.left + scrollX - 6}px`;
        this.boundingBox.style.width = `${rect.width + 12}px`;
        this.boundingBox.style.height = `${rect.height + 12}px`;
        this.boundingBox.style.display = 'block';

        const dimBadge = this.boundingBox.querySelector('.cad-dimension-badge');
        if (dimBadge) {
          dimBadge.textContent = `${Math.round(rect.width)} x ${Math.round(rect.height)}`;
        }

        // Direct lead agent towards the box
        if (this.agents[0]) {
          this.agents[0].targetX = rect.left + rect.width / 2;
          this.agents[0].targetY = rect.top + rect.height / 2;
        }

        if (window.soundFX) window.soundFX.playCadBlip();

        setTimeout(() => {
          if (this.boundingBox) this.boundingBox.style.display = 'none';
        }, 3200);
      }
    }, 9000);
  }

  animate() {
    if (this.active) {
      const scrollY = window.scrollY || window.pageYOffset;
      this.agents.forEach((ag) => {
        // Smooth lerp movement
        ag.x += (ag.targetX - ag.x) * ag.speed;
        ag.y += (ag.targetY - ag.y) * ag.speed;

        ag.el.style.transform = `translate3d(${ag.x}px, ${ag.y}px, 0)`;

        ag.idleCounter++;
        if (ag.idleCounter > 120 || Math.hypot(ag.targetX - ag.x, ag.targetY - ag.y) < 20) {
          ag.targetX = Math.random() * (window.innerWidth - 180) + 40;
          ag.targetY = Math.random() * (window.innerHeight - 120) + 60;
          ag.idleCounter = 0;
        }
      });
    }

    requestAnimationFrame(() => this.animate());
  }

  toggleActive() {
    this.active = !this.active;
    this.agents.forEach(a => a.el.style.display = this.active ? 'flex' : 'none');
    if (this.boundingBox) this.boundingBox.style.display = 'none';
    return this.active;
  }

  triggerReplayBuild() {
    // Replay wireframe build effect
    const banner = document.createElement('div');
    banner.style.position = 'fixed';
    banner.style.top = '80px';
    banner.style.left = '50%';
    banner.style.transform = 'translateX(-50%)';
    banner.style.background = '#ef4444';
    banner.style.color = '#fff';
    banner.style.padding = '8px 20px';
    banner.style.borderRadius = '4px';
    banner.style.fontFamily = 'JetBrains Mono, monospace';
    banner.style.fontSize = '12px';
    banner.style.fontWeight = '700';
    banner.style.zIndex = '300';
    banner.style.boxShadow = '0 0 30px rgba(239, 68, 68, 0.7)';
    banner.textContent = '>> REBUILDING SYSTEM SCHEMATICS VIA 28 AGENTS...';
    document.body.appendChild(banner);

    if (window.soundFX) window.soundFX.playDeploy();

    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = '';
      banner.remove();
    }, 700);
  }
}

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Swarm
  const swarm = new SwarmEngine();

  // 2. Setup 7-Layer Tab Clicks
  const layerTabs = document.querySelectorAll('.layer-tab-btn');
  const layerIndexTag = document.getElementById('layer-index-tag');
  const layerTitle = document.getElementById('layer-title');
  const layerDesc = document.getElementById('layer-desc');
  const layerCode = document.getElementById('layer-code-block');
  const statLatency = document.getElementById('stat-latency');
  const statMode = document.getElementById('stat-mode');
  const statPrivacy = document.getElementById('stat-privacy');

  layerTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const layerNum = e.target.getAttribute('data-layer');
      const data = STACK_LAYERS[layerNum];
      if (!data) return;

      layerTabs.forEach(t => t.classList.remove('active'));
      e.target.classList.add('active');

      if (layerIndexTag) layerIndexTag.textContent = data.tag;
      if (layerTitle) layerTitle.textContent = data.title;
      if (layerDesc) layerDesc.textContent = data.desc;
      if (layerCode) layerCode.textContent = data.code;
      if (statLatency) statLatency.textContent = data.stats.latency;
      if (statMode) statMode.textContent = data.stats.mode;
      if (statPrivacy) statPrivacy.textContent = data.stats.privacy;

      if (window.soundFX) window.soundFX.playSwitch();
    });
  });

  // 3. Setup Systems Matrix Filter Pills
  const matrixPills = document.querySelectorAll('.matrix-filter-pill');
  const matrixCards = document.querySelectorAll('.matrix-item-card');

  matrixPills.forEach(pill => {
    pill.addEventListener('click', (e) => {
      const cat = e.target.getAttribute('data-filter');
      matrixPills.forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');

      matrixCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });

      if (window.soundFX) window.soundFX.playClick();
    });
  });

  // 4. Email Clipboard Copy
  const copyBtn = document.getElementById('btn-copy-email');
  const toast = document.getElementById('toast-notice');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const email = 'swapnaneelnaskar2006@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('✓ Email copied to clipboard: ' + email);
        if (window.soundFX) window.soundFX.playClick();
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  }

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // 5. Dispatch Modal Setup
  const dispatchModal = document.getElementById('dispatch-modal');
  const openDispatchBtns = document.querySelectorAll('.btn-open-dispatch');
  const closeDispatchBtn = document.getElementById('btn-close-dispatch');
  const dispatchForm = document.getElementById('dispatch-form');
  const terminalLog = document.getElementById('terminal-log-output');

  openDispatchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (dispatchModal) dispatchModal.classList.add('active');
      if (window.soundFX) window.soundFX.playDeploy();
    });
  });

  if (closeDispatchBtn && dispatchModal) {
    closeDispatchBtn.addEventListener('click', () => {
      dispatchModal.classList.remove('active');
      if (window.soundFX) window.soundFX.playClick();
    });

    dispatchModal.addEventListener('click', (e) => {
      if (e.target === dispatchModal) {
        dispatchModal.classList.remove('active');
      }
    });
  }

  if (dispatchForm) {
    dispatchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const sender = document.getElementById('dispatch-sender').value;
      const email = document.getElementById('dispatch-email').value;
      const type = document.getElementById('dispatch-type').value;
      const msg = document.getElementById('dispatch-msg').value;

      if (terminalLog) {
        terminalLog.innerHTML += `<br/><span style="color:#10b981;">[TRANSMIT] Encrypting packet from \${sender} (\${email})...</span>`;
        terminalLog.innerHTML += `<br/><span style="color:#06b6d4;">[ROUTER] Routing payload to swapnaneelnaskar2006@gmail.com</span>`;
        terminalLog.scrollTop = terminalLog.scrollHeight;
      }

      if (window.soundFX) window.soundFX.playDeploy();

      setTimeout(() => {
        // Construct mailto link
        const subject = encodeURIComponent(`[Portfolio Dispatch - \${type}] Message from \${sender}`);
        const body = encodeURIComponent(`From: \${sender} (\${email})\nScope: \${type}\n\nMessage:\n\${msg}`);
        window.location.href = `mailto:swapnaneelnaskar2006@gmail.com?subject=\${subject}&body=\${body}`;
        
        showToast('✓ Dispatch Packet Ready! Opening Mail Client...');
        if (dispatchModal) dispatchModal.classList.remove('active');
      }, 1000);
    });
  }

  // 6. Bottom Swarm Bar Controls
  const toggleSwarmBtn = document.getElementById('btn-toggle-swarm');
  const replayBuildBtn = document.getElementById('btn-replay-build');
  const toggleSoundBtn = document.getElementById('btn-toggle-sound');

  if (toggleSwarmBtn) {
    toggleSwarmBtn.addEventListener('click', () => {
      const active = swarm.toggleActive();
      toggleSwarmBtn.innerHTML = active ? '⏸' : '▶';
      showToast(active ? 'Agents Swarm: Active' : 'Agents Swarm: Paused');
      if (window.soundFX) window.soundFX.playClick();
    });
  }

  if (replayBuildBtn) {
    replayBuildBtn.addEventListener('click', () => {
      swarm.triggerReplayBuild();
    });
  }

  if (toggleSoundBtn) {
    toggleSoundBtn.addEventListener('click', () => {
      if (window.soundFX) {
        const enabled = window.soundFX.toggleMute();
        toggleSoundBtn.innerHTML = enabled ? '🔊' : '🔇';
        showToast(enabled ? 'Audio Synthesizer: ON' : 'Audio Synthesizer: OFF');
        if (enabled) window.soundFX.playClick();
      }
    });
  }

  // 7. Stat Number Counter Animation on Scroll
  const counters = document.querySelectorAll('.stat-val');
  let counted = false;

  const countUp = () => {
    counters.forEach(c => {
      const target = c.getAttribute('data-count');
      if (!target) return;
      const num = parseInt(target, 10);
      let current = 0;
      const step = Math.max(1, Math.floor(num / 30));
      const interval = setInterval(() => {
        current += step;
        if (current >= num) {
          c.textContent = target;
          clearInterval(interval);
        } else {
          c.textContent = current + '+';
        }
      }, 40);
    });
  };

  window.addEventListener('scroll', () => {
    if (!counted && window.scrollY > 20) {
      countUp();
      counted = true;
    }
  }, { once: true });
});
