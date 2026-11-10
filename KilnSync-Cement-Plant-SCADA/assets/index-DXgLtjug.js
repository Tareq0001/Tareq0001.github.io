(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();class le{ctx=null;isMuted=!1;alarmOscillator=null;alarmGain=null;alarmTimer=null;isAlarmRunning=!1;constructor(){}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.stopAlarm(),this.isMuted}getMuted(){return this.isMuted}startTripAlarm(){if(this.isMuted||this.isAlarmRunning||(this.initContext(),!this.ctx))return;this.isAlarmRunning=!0;let e=0;const s=()=>{if(!this.isAlarmRunning||this.isMuted||!this.ctx)return;const t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sawtooth";const r=this.ctx.currentTime;t.frequency.setValueAtTime(e%2===0?1050:850,r),t.frequency.exponentialRampToValueAtTime(e%2===0?700:550,r+.35),i.gain.setValueAtTime(.12,r),i.gain.exponentialRampToValueAtTime(.001,r+.38);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2200,r),t.connect(o),o.connect(i),i.connect(this.ctx.destination),t.start(r),t.stop(r+.4),e++,this.alarmTimer=window.setTimeout(s,420)};s()}stopAlarm(){this.isAlarmRunning=!1,this.alarmTimer!==null&&(clearTimeout(this.alarmTimer),this.alarmTimer=null)}playBreakerOperation(e){if(this.isMuted||(this.initContext(),!this.ctx))return;const s=this.ctx.currentTime,t=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(e?95:120,s),t.frequency.exponentialRampToValueAtTime(28,s+.15),i.gain.setValueAtTime(.35,s),i.gain.exponentialRampToValueAtTime(.001,s+.18),t.connect(i),i.connect(this.ctx.destination),t.start(s),t.stop(s+.2);const r=this.ctx.sampleRate*.04,o=this.ctx.createBuffer(1,r,this.ctx.sampleRate),n=o.getChannelData(0);for(let d=0;d<r;d++)n[d]=(Math.random()*2-1)*Math.exp(-d/(r*.2));const c=this.ctx.createBufferSource();c.buffer=o;const m=this.ctx.createGain();m.gain.setValueAtTime(.2,s),m.gain.exponentialRampToValueAtTime(.001,s+.05);const l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(1400,s),l.Q.setValueAtTime(3,s),c.connect(l),l.connect(m),m.connect(this.ctx.destination),c.start(s+.01)}playWarningChime(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,s=this.ctx.createOscillator(),t=this.ctx.createGain();s.type="sine",s.frequency.setValueAtTime(880,e),s.frequency.setValueAtTime(1174,e+.12),t.gain.setValueAtTime(.08,e),t.gain.exponentialRampToValueAtTime(.001,e+.35),s.connect(t),t.connect(this.ctx.destination),s.start(e),s.stop(e+.36)}playClick(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,s=this.ctx.createOscillator(),t=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(600,e),s.frequency.exponentialRampToValueAtTime(120,e+.03),t.gain.setValueAtTime(.06,e),t.gain.exponentialRampToValueAtTime(.001,e+.035),s.connect(t),t.connect(this.ctx.destination),s.start(e),s.stop(e+.04)}}const f=new le;class ce{telemetry;intervalId=null;listeners=[];overloadTimerSec=0;tripCooldownSec=0;constructor(){this.telemetry=this.getInitialTelemetry()}getInitialTelemetry(){return{timestamp:new Date().toLocaleTimeString(),kilnSpeedRpm:3.82,rawMillSpeedRpm:14.8,calcinerTempC:885,burningZoneTempC:1445,hoodPressureMbar:-.42,motorState:"RUNNING",voltageL1L2:6608,voltageL2L3:6598,voltageL3L1:6604,busFrequencyHz:50.01,motorCurrentA:242.4,activePowerMW:2.51,reactivePowerMVAR:1.15,powerFactor:.91,windings:{u1:94.2,v1:95.8,w1:93.6,u2:95.1,v2:96.4,w2:94.7},bearings:{deTemp:68.2,ndeTemp:62.5,deVibeRms:1.62,ndeVibeRms:1.38},vcbState:"CLOSED",springCharged:!0,tripBusEnergized:!1,relay51Overcurrent:{code:"51",ansiName:"Phase Time Overcurrent (IDMT)",status:"NORMAL",description:"IEC Standard Inverse Curve (TMS = 0.25, Is = 280A)",measuredVal:"242.4 A (0.87 In)",threshold:"Pickup: 280.0 A",tripCounter:0},relay49Thermal:{code:"49",ansiName:"Machine Thermal Overload",status:"NORMAL",description:"Bimetallic/I²t Stator Heating Model",measuredVal:"58.4 %",threshold:"Alarm 85% / Trip 100%",tripCounter:0},relay50NEarthFault:{code:"50N",ansiName:"Instantaneous Earth Fault",status:"NORMAL",description:"Core Balance CT (50/1A), Definite Time 40ms",measuredVal:"1.2 A",threshold:"Pickup: 15.0 A",tripCounter:0},thermalCapacityPct:58.4,conveyors:{cv101:{id:"CV-101",name:"Primary Crusher Discharge Conveyor",role:"Extracts crushed limestone (0-80mm) from primary jaw crusher",status:"RUNNING",beltSwayFault:!1,zeroSpeedHealthy:!0,pullCordTripped:!1,motorCurrentA:38.6,ratedCurrentA:55,beltSpeedMps:2.2,ratedSpeedMps:2.2,interlockPermissive:!0},cv102:{id:"CV-102",name:"Intermediate Overland Transfer Conveyor",role:"Transports raw feed across 280m overland gallery",status:"RUNNING",beltSwayFault:!1,zeroSpeedHealthy:!0,pullCordTripped:!1,motorCurrentA:64.2,ratedCurrentA:85,beltSpeedMps:2.4,ratedSpeedMps:2.4,interlockPermissive:!0},cv103:{id:"CV-103",name:"Raw Mill Feed & Clinker Surge Conveyor",role:"Feeds raw proportioning silo & ball mill inlet chute",status:"RUNNING",beltSwayFault:!1,zeroSpeedHealthy:!0,pullCordTripped:!1,motorCurrentA:78.5,ratedCurrentA:110,beltSpeedMps:2.5,ratedSpeedMps:2.5,interlockPermissive:!0}},sequentialCascadeLocked:!1,predictive:{isoZone:"A/B (Good: <2.8 mm/s)",bpfoConfidence:7.2,rulHours:8420,kurtosis:3.08,crestFactor:2.85,fftPeaks:[{freq:16.5,amp:.85,label:"1X Running Speed"},{freq:33,amp:.32,label:"2X Harmonic"},{freq:104.2,amp:.12,label:"BPFO Outer Race"},{freq:148.6,amp:.08,label:"BPFI Inner Race"}],diagnosis:"Optimum hydrodynamic lubrication film. Mechanical balance within ISO G2.5 standard.",recommendation:"Nominal condition. Routine vibration spectral sweep in 30 days."},activeFault:"NONE",faultMessage:"SYSTEM HEALTHY - ALL PROCESS LOOPS BALANCED",alarmActive:!1,isMuted:!1}}start(){this.intervalId===null&&(this.intervalId=window.setInterval(()=>{this.tick()},1e3))}stop(){this.intervalId!==null&&(clearInterval(this.intervalId),this.intervalId=null)}subscribe(e){this.listeners.push(e),e(this.telemetry)}unsubscribe(e){this.listeners=this.listeners.filter(s=>s!==e)}notify(){for(const e of this.listeners)e(this.telemetry)}getTelemetry(){return this.telemetry}gaussianNoise(e,s){const t=Math.max(1e-6,Math.random()),i=Math.random(),r=Math.sqrt(-2*Math.log(t))*Math.cos(2*Math.PI*i);return e+r*s}tick(){switch(this.telemetry.timestamp=new Date().toLocaleTimeString(),this.telemetry.isMuted=f.getMuted(),this.telemetry.voltageL1L2=Math.round(this.gaussianNoise(6600,10)),this.telemetry.voltageL2L3=Math.round(this.gaussianNoise(6602,10)),this.telemetry.voltageL3L1=Math.round(this.gaussianNoise(6598,10)),this.telemetry.busFrequencyHz=parseFloat(this.gaussianNoise(50,.02).toFixed(2)),this.telemetry.activeFault){case"MOTOR_OVERLOAD":this.processMotorOverload();break;case"BELT_SWAY_CV103":this.processBeltSway();break;case"EARTH_FAULT_50N":this.processEarthFault();break;case"PULL_CORD_CV102":this.processPullCord();break;case"NONE":default:this.processHealthyState();break}this.notify()}processHealthyState(){if(this.telemetry.vcbState==="CLOSED"&&this.telemetry.motorState==="RUNNING"){this.telemetry.motorCurrentA=parseFloat(this.gaussianNoise(242,2.5).toFixed(1)),this.telemetry.powerFactor=parseFloat(this.gaussianNoise(.91,.005).toFixed(2));const e=(this.telemetry.voltageL1L2+this.telemetry.voltageL2L3+this.telemetry.voltageL3L1)/3,s=Math.sqrt(3)*e*this.telemetry.motorCurrentA*this.telemetry.powerFactor/1e6;this.telemetry.activePowerMW=parseFloat(s.toFixed(2));const t=s*Math.tan(Math.acos(this.telemetry.powerFactor));this.telemetry.reactivePowerMVAR=parseFloat(t.toFixed(2)),this.telemetry.kilnSpeedRpm=parseFloat(this.gaussianNoise(3.82,.03).toFixed(2)),this.telemetry.calcinerTempC=Math.round(this.gaussianNoise(885,3)),this.telemetry.burningZoneTempC=Math.round(this.gaussianNoise(1445,6)),this.telemetry.hoodPressureMbar=parseFloat(this.gaussianNoise(-.42,.04).toFixed(2)),this.telemetry.windings.u1=parseFloat(this.gaussianNoise(94.2,.4).toFixed(1)),this.telemetry.windings.v1=parseFloat(this.gaussianNoise(95.8,.4).toFixed(1)),this.telemetry.windings.w1=parseFloat(this.gaussianNoise(93.6,.4).toFixed(1)),this.telemetry.windings.u2=parseFloat(this.gaussianNoise(95.1,.4).toFixed(1)),this.telemetry.windings.v2=parseFloat(this.gaussianNoise(96.4,.4).toFixed(1)),this.telemetry.windings.w2=parseFloat(this.gaussianNoise(94.7,.4).toFixed(1)),this.telemetry.bearings.deTemp=parseFloat(this.gaussianNoise(68.2,.3).toFixed(1)),this.telemetry.bearings.ndeTemp=parseFloat(this.gaussianNoise(62.5,.3).toFixed(1)),this.telemetry.bearings.deVibeRms=parseFloat(this.gaussianNoise(1.65,.08).toFixed(2)),this.telemetry.bearings.ndeVibeRms=parseFloat(this.gaussianNoise(1.38,.06).toFixed(2)),this.telemetry.thermalCapacityPct=parseFloat(this.gaussianNoise(58.4,.5).toFixed(1)),this.telemetry.relay49Thermal.measuredVal=`${this.telemetry.thermalCapacityPct} %`,this.telemetry.relay51Overcurrent.status="NORMAL",this.telemetry.relay51Overcurrent.measuredVal=`${this.telemetry.motorCurrentA} A (0.86 In)`,this.telemetry.relay50NEarthFault.status="NORMAL",this.telemetry.relay50NEarthFault.measuredVal="1.2 A",this.telemetry.predictive.isoZone="A/B (Good: <2.8 mm/s)",this.telemetry.predictive.bpfoConfidence=parseFloat(this.gaussianNoise(6.8,.5).toFixed(1)),this.telemetry.predictive.kurtosis=parseFloat(this.gaussianNoise(3.08,.05).toFixed(2)),this.telemetry.predictive.crestFactor=parseFloat(this.gaussianNoise(2.85,.05).toFixed(2)),this.telemetry.predictive.rulHours=8420,this.telemetry.predictive.diagnosis="Optimum hydrodynamic lubrication film. ISO G2.5 mechanical balance compliant.",this.telemetry.predictive.recommendation="Continuous operation approved. Spectral baseline stable."}else this.telemetry.motorCurrentA=0,this.telemetry.activePowerMW=0,this.telemetry.reactivePowerMVAR=0,this.telemetry.kilnSpeedRpm=Math.max(0,parseFloat((this.telemetry.kilnSpeedRpm*.75).toFixed(2))),this.telemetry.bearings.deVibeRms=.12,this.telemetry.bearings.ndeVibeRms=.09}processMotorOverload(){this.overloadTimerSec++,this.telemetry.motorCurrentA=parseFloat(this.gaussianNoise(386,3).toFixed(1)),this.telemetry.activePowerMW=3.82,this.telemetry.powerFactor=.86,this.telemetry.relay51Overcurrent.status="PICKUP",this.telemetry.relay51Overcurrent.measuredVal=`${this.telemetry.motorCurrentA} A (1.38 In - TIMING)`,this.telemetry.thermalCapacityPct=Math.min(100,parseFloat((this.telemetry.thermalCapacityPct+8.5).toFixed(1))),this.telemetry.relay49Thermal.measuredVal=`${this.telemetry.thermalCapacityPct} %`,this.telemetry.thermalCapacityPct>85&&this.telemetry.relay49Thermal.status!=="TRIPPED"&&(this.telemetry.relay49Thermal.status="PICKUP"),this.telemetry.windings.u1+=4.5,this.telemetry.windings.v1+=4.8,this.telemetry.windings.w1+=4.6,this.telemetry.windings.u2+=4.4,this.telemetry.windings.v2+=4.9,this.telemetry.windings.w2+=4.5,this.telemetry.bearings.deVibeRms=3.65,this.telemetry.bearings.ndeVibeRms=3.12,this.telemetry.predictive.isoZone="C (Alert: 2.8-4.5 mm/s)",(this.overloadTimerSec>=4||this.telemetry.thermalCapacityPct>=100)&&(this.telemetry.relay51Overcurrent.status="TRIPPED",this.telemetry.relay51Overcurrent.tripCounter++,this.telemetry.relay49Thermal.status="TRIPPED",this.telemetry.relay49Thermal.tripCounter++,this.executeBreakerTrip("ANSI 51/49 OVERLOAD TRIP: Stator Current 386A (1.38x In) exceeded IDMT curve"))}processBeltSway(){this.telemetry.conveyors.cv103.beltSwayFault=!0,this.telemetry.conveyors.cv103.status="TRIPPED",this.telemetry.conveyors.cv103.motorCurrentA=0,this.telemetry.conveyors.cv103.beltSpeedMps=0,this.telemetry.conveyors.cv102.status="TRIPPED",this.telemetry.conveyors.cv102.interlockPermissive=!1,this.telemetry.conveyors.cv102.motorCurrentA=0,this.telemetry.conveyors.cv102.beltSpeedMps=0,this.telemetry.conveyors.cv101.status="TRIPPED",this.telemetry.conveyors.cv101.interlockPermissive=!1,this.telemetry.conveyors.cv101.motorCurrentA=0,this.telemetry.conveyors.cv101.beltSpeedMps=0,this.telemetry.sequentialCascadeLocked=!0,this.telemetry.alarmActive=!0,this.telemetry.faultMessage="CASCADE INTERLOCK TRIP: CV-103 Belt Sway Fault -> Cascaded Emergency Stop of CV-102 & CV-101 (Spill Prevention Active)",f.startTripAlarm()}processEarthFault(){this.telemetry.relay50NEarthFault.status="TRIPPED",this.telemetry.relay50NEarthFault.measuredVal="42.8 A (Zero Sequence Core CT)",this.telemetry.relay50NEarthFault.tripCounter++,this.executeBreakerTrip("ANSI 50N INSTANTANEOUS EARTH FAULT TRIP: Residual current 42.8A cleared in 40ms")}processPullCord(){this.telemetry.conveyors.cv102.pullCordTripped=!0,this.telemetry.conveyors.cv102.status="TRIPPED",this.telemetry.conveyors.cv102.motorCurrentA=0,this.telemetry.conveyors.cv102.beltSpeedMps=0,this.telemetry.conveyors.cv101.status="TRIPPED",this.telemetry.conveyors.cv101.interlockPermissive=!1,this.telemetry.conveyors.cv101.motorCurrentA=0,this.telemetry.conveyors.cv101.beltSpeedMps=0,this.telemetry.sequentialCascadeLocked=!0,this.telemetry.alarmActive=!0,this.telemetry.faultMessage="SAFETY INTERLOCK TRIP: CV-102 Emergency Pull-Cord Activated -> Immediate Halt of Feeder CV-101",f.startTripAlarm()}executeBreakerTrip(e){this.telemetry.vcbState="TRIPPED",this.telemetry.motorState="TRIPPED",this.telemetry.tripBusEnergized=!0,this.telemetry.motorCurrentA=0,this.telemetry.activePowerMW=0,this.telemetry.reactivePowerMVAR=0,this.telemetry.alarmActive=!0,this.telemetry.faultMessage=e,this.telemetry.predictive.isoZone="D (Trip: >4.5 mm/s)",this.telemetry.predictive.rulHours=Math.max(120,this.telemetry.predictive.rulHours-180),this.telemetry.predictive.bpfoConfidence=89.4,this.telemetry.predictive.diagnosis="CRITICAL TRIP EXECUTED. Excessive electrical/mechanical shock logged in event SOE recorder.",this.telemetry.predictive.recommendation="Perform insulation resistance (Megger 5kV) and inspect stator end-windings before reclosing.",f.playBreakerOperation(!1),f.startTripAlarm()}injectFault(e){switch(this.telemetry.activeFault=e,this.overloadTimerSec=0,f.playClick(),e){case"MOTOR_OVERLOAD":this.telemetry.faultMessage="FAULT INJECTED: 3-Phase Mechanical Stator Overload (Simulating ball mill charge jamming)",f.playWarningChime();break;case"BELT_SWAY_CV103":this.processBeltSway();break;case"EARTH_FAULT_50N":this.processEarthFault();break;case"PULL_CORD_CV102":this.processPullCord();break;case"NONE":this.resetSystem();break}this.notify()}resetSystem(){f.playClick(),f.stopAlarm(),this.telemetry.activeFault="NONE",this.telemetry.alarmActive=!1,this.telemetry.faultMessage="SYSTEM RE-INITIALIZING: Sequential Start Permissive Sequence Engaged",this.overloadTimerSec=0,this.telemetry.relay51Overcurrent.status="NORMAL",this.telemetry.relay49Thermal.status="NORMAL",this.telemetry.relay50NEarthFault.status="NORMAL",this.telemetry.tripBusEnergized=!1,this.telemetry.thermalCapacityPct=52,this.telemetry.conveyors.cv103.beltSwayFault=!1,this.telemetry.conveyors.cv102.pullCordTripped=!1,this.telemetry.conveyors.cv101.beltSwayFault=!1,this.telemetry.sequentialCascadeLocked=!1,this.telemetry.conveyors.cv103.status="RUNNING",this.telemetry.conveyors.cv103.interlockPermissive=!0,this.telemetry.conveyors.cv103.motorCurrentA=78.5,this.telemetry.conveyors.cv103.beltSpeedMps=2.5,this.telemetry.conveyors.cv102.status="RUNNING",this.telemetry.conveyors.cv102.interlockPermissive=!0,this.telemetry.conveyors.cv102.motorCurrentA=64.2,this.telemetry.conveyors.cv102.beltSpeedMps=2.4,this.telemetry.conveyors.cv101.status="RUNNING",this.telemetry.conveyors.cv101.interlockPermissive=!0,this.telemetry.conveyors.cv101.motorCurrentA=38.6,this.telemetry.conveyors.cv101.beltSpeedMps=2.2,f.playBreakerOperation(!0),this.telemetry.vcbState="CLOSED",this.telemetry.motorState="RUNNING",this.telemetry.kilnSpeedRpm=3.82,this.telemetry.faultMessage="SYSTEM HEALTHY - ALL PROCESS LOOPS BALANCED & INTERLOCKS CLEAR",this.processHealthyState(),this.notify()}toggleMute(){const e=f.toggleMute();return this.telemetry.isMuted=e,this.notify(),e}}const v=new ce;class de{container;constructor(e){this.container=e,this.render()}render(){this.container.innerHTML=`
      <div class="mimic-wrapper">
        <div class="mimic-header">
          <div class="mimic-title-group">
            <span class="badge-tag">PROCESS MIMIC</span>
            <h4 class="mimic-title">Pyroprocessing Rotary Kiln & Ball Mill Drive System</h4>
          </div>
          <div class="mimic-status-bar">
            <span class="status-pill status-running" id="kiln-status-pill">
              <span class="led-dot led-green"></span>
              <span id="kiln-status-text">KILN DRIVE: RUNNING</span>
            </span>
            <span class="telemetry-chip">
              <span class="chip-label">SPEED:</span>
              <span class="chip-val font-mono" id="kiln-speed-display">3.82 RPM</span>
            </span>
            <span class="telemetry-chip">
              <span class="chip-label">BURNING ZONE:</span>
              <span class="chip-val font-mono text-amber" id="kiln-temp-display">1445 °C</span>
            </span>
          </div>
        </div>

        <div class="svg-viewport">
          <svg viewBox="0 0 1000 420" class="kiln-svg" id="kiln-svg-element" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <!-- Metallic Gradients -->
              <linearGradient id="kilnShellGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#334155" />
                <stop offset="30%" stop-color="#64748b" />
                <stop offset="60%" stop-color="#475569" />
                <stop offset="100%" stop-color="#1e293b" />
              </linearGradient>

              <linearGradient id="tyreRingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="50%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>

              <linearGradient id="flameGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stop-color="#ffffff" stop-opacity="1" />
                <stop offset="25%" stop-color="#fef08a" stop-opacity="0.95" />
                <stop offset="55%" stop-color="#f97316" stop-opacity="0.9" />
                <stop offset="85%" stop-color="#dc2626" stop-opacity="0.8" />
                <stop offset="100%" stop-color="#7f1d1d" stop-opacity="0" />
              </linearGradient>

              <linearGradient id="calcinerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1e293b" />
                <stop offset="50%" stop-color="#334155" />
                <stop offset="100%" stop-color="#0f172a" />
              </linearGradient>

              <linearGradient id="motorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0284c7" />
                <stop offset="50%" stop-color="#0369a1" />
                <stop offset="100%" stop-color="#075985" />
              </linearGradient>

              <filter id="flameGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <!-- Background Grid Lines -->
            <g class="grid-lines" opacity="0.15">
              <line x1="0" y1="70" x2="1000" y2="70" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="0" y1="140" x2="1000" y2="140" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="0" y1="210" x2="1000" y2="210" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="0" y1="280" x2="1000" y2="280" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="0" y1="350" x2="1000" y2="350" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="200" y1="0" x2="200" y2="420" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="400" y1="0" x2="400" y2="420" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="600" y1="0" x2="600" y2="420" stroke="#38bdf8" stroke-dasharray="4,4" />
              <line x1="800" y1="0" x2="800" y2="420" stroke="#38bdf8" stroke-dasharray="4,4" />
            </g>

            <!-- Preheater Tower & Cyclones (Left Side) -->
            <g id="preheater-tower" transform="translate(40, 20)">
              <!-- Tower Steel Structure -->
              <rect x="0" y="0" width="110" height="290" fill="#0f172a" stroke="#334155" stroke-width="2" rx="4" />
              <line x1="0" y1="60" x2="110" y2="60" stroke="#475569" stroke-width="1.5" />
              <line x1="0" y1="120" x2="110" y2="120" stroke="#475569" stroke-width="1.5" />
              <line x1="0" y1="180" x2="110" y2="180" stroke="#475569" stroke-width="1.5" />
              <line x1="0" y1="240" x2="110" y2="240" stroke="#475569" stroke-width="1.5" />
              
              <!-- Cross bracings -->
              <line x1="0" y1="0" x2="110" y2="60" stroke="#334155" stroke-width="1" />
              <line x1="110" y1="0" x2="0" y2="60" stroke="#334155" stroke-width="1" />
              <line x1="0" y1="60" x2="110" y2="120" stroke="#334155" stroke-width="1" />
              <line x1="110" y1="60" x2="0" y2="120" stroke="#334155" stroke-width="1" />

              <!-- Cyclone Stage 1 -->
              <polygon points="25,25 85,25 70,55 40,55" fill="url(#calcinerGrad)" stroke="#38bdf8" stroke-width="1.5" />
              <text x="55" y="42" fill="#94a3b8" font-size="9" text-anchor="middle" font-family="monospace">CYC-01</text>

              <!-- Cyclone Stage 2 & 3 -->
              <polygon points="25,85 85,85 70,115 40,115" fill="url(#calcinerGrad)" stroke="#38bdf8" stroke-width="1.5" />
              <polygon points="25,145 85,145 70,175 40,175" fill="url(#calcinerGrad)" stroke="#38bdf8" stroke-width="1.5" />

              <!-- Calciner Chamber -->
              <rect x="20" y="200" width="70" height="75" fill="#1e293b" stroke="#f97316" stroke-width="1.5" rx="3" />
              <text x="55" y="235" fill="#f97316" font-size="10" font-weight="bold" text-anchor="middle" font-family="sans-serif">CALCINER</text>
              <text x="55" y="250" fill="#fdba74" font-size="9" text-anchor="middle" font-family="monospace" id="calciner-temp-text">885 °C</text>

              <!-- Gas Duct into Kiln Inlet -->
              <path d="M 90 260 Q 150 265 170 230" fill="none" stroke="#64748b" stroke-width="12" stroke-linecap="round" />
            </g>

            <!-- Rotary Kiln Support Piers (Civil Concrete Bases) -->
            <g id="kiln-piers">
              <!-- Pier 1 (Inlet) -->
              <polygon points="250,290 280,290 290,370 240,370" fill="#1e293b" stroke="#334155" stroke-width="2" />
              <circle cx="258" cy="285" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
              <circle cx="272" cy="285" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />

              <!-- Pier 2 (Drive Station Center) -->
              <polygon points="460,280 500,280 515,370 445,370" fill="#1e293b" stroke="#334155" stroke-width="2" />
              <circle cx="470" cy="272" r="14" fill="#475569" stroke="#94a3b8" stroke-width="2" />
              <circle cx="490" cy="272" r="14" fill="#475569" stroke="#94a3b8" stroke-width="2" />

              <!-- Pier 3 (Outlet / Hood) -->
              <polygon points="680,270 710,270 720,370 670,370" fill="#1e293b" stroke="#334155" stroke-width="2" />
              <circle cx="688" cy="260" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
              <circle cx="702" cy="260" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
            </g>

            <!-- MAIN ROTARY KILN SHELL (Inclined 3.5 degrees) -->
            <!-- Axis from (165, 230) to (740, 200) -->
            <g id="kiln-shell-group" transform="rotate(-3.2, 450, 220)">
              <!-- Outer Kiln Shell Cylinder -->
              <rect x="160" y="185" width="570" height="70" rx="6" fill="url(#kilnShellGrad)" stroke="#475569" stroke-width="2.5" />
              
              <!-- Refractory Lining Heat Zone Indicator (Gradient along shell) -->
              <rect x="520" y="187" width="208" height="66" fill="#dc2626" opacity="0.18" />
              <rect x="620" y="187" width="108" height="66" fill="#f97316" opacity="0.25" />

              <!-- Shell Weld Seams & Bands -->
              <line x1="240" y1="185" x2="240" y2="255" stroke="#1e293b" stroke-width="3" />
              <line x1="330" y1="185" x2="330" y2="255" stroke="#1e293b" stroke-width="3" />
              <line x1="420" y1="185" x2="420" y2="255" stroke="#1e293b" stroke-width="3" />
              <line x1="510" y1="185" x2="510" y2="255" stroke="#1e293b" stroke-width="3" />
              <line x1="600" y1="185" x2="600" y2="255" stroke="#1e293b" stroke-width="3" />

              <!-- Riding Rings (Tyres) -->
              <!-- Tyre 1 -->
              <rect x="252" y="180" width="24" height="80" rx="3" fill="url(#tyreRingGrad)" stroke="#0f172a" stroke-width="2" />
              <!-- Tyre 2 (Center) -->
              <rect x="468" y="180" width="26" height="80" rx="3" fill="url(#tyreRingGrad)" stroke="#0f172a" stroke-width="2" />
              <!-- Tyre 3 (Outlet) -->
              <rect x="682" y="180" width="24" height="80" rx="3" fill="url(#tyreRingGrad)" stroke="#0f172a" stroke-width="2" />

              <!-- Girth Gear (Driven by MV Pinion) -->
              <g id="girth-gear">
                <rect x="435" y="176" width="20" height="88" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5" />
                <!-- Gear Teeth simulation -->
                <line x1="435" y1="178" x2="455" y2="178" stroke="#e0f2fe" stroke-width="1.5" />
                <line x1="435" y1="184" x2="455" y2="184" stroke="#e0f2fe" stroke-width="1.5" />
                <line x1="435" y1="256" x2="455" y2="256" stroke="#e0f2fe" stroke-width="1.5" />
                <line x1="435" y1="262" x2="455" y2="262" stroke="#e0f2fe" stroke-width="1.5" />
              </g>

              <!-- Rotation Arrow overlay -->
              <g id="rotation-indicator" class="rotation-spin" transform="translate(340, 220)">
                <circle cx="0" cy="0" r="18" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,4" />
                <polygon points="12,-10 20,-2 10,-2" fill="#38bdf8" />
              </g>
              <text x="340" y="248" fill="#38bdf8" font-size="9" text-anchor="middle" font-family="monospace">CW ROTATION</text>
            </g>

            <!-- 2500 kW MV DRIVE MOTOR & GEARBOX UNIT -->
            <g id="drive-motor-group" transform="translate(390, 310)">
              <!-- Gearbox casing -->
              <rect x="0" y="15" width="45" height="42" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5" rx="3" />
              <text x="22" y="40" fill="#7dd3fc" font-size="8" text-anchor="middle" font-family="monospace">REDUCER</text>
              <line x1="45" y1="36" x2="60" y2="36" stroke="#94a3b8" stroke-width="6" />

              <!-- Main Motor (6.6 kV - 2500 kW) -->
              <rect x="60" y="5" width="65" height="58" fill="url(#motorGrad)" stroke="#38bdf8" stroke-width="2" rx="4" />
              <!-- Cooling Fins -->
              <line x1="68" y1="5" x2="68" y2="63" stroke="#0369a1" stroke-width="1.5" />
              <line x1="78" y1="5" x2="78" y2="63" stroke="#0369a1" stroke-width="1.5" />
              <line x1="88" y1="5" x2="88" y2="63" stroke="#0369a1" stroke-width="1.5" />
              <line x1="98" y1="5" x2="98" y2="63" stroke="#0369a1" stroke-width="1.5" />
              <line x1="108" y1="5" x2="108" y2="63" stroke="#0369a1" stroke-width="1.5" />

              <text x="92" y="30" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle" font-family="sans-serif">M1-KILN</text>
              <text x="92" y="44" fill="#bae6fd" font-size="8" text-anchor="middle" font-family="monospace">6.6kV 2.5MW</text>

              <!-- Shaft to Pinion -->
              <line x1="22" y1="15" x2="45" y2="-40" stroke="#0284c7" stroke-width="5" stroke-dasharray="3,2" />
            </g>

            <!-- Kiln Hood & Main Burner Flame (Right Side) -->
            <g id="kiln-hood" transform="translate(720, 140)">
              <!-- Kiln Firing Hood Structure -->
              <polygon points="0,55 35,35 65,35 65,180 0,180" fill="#0f172a" stroke="#475569" stroke-width="2" />
              
              <!-- Burner Lance Pipe -->
              <rect x="5" y="105" width="55" height="10" fill="#64748b" stroke="#334155" stroke-width="1.5" />
              <circle cx="5" cy="110" r="5" fill="#f97316" />

              <!-- ROARING FLAME (Animated Flame Gradient) -->
              <path id="kiln-flame-path" class="animated-flame" d="M 5,110 C -40,95 -120,80 -180,105 C -120,135 -40,125 5,110 Z" 
                    fill="url(#flameGrad)" filter="url(#flameGlow)" opacity="0.95" />

              <text x="35" y="70" fill="#f97316" font-size="9" font-weight="bold" text-anchor="middle">BURNER</text>
              <text x="35" y="85" fill="#fbbf24" font-size="8" text-anchor="middle" font-family="monospace">1450°C</text>

              <!-- Clinker Discharge Chute into Grate Cooler -->
              <path d="M 20 180 L 45 180 L 35 240 L 10 240 Z" fill="#334155" stroke="#1e293b" />
            </g>

            <!-- Clinker Grate Cooler (Bottom Right) -->
            <g id="grate-cooler" transform="translate(710, 290)">
              <rect x="0" y="20" width="160" height="60" fill="#1e293b" stroke="#475569" stroke-width="2" rx="3" />
              <text x="80" y="42" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">CLINKER GRATE COOLER</text>
              <text x="80" y="58" fill="#38bdf8" font-size="9" text-anchor="middle" font-family="monospace">COOLING FANS: 6x ON</text>
              <!-- Moving grate plates simulation -->
              <line x1="15" y1="65" x2="145" y2="65" stroke="#f97316" stroke-width="4" stroke-dasharray="10,5" class="grate-motion" />
            </g>

            <!-- Ball Mill (Raw Grinding Mill - Far Left Bottom) -->
            <g id="raw-ball-mill" transform="translate(180, 20)">
              <!-- Feed Chute -->
              <polygon points="10,0 30,0 25,60 15,60" fill="#334155" stroke="#475569" stroke-width="1" />
              <text x="20" y="-8" fill="#94a3b8" font-size="8" text-anchor="middle">MEAL FEED</text>
            </g>

            <!-- Live Sensor Overlays on Graphic -->
            <!-- RTD U1/V1/W1 on Motor -->
            <g id="motor-telemetry-badge" transform="translate(530, 315)">
              <rect x="0" y="0" width="125" height="52" fill="#0b1329" stroke="#0284c7" stroke-width="1.5" rx="4" />
              <text x="8" y="15" fill="#38bdf8" font-size="8" font-weight="bold">RTD WINDINGS (PT100)</text>
              <text x="8" y="30" fill="#e2e8f0" font-size="9" font-family="monospace" id="rtd-u-text">U1: 94.2°C | V1: 95.8°C</text>
              <text x="8" y="44" fill="#e2e8f0" font-size="9" font-family="monospace" id="rtd-w-text">W1: 93.6°C | W2: 94.7°C</text>
            </g>

            <!-- Bearing DE/NDE Vibration Badge -->
            <g id="bearing-telemetry-badge" transform="translate(530, 245)">
              <rect x="0" y="0" width="125" height="42" fill="#0b1329" stroke="#10b981" stroke-width="1.5" rx="4" />
              <text x="8" y="14" fill="#34d399" font-size="8" font-weight="bold">BEARING VIBRATION RMS</text>
              <text x="8" y="30" fill="#ffffff" font-size="9" font-family="monospace" id="vibe-badge-text">DE: 1.65 | NDE: 1.38 mm/s</text>
            </g>
          </svg>
        </div>
      </div>
    `}update(e){const s=this.container.querySelector("#kiln-speed-display");s&&(s.textContent=`${e.kilnSpeedRpm.toFixed(2)} RPM`);const t=this.container.querySelector("#kiln-temp-display");t&&(t.textContent=`${e.burningZoneTempC} °C`);const i=this.container.querySelector("#calciner-temp-text");i&&(i.textContent=`${e.calcinerTempC} °C`);const r=this.container.querySelector("#rtd-u-text");r&&(r.textContent=`U1: ${e.windings.u1.toFixed(1)}°C | V1: ${e.windings.v1.toFixed(1)}°C`);const o=this.container.querySelector("#rtd-w-text");o&&(o.textContent=`W1: ${e.windings.w1.toFixed(1)}°C | W2: ${e.windings.w2.toFixed(1)}°C`);const n=this.container.querySelector("#vibe-badge-text");n&&(n.textContent=`DE: ${e.bearings.deVibeRms.toFixed(2)} | NDE: ${e.bearings.ndeVibeRms.toFixed(2)} mm/s`);const c=this.container.querySelector("#kiln-status-pill"),m=this.container.querySelector("#kiln-status-text"),l=this.container.querySelector("#kiln-flame-path"),d=this.container.querySelector("#rotation-indicator");c&&m&&(e.motorState==="RUNNING"?(c.className="status-pill status-running",c.innerHTML='<span class="led-dot led-green"></span><span>KILN DRIVE: RUNNING</span>',l&&(l.style.display="block"),d&&d.classList.add("rotation-spin")):e.motorState==="TRIPPED"?(c.className="status-pill status-tripped",c.innerHTML='<span class="led-dot led-red"></span><span>KILN DRIVE: TRIPPED</span>',l&&(l.style.display="none"),d&&d.classList.remove("rotation-spin")):(c.className="status-pill status-stopped",c.innerHTML='<span class="led-dot led-amber"></span><span>KILN DRIVE: STOPPED</span>',l&&(l.style.display="none"),d&&d.classList.remove("rotation-spin")))}}class me{container;constructor(e){this.container=e,this.render()}render(){this.container.innerHTML=`
      <div class="sld-card">
        <div class="sld-header">
          <div class="sld-title-group">
            <span class="badge-tag tag-cyan">ELECTRICAL SLD</span>
            <h4 class="sld-title">6.6 kV Substation Feeder & ANSI Protection Topology</h4>
          </div>
          <div class="vcb-badge-group">
            <span class="vcb-status-indicator" id="vcb-status-badge">
              <span class="led-dot led-green"></span>
              <span id="vcb-badge-text">VCB: CLOSED (IN SERVICE)</span>
            </span>
          </div>
        </div>

        <div class="sld-svg-container">
          <svg viewBox="0 0 680 400" class="sld-svg" id="sld-svg-element" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="busGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <!-- Grid backdrop -->
            <g class="sld-grid" opacity="0.12">
              <line x1="40" y1="0" x2="40" y2="400" stroke="#0ea5e9" stroke-dasharray="3,3" />
              <line x1="200" y1="0" x2="200" y2="400" stroke="#0ea5e9" stroke-dasharray="3,3" />
              <line x1="360" y1="0" x2="360" y2="400" stroke="#0ea5e9" stroke-dasharray="3,3" />
              <line x1="520" y1="0" x2="520" y2="400" stroke="#0ea5e9" stroke-dasharray="3,3" />
            </g>

            <!-- 6.6 kV MAIN BUSBAR A -->
            <g id="main-busbar">
              <line x1="60" y1="45" x2="620" y2="45" stroke="#06b6d4" stroke-width="7" filter="url(#busGlow)" id="busbar-line" />
              <text x="70" y="32" fill="#22d3ee" font-size="11" font-weight="bold" font-family="monospace">MAIN BUSBAR 6.6 kV - 50 Hz (31.5 kA 3s)</text>
              <text x="560" y="32" fill="#38bdf8" font-size="10" font-family="monospace" id="bus-freq-disp">50.01 Hz</text>
            </g>

            <!-- Upstream Incomer Link from 25 MVA Power Transformer -->
            <line x1="160" y1="0" x2="160" y2="45" stroke="#06b6d4" stroke-width="4" />
            <text x="170" y="16" fill="#94a3b8" font-size="9" font-family="sans-serif">TR-01 (132/6.6kV)</text>

            <!-- FEEDER CELL 04: KILN MOTOR 2500 kW -->
            <g id="feeder-cell-04" transform="translate(0, 0)">
              <!-- Feeder Drop from Busbar -->
              <line x1="340" y1="45" x2="340" y2="90" stroke="#06b6d4" stroke-width="4" id="feeder-upper-line" />

              <!-- Disconnector Switch DS-04 -->
              <g id="disconnector-switch" transform="translate(340, 95)">
                <circle cx="0" cy="0" r="4" fill="#06b6d4" />
                <line x1="0" y1="0" x2="0" y2="25" stroke="#06b6d4" stroke-width="3" />
                <circle cx="0" cy="25" r="4" fill="#06b6d4" />
                <text x="12" y="16" fill="#94a3b8" font-size="9" font-family="monospace">DS-04 (CLOSED)</text>
              </g>

              <!-- Line from DS to VCB -->
              <line x1="340" y1="120" x2="340" y2="150" stroke="#06b6d4" stroke-width="4" id="line-ds-to-vcb" />

              <!-- VACUUM CIRCUIT BREAKER (VCB-04) CUBICLE -->
              <rect x="260" y="150" width="160" height="90" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5" rx="4" />
              <text x="270" y="168" fill="#38bdf8" font-size="10" font-weight="bold" font-family="sans-serif">VCB-04 CUBICLE</text>
              <text x="270" y="180" fill="#64748b" font-size="8" font-family="monospace">1250A / 31.5kA</text>

              <!-- Mechanical Breaker Contact -->
              <g id="vcb-breaker-contact" transform="translate(340, 195)">
                <circle cx="0" cy="-22" r="5" fill="#e2e8f0" />
                <circle cx="0" cy="22" r="5" fill="#e2e8f0" />
                <!-- Contact Bar (Dynamic) -->
                <line id="vcb-contact-bar" x1="0" y1="-22" x2="0" y2="22" stroke="#10b981" stroke-width="5" stroke-linecap="round" />
              </g>

              <!-- Line from VCB to CTs -->
              <line x1="340" y1="240" x2="340" y2="280" stroke="#06b6d4" stroke-width="4" id="feeder-lower-line" />

              <!-- Current Transformer (CT 400/5A) & Zero-Sequence CT -->
              <g id="ct-instrumentation" transform="translate(340, 275)">
                <!-- 3-Phase CT Circles -->
                <circle cx="-10" cy="0" r="12" fill="none" stroke="#f59e0b" stroke-width="2" />
                <circle cx="10" cy="0" r="12" fill="none" stroke="#f59e0b" stroke-width="2" />
                <text x="28" y="4" fill="#fbbf24" font-size="9" font-family="monospace">CT: 400/5A Cl 5P20</text>

                <!-- Core Balance CT (50N) Ring -->
                <ellipse cx="0" cy="28" rx="20" ry="8" fill="none" stroke="#ef4444" stroke-width="2" />
                <text x="28" y="32" fill="#f87171" font-size="9" font-family="monospace">CBCT (50N): 50/1A</text>
              </g>

              <!-- Potential Transformer (PT) tap -->
              <g id="pt-instrumentation" transform="translate(340, 68)">
                <line x1="0" y1="0" x2="-80" y2="0" stroke="#06b6d4" stroke-width="2" />
                <circle cx="-85" cy="0" r="10" fill="none" stroke="#38bdf8" stroke-width="1.5" />
                <circle cx="-95" cy="0" r="10" fill="none" stroke="#38bdf8" stroke-width="1.5" />
                <line x1="-95" y1="10" x2="-95" y2="22" stroke="#94a3b8" stroke-width="1.5" />
                <line x1="-102" y1="22" x2="-88" y2="22" stroke="#94a3b8" stroke-width="1.5" />
                <text x="-145" y="4" fill="#38bdf8" font-size="8" font-family="monospace">PT 6.6kV/110V</text>
              </g>

              <!-- Outgoing Feeder Cable to Motor -->
              <line x1="340" y1="315" x2="340" y2="345" stroke="#06b6d4" stroke-width="4" id="motor-cable-line" />

              <!-- 2500 kW Motor Circle Symbol -->
              <g id="motor-symbol" transform="translate(340, 370)">
                <circle cx="0" cy="0" r="22" fill="#0369a1" stroke="#38bdf8" stroke-width="2.5" id="motor-symbol-circle" />
                <text x="0" y="4" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle" font-family="sans-serif">M</text>
                <text x="0" y="14" fill="#bae6fd" font-size="7" font-weight="bold" text-anchor="middle">3 ~</text>
                <text x="32" y="4" fill="#ffffff" font-size="10" font-weight="bold" font-family="monospace">KILN DRIVE (2500 kW)</text>
              </g>
            </g>

            <!-- ANSI PROTECTION RELAYS DISPATCH BLOCK (Right Side) -->
            <g id="ansi-relays-group" transform="translate(480, 85)">
              <rect x="0" y="0" width="180" height="260" fill="#090f1d" stroke="#1e293b" stroke-width="1.5" rx="5" />
              <text x="12" y="22" fill="#38bdf8" font-size="10" font-weight="bold">NUMERICAL RELAY (SIPROTEC)</text>
              <line x1="10" y1="32" x2="170" y2="32" stroke="#1e293b" stroke-width="1" />

              <!-- ANSI 51 -->
              <g id="relay-51-card" transform="translate(10, 42)">
                <rect x="0" y="0" width="160" height="60" fill="#0f172a" stroke="#334155" stroke-width="1" rx="3" id="r51-bg" />
                <text x="8" y="18" fill="#38bdf8" font-size="10" font-weight="bold">ANSI 51: OVERCURRENT</text>
                <text x="8" y="34" fill="#94a3b8" font-size="8" font-family="monospace">IEC Standard Inverse</text>
                <text x="8" y="48" fill="#e2e8f0" font-size="9" font-family="monospace" id="r51-val">242.4 A (NORMAL)</text>
                <circle cx="145" cy="18" r="6" fill="#10b981" id="r51-led" />
              </g>

              <!-- ANSI 49 -->
              <g id="relay-49-card" transform="translate(10, 112)">
                <rect x="0" y="0" width="160" height="60" fill="#0f172a" stroke="#334155" stroke-width="1" rx="3" id="r49-bg" />
                <text x="8" y="18" fill="#f59e0b" font-size="10" font-weight="bold">ANSI 49: THERMAL OVERLOAD</text>
                <text x="8" y="34" fill="#94a3b8" font-size="8" font-family="monospace">Stator Heating I²t</text>
                <text x="8" y="48" fill="#e2e8f0" font-size="9" font-family="monospace" id="r49-val">58.4 % (NORMAL)</text>
                <circle cx="145" cy="18" r="6" fill="#10b981" id="r49-led" />
              </g>

              <!-- ANSI 50N -->
              <g id="relay-50n-card" transform="translate(10, 182)">
                <rect x="0" y="0" width="160" height="60" fill="#0f172a" stroke="#334155" stroke-width="1" rx="3" id="r50n-bg" />
                <text x="8" y="18" fill="#ef4444" font-size="10" font-weight="bold">ANSI 50N: EARTH FAULT</text>
                <text x="8" y="34" fill="#94a3b8" font-size="8" font-family="monospace">Inst. Residual (40ms)</text>
                <text x="8" y="48" fill="#e2e8f0" font-size="9" font-family="monospace" id="r50n-val">1.2 A (NORMAL)</text>
                <circle cx="145" cy="18" r="6" fill="#10b981" id="r50n-led" />
              </g>

              <!-- TRIP BUS LINK LINE -->
              <path d="M 0 160 L -60 160 L -60 195" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" id="trip-bus-line" />
            </g>
          </svg>
        </div>
      </div>
    `}update(e){const s=this.container.querySelector("#vcb-status-badge"),t=this.container.querySelector("#vcb-badge-text"),i=this.container.querySelector("#vcb-contact-bar"),r=this.container.querySelector("#feeder-lower-line"),o=this.container.querySelector("#motor-cable-line"),n=this.container.querySelector("#motor-symbol-circle"),c=this.container.querySelector("#trip-bus-line");s&&t&&i&&(e.vcbState==="CLOSED"?(s.className="vcb-status-indicator vcb-closed",s.innerHTML='<span class="led-dot led-green"></span><span>VCB: CLOSED (IN SERVICE)</span>',i.setAttribute("x1","0"),i.setAttribute("y1","-22"),i.setAttribute("x2","0"),i.setAttribute("y2","22"),i.setAttribute("stroke","#10b981"),r&&r.setAttribute("stroke","#06b6d4"),o&&o.setAttribute("stroke","#06b6d4"),n&&n.setAttribute("fill","#0369a1"),c&&c.setAttribute("stroke","#475569")):e.vcbState==="TRIPPED"?(s.className="vcb-status-indicator vcb-tripped",s.innerHTML='<span class="led-dot led-red"></span><span>VCB: TRIPPED (FAULT)</span>',i.setAttribute("x1","0"),i.setAttribute("y1","-22"),i.setAttribute("x2","25"),i.setAttribute("y2","5"),i.setAttribute("stroke","#ef4444"),r&&r.setAttribute("stroke","#334155"),o&&o.setAttribute("stroke","#334155"),n&&n.setAttribute("fill","#1e293b"),c&&c.setAttribute("stroke","#ef4444")):(s.className="vcb-status-indicator vcb-open",s.innerHTML='<span class="led-dot led-amber"></span><span>VCB: OPEN</span>',i.setAttribute("x1","0"),i.setAttribute("y1","-22"),i.setAttribute("x2","22"),i.setAttribute("y2","5"),i.setAttribute("stroke","#f59e0b"),r&&r.setAttribute("stroke","#334155"),o&&o.setAttribute("stroke","#334155"),n&&n.setAttribute("fill","#1e293b")));const m=this.container.querySelector("#r51-val"),l=this.container.querySelector("#r51-led"),d=this.container.querySelector("#r51-bg");m&&l&&d&&(m.textContent=e.relay51Overcurrent.measuredVal,e.relay51Overcurrent.status==="TRIPPED"?(l.setAttribute("fill","#ef4444"),d.setAttribute("stroke","#ef4444")):e.relay51Overcurrent.status==="PICKUP"?(l.setAttribute("fill","#f59e0b"),d.setAttribute("stroke","#f59e0b")):(l.setAttribute("fill","#10b981"),d.setAttribute("stroke","#334155")));const h=this.container.querySelector("#r49-val"),u=this.container.querySelector("#r49-led"),y=this.container.querySelector("#r49-bg");h&&u&&y&&(h.textContent=`${e.thermalCapacityPct.toFixed(1)} %`,e.relay49Thermal.status==="TRIPPED"?(u.setAttribute("fill","#ef4444"),y.setAttribute("stroke","#ef4444")):e.relay49Thermal.status==="PICKUP"||e.thermalCapacityPct>80?(u.setAttribute("fill","#f59e0b"),y.setAttribute("stroke","#f59e0b")):(u.setAttribute("fill","#10b981"),y.setAttribute("stroke","#334155")));const g=this.container.querySelector("#r50n-val"),C=this.container.querySelector("#r50n-led"),k=this.container.querySelector("#r50n-bg");g&&C&&k&&(g.textContent=e.relay50NEarthFault.measuredVal,e.relay50NEarthFault.status==="TRIPPED"?(C.setAttribute("fill","#ef4444"),k.setAttribute("stroke","#ef4444")):(C.setAttribute("fill","#10b981"),k.setAttribute("stroke","#334155")));const T=this.container.querySelector("#bus-freq-disp");T&&(T.textContent=`${e.busFrequencyHz.toFixed(2)} Hz`)}}class he{container;canvas=null;ctx=null;deHistory=[];ndeHistory=[];maxPoints=40;constructor(e){this.container=e;for(let s=0;s<this.maxPoints;s++)this.deHistory.push(1.65+(Math.random()*.15-.075)),this.ndeHistory.push(1.38+(Math.random()*.12-.06));this.render()}render(){this.container.innerHTML=`
      <div class="vibe-card">
        <div class="vibe-header">
          <div class="vibe-title-group">
            <span class="badge-tag tag-purple">AI PREDICTIVE MAINTENANCE</span>
            <h4 class="vibe-title">ISO 10816 Vibration RMS & Bearing Defect Spectral Analyzer</h4>
          </div>
          <div class="vibe-legend">
            <span class="legend-item"><span class="legend-box box-de"></span>DE Bearing (Drive End)</span>
            <span class="legend-item"><span class="legend-box box-nde"></span>NDE Bearing (Non-Drive End)</span>
            <span class="legend-item"><span class="legend-line line-iso"></span>ISO Limit (2.8 mm/s)</span>
          </div>
        </div>

        <div class="vibe-content-grid">
          <!-- Canvas Waveform Stream -->
          <div class="canvas-wrap">
            <canvas id="vibe-canvas" width="540" height="200"></canvas>
            <div class="canvas-zones">
              <span class="zone-tag zone-good">ZONE A/B: GOOD (&lt;2.8 mm/s)</span>
              <span class="zone-tag zone-warn">ZONE C: ALERT (2.8-4.5)</span>
              <span class="zone-tag zone-trip">ZONE D: TRIP (&gt;4.5)</span>
            </div>
          </div>

          <!-- AI Diagnostic Telemetry Panel -->
          <div class="ai-telemetry-panel">
            <div class="ai-metric-row">
              <div class="ai-metric-box">
                <span class="ai-lbl">REMAINING USEFUL LIFE</span>
                <span class="ai-val text-cyan font-mono" id="rul-hours-val">8,420 hrs</span>
                <div class="ai-progress-bar">
                  <div class="ai-progress-fill" id="rul-progress-fill" style="width: 84%;"></div>
                </div>
              </div>
              <div class="ai-metric-box">
                <span class="ai-lbl">BPFO DEFECT PROBABILITY</span>
                <span class="ai-val text-green font-mono" id="bpfo-score-val">7.2 %</span>
                <div class="ai-progress-bar">
                  <div class="ai-progress-fill bg-green" id="bpfo-progress-fill" style="width: 7%;"></div>
                </div>
              </div>
            </div>

            <div class="ai-metric-row">
              <div class="ai-metric-box">
                <span class="ai-lbl">KURTOSIS (ISO 13373)</span>
                <span class="ai-val font-mono" id="kurtosis-val">3.08 (Gaussian)</span>
              </div>
              <div class="ai-metric-box">
                <span class="ai-lbl">CREST FACTOR</span>
                <span class="ai-val font-mono" id="crest-val">2.85 (Nominal)</span>
              </div>
            </div>

            <!-- Spectral Peak Breakdown -->
            <div class="fft-peaks-box">
              <span class="fft-title">SPECTRAL PEAK HARMONICS (FFT):</span>
              <div class="fft-tags" id="fft-tags-container">
                <span class="fft-tag">1X RPM: 16.5 Hz (0.85 mm/s)</span>
                <span class="fft-tag">2X Harmonic: 33.0 Hz (0.32 mm/s)</span>
                <span class="fft-tag">BPFO: 104.2 Hz (0.12 mm/s)</span>
              </div>
            </div>

            <!-- AI Real-time Diagnosis Banner -->
            <div class="ai-diagnosis-banner" id="ai-diagnosis-box">
              <div class="diagnosis-icon"><i class="fa-solid fa-microchip"></i></div>
              <div class="diagnosis-body">
                <span class="diag-title" id="ai-diag-title">AI HEALTH STATUS: OPTIMAL</span>
                <p class="diag-text" id="ai-diag-text">Optimum hydrodynamic lubrication film. ISO G2.5 mechanical balance compliant.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,this.canvas=this.container.querySelector("#vibe-canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.drawChart())}update(e){this.deHistory.push(e.bearings.deVibeRms),this.ndeHistory.push(e.bearings.ndeVibeRms),this.deHistory.length>this.maxPoints&&this.deHistory.shift(),this.ndeHistory.length>this.maxPoints&&this.ndeHistory.shift(),this.drawChart();const s=this.container.querySelector("#rul-hours-val"),t=this.container.querySelector("#rul-progress-fill");if(s&&t){s.textContent=`${e.predictive.rulHours.toLocaleString()} hrs`;const d=Math.min(100,Math.max(5,e.predictive.rulHours/1e4*100));t.style.width=`${d}%`,e.predictive.rulHours<1e3?t.className="ai-progress-fill bg-red":t.className="ai-progress-fill bg-cyan"}const i=this.container.querySelector("#bpfo-score-val"),r=this.container.querySelector("#bpfo-progress-fill");i&&r&&(i.textContent=`${e.predictive.bpfoConfidence.toFixed(1)} %`,r.style.width=`${Math.min(100,e.predictive.bpfoConfidence)}%`,e.predictive.bpfoConfidence>50?(i.className="ai-val text-red font-mono",r.className="ai-progress-fill bg-red"):e.predictive.bpfoConfidence>25?(i.className="ai-val text-amber font-mono",r.className="ai-progress-fill bg-amber"):(i.className="ai-val text-green font-mono",r.className="ai-progress-fill bg-green"));const o=this.container.querySelector("#kurtosis-val");if(o){const d=e.predictive.kurtosis.toFixed(2);o.textContent=`${d} (${e.predictive.kurtosis>4?"High Shock Impact":"Gaussian"})`,e.predictive.kurtosis>4?o.className="ai-val text-red font-mono":o.className="ai-val font-mono"}const n=this.container.querySelector("#crest-val");n&&(n.textContent=`${e.predictive.crestFactor.toFixed(2)} (${e.predictive.crestFactor>3.5?"Alert":"Nominal"})`);const c=this.container.querySelector("#ai-diag-title"),m=this.container.querySelector("#ai-diag-text"),l=this.container.querySelector("#ai-diagnosis-box");c&&m&&l&&(m.textContent=e.predictive.diagnosis,e.activeFault!=="NONE"?(c.textContent="AI HEALTH STATUS: CRITICAL FAULT ACTIVE",l.className="ai-diagnosis-banner banner-alert"):(c.textContent="AI HEALTH STATUS: OPTIMAL",l.className="ai-diagnosis-banner"))}drawChart(){if(!this.canvas||!this.ctx)return;const e=this.canvas.width,s=this.canvas.height,t=this.ctx;t.clearRect(0,0,e,s),t.fillStyle="#070c17",t.fillRect(0,0,e,s);const i=6,r=s-2.8/i*s,o=s-4.5/i*s;t.fillStyle="rgba(16, 185, 129, 0.05)",t.fillRect(0,r,e,s-r),t.fillStyle="rgba(245, 158, 11, 0.08)",t.fillRect(0,o,e,r-o),t.fillStyle="rgba(239, 68, 68, 0.12)",t.fillRect(0,0,e,o),t.strokeStyle="#1e293b",t.lineWidth=1;for(let m=1;m<=5;m++){const l=s-m/i*s;t.beginPath(),t.moveTo(0,l),t.lineTo(e,l),t.stroke(),t.fillStyle="#64748b",t.font="9px monospace",t.fillText(`${m}.0 mm/s`,8,l-3)}t.strokeStyle="#f59e0b",t.lineWidth=1.5,t.setLineDash([4,4]),t.beginPath(),t.moveTo(0,r),t.lineTo(e,r),t.stroke(),t.strokeStyle="#ef4444",t.lineWidth=1.5,t.setLineDash([4,4]),t.beginPath(),t.moveTo(0,o),t.lineTo(e,o),t.stroke(),t.setLineDash([]),this.drawLine(this.ndeHistory,"#06b6d4",2,i);const n=this.deHistory[this.deHistory.length-1]||1.6;let c="#10b981";n>=4.5?c="#ef4444":n>=2.8&&(c="#f59e0b"),this.drawLine(this.deHistory,c,2.5,i)}drawLine(e,s,t,i){if(!this.canvas||!this.ctx||e.length<2)return;const r=this.canvas.width,o=this.canvas.height,n=this.ctx,c=r/(this.maxPoints-1);n.strokeStyle=s,n.lineWidth=t,n.beginPath();for(let h=0;h<e.length;h++){const u=h*c,y=Math.min(i,Math.max(0,e[h])),g=o-y/i*o;h===0?n.moveTo(u,g):n.lineTo(u,g)}n.stroke();const m=(e.length-1)*c,l=Math.min(i,Math.max(0,e[e.length-1])),d=o-l/i*o;n.fillStyle=s,n.beginPath(),n.arc(m,d,4,0,Math.PI*2),n.fill()}}class ue{modalEl=null;constructor(){this.createModal()}createModal(){const e=document.createElement("div");e.id="engineering-dossier-modal",e.className="modal-backdrop hidden",e.innerHTML=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-group">
            <span class="badge-tag tag-cyan">ENGINEERING DOSSIER</span>
            <h3 class="modal-title">KILN-SYNC: Technical Architecture & Interview Defense Dossier</h3>
          </div>
          <button class="modal-close-btn" id="close-dossier-btn">&times;</button>
        </div>

        <div class="modal-body">
          <!-- Author Banner -->
          <div class="author-dossier-card">
            <div class="author-icon"><i class="fa-solid fa-user-astronaut"></i></div>
            <div class="author-meta">
              <h4 class="author-name">أ. طارق ابوعشي</h4>
              <p class="author-title">Lead Electrical & Automation Systems Engineer | SCADA & Industrial Twin Architect</p>
              <span class="author-badge">Industrial Plant Automation • 6.6 kV MV Switchgear • ANSI Relays • ISO 10816 Analytics</span>
            </div>
          </div>

          <!-- Tabs or Sections -->
          <div class="dossier-sections">
            <!-- Section 1: Electrical Calculations -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-bolt text-cyan"></i> 1. Medium Voltage Motor & Power System Calculations</h5>
              <div class="section-content">
                <p>The Rotary Kiln drive is powered by a <strong>6.6 kV, 2,500 kW (3,350 HP) 3-phase wound-rotor induction motor</strong> coupled via a heavy helical gear reducer to a girth gear.</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">Active Power: P = √3 × V_L × I_L × cos φ × η</div>
                  <div class="formula-row">Rated Full Load Current: I_n = P / (√3 × V_L × cos φ × η) = 2500 kW / (1.732 × 6.6 kV × 0.91 × 0.96) ≈ <strong>250.7 A</strong></div>
                  <div class="formula-row">Nominal Steady Operation: Current = 242.4 A (96.7% Full Load) | Cos φ = 0.91 | Active Power = 2.51 MW</div>
                  <div class="formula-row">Direct-On-Line Inrush: I_st ≈ 5.5 × I_n ≈ 1,380 A (Mitigated via Liquid Resistance Starter LRS / MV VFD)</div>
                </div>
              </div>
            </div>

            <!-- Section 2: ANSI Protection Relays -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-shield-halved text-amber"></i> 2. ANSI / IEEE Standard Protection Scheme (SIPROTEC 7UM62)</h5>
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
                      <td class="text-cyan font-bold">51</td>
                      <td>Phase Time Overcurrent (IDMT)</td>
                      <td>IEC 60255 Standard Inverse: t = (0.14 × TMS) / ((I/Is)^0.02 - 1)<br>Is = 280 A, TMS = 0.25</td>
                      <td>Guards stator against sustained mechanical overloads and ball charge jamming. Tripped if current sustains >280A for ~4 seconds.</td>
                    </tr>
                    <tr>
                      <td class="text-amber font-bold">49</td>
                      <td>Machine Thermal Overload</td>
                      <td>Stator heating model: θ = (I / I_rated)² × (1 - e^(-t/τ))<br>Alarm: 85% | Trip: 100%</td>
                      <td>Tracks internal copper heating. Incorporates PT100 RTD feedback (U1..W2) to prevent insulation breakdown (Class F/B rise).</td>
                    </tr>
                    <tr>
                      <td class="text-red font-bold">50N</td>
                      <td>Instantaneous Earth Fault</td>
                      <td>Core Balance CT (CBCT 50/1A)<br>Pickup Is0 = 15 A | Time Delay: 40 ms</td>
                      <td>Defends against stator ground faults. Instantaneous trip clears before zero-sequence current damages core iron laminations.</td>
                    </tr>
                    <tr>
                      <td class="text-purple font-bold">27 / 59</td>
                      <td>Under / Over Voltage</td>
                      <td>PT 6.6kV / 110V | 27: 0.85 Un (5.61 kV) | 59: 1.15 Un (7.59 kV)</td>
                      <td>Protects magnetic core flux saturation and prevents excessive motor heating during grid voltage depressions.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Section 3: Sequential Conveyor Interlock -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-diagram-project text-green"></i> 3. Cascaded Conveyor Sequential Interlock Philosophy (CEMAT Standard)</h5>
              <div class="section-content">
                <p>In heavy cement clinker and raw stone transport, conveyors must adhere to strict interlocking logic to prevent catastrophic material spillage and motor burnouts:</p>
                <div class="logic-flow">
                  <div class="logic-node">
                    <span class="node-id">CV-103</span>
                    <span class="node-name">Raw Mill Feed (Surge)</span>
                    <span class="node-rule">Must Start FIRST</span>
                  </div>
                  <div class="logic-arrow">◀ Permissive Start (Reverse Order)</div>
                  <div class="logic-node">
                    <span class="node-id">CV-102</span>
                    <span class="node-name">Overland Gallery (280m)</span>
                    <span class="node-rule">Starts 2nd</span>
                  </div>
                  <div class="logic-arrow">◀ Permissive Start</div>
                  <div class="logic-node">
                    <span class="node-id">CV-101</span>
                    <span class="node-name">Quarry Crusher Discharge</span>
                    <span class="node-rule">Starts LAST</span>
                  </div>
                </div>
                <div class="cascade-note">
                  <strong class="text-red">Cascade Trip Logic:</strong> If <code>CV-103</code> trips due to Belt Sway or Zero-Speed slip, <code>CV-102</code> and <code>CV-101</code> MUST trip immediately. Halts feed instantly to prevent 150+ tons of rock from piling onto stationary belts!
                </div>
              </div>
            </div>

            <!-- Section 4: AI Predictive Maintenance & ISO 10816 -->
            <div class="dossier-card">
              <h5 class="section-title"><i class="fa-solid fa-brain text-purple"></i> 4. AI Vibration Analytics & Bearing Defect Frequencies (ISO 10816-3)</h5>
              <div class="section-content">
                <p>Dual-channel high-frequency piezoresistive accelerometers sample Drive-End (DE) and Non-Drive End (NDE) spherical roller bearings. Telemetry calculates real-time RMS velocity (10 Hz – 1,000 Hz) and Fast Fourier Transform (FFT) spectral peaks:</p>
                <div class="formula-box font-mono">
                  <div class="formula-row">ISO 10816-3 Class IV (>300 kW Rigid Foundation):</div>
                  <div class="formula-row text-green">  • Zone A/B (Good / Permissible): RMS &lt; 2.80 mm/s</div>
                  <div class="formula-row text-amber">  • Zone C (Alert / Restricted Operation): 2.80 – 4.50 mm/s</div>
                  <div class="formula-row text-red">  • Zone D (Dangerous / Unacceptable Trip): RMS &gt; 4.50 mm/s</div>
                  <div class="formula-row">BPFO Defect Frequency: BPFO = (n / 2) × f_r × [1 - (d / D) × cos α] = <strong>104.2 Hz</strong></div>
                  <div class="formula-row">Kurtosis: β_2 = E[(X - μ)⁴] / σ⁴ → Values > 4.5 indicate high-energy impact shocks from outer raceway spalls.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <span class="footer-note">Designed and engineered by أ. طارق ابوعشي for mission-critical industrial applications.</span>
          <button class="btn btn-primary" id="dossier-close-footer-btn">Close Dossier</button>
        </div>
      </div>
    `,document.body.appendChild(e),this.modalEl=e;const s=e.querySelector("#close-dossier-btn"),t=e.querySelector("#dossier-close-footer-btn");s&&s.addEventListener("click",()=>this.hide()),t&&t.addEventListener("click",()=>this.hide()),e.addEventListener("click",i=>{i.target===e&&this.hide()})}show(){this.modalEl&&this.modalEl.classList.remove("hidden")}hide(){this.modalEl&&this.modalEl.classList.add("hidden")}}document.addEventListener("DOMContentLoaded",()=>{const p=document.getElementById("kiln-graphic-container"),e=document.getElementById("sld-container"),s=document.getElementById("vibe-chart-container");if(!p||!e||!s){console.error("Critical SCADA containers missing from DOM");return}const t=new de(p),i=new me(e),r=new he(s),o=new ue,n=document.getElementById("soe-log-box"),c=document.getElementById("soe-event-count");let m=3;function l(a,F=!1){if(!n)return;m++,c&&(c.textContent=`${m} EVENTS LOGGED`);const I=new Date().toLocaleTimeString(),x=document.createElement("div");F?(x.className="text-red font-bold",x.innerHTML=`[${I}] ⚠️ ${a}`):x.innerHTML=`[${I}] ℹ️ ${a}`,n.appendChild(x),n.scrollTop=n.scrollHeight}const d=document.getElementById("btn-open-dossier");d&&d.addEventListener("click",()=>o.show());const h=document.getElementById("btn-audio-toggle"),u=document.getElementById("audio-icon"),y=document.getElementById("audio-text");h&&h.addEventListener("click",()=>{const a=v.toggleMute();u&&y&&(a?(u.className="fa-solid fa-volume-xmark",y.textContent="Audio: Muted"):(u.className="fa-solid fa-volume-high",y.textContent="Audio: Active"))});const g=document.getElementById("btn-fault-overload");g&&g.addEventListener("click",()=>{v.injectFault("MOTOR_OVERLOAD"),l("FAULT INJECTION: 3-Phase Stator Overload current injected (386A). ANSI 51 timing started.",!0)});const C=document.getElementById("btn-fault-sway");C&&C.addEventListener("click",()=>{v.injectFault("BELT_SWAY_CV103"),l("INTERLOCK FAULT: CV-103 Belt Sway limit switch triggered. Cascaded emergency trip of CV-102 & CV-101.",!0)});const k=document.getElementById("btn-fault-earth");k&&k.addEventListener("click",()=>{v.injectFault("EARTH_FAULT_50N"),l("ANSI 50N FAULT: Stator residual current I₀ = 42.8A. Instantaneous VCB trip executed in 40ms.",!0)});const T=document.getElementById("btn-fault-pullcord");T&&T.addEventListener("click",()=>{v.injectFault("PULL_CORD_CV102"),l("SAFETY TRIP: CV-102 emergency pull-cord switch tripped. Immediate halt of feeder CV-101.",!0)});const G=document.getElementById("btn-fault-reset"),H=document.getElementById("btn-quick-reset"),q=()=>{v.resetSystem(),l("SYSTEM RESTART: Permissive interlock sequence verified (CV-103 -> CV-102 -> CV-101). VCB closed.")};G&&G.addEventListener("click",q),H&&H.addEventListener("click",q),v.subscribe(a=>{const F=document.getElementById("header-grid-freq");F&&(F.textContent=`${a.busFrequencyHz.toFixed(2)} Hz`);const I=document.getElementById("header-bus-volts");I&&(I.textContent=`${a.voltageL1L2.toLocaleString()} V`);const x=document.getElementById("header-clock");x&&(x.textContent=a.timestamp);const V=document.getElementById("master-alarm-banner"),E=document.getElementById("alarm-badge-status"),z=document.getElementById("alarm-banner-message"),U=document.getElementById("soe-timestamp");V&&E&&z&&U&&(U.textContent=`${a.timestamp}.${Math.floor(Math.random()*900+100)}`,z.textContent=a.faultMessage,a.alarmActive?(V.className="alarm-banner active-alarm",E.className="alarm-badge fault",E.textContent="TRIP / ALARM"):(V.className="alarm-banner",E.className="alarm-badge healthy",E.textContent="NORMAL"));const b=document.getElementById("motor-dash-status");b&&(a.motorState==="RUNNING"?(b.className="status-pill status-running",b.textContent="RUNNING"):a.motorState==="TRIPPED"?(b.className="status-pill status-tripped",b.textContent="TRIPPED"):(b.className="status-pill status-stopped",b.textContent="STOPPED"));const $=document.getElementById("motor-current-val"),O=document.getElementById("motor-current-bar");if($&&O){$.innerHTML=`${a.motorCurrentA.toFixed(1)} <span class="readout-unit">A</span>`;const R=Math.min(100,a.motorCurrentA/350*100);O.style.width=`${R}%`,a.motorCurrentA>280?O.style.backgroundColor="var(--red-tripped)":O.style.backgroundColor="var(--cyan-primary)"}const W=document.getElementById("motor-pf-val");W&&(W.textContent=`Cos φ: ${a.powerFactor.toFixed(2)}`);const K=document.getElementById("motor-power-val"),_=document.getElementById("motor-q-val");K&&_&&(K.innerHTML=`${a.activePowerMW.toFixed(2)} <span class="readout-unit">MW</span>`,_.textContent=`${a.reactivePowerMVAR.toFixed(2)} MVAR`);const A=(R,L)=>{const M=document.getElementById(R),S=M?.parentElement;M&&S&&(M.textContent=`${L.toFixed(1)} °C`,L>135?S.className="rtd-tile rtd-trip":L>120?S.className="rtd-tile rtd-warn":S.className="rtd-tile")};A("temp-u1",a.windings.u1),A("temp-v1",a.windings.v1),A("temp-w1",a.windings.w1),A("temp-u2",a.windings.u2),A("temp-v2",a.windings.v2),A("temp-w2",a.windings.w2);const Z=document.getElementById("temp-de-bearing");Z&&(Z.textContent=`${a.bearings.deTemp.toFixed(1)} °C`);const Y=document.getElementById("temp-nde-bearing");Y&&(Y.textContent=`${a.bearings.ndeTemp.toFixed(1)} °C`);const B=(R,L,M,S,re,oe,ae,ne)=>{const w=a.conveyors[R],D=document.getElementById(L),P=document.getElementById(M),J=document.getElementById(S),ee=document.getElementById(re),te=document.getElementById(oe),se=document.getElementById(ae),ie=document.getElementById(ne);D&&P&&J&&ee&&te&&se&&ie&&(J.textContent=`${w.motorCurrentA.toFixed(1)} A`,ee.textContent=`${w.beltSpeedMps.toFixed(1)} m/s`,w.status==="RUNNING"?(D.className="conveyor-box box-running",P.className="status-pill status-running",P.textContent="RUNNING"):(D.className="conveyor-box box-tripped",P.className="status-pill status-tripped",P.textContent="TRIPPED"),te.className=w.beltSwayFault?"led-dot led-red":"led-dot led-green",se.className=w.zeroSpeedHealthy?"led-dot led-green":"led-dot led-red",ie.className=w.pullCordTripped?"led-dot led-red":"led-dot led-green")};B("cv101","box-cv101","pill-cv101","cv101-current","cv101-speed","led-sway-cv101","led-zerospeed-cv101","led-pullcord-cv101"),B("cv102","box-cv102","pill-cv102","cv102-current","cv102-speed","led-sway-cv102","led-zerospeed-cv102","led-pullcord-cv102"),B("cv103","box-cv103","pill-cv103","cv103-current","cv103-speed","led-sway-cv103","led-zerospeed-cv103","led-pullcord-cv103");const N=document.getElementById("cascade-status-pill"),j=document.getElementById("chain-node-103"),X=document.getElementById("chain-node-102"),Q=document.getElementById("chain-node-101");N&&j&&X&&Q&&(a.sequentialCascadeLocked?(N.className="status-pill status-tripped",N.textContent="CASCADE INTERLOCK TRIP"):(N.className="status-pill status-running",N.textContent="CASCADE HEALTHY"),j.className=a.conveyors.cv103.status==="RUNNING"?"chain-node active":"chain-node tripped",X.className=a.conveyors.cv102.status==="RUNNING"?"chain-node active":"chain-node tripped",Q.className=a.conveyors.cv101.status==="RUNNING"?"chain-node active":"chain-node tripped"),t.update(a),i.update(a),r.update(a)}),v.start()});
