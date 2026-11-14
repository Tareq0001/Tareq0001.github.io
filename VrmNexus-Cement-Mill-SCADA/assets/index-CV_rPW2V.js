(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();class k{ctx=null;isMuted=!1;alarmTimer=null;isAlarmRunning=!1;rumbleOsc=null;rumbleGain=null;constructor(){}initContext(){if(!this.ctx){const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&(this.stopAlarm(),this.stopRumble()),this.isMuted}getMuted(){return this.isMuted}startTripAlarm(){if(this.isMuted||this.isAlarmRunning||(this.initContext(),!this.ctx))return;this.isAlarmRunning=!0;let t=0;const i=()=>{if(!this.isAlarmRunning||this.isMuted||!this.ctx)return;const e=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="sawtooth";const a=this.ctx.currentTime;e.frequency.setValueAtTime(t%2===0?1050:850,a),e.frequency.exponentialRampToValueAtTime(t%2===0?700:550,a+.35),s.gain.setValueAtTime(.12,a),s.gain.exponentialRampToValueAtTime(.001,a+.38);const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(2200,a),e.connect(r),r.connect(s),s.connect(this.ctx.destination),e.start(a),e.stop(a+.4),t++,this.alarmTimer=window.setTimeout(i,420)};i()}stopAlarm(){this.isAlarmRunning=!1,this.alarmTimer!==null&&(clearTimeout(this.alarmTimer),this.alarmTimer=null)}playBreakerOperation(t){if(this.isMuted||(this.initContext(),!this.ctx))return;const i=this.ctx.currentTime,e=this.ctx.createOscillator(),s=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(t?95:120,i),e.frequency.exponentialRampToValueAtTime(28,i+.15),s.gain.setValueAtTime(.35,i),s.gain.exponentialRampToValueAtTime(.001,i+.18),e.connect(s),s.connect(this.ctx.destination),e.start(i),e.stop(i+.2);const a=Math.floor(this.ctx.sampleRate*.04),r=this.ctx.createBuffer(1,a,this.ctx.sampleRate),c=r.getChannelData(0);for(let m=0;m<a;m++)c[m]=(Math.random()*2-1)*Math.exp(-m/(a*.2));const f=this.ctx.createBufferSource();f.buffer=r;const n=this.ctx.createGain();n.gain.setValueAtTime(.2,i),n.gain.exponentialRampToValueAtTime(.001,i+.05);const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1400,i),o.Q.setValueAtTime(3,i),f.connect(o),o.connect(n),n.connect(this.ctx.destination),f.start(i+.01)}playPulseJet(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,i=.22,e=Math.floor(this.ctx.sampleRate*i),s=this.ctx.createBuffer(1,e,this.ctx.sampleRate),a=s.getChannelData(0);for(let n=0;n<e;n++)a[n]=(Math.random()*2-1)*Math.exp(-n/(e*.35));const r=this.ctx.createBufferSource();r.buffer=s;const c=this.ctx.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(850,t),c.Q.setValueAtTime(1.8,t);const f=this.ctx.createGain();f.gain.setValueAtTime(.25,t),f.gain.exponentialRampToValueAtTime(.001,t+i),r.connect(c),c.connect(f),f.connect(this.ctx.destination),r.start(t)}startRumble(){if(this.isMuted||this.rumbleOsc||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime;this.rumbleOsc=this.ctx.createOscillator(),this.rumbleGain=this.ctx.createGain(),this.rumbleOsc.type="sawtooth",this.rumbleOsc.frequency.setValueAtTime(38,t);const i=this.ctx.createBiquadFilter();i.type="lowpass",i.frequency.setValueAtTime(120,t),this.rumbleGain.gain.setValueAtTime(.01,t),this.rumbleGain.gain.linearRampToValueAtTime(.2,t+.5),this.rumbleOsc.connect(i),i.connect(this.rumbleGain),this.rumbleGain.connect(this.ctx.destination),this.rumbleOsc.start(t)}stopRumble(){if(this.rumbleOsc&&this.rumbleGain&&this.ctx){const t=this.ctx.currentTime;this.rumbleGain.gain.linearRampToValueAtTime(.001,t+.3),setTimeout(()=>{if(this.rumbleOsc){try{this.rumbleOsc.stop()}catch{}this.rumbleOsc.disconnect(),this.rumbleOsc=null,this.rumbleGain=null}},350)}}playWarningChime(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),e=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(880,t),i.frequency.setValueAtTime(1174,t+.12),e.gain.setValueAtTime(.08,t),e.gain.exponentialRampToValueAtTime(.001,t+.35),i.connect(e),e.connect(this.ctx.destination),i.start(t),i.stop(t+.36)}playClick(){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,i=this.ctx.createOscillator(),e=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(600,t),i.frequency.exponentialRampToValueAtTime(120,t+.03),e.gain.setValueAtTime(.06,t),e.gain.exponentialRampToValueAtTime(.001,t+.035),i.connect(e),e.connect(this.ctx.destination),i.start(t),i.stop(t+.04)}}const u=new k;class I{state;listeners=[];timer=null;fastTimer=null;pulseStepTimer=null;startTime=Date.now();constructor(){this.state={vrm:{frequency:46.5,current:385.2,activePower:3350,powerFactor:.89,torque:82.4,grindingPressure:88.5,bedDepth:62,classifierRpm:115,feedRate:195,gearboxSumpTemp:58.4,gearboxThrustTemp:64.2,rollerTemps:[68.5,71.2,69.8,70.4],vibrationRms:2.35,rollerWear:[14.2,16.5,13.8,15.1],status:"RUNNING"},baghouse:{differentialPressure:12.4,inletGasTemp:184.5,outletGasTemp:104.2,stackDustOpacity:7.2,idFanSpeed:940,idFanCurrent:162.5,idFanPower:1480,activePulseRow:1,pulseJetFiring:!1,freshAirDamperOpen:0,damperInterlockActive:!1,status:"HEALTHY"},vfd:{mvBusVoltage:6604,gridFrequency:50.01,vcbClosed:!0,dcBusVoltage:8910,igbtTemp:61.5,thdI:2.38,thdV:1.76,h5_amp:.42,h7_amp:.38,h11_amp:.88,h13_amp:.74,transformerSecondary1V:2202,transformerSecondary2V:2200,transformerSecondary3V:2204,relay51_50_trip:!1,relay27_59_trip:!1,relay87T_trip:!1,status:"CLOSED"},ai:{fftPeakFreq:312,fftPeakAmp:1.15,healthScore:98.4,rulHours:1450,anomalyDetected:!1,anomalyMessage:"AI Diagnostic: Autoencoder healthy - All Harmonics Nominal (ISO 10816 Zone A)"},faults:{millRumble:!1,baghouseClogging:!1,vfdOvervoltage:!1,emergencyTrip:!1},events:[{id:"ev-1",timestamp:"00:00:01.120",source:"6.6kV MV Switchgear",type:"INFO",message:"Incoming MV Bus 6600V energized. Phase balance: 99.8%."},{id:"ev-2",timestamp:"00:00:02.450",source:"18-Pulse VFD Drive",type:"INFO",message:"VCB 52-1 closed. DC Link pre-charged to 8910 VDC. PWM active."},{id:"ev-3",timestamp:"00:00:03.880",source:"VRM Mill System",type:"INFO",message:"Mill table running at 46.5 Hz. Hyd pressure: 88.5 Bar. Bed depth: 62mm."}],audioMuted:!1,systemClock:"00:00:00"},this.startClock(),this.startSimulationLoop(),this.startPulseJetSequencer()}getState(){return this.state}subscribe(t){return this.listeners.push(t),t(this.state),()=>{this.listeners=this.listeners.filter(i=>i!==t)}}notify(){for(const t of this.listeners)t(this.state)}startClock(){setInterval(()=>{const t=new Date;this.state.systemClock=t.toTimeString().split(" ")[0]},1e3)}startSimulationLoop(){this.timer=window.setInterval(()=>{this.tickTelemetry(),this.notify()},1e3),this.fastTimer=window.setInterval(()=>{this.fastJitter()},150)}startPulseJetSequencer(){const t=()=>{this.state.vfd.vcbClosed&&!this.state.faults.emergencyTrip&&(this.state.baghouse.activePulseRow=this.state.baghouse.activePulseRow%8+1,this.state.baghouse.pulseJetFiring=!0,u.playPulseJet(),this.state.faults.baghouseClogging||(this.state.baghouse.differentialPressure=Math.max(9,this.state.baghouse.differentialPressure-.4)),setTimeout(()=>{this.state.baghouse.pulseJetFiring=!1,this.notify()},300));const i=this.state.faults.baghouseClogging?1200:3500;this.pulseStepTimer=window.setTimeout(t,i)};this.pulseStepTimer=window.setTimeout(t,3500)}triggerManualPulseBurst(){this.state.baghouse.pulseJetFiring=!0,this.state.baghouse.activePulseRow=this.state.baghouse.activePulseRow%8+1,u.playPulseJet(),this.state.baghouse.differentialPressure>10&&(this.state.baghouse.differentialPressure-=.8),this.logEvent("Baghouse Filter","INFO",`Manual pulse burst triggered on Solenoid Row #${this.state.baghouse.activePulseRow}. Air pressure: 6.2 Bar.`),setTimeout(()=>{this.state.baghouse.pulseJetFiring=!1,this.notify()},350)}setFeedRate(t){this.state.vrm.feedRate=Math.max(0,Math.min(280,t)),this.state.vrm.bedDepth=25+this.state.vrm.feedRate/280*55,this.state.vrm.current=150+this.state.vrm.feedRate/280*290,this.state.vrm.activePower=Math.round(this.state.vrm.current*6.6*Math.sqrt(3)*this.state.vrm.powerFactor),this.notify()}setClassifierSpeed(t){this.state.vrm.classifierRpm=Math.max(60,Math.min(180,t)),this.notify()}setFreshAirDamper(t){this.state.baghouse.freshAirDamperOpen=Math.max(0,Math.min(100,t)),this.notify()}fastJitter(){this.state.vfd.vcbClosed&&!this.state.faults.emergencyTrip&&(this.state.vfd.gridFrequency=Number((50+(Math.random()-.5)*.04).toFixed(2)),this.state.vfd.mvBusVoltage=Math.round(6600+(Math.random()-.5)*12))}tickTelemetry(){const t=this.state.vfd.vcbClosed&&!this.state.faults.emergencyTrip&&this.state.vrm.status!=="TRIPPED";this.state.faults.millRumble?(this.state.vrm.feedRate=Math.max(12,this.state.vrm.feedRate-25),this.state.vrm.bedDepth=Math.max(16,this.state.vrm.bedDepth-8),this.state.vrm.vibrationRms=Math.min(15.2,this.state.vrm.vibrationRms+1.8+Math.random()*.8),this.state.vrm.torque=65+Math.sin(Date.now()/200)*45,this.state.vrm.status="RUMBLE",this.state.ai.anomalyDetected=!0,this.state.ai.fftPeakFreq=312,this.state.ai.fftPeakAmp=this.state.vrm.vibrationRms,this.state.ai.healthScore=Math.max(34,this.state.ai.healthScore-4.2),this.state.ai.rulHours=Math.max(12,this.state.ai.rulHours-120),this.state.ai.anomalyMessage=`⚠️ PREDICTIVE ALERT: Mill Rumble & Planetary Gear Mesh Anomaly at 312 Hz - RUL: ${Math.round(this.state.ai.rulHours)}h (ISO 10816 Zone D)`,u.startRumble()):t&&!this.state.faults.emergencyTrip&&(u.stopRumble(),this.state.vrm.bedDepth<60&&(this.state.vrm.bedDepth+=2.5),this.state.vrm.vibrationRms>2.5&&(this.state.vrm.vibrationRms=Math.max(2.35,this.state.vrm.vibrationRms-.9)),this.state.ai.healthScore<98&&(this.state.ai.healthScore=Math.min(98.4,this.state.ai.healthScore+2.1)),this.state.vrm.torque=82.4+(Math.random()-.5)*2.5,this.state.vrm.status="RUNNING",this.state.ai.anomalyDetected=!1,this.state.ai.anomalyMessage="AI Diagnostic: Autoencoder healthy - All Harmonics Nominal (ISO 10816 Zone A)"),this.state.faults.baghouseClogging?(this.state.baghouse.differentialPressure=Math.min(24.5,this.state.baghouse.differentialPressure+1.2),this.state.baghouse.idFanCurrent=Math.min(194,this.state.baghouse.idFanCurrent+3.5),this.state.baghouse.stackDustOpacity=Math.min(28.5,this.state.baghouse.stackDustOpacity+1.4),this.state.baghouse.status=this.state.baghouse.differentialPressure>20?"HIGH_DP":"PULSING",u.playWarningChime()):t&&(this.state.baghouse.differentialPressure>13&&(this.state.baghouse.differentialPressure=Math.max(12.4,this.state.baghouse.differentialPressure-.7)),this.state.baghouse.idFanCurrent>165&&(this.state.baghouse.idFanCurrent=Math.max(162.5,this.state.baghouse.idFanCurrent-2.5)),this.state.baghouse.stackDustOpacity>7.5&&(this.state.baghouse.stackDustOpacity=Math.max(7.2,this.state.baghouse.stackDustOpacity-.6)),this.state.baghouse.status="HEALTHY"),this.state.baghouse.inletGasTemp>210?(this.state.baghouse.damperInterlockActive=!0,this.state.baghouse.freshAirDamperOpen=Math.min(100,this.state.baghouse.freshAirDamperOpen+25),this.state.baghouse.inletGasTemp-=4.5,this.logEvent("Baghouse Interlock","WARNING",`Thermal Safety Interlock Active: Flue Gas Temp > 210°C. Modulating Fresh Air Damper to ${this.state.baghouse.freshAirDamperOpen}%.`),u.playWarningChime()):(this.state.baghouse.damperInterlockActive=!1,this.state.baghouse.freshAirDamperOpen>0&&!this.state.faults.baghouseClogging&&(this.state.baghouse.freshAirDamperOpen=Math.max(0,this.state.baghouse.freshAirDamperOpen-10))),this.state.faults.vfdOvervoltage&&(this.state.vfd.dcBusVoltage=9880,this.state.vfd.relay27_59_trip=!0,this.state.vfd.vcbClosed=!1,this.state.vfd.status="TRIPPED",this.state.vrm.status="TRIPPED",this.state.vrm.current=0,this.state.vrm.activePower=0,this.state.vrm.frequency=0,u.startTripAlarm()),t&&(this.state.vfd.thdI=Number((2.35+(Math.random()-.5)*.15).toFixed(2)),this.state.vfd.thdV=Number((1.75+(Math.random()-.5)*.12).toFixed(2)),this.state.vfd.dcBusVoltage=Math.round(8910+(Math.random()-.5)*25),this.state.vfd.igbtTemp=Number((61.5+(Math.random()-.5)*.4).toFixed(1)))}triggerMillRumble(){this.state.faults.millRumble=!0,this.logEvent("VRM Drive System","ALARM","Mill Feed Starvation triggered! Bed depth collapsing. Extreme roller bounce & planetary gearbox acoustic rumble!"),u.playWarningChime(),this.notify()}triggerBaghouseClogging(){this.state.faults.baghouseClogging=!0,this.logEvent("Baghouse Filtration","ALARM","Filter Bag Blindness / Clogging simulated! ΔP rising rapidly above 20 mbar. Emergency rapid pulsing active."),u.playWarningChime(),this.notify()}triggerVfdOvervoltage(){this.state.faults.vfdOvervoltage=!0,this.state.vfd.relay27_59_trip=!0,this.state.vfd.vcbClosed=!1,this.state.vfd.status="TRIPPED",this.state.vrm.status="TRIPPED",this.state.vrm.frequency=0,this.state.vrm.current=0,this.state.vrm.activePower=0,u.playBreakerOperation(!1),u.startTripAlarm(),this.logEvent("18-Pulse VFD MV","TRIP","ANSI 59 Instantaneous DC-Bus Overvoltage Trip (9,880 VDC > 9,450 VDC). VCB 52-1 Tripped. Inverter PWM Inhibited!"),this.notify()}triggerEmergencyTrip(){this.state.faults.emergencyTrip=!0,this.state.vfd.vcbClosed=!1,this.state.vfd.status="TRIPPED",this.state.vrm.status="TRIPPED",this.state.vrm.current=0,this.state.vrm.activePower=0,this.state.vrm.frequency=0,this.state.baghouse.idFanSpeed=0,this.state.baghouse.idFanCurrent=0,this.state.baghouse.idFanPower=0,u.playBreakerOperation(!1),u.startTripAlarm(),this.logEvent("Safety Interlock","TRIP","MASTER EMERGENCY STOP (E-STOP) ACTIVATED! All MV Breakers Opened. ID Fan & Mill Drives Tripped!"),this.notify()}resetSystem(){this.state.faults.millRumble=!1,this.state.faults.baghouseClogging=!1,this.state.faults.vfdOvervoltage=!1,this.state.faults.emergencyTrip=!1,this.state.vfd.relay51_50_trip=!1,this.state.vfd.relay27_59_trip=!1,this.state.vfd.relay87T_trip=!1,this.state.vfd.vcbClosed=!0,this.state.vfd.status="CLOSED",this.state.vfd.dcBusVoltage=8910,this.state.vfd.mvBusVoltage=6604,this.state.vrm.status="RUNNING",this.state.vrm.frequency=46.5,this.state.vrm.current=385.2,this.state.vrm.activePower=3350,this.state.vrm.grindingPressure=88.5,this.state.vrm.bedDepth=62,this.state.vrm.feedRate=195,this.state.vrm.vibrationRms=2.35,this.state.baghouse.status="HEALTHY",this.state.baghouse.differentialPressure=12.4,this.state.baghouse.idFanSpeed=940,this.state.baghouse.idFanCurrent=162.5,this.state.baghouse.idFanPower=1480,this.state.baghouse.stackDustOpacity=7.2,this.state.baghouse.freshAirDamperOpen=0,this.state.ai.healthScore=98.4,this.state.ai.anomalyDetected=!1,this.state.ai.fftPeakAmp=1.15,this.state.ai.anomalyMessage="AI Diagnostic: Autoencoder healthy - All Harmonics Nominal (ISO 10816 Zone A)",u.stopAlarm(),u.stopRumble(),u.playBreakerOperation(!0),this.logEvent("DCS Master Controller","RESET","SYSTEM RESET by Lead Engineer Tareq Abuashi. VCB 52-1 reclosed. All ANSI Relays reset. VRM & ID Fan re-sequenced."),this.notify()}logEvent(t,i,e){const s=Date.now()-this.startTime,a=Math.floor(s/36e5).toString().padStart(2,"0"),r=Math.floor(s%36e5/6e4).toString().padStart(2,"0"),c=Math.floor(s%6e4/1e3).toString().padStart(2,"0"),f=(s%1e3).toString().padStart(3,"0"),n=`${a}:${r}:${c}.${f}`,o={id:"ev-"+Date.now()+"-"+Math.floor(Math.random()*1e3),timestamp:n,source:t,type:i,message:e};this.state.events.unshift(o),this.state.events.length>50&&this.state.events.pop()}}const x=new I;class C{container;constructor(t){const i=document.getElementById(t);if(!i)throw new Error(`Container #${t} not found`);this.container=i,this.renderInitialStructure()}renderInitialStructure(){this.container.innerHTML=`
      <div class="panel-header">
        <div class="panel-title-group">
          <span class="badge-tag tag-cyan">PROCESS TWIN</span>
          <h4 class="panel-title">Vertical Roller Mill (VRM 4-Roller & MV-VFD 4200 kW)</h4>
        </div>
        <div class="header-badges">
          <span class="status-pill status-running" id="vrm-status-pill">RUNNING (VFD 46.5 Hz)</span>
        </div>
      </div>

      <div class="vrm-svg-wrapper" style="position: relative; width: 100%; height: 360px; background: #070b14; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-card);">
        <svg viewBox="0 0 900 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" id="vrm-main-svg">
          <defs>
            <!-- Gradients -->
            <linearGradient id="millBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="30%" stop-color="#334155"/>
              <stop offset="70%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>

            <linearGradient id="rollerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#94a3b8"/>
              <stop offset="50%" stop-color="#475569"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>

            <linearGradient id="hydCylGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#0284c7"/>
              <stop offset="50%" stop-color="#0369a1"/>
              <stop offset="100%" stop-color="#0c4a6e"/>
            </linearGradient>

            <linearGradient id="gasInletGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(249, 115, 22, 0.8)"/>
              <stop offset="100%" stop-color="rgba(234, 88, 12, 0.2)"/>
            </linearGradient>

            <linearGradient id="bedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#d97706"/>
              <stop offset="50%" stop-color="#b45309"/>
              <stop offset="100%" stop-color="#78350f"/>
            </linearGradient>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- Background Grid Lines -->
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
          </pattern>
          <rect width="900" height="500" fill="url(#grid)" />

          <!-- Hot Gas Inlet Duct (Left Side) -->
          <path d="M 50 360 L 260 360 L 260 320 L 50 320 Z" fill="url(#gasInletGrad)" stroke="#f97316" stroke-width="2"/>
          <text x="80" y="345" fill="#fdba74" font-size="12" font-family="var(--font-mono)" font-weight="700">HOT GAS INLET (210°C)</text>
          
          <!-- Hot gas airflow arrows -->
          <g id="gas-flow-particles">
            <circle cx="120" cy="340" r="3" fill="#ffedd5" opacity="0.8">
              <animate attributeName="cx" from="60" to="250" dur="1.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="180" cy="340" r="4" fill="#fed7aa" opacity="0.8">
              <animate attributeName="cx" from="60" to="250" dur="1.4s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Mill Casing (Conical & Cylindrical Shell) -->
          <path d="M 260 410 L 260 210 L 330 110 L 570 110 L 640 210 L 640 410 Z" fill="url(#millBodyGrad)" stroke="#475569" stroke-width="3" opacity="0.95"/>
          
          <!-- Mill Top Classifier Housing & Outlet -->
          <rect x="370" y="50" width="160" height="60" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 420 50 L 420 15 L 480 15 L 480 50 Z" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
          <text x="450" y="35" fill="#38bdf8" font-size="11" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">TO BAGHOUSE</text>

          <!-- Dynamic Cage Classifier (Rotating Cage Vanes) -->
          <g id="dynamic-classifier" transform="translate(450, 80)">
            <rect x="-65" y="-18" width="130" height="36" rx="3" fill="#0b1120" stroke="#0ea5e9" stroke-width="2"/>
            <!-- Rotor blades spinning effect -->
            <g id="classifier-blades">
              <line x1="-55" y1="-15" x2="-55" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="-35" y1="-15" x2="-35" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="-15" y1="-15" x2="-15" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="5" y1="-15" x2="5" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="25" y1="-15" x2="25" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
              <line x1="45" y1="-15" x2="45" y2="15" stroke="#38bdf8" stroke-width="2.5"/>
            </g>
          </g>
          <text x="450" y="105" fill="#94a3b8" font-size="10" font-family="var(--font-mono)" text-anchor="middle" id="classifier-rpm-text">DYNAMIC CLASSIFIER: 115 RPM</text>

          <!-- Raw Material Feed Chute (Right side entry) -->
          <path d="M 720 160 L 590 230 L 580 250 L 610 255 L 720 190 Z" fill="#334155" stroke="#64748b" stroke-width="2"/>
          <text x="730" y="175" fill="#facc15" font-size="11" font-family="var(--font-mono)" font-weight="700">RAW FEED (195 t/h)</text>
          <!-- Falling Feed Particles -->
          <circle cx="600" cy="245" r="3.5" fill="#d97706">
            <animate attributeName="cy" values="235;290;340" dur="0.8s" repeatCount="indefinite"/>
            <animate attributeName="cx" values="600;550;490" dur="0.8s" repeatCount="indefinite"/>
          </circle>

          <!-- Mill Planetary Gearbox & Motor Drive Underneath -->
          <rect x="360" y="415" width="180" height="55" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
          <text x="450" y="445" fill="#94a3b8" font-size="11" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">PLANETARY GEARBOX & THRUST PAD</text>
          <text x="450" y="460" fill="#38bdf8" font-size="10" font-family="var(--font-mono)" text-anchor="middle">6.6 kV - 4200 kW MV-VFD</text>

          <!-- Rotating Mill Table -->
          <g id="mill-table-assembly">
            <ellipse cx="450" cy="365" rx="150" ry="22" fill="#1e293b" stroke="#64748b" stroke-width="3"/>
            <!-- Material Bed on Table -->
            <ellipse cx="450" cy="363" rx="140" ry="18" fill="url(#bedGrad)" opacity="0.9" id="mill-bed-graphic"/>
            <!-- Table rotation markers -->
            <g id="table-rotation-markers">
              <line x1="330" y1="363" x2="350" y2="363" stroke="#fef08a" stroke-width="2"/>
              <line x1="550" y1="363" x2="570" y2="363" stroke="#fef08a" stroke-width="2"/>
            </g>
          </g>

          <!-- 4 Grinding Rollers & Hydraulic Suspension Cylinders -->
          <!-- Roller 1 (Left Inner) -->
          <g id="roller-1-group" class="roller-assembly" transform="translate(0, 0)">
            <!-- Hydraulic Rocker Arm -->
            <path d="M 280 250 L 350 330" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
            <!-- Hydraulic Cylinder 88.5 Bar -->
            <rect x="250" y="220" width="45" height="24" rx="4" fill="url(#hydCylGrad)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="272" y="236" fill="#f8fafc" font-size="9" font-family="var(--font-mono)" text-anchor="middle">88 Bar</text>
            <!-- Heavy Grinding Roller Wheel -->
            <ellipse cx="360" cy="335" rx="35" ry="48" fill="url(#rollerGrad)" stroke="#0ea5e9" stroke-width="2.5"/>
            <circle cx="360" cy="335" r="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <text x="360" y="339" fill="#38bdf8" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">R1</text>
          </g>

          <!-- Roller 2 (Right Inner) -->
          <g id="roller-2-group" class="roller-assembly" transform="translate(0, 0)">
            <!-- Hydraulic Rocker Arm -->
            <path d="M 620 250 L 540 330" stroke="#0284c7" stroke-width="12" stroke-linecap="round"/>
            <!-- Hydraulic Cylinder -->
            <rect x="605" y="220" width="45" height="24" rx="4" fill="url(#hydCylGrad)" stroke="#38bdf8" stroke-width="1.5"/>
            <text x="627" y="236" fill="#f8fafc" font-size="9" font-family="var(--font-mono)" text-anchor="middle">88 Bar</text>
            <!-- Grinding Roller Wheel -->
            <ellipse cx="540" cy="335" rx="35" ry="48" fill="url(#rollerGrad)" stroke="#0ea5e9" stroke-width="2.5"/>
            <circle cx="540" cy="335" r="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <text x="540" y="339" fill="#38bdf8" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">R2</text>
          </g>

          <!-- Internal Aerodynamic Material Circulation Particles -->
          <g id="circulating-particles">
            <circle cx="380" cy="270" r="2.5" fill="#cbd5e1" opacity="0.6">
              <animate attributeName="cy" values="340;180;100" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cx" values="360;400;440" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="520" cy="260" r="2.5" fill="#cbd5e1" opacity="0.6">
              <animate attributeName="cy" values="340;190;100" dur="2.3s" repeatCount="indefinite"/>
              <animate attributeName="cx" values="540;500;460" dur="2.3s" repeatCount="indefinite"/>
            </circle>
            <!-- Coarse Rejects falling back from classifier -->
            <circle cx="430" cy="140" r="3" fill="#b45309" opacity="0.8">
              <animate attributeName="cy" values="130;260;350" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="470" cy="140" r="3" fill="#b45309" opacity="0.8">
              <animate attributeName="cy" values="130;260;350" dur="1.7s" repeatCount="indefinite"/>
            </circle>
          </g>

          <!-- Real-Time HUD Floating Callouts -->
          <!-- Bed Depth HUD Callout -->
          <g transform="translate(18, 20)">
            <rect width="180" height="70" rx="4" fill="rgba(15, 23, 42, 0.85)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="12" y="22" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">MATERIAL BED DEPTH</text>
            <text x="12" y="48" fill="#38bdf8" font-size="20" font-family="var(--font-mono)" font-weight="700" id="vrm-hud-bed">62.0 mm</text>
            <text x="120" y="46" fill="#64748b" font-size="10" font-family="var(--font-mono)">Opt: 55-75</text>
            <line x1="12" y1="56" x2="168" y2="56" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
            <line x1="12" y1="56" x2="120" y2="56" stroke="#0284c7" stroke-width="3" stroke-linecap="round" id="vrm-hud-bed-bar"/>
          </g>

          <!-- Hydraulic Pressure HUD Callout -->
          <g transform="translate(702, 20)">
            <rect width="180" height="70" rx="4" fill="rgba(15, 23, 42, 0.85)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="12" y="22" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">GRINDING HYD PRESSURE</text>
            <text x="12" y="48" fill="#10b981" font-size="20" font-family="var(--font-mono)" font-weight="700" id="vrm-hud-pressure">88.5 Bar</text>
            <text x="120" y="46" fill="#64748b" font-size="10" font-family="var(--font-mono)">65-110 Bar</text>
            <line x1="12" y1="56" x2="168" y2="56" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
            <line x1="12" y1="56" x2="135" y2="56" stroke="#10b981" stroke-width="3" stroke-linecap="round" id="vrm-hud-press-bar"/>
          </g>

          <!-- Vibration Warning Banner (Hidden unless rumble) -->
          <g id="vrm-rumble-banner" opacity="0" transform="translate(250, 435)">
            <rect width="400" height="32" rx="4" fill="rgba(239, 68, 68, 0.95)" stroke="#fecaca" stroke-width="1.5"/>
            <text x="200" y="21" fill="#ffffff" font-size="12" font-family="var(--font-mono)" font-weight="800" text-anchor="middle">
              ⚠️ SEVERE MILL RUMBLE - BED COLLAPSE DETECTED!
            </text>
          </g>
        </svg>
      </div>

      <!-- Quick Metrics Bar Below SVG -->
      <div class="vrm-footer-metrics" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px;">
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Motor Frequency</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-vrm-freq">46.5 Hz</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Stator Current</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-vrm-current">385.2 A</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Active Power</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-vrm-power">3,350 kW</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Motor Torque</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-vrm-torque">82.4 %</div>
        </div>
      </div>
    `}update(t){const i=document.getElementById("vrm-hud-bed");i&&(i.textContent=`${t.bedDepth.toFixed(1)} mm`);const e=document.getElementById("vrm-hud-bed-bar");if(e){const l=Math.max(0,Math.min(100,t.bedDepth/100*100));e.setAttribute("x2",(12+l*1.56).toString()),t.bedDepth<30?e.setAttribute("stroke","#ef4444"):e.setAttribute("stroke","#0284c7")}const s=document.getElementById("vrm-hud-pressure");s&&(s.textContent=`${t.grindingPressure.toFixed(1)} Bar`);const a=document.getElementById("classifier-rpm-text");a&&(a.textContent=`DYNAMIC CLASSIFIER: ${t.classifierRpm} RPM`);const r=document.getElementById("metric-vrm-freq");r&&(r.textContent=`${t.frequency.toFixed(1)} Hz`);const c=document.getElementById("metric-vrm-current");c&&(c.textContent=`${t.current.toFixed(1)} A`);const f=document.getElementById("metric-vrm-power");f&&(f.textContent=`${Math.round(t.activePower).toLocaleString()} kW`);const n=document.getElementById("metric-vrm-torque");n&&(n.textContent=`${t.torque.toFixed(1)} %`);const o=document.getElementById("vrm-status-pill"),m=document.getElementById("vrm-rumble-banner"),p=document.getElementById("roller-1-group"),h=document.getElementById("roller-2-group");if(t.status==="RUMBLE"){o&&(o.className="status-pill status-tripped",o.textContent="RUMBLE ALARM (>12 mm/s)"),m&&m.setAttribute("opacity","1");const l=(Math.random()-.5)*8,d=(Math.random()-.5)*8;p&&p.setAttribute("transform",`translate(0, ${l})`),h&&h.setAttribute("transform",`translate(0, ${d})`)}else t.status==="TRIPPED"?(o&&(o.className="status-pill status-tripped",o.textContent="TRIPPED (0.0 Hz)"),m&&m.setAttribute("opacity","0"),p&&p.setAttribute("transform","translate(0, 0)"),h&&h.setAttribute("transform","translate(0, 0)")):(o&&(o.className="status-pill status-running",o.textContent=`RUNNING (VFD ${t.frequency.toFixed(1)} Hz)`),m&&m.setAttribute("opacity","0"),p&&p.setAttribute("transform","translate(0, 0)"),h&&h.setAttribute("transform","translate(0, 0)"))}}class T{container;constructor(t){const i=document.getElementById(t);if(!i)throw new Error(`Container #${t} not found`);this.container=i,this.renderInitialStructure()}renderInitialStructure(){this.container.innerHTML=`
      <div class="panel-header">
        <div class="panel-title-group">
          <span class="badge-tag tag-cyan">FILTRATION & DRAFT</span>
          <h4 class="panel-title">Pulse-Jet Baghouse & ID Fan (6.6kV - 1800 kW)</h4>
        </div>
        <div class="header-badges">
          <span class="status-pill status-running" id="baghouse-status-pill">PULSE-JET HEALTHY</span>
        </div>
      </div>

      <div class="baghouse-svg-wrapper" style="position: relative; width: 100%; height: 360px; background: #070b14; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-card);">
        <svg viewBox="0 0 900 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" id="baghouse-main-svg">
          <defs>
            <linearGradient id="filterHousingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="60%" stop-color="#0f172a"/>
              <stop offset="100%" stop-color="#070b14"/>
            </linearGradient>

            <linearGradient id="hopperGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#1e293b"/>
              <stop offset="50%" stop-color="#334155"/>
              <stop offset="100%" stop-color="#1e293b"/>
            </linearGradient>

            <linearGradient id="airBlastGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stop-color="rgba(56, 189, 248, 0.9)"/>
              <stop offset="100%" stop-color="rgba(56, 189, 248, 0)"/>
            </linearGradient>

            <linearGradient id="fanCasingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155"/>
              <stop offset="50%" stop-color="#1e293b"/>
              <stop offset="100%" stop-color="#0f172a"/>
            </linearGradient>
          </defs>

          <!-- Mill Outlet Gas Duct Entry (Left) -->
          <path d="M 30 200 L 150 200 L 150 240 L 30 240 Z" fill="#334155" stroke="#f97316" stroke-width="2"/>
          <text x="40" y="190" fill="#fdba74" font-size="11" font-family="var(--font-mono)" font-weight="700">GAS FROM MILL (185°C)</text>

          <!-- Fresh Air Tempering Damper (Over-Temp Protection Interlock) -->
          <g id="fresh-air-damper-group" transform="translate(70, 140)">
            <rect x="0" y="0" width="60" height="40" rx="3" fill="#0f172a" stroke="#0ea5e9" stroke-width="1.5"/>
            <text x="30" y="18" fill="#38bdf8" font-size="8" font-family="var(--font-mono)" text-anchor="middle" font-weight="700">TEMPERING</text>
            <text x="30" y="32" fill="#94a3b8" font-size="10" font-family="var(--font-mono)" text-anchor="middle" id="damper-pct-text">DAMPER: 0%</text>
            <!-- Damper blade angle -->
            <line x1="20" y1="20" x2="40" y2="20" stroke="#38bdf8" stroke-width="3" id="damper-blade-line"/>
          </g>

          <!-- Baghouse Main Housing -->
          <rect x="150" y="100" width="360" height="230" rx="4" fill="url(#filterHousingGrad)" stroke="#475569" stroke-width="2.5"/>
          <text x="330" y="125" fill="#f8fafc" font-size="13" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">PULSE-JET FABRIC FILTER (8 COMPARTMENTS)</text>

          <!-- Compressed Air Manifold Pipe (6 Bar) -->
          <rect x="170" y="140" width="320" height="12" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="180" y="135" fill="#38bdf8" font-size="9" font-family="var(--font-mono)">COMPRESSED AIR HEADER (6.2 BAR)</text>

          <!-- 8 Solenoid Valve Headers & Filter Bag Rows -->
          <!-- We draw 8 vertical bag rows with pulse nozzles -->
          <g id="pulse-rows-group">
            <!-- Row 1 -->
            <g class="pulse-row" id="p-row-1" transform="translate(190, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#38bdf8" id="sol-valve-1"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 2 -->
            <g class="pulse-row" id="p-row-2" transform="translate(230, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-2"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 3 -->
            <g class="pulse-row" id="p-row-3" transform="translate(270, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-3"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 4 -->
            <g class="pulse-row" id="p-row-4" transform="translate(310, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-4"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 5 -->
            <g class="pulse-row" id="p-row-5" transform="translate(350, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-5"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 6 -->
            <g class="pulse-row" id="p-row-6" transform="translate(390, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-6"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 7 -->
            <g class="pulse-row" id="p-row-7" transform="translate(430, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-7"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
            <!-- Row 8 -->
            <g class="pulse-row" id="p-row-8" transform="translate(470, 152)">
              <rect x="-6" y="0" width="12" height="10" fill="#64748b" id="sol-valve-8"/>
              <rect x="-8" y="15" width="16" height="145" rx="3" fill="#334155" stroke="#64748b" stroke-width="1"/>
            </g>
          </g>

          <!-- Active Air Pulse Flash Blast (Animated dynamically over active row) -->
          <path id="pulse-blast-flash" d="M 180 162 L 200 162 L 210 310 L 170 310 Z" fill="url(#airBlastGrad)" opacity="0"/>

          <!-- Dust Hoppers Below Filter (Conical Pyramidal Hoppers) -->
          <polygon points="150,330 240,430 280,430 330,330" fill="url(#hopperGrad)" stroke="#475569" stroke-width="2"/>
          <polygon points="330,330 380,430 420,430 510,330" fill="url(#hopperGrad)" stroke="#475569" stroke-width="2"/>
          <!-- Rotary airlocks -->
          <circle cx="260" cy="445" r="12" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
          <circle cx="400" cy="445" r="12" fill="#0f172a" stroke="#64748b" stroke-width="1.5"/>
          <text x="330" y="475" fill="#94a3b8" font-size="10" font-family="var(--font-mono)" text-anchor="middle">DUST RECYCLE AIRLOCKS &rarr; PRODUCT AIR SLIDE</text>

          <!-- Clean Gas Duct to ID Fan -->
          <path d="M 510 140 L 590 140 L 590 260 L 630 260" fill="none" stroke="#38bdf8" stroke-width="8" stroke-linecap="round"/>

          <!-- ID Fan Casing & Motor (6.6kV - 1800 kW) -->
          <g id="id-fan-assembly" transform="translate(670, 260)">
            <!-- Fan Scroll Casing -->
            <circle cx="0" cy="0" r="55" fill="url(#fanCasingGrad)" stroke="#0284c7" stroke-width="3"/>
            <!-- Rotating Fan Impeller Blades -->
            <g id="fan-impeller-blades">
              <line x1="-42" y1="0" x2="42" y2="0" stroke="#38bdf8" stroke-width="3"/>
              <line x1="0" y1="-42" x2="0" y2="42" stroke="#38bdf8" stroke-width="3"/>
              <line x1="-30" y1="-30" x2="30" y2="30" stroke="#38bdf8" stroke-width="3"/>
              <line x1="-30" y1="30" x2="30" y2="-30" stroke="#38bdf8" stroke-width="3"/>
            </g>
            <circle cx="0" cy="0" r="16" fill="#0b1120" stroke="#38bdf8" stroke-width="2"/>
            <text x="0" y="4" fill="#38bdf8" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">ID FAN</text>
            
            <!-- Fan Motor Block -->
            <rect x="-35" y="65" width="70" height="40" rx="3" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
            <text x="0" y="82" fill="#f8fafc" font-size="8" font-family="var(--font-mono)" text-anchor="middle">6.6kV 1800kW</text>
            <text x="0" y="96" fill="#38bdf8" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle" id="id-fan-rpm-val">940 RPM</text>
          </g>

          <!-- Stack Duct & Exhaust Chimney -->
          <path d="M 725 240 L 800 240 L 800 70 L 850 70 L 850 420 L 800 420" fill="none" stroke="#334155" stroke-width="5"/>
          <rect x="795" y="60" width="60" height="360" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
          <text x="825" y="85" fill="#cbd5e1" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">EXHAUST STACK</text>
          <!-- Clean gas emission plume -->
          <ellipse cx="825" cy="45" rx="20" ry="12" fill="rgba(255,255,255,0.08)"/>

          <!-- Differential Pressure HUD Gauge (ΔP) -->
          <g transform="translate(160, 20)">
            <rect width="180" height="70" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="12" y="20" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">BAGHOUSE ΔP</text>
            <text x="12" y="46" fill="#38bdf8" font-size="20" font-family="var(--font-mono)" font-weight="700" id="baghouse-hud-dp">12.4 mbar</text>
            <text x="110" y="44" fill="#64748b" font-size="9" font-family="var(--font-mono)">Hi: >16 | Trip: >22</text>
            <line x1="12" y1="56" x2="168" y2="56" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
            <line x1="12" y1="56" x2="80" y2="56" stroke="#0284c7" stroke-width="3" stroke-linecap="round" id="baghouse-hud-dp-bar"/>
          </g>

          <!-- Stack Dust Opacity Meter HUD -->
          <g transform="translate(680, 20)">
            <rect width="190" height="70" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="12" y="20" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">STACK OPACITY (EMISSION)</text>
            <text x="12" y="46" fill="#10b981" font-size="20" font-family="var(--font-mono)" font-weight="700" id="baghouse-hud-opacity">7.2 mg/Nm³</text>
            <text x="130" y="44" fill="#64748b" font-size="9" font-family="var(--font-mono)">Limit: 20</text>
            <line x1="12" y1="56" x2="178" y2="56" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
            <line x1="12" y1="56" x2="65" y2="56" stroke="#10b981" stroke-width="3" stroke-linecap="round" id="baghouse-hud-op-bar"/>
          </g>
        </svg>
      </div>

      <!-- Pulse Sequencer & Thermal Interlock Bar -->
      <div class="baghouse-footer-controls" style="display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 10px; margin-top: 10px;">
        <!-- Solenoid Row Status Matrix -->
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span class="readout-label" style="font-size: 11px;">Pulse-Jet Solenoid Sequencer (Row 1 to 8)</span>
            <span class="font-mono text-cyan" style="font-size: 11px;" id="seq-active-label">Active: Row #1</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 6px;" id="solenoid-led-rack">
            ${[1,2,3,4,5,6,7,8].map(t=>`
              <div class="solenoid-tile font-mono" id="sol-tile-${t}" style="background: #0b1120; border: 1px solid #1e293b; border-radius: 4px; padding: 4px; text-align: center; font-size: 10px;">
                R${t}
                <div class="led-dot led-gray" id="sol-led-${t}" style="margin: 2px auto 0 auto; width: 8px; height: 8px; border-radius: 50%;"></div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Gas Inlet Temp PT100 -->
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Inlet Flue Gas Temp</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-inlet-temp">184.5 °C</div>
          <div style="font-size: 10px; color: var(--text-muted);">Trip Limit: 210°C (Auto Tempering)</div>
        </div>

        <!-- ID Fan Motor Current & Power -->
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">ID Fan Current / Power</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-idfan-amp">162.5 A</div>
          <div style="font-size: 10px; color: var(--text-muted); font-family: var(--font-mono);" id="metric-idfan-kw">1,480 kW (6.6 kV)</div>
        </div>
      </div>
    `}update(t){const i=document.getElementById("baghouse-hud-dp");i&&(i.textContent=`${t.differentialPressure.toFixed(1)} mbar`);const e=document.getElementById("baghouse-hud-dp-bar");if(e){const l=Math.max(0,Math.min(100,t.differentialPressure/25*100));e.setAttribute("x2",(12+l*1.56).toString()),t.differentialPressure>20?e.setAttribute("stroke","#ef4444"):t.differentialPressure>16?e.setAttribute("stroke","#f59e0b"):e.setAttribute("stroke","#0284c7")}const s=document.getElementById("baghouse-hud-opacity");s&&(s.textContent=`${t.stackDustOpacity.toFixed(1)} mg/Nm³`);const a=document.getElementById("baghouse-hud-op-bar");if(a){const l=Math.max(0,Math.min(100,t.stackDustOpacity/35*100));a.setAttribute("x2",(12+l*1.66).toString()),t.stackDustOpacity>20?a.setAttribute("stroke","#ef4444"):a.setAttribute("stroke","#10b981")}const r=document.getElementById("damper-pct-text");r&&(r.textContent=`DAMPER: ${t.freshAirDamperOpen}%`);const c=document.getElementById("damper-blade-line");if(c){const l=t.freshAirDamperOpen/100*45;c.setAttribute("transform",`rotate(${l}, 30, 20)`)}const f=document.getElementById("seq-active-label");f&&(f.textContent=`Active: Row #${t.activePulseRow}`);for(let l=1;l<=8;l++){const d=document.getElementById(`sol-led-${l}`),y=document.getElementById(`sol-valve-${l}`),g=t.activePulseRow===l;d&&(g&&t.pulseJetFiring?(d.style.background="#38bdf8",d.style.boxShadow="0 0 8px #38bdf8"):g?(d.style.background="#10b981",d.style.boxShadow="none"):(d.style.background="#334155",d.style.boxShadow="none")),y&&y.setAttribute("fill",g&&t.pulseJetFiring?"#38bdf8":"#64748b")}const n=document.getElementById("pulse-blast-flash");if(n)if(t.pulseJetFiring){const l=190+(t.activePulseRow-1)*40;n.setAttribute("d",`M ${l-15} 162 L ${l+15} 162 L ${l+25} 310 L ${l-25} 310 Z`),n.setAttribute("opacity","0.85")}else n.setAttribute("opacity","0");const o=document.getElementById("metric-inlet-temp");o&&(o.textContent=`${t.inletGasTemp.toFixed(1)} °C`,t.inletGasTemp>210?o.className="font-mono text-red":o.className="font-mono text-cyan");const m=document.getElementById("metric-idfan-amp");m&&(m.textContent=`${t.idFanCurrent.toFixed(1)} A`);const p=document.getElementById("metric-idfan-kw");p&&(p.textContent=`${Math.round(t.idFanPower).toLocaleString()} kW (6.6 kV)`);const h=document.getElementById("baghouse-status-pill");h&&(t.status==="HIGH_DP"?(h.className="status-pill status-tripped",h.textContent="HIGH ΔP ALARM (>20 mbar)"):t.status==="HIGH_TEMP"||t.damperInterlockActive?(h.className="status-pill status-tripped",h.textContent="OVER-TEMP INTERLOCK (TEMPERING ON)"):(h.className="status-pill status-running",h.textContent="PULSE-JET HEALTHY"))}}class A{container;constructor(t){const i=document.getElementById(t);if(!i)throw new Error(`Container #${t} not found`);this.container=i,this.renderInitialStructure()}renderInitialStructure(){this.container.innerHTML=`
      <div class="panel-header">
        <div class="panel-title-group">
          <span class="badge-tag tag-cyan">ELECTRICAL SLD</span>
          <h4 class="panel-title">6.6 kV Switchgear & 18-Pulse MV-VFD Drive Architecture</h4>
        </div>
        <div class="header-badges">
          <span class="status-pill status-running" id="sld-vcb-status">VCB 52-1: CLOSED</span>
        </div>
      </div>

      <div class="sld-svg-wrapper" style="position: relative; width: 100%; height: 380px; background: #070b14; border-radius: 8px; overflow: hidden; border: 1px solid var(--border-card);">
        <svg viewBox="0 0 900 520" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" id="vfd-sld-svg">
          <defs>
            <linearGradient id="busbarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#38bdf8"/>
              <stop offset="50%" stop-color="#818cf8"/>
              <stop offset="100%" stop-color="#38bdf8"/>
            </linearGradient>

            <linearGradient id="dcBusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#f59e0b"/>
              <stop offset="50%" stop-color="#d97706"/>
              <stop offset="100%" stop-color="#f59e0b"/>
            </linearGradient>

            <pattern id="sldGrid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.02)" stroke-width="1"/>
            </pattern>
          </defs>

          <rect width="900" height="520" fill="url(#sldGrid)"/>

          <!-- 6.6 kV Medium Voltage Busbar -->
          <rect x="50" y="30" width="800" height="12" rx="3" fill="url(#busbarGrad)"/>
          <text x="60" y="24" fill="#38bdf8" font-size="12" font-family="var(--font-mono)" font-weight="700">6.6 kV MV SUBSTATION BUSBAR (INCOMING 50 Hz)</text>
          <text x="750" y="24" fill="#94a3b8" font-size="11" font-family="var(--font-mono)" id="sld-bus-v">6,604 V</text>

          <!-- Feeder Incomer to VCB 52-1 -->
          <line x1="160" y1="42" x2="160" y2="90" stroke="#38bdf8" stroke-width="4"/>

          <!-- ANSI 51/50 Relay CT Sensors -->
          <circle cx="160" cy="70" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/>
          <text x="180" y="74" fill="#f59e0b" font-size="9" font-family="var(--font-mono)">CT: 600/5A</text>

          <!-- Vacuum Circuit Breaker (VCB 52-1) -->
          <g id="vcb-breaker-symbol" transform="translate(130, 90)">
            <rect x="0" y="0" width="60" height="50" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
            <!-- Breaker contacts line -->
            <line x1="30" y1="5" x2="30" y2="18" stroke="#38bdf8" stroke-width="3"/>
            <line x1="30" y1="32" x2="30" y2="45" stroke="#38bdf8" stroke-width="3"/>
            <!-- Moving contact knife -->
            <line x1="30" y1="18" x2="30" y2="32" stroke="#10b981" stroke-width="3" id="vcb-knife-line"/>
            <text x="30" y="62" fill="#cbd5e1" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">VCB 52-1</text>
          </g>

          <!-- Line from VCB to 18-Pulse Transformer -->
          <line x1="160" y1="155" x2="160" y2="200" stroke="#38bdf8" stroke-width="4"/>

          <!-- 18-Pulse Phase Shifting Isolation Transformer (5000 kVA, 6.6 kV / 3 x 2.2 kV) -->
          <g transform="translate(90, 200)">
            <rect x="0" y="0" width="140" height="110" rx="5" fill="#0f172a" stroke="#818cf8" stroke-width="2"/>
            <text x="70" y="20" fill="#818cf8" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">18-PULSE XFMR</text>
            <text x="70" y="34" fill="#94a3b8" font-size="8" font-family="var(--font-mono)" text-anchor="middle">5000 kVA (Dyn11+)</text>

            <!-- Primary Delta Winding -->
            <polygon points="70,42 55,62 85,62" fill="none" stroke="#38bdf8" stroke-width="2"/>
            <text x="70" y="58" fill="#38bdf8" font-size="8" font-family="var(--font-mono)" text-anchor="middle">6.6kV</text>

            <!-- 3 Secondary Windings (±20°, 0°) -->
            <circle cx="35" cy="85" r="14" fill="none" stroke="#a855f7" stroke-width="2"/>
            <text x="35" y="88" fill="#a855f7" font-size="8" font-family="var(--font-mono)" text-anchor="middle">+20°</text>

            <circle cx="70" cy="85" r="14" fill="none" stroke="#a855f7" stroke-width="2"/>
            <text x="70" y="88" fill="#a855f7" font-size="8" font-family="var(--font-mono)" text-anchor="middle">0°</text>

            <circle cx="105" cy="85" r="14" fill="none" stroke="#a855f7" stroke-width="2"/>
            <text x="105" y="88" fill="#a855f7" font-size="8" font-family="var(--font-mono)" text-anchor="middle">-20°</text>
          </g>

          <!-- 3 Feeder lines from transformer to Rectifier Bridges -->
          <path d="M 125 310 L 125 350 L 290 350" fill="none" stroke="#a855f7" stroke-width="2.5"/>
          <path d="M 160 310 L 160 380 L 290 380" fill="none" stroke="#a855f7" stroke-width="2.5"/>
          <path d="M 195 310 L 195 410 L 290 410" fill="none" stroke="#a855f7" stroke-width="2.5"/>

          <!-- Three 6-Pulse Diode Bridge Rectifiers -->
          <g transform="translate(290, 335)">
            <rect x="0" y="0" width="80" height="90" rx="4" fill="#0f172a" stroke="#d97706" stroke-width="2"/>
            <text x="40" y="22" fill="#f59e0b" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">3x RECTIFIER</text>
            <text x="40" y="38" fill="#94a3b8" font-size="8" font-family="var(--font-mono)" text-anchor="middle">18-Pulse Diode</text>
            <!-- Diode bridge symbols -->
            <polygon points="25,65 55,65 40,48" fill="#d97706"/>
            <line x1="25" y1="48" x2="55" y2="48" stroke="#f59e0b" stroke-width="2"/>
            <text x="40" y="80" fill="#f8fafc" font-size="8" font-family="var(--font-mono)" text-anchor="middle">Harmonic Cancel</text>
          </g>

          <!-- Intermediate DC Link Bus (8910 VDC) -->
          <line x1="370" y1="360" x2="440" y2="360" stroke="#f59e0b" stroke-width="4"/>
          <line x1="370" y1="400" x2="440" y2="400" stroke="#f59e0b" stroke-width="4"/>

          <!-- DC Link Capacitor Bank & Chopper -->
          <g transform="translate(440, 340)">
            <rect x="0" y="0" width="70" height="80" rx="4" fill="#0b1120" stroke="#f59e0b" stroke-width="2"/>
            <text x="35" y="20" fill="#f59e0b" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">DC LINK</text>
            <!-- Capacitor lines -->
            <line x1="25" y1="40" x2="45" y2="40" stroke="#f59e0b" stroke-width="3"/>
            <line x1="25" y1="46" x2="45" y2="46" stroke="#f59e0b" stroke-width="3"/>
            <text x="35" y="65" fill="#f8fafc" font-size="10" font-family="var(--font-mono)" font-weight="700" text-anchor="middle" id="sld-dclink-v">8,910 V</text>
          </g>

          <line x1="510" y1="380" x2="560" y2="380" stroke="#f59e0b" stroke-width="4"/>

          <!-- 3-Level NPC IGBT Inverter Bridge -->
          <g transform="translate(560, 335)">
            <rect x="0" y="0" width="95" height="90" rx="4" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
            <text x="47" y="22" fill="#38bdf8" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">3-LEVEL NPC</text>
            <text x="47" y="38" fill="#94a3b8" font-size="8" font-family="var(--font-mono)" text-anchor="middle">IGBT INVERTER</text>
            <polygon points="35,50 60,65 35,80" fill="#0284c7"/>
            <text x="47" y="82" fill="#f8fafc" font-size="9" font-family="var(--font-mono)" text-anchor="middle">PWM DRIVE</text>
          </g>

          <!-- Inverter Output Cable to 4200 kW Mill Motor -->
          <line x1="655" y1="380" x2="740" y2="380" stroke="#10b981" stroke-width="4"/>

          <!-- 4200 kW VRM Mill Motor Symbol -->
          <g transform="translate(740, 340)">
            <circle cx="40" cy="40" r="38" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
            <text x="40" y="32" fill="#10b981" font-size="14" font-family="var(--font-mono)" font-weight="800" text-anchor="middle">M</text>
            <text x="40" y="48" fill="#f8fafc" font-size="9" font-family="var(--font-mono)" font-weight="700" text-anchor="middle">4,200 kW</text>
            <text x="40" y="60" fill="#94a3b8" font-size="8" font-family="var(--font-mono)" text-anchor="middle">VRM DRIVE</text>
          </g>

          <!-- IEEE 519 Harmonics Telemetry Block (Top Right) -->
          <g transform="translate(480, 70)">
            <rect width="380" height="150" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="14" y="24" fill="#38bdf8" font-size="11" font-family="var(--font-mono)" font-weight="700">IEEE 519 HARMONIC SPECTRUM TELEMETRY</text>

            <text x="14" y="52" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">THD-I (Current):</text>
            <text x="130" y="52" fill="#10b981" font-size="13" font-family="var(--font-mono)" font-weight="700" id="sld-thd-i">2.38 %</text>
            <text x="190" y="52" fill="#64748b" font-size="9" font-family="var(--font-mono)">(IEEE Limit: < 5.0%)</text>

            <text x="14" y="74" fill="#94a3b8" font-size="10" font-family="var(--font-mono)">THD-V (Voltage):</text>
            <text x="130" y="74" fill="#10b981" font-size="13" font-family="var(--font-mono)" font-weight="700" id="sld-thd-v">1.76 %</text>
            <text x="190" y="74" fill="#64748b" font-size="9" font-family="var(--font-mono)">(IEEE Limit: < 3.0%)</text>

            <!-- 18-Pulse Phase Cancellation Indicator -->
            <line x1="14" y1="88" x2="366" y2="88" stroke="#1e293b" stroke-width="1"/>
            <text x="14" y="105" fill="#a855f7" font-size="9" font-family="var(--font-mono)" font-weight="700">HARMONIC CANCELLATION (18-PULSE PHASE SHIFT):</text>
            <text x="14" y="122" fill="#cbd5e1" font-size="9" font-family="var(--font-mono)">• 5th & 7th Harmonics: CANCELLED (0.4%)</text>
            <text x="14" y="137" fill="#cbd5e1" font-size="9" font-family="var(--font-mono)">• 11th & 13th Harmonics: CANCELLED (0.8%)</text>
            <text x="260" y="130" fill="#10b981" font-size="11" font-family="var(--font-mono)" font-weight="700">COMPLIANT</text>
          </g>

          <!-- Numerical Protection Relays Rack (Middle) -->
          <g transform="translate(250, 70)">
            <rect width="210" height="150" rx="4" fill="rgba(15, 23, 42, 0.9)" stroke="#1e293b" stroke-width="1.5"/>
            <text x="12" y="24" fill="#f59e0b" font-size="11" font-family="var(--font-mono)" font-weight="700">NUMERICAL PROTECTION RELAYS</text>

            <!-- ANSI 51/50 -->
            <g transform="translate(12, 38)">
              <rect width="186" height="30" rx="3" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
              <circle cx="16" cy="15" r="5" fill="#10b981" id="led-relay-51"/>
              <text x="30" y="18" fill="#f8fafc" font-size="10" font-family="var(--font-mono)">ANSI 51/50: Overcurrent / Short</text>
            </g>

            <!-- ANSI 27/59 -->
            <g transform="translate(12, 74)">
              <rect width="186" height="30" rx="3" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
              <circle cx="16" cy="15" r="5" fill="#10b981" id="led-relay-59"/>
              <text x="30" y="18" fill="#f8fafc" font-size="10" font-family="var(--font-mono)">ANSI 27/59: DC Bus Volt Relay</text>
            </g>

            <!-- ANSI 87T -->
            <g transform="translate(12, 110)">
              <rect width="186" height="30" rx="3" fill="#0b1120" stroke="#1e293b" stroke-width="1"/>
              <circle cx="16" cy="15" r="5" fill="#10b981" id="led-relay-87"/>
              <text x="30" y="18" fill="#f8fafc" font-size="10" font-family="var(--font-mono)">ANSI 87T: XFMR Differential</text>
            </g>
          </g>
        </svg>
      </div>

      <!-- Electrical Telemetry Footer Cards -->
      <div class="sld-footer-cards" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 10px;">
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">MV Incomer Voltage</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-mv-volt">6,604 V</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">DC-Link Voltage</div>
          <div class="font-mono text-amber" style="font-size: 18px; font-weight: 700;" id="metric-dc-volt">8,910 VDC</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Inverter IGBT Temp</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-igbt-temp">61.5 °C</div>
        </div>
        <div class="digital-readout-card" style="padding: 8px 12px;">
          <div class="readout-label" style="font-size: 11px;">Grid Frequency</div>
          <div class="font-mono text-cyan" style="font-size: 18px; font-weight: 700;" id="metric-grid-hz">50.01 Hz</div>
        </div>
      </div>
    `}update(t){const i=document.getElementById("sld-bus-v");i&&(i.textContent=`${t.mvBusVoltage.toLocaleString()} V`);const e=document.getElementById("sld-dclink-v");e&&(e.textContent=`${t.dcBusVoltage.toLocaleString()} V`);const s=document.getElementById("metric-mv-volt");s&&(s.textContent=`${t.mvBusVoltage.toLocaleString()} V`);const a=document.getElementById("metric-dc-volt");a&&(a.textContent=`${t.dcBusVoltage.toLocaleString()} VDC`,t.dcBusVoltage>9450?a.className="font-mono text-red":a.className="font-mono text-amber");const r=document.getElementById("metric-igbt-temp");r&&(r.textContent=`${t.igbtTemp.toFixed(1)} °C`);const c=document.getElementById("metric-grid-hz");c&&(c.textContent=`${t.gridFrequency.toFixed(2)} Hz`);const f=document.getElementById("sld-thd-i");f&&(f.textContent=`${t.thdI.toFixed(2)} %`);const n=document.getElementById("sld-thd-v");n&&(n.textContent=`${t.thdV.toFixed(2)} %`);const o=document.getElementById("vcb-knife-line"),m=document.getElementById("sld-vcb-status");t.vcbClosed?(o&&(o.setAttribute("x1","30"),o.setAttribute("y1","18"),o.setAttribute("x2","30"),o.setAttribute("y2","32"),o.setAttribute("stroke","#10b981")),m&&(m.className="status-pill status-running",m.textContent="VCB 52-1: CLOSED")):(o&&(o.setAttribute("x1","30"),o.setAttribute("y1","18"),o.setAttribute("x2","45"),o.setAttribute("y2","24"),o.setAttribute("stroke","#ef4444")),m&&(m.className="status-pill status-tripped",m.textContent="VCB 52-1: TRIPPED (OPEN)"));const p=document.getElementById("led-relay-51"),h=document.getElementById("led-relay-59"),l=document.getElementById("led-relay-87");p&&p.setAttribute("fill",t.relay51_50_trip?"#ef4444":"#10b981"),h&&h.setAttribute("fill",t.relay27_59_trip?"#ef4444":"#10b981"),l&&l.setAttribute("fill",t.relay87T_trip?"#ef4444":"#10b981")}}class R{container;canvas=null;ctx=null;animFrameId=null;waveHistory=[];currentVibration=2.35;isRumble=!1;timeStep=0;constructor(t){const i=document.getElementById(t);if(!i)throw new Error(`Container #${t} not found`);this.container=i,this.renderInitialStructure(),this.initCanvas(),this.startAnimation()}renderInitialStructure(){this.container.innerHTML=`
      <div class="panel-header">
        <div class="panel-title-group">
          <span class="badge-tag tag-purple">AI PREDICTIVE MAINTENANCE</span>
          <h4 class="panel-title">Planetary Gearbox FFT Vibration Spectrum & Roller Tire Wear</h4>
        </div>
        <div class="header-badges">
          <span class="status-pill status-running" id="ai-health-pill">HEALTH: 98.4% (ZONE A)</span>
        </div>
      </div>

      <!-- AI Real-Time Diagnostic Banner -->
      <div class="ai-banner" id="ai-diagnostic-strip" style="background: rgba(168, 85, 247, 0.1); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 6px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-brain text-purple"></i>
          <span style="font-size: 11px; font-weight: 700; color: #e9d5ff;" id="ai-status-msg">
            AI Diagnostic: Autoencoder healthy - All Harmonics Nominal (ISO 10816 Zone A)
          </span>
        </div>
        <div class="font-mono text-purple" style="font-size: 11px;" id="ai-rul-text">
          ESTIMATED RUL: >1,450 HOURS
        </div>
      </div>

      <!-- 60fps HTML5 Canvas Viewport -->
      <div style="position: relative; width: 100%; height: 220px; background: #070b14; border-radius: 6px; overflow: hidden; border: 1px solid var(--border-subtle);">
        <canvas id="vibe-realtime-canvas" width="800" height="220" style="width: 100%; height: 100%; display: block;"></canvas>
      </div>

      <!-- Roller Tire Wear Bars -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-top: 10px;">
        ${[1,2,3,4].map(t=>`
          <div class="digital-readout-card" style="padding: 6px 10px;">
            <div style="display: flex; justify-content: space-between; font-size: 10px; color: var(--text-muted);">
              <span>Roller #${t} Tire Wear</span>
              <span class="font-mono text-cyan" id="wear-val-${t}">14%</span>
            </div>
            <div class="readout-bar" style="margin-top: 4px;">
              <div class="readout-bar-fill" id="wear-bar-${t}" style="width: 14%; background: #0284c7;"></div>
            </div>
          </div>
        `).join("")}
      </div>
    `}initCanvas(){this.canvas=document.getElementById("vibe-realtime-canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.canvas.parentElement?.clientWidth||800,this.canvas.height=220),this.waveHistory=new Array(80).fill(2.35)}update(t,i){this.currentVibration=t.vibrationRms,this.isRumble=t.status==="RUMBLE";const e=document.getElementById("ai-health-pill");e&&(i.anomalyDetected||this.isRumble?(e.className="status-pill status-tripped",e.textContent=`CRITICAL: ${i.healthScore.toFixed(1)}% (ZONE D)`):(e.className="status-pill status-running",e.textContent=`HEALTH: ${i.healthScore.toFixed(1)}% (ZONE A)`));const s=document.getElementById("ai-status-msg");s&&(s.textContent=i.anomalyMessage,i.anomalyDetected||this.isRumble?s.style.color="#ef4444":s.style.color="#e9d5ff");const a=document.getElementById("ai-rul-text");a&&(a.textContent=`ESTIMATED RUL: ${Math.round(i.rulHours)} HOURS`),t.rollerWear.forEach((r,c)=>{const f=document.getElementById(`wear-val-${c+1}`),n=document.getElementById(`wear-bar-${c+1}`);f&&(f.textContent=`${r.toFixed(1)}%`),n&&(n.style.width=`${r}%`,r>40?n.style.background="#ef4444":r>25?n.style.background="#f59e0b":n.style.background="#0284c7")})}startAnimation(){const t=()=>{this.ctx&&this.canvas&&this.renderFrame(),this.animFrameId=requestAnimationFrame(t)};this.animFrameId=requestAnimationFrame(t)}renderFrame(){if(!this.ctx||!this.canvas)return;const t=this.canvas.width,i=this.canvas.height,e=this.ctx;this.timeStep+=.05,e.fillStyle="#070b14",e.fillRect(0,0,t,i),e.strokeStyle="rgba(30, 41, 59, 0.4)",e.lineWidth=1;for(let d=40;d<t;d+=40)e.beginPath(),e.moveTo(d,0),e.lineTo(d,i),e.stroke();for(let d=30;d<i;d+=30)e.beginPath(),e.moveTo(0,d),e.lineTo(t,d),e.stroke();const s=t*.55,a=t*.45;e.font='10px "JetBrains Mono", Consolas, monospace',e.fillStyle="#94a3b8",e.fillText("FFT SPECTRUM (0 - 600 Hz) - GEAR MESH & ROLLER PASS",15,18);const r=i-25,c=9,f=r-4.5*c;e.strokeStyle="rgba(245, 158, 11, 0.4)",e.setLineDash([4,4]),e.beginPath(),e.moveTo(15,f),e.lineTo(s-15,f),e.stroke(),e.fillStyle="#f59e0b",e.fillText("ISO ALARM: 4.5 mm/s",s-130,f-3);const n=r-7.1*c;e.strokeStyle="rgba(239, 68, 68, 0.4)",e.beginPath(),e.moveTo(15,n),e.lineTo(s-15,n),e.stroke(),e.fillStyle="#ef4444",e.fillText("ISO TRIP: 7.1 mm/s",s-120,n-3),e.setLineDash([]);const o=36,m=(s-40)/o;for(let d=0;d<o;d++){const y=Math.round(d/o*600);let g=.4+Math.sin(this.timeStep*2+d)*.2;Math.abs(y-28)<18&&(g+=1.2+Math.sin(this.timeStep)*.3),Math.abs(y-312)<20&&(this.isRumble?g=this.currentVibration:g=1.1+Math.sin(this.timeStep*3)*.2);const v=Math.min(r-25,g*c),E=20+d*m,w=r-v;Math.abs(y-312)<20?(e.fillStyle=this.isRumble?"#ef4444":"#a855f7",e.fillRect(E,w,m-2,v),e.fillStyle=this.isRumble?"#fecaca":"#d8b4fe",e.fillText("312Hz",E-6,w-6)):(e.fillStyle="#0284c7",e.fillRect(E,w,m-2,v))}const p=s+10;e.fillStyle="#94a3b8",e.fillText(`GEARBOX RMS: ${this.currentVibration.toFixed(2)} mm/s`,p+10,18),e.strokeStyle="#1e293b",e.beginPath(),e.moveTo(s,10),e.lineTo(s,i-10),e.stroke(),e.strokeStyle=this.isRumble?"#ef4444":"#38bdf8",e.lineWidth=2,e.beginPath();const h=i/2+10,l=this.isRumble?32:12;for(let d=0;d<a-20;d++){const y=this.timeStep*4+d*.08;let g=Math.sin(y)*.4+Math.sin(y*4.2)*.6;this.isRumble&&(g+=(Math.random()-.5)*1.8);const v=h+g*l,E=p+d;d===0?e.moveTo(E,v):e.lineTo(E,v)}e.stroke()}destroy(){this.animFrameId&&cancelAnimationFrame(this.animFrameId)}}class M{modalEl=null;constructor(){this.createModal(),this.bindEvents()}createModal(){document.body.insertAdjacentHTML("beforeend",`
      <div class="modal-backdrop" id="engineering-dossier-modal" style="display: none; position: fixed; inset: 0; background: rgba(3, 7, 18, 0.85); backdrop-filter: blur(8px); z-index: 10000; overflow-y: auto; padding: 20px;">
        <div class="modal-dialog" style="max-width: 1050px; margin: 30px auto; background: #0b1120; border: 1px solid var(--border-card); border-radius: 8px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7); overflow: hidden;">
          
          <!-- Modal Header -->
          <div class="modal-header" style="background: #0f172a; padding: 20px 24px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 14px;">
              <div style="background: rgba(14, 165, 233, 0.15); border: 1px solid var(--border-focus); width: 44px; height: 44px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 20px; color: var(--cyan-primary);">
                <i class="fa-solid fa-file-shield"></i>
              </div>
              <div>
                <h3 style="font-size: 18px; font-weight: 800; color: #f8fafc; letter-spacing: -0.02em;">
                  VRM-NEXUS: ENGINEERING DOSSIER & SYSTEM ARCHITECTURE
                </h3>
                <div style="font-size: 12px; color: #94a3b8; font-family: var(--font-mono); margin-top: 2px;">
                  Specification Document &bull; 6.6 kV MV-VFD Drive &bull; IEEE 519 Harmonics &bull; ANSI Relays &bull; ISO 10816
                </div>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 10px;">
              <button class="btn btn-secondary" id="btn-modal-print" style="padding: 6px 12px; font-size: 12px;">
                <i class="fa-solid fa-print"></i> Print / Export PDF
              </button>
              <button class="btn btn-secondary" id="btn-modal-close" style="padding: 6px 12px; font-size: 14px;">
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
          </div>

          <!-- Engineer Credentials Badge -->
          <div style="background: #070c17; padding: 12px 24px; border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span style="font-size: 11px; color: var(--text-muted); font-weight: 700;">LEAD DESIGNER & AUTOMATION SYSTEMS ENGINEER:</span>
              <span class="font-mono text-cyan" style="font-size: 13px; font-weight: 700;">أ. طارق ابوعشي | Tareq Abuashi</span>
            </div>
            <div class="font-mono" style="font-size: 11px; color: #10b981;">
              <i class="fa-solid fa-certificate"></i> AUTHENTICATED INDUSTRIAL DIGITAL TWIN v4.9
            </div>
          </div>

          <!-- Modal Body Content -->
          <div class="modal-body" style="padding: 24px; color: #cbd5e1; font-size: 13px; line-height: 1.7; max-height: calc(85vh - 160px); overflow-y: auto;">
            
            <!-- SECTION 1: Executive Overview -->
            <div class="dossier-section" style="margin-bottom: 24px;">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                1. Executive Overview & System Boundaries
              </h4>
              <p>
                <strong>VRM-NEXUS</strong> is a comprehensive digital twin and supervisory control and data acquisition (SCADA) platform engineered for a <strong>Vertical Roller Mill (VRM)</strong> raw grinding department in a modern cement production facility. The system integrates a high-efficiency 4-roller mill (Pfeiffer / Loesche design), powered by a <strong>6.6 kV - 4,200 kW Medium Voltage Variable Frequency Drive (MV-VFD)</strong>, coupled with a high-capacity <strong>Pulse-Jet Baghouse Filter</strong> and an <strong>1,800 kW Induced Draft (ID) Fan</strong>.
              </p>
            </div>

            <!-- SECTION 2: MV Electrical & 18-Pulse VFD Drive Architecture -->
            <div class="dossier-section" style="margin-bottom: 24px;">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                2. 6.6 kV MV Switchgear, 18-Pulse Drive & IEEE 519 Harmonic Cancellation
              </h4>
              <p>
                To eliminate line-side harmonic pollution and comply strictly with <strong>IEEE 519 (Harmonic Control in Electric Power Systems)</strong>, the 4,200 kW mill motor is driven through an <strong>18-pulse phase-shifting isolation transformer</strong> (5,000 kVA, Dyn11+ topology):
              </p>
              <div style="background: #070c17; border-left: 3px solid var(--cyan-primary); padding: 12px 16px; margin: 12px 0; border-radius: 0 4px 4px 0; font-family: var(--font-mono); font-size: 12px;">
                <div><strong>Phase Shift Relationship:</strong></div>
                <div>&bull; Secondary Winding 1: +20° phase displacement (2.2 kV LL)</div>
                <div>&bull; Secondary Winding 2: 0° phase displacement (2.2 kV LL)</div>
                <div>&bull; Secondary Winding 3: -20° phase displacement (2.2 kV LL)</div>
                <div style="margin-top: 8px;"><strong>Harmonic Cancellation Equation:</strong></div>
                <div>Harmonics of order h = 18k &plusmn; 1 (k = 1, 2, ...). Orders 5th, 7th, 11th, and 13th are naturally cancelled by vector cancellation in the primary delta winding!</div>
                <div style="color: #10b981; margin-top: 4px;">Measured Line THD-I: 2.38% &lt; 5.0% IEEE 519 Limit &bull; Measured THD-V: 1.76% &lt; 3.0%</div>
              </div>
              <p>
                The rectified output supplies a common intermediate <strong>DC-Link capacitor bank</strong> operating at <strong>8,910 VDC nominal</strong>:
              </p>
              <div style="background: #070c17; padding: 8px 12px; border-radius: 4px; font-family: var(--font-mono); font-size: 12px; margin-bottom: 10px;">
                V_DC = (3 &times; &radic;6 / &pi;) &times; V_LL &times; cos(&alpha;) &approx; 1.35 &times; 6,600 V &approx; 8,910 VDC
              </div>
            </div>

            <!-- SECTION 3: VRM Grinding Kinetics & Bed Stability -->
            <div class="dossier-section" style="margin-bottom: 24px;">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                3. Vertical Roller Mill Kinetics & Material Bed Stability
              </h4>
              <p>
                In a VRM, raw materials (limestone, clay, silica, iron ore) are pulverized between a rotating horizontal table and 4 conical grinding rollers suspended on hydraulic rocker arms. The grinding force is pneumatically-hydraulically cushioned:
              </p>
              <ul style="margin-left: 20px; margin-top: 8px; margin-bottom: 8px;">
                <li><strong>Hydraulic Grinding Pressure:</strong> Regulated between <strong>65 and 110 Bar</strong> (nominal 88.5 Bar) using nitrogen bladders in hydraulic accumulators to absorb dynamic shock.</li>
                <li><strong>Material Bed Depth:</strong> Critical parameter maintained between <strong>45 and 85 mm</strong>. If bed depth drops &lt; 30 mm (Dry Feed starvation), the rollers lose their dampening material cushion and directly impact the rotating table liners, causing violent <strong>Mill Rumble</strong> (&gt;12 mm/s RMS).</li>
                <li><strong>Dynamic Cage Classifier:</strong> High-efficiency cage rotor (60–180 RPM) dynamically controls raw meal fineness (target: 12% residue on 90 &mu;m sieve).</li>
              </ul>
            </div>

            <!-- SECTION 4: Pulse-Jet Baghouse & Thermal Interlock -->
            <div class="dossier-section" style="margin-bottom: 24px;">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                4. Pulse-Jet Baghouse Filtration & Safety Interlocks
              </h4>
              <p>
                The dust-laden mill exhaust gas is filtered in an 8-compartment pulse-jet baghouse equipped with PTFE-membrane needle felt bags:
              </p>
              <ul style="margin-left: 20px; margin-top: 8px; margin-bottom: 8px;">
                <li><strong>Air-to-Cloth Ratio:</strong> 1.05 m&sup3;/min per m&sup2; of fabric area.</li>
                <li><strong>Differential Pressure (&Delta;P):</strong> Monitored across tube sheets (Nominal: 12.4 mbar; Warning: &gt;16 mbar; Clogging Trip: &gt;22 mbar).</li>
                <li><strong>Thermal Safety Interlock:</strong> Synthetic filter bags undergo irreversible thermal degradation if exposed to flue gas &gt; 210°C. An automated PID safety loop modulates the <strong>Fresh Air Tempering Damper</strong> to inject ambient cooling air immediately if inlet gas temp rises &gt; 210°C.</li>
              </ul>
            </div>

            <!-- SECTION 5: Numerical Protection Relay Scheme -->
            <div class="dossier-section" style="margin-bottom: 24px;">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                5. Protection Relay Coordination Matrix (ANSI Standards)
              </h4>
              <table style="width: 100%; border-collapse: collapse; font-family: var(--font-mono); font-size: 11px; margin-top: 10px;">
                <thead>
                  <tr style="background: #1e293b; color: var(--cyan-primary); text-align: left;">
                    <th style="padding: 8px; border: 1px solid var(--border-card);">ANSI CODE</th>
                    <th style="padding: 8px; border: 1px solid var(--border-card);">FUNCTION</th>
                    <th style="padding: 8px; border: 1px solid var(--border-card);">PICKUP SETTING</th>
                    <th style="padding: 8px; border: 1px solid var(--border-card);">CLEARING TIME</th>
                    <th style="padding: 8px; border: 1px solid var(--border-card);">PROTECTIVE ACTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="padding: 6px; border: 1px solid var(--border-card); color: #f59e0b;">ANSI 51</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">AC Inverse Time Overcurrent</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">I &gt; 520 A (1.15 &times; In)</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">IEC Normal Inverse (TMS 0.15)</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">Trip VCB 52-1</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px; border: 1px solid var(--border-card); color: #ef4444;">ANSI 50</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">Instantaneous Short Circuit</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">I &gt; 2,800 A (6.0 &times; In)</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">&lt; 35 ms</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">Instant Trip VCB 52-1 & Lockout</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px; border: 1px solid var(--border-card); color: #ef4444;">ANSI 59</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">DC Bus Overvoltage</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">V_DC &gt; 9,450 VDC</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">&lt; 15 ms</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">Block Inverter PWM + Trip VCB</td>
                  </tr>
                  <tr>
                    <td style="padding: 6px; border: 1px solid var(--border-card); color: #38bdf8;">ANSI 87T</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">XFMR Biased Differential</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">Idiff &gt; 0.2 &times; In (Slope 30%)</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">&lt; 25 ms</td>
                    <td style="padding: 6px; border: 1px solid var(--border-card);">High-Speed Trip MV Breaker</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- SECTION 6: Sequential Interlock Chain -->
            <div class="dossier-section">
              <h4 style="color: var(--cyan-primary); font-size: 15px; font-weight: 700; border-bottom: 1px solid var(--border-subtle); padding-bottom: 6px; margin-bottom: 12px;">
                6. Automatic Sequential Startup & Permissive Logic
              </h4>
              <p>
                The supervisory automation controller strictly enforces reverse startup interlocks to prevent material choke and thermal stress:
              </p>
              <div style="background: #070c17; border: 1px solid var(--border-card); padding: 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 11px; margin-top: 8px;">
                1. <strong>ID Fan Start</strong> (Inlet Damper closed &rarr; 6.6 kV VCB closed &rarr; Damper modulates to maintain draft -2.5 mbar) &rarr;<br>
                2. <strong>Baghouse Pulse-Jet Active</strong> (Air header pressure &gt; 5.5 Bar) &rarr;<br>
                3. <strong>Hot Gas Generator / Kiln Exhaust Gas Permissive</strong> (Inlet Temp &gt; 120°C and &lt; 200°C) &rarr;<br>
                4. <strong>Dynamic Classifier Spinning</strong> (115 RPM) &rarr;<br>
                5. <strong>VRM Main Drive VFD Start</strong> (VCB 52-1 closed, DC bus nominal 8910V, acceleration ramp 45s) &rarr;<br>
                6. <strong>Hydraulic Roller Pressure Engaged</strong> (88.5 Bar) &rarr;<br>
                7. <strong>Raw Feeders Online</strong> (Cascaded feed rate 0 &rarr; 195 t/h).
              </div>
            </div>

          </div>

          <!-- Modal Footer -->
          <div class="modal-footer" style="padding: 14px 24px; background: #0f172a; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <div style="font-size: 11px; color: var(--text-muted); font-family: var(--font-mono);">
              DOCUMENT ID: VRM-NX-ELEC-4200KW-REV4 &bull; TAREQ ABUASHI
            </div>
            <button class="btn btn-primary" id="btn-modal-close-footer" style="padding: 8px 18px;">
              Close Dossier
            </button>
          </div>

        </div>
      </div>
    `),this.modalEl=document.getElementById("engineering-dossier-modal")}bindEvents(){const t=document.getElementById("btn-modal-close"),i=document.getElementById("btn-modal-close-footer"),e=document.getElementById("btn-modal-print");t?.addEventListener("click",()=>this.hide()),i?.addEventListener("click",()=>this.hide()),e?.addEventListener("click",()=>{window.print()}),this.modalEl?.addEventListener("click",s=>{s.target===this.modalEl&&this.hide()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&this.modalEl?.style.display!=="none"&&this.hide()})}show(){this.modalEl&&(this.modalEl.style.display="block")}hide(){this.modalEl&&(this.modalEl.style.display="none")}}class S{vrmGraphic;baghouseGraphic;vfdSldDiagram;vibeCanvas;dossierModal;constructor(){this.initComponents(),this.bindEvents(),this.subscribeTelemetry()}initComponents(){this.vrmGraphic=new C("vrm-graphic-container"),this.baghouseGraphic=new T("baghouse-graphic-container"),this.vfdSldDiagram=new A("vfd-sld-container"),this.vibeCanvas=new R("vibe-canvas-container"),this.dossierModal=new M}bindEvents(){const t=document.getElementById("btn-audio-toggle"),i=document.getElementById("audio-icon"),e=document.getElementById("audio-text");t?.addEventListener("click",()=>{u.playClick();const h=u.toggleMute();i&&e&&(h?(i.className="fa-solid fa-volume-xmark text-muted",e.textContent="Audio: Muted"):(i.className="fa-solid fa-volume-high text-cyan",e.textContent="Audio: Active"))}),document.getElementById("btn-screen-share")?.addEventListener("click",async()=>{u.playClick();try{navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia?(await navigator.mediaDevices.getDisplayMedia({video:!0}),x.logEvent("HMI Terminal","INFO","SCADA Display Broadcast stream initiated by Lead Engineer Tareq Abuashi.")):alert("Screen sharing is active or not supported by this browser sandbox.")}catch(h){console.warn("Screen share cancelled or unpermitted:",h)}}),document.getElementById("btn-open-dossier")?.addEventListener("click",()=>{u.playClick(),this.dossierModal.show()});const r=document.getElementById("btn-quick-reset"),c=document.getElementById("btn-fault-reset"),f=()=>{u.playClick(),x.resetSystem()};r?.addEventListener("click",f),c?.addEventListener("click",f),document.getElementById("btn-fault-rumble")?.addEventListener("click",()=>{u.playClick(),x.triggerMillRumble()}),document.getElementById("btn-fault-baghouse")?.addEventListener("click",()=>{u.playClick(),x.triggerBaghouseClogging()}),document.getElementById("btn-fault-vfd")?.addEventListener("click",()=>{u.playClick(),x.triggerVfdOvervoltage()}),document.getElementById("btn-fault-estop")?.addEventListener("click",()=>{u.playClick(),x.triggerEmergencyTrip()}),document.getElementById("btn-manual-pulse")?.addEventListener("click",()=>{x.triggerManualPulseBurst()});const n=document.getElementById("slider-feed-rate"),o=document.getElementById("feed-rate-slider-val");n?.addEventListener("input",h=>{const l=parseFloat(h.target.value);o&&(o.textContent=`${l.toFixed(1)} t/h`),x.setFeedRate(l)});const m=document.getElementById("slider-classifier"),p=document.getElementById("classifier-slider-val");m?.addEventListener("input",h=>{const l=parseInt(h.target.value,10);p&&(p.textContent=`${l} RPM`),x.setClassifierSpeed(l)})}subscribeTelemetry(){x.subscribe(t=>{this.updateHeaderAndAnnunciator(t),this.vrmGraphic.update(t.vrm),this.baghouseGraphic.update(t.baghouse),this.vfdSldDiagram.update(t.vfd),this.vibeCanvas.update(t.vrm,t.ai),this.updateRtdMatrix(t.vrm),this.updateSoeLog(t.events)})}updateHeaderAndAnnunciator(t){const i=document.getElementById("header-grid-freq");i&&(i.textContent=`${t.vfd.gridFrequency.toFixed(2)} Hz`);const e=document.getElementById("header-bus-volts");e&&(e.textContent=`${t.vfd.mvBusVoltage.toLocaleString()} V`);const s=document.getElementById("header-clock");s&&(s.textContent=t.systemClock);const a=document.getElementById("alarm-badge-status"),r=document.getElementById("alarm-banner-message"),c=document.getElementById("soe-timestamp");t.events.length>0&&c&&(c.textContent=t.events[0].timestamp),t.faults.emergencyTrip?(a&&(a.className="alarm-badge tripped",a.textContent="MASTER TRIP"),r&&(r.textContent="EMERGENCY TRIP ACTIVATED - ALL 6.6 kV MV BREAKERS OPENED & DRIVES HALTED!")):t.faults.vfdOvervoltage?(a&&(a.className="alarm-badge tripped",a.textContent="ANSI 59 TRIP"),r&&(r.textContent="TRIP: 18-PULSE VFD DC-BUS OVERVOLTAGE (>9,450 VDC) - VCB 52-1 OPENED!")):t.faults.millRumble?(a&&(a.className="alarm-badge warning",a.textContent="RUMBLE ALARM"),r&&(r.textContent="ALARM: SEVERE MILL RUMBLE & ROLLER BOUNCE DETECTED - BED DEPTH COLLAPSED!")):t.faults.baghouseClogging?(a&&(a.className="alarm-badge warning",a.textContent="BAG FILTER HIGH ΔP"),r&&(r.textContent="ALARM: BAGHOUSE HIGH DIFFERENTIAL PRESSURE (>20 mbar) - RAPID PULSING ACTIVE!")):(a&&(a.className="alarm-badge healthy",a.textContent="NORMAL"),r&&(r.textContent="SYSTEM HEALTHY - VRM 4-ROLLER MILL & 18-PULSE VFD IN NOMINAL REGULATION"))}updateRtdMatrix(t){const i=document.getElementById("temp-gbx-sump");i&&(i.textContent=`${t.gearboxSumpTemp.toFixed(1)} °C`);const e=document.getElementById("temp-gbx-thrust");e&&(e.textContent=`${t.gearboxThrustTemp.toFixed(1)} °C`),t.rollerTemps.forEach((s,a)=>{const r=document.getElementById(`temp-roller-${a+1}`);r&&(r.textContent=`${s.toFixed(1)} °C`)})}updateSoeLog(t){const i=document.getElementById("soe-log-box"),e=document.getElementById("soe-event-count");e&&(e.textContent=`${t.length} EVENTS LOGGED`),i&&(i.innerHTML=t.slice(0,15).map(s=>{let a="text-muted";return s.type==="ALARM"||s.type==="TRIP"?a="text-red":s.type==="WARNING"?a="text-amber":s.type==="RESET"?a="text-green":s.type==="INFO"&&(a="text-cyan"),`
          <div style="line-height: 1.4;">
            <span class="${a}">[${s.timestamp}]</span>
            <span style="color: #64748b;">[${s.source}]</span>
            <span style="color: #cbd5e1;">${s.message}</span>
          </div>
        `}).join(""))}}window.addEventListener("DOMContentLoaded",()=>{new S});
