(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();class yt{ctx=null;isMuted=!1;alarmOscillator=null;alarmGain=null;alarmTimer=null;isAlarmRunning=!1;constructor(){}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.stopAlarm(),this.isMuted}getMuted(){return this.isMuted}startTripAlarm(){if(this.isMuted||this.isAlarmRunning||(this.initContext(),!this.ctx))return;this.isAlarmRunning=!0;let e=0;const i=()=>{if(!this.isAlarmRunning||this.isMuted||!this.ctx)return;const t=this.ctx.createOscillator(),a=this.ctx.createGain();t.type="sawtooth";const n=this.ctx.currentTime;t.frequency.setValueAtTime(e%2===0?1050:850,n),t.frequency.exponentialRampToValueAtTime(e%2===0?700:550,n+.35),a.gain.setValueAtTime(.12,n),a.gain.exponentialRampToValueAtTime(.001,n+.38);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2200,n),t.connect(o),o.connect(a),a.connect(this.ctx.destination),t.start(n),t.stop(n+.4),e++,this.alarmTimer=window.setTimeout(i,420)};i()}stopAlarm(){this.isAlarmRunning=!1,this.alarmTimer!==null&&(clearTimeout(this.alarmTimer),this.alarmTimer=null)}playBreakerOperation(e){if(this.isMuted||(this.initContext(),!this.ctx))return;const i=this.ctx.currentTime,t=this.ctx.createOscillator(),a=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(e?95:120,i),t.frequency.exponentialRampToValueAtTime(28,i+.15),a.gain.setValueAtTime(.35,i),a.gain.exponentialRampToValueAtTime(.001,i+.18),t.connect(a),a.connect(this.ctx.destination),t.start(i),t.stop(i+.2);const n=this.ctx.sampleRate*.04,o=this.ctx.createBuffer(1,n,this.ctx.sampleRate),c=o.getChannelData(0);for(let d=0;d<n;d++)c[d]=(Math.random()*2-1)*Math.exp(-d/(n*.2));const m=this.ctx.createBufferSource();m.buffer=o;const r=this.ctx.createGain();r.gain.setValueAtTime(.2,i),r.gain.exponentialRampToValueAtTime(.001,i+.05);const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1400,i),l.Q.setValueAtTime(3,i),m.connect(l),l.connect(r),r.connect(this.ctx.destination),m.start(i+.01)}playWarningChime(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),t=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,e),i.frequency.setValueAtTime(1174,e+.12),t.gain.setValueAtTime(.08,e),t.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(t),t.connect(this.ctx.destination),i.start(e),i.stop(e+.36)}playClick(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),t=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(600,e),i.frequency.exponentialRampToValueAtTime(120,e+.03),t.gain.setValueAtTime(.06,e),t.gain.exponentialRampToValueAtTime(.001,e+.035),i.connect(t),t.connect(this.ctx.destination),i.start(e),i.stop(e+.04)}}const u=new yt;class bt{data;listeners=[];timer=null;soeListeners=[];tickCount=0;constructor(){this.data=this.getInitialTelemetry(),this.startEngine()}getInitialTelemetry(){return{timestamp:new Date().toLocaleTimeString(),soeClock:this.formatSoeClock(new Date),alarmBannerState:"NORMAL",alarmBannerMessage:"SYSTEM HEALTHY - ALL PROCESS LOOPS BALANCED & INTERLOCKS CLEAR",activeFault:"NONE",hpPump:{status:"RUNNING",suctionPressureBar:2.45,dischargePressureBar:64.2,flowRateM3h:1850,vfdFrequencyHz:58.4,motorCurrentA:218.4,activePowerMW:3.45,powerFactor:.94,secKwhM3:2.85,antiHammerValveOpenPct:100,statorTempsC:{u1:88.4,v1:89.1,w1:87.6,u2:88.9,v2:89.5,w2:88.1},bearingTempsC:{driveEnd:64.2,nonDriveEnd:58.7}},membranePx:{status:"ONLINE",feedTdsPpm:42500,permeateTdsPpm:185,saltRejectionPct:99.56,permeateConductivityUScm:320,feedPh:7.85,permeatePh:7.2,orpMv:245,recoveryRatioPct:43.5,permeateFlowM3h:805,brineFlowM3h:1045,brineTdsPpm:75200,pxRotorRpm:1200,pxBrineInletBar:62.8,pxBoostedSeawaterBar:61.2,pxBrineDischargeBar:1.8,pxEfficiencyPct:96.2,pxPowerSavedMW:4.62,smbsDosingActive:!1,dumpValveActive:!1},substation:{busVoltageV:11020,gridFrequencyHz:50,cb01IncomerClosed:!0,cb02MotorFeederClosed:!0,earthSwitchClosed:!1,sf6GasPressureBar:6.2,relays:{ansi51Overcurrent:"IDLE",ansi46UnbalancePct:2.1,ansi46Status:"OK",ansi37Undercurrent:"ARMED",ansi50nEarthFaultA:.4,ansi50nStatus:"OK"},interlocks:{suctionPressureSafe:!0,freeChlorineSafe:!0}},aiPredictive:{healthIndexPct:98.4,transmembranePressureBar:1.42,cavitationVibrationMmS:.18,anomalyState:"OPTIMAL",anomalyMessage:"Stage-2 Membrane Bio-Fouling & Pump Acoustics Normal. CIP Scheduled: 180 Days.",recommendedCipHours:4320}}}formatSoeClock(e){const i=String(e.getHours()).padStart(2,"0"),t=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0"),n=String(e.getMilliseconds()).padStart(3,"0");return`${i}:${t}:${a}.${n}`}subscribe(e){this.listeners.push(e),e(this.data)}onSoeLog(e){this.soeListeners.push(e)}emitSoe(e,i=!1){this.soeListeners.forEach(t=>t(e,i))}notify(){this.listeners.forEach(e=>e(this.data))}getTelemetry(){return this.data}toggleMute(){return u.toggleMute()}getMuted(){return u.getMuted()}injectFault(e){switch(u.playClick(),this.data.activeFault=e,e){case"SUCTION_CAVITATION":{this.data.hpPump.suctionPressureBar=1.12,this.data.substation.interlocks.suctionPressureSafe=!1,this.data.hpPump.status="TRIPPED",this.data.hpPump.dischargePressureBar=4.2,this.data.hpPump.vfdFrequencyHz=0,this.data.hpPump.motorCurrentA=0,this.data.hpPump.activePowerMW=0,this.data.hpPump.antiHammerValveOpenPct=0,this.data.substation.relays.ansi37Undercurrent="TRIPPED",this.data.substation.cb02MotorFeederClosed=!1,this.data.membranePx.status="OFFLINE",this.data.membranePx.pxRotorRpm=0,this.data.aiPredictive.cavitationVibrationMmS=2.45,this.data.aiPredictive.anomalyState="CRITICAL_CIP",this.data.aiPredictive.anomalyMessage="EMERGENCY: Suction Cavitation & NPSH Starvation. Impeller Guard Tripped in 50ms.",this.data.alarmBannerState="TRIP",this.data.alarmBannerMessage="TRIP: LOW SUCTION PRESSURE (<1.8 BAR) - VFD EMERGENCY SHUTDOWN",u.playBreakerOperation(!1),u.startTripAlarm(),this.emitSoe("INTERLOCK 1 TRIP: Low Suction Pressure (1.12 Bar < 1.8 Bar). Cavitation guard shut down 11kV VFD in 50ms.",!0),this.emitSoe("ANSI 37 TRIP: Motor undercurrent detected. 11kV Feeder CB-02 opened.",!0);break}case"CHLORINE_BREAKTHROUGH":{this.data.membranePx.orpMv=462,this.data.substation.interlocks.freeChlorineSafe=!1,this.data.membranePx.smbsDosingActive=!0,this.data.membranePx.dumpValveActive=!0,this.data.membranePx.status="DUMPING",this.data.alarmBannerState="WARNING",this.data.alarmBannerMessage="SAFETY INTERLOCK: FREE CHLORINE BREAKTHROUGH (ORP > 350 mV) - DUMP VALVE OPENED",u.playWarningChime(),this.emitSoe("INTERLOCK 2 ALERT: Free Chlorine Breakthrough! ORP spiked to 462 mV (>350 mV).",!0),this.emitSoe("INTERLOCK ACTION: Emergency SMBS chemical dosing activated at 100% capacity.",!1),this.emitSoe("INTERLOCK ACTION: Fast-acting 3-Way Dump Valve opened in 180ms. Stream routed to marine outfall to safeguard membranes.",!0);break}case"MEMBRANE_SCALING":{this.data.aiPredictive.transmembranePressureBar=3.82,this.data.aiPredictive.cavitationVibrationMmS=1.48,this.data.aiPredictive.healthIndexPct=71.5,this.data.aiPredictive.anomalyState="CRITICAL_CIP",this.data.aiPredictive.anomalyMessage="Stage-2 Membrane Bio-Fouling & Pump Cavitation Signature at 1.4 kHz - CIP Cleaning Recommended in 24h",this.data.aiPredictive.recommendedCipHours=24,this.data.membranePx.permeateTdsPpm=485,this.data.membranePx.saltRejectionPct=96.12,this.data.membranePx.permeateConductivityUScm=680,this.data.hpPump.dischargePressureBar=67.8,this.data.hpPump.secKwhM3=3.42,this.data.alarmBannerState="WARNING",this.data.alarmBannerMessage="AI ADVISORY: STAGE-2 MEMBRANE SCALING & HIGH ΔP (3.82 BAR) - CIP CLEANING REQUIRED",u.playWarningChime(),this.emitSoe("AI PREDICTIVE ANOMALY: Transmembrane ΔP reached 3.82 Bar. Salt rejection dropped to 96.12%.",!0),this.emitSoe("SPECTRAL DIAGNOSTIC: 1.4 kHz vibration spike observed (1.48 mm/s). Chemical Clean-In-Place (CIP) mandated in 24h.",!0);break}case"PHASE_UNBALANCE_ANSI46":{this.data.substation.relays.ansi46UnbalancePct=14.8,this.data.substation.relays.ansi46Status="TRIPPED",this.data.substation.cb02MotorFeederClosed=!1,this.data.hpPump.status="TRIPPED",this.data.hpPump.dischargePressureBar=3.8,this.data.hpPump.vfdFrequencyHz=0,this.data.hpPump.motorCurrentA=0,this.data.hpPump.activePowerMW=0,this.data.hpPump.antiHammerValveOpenPct=0,this.data.membranePx.status="OFFLINE",this.data.membranePx.pxRotorRpm=0,this.data.alarmBannerState="TRIP",this.data.alarmBannerMessage="ELECTRICAL TRIP: ANSI 46 PHASE CURRENT UNBALANCE (14.8% > 8%) - 11kV GIS BREAKER OPENED",u.playBreakerOperation(!1),u.startTripAlarm(),this.emitSoe("ANSI 46 ELECTRICAL TRIP: Negative-sequence current unbalance I₂/I₁ = 14.8% (>8% setpoint).",!0),this.emitSoe("BREAKER TRIP: 11kV SF6 GIS Feeder CB-02 tripped in 40ms to protect motor rotor against reverse flux heating.",!0);break}case"NORMAL_RESTART":{u.stopAlarm(),u.playBreakerOperation(!0),this.data=this.getInitialTelemetry(),this.data.alarmBannerState="NORMAL",this.data.alarmBannerMessage="SYSTEM HEALTHY - ALL PROCESS LOOPS BALANCED & INTERLOCKS CLEAR",this.emitSoe("SYSTEM FLUSH: Permeate low-pressure flush executed. Brine line purged.",!1),this.emitSoe("ELECTRICAL RECLOSE: 11kV GIS Feeder CB-02 reclosed successfully. Relays reset to IDLE.",!1),this.emitSoe("VFD SOFT-START: Anti-water hammer ramp executed. Discharge pressure stabilized at 64.2 Bar.",!1),this.emitSoe("INTERLOCKS CLEARED: Suction pressure 2.45 Bar, ORP 245 mV nominal. ERI PX rotor reached 1,200 RPM.",!1);break}}this.notify()}startEngine(){this.timer=window.setInterval(()=>{this.tick()},1e3)}tick(){this.tickCount++;const e=new Date;if(this.data.timestamp=e.toLocaleTimeString(),this.data.soeClock=this.formatSoeClock(e),this.data.activeFault==="NONE"||this.data.activeFault==="NORMAL_RESTART"){const i=(Math.random()-.5)*.4,t=(Math.random()-.5)*.02,a=(Math.random()-.5)*1.5;this.data.hpPump.dischargePressureBar=Number((64.2+i).toFixed(1)),this.data.hpPump.motorCurrentA=Number((218.4+a).toFixed(1)),this.data.hpPump.secKwhM3=Number((2.85+t).toFixed(2)),this.data.membranePx.orpMv=Math.round(245+(Math.random()-.5)*8),this.data.membranePx.permeateTdsPpm=Math.round(185+(Math.random()-.5)*4),this.data.membranePx.pxRotorRpm=Math.round(1200+(Math.random()-.5)*12),this.data.aiPredictive.transmembranePressureBar=Number((1.42+(Math.random()-.5)*.04).toFixed(2)),this.data.aiPredictive.cavitationVibrationMmS=Number((.18+(Math.random()-.5)*.03).toFixed(2)),this.data.substation.busVoltageV=Math.round(11020+(Math.random()-.5)*30),this.data.substation.gridFrequencyHz=Number((50+(Math.random()-.5)*.03).toFixed(2)),this.data.hpPump.bearingTempsC.driveEnd=Number((64.2+Math.sin(this.tickCount*.05)*.5).toFixed(1)),this.data.hpPump.bearingTempsC.nonDriveEnd=Number((58.7+Math.cos(this.tickCount*.05)*.4).toFixed(1))}this.notify()}toggleBreaker(e){if(e==="CB02"){const i=!this.data.substation.cb02MotorFeederClosed;this.data.substation.cb02MotorFeederClosed=i,u.playBreakerOperation(i),i?(this.data.hpPump.status="RUNNING",this.data.hpPump.dischargePressureBar=64.2,this.data.hpPump.motorCurrentA=218.4,this.data.hpPump.activePowerMW=3.45,this.data.hpPump.antiHammerValveOpenPct=100,this.data.membranePx.status="ONLINE",this.data.membranePx.pxRotorRpm=1200,this.emitSoe("OPERATOR COMMAND: 11kV Feeder Breaker CB-02 CLOSED manually. High-pressure pump restarted.",!1)):(this.data.hpPump.status="STOPPED",this.data.hpPump.dischargePressureBar=0,this.data.hpPump.motorCurrentA=0,this.data.hpPump.activePowerMW=0,this.data.hpPump.antiHammerValveOpenPct=0,this.data.membranePx.status="OFFLINE",this.data.membranePx.pxRotorRpm=0,this.emitSoe("OPERATOR COMMAND: 11kV Feeder Breaker CB-02 OPENED manually. High-pressure pump de-energized.",!0)),this.notify()}}}const p=new bt;class Pt{container;constructor(e){this.container=e,this.render()}render(){this.container.innerHTML=`
      <svg viewBox="0 0 1100 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background: #070c18; border-radius: 6px; overflow: hidden; font-family: var(--font-mono);">
        <defs>
          <!-- Gradients -->
          <linearGradient id="swGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0f766e" />
            <stop offset="100%" stop-color="#14b8a6" />
          </linearGradient>

          <linearGradient id="hpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#38bdf8" />
          </linearGradient>

          <linearGradient id="brineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ea580c" />
            <stop offset="100%" stop-color="#f97316" />
          </linearGradient>

          <linearGradient id="permGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0891b2" />
            <stop offset="100%" stop-color="#06b6d4" />
          </linearGradient>

          <linearGradient id="vesselGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b" />
            <stop offset="50%" stop-color="#334155" />
            <stop offset="100%" stop-color="#0f172a" />
          </linearGradient>

          <linearGradient id="pumpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0369a1" />
            <stop offset="50%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#082f49" />
          </linearGradient>

          <!-- Drop Shadows / Glows -->
          <filter id="glowHp" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowPerm" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="glowBrine" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Background grid coordinates -->
        <g stroke="#1e293b" stroke-width="0.5" stroke-dasharray="4 8" opacity="0.4">
          <line x1="0" y1="70" x2="1100" y2="70" />
          <line x1="0" y1="140" x2="1100" y2="140" />
          <line x1="0" y1="210" x2="1100" y2="210" />
          <line x1="0" y1="280" x2="1100" y2="280" />
          <line x1="0" y1="350" x2="1100" y2="350" />
          <line x1="180" y1="0" x2="180" y2="420" />
          <line x1="380" y1="0" x2="380" y2="420" />
          <line x1="600" y1="0" x2="600" y2="420" />
          <line x1="820" y1="0" x2="820" y2="420" />
        </g>

        <!-- ================= PIPELINES (UNDERLAYER) ================= -->
        <!-- 1. Raw Seawater Line (Intake -> Filter -> HP Pump) -->
        <path d="M 30 180 L 110 180 L 110 180 L 170 180 L 230 180 L 290 180" 
              fill="none" stroke="#0d9488" stroke-width="6" class="pipe-seawater" />
        <path d="M 30 180 L 290 180" 
              fill="none" stroke="#5eead4" stroke-width="2" class="pipe-flow-dash" id="sw-flow-dash" />

        <!-- Chemical Dosing Pipe (SMBS into Seawater line) -->
        <path d="M 200 80 L 200 176" 
              fill="none" stroke="#d946ef" stroke-width="3" stroke-dasharray="4 4" class="pipe-chemical" id="smbs-pipe" />

        <!-- 2. High-Pressure Discharge Line (Pump -> Anti-Hammer -> RO Manifold) -->
        <path d="M 390 180 L 460 180 L 520 180" 
              fill="none" stroke="#0284c7" stroke-width="8" class="pipe-hp-feed" id="hp-pipe-main" />
        <path d="M 390 180 L 520 180" 
              fill="none" stroke="#38bdf8" stroke-width="3" class="pipe-flow-dash" id="hp-flow-dash" />

        <!-- Branch to RO Vessels (Stage 1: Top & Bottom) -->
        <path d="M 520 180 L 520 110 L 570 110" fill="none" stroke="#0284c7" stroke-width="6" />
        <path d="M 520 180 L 520 250 L 570 250" fill="none" stroke="#0284c7" stroke-width="6" />
        <path d="M 520 180 L 570 180" fill="none" stroke="#0284c7" stroke-width="6" />

        <!-- 3. Permeate Product Line (Cyan) from Vessel Center cores to Tank -->
        <path d="M 770 110 L 810 110 L 810 80 L 960 80" 
              fill="none" stroke="#06b6d4" stroke-width="5" class="pipe-permeate" filter="url(#glowPerm)" />
        <path d="M 770 180 L 810 180 L 810 80" fill="none" stroke="#06b6d4" stroke-width="4" />
        <path d="M 770 250 L 810 250 L 810 80" fill="none" stroke="#06b6d4" stroke-width="4" />
        <path d="M 810 80 L 960 80" 
              fill="none" stroke="#a5f3fc" stroke-width="2" class="pipe-flow-dash" id="perm-flow-dash" />

        <!-- 3-Way Dump Valve line (Diverts to outfall if free chlorine) -->
        <path d="M 870 80 L 870 20 L 1050 20" 
              fill="none" stroke="#ef4444" stroke-width="4" stroke-dasharray="5 5" id="dump-line" opacity="0.3" />

        <!-- 4. High-Pressure Brine Reject Line (Orange) from Vessels to ERI PX -->
        <path d="M 750 125 L 780 125 L 780 340 L 670 340" 
              fill="none" stroke="#f97316" stroke-width="6" class="pipe-brine" filter="url(#glowBrine)" />
        <path d="M 750 195 L 780 195" fill="none" stroke="#f97316" stroke-width="5" />
        <path d="M 750 265 L 780 265" fill="none" stroke="#f97316" stroke-width="5" />
        <path d="M 780 340 L 670 340" 
              fill="none" stroke="#fdba74" stroke-width="2" class="pipe-flow-dash" id="brine-hp-dash" />

        <!-- 5. ERI PX Discharged Low-Pressure Brine to Outfall (1.8 Bar) -->
        <path d="M 570 340 L 460 340 L 460 390 L 30 390" 
              fill="none" stroke="#ea580c" stroke-width="5" stroke-dasharray="6 4" opacity="0.8" />

        <!-- 6. ERI PX Boosted Seawater return to HP manifold (61.2 Bar) -->
        <path d="M 620 300 L 620 210 L 520 210" 
              fill="none" stroke="#0284c7" stroke-width="5" stroke-dasharray="5 3" class="pipe-hp-feed" id="px-boost-pipe" />

        <!-- ================= EQUIPMENT NODES & DETAILS ================= -->

        <!-- EQUIPMENT 1: Seawater Intake & Booster Pump -->
        <g id="eq-intake">
          <!-- Intake Basin -->
          <rect x="20" y="145" width="55" height="70" rx="4" fill="#0b1329" stroke="#14b8a6" stroke-width="2" />
          <path d="M 26 160 Q 36 155 46 160 T 66 160" fill="none" stroke="#14b8a6" stroke-width="1.5" />
          <path d="M 26 175 Q 36 170 46 175 T 66 175" fill="none" stroke="#14b8a6" stroke-width="1.5" />
          <path d="M 26 190 Q 36 185 46 190 T 66 190" fill="none" stroke="#14b8a6" stroke-width="1.5" />
          <text x="47" y="206" fill="#94a3b8" font-size="8" text-anchor="middle" font-weight="700">INTAKE</text>
          
          <!-- LP Booster Pump -->
          <circle cx="105" cy="180" r="16" fill="#0f172a" stroke="#14b8a6" stroke-width="2" />
          <circle cx="105" cy="180" r="10" fill="#0d9488" class="pump-impeller-spinning" />
          <polygon points="105,172 110,180 100,180" fill="#ffffff" />
          <text x="105" y="210" fill="#5eead4" font-size="9" text-anchor="middle">LP-01</text>
          <text x="105" y="220" fill="#64748b" font-size="7.5" text-anchor="middle">3.2 Bar</text>
        </g>

        <!-- EQUIPMENT 2: Dual Media Filter & 5µm Cartridge Filter -->
        <g id="eq-filtration">
          <!-- Dual Media Sand Filter -->
          <rect x="145" y="145" width="40" height="70" rx="6" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5" />
          <line x1="145" y1="170" x2="185" y2="170" stroke="#475569" stroke-width="1" />
          <line x1="145" y1="190" x2="185" y2="190" stroke="#334155" stroke-width="1" />
          <text x="165" y="162" fill="#94a3b8" font-size="7.5" text-anchor="middle">DMF</text>
          <text x="165" y="182" fill="#64748b" font-size="7" text-anchor="middle">SAND</text>
          <text x="165" y="202" fill="#64748b" font-size="7" text-anchor="middle">ANTH</text>

          <!-- 5µm Cartridge Guard Filter -->
          <rect x="210" y="150" width="36" height="60" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
          <line x1="216" y1="156" x2="216" y2="204" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2 3" />
          <line x1="228" y1="156" x2="228" y2="204" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2 3" />
          <line x1="240" y1="156" x2="240" y2="204" stroke="#0284c7" stroke-width="1.5" stroke-dasharray="2 3" />
          <text x="228" y="222" fill="#38bdf8" font-size="8" text-anchor="middle" font-weight="700">5µm CF</text>
          <text x="228" y="232" fill="#64748b" font-size="7" text-anchor="middle">ΔP 0.15 Bar</text>
        </g>

        <!-- CHEMICAL DOSING: SMBS Dechlorination Station -->
        <g id="eq-smbs-station">
          <rect x="180" y="45" width="40" height="35" rx="3" fill="#1f132b" stroke="#d946ef" stroke-width="1.5" id="smbs-tank" />
          <text x="200" y="60" fill="#f0abfc" font-size="8" text-anchor="middle" font-weight="700">SMBS</text>
          <text x="200" y="70" fill="#e879f9" font-size="7" text-anchor="middle">DOSING</text>
          <circle cx="200" cy="90" r="7" fill="#3b0764" stroke="#d946ef" stroke-width="1" id="smbs-pump-circle" />
          <polygon points="198,87 203,90 198,93" fill="#d946ef" />
          <text x="200" y="106" fill="#d946ef" font-size="7" text-anchor="middle" id="smbs-status-text">DECHLOR</text>
        </g>

        <!-- Suction Pressure Sensor Probe (P_in) -->
        <g id="sensor-suction">
          <circle cx="265" cy="180" r="5" fill="#0284c7" />
          <line x1="265" y1="180" x2="265" y2="135" stroke="#0284c7" stroke-width="1.5" />
          <rect x="240" y="115" width="50" height="20" rx="3" fill="#070b14" stroke="#0ea5e9" stroke-width="1" />
          <text x="265" y="128" fill="#38bdf8" font-size="8" text-anchor="middle" font-weight="700" id="svg-suction-p">2.45 Bar</text>
          <text x="265" y="110" fill="#64748b" font-size="7" text-anchor="middle">PT-101 (NPSH)</text>
        </g>

        <!-- EQUIPMENT 3: 11kV 3,800 kW High-Pressure Multistage Feed Pump -->
        <g id="eq-hp-pump">
          <!-- Motor Housing (11kV VFD) -->
          <rect x="295" y="145" width="42" height="70" rx="4" fill="#075985" stroke="#38bdf8" stroke-width="2" />
          <!-- Cooling fins -->
          <line x1="301" y1="150" x2="301" y2="210" stroke="#0284c7" stroke-width="1.5" />
          <line x1="307" y1="150" x2="307" y2="210" stroke="#0284c7" stroke-width="1.5" />
          <line x1="313" y1="150" x2="313" y2="210" stroke="#0284c7" stroke-width="1.5" />
          <line x1="319" y1="150" x2="319" y2="210" stroke="#0284c7" stroke-width="1.5" />
          <line x1="325" y1="150" x2="325" y2="210" stroke="#0284c7" stroke-width="1.5" />
          <text x="316" y="226" fill="#38bdf8" font-size="8" text-anchor="middle" font-weight="700">11kV VFD</text>
          <text x="316" y="236" fill="#64748b" font-size="7" text-anchor="middle">3,800 kW</text>

          <!-- Pump Coupling & Bearing Block with PT100 probe -->
          <rect x="337" y="165" width="12" height="30" fill="#1e293b" stroke="#64748b" />
          <circle cx="343" cy="180" r="3" fill="#10b981" id="svg-bearing-de-dot" />

          <!-- Multistage Barrel Volute Pump -->
          <path d="M 349 150 L 390 160 L 390 200 L 349 210 Z" fill="url(#pumpGrad)" stroke="#38bdf8" stroke-width="2" />
          <!-- Internal multistage impellers spinning -->
          <g id="svg-pump-impellers" class="pump-impeller-spinning" style="transform-origin: 370px 180px;">
            <circle cx="370" cy="180" r="16" fill="none" stroke="#e0f2fe" stroke-width="1.5" stroke-dasharray="6 4" />
            <line x1="354" y1="180" x2="386" y2="180" stroke="#e0f2fe" stroke-width="2" />
            <line x1="370" y1="164" x2="370" y2="196" stroke="#e0f2fe" stroke-width="2" />
          </g>

          <text x="370" y="226" fill="#0284c7" font-size="9" text-anchor="middle" font-weight="800">HP-PUMP</text>
          <text x="370" y="237" fill="#38bdf8" font-size="8" text-anchor="middle" font-weight="700" id="svg-hp-p-badge">64.2 Bar</text>
        </g>

        <!-- Discharge Pressure Sensor Probe & Anti-Water Hammer Control Valve (MOV-101) -->
        <g id="eq-anti-hammer-valve">
          <!-- Anti-Water Hammer Ramp Valve (MOV-101) -->
          <polygon points="430,172 445,180 430,188" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
          <polygon points="460,172 445,180 460,188" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
          <!-- Actuator -->
          <rect x="440" y="152" width="10" height="15" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
          <circle cx="445" cy="159" r="3" fill="#10b981" id="svg-valve-led" />
          <text x="445" y="144" fill="#94a3b8" font-size="7.5" text-anchor="middle">MOV-101</text>
          <text x="445" y="202" fill="#5eead4" font-size="7" text-anchor="middle" id="svg-valve-pct">RAMP 100%</text>
        </g>

        <!-- EQUIPMENT 4: Reverse Osmosis Membrane Train (PV-01 to PV-03) -->
        <g id="eq-ro-train">
          <!-- Train Enclosure outline -->
          <rect x="560" y="70" width="200" height="215" rx="8" fill="#0b1326" stroke="#1e293b" stroke-width="1" />
          <text x="660" y="90" fill="#94a3b8" font-size="9" text-anchor="middle" font-weight="700">SWRO MEMBRANE TRAIN-A (DOW FILMTEC SW30)</text>

          <!-- Vessel 1 (Stage 1 Top) -->
          <rect x="575" y="100" width="170" height="28" rx="6" fill="url(#vesselGrad)" stroke="#38bdf8" stroke-width="1.5" />
          <line x1="585" y1="114" x2="735" y2="114" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 2" />
          <text x="655" y="117" fill="#f8fafc" font-size="8" text-anchor="middle">PV-01 [TFC Polyamide 8" x 40"]</text>

          <!-- Vessel 2 (Stage 1 Middle) -->
          <rect x="575" y="145" width="170" height="28" rx="6" fill="url(#vesselGrad)" stroke="#38bdf8" stroke-width="1.5" />
          <line x1="585" y1="159" x2="735" y2="159" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 2" />
          <text x="655" y="162" fill="#f8fafc" font-size="8" text-anchor="middle">PV-02 [Spiral Wound 99.8% Rej]</text>

          <!-- Vessel 3 (Stage 2 High Recovery) -->
          <rect x="575" y="190" width="170" height="28" rx="6" fill="url(#vesselGrad)" stroke="#38bdf8" stroke-width="1.5" id="svg-vessel-stage2" />
          <line x1="585" y1="204" x2="735" y2="204" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 2" />
          <text x="655" y="207" fill="#f8fafc" font-size="8" text-anchor="middle">PV-03 [Stage-2 High Rejection]</text>

          <!-- Vessel 4 (Bottom) -->
          <rect x="575" y="235" width="170" height="28" rx="6" fill="url(#vesselGrad)" stroke="#38bdf8" stroke-width="1.5" />
          <line x1="585" y1="249" x2="735" y2="249" stroke="#06b6d4" stroke-width="2" stroke-dasharray="4 2" />
          <text x="655" y="252" fill="#f8fafc" font-size="8" text-anchor="middle">PV-04 [Concentrate Stage]</text>

          <!-- Permeate Collector Bar -->
          <rect x="765" y="100" width="12" height="165" rx="3" fill="#0891b2" stroke="#06b6d4" />
          <text x="771" y="278" fill="#06b6d4" font-size="7.5" text-anchor="middle">PERMEATE</text>
        </g>

        <!-- EQUIPMENT 5: ERI Isobaric Pressure Exchanger (PX-1200) -->
        <g id="eq-eri-px">
          <rect x="580" y="305" width="85" height="70" rx="8" fill="#111827" stroke="#f97316" stroke-width="2" />
          <text x="622" y="322" fill="#fb923c" font-size="8.5" text-anchor="middle" font-weight="700">ERI PX ROTOR</text>
          
          <!-- Spinning Ceramic Rotor Graphic with radial conduits -->
          <g id="svg-px-rotor" class="px-rotor-spinning" style="transform-origin: 622px 345px;">
            <circle cx="622" cy="345" r="18" fill="#1e293b" stroke="#f97316" stroke-width="2" />
            <circle cx="622" cy="345" r="5" fill="#f8fafc" />
            <!-- Radial ceramic conduits -->
            <line x1="622" y1="327" x2="622" y2="363" stroke="#fdba74" stroke-width="1.5" />
            <line x1="604" y1="345" x2="640" y2="345" stroke="#fdba74" stroke-width="1.5" />
            <line x1="609" y1="332" x2="635" y2="358" stroke="#fdba74" stroke-width="1.5" />
            <line x1="609" y1="358" x2="635" y2="332" stroke="#fdba74" stroke-width="1.5" />
          </g>

          <text x="622" y="372" fill="#f97316" font-size="7.5" text-anchor="middle" id="svg-px-speed">1,200 RPM</text>
          <text x="622" y="388" fill="#10b981" font-size="8" text-anchor="middle" font-weight="700">96.2% RECOVERY</text>
        </g>

        <!-- Fast 3-Way Dump Valve (XV-102) for Free Chlorine Outfall Divert -->
        <g id="eq-dump-valve">
          <polygon points="860,72 875,80 860,88" fill="#0891b2" stroke="#06b6d4" stroke-width="1.5" />
          <polygon points="890,72 875,80 890,88" fill="#0891b2" stroke="#06b6d4" stroke-width="1.5" />
          <polygon points="870,80 880,80 875,95" fill="#0891b2" stroke="#06b6d4" stroke-width="1.5" />
          <rect x="870" y="52" width="10" height="15" fill="#070b14" stroke="#06b6d4" />
          <circle cx="875" cy="59" r="3" fill="#10b981" id="svg-dump-led" />
          <text x="875" y="46" fill="#94a3b8" font-size="7.5" text-anchor="middle">XV-102</text>
          <text x="875" y="108" fill="#64748b" font-size="7" text-anchor="middle" id="svg-dump-status">NORMAL (POTABLE)</text>
        </g>

        <!-- EQUIPMENT 6: Permeate Potable Storage & Quality Station -->
        <g id="eq-potable-tank">
          <!-- Permeate Tank -->
          <rect x="960" y="55" width="115" height="150" rx="6" fill="#0c192c" stroke="#06b6d4" stroke-width="2" />
          <text x="1017" y="75" fill="#38bdf8" font-size="9" text-anchor="middle" font-weight="700">POTABLE PERMEATE</text>
          
          <!-- Water Level Waves -->
          <path d="M 965 110 Q 980 106 995 110 T 1025 110 T 1055 110 L 1070 110 L 1070 198 L 965 198 Z" 
                fill="url(#permGrad)" opacity="0.3" />

          <!-- Sensor Readouts inside Tank box -->
          <rect x="972" y="90" width="90" height="24" rx="3" fill="#070c18" stroke="#164e63" />
          <text x="980" y="105" fill="#94a3b8" font-size="7.5">TDS:</text>
          <text x="1055" y="106" fill="#06b6d4" font-size="9" text-anchor="end" font-weight="700" id="svg-tank-tds">185 ppm</text>

          <rect x="972" y="120" width="90" height="24" rx="3" fill="#070c18" stroke="#164e63" />
          <text x="980" y="135" fill="#94a3b8" font-size="7.5">COND:</text>
          <text x="1055" y="136" fill="#10b981" font-size="9" text-anchor="end" font-weight="700" id="svg-tank-cond">320 µS/cm</text>

          <rect x="972" y="150" width="90" height="24" rx="3" fill="#070c18" stroke="#164e63" />
          <text x="980" y="165" fill="#94a3b8" font-size="7.5">ORP:</text>
          <text x="1055" y="166" fill="#38bdf8" font-size="9" text-anchor="end" font-weight="700" id="svg-tank-orp">245 mV</text>

          <text x="1017" y="190" fill="#64748b" font-size="7.5" text-anchor="middle">WHO POTABLE GRADE</text>
        </g>

        <!-- Brine Outfall Marine Dispersion Node -->
        <g id="eq-outfall">
          <rect x="25" y="375" width="85" height="30" rx="4" fill="#1c0e05" stroke="#ea580c" stroke-width="1.5" />
          <text x="67" y="390" fill="#fb923c" font-size="8" text-anchor="middle" font-weight="700">MARINE OUTFALL</text>
          <text x="67" y="400" fill="#94a3b8" font-size="7" text-anchor="middle">1.8 Bar | 75,200 ppm</text>
        </g>
      </svg>
    `}update(e){const i=document.getElementById("svg-suction-p");i&&(i.textContent=`${e.hpPump.suctionPressureBar} Bar`,i.setAttribute("fill",e.hpPump.suctionPressureBar<1.8?"#ef4444":"#38bdf8"));const t=document.getElementById("svg-hp-p-badge");t&&(t.textContent=`${e.hpPump.dischargePressureBar} Bar`,t.setAttribute("fill",e.hpPump.status==="RUNNING"?"#38bdf8":"#ef4444"));const a=document.getElementById("svg-pump-impellers");a&&(e.hpPump.status==="RUNNING"?a.classList.add("pump-impeller-spinning"):a.classList.remove("pump-impeller-spinning"));const n=document.getElementById("svg-px-rotor"),o=document.getElementById("svg-px-speed");n&&o&&(o.textContent=`${e.membranePx.pxRotorRpm} RPM`,e.membranePx.pxRotorRpm>0?n.classList.add("px-rotor-spinning"):n.classList.remove("px-rotor-spinning"));const c=document.getElementById("smbs-pump-circle"),m=document.getElementById("smbs-status-text"),r=document.getElementById("smbs-tank");c&&m&&r&&(e.membranePx.smbsDosingActive?(c.classList.add("dosing-active"),r.setAttribute("stroke","#f43f5e"),m.textContent="INJECTING (100%)",m.setAttribute("fill","#f43f5e")):(c.classList.remove("dosing-active"),r.setAttribute("stroke","#d946ef"),m.textContent="DECHLOR (IDLE)",m.setAttribute("fill","#d946ef")));const l=document.getElementById("svg-dump-led"),d=document.getElementById("svg-dump-status"),h=document.getElementById("dump-line");l&&d&&h&&(e.membranePx.dumpValveActive?(l.setAttribute("fill","#ef4444"),d.textContent="DUMPING TO OUTFALL!",d.setAttribute("fill","#ef4444"),h.setAttribute("opacity","1"),h.setAttribute("stroke","#ef4444")):(l.setAttribute("fill","#10b981"),d.textContent="NORMAL (POTABLE)",d.setAttribute("fill","#64748b"),h.setAttribute("opacity","0.2"),h.setAttribute("stroke","#64748b")));const P=document.getElementById("svg-valve-pct"),v=document.getElementById("svg-valve-led");P&&v&&(P.textContent=`RAMP ${e.hpPump.antiHammerValveOpenPct}%`,v.setAttribute("fill",e.hpPump.antiHammerValveOpenPct>0?"#10b981":"#ef4444"));const C=document.getElementById("svg-tank-tds"),S=document.getElementById("svg-tank-cond"),I=document.getElementById("svg-tank-orp");C&&(C.textContent=`${e.membranePx.permeateTdsPpm} ppm`),S&&(S.textContent=`${e.membranePx.permeateConductivityUScm} µS/cm`),I&&(I.textContent=`${e.membranePx.orpMv} mV`);const g=document.getElementById("svg-vessel-stage2");g&&(e.aiPredictive.transmembranePressureBar>3?(g.setAttribute("stroke","#f59e0b"),g.setAttribute("stroke-width","2.5")):(g.setAttribute("stroke","#38bdf8"),g.setAttribute("stroke-width","1.5")))}}class vt{container;constructor(e){this.container=e,this.render(),this.bindEvents()}render(){this.container.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; font-size: 11px;">
        <span class="font-mono text-cyan"><i class="fa-solid fa-bolt"></i> 11 kV GIS BUSBAR (50 Hz)</span>
        <span class="font-mono text-muted" id="sld-sf6-gauge">SF6 GAS: 6.2 Bar (OK)</span>
      </div>
      <div style="flex: 1; position: relative;">
        <svg viewBox="0 0 540 310" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="font-family: var(--font-mono);">
          <!-- 11kV Main Busbar (Heavy horizontal line) -->
          <line x1="40" y1="35" x2="500" y2="35" stroke="#0ea5e9" stroke-width="6" id="sld-busbar" />
          <text x="50" y="24" fill="#38bdf8" font-size="9" font-weight="700">11 kV BUS-A (11,020 V)</text>

          <!-- Incomer Bay (Left) -->
          <g id="sld-incomer-bay">
            <line x1="120" y1="35" x2="120" y2="70" stroke="#0ea5e9" stroke-width="3" />
            <!-- Disconnector DS-01 -->
            <circle cx="120" cy="70" r="4" fill="#38bdf8" />
            <line x1="120" y1="70" x2="120" y2="100" stroke="#0ea5e9" stroke-width="3" />
            <circle cx="120" cy="100" r="4" fill="#38bdf8" />
            <text x="135" y="88" fill="#94a3b8" font-size="8">DS-01</text>

            <!-- Incomer Breaker CB-01 -->
            <rect x="105" y="110" width="30" height="30" rx="3" fill="#0f172a" stroke="#10b981" stroke-width="2" id="sld-cb01-box" />
            <line x1="120" y1="110" x2="120" y2="140" stroke="#10b981" stroke-width="3" id="sld-cb01-contact" />
            <text x="142" y="128" fill="#10b981" font-size="8.5" font-weight="700" id="sld-cb01-label">CB-01 (ON)</text>

            <!-- Grid Infeed Line -->
            <line x1="120" y1="140" x2="120" y2="180" stroke="#0ea5e9" stroke-width="3" />
            <polygon points="120,200 110,180 130,180" fill="#0284c7" />
            <text x="120" y="218" fill="#94a3b8" font-size="8" text-anchor="middle">GRID 11kV</text>
          </g>

          <!-- Motor Feeder Bay (Right - 3,800 kW HP-01) -->
          <g id="sld-motor-bay">
            <line x1="360" y1="35" x2="360" y2="70" stroke="#0ea5e9" stroke-width="3" />
            <!-- Disconnector DS-02 -->
            <circle cx="360" cy="70" r="4" fill="#38bdf8" />
            <line x1="360" y1="70" x2="360" y2="100" stroke="#0ea5e9" stroke-width="3" />
            <circle cx="360" cy="100" r="4" fill="#38bdf8" />
            <text x="375" y="88" fill="#94a3b8" font-size="8">DS-02</text>

            <!-- Motor GIS Breaker CB-02 (Interactive Click) -->
            <g id="sld-cb02-group" class="sld-breaker-btn" title="Click to manually toggle 11kV Breaker">
              <rect x="345" y="110" width="30" height="30" rx="3" fill="#0f172a" stroke="#10b981" stroke-width="2" id="sld-cb02-box" />
              <line x1="360" y1="110" x2="360" y2="140" stroke="#10b981" stroke-width="3" id="sld-cb02-contact" />
              <text x="382" y="128" fill="#10b981" font-size="8.5" font-weight="700" id="sld-cb02-label">CB-02 [CLOSED]</text>
            </g>

            <!-- Current Transformer CT 300/1A -->
            <line x1="360" y1="140" x2="360" y2="165" stroke="#0ea5e9" stroke-width="3" id="sld-ct-line" />
            <circle cx="360" cy="165" r="7" fill="none" stroke="#f59e0b" stroke-width="1.5" />
            <circle cx="360" cy="172" r="7" fill="none" stroke="#f59e0b" stroke-width="1.5" />
            <text x="380" y="172" fill="#f59e0b" font-size="7.5">CT 300/1A (ANSI 51/46/37)</text>

            <!-- Line to VFD Inverter -->
            <line x1="360" y1="180" x2="360" y2="205" stroke="#0ea5e9" stroke-width="3" id="sld-vfd-in-line" />

            <!-- 11kV VFD Converter / Inverter Symbol -->
            <rect x="330" y="205" width="60" height="42" rx="4" fill="#075985" stroke="#38bdf8" stroke-width="1.5" id="sld-vfd-box" />
            <line x1="330" y1="247" x2="390" y2="205" stroke="#0284c7" stroke-width="1" />
            <!-- AC-DC-AC symbols -->
            <text x="343" y="222" fill="#ffffff" font-size="9" font-weight="700">~</text>
            <text x="345" y="238" fill="#ffffff" font-size="9" font-weight="700">=</text>
            <text x="375" y="222" fill="#ffffff" font-size="9" font-weight="700">=</text>
            <text x="373" y="238" fill="#ffffff" font-size="9" font-weight="700">~</text>
            <text x="400" y="225" fill="#38bdf8" font-size="7.5">11kV VFD</text>
            <text x="400" y="236" fill="#94a3b8" font-size="7" id="sld-vfd-freq">58.4 Hz</text>

            <!-- Motor Connection -->
            <line x1="360" y1="247" x2="360" y2="265" stroke="#0ea5e9" stroke-width="3" id="sld-motor-cable" />
            <circle cx="360" cy="285" r="18" fill="#0369a1" stroke="#38bdf8" stroke-width="2" id="sld-motor-circle" />
            <text x="360" y="289" fill="#ffffff" font-size="10" font-weight="800" text-anchor="middle">M</text>
            <text x="360" y="299" fill="#94a3b8" font-size="7" text-anchor="middle">3~ 3.8 MW</text>
          </g>

          <!-- Protective Relay Links annotation -->
          <g id="sld-relay-signals" opacity="0.8">
            <path d="M 367 165 L 430 165" stroke="#f59e0b" stroke-width="1" stroke-dasharray="2 2" />
            <rect x="430" y="155" width="85" height="20" rx="3" fill="#070b14" stroke="#f59e0b" stroke-width="1" />
            <text x="472" y="168" fill="#f59e0b" font-size="7.5" text-anchor="middle">SIPROTEC 7SJ85</text>
          </g>
        </svg>
      </div>
    `}bindEvents(){const e=document.getElementById("sld-cb02-group");e&&e.addEventListener("click",()=>{p.toggleBreaker("CB02")})}update(e){const i=document.getElementById("sld-cb02-box"),t=document.getElementById("sld-cb02-contact"),a=document.getElementById("sld-cb02-label"),n=document.getElementById("sld-vfd-box"),o=document.getElementById("sld-motor-circle"),c=document.getElementById("sld-vfd-freq");c&&(c.textContent=`${e.hpPump.vfdFrequencyHz} Hz`),i&&t&&a&&(e.substation.cb02MotorFeederClosed?(i.setAttribute("stroke","#10b981"),t.setAttribute("stroke","#10b981"),t.setAttribute("x2","360"),a.textContent="CB-02 [CLOSED]",a.setAttribute("fill","#10b981"),n&&n.setAttribute("fill","#075985"),o&&o.setAttribute("fill","#0369a1")):(i.setAttribute("stroke","#ef4444"),t.setAttribute("stroke","#ef4444"),t.setAttribute("x2","348"),a.textContent="CB-02 [OPEN / TRIP]",a.setAttribute("fill","#ef4444"),n&&n.setAttribute("fill","#1e293b"),o&&o.setAttribute("fill","#1e293b")))}}class kt{canvas;ctx;tmpHistory=[];vibeHistory=[];maxPoints=80;animId=null;currentTelemetry=null;constructor(e){this.canvas=e;const i=e.getContext("2d");if(!i)throw new Error("Canvas 2D context not supported");this.ctx=i,this.resize(),window.addEventListener("resize",()=>this.resize());for(let t=0;t<this.maxPoints;t++)this.tmpHistory.push(1.42+(Math.random()-.5)*.05),this.vibeHistory.push(.18+(Math.random()-.5)*.04);this.startLoop()}resize(){const e=this.canvas.parentElement?.getBoundingClientRect();if(e){const i=window.devicePixelRatio||1;this.canvas.width=e.width*i,this.canvas.height=e.height*i,this.ctx.scale(i,i)}}update(e){this.currentTelemetry=e,this.tmpHistory.push(e.aiPredictive.transmembranePressureBar),this.tmpHistory.length>this.maxPoints&&this.tmpHistory.shift(),this.vibeHistory.push(e.aiPredictive.cavitationVibrationMmS),this.vibeHistory.length>this.maxPoints&&this.vibeHistory.shift();const i=document.getElementById("ai-health-pill"),t=document.getElementById("anomaly-banner-card"),a=document.getElementById("anomaly-headline"),n=document.getElementById("anomaly-subtext"),o=document.getElementById("ai-recommendation-tag");i&&(i.textContent=`AI HEALTH: ${e.aiPredictive.healthIndexPct}% (${e.aiPredictive.anomalyState})`,i.className=e.aiPredictive.anomalyState==="OPTIMAL"?"status-pill status-running":"status-pill status-tripped"),a&&n&&o&&t&&(e.aiPredictive.anomalyState==="CRITICAL_CIP"?(t.className="anomaly-card anomaly-alert",a.textContent="CRITICAL ANOMALY: STAGE-2 MEMBRANE SCALING & CAVITATION AT 1.4 kHz",n.textContent=e.aiPredictive.anomalyMessage,o.textContent="CIP MANDATED: 24 HOURS!",o.className="badge-tag tag-amber"):(t.className="anomaly-card",a.textContent="NEURAL ANOMALY DETECTOR: STAGE-2 MEMBRANE & PUMP ACOUSTICS",n.textContent=`Transmembrane Pressure ΔP: ${e.aiPredictive.transmembranePressureBar} Bar | FFT Peak at 1.4 kHz: ${e.aiPredictive.cavitationVibrationMmS} mm/s RMS (Healthy)`,o.textContent="CIP SCHEDULED: 180 DAYS",o.className="badge-tag tag-cyan"))}startLoop(){const e=()=>{this.renderCanvas(),this.animId=requestAnimationFrame(e)};e()}renderCanvas(){const e=this.canvas.parentElement?.clientWidth||500,i=this.canvas.parentElement?.clientHeight||180,t=this.ctx;t.clearRect(0,0,e,i),t.strokeStyle="#1e293b",t.lineWidth=.8,t.setLineDash([4,4]);for(let r=30;r<i;r+=35)t.beginPath(),t.moveTo(40,r),t.lineTo(e-15,r),t.stroke();for(let r=40;r<e;r+=60)t.beginPath(),t.moveTo(r,10),t.lineTo(r,i-20),t.stroke();t.setLineDash([]),t.fillStyle="#64748b",t.font='9px "JetBrains Mono", monospace',t.textAlign="right",t.fillText("4.0 Bar",36,32),t.fillText("2.5 Bar",36,75),t.fillText("1.0 Bar",36,120),t.fillText("0.0 Bar",36,i-22);const a=i-20-3.5/4*(i-40);t.strokeStyle="rgba(245, 158, 11, 0.7)",t.lineWidth=1.2,t.setLineDash([6,3]),t.beginPath(),t.moveTo(40,a),t.lineTo(e-15,a),t.stroke(),t.setLineDash([]),t.fillStyle="#f59e0b",t.textAlign="right",t.fillText("CIP THRESHOLD (3.5 Bar)",e-20,a-4);const n=(e-60)/(this.maxPoints-1);t.strokeStyle="#06b6d4",t.lineWidth=2.5,t.shadowColor="rgba(6, 182, 212, 0.5)",t.shadowBlur=6,t.beginPath();for(let r=0;r<this.tmpHistory.length;r++){const l=45+r*n,d=Math.min(Math.max(this.tmpHistory[r]/4.5,0),1),h=i-22-d*(i-40);r===0?t.moveTo(l,h):t.lineTo(l,h)}t.stroke(),t.shadowBlur=0,t.strokeStyle="#a855f7",t.lineWidth=1.8,t.shadowColor="rgba(168, 85, 247, 0.6)",t.shadowBlur=5,t.beginPath();for(let r=0;r<this.vibeHistory.length;r++){const l=45+r*n,d=Math.min(Math.max(this.vibeHistory[r]*1.5/4.5,0),1),h=i-22-d*(i-40);r===0?t.moveTo(l,h):t.lineTo(l,h)}t.stroke(),t.shadowBlur=0;const o=this.tmpHistory.length-1,c=45+o*n,m=i-22-this.tmpHistory[o]/4.5*(i-40);t.fillStyle="#06b6d4",t.beginPath(),t.arc(c,m,4,0,Math.PI*2),t.fill(),t.strokeStyle="#ffffff",t.lineWidth=1.5,t.stroke()}destroy(){this.animId&&cancelAnimationFrame(this.animId)}}class Et{modalEl=null;constructor(){this.createModal()}createModal(){const e=document.getElementById("engineering-dossier-root");if(!e)return;const i=document.createElement("div");i.id="engineering-dossier-modal",i.className="modal-backdrop hidden",i.innerHTML=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="badge-tag tag-cyan">ENGINEERING DOSSIER</span>
            <h3 class="modal-title">AQUA-RO: SWRO Desalination & High-Pressure Energy Recovery Systems Architecture</h3>
          </div>
          <button class="modal-close-btn" id="close-dossier-btn">&times;</button>
        </div>

        <div class="modal-body">
          <!-- Lead Engineer Banner -->
          <div class="author-dossier-card">
            <div class="author-icon"><i class="fa-solid fa-water"></i></div>
            <div class="author-meta">
              <h4 class="author-name">أ. طارق ابوعشي | Tareq Abuashi</h4>
              <p class="author-title">Lead Electrical & Automation Systems Engineer | Industrial SCADA & Digital Twin Architect</p>
              <span class="author-badge">SWRO Desalination • 11kV VFD Drives • ERI PX Isobaric Recovery • ANSI Relays • Acoustic AI</span>
            </div>
          </div>

          <!-- Technical Sections -->
          <div class="dossier-sections">
            <!-- Section 1: Process Overview & SWRO Flow Balance -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-diagram-project text-cyan"></i> 1. SWRO Desalination Process & Flow Balance Architecture</h5>
              <div class="section-content">
                <p>The AQUA-RO facility treats raw Red Sea / Arabian Gulf seawater with typical Total Dissolved Solids (TDS) of <strong>42,500 ppm</strong>, delivering WHO-compliant potable drinking water at <strong>185 ppm TDS</strong> with an overall train recovery ratio of <strong>43.5%</strong>.</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">Mass Balance: Q_feed (1,850 m³/h) = Q_permeate (805 m³/h) + Q_brine (1,045 m³/h)</div>
                  <div class="formula-row">Recovery Ratio: Y = (Q_permeate / Q_feed) × 100% = (805 / 1850) × 100% = <strong>43.51%</strong></div>
                  <div class="formula-row">Brine Concentration: C_brine = C_feed / (1 - Y) = 42,500 / (1 - 0.435) = <strong>75,221 ppm</strong></div>
                  <div class="formula-row">Salt Rejection Index: R = (1 - C_permeate / C_feed) × 100% = (1 - 185 / 42,500) × 100% = <strong>99.56%</strong></div>
                </div>
              </div>
            </div>

            <!-- Section 2: 11kV VFD & 3,800 kW High-Pressure Pump Hydraulics -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-bolt text-cyan"></i> 2. 11kV MV VFD Drive & 3,800 kW HP Feed Pump Hydraulic Sizing</h5>
              <div class="section-content">
                <p>To overcome natural seawater osmotic pressure (~28.5 Bar) and flow resistance across dense thin-film composite (TFC) spiral-wound membranes, high-pressure multistage centrifugal barrel pumps are powered by <strong>11kV variable frequency drives (VFD)</strong>.</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">Hydraulic Power: P_hyd = (Q × ΔP) / 36 = (1,850 m³/h × 64.2 Bar) / 36 = <strong>3,299 kW</strong></div>
                  <div class="formula-row">Motor Shaft Power: P_shaft = P_hyd / η_pump (86.5%) = 3,299 / 0.865 = <strong>3,814 kW (Rated 3,800 kW Continuous)</strong></div>
                  <div class="formula-row">Full Load Stator Current: I_n = P / (√3 × V_L × cos φ × η_mot) = 3800 / (1.732 × 11.0 × 0.94 × 0.96) ≈ <strong>220.8 A</strong></div>
                  <div class="formula-row">Nominal Operating Telemetry: Current = 218.4 A (98.9% FL) | Power = 3.45 MW | SEC = 2.85 kWh/m³</div>
                  <div class="formula-row">Water Hammer Prevention: Controlled VFD ramp (120s dF/dt) coordinated with motorized control valve MOV-101.</div>
                </div>
              </div>
            </div>

            <!-- Section 3: ERI Isobaric Pressure Exchanger (PX) Energy Recovery -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-arrows-rotate text-amber"></i> 3. ERI Isobaric Pressure Exchanger (PX) Thermodynamics & 96% Recovery</h5>
              <div class="section-content">
                <p>Without energy recovery, seawater RO requires over 7.5 kWh/m³ of electrical energy. The isobaric Energy Recovery Inc. (ERI) PX rotary pressure exchanger captures hydraulic pressure directly from reject brine at 62.8 Bar and transfers it directly to incoming seawater feed.</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">Rotor Dynamics: Alumina ceramic rotor spinning freely at <strong>1,200 RPM</strong> lubricated entirely by seawater.</div>
                  <div class="formula-row">Direct Isobaric Contact: High-Pressure Brine (62.8 Bar) pressurizes Low-Pressure Seawater (3.2 Bar) to <strong>61.2 Bar</strong>.</div>
                  <div class="formula-row">Net Hydraulic Efficiency: η_px = (P_hp_sw - P_lp_sw) / (P_hp_brine - P_lp_brine) = (61.2 - 3.2) / (62.8 - 1.8) = 58.0 / 61.0 = <strong>96.2%</strong></div>
                  <div class="formula-row">Net Power Recouped: P_saved = (Q_brine × ΔP_transferred) / 36 = (1,045 × 58.0) / 36 ≈ <strong>4.62 MW Equivalent</strong></div>
                  <div class="formula-row">Net Specific Energy Consumption (SEC): Dropped from 7.5 kWh/m³ to <strong>2.85 kWh/m³</strong> (World-class benchmark).</div>
                </div>
              </div>
            </div>

            <!-- Section 4: ANSI / IEEE Electrical Protection Scheme (11kV GIS) -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-shield-halved text-purple"></i> 4. 11kV SF6 GIS Substation ANSI Protective Relays (SIPROTEC 7SJ85)</h5>
              <div class="section-content">
                <table class="dossier-table font-mono">
                  <thead>
                    <tr>
                      <th>ANSI Code</th>
                      <th>Relay Function</th>
                      <th>Standard Setting / Formula</th>
                      <th>Operational Logic</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-cyan font-bold">ANSI 51</td>
                      <td>Phase Time Overcurrent (IDMT)</td>
                      <td>IEC 60255 Standard Inverse: t = (0.14 × TMS) / ((I/Is)^0.02 - 1)<br>Is = 245 A, TMS = 0.20</td>
                      <td>Protects 11kV stator windings from sustained overcurrents due to hydraulic overloading or nozzle blockages.</td>
                    </tr>
                    <tr>
                      <td class="text-amber font-bold">ANSI 46</td>
                      <td>Phase Current Unbalance</td>
                      <td>Negative Sequence Component: I₂ / I₁ > 8% (Alarm: 5% | Trip: 8% in 1.5s)</td>
                      <td>Prevents double-frequency (100 Hz) eddy-current overheating in the solid rotor forge during grid unbalance.</td>
                    </tr>
                    <tr>
                      <td class="text-purple font-bold">ANSI 37</td>
                      <td>Undercurrent / Dry Run</td>
                      <td>Undercurrent Pickup: I < 60 A (25% rated) for > 1.0s</td>
                      <td>Detects loss of prime, air suction, or upstream intake pipe rupture, preventing catastrophic dry-running of mechanical seals.</td>
                    </tr>
                    <tr>
                      <td class="text-red font-bold">ANSI 50N</td>
                      <td>Instantaneous Earth Fault</td>
                      <td>Core Balance CT (CBCT 50/1A)<br>Pickup Is0 = 15 A | Time Delay: 40 ms</td>
                      <td>Clears internal stator phase-to-ground faults in 40ms, preventing core iron lamination burning and arc flashes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Section 5: Hydraulic Protection Interlocks -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-triangle-exclamation text-red"></i> 5. Dual Critical Hydraulic Safety Interlocks</h5>
              <div class="section-content">
                <div style="display: flex; flex-direction: column; gap: 10px;">
                  <div style="background: rgba(14, 165, 233, 0.08); border-left: 3px solid var(--cyan-primary); padding: 8px 12px;">
                    <strong class="text-cyan font-mono">INTERLOCK 1: Low Suction Pressure / NPSH Starvation Guard</strong>
                    <p style="font-size: 11px; margin-top: 4px; color: #cbd5e1;">
                      Centrifugal multistage feed pumps at 65 Bar require minimum Net Positive Suction Head (NPSH_r). If suction pressure at PT-101 drops below <strong>1.8 Bar</strong>, vapor cavities implode inside the 1st stage impeller with shockwaves exceeding 1,000 MPa. The SCADA interlock trips the 11kV VFD in <strong>50 ms</strong> and closes MOV-101.
                    </p>
                  </div>
                  <div style="background: rgba(239, 68, 68, 0.08); border-left: 3px solid var(--red-tripped); padding: 8px 12px;">
                    <strong class="text-red font-mono">INTERLOCK 2: Free Chlorine Breakthrough Guard (High ORP > 350 mV)</strong>
                    <p style="font-size: 11px; margin-top: 4px; color: #cbd5e1;">
                      Thin-Film Composite (TFC) aromatic polyamide membranes are irrevocably degraded by chlorine oxidation. If upstream dechlorination fails and ORP exceeds <strong>350 mV</strong>, SCADA initiates dual instantaneous safety action: (1) Sodium Metabisulfite (SMBS) chemical injection ramps to 100%, and (2) High-speed pneumatic 3-way Dump Valve XV-102 diverts the flow to marine outfall in <strong>200 ms</strong>, shielding the membrane train.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 6: AI Predictive Maintenance & 1.4 kHz Acoustic Cavitation Diagnostics -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-microchip text-purple"></i> 6. AI Predictive Analytics & 1.4 kHz FFT Acoustic Anomaly Detection</h5>
              <div class="section-content">
                <p>The AQUA-RO digital twin utilizes embedded machine learning to track membrane bio-fouling and high-pressure pump cavitation long before mechanical failure occurs:</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">Transmembrane Pressure (TMP): ΔP = P_feed - (P_permeate + P_concentrate) / 2</div>
                  <div class="formula-row">Biofouling Detection: Normalized ΔP trend rising from nominal 1.42 Bar towards <strong>3.5 Bar Clean-In-Place (CIP) threshold</strong>.</div>
                  <div class="formula-row">Acoustic Cavitation Fingerprint: High-frequency piezo-accelerometer mounted on the DE bearing monitors FFT peak at <strong>1.4 kHz (Blade Pass Frequency)</strong>.</div>
                  <div class="formula-row">Anomaly Diagnostic Rule: If ΔP > 3.0 Bar AND 1.4 kHz acoustic power > 1.2 mm/s RMS -> Flag Stage-2 Biofouling & Recommend CIP Cleaning in 24h.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span class="footer-note">AQUA-RO SCADA v5.2 &bull; Designed & Authored by أ. طارق ابوعشي | Lead Electrical & Automation Systems Engineer</span>
          <button class="btn btn-secondary" id="btn-close-dossier-footer">Close Dossier</button>
        </div>
      </div>
    `,e.appendChild(i),this.modalEl=i;const t=document.getElementById("close-dossier-btn"),a=document.getElementById("btn-close-dossier-footer");t&&t.addEventListener("click",()=>this.hide()),a&&a.addEventListener("click",()=>this.hide()),i.addEventListener("click",n=>{n.target===i&&this.hide()})}show(){this.modalEl&&this.modalEl.classList.remove("hidden")}hide(){this.modalEl&&this.modalEl.classList.add("hidden")}}document.addEventListener("DOMContentLoaded",()=>{const x=document.getElementById("svg-mimic-wrapper"),e=document.getElementById("svg-sld-wrapper"),i=document.getElementById("predictive-canvas");if(!x||!e||!i){console.error("Critical SCADA containers missing from DOM");return}const t=new Pt(x),a=new vt(e),n=new kt(i),o=new Et,c=document.getElementById("soe-log-box"),m=document.getElementById("soe-event-count");let r=4;function l(s,k=!1){if(!c)return;r++,m&&(m.textContent=`${r} EVENTS LOGGED`);const y=new Date,T=String(y.getHours()).padStart(2,"0"),M=String(y.getMinutes()).padStart(2,"0"),R=String(y.getSeconds()).padStart(2,"0"),E=String(y.getMilliseconds()).padStart(3,"0"),f=`${T}:${M}:${R}.${E}`,b=document.createElement("div");k?(b.className="text-red font-bold",b.innerHTML=`[${f}] ⚠️ ${s}`):b.innerHTML=`[${f}] ℹ️ ${s}`,c.appendChild(b),c.scrollTop=c.scrollHeight}p.onSoeLog((s,k)=>{l(s,k)});const d=document.getElementById("btn-open-dossier");d&&d.addEventListener("click",()=>o.show());const h=document.getElementById("btn-audio-toggle"),P=document.getElementById("audio-icon"),v=document.getElementById("audio-text");h&&h.addEventListener("click",()=>{const s=p.toggleMute();P&&v&&(s?(P.className="fa-solid fa-volume-xmark",v.textContent="Audio: Muted"):(P.className="fa-solid fa-volume-high",v.textContent="Audio: Active"))});const C=document.getElementById("btn-quick-reset");C&&C.addEventListener("click",()=>{p.injectFault("NORMAL_RESTART")});const S=document.getElementById("btn-screenshot");S&&S.addEventListener("click",()=>{window.print()});const I=document.getElementById("btn-fault-suction");I&&I.addEventListener("click",()=>{p.injectFault("SUCTION_CAVITATION")});const g=document.getElementById("btn-fault-chlorine");g&&g.addEventListener("click",()=>{p.injectFault("CHLORINE_BREAKTHROUGH")});const z=document.getElementById("btn-fault-scaling");z&&z.addEventListener("click",()=>{p.injectFault("MEMBRANE_SCALING")});const G=document.getElementById("btn-fault-unbalance");G&&G.addEventListener("click",()=>{p.injectFault("PHASE_UNBALANCE_ANSI46")});const $=document.getElementById("btn-fault-reset");$&&$.addEventListener("click",()=>{p.injectFault("NORMAL_RESTART")}),p.subscribe(s=>{const k=document.getElementById("header-clock");k&&(k.textContent=s.timestamp);const y=document.getElementById("header-grid-freq");y&&(y.textContent=`${s.substation.gridFrequencyHz.toFixed(2)} Hz`);const T=document.getElementById("header-bus-volts");T&&(T.textContent=`${s.substation.busVoltageV.toLocaleString()} V`);const M=document.getElementById("header-recovery-val");M&&(M.textContent=`${s.membranePx.recoveryRatioPct.toFixed(1)} %`);const R=document.getElementById("header-sec-val");R&&(R.textContent=`${s.hpPump.secKwhM3.toFixed(2)} kWh/m³`);const E=document.getElementById("master-alarm-banner"),f=document.getElementById("alarm-badge-status"),b=document.getElementById("alarm-banner-message"),W=document.getElementById("soe-timestamp");W&&(W.textContent=s.soeClock),E&&f&&b&&(b.textContent=s.alarmBannerMessage,s.alarmBannerState==="NORMAL"?(f.className="alarm-badge healthy",f.textContent="NORMAL",E.className="alarm-banner"):s.alarmBannerState==="WARNING"?(f.className="alarm-badge warning",f.textContent="CAUTION",E.className="alarm-banner warning"):(f.className="alarm-badge tripped",f.textContent="EMERGENCY TRIP",E.className="alarm-banner tripped"));const L=document.getElementById("hp-pump-status");L&&(L.textContent=`${s.hpPump.status} (${s.hpPump.dischargePressureBar} BAR)`,L.className=s.hpPump.status==="RUNNING"?"status-pill status-running":"status-pill status-tripped");const U=document.getElementById("hp-pressure-val"),N=document.getElementById("hp-pressure-bar");if(U&&(U.innerHTML=`${s.hpPump.dischargePressureBar} <span class="readout-unit">Bar</span>`),N){const w=Math.min(s.hpPump.dischargePressureBar/80*100,100);N.style.width=`${w}%`,N.style.background=s.hpPump.dischargePressureBar>68?"#f59e0b":s.hpPump.dischargePressureBar<50?"#ef4444":"#06b6d4"}const _=document.getElementById("hp-current-val"),q=document.getElementById("hp-power-val"),K=document.getElementById("hp-current-bar");if(_&&(_.innerHTML=`${s.hpPump.motorCurrentA} <span class="readout-unit">A</span>`),q&&(q.textContent=`${s.hpPump.activePowerMW} MW`),K){const w=Math.min(s.hpPump.motorCurrentA/245*100,100);K.style.width=`${w}%`}const Q=document.getElementById("hp-sec-display"),j=document.getElementById("hp-flow-display"),Y=document.getElementById("anti-hammer-valve-status");Q&&(Q.innerHTML=`${s.hpPump.secKwhM3} <span class="readout-unit">kWh/m³</span>`),j&&(j.textContent=`${s.hpPump.flowRateM3h.toLocaleString()} m³/h`),Y&&(Y.textContent=`Anti-Hammer: ${s.hpPump.antiHammerValveOpenPct}% OPEN`);const X=document.getElementById("temp-u1"),J=document.getElementById("temp-v1"),Z=document.getElementById("temp-w1"),tt=document.getElementById("temp-u2"),et=document.getElementById("temp-v2"),it=document.getElementById("temp-w2");X&&(X.textContent=`${s.hpPump.statorTempsC.u1} °C`),J&&(J.textContent=`${s.hpPump.statorTempsC.v1} °C`),Z&&(Z.textContent=`${s.hpPump.statorTempsC.w1} °C`),tt&&(tt.textContent=`${s.hpPump.statorTempsC.u2} °C`),et&&(et.textContent=`${s.hpPump.statorTempsC.v2} °C`),it&&(it.textContent=`${s.hpPump.statorTempsC.w2} °C`);const st=document.getElementById("temp-de-bearing"),at=document.getElementById("temp-nde-bearing");st&&(st.textContent=`${s.hpPump.bearingTempsC.driveEnd} °C`),at&&(at.textContent=`${s.hpPump.bearingTempsC.nonDriveEnd} °C`);const nt=document.getElementById("feed-tds-val"),rt=document.getElementById("permeate-tds-val"),ot=document.getElementById("rejection-ratio-label");nt&&(nt.innerHTML=`${s.membranePx.feedTdsPpm.toLocaleString()} <span class="readout-unit">ppm</span>`),rt&&(rt.innerHTML=`${s.membranePx.permeateTdsPpm} <span class="readout-unit">ppm</span>`),ot&&(ot.textContent=`Rejection: ${s.membranePx.saltRejectionPct}%`);const lt=document.getElementById("permeate-cond-val"),dt=document.getElementById("water-ph-val"),O=document.getElementById("water-orp-val");lt&&(lt.innerHTML=`${s.membranePx.permeateConductivityUScm} <span class="readout-unit">µS/cm</span>`),dt&&(dt.textContent=s.membranePx.feedPh.toFixed(2)),O&&(O.innerHTML=`${s.membranePx.orpMv} <span class="readout-unit">mV</span>`,O.className=s.membranePx.orpMv>350?"font-mono text-red font-bold":"font-mono text-cyan");const D=document.getElementById("px-status-pill"),ct=document.getElementById("px-brine-in-val"),mt=document.getElementById("px-sw-out-val"),ht=document.getElementById("px-power-saved-val");D&&(D.textContent=`PX ROTOR: ${s.membranePx.pxRotorRpm} RPM (${s.membranePx.pxEfficiencyPct}% EFF)`,D.className=s.membranePx.pxRotorRpm>0?"status-pill status-running":"status-pill status-tripped"),ct&&(ct.textContent=`${s.membranePx.pxBrineInletBar} Bar`),mt&&(mt.textContent=`${s.membranePx.pxBoostedSeawaterBar} Bar`),ht&&(ht.textContent=`${s.membranePx.pxPowerSavedMW} MW`);const ut=document.getElementById("brine-tds-val"),ft=document.getElementById("brine-dp-val"),pt=document.getElementById("brine-flow-val");ut&&(ut.innerHTML=`${s.membranePx.brineTdsPpm.toLocaleString()} <span class="readout-unit">ppm</span>`),ft&&(ft.textContent=`${s.membranePx.pxBrineDischargeBar} Bar`),pt&&(pt.textContent=`${s.membranePx.brineFlowM3h.toLocaleString()} m³/h`);const V=document.getElementById("sld-interlock-status"),B=document.getElementById("badge-interlock-suction"),A=document.getElementById("badge-interlock-chlorine");if(B&&(s.substation.interlocks.suctionPressureSafe?(B.className="interlock-badge interlock-safe",B.textContent=`SAFE (${s.hpPump.suctionPressureBar} Bar)`):(B.className="interlock-badge interlock-trip",B.textContent=`TRIP (${s.hpPump.suctionPressureBar} Bar)`)),A&&(s.substation.interlocks.freeChlorineSafe?(A.className="interlock-badge interlock-safe",A.textContent=`SAFE (${s.membranePx.orpMv} mV)`):(A.className="interlock-badge interlock-trip",A.textContent=`DUMPING (${s.membranePx.orpMv} mV)`)),V){const w=s.substation.interlocks.suctionPressureSafe&&s.substation.interlocks.freeChlorineSafe&&s.substation.cb02MotorFeederClosed;V.textContent=w?"INTERLOCKS CLEAR (PERMISSIVE ACTIVE)":"INTERLOCK TRIP / SYSTEM DE-ENERGIZED",V.className=w?"status-pill status-running":"status-pill status-tripped"}const xt=document.getElementById("relay-51-val"),H=document.getElementById("relay-46-val"),F=document.getElementById("relay-37-val"),gt=document.getElementById("relay-50n-val");xt&&(xt.textContent=s.substation.relays.ansi51Overcurrent),H&&(H.textContent=`${s.substation.relays.ansi46UnbalancePct}% (${s.substation.relays.ansi46Status})`,H.className=s.substation.relays.ansi46Status==="OK"?"text-green":"text-red font-bold"),F&&(F.textContent=s.substation.relays.ansi37Undercurrent,F.className=s.substation.relays.ansi37Undercurrent==="ARMED"?"text-green":"text-red font-bold"),gt&&(gt.textContent=`${s.substation.relays.ansi50nEarthFaultA}A (${s.substation.relays.ansi50nStatus})`),t.update(s),a.update(s),n.update(s)})});
