(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();class M{ctx=null;isMuted=!1;alarmTimer=null;isAlarmRunning=!1;constructor(){}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted&&this.stopAlarm(),this.isMuted}getMuted(){return this.isMuted}startTripAlarm(){if(this.isMuted||this.isAlarmRunning||(this.initContext(),!this.ctx))return;this.isAlarmRunning=!0;let e=0;const t=()=>{if(!this.isAlarmRunning||this.isMuted||!this.ctx)return;const s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="sawtooth";const i=this.ctx.currentTime;s.frequency.setValueAtTime(e%2===0?1050:850,i),s.frequency.exponentialRampToValueAtTime(e%2===0?700:550,i+.35),a.gain.setValueAtTime(.12,i),a.gain.exponentialRampToValueAtTime(.001,i+.38);const o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(2200,i),s.connect(o),o.connect(a),a.connect(this.ctx.destination),s.start(i),s.stop(i+.4),e++,this.alarmTimer=window.setTimeout(t,420)};t()}stopAlarm(){this.isAlarmRunning=!1,this.alarmTimer!==null&&(clearTimeout(this.alarmTimer),this.alarmTimer=null)}playBreakerOperation(e){if(this.isMuted||(this.initContext(),!this.ctx))return;const t=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e?95:120,t),s.frequency.exponentialRampToValueAtTime(28,t+.15),a.gain.setValueAtTime(.35,t),a.gain.exponentialRampToValueAtTime(.001,t+.18),s.connect(a),a.connect(this.ctx.destination),s.start(t),s.stop(t+.2);const i=this.ctx.sampleRate*.04,o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=o.getChannelData(0);for(let c=0;c<i;c++)l[c]=(Math.random()*2-1)*Math.exp(-c/(i*.2));const n=this.ctx.createBufferSource();n.buffer=o;const r=this.ctx.createGain();r.gain.setValueAtTime(.2,t),r.gain.exponentialRampToValueAtTime(.001,t+.05);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(1400,t),d.Q.setValueAtTime(3,t),n.connect(d),d.connect(r),r.connect(this.ctx.destination),n.start(t+.01)}playAirBlasterBlast(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(140,e),t.frequency.exponentialRampToValueAtTime(35,e+.4),s.gain.setValueAtTime(.4,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.5);const a=.5,i=Math.floor(this.ctx.sampleRate*a),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),l=o.getChannelData(0);for(let c=0;c<i;c++)l[c]=(Math.random()*2-1)*Math.exp(-c/(i*.35));const n=this.ctx.createBufferSource();n.buffer=o;const r=this.ctx.createGain();r.gain.setValueAtTime(.3,e),r.gain.exponentialRampToValueAtTime(.001,e+a);const d=this.ctx.createBiquadFilter();d.type="bandpass",d.frequency.setValueAtTime(800,e),d.frequency.exponentialRampToValueAtTime(320,e+a),d.Q.setValueAtTime(1.5,e),n.connect(d),d.connect(r),r.connect(this.ctx.destination),n.start(e)}playGasPurge(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=1.2,s=Math.floor(this.ctx.sampleRate*t),a=this.ctx.createBuffer(1,s,this.ctx.sampleRate),i=a.getChannelData(0);for(let r=0;r<s;r++)i[r]=(Math.random()*2-1)*Math.sin(r/s*Math.PI);const o=this.ctx.createBufferSource();o.buffer=a;const l=this.ctx.createGain();l.gain.setValueAtTime(.15,e),l.gain.exponentialRampToValueAtTime(.001,e+t);const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.setValueAtTime(1600,e),o.connect(n),n.connect(l),l.connect(this.ctx.destination),o.start(e)}playWarningChime(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(880,e),t.frequency.setValueAtTime(1174,e+.12),s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.35),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playClick(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(600,e),t.frequency.exponentialRampToValueAtTime(120,e+.03),s.gain.setValueAtTime(.06,e),s.gain.exponentialRampToValueAtTime(.001,e+.035),t.connect(s),s.connect(this.ctx.destination),t.start(e),t.stop(e+.04)}}const f=new M;class R{listeners=[];tickInterval=null;fastTickInterval=null;preheater;cooler;bmsCems;aiPredictive;soeLog=[];faults={c4Plugging:!1,highCoSpike:!1,coolerStall:!1,purgeCycleActive:!1};masterStatus="NORMAL";masterMessage="SYSTEM HEALTHY — 5-STAGE CYCLONE TOWER & COOLER DCS SYNCHRONIZED";soeClockString="00:00:00.000";constructor(){this.preheater=this.getInitialPreheater(),this.cooler=this.getInitialCooler(),this.bmsCems=this.getInitialBmsCems(),this.aiPredictive=this.getInitialAiPredictive(),this.addSoe("SYS-INIT","DCS-MASTER","PYRO-CLINKER DCS Automation Suite initialized nominal baseline","NORMAL"),this.startSimulationLoops()}getInitialPreheater(){return{cyclones:[{id:"C1",name:"Cyclone C1 (Top Dual)",stage:1,temperature:312,draftPressure:-56.4,o2Level:3.4,materialFlowRate:240,status:"OPTIMAL"},{id:"C2",name:"Cyclone C2 Stage",stage:2,temperature:494,draftPressure:-42.8,materialFlowRate:240,status:"OPTIMAL"},{id:"C3",name:"Cyclone C3 Stage",stage:3,temperature:662,draftPressure:-32.1,materialFlowRate:240,status:"OPTIMAL"},{id:"C4",name:"Cyclone C4 Stage",stage:4,temperature:795,draftPressure:-22.4,hasAirBlaster:!0,airBlasterActive:!1,materialFlowRate:240,status:"OPTIMAL"},{id:"C5",name:"Cyclone C5 Bottom",stage:5,temperature:882,draftPressure:-16.8,hasAirBlaster:!0,airBlasterActive:!1,materialFlowRate:240,status:"OPTIMAL"}],calciner:{temperature:905,draftPressure:-18.2,tertiaryAirTemp:825,fuelFlow:14.2,calcinationRate:93.8,flameDetected:!0},kilnInlet:{temperature:1085,draftPressure:-12.5,noxLevel:580},idFan:{speedRpm:985,damperPercent:78,motorPowerKw:2480,motorCurrentA:268,vibrationMmS:2.1,draftInletMbar:-58.2,bearingTempC:62.4,isRunning:!0},airBlasterPressureBar:8.5,airBlasterLastFired:"STANDBY",rawMealFeedTph:240}}getInitialCooler(){return{grateSections:[{id:1,name:"Grate Section 1 (Inlet Drop)",clinkerTempC:1380,strokeRateSpM:20,drivePressureBar:145,isStalled:!1},{id:2,name:"Grate Section 2 (Intermediate)",clinkerTempC:760,strokeRateSpM:16,drivePressureBar:142,isStalled:!1},{id:3,name:"Grate Section 3 (Discharge)",clinkerTempC:98,strokeRateSpM:13,drivePressureBar:138,isStalled:!1}],fans:[{id:"FN-01",name:"Cooler Fan 1",zone:1,flowM3h:42e3,staticPressureMbar:85,motorCurrentA:215,speedPercent:88,vfdFrequencyHz:44,status:"RUNNING"},{id:"FN-02",name:"Cooler Fan 2",zone:1,flowM3h:41500,staticPressureMbar:84,motorCurrentA:212,speedPercent:87,vfdFrequencyHz:43.5,status:"RUNNING"},{id:"FN-03",name:"Cooler Fan 3",zone:2,flowM3h:38e3,staticPressureMbar:72,motorCurrentA:195,speedPercent:82,vfdFrequencyHz:41,status:"RUNNING"},{id:"FN-04",name:"Cooler Fan 4",zone:2,flowM3h:37500,staticPressureMbar:70,motorCurrentA:192,speedPercent:81,vfdFrequencyHz:40.5,status:"RUNNING"},{id:"FN-05",name:"Cooler Fan 5",zone:3,flowM3h:32e3,staticPressureMbar:58,motorCurrentA:170,speedPercent:75,vfdFrequencyHz:37.5,status:"RUNNING"},{id:"FN-06",name:"Cooler Fan 6",zone:3,flowM3h:31e3,staticPressureMbar:56,motorCurrentA:168,speedPercent:74,vfdFrequencyHz:37,status:"RUNNING"}],hoodDraftPid:{sp:-.8,pv:-.81,mv:64.5,kp:2.4,ti:12,td:1.8,autoMode:!0,history:[]},clinkerCrusher:{rpm:38,loadKw:88,clinkerSizeMm:22,bearingTempC:58,isRunning:!0},snowmanDetected:!1,tertiaryAirTempC:825,secondaryAirTempC:980,clinkerDischargeTempC:98}}getInitialBmsCems(){return{o2Percent:2.1,coPpm:340,noxMgNm3:560,so2MgNm3:32,dustMgNm3:11.5,flameIntensityPercent:98.4,uvScannerActive:!0,irScannerActive:!0,primaryAirPressureMbar:182,fuelShutoffValves:{sv101MainBlock:"OPEN",sv102BleedVent:"CLOSED",sv103BurnerBlock:"OPEN"},espHighVoltageActive:!0,espVoltageKv:78.5,highCoTripInterlockActive:!1,coTripCountdownSeconds:15,fuelSafetyTripped:!1}}getInitialAiPredictive(){const e=[];for(let t=0;t<=20;t++){const s=t*2.5,a=240+Math.sin(t/2)*25+(Math.random()*8-4);e.push({x:s,tempC:Math.round(a),coatingThicknessMm:Math.round(210-Math.sin(t/3)*35)})}return{shellAxialPoints:e,maxShellTempC:278,hotspotZone:null,hotspotActive:!1,c4BlockageRiskPercent:4.2,c4BlockageActive:!1,refractoryHealthIndexPercent:96.5,remainingUsefulLifeDays:284,anomalyList:["Nominal acoustic vibration profile","Refractory thermal boundary verified"]}}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(t=>t!==e)}}notify(){this.listeners.forEach(e=>e())}updateClock(){const e=new Date,t=String(e.getHours()).padStart(2,"0"),s=String(e.getMinutes()).padStart(2,"0"),a=String(e.getSeconds()).padStart(2,"0"),i=String(e.getMilliseconds()).padStart(3,"0");this.soeClockString=`${t}:${s}:${a}.${i}`}addSoe(e,t,s,a){this.updateClock();const i={id:"SOE-"+Date.now().toString(36)+Math.random().toString(36).substring(2,5),timestamp:this.soeClockString,source:t,code:e,description:s,severity:a};this.soeLog.unshift(i),this.soeLog.length>80&&this.soeLog.pop(),this.notify()}startSimulationLoops(){this.tickInterval=window.setInterval(()=>{this.updateClock(),this.simulatePreheaterPhysics(),this.simulateCoolerAndPidPhysics(),this.simulateBmsAndCemsGasKinetics(),this.simulateAiPredictiveDiagnostics(),this.evaluateMasterAlarms(),this.notify()},1e3),this.fastTickInterval=window.setInterval(()=>{this.fastPidIteration()},100)}simulatePreheaterPhysics(){const e=(a,i=.5)=>+(a+(Math.random()*i*2-i)).toFixed(1),t=this.preheater.idFan.damperPercent,s=-(50+t/100*12);this.preheater.idFan.draftInletMbar=e(s,.4),this.preheater.idFan.speedRpm=Math.round(980+(t-75)*1.5+(Math.random()*4-2)),this.preheater.idFan.motorPowerKw=Math.round(2350+t/100*200+(Math.random()*10-5)),this.faults.c4Plugging?(this.preheater.cyclones[3].status="BLOCKED",this.preheater.cyclones[3].draftPressure=e(-6.2,.5),this.preheater.cyclones[3].temperature=e(845,3),this.preheater.cyclones[3].materialFlowRate=18,this.preheater.cyclones[2].draftPressure=e(-48.5,.8)):(this.preheater.cyclones[0].temperature=e(312,1.2),this.preheater.cyclones[0].draftPressure=e(this.preheater.idFan.draftInletMbar+1.8,.3),this.preheater.cyclones[0].status="OPTIMAL",this.preheater.cyclones[1].temperature=e(494,1.5),this.preheater.cyclones[1].draftPressure=e(-42.8+(100-t)*.1,.3),this.preheater.cyclones[1].status="OPTIMAL",this.preheater.cyclones[2].temperature=e(662,1.8),this.preheater.cyclones[2].draftPressure=e(-32.1+(100-t)*.08,.2),this.preheater.cyclones[2].status="OPTIMAL",this.preheater.cyclones[3].temperature=e(795,2),this.preheater.cyclones[3].draftPressure=e(-22.4,.2),this.preheater.cyclones[3].status="OPTIMAL",this.preheater.cyclones[3].materialFlowRate=e(240,2),this.preheater.cyclones[4].temperature=e(882,2),this.preheater.cyclones[4].draftPressure=e(-16.8,.2),this.preheater.cyclones[4].status="OPTIMAL"),this.bmsCems.fuelSafetyTripped?(this.preheater.calciner.temperature=Math.max(480,+(this.preheater.calciner.temperature-6.5).toFixed(1)),this.preheater.calciner.fuelFlow=0,this.preheater.calciner.calcinationRate=Math.max(12,+(this.preheater.calciner.calcinationRate-2.8).toFixed(1)),this.preheater.calciner.flameDetected=!1):(this.preheater.calciner.temperature=e(905,2),this.preheater.calciner.fuelFlow=e(14.2,.15),this.preheater.calciner.calcinationRate=e(93.8,.2),this.preheater.calciner.flameDetected=!0),this.preheater.kilnInlet.temperature=e(1085,2.5),this.preheater.kilnInlet.draftPressure=e(-12.5,.2)}simulateCoolerAndPidPhysics(){const e=(t,s=.5)=>+(t+(Math.random()*s*2-s)).toFixed(1);this.faults.coolerStall?(this.cooler.grateSections[0].strokeRateSpM=0,this.cooler.grateSections[0].drivePressureBar=e(215,2.5),this.cooler.grateSections[0].isStalled=!0,this.cooler.grateSections[1].strokeRateSpM=0,this.cooler.grateSections[1].drivePressureBar=e(212,2.5),this.cooler.grateSections[1].isStalled=!0,this.cooler.grateSections[2].strokeRateSpM=0,this.cooler.grateSections[2].drivePressureBar=e(208,2),this.cooler.grateSections[2].isStalled=!0,this.cooler.clinkerDischargeTempC=Math.min(365,Math.round(this.cooler.clinkerDischargeTempC+14)),this.cooler.grateSections[2].clinkerTempC=this.cooler.clinkerDischargeTempC,this.cooler.clinkerCrusher.loadKw=Math.min(132,Math.round(this.cooler.clinkerCrusher.loadKw+4))):(this.cooler.grateSections[0].strokeRateSpM=e(20,.3),this.cooler.grateSections[0].drivePressureBar=e(145,1.2),this.cooler.grateSections[0].isStalled=!1,this.cooler.grateSections[1].strokeRateSpM=e(16,.2),this.cooler.grateSections[1].drivePressureBar=e(142,1),this.cooler.grateSections[1].isStalled=!1,this.cooler.grateSections[2].strokeRateSpM=e(13,.2),this.cooler.grateSections[2].drivePressureBar=e(138,1),this.cooler.grateSections[2].isStalled=!1,this.cooler.clinkerDischargeTempC>102?this.cooler.clinkerDischargeTempC=Math.max(98,Math.round(this.cooler.clinkerDischargeTempC-8)):this.cooler.clinkerDischargeTempC=Math.round(e(98,1.5)),this.cooler.grateSections[2].clinkerTempC=this.cooler.clinkerDischargeTempC,this.cooler.clinkerCrusher.loadKw=Math.round(e(88,2))),this.cooler.fans.forEach(t=>{t.flowM3h=Math.round(e(t.flowM3h,150)),t.staticPressureMbar=Math.round(e(t.staticPressureMbar,.8)),t.motorCurrentA=Math.round(e(t.motorCurrentA,1.2))})}fastPidIteration(){const e=this.cooler.hoodDraftPid,t=Math.random()*.06-.03,s=e.sp-(e.pv+t);if(e.autoMode){const a=e.kp*s,i=e.kp/e.ti*s*.1,o=e.kp*e.td*s/.1*.05,l=a+i+o;e.mv=Math.max(5,Math.min(95,e.mv+l*.4));const n=e.sp-s*.72+t;e.pv=+n.toFixed(3)}e.history.push({time:Date.now(),sp:e.sp,pv:e.pv,mv:e.mv}),e.history.length>60&&e.history.shift()}simulateBmsAndCemsGasKinetics(){const e=(t,s=.5)=>+(t+(Math.random()*s*2-s)).toFixed(1);this.faults.highCoSpike?(this.bmsCems.coPpm=Math.min(2650,Math.round(this.bmsCems.coPpm+280)),this.bmsCems.o2Percent=Math.max(.4,e(this.bmsCems.o2Percent-.25,.05)),this.bmsCems.coPpm>1500&&!this.bmsCems.fuelSafetyTripped&&(this.bmsCems.highCoTripInterlockActive=!0,this.bmsCems.coTripCountdownSeconds>0?(this.bmsCems.coTripCountdownSeconds-=1,f.playWarningChime(),this.addSoe("BMS-CO-WARN","CEMS-ANALYZER",`High Flue Gas CO=${this.bmsCems.coPpm} ppm > 1500 ppm! Trip Timer: ${this.bmsCems.coTripCountdownSeconds}s remaining`,"WARNING")):this.executeBmsTrip())):(this.bmsCems.fuelSafetyTripped?(this.bmsCems.coPpm=Math.max(45,Math.round(this.bmsCems.coPpm-60)),this.bmsCems.o2Percent=Math.min(18.5,e(this.bmsCems.o2Percent+.8,.2)),this.bmsCems.flameIntensityPercent=0):(this.bmsCems.coPpm=Math.round(e(340,18)),this.bmsCems.o2Percent=e(2.1,.08),this.bmsCems.flameIntensityPercent=e(98.4,.4)),this.bmsCems.noxMgNm3=Math.round(e(560,12)),this.bmsCems.so2MgNm3=Math.round(e(32,1.5)),this.bmsCems.highCoTripInterlockActive=!1,this.bmsCems.coTripCountdownSeconds=15)}executeBmsTrip(){this.bmsCems.fuelSafetyTripped=!0,this.bmsCems.fuelShutoffValves.sv101MainBlock="CLOSED",this.bmsCems.fuelShutoffValves.sv102BleedVent="OPEN",this.bmsCems.fuelShutoffValves.sv103BurnerBlock="CLOSED",this.bmsCems.espHighVoltageActive=!1,this.bmsCems.espVoltageKv=0,this.bmsCems.flameIntensityPercent=0,f.playBreakerOperation(!1),f.startTripAlarm(),this.addSoe("ANSI-86-BMS","SAFETY-INTERLOCK","CRITICAL HIGH CO EXPLOSION TRIP! Fuel Double Block & Bleed Closed. ESP 80kV De-energized","CRITICAL")}simulateAiPredictiveDiagnostics(){const e=this.aiPredictive.shellAxialPoints;let t=0;const s=[];for(let a=0;a<e.length;a++){const i=e[a];(this.faults.highCoSpike||this.faults.c4Plugging)&&(i.tempC=Math.round(i.tempC+(Math.random()*4-2))),this.faults.c4Plugging&&(a===7||a===8)&&(i.tempC=Math.min(418,i.tempC+12),i.coatingThicknessMm=Math.max(15,i.coatingThicknessMm-6)),i.tempC>t&&(t=i.tempC)}this.aiPredictive.maxShellTempC=t,t>380?(this.aiPredictive.hotspotActive=!0,this.aiPredictive.hotspotZone="Zone 3 (Calciner Transition)",s.push(`CRITICAL HOTSPOT: Shell Temp ${t}°C > 380°C threshold at Zone 3!`),this.aiPredictive.refractoryHealthIndexPercent=Math.max(45,Math.round(this.aiPredictive.refractoryHealthIndexPercent-2.5))):(this.aiPredictive.hotspotActive=!1,this.aiPredictive.hotspotZone=null),this.faults.c4Plugging?(this.aiPredictive.c4BlockageActive=!0,this.aiPredictive.c4BlockageRiskPercent=98.7,s.push("Cyclone C4 Cone meal bridging / blockage detected via Delta-P divergence")):(this.aiPredictive.c4BlockageActive=!1,this.aiPredictive.c4BlockageRiskPercent=4.2),this.faults.coolerStall&&s.push("Cooler Grate Drive Hydraulic Relief Limit exceeded (215 Bar)"),s.length===0&&(s.push("Refractory coating thickness within nominal acoustic limits"),s.push("Gas-solid velocity profile balanced across C1-C5 stages")),this.aiPredictive.anomalyList=s}evaluateMasterAlarms(){this.bmsCems.fuelSafetyTripped?(this.masterStatus="TRIP",this.masterMessage="EMERGENCY BMS TRIP: HIGH CO EXCEEDED 1500 PPM — ESP 80kV DE-ENERGIZED & FUEL ISOLATED"):this.faults.highCoSpike?(this.masterStatus="TRIP",this.masterMessage=`DANGER: HIGH CO SPIKE (${this.bmsCems.coPpm} PPM) — BMS INTERLOCK TIMEOUT: ${this.bmsCems.coTripCountdownSeconds}s`):this.faults.coolerStall?(this.masterStatus="WARNING",this.masterMessage="COOLER HYDRAULIC STALL: Grates halted, hydraulic pressure 215 Bar, clinker temp rising"):this.faults.c4Plugging?(this.masterStatus="WARNING",this.masterMessage="PREHEATER C4 BLOCKAGE: Cyclone C4 cone plugged, delta-P collapsed, firing air blasters"):(this.masterStatus="NORMAL",this.masterMessage="SYSTEM HEALTHY — 5-STAGE CYCLONE TOWER & COOLER DCS SYNCHRONIZED",f.stopAlarm())}triggerC4Plugging(){f.playClick(),this.faults.c4Plugging=!0,this.addSoe("C4-BLK-01","CYCLONE-C4","Cyclone C4 cone meal blockage detected (Delta-P dropped to -6.2 mbar)","WARNING"),window.setTimeout(()=>{this.fireAirBlaster(!0)},1500)}fireAirBlaster(e=!1){f.playAirBlasterBlast(),this.preheater.cyclones[3].airBlasterActive=!0,this.preheater.cyclones[4].airBlasterActive=!0,this.preheater.airBlasterLastFired="FIRED 8.5 BAR PULSE",this.addSoe("AB-PULSE","AIR-CANNON","Air Blaster Cannons 8.5 Bar discharged onto C4/C5 cones","NORMAL"),window.setTimeout(()=>{this.preheater.cyclones[3].airBlasterActive=!1,this.preheater.cyclones[4].airBlasterActive=!1,this.preheater.airBlasterLastFired="STANDBY",e&&this.faults.c4Plugging&&(this.faults.c4Plugging=!1,this.addSoe("C4-CLR","CYCLONE-C4","C4 cone blockage cleared by pneumatic air cannon shock wave","NORMAL"),f.playWarningChime()),this.notify()},2e3)}triggerHighCoSpike(){f.playClick(),this.faults.highCoSpike=!0,this.bmsCems.coPpm=2050,this.bmsCems.coTripCountdownSeconds=15,this.addSoe("CEMS-CO-HI","CEMS-ANALYZER","High CO spike injected: CO=2050 ppm exceeds 1500 ppm threshold","WARNING")}triggerCoolerStall(){f.playClick(),this.faults.coolerStall=!0,f.playWarningChime(),this.addSoe("CLR-STALL","HYD-SYSTEM","Cooler hydraulic drive relief overload (215 Bar), grates stalled","TRIP")}triggerEmergencyResetAndPurge(){f.playClick(),f.playGasPurge(),this.faults.purgeCycleActive=!0,this.addSoe("PURGE-SEQ","BMS-RESET","Emergency Reset & Nitrogen Purge cycle initiated (EN 746-2)","NORMAL"),window.setTimeout(()=>{this.faults.c4Plugging=!1,this.faults.highCoSpike=!1,this.faults.coolerStall=!1,this.faults.purgeCycleActive=!1,this.bmsCems.fuelSafetyTripped=!1,this.bmsCems.highCoTripInterlockActive=!1,this.bmsCems.coTripCountdownSeconds=15,this.bmsCems.coPpm=310,this.bmsCems.o2Percent=2.1,this.bmsCems.fuelShutoffValves.sv101MainBlock="OPEN",this.bmsCems.fuelShutoffValves.sv102BleedVent="CLOSED",this.bmsCems.fuelShutoffValves.sv103BurnerBlock="OPEN",this.bmsCems.espHighVoltageActive=!0,this.bmsCems.espVoltageKv=78.5,this.bmsCems.flameIntensityPercent=98.2,f.playBreakerOperation(!0),f.stopAlarm(),this.cooler.clinkerDischargeTempC=98,this.cooler.grateSections.forEach(e=>{e.isStalled=!1,e.drivePressureBar=145}),this.aiPredictive.refractoryHealthIndexPercent=98,this.aiPredictive.hotspotActive=!1,this.addSoe("SYS-RST","OPERATOR","Master Reset complete: BMS armed, ESP energized, nominal parameters restored","NORMAL"),this.notify()},2200)}setIdFanDamper(e){this.preheater.idFan.damperPercent=Math.max(0,Math.min(100,e)),this.notify()}setHoodDraftSp(e){this.cooler.hoodDraftPid.sp=+e.toFixed(2),this.notify()}}const h=new R;class B{container;state;constructor(e,t){const s=document.getElementById(e);if(!s)throw new Error(`Container #${e} not found`);this.container=s,this.state=t,this.render(),this.state.subscribe(()=>this.updateTelemetry())}render(){this.container.innerHTML=`
      <div class="preheater-panel">
        <div class="panel-header">
          <div class="panel-title">
            <i class="fa-solid fa-tower-observation text-cyan"></i>
            <span>5-STAGE CYCLONE PREHEATER TOWER & PRECALCINER MIMIC</span>
          </div>
          <div class="panel-badges">
            <span class="badge badge-info" id="ph-meal-feed">RAW MEAL: 240 t/h</span>
            <span class="badge badge-warning" id="ph-blaster-status">AIR BLASTERS: 8.5 BAR</span>
            <span class="badge badge-cyan" id="ph-fan-kw">ID FAN: 2480 kW</span>
          </div>
        </div>

        <div class="preheater-svg-wrap">
          <svg class="preheater-svg" viewBox="0 0 920 620" preserveAspectRatio="xMidYMid meet">
            <defs>
              <!-- Gradients for Cyclone Stages -->
              <linearGradient id="gradC1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#1e293b"/>
                <stop offset="100%" stop-color="#0f172a"/>
              </linearGradient>
              <linearGradient id="gradC2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#334155"/>
                <stop offset="100%" stop-color="#1e293b"/>
              </linearGradient>
              <linearGradient id="gradC3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#475569"/>
                <stop offset="100%" stop-color="#334155"/>
              </linearGradient>
              <linearGradient id="gradC4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#78350f"/>
                <stop offset="100%" stop-color="#451a03"/>
              </linearGradient>
              <linearGradient id="gradC5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#9a3412"/>
                <stop offset="100%" stop-color="#7c2d12"/>
              </linearGradient>
              <linearGradient id="gradCalciner" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ea580c"/>
                <stop offset="50%" stop-color="#dc2626"/>
                <stop offset="100%" stop-color="#7f1d1d"/>
              </linearGradient>

              <!-- Flame Filter -->
              <filter id="flame-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <!-- Shockwave pulse for Air Blaster -->
              <radialGradient id="blastWave">
                <stop offset="0%" stop-color="rgba(56, 189, 248, 0.9)"/>
                <stop offset="50%" stop-color="rgba(14, 165, 233, 0.4)"/>
                <stop offset="100%" stop-color="rgba(2, 132, 199, 0)"/>
              </radialGradient>
            </defs>

            <!-- Preheater Tower Structural Steel Framework -->
            <g class="tower-framework" stroke="#1e293b" stroke-width="2" opacity="0.4">
              <line x1="80" y1="40" x2="80" y2="580"/>
              <line x1="280" y1="40" x2="280" y2="580"/>
              <line x1="480" y1="40" x2="480" y2="580"/>
              <line x1="680" y1="40" x2="680" y2="580"/>
              <!-- Cross bracing -->
              <line x1="80" y1="120" x2="680" y2="120"/>
              <line x1="80" y1="230" x2="680" y2="230"/>
              <line x1="80" y1="340" x2="680" y2="340"/>
              <line x1="80" y1="450" x2="680" y2="450"/>
              <line x1="80" y1="560" x2="680" y2="560"/>
            </g>

            <!-- Gas Ducts (Connecting Stages) -->
            <!-- C1 to ID Fan Duct -->
            <path d="M 230 70 L 150 70 L 150 130 L 100 130" fill="none" stroke="#38bdf8" stroke-width="8" stroke-dasharray="6,4" class="gas-flow-fast"/>
            
            <!-- C2 to C1 Duct -->
            <path d="M 390 160 L 390 100 L 290 100 L 290 70" fill="none" stroke="#0ea5e9" stroke-width="7" stroke-dasharray="6,4" class="gas-flow-up"/>
            
            <!-- C3 to C2 Duct -->
            <path d="M 230 270 L 230 200 L 330 200 L 330 160" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="6,4" class="gas-flow-up"/>
            
            <!-- C4 to C3 Duct -->
            <path d="M 410 370 L 410 300 L 270 300 L 270 270" fill="none" stroke="#ea580c" stroke-width="9" stroke-dasharray="6,4" class="gas-flow-up"/>

            <!-- Calciner & C5 to C4 Duct -->
            <path d="M 520 420 L 520 370 L 410 370" fill="none" stroke="#dc2626" stroke-width="10" stroke-dasharray="6,4" class="gas-flow-hot"/>

            <!-- Kiln Riser Duct to Calciner -->
            <path d="M 590 560 L 590 460 L 540 460" fill="none" stroke="#ef4444" stroke-width="14" stroke-dasharray="6,4" class="gas-flow-blazing"/>

            <!-- Raw Meal Descending Chutes (Gravity Flow) -->
            <path d="M 250 115 L 340 180" fill="none" stroke="#fef08a" stroke-width="4" stroke-dasharray="4,4" class="meal-flow-down"/>
            <path d="M 370 215 L 250 290" fill="none" stroke="#fef08a" stroke-width="4" stroke-dasharray="4,4" class="meal-flow-down"/>
            <path d="M 250 325 L 390 390" fill="none" stroke="#fde047" stroke-width="5" stroke-dasharray="4,4" class="meal-flow-down"/>
            <!-- C4 meal chute to Calciner -->
            <path id="chute-c4-meal" d="M 390 435 L 480 470" fill="none" stroke="#fde047" stroke-width="5" stroke-dasharray="4,4" class="meal-flow-down"/>
            <!-- C5 meal chute to Kiln Inlet -->
            <path d="M 580 500 L 610 540" fill="none" stroke="#eab308" stroke-width="6" stroke-dasharray="4,4" class="meal-flow-down"/>

            <!-- ================= STAGE 1: CYCLONE C1 (Top Dual) ================= -->
            <g id="cyclone-c1" class="cyclone-group">
              <!-- Cyclone Body -->
              <rect x="210" y="45" width="80" height="40" rx="4" fill="url(#gradC1)" stroke="#38bdf8" stroke-width="2"/>
              <!-- Conical Bottom -->
              <polygon points="210,85 290,85 255,125 245,125" fill="url(#gradC1)" stroke="#38bdf8" stroke-width="2"/>
              <text x="250" y="70" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="700" font-family="monospace">C1 (TOP)</text>
            </g>

            <!-- ================= STAGE 2: CYCLONE C2 ================= -->
            <g id="cyclone-c2" class="cyclone-group">
              <rect x="330" y="145" width="85" height="45" rx="4" fill="url(#gradC2)" stroke="#0ea5e9" stroke-width="2"/>
              <polygon points="330,190 415,190 378,235 367,235" fill="url(#gradC2)" stroke="#0ea5e9" stroke-width="2"/>
              <text x="372" y="172" text-anchor="middle" fill="#0ea5e9" font-size="12" font-weight="700" font-family="monospace">C2 STAGE</text>
            </g>

            <!-- ================= STAGE 3: CYCLONE C3 ================= -->
            <g id="cyclone-c3" class="cyclone-group">
              <rect x="210" y="255" width="90" height="50" rx="4" fill="url(#gradC3)" stroke="#f59e0b" stroke-width="2"/>
              <polygon points="210,305 300,305 260,355 250,355" fill="url(#gradC3)" stroke="#f59e0b" stroke-width="2"/>
              <text x="255" y="285" text-anchor="middle" fill="#f59e0b" font-size="12" font-weight="700" font-family="monospace">C3 STAGE</text>
            </g>

            <!-- ================= STAGE 4: CYCLONE C4 ================= -->
            <g id="cyclone-c4" class="cyclone-group">
              <rect id="c4-body-rect" x="350" y="365" width="95" height="55" rx="4" fill="url(#gradC4)" stroke="#f97316" stroke-width="2"/>
              <polygon id="c4-cone-poly" points="350,420 445,420 403,475 392,475" fill="url(#gradC4)" stroke="#f97316" stroke-width="2"/>
              <text x="397" y="398" text-anchor="middle" fill="#f97316" font-size="12" font-weight="700" font-family="monospace">C4 STAGE</text>

              <!-- Air Blaster Cannon on C4 Cone -->
              <g id="c4-blaster-assembly" transform="translate(330, 440)">
                <rect x="0" y="0" width="18" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                <polygon points="18,3 28,1 28,11 18,9" fill="#0369a1"/>
                <circle cx="9" cy="6" r="2.5" fill="#f8fafc"/>
                <text x="-5" y="10" text-anchor="end" fill="#38bdf8" font-size="9" font-family="monospace">AB-41</text>
                <!-- Blast Wave Effect (Hidden normally) -->
                <circle id="c4-blast-circle" cx="28" cy="6" r="28" fill="url(#blastWave)" opacity="0" class="blast-anim"/>
              </g>

              <!-- Material Blockage Indicator (Flashing when blocked) -->
              <g id="c4-blockage-marker" opacity="0" transform="translate(385, 435)">
                <polygon points="0,0 24,0 12,20" fill="#ef4444" stroke="#fca5a5" stroke-width="1.5"/>
                <text x="12" y="14" text-anchor="middle" fill="#fff" font-size="10" font-weight="900">!</text>
              </g>
            </g>

            <!-- ================= STAGE 5: CYCLONE C5 (Bottom Stage) ================= -->
            <g id="cyclone-c5" class="cyclone-group">
              <rect x="520" y="405" width="95" height="55" rx="4" fill="url(#gradC5)" stroke="#ef4444" stroke-width="2"/>
              <polygon points="520,460 615,460 573,515 562,515" fill="url(#gradC5)" stroke="#ef4444" stroke-width="2"/>
              <text x="567" y="438" text-anchor="middle" fill="#ef4444" font-size="12" font-weight="700" font-family="monospace">C5 BOTTOM</text>

              <!-- Air Blaster Cannon on C5 Cone -->
              <g id="c5-blaster-assembly" transform="translate(620, 480)">
                <rect x="0" y="0" width="18" height="12" rx="2" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
                <polygon points="0,3 -10,1 -10,11 0,9" fill="#0369a1"/>
                <circle cx="9" cy="6" r="2.5" fill="#f8fafc"/>
                <text x="22" y="10" text-anchor="start" fill="#38bdf8" font-size="9" font-family="monospace">AB-51</text>
                <circle id="c5-blast-circle" cx="-10" cy="6" r="28" fill="url(#blastWave)" opacity="0" class="blast-anim"/>
              </g>
            </g>

            <!-- ================= PRECALCINER VESSEL ================= -->
            <g id="precalciner-vessel">
              <rect x="470" y="440" width="46" height="110" rx="10" fill="url(#gradCalciner)" stroke="#f87171" stroke-width="2.5" filter="url(#flame-glow)"/>
              
              <!-- Live Animated Flame Inside Calciner -->
              <g id="calciner-flame" transform="translate(482, 490)">
                <path d="M 11 35 Q 2 18 11 0 Q 20 18 11 35 Z" fill="#fef08a" opacity="0.95" class="flame-core"/>
                <path d="M 11 40 Q -2 20 11 -8 Q 24 20 11 40 Z" fill="#f97316" opacity="0.65" class="flame-outer"/>
              </g>

              <text x="493" y="465" text-anchor="middle" fill="#fff" font-size="10" font-weight="800" font-family="monospace">CALCINER</text>
              <text x="493" y="540" text-anchor="middle" fill="#fef08a" font-size="9" font-family="monospace" id="calciner-rate-txt">93.8%</text>
            </g>

            <!-- Tertiary Air Duct from Cooler -->
            <path d="M 680 570 L 680 480 L 516 480" fill="none" stroke="#fbbf24" stroke-width="10" stroke-dasharray="6,4" class="gas-flow-hot"/>
            <text x="640" y="472" fill="#fbbf24" font-size="10" font-weight="700" font-family="monospace">TERTIARY AIR (825°C)</text>

            <!-- Rotary Kiln Inlet Section -->
            <g id="kiln-inlet-graphic" transform="translate(580, 545)">
              <rect x="0" y="0" width="150" height="42" rx="4" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
              <rect x="25" y="6" width="100" height="30" rx="3" fill="#991b1b" opacity="0.8"/>
              <text x="75" y="24" text-anchor="middle" fill="#fee2e2" font-size="11" font-weight="800" font-family="monospace">ROTARY KILN INLET</text>
              <text x="75" y="35" text-anchor="middle" fill="#fca5a5" font-size="9" font-family="monospace" id="kiln-inlet-temp-svg">1085°C &bull; -12.5 mbar</text>
            </g>

            <!-- Preheater ID Fan (6.6 kV - 3150 kW) -->
            <g id="id-fan-assembly" transform="translate(35, 100)">
              <!-- Fan Scroll Housing -->
              <circle cx="45" cy="45" r="35" fill="#0f172a" stroke="#0284c7" stroke-width="3"/>
              <!-- Rotating Impeller Blades -->
              <g id="id-fan-impeller" class="rotating-fan">
                <line x1="45" y1="20" x2="45" y2="70" stroke="#38bdf8" stroke-width="4"/>
                <line x1="20" y1="45" x2="70" y2="45" stroke="#38bdf8" stroke-width="4"/>
                <line x1="27" y1="27" x2="63" y2="63" stroke="#38bdf8" stroke-width="4"/>
                <line x1="27" y1="63" x2="63" y2="27" stroke="#38bdf8" stroke-width="4"/>
                <circle cx="45" cy="45" r="8" fill="#e0f2fe"/>
              </g>
              <!-- Motor Box -->
              <rect x="85" y="25" width="40" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
              <text x="105" y="42" text-anchor="middle" fill="#38bdf8" font-size="8" font-weight="800" font-family="monospace">6.6 kV</text>
              <text x="105" y="55" text-anchor="middle" fill="#e0f2fe" font-size="8" font-family="monospace">3150kW</text>

              <text x="45" y="95" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="700" font-family="monospace">PREHEATER ID FAN</text>
              <text x="45" y="110" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="monospace" id="id-fan-subtext">985 RPM &bull; -58.2 mbar</text>
            </g>

            <!-- Live Telemetry Callout Overlay Badges -->
            <!-- C1 Callout -->
            <g id="callout-c1" transform="translate(295, 45)">
              <rect x="0" y="0" width="105" height="34" rx="4" fill="#0b1120" stroke="#38bdf8" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#38bdf8" font-size="9" font-weight="700" font-family="monospace">C1 TEMP / DRAFT</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-c1-val">312°C | -56.4mb</text>
            </g>

            <!-- C2 Callout -->
            <g id="callout-c2" transform="translate(425, 150)">
              <rect x="0" y="0" width="105" height="34" rx="4" fill="#0b1120" stroke="#0ea5e9" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#0ea5e9" font-size="9" font-weight="700" font-family="monospace">C2 TEMP / DRAFT</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-c2-val">494°C | -42.8mb</text>
            </g>

            <!-- C3 Callout -->
            <g id="callout-c3" transform="translate(95, 260)">
              <rect x="0" y="0" width="105" height="34" rx="4" fill="#0b1120" stroke="#f59e0b" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#f59e0b" font-size="9" font-weight="700" font-family="monospace">C3 TEMP / DRAFT</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-c3-val">662°C | -32.1mb</text>
            </g>

            <!-- C4 Callout -->
            <g id="callout-c4" transform="translate(235, 370)">
              <rect id="callout-c4-rect" x="0" y="0" width="108" height="34" rx="4" fill="#0b1120" stroke="#f97316" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#f97316" font-size="9" font-weight="700" font-family="monospace">C4 CONE TEMP</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-c4-val">795°C | -22.4mb</text>
            </g>

            <!-- Calciner Callout -->
            <g id="callout-calciner" transform="translate(525, 355)">
              <rect x="0" y="0" width="120" height="34" rx="4" fill="#0b1120" stroke="#ef4444" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#f87171" font-size="9" font-weight="700" font-family="monospace">CALCINER / FLAME</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-calc-val">905°C | 14.2 t/h</text>
            </g>

            <!-- C5 Callout -->
            <g id="callout-c5" transform="translate(625, 415)">
              <rect x="0" y="0" width="105" height="34" rx="4" fill="#0b1120" stroke="#ef4444" stroke-width="1.2" opacity="0.95"/>
              <text x="6" y="14" fill="#ef4444" font-size="9" font-weight="700" font-family="monospace">C5 BOTTOM</text>
              <text x="6" y="28" fill="#f8fafc" font-size="11" font-weight="800" font-family="monospace" id="tag-c5-val">882°C | -16.8mb</text>
            </g>
          </svg>
        </div>

        <!-- Preheater Interactive Operator Controls Strip -->
        <div class="preheater-control-strip">
          <div class="control-box">
            <span class="control-label">ID FAN INLET DAMPER</span>
            <div class="control-slider-wrap">
              <input type="range" min="20" max="100" value="78" id="slider-id-damper" class="range-slider">
              <span class="control-val font-mono text-cyan" id="txt-id-damper">78%</span>
            </div>
          </div>

          <div class="control-box">
            <span class="control-label">AIR BLASTER MANIFOLD (8.5 BAR)</span>
            <div class="blaster-actions">
              <button class="btn btn-secondary btn-sm" id="btn-fire-blaster">
                <i class="fa-solid fa-burst text-amber"></i>
                <span>Pulse Air Cannons (C4/C5)</span>
              </button>
              <span class="font-mono text-muted text-xs" id="lbl-blaster-time">READY</span>
            </div>
          </div>

          <div class="control-box">
            <span class="control-label">TERTIARY AIR SHUTTER</span>
            <span class="control-val font-mono text-amber">OPEN (100%) &bull; 825°C</span>
          </div>

          <div class="control-box">
            <span class="control-label">RAW MEAL WEIGH FEEDER</span>
            <span class="control-val font-mono text-green">240.0 t/h &bull; RUNNING</span>
          </div>
        </div>
      </div>
    `;const e=document.getElementById("slider-id-damper");e&&e.addEventListener("input",s=>{const a=+s.target.value;this.state.setIdFanDamper(a);const i=document.getElementById("txt-id-damper");i&&(i.textContent=`${a}%`)});const t=document.getElementById("btn-fire-blaster");t&&t.addEventListener("click",()=>{this.state.fireAirBlaster(!1)})}updateTelemetry(){const e=this.state.preheater,t=document.getElementById("ph-meal-feed");t&&(t.textContent=`RAW MEAL: ${e.rawMealFeedTph} t/h`);const s=document.getElementById("ph-fan-kw");s&&(s.textContent=`ID FAN: ${e.idFan.motorPowerKw} kW`);const a=e.cyclones[0],i=document.getElementById("tag-c1-val");i&&(i.textContent=`${a.temperature}°C | ${a.draftPressure}mb`);const o=e.cyclones[1],l=document.getElementById("tag-c2-val");l&&(l.textContent=`${o.temperature}°C | ${o.draftPressure}mb`);const n=e.cyclones[2],r=document.getElementById("tag-c3-val");r&&(r.textContent=`${n.temperature}°C | ${n.draftPressure}mb`);const d=e.cyclones[3],c=document.getElementById("tag-c4-val");c&&(c.textContent=`${d.temperature}°C | ${d.draftPressure}mb`);const p=e.cyclones[4],m=document.getElementById("tag-c5-val");m&&(m.textContent=`${p.temperature}°C | ${p.draftPressure}mb`);const g=document.getElementById("tag-calc-val");g&&(g.textContent=`${e.calciner.temperature}°C | ${e.calciner.fuelFlow} t/h`);const u=document.getElementById("calciner-rate-txt");u&&(u.textContent=`${e.calciner.calcinationRate}%`);const b=document.getElementById("calciner-flame");b&&(b.style.display=e.calciner.flameDetected?"block":"none");const x=document.getElementById("kiln-inlet-temp-svg");x&&(x.textContent=`${e.kilnInlet.temperature}°C • ${e.kilnInlet.draftPressure} mbar`);const v=document.getElementById("id-fan-subtext");v&&(v.textContent=`${e.idFan.speedRpm} RPM • ${e.idFan.draftInletMbar} mbar`);const E=document.getElementById("c4-blockage-marker"),S=document.getElementById("callout-c4-rect");E&&E.setAttribute("opacity",this.state.faults.c4Plugging?"1":"0"),S&&(S.setAttribute("stroke",this.state.faults.c4Plugging?"#ef4444":"#f97316"),S.setAttribute("stroke-width",this.state.faults.c4Plugging?"3":"1.2"));const y=document.getElementById("c4-blast-circle"),C=document.getElementById("c5-blast-circle"),k=document.getElementById("lbl-blaster-time");if(y&&C){const w=d.airBlasterActive||p.airBlasterActive;y.setAttribute("opacity",w?"1":"0"),C.setAttribute("opacity",w?"1":"0"),k&&(k.textContent=w?"FIRING CANNONS (8.5 BAR)!":e.airBlasterLastFired,k.className=w?"font-mono text-cyan font-bold text-xs":"font-mono text-muted text-xs")}}}class L{container;state;constructor(e,t){const s=document.getElementById(e);if(!s)throw new Error(`Container #${e} not found`);this.container=s,this.state=t,this.render(),this.state.subscribe(()=>this.updateTelemetry())}render(){this.container.innerHTML=`
      <div class="cooler-panel">
        <div class="panel-header">
          <div class="panel-title">
            <i class="fa-solid fa-snowflake text-cyan"></i>
            <span>RECIPROCATING GRATE COOLER & PID HOOD DRAFT CONTROL</span>
          </div>
          <div class="panel-badges">
            <span class="badge badge-warning" id="clr-discharge-badge">DISCHARGE TEMP: 98°C</span>
            <span class="badge badge-info" id="clr-hyd-badge">HYDRAULIC: 145 BAR</span>
            <span class="badge badge-cyan" id="clr-sec-air-badge">SECONDARY AIR: 980°C</span>
          </div>
        </div>

        <div class="cooler-body-grid">
          <!-- Left: Grate Cooler Animated Process SVG Mimic -->
          <div class="cooler-mimic-wrap">
            <svg class="cooler-svg" viewBox="0 0 740 380" preserveAspectRatio="xMidYMid meet">
              <defs>
                <!-- Clinker Bed Heat Gradient -->
                <linearGradient id="clinkerHeat" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="#ef4444"/>
                  <stop offset="25%" stop-color="#f97316"/>
                  <stop offset="60%" stop-color="#eab308"/>
                  <stop offset="85%" stop-color="#71717a"/>
                  <stop offset="100%" stop-color="#3f3f46"/>
                </linearGradient>

                <!-- Undergrate Air Streams -->
                <pattern id="airPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 10 20 L 10 0" stroke="rgba(56, 189, 248, 0.4)" stroke-width="2" stroke-dasharray="3,3"/>
                </pattern>
              </defs>

              <!-- Cooler Casing Structure -->
              <rect x="30" y="40" width="680" height="260" rx="6" fill="#0f172a" stroke="#1e293b" stroke-width="2"/>

              <!-- Kiln Hood & Drop Chute -->
              <polygon points="30,40 160,40 160,110 30,150" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
              <text x="85" y="75" fill="#fca5a5" font-size="10" font-weight="700" font-family="monospace">KILN HOOD</text>
              <text x="85" y="92" fill="#ef4444" font-size="12" font-weight="800" font-family="monospace">1400°C DROP</text>

              <!-- Snowman Acoustic Detector Beam -->
              <line x1="45" y1="125" x2="145" y2="125" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" id="snowman-beam"/>
              <circle cx="45" cy="125" r="3" fill="#10b981"/>
              <text x="95" y="120" text-anchor="middle" fill="#10b981" font-size="8" font-family="monospace" id="snowman-lbl">SNOWMAN: CLEAR</text>

              <!-- Secondary & Tertiary Air Hot Offtake Ducts (To Kiln & Calciner) -->
              <g transform="translate(100, 40)">
                <path d="M 0 0 L 0 -25 L 80 -25" fill="none" stroke="#f59e0b" stroke-width="8" stroke-dasharray="4,2"/>
                <text x="85" y="-20" fill="#f59e0b" font-size="9" font-family="monospace" font-weight="700">SEC AIR 980°C</text>
              </g>

              <!-- Grate Section 1: Inflow High-Temp Zone -->
              <g id="grate-section-1" transform="translate(120, 150)">
                <rect x="0" y="0" width="160" height="25" rx="3" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
                <!-- Moving Grate Plates -->
                <g class="grate-stroke-anim">
                  <line x1="15" y1="2" x2="15" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="35" y1="2" x2="35" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="55" y1="2" x2="55" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="75" y1="2" x2="75" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="95" y1="2" x2="95" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="115" y1="2" x2="115" y2="23" stroke="#f87171" stroke-width="3"/>
                  <line x1="135" y1="2" x2="135" y2="23" stroke="#f87171" stroke-width="3"/>
                </g>
                <text x="80" y="38" text-anchor="middle" fill="#f87171" font-size="9" font-family="monospace" font-weight="700" id="g1-telemetry">GRATE 1: 20 SpM | 145 Bar</text>
              </g>

              <!-- Grate Section 2: Intermediate Cooling Zone -->
              <g id="grate-section-2" transform="translate(295, 160)">
                <rect x="0" y="0" width="170" height="25" rx="3" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
                <g class="grate-stroke-anim">
                  <line x1="15" y1="2" x2="15" y2="23" stroke="#fbbf24" stroke-width="3"/>
                  <line x1="40" y1="2" x2="40" y2="23" stroke="#fbbf24" stroke-width="3"/>
                  <line x1="65" y1="2" x2="65" y2="23" stroke="#fbbf24" stroke-width="3"/>
                  <line x1="90" y1="2" x2="90" y2="23" stroke="#fbbf24" stroke-width="3"/>
                  <line x1="115" y1="2" x2="115" y2="23" stroke="#fbbf24" stroke-width="3"/>
                  <line x1="140" y1="2" x2="140" y2="23" stroke="#fbbf24" stroke-width="3"/>
                </g>
                <text x="85" y="38" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="monospace" font-weight="700" id="g2-telemetry">GRATE 2: 16 SpM | 142 Bar</text>
              </g>

              <!-- Grate Section 3: Final Discharge Cooling Zone -->
              <g id="grate-section-3" transform="translate(480, 170)">
                <rect x="0" y="0" width="160" height="25" rx="3" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5"/>
                <g class="grate-stroke-anim">
                  <line x1="15" y1="2" x2="15" y2="23" stroke="#38bdf8" stroke-width="3"/>
                  <line x1="40" y1="2" x2="40" y2="23" stroke="#38bdf8" stroke-width="3"/>
                  <line x1="65" y1="2" x2="65" y2="23" stroke="#38bdf8" stroke-width="3"/>
                  <line x1="90" y1="2" x2="90" y2="23" stroke="#38bdf8" stroke-width="3"/>
                  <line x1="115" y1="2" x2="115" y2="23" stroke="#38bdf8" stroke-width="3"/>
                  <line x1="140" y1="2" x2="140" y2="23" stroke="#38bdf8" stroke-width="3"/>
                </g>
                <text x="80" y="38" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="monospace" font-weight="700" id="g3-telemetry">GRATE 3: 13 SpM | 138 Bar</text>
              </g>

              <!-- Continuous Clinker Bed Resting On Top of Grates -->
              <path id="clinker-bed-path" d="M 120 150 Q 280 155 480 168 L 640 178 L 640 162 Q 480 152 280 138 L 120 132 Z" fill="url(#clinkerHeat)" opacity="0.9"/>

              <!-- Clinker Discharge Roller Crusher Assembly -->
              <g id="clinker-crusher" transform="translate(645, 175)">
                <!-- Toothed Roller 1 -->
                <circle cx="16" cy="16" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                <circle cx="16" cy="16" r="4" fill="#f8fafc"/>
                <g class="rotating-fan">
                  <line x1="16" y1="4" x2="16" y2="28" stroke="#0284c7" stroke-width="2"/>
                  <line x1="4" y1="16" x2="28" y2="16" stroke="#0284c7" stroke-width="2"/>
                </g>

                <!-- Toothed Roller 2 -->
                <circle cx="42" cy="16" r="14" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
                <circle cx="42" cy="16" r="4" fill="#f8fafc"/>
                <g class="rotating-fan" style="animation-direction: reverse;">
                  <line x1="42" y1="4" x2="42" y2="28" stroke="#0284c7" stroke-width="2"/>
                  <line x1="30" y1="16" x2="54" y2="16" stroke="#0284c7" stroke-width="2"/>
                </g>

                <text x="29" y="42" text-anchor="middle" fill="#38bdf8" font-size="8" font-family="monospace">CRUSHER: 38 RPM</text>
                <text x="29" y="52" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="monospace">LOAD: 88 kW</text>
              </g>

              <!-- 6 Under-Grate Cooling Air Fans (FN-01 to FN-06) -->
              <g id="undergrate-fans" transform="translate(60, 230)">
                <!-- Fan 1 & 2 (Zone 1) -->
                <rect x="60" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#ef4444" stroke-width="1.2"/>
                <text x="90" y="26" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="700" font-family="monospace">FN-01</text>
                <text x="90" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn01-txt">42k m³/h</text>
                <path d="M 90 10 L 90 -45" stroke="#ef4444" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>

                <rect x="135" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#ef4444" stroke-width="1.2"/>
                <text x="165" y="26" text-anchor="middle" fill="#ef4444" font-size="8" font-weight="700" font-family="monospace">FN-02</text>
                <text x="165" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn02-txt">41.5k m³/h</text>
                <path d="M 165 10 L 165 -45" stroke="#ef4444" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>

                <!-- Fan 3 & 4 (Zone 2) -->
                <rect x="245" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#f59e0b" stroke-width="1.2"/>
                <text x="275" y="26" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="700" font-family="monospace">FN-03</text>
                <text x="275" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn03-txt">38k m³/h</text>
                <path d="M 275 10 L 275 -35" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>

                <rect x="320" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#f59e0b" stroke-width="1.2"/>
                <text x="350" y="26" text-anchor="middle" fill="#f59e0b" font-size="8" font-weight="700" font-family="monospace">FN-04</text>
                <text x="350" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn04-txt">37.5k m³/h</text>
                <path d="M 350 10 L 350 -35" stroke="#f59e0b" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>

                <!-- Fan 5 & 6 (Zone 3) -->
                <rect x="430" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#0ea5e9" stroke-width="1.2"/>
                <text x="460" y="26" text-anchor="middle" fill="#0ea5e9" font-size="8" font-weight="700" font-family="monospace">FN-05</text>
                <text x="460" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn05-txt">32k m³/h</text>
                <path d="M 460 10 L 460 -25" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>

                <rect x="505" y="10" width="60" height="40" rx="3" fill="#131d35" stroke="#0ea5e9" stroke-width="1.2"/>
                <text x="535" y="26" text-anchor="middle" fill="#0ea5e9" font-size="8" font-weight="700" font-family="monospace">FN-06</text>
                <text x="535" y="38" text-anchor="middle" fill="#94a3b8" font-size="7" font-family="monospace" id="fn06-txt">31k m³/h</text>
                <path d="M 535 10 L 535 -25" stroke="#0ea5e9" stroke-width="3" stroke-dasharray="3,3" class="gas-flow-up"/>
              </g>
            </svg>
          </div>

          <!-- Right: Closed-Loop PID Kiln Hood Draft Controller Panel -->
          <div class="cooler-pid-card">
            <div class="pid-card-header">
              <span class="pid-title">
                <i class="fa-solid fa-gauge-high text-cyan"></i>
                <span>KILN HOOD DRAFT PID CONTROLLER</span>
              </span>
              <span class="badge badge-success" id="pid-mode-badge">AUTO (CLOSED-LOOP)</span>
            </div>

            <!-- PID Gauge Readouts -->
            <div class="pid-readouts-grid">
              <div class="pid-stat-box">
                <span class="stat-lbl">SETPOINT (SP)</span>
                <span class="stat-val font-mono text-cyan" id="pid-sp-val">-0.80 mbar</span>
              </div>
              <div class="pid-stat-box">
                <span class="stat-lbl">PROCESS VAR (PV)</span>
                <span class="stat-val font-mono text-green" id="pid-pv-val">-0.81 mbar</span>
              </div>
              <div class="pid-stat-box">
                <span class="stat-lbl">CONTROL OUTPUT (MV)</span>
                <span class="stat-val font-mono text-amber" id="pid-mv-val">64.5%</span>
              </div>
            </div>

            <!-- Live SVG Mini-Trend Chart -->
            <div class="pid-trend-box">
              <div class="trend-legend">
                <span class="legend-item"><span class="legend-dot cyan"></span> SP (-0.80)</span>
                <span class="legend-item"><span class="legend-dot green"></span> PV (Actual)</span>
                <span class="legend-item"><span class="legend-dot amber"></span> MV (Damper)</span>
              </div>
              <svg class="pid-trend-svg" id="pid-trend-chart" viewBox="0 0 320 90" preserveAspectRatio="none">
                <!-- Trend grid lines -->
                <line x1="0" y1="20" x2="320" y2="20" stroke="#1e293b" stroke-width="1"/>
                <line x1="0" y1="45" x2="320" y2="45" stroke="#283756" stroke-width="1" stroke-dasharray="2,2"/>
                <line x1="0" y1="70" x2="320" y2="70" stroke="#1e293b" stroke-width="1"/>

                <!-- Dynamic paths -->
                <path id="trend-path-sp" d="" fill="none" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="3,3"/>
                <path id="trend-path-pv" d="" fill="none" stroke="#10b981" stroke-width="2"/>
                <path id="trend-path-mv" d="" fill="none" stroke="#f59e0b" stroke-width="1.2" opacity="0.75"/>
              </svg>
            </div>

            <!-- PID Operator Controls -->
            <div class="pid-controls-strip">
              <div class="sp-slider-row">
                <label for="slider-pid-sp" class="text-xs text-muted">ADJUST DRAFT SETPOINT (SP):</label>
                <div class="sp-slider-inline">
                  <input type="range" id="slider-pid-sp" min="-1.50" max="-0.20" step="0.05" value="-0.80" class="range-slider">
                  <span class="font-mono text-cyan text-sm" id="txt-slider-sp">-0.80 mbar</span>
                </div>
              </div>

              <div class="pid-tuning-params font-mono text-xs">
                <span>Kp: <b>2.40</b></span>
                <span>Ti: <b>12.0s</b></span>
                <span>Td: <b>1.80s</b></span>
                <span>Deadband: <b>&plusmn;0.02 mb</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const e=document.getElementById("slider-pid-sp");e&&e.addEventListener("input",t=>{const s=+t.target.value;this.state.setHoodDraftSp(s);const a=document.getElementById("txt-slider-sp");a&&(a.textContent=`${s.toFixed(2)} mbar`)})}updateTelemetry(){const e=this.state.cooler,t=document.getElementById("clr-discharge-badge");t&&(t.textContent=`DISCHARGE TEMP: ${e.clinkerDischargeTempC}°C`,t.className=e.clinkerDischargeTempC>150?"badge badge-danger":"badge badge-warning");const s=document.getElementById("clr-hyd-badge");s&&(s.textContent=`HYDRAULIC: ${e.grateSections[0].drivePressureBar} BAR`,s.className=e.grateSections[0].drivePressureBar>180?"badge badge-danger":"badge badge-info");const a=e.grateSections[0],i=document.getElementById("g1-telemetry");i&&(i.textContent=`GRATE 1: ${a.strokeRateSpM} SpM | ${a.drivePressureBar} Bar`,i.setAttribute("fill",a.isStalled?"#ef4444":"#f87171"));const o=e.grateSections[1],l=document.getElementById("g2-telemetry");l&&(l.textContent=`GRATE 2: ${o.strokeRateSpM} SpM | ${o.drivePressureBar} Bar`);const n=e.grateSections[2],r=document.getElementById("g3-telemetry");r&&(r.textContent=`GRATE 3: ${n.strokeRateSpM} SpM | ${n.drivePressureBar} Bar`);const d=document.getElementById("fn01-txt");d&&(d.textContent=`${(e.fans[0].flowM3h/1e3).toFixed(1)}k m³/h`);const c=document.getElementById("fn02-txt");c&&(c.textContent=`${(e.fans[1].flowM3h/1e3).toFixed(1)}k m³/h`);const p=document.getElementById("fn03-txt");p&&(p.textContent=`${(e.fans[2].flowM3h/1e3).toFixed(1)}k m³/h`);const m=document.getElementById("fn04-txt");m&&(m.textContent=`${(e.fans[3].flowM3h/1e3).toFixed(1)}k m³/h`);const g=document.getElementById("fn05-txt");g&&(g.textContent=`${(e.fans[4].flowM3h/1e3).toFixed(1)}k m³/h`);const u=document.getElementById("fn06-txt");u&&(u.textContent=`${(e.fans[5].flowM3h/1e3).toFixed(1)}k m³/h`);const b=document.getElementById("pid-sp-val");b&&(b.textContent=`${e.hoodDraftPid.sp.toFixed(2)} mbar`);const x=document.getElementById("pid-pv-val");x&&(x.textContent=`${e.hoodDraftPid.pv.toFixed(2)} mbar`);const v=document.getElementById("pid-mv-val");v&&(v.textContent=`${e.hoodDraftPid.mv.toFixed(1)}%`),this.renderPidTrendChart()}renderPidTrendChart(){const e=this.state.cooler.hoodDraftPid.history;if(e.length<2)return;const t=320,s=90,a=-1.5,i=0,o=m=>{const g=(m-a)/(i-a);return s-g*(s-15)-7.5};let l="",n="",r="";e.forEach((m,g)=>{const u=g/(e.length-1)*t,b=o(m.sp),x=o(m.pv),v=s-m.mv/100*(s-15)-7.5;g===0?(l+=`M ${u.toFixed(1)} ${b.toFixed(1)}`,n+=`M ${u.toFixed(1)} ${x.toFixed(1)}`,r+=`M ${u.toFixed(1)} ${v.toFixed(1)}`):(l+=` L ${u.toFixed(1)} ${b.toFixed(1)}`,n+=` L ${u.toFixed(1)} ${x.toFixed(1)}`,r+=` L ${u.toFixed(1)} ${v.toFixed(1)}`)});const d=document.getElementById("trend-path-sp");d&&d.setAttribute("d",l);const c=document.getElementById("trend-path-pv");c&&c.setAttribute("d",n);const p=document.getElementById("trend-path-mv");p&&p.setAttribute("d",r)}}class N{container;state;constructor(e,t){const s=document.getElementById(e);if(!s)throw new Error(`Container #${e} not found`);this.container=s,this.state=t,this.render(),this.state.subscribe(()=>this.updateTelemetry())}render(){this.container.innerHTML=`
      <div class="bms-cems-panel">
        <div class="panel-header">
          <div class="panel-title">
            <i class="fa-solid fa-fire-burner text-amber"></i>
            <span>BMS BURNER MANAGEMENT & CEMS FLUE GAS ANALYZER</span>
          </div>
          <div class="panel-badges">
            <span class="badge badge-success" id="esp-status-badge">ESP 80kV: ENERGIZED</span>
            <span class="badge badge-info" id="flame-status-badge">FLAME: 98.4% (DUAL UV/IR)</span>
          </div>
        </div>

        <div class="bms-cems-grid">
          <!-- CEMS Gas Telemetry Card -->
          <div class="cems-card">
            <div class="subcard-header">
              <span class="subcard-title"><i class="fa-solid fa-smog text-cyan"></i> CEMS Flue Gas Emission Telemetry</span>
              <span class="text-xs font-mono text-muted">Sampling: Kiln Inlet & C1 Exit</span>
            </div>

            <div class="cems-metrics-grid">
              <!-- O2 -->
              <div class="gas-metric-box">
                <div class="gas-meta">
                  <span class="gas-name">OXYGEN (O2)</span>
                  <span class="gas-limit text-muted">Setpoint: 2.0 - 2.5%</span>
                </div>
                <div class="gas-value-row">
                  <span class="gas-num font-mono text-cyan" id="cems-o2-val">2.1 %</span>
                  <span class="gas-status-pill pill-normal">OPTIMAL</span>
                </div>
                <div class="gas-bar-bg">
                  <div class="gas-bar-fill fill-cyan" id="bar-o2" style="width: 21%;"></div>
                </div>
              </div>

              <!-- CO with Critical Interlock Highlight -->
              <div class="gas-metric-box" id="box-co-metric">
                <div class="gas-meta">
                  <span class="gas-name">CARBON MONOXIDE (CO)</span>
                  <span class="gas-limit text-amber">Trip Limit: 1500 ppm</span>
                </div>
                <div class="gas-value-row">
                  <span class="gas-num font-mono text-green" id="cems-co-val">340 ppm</span>
                  <span class="gas-status-pill pill-normal" id="cems-co-pill">NORMAL</span>
                </div>
                <div class="gas-bar-bg">
                  <div class="gas-bar-fill fill-green" id="bar-co" style="width: 14%;"></div>
                </div>
              </div>

              <!-- NOx -->
              <div class="gas-metric-box">
                <div class="gas-meta">
                  <span class="gas-name">NITROGEN OXIDES (NOx)</span>
                  <span class="gas-limit text-muted">Limit: 800 mg/Nm³</span>
                </div>
                <div class="gas-value-row">
                  <span class="gas-num font-mono text-muted" id="cems-nox-val">560 mg/Nm³</span>
                  <span class="gas-status-pill pill-normal">COMPLIANT</span>
                </div>
                <div class="gas-bar-bg">
                  <div class="gas-bar-fill fill-amber" id="bar-nox" style="width: 70%;"></div>
                </div>
              </div>

              <!-- SO2 -->
              <div class="gas-metric-box">
                <div class="gas-meta">
                  <span class="gas-name">SULFUR DIOXIDE (SO2)</span>
                  <span class="gas-limit text-muted">Limit: 200 mg/Nm³</span>
                </div>
                <div class="gas-value-row">
                  <span class="gas-num font-mono text-muted" id="cems-so2-val">32 mg/Nm³</span>
                  <span class="gas-status-pill pill-normal">LOW</span>
                </div>
                <div class="gas-bar-bg">
                  <div class="gas-bar-fill fill-cyan" id="bar-so2" style="width: 16%;"></div>
                </div>
              </div>
            </div>

            <!-- High CO Countdown Banner (Hidden until triggered) -->
            <div class="co-countdown-banner" id="co-countdown-banner" style="display: none;">
              <div class="countdown-pulse-icon">
                <i class="fa-solid fa-triangle-exclamation text-red"></i>
              </div>
              <div class="countdown-content">
                <div class="countdown-title text-red font-bold">
                  HIGH FLUE GAS CO TRIP INTERLOCK ARMED!
                </div>
                <div class="countdown-desc text-xs text-muted">
                  CO level exceeds 1500 ppm explosion threshold (NFPA 86 / EN 746-2). Automatic ESP power cutoff & fuel trip countdown:
                </div>
              </div>
              <div class="countdown-timer font-mono text-red" id="co-countdown-timer">
                15s
              </div>
            </div>
          </div>

          <!-- BMS Safety & Fuel Shutoff Train Card -->
          <div class="bms-card">
            <div class="subcard-header">
              <span class="subcard-title"><i class="fa-solid fa-shield-halved text-amber"></i> BMS Safety Fuel Train & Flame Interlocks</span>
              <span class="text-xs font-mono text-muted">ANSI 86 / NFPA 86 Certified</span>
            </div>

            <!-- Double Block & Bleed Visual Schematic -->
            <div class="dbb-schematic-wrap">
              <span class="dbb-title">FUEL TRAIN: DOUBLE BLOCK & BLEED (DB&B) SAFETY VALVES</span>
              <div class="dbb-flow-line">
                <!-- Supply Point -->
                <div class="dbb-node">
                  <span class="node-label">FUEL SUPPLY</span>
                  <i class="fa-solid fa-gas-pump text-cyan"></i>
                </div>

                <div class="pipe-segment"></div>

                <!-- SV-101: Main Block Valve -->
                <div class="valve-box" id="valve-sv101">
                  <span class="valve-tag">SV-101</span>
                  <div class="valve-icon-wrap open" id="icon-sv101">
                    <i class="fa-solid fa-circle-dot"></i>
                  </div>
                  <span class="valve-state font-mono text-green" id="txt-sv101">OPEN</span>
                  <span class="valve-desc text-muted">Main Block</span>
                </div>

                <!-- Bleed Vent Tee -->
                <div class="bleed-tee-wrap">
                  <div class="pipe-segment"></div>
                  <!-- Vertical Bleed Pipe to SV-102 -->
                  <div class="bleed-pipe-up">
                    <div class="valve-box vertical" id="valve-sv102">
                      <span class="valve-tag">SV-102</span>
                      <div class="valve-icon-wrap closed" id="icon-sv102">
                        <i class="fa-solid fa-xmark"></i>
                      </div>
                      <span class="valve-state font-mono text-green" id="txt-sv102">CLOSED</span>
                      <span class="valve-desc text-muted">Bleed Vent</span>
                    </div>
                  </div>
                </div>

                <div class="pipe-segment"></div>

                <!-- SV-103: Burner Block Valve -->
                <div class="valve-box" id="valve-sv103">
                  <span class="valve-tag">SV-103</span>
                  <div class="valve-icon-wrap open" id="icon-sv103">
                    <i class="fa-solid fa-circle-dot"></i>
                  </div>
                  <span class="valve-state font-mono text-green" id="txt-sv103">OPEN</span>
                  <span class="valve-desc text-muted">Burner Block</span>
                </div>

                <div class="pipe-segment"></div>

                <!-- Burner Head -->
                <div class="dbb-node burner">
                  <span class="node-label">KILN MAIN BURNER</span>
                  <i class="fa-solid fa-fire text-amber"></i>
                </div>
              </div>
            </div>

            <!-- Optical Flame Scanners & ESP High Voltage Safety -->
            <div class="bms-subs-grid">
              <div class="bms-sub-box">
                <span class="sub-label">OPTICAL FLAME SCANNERS</span>
                <div class="scanner-status-row">
                  <span class="scanner-item"><i class="fa-solid fa-eye text-cyan"></i> UV SCANNER: <b>ACTIVE (98%)</b></span>
                  <span class="scanner-item"><i class="fa-solid fa-bullseye text-amber"></i> IR SCANNER: <b>ACTIVE (99%)</b></span>
                </div>
                <span class="text-xs text-muted">Self-checking optical shutter frequency 1 Hz</span>
              </div>

              <div class="bms-sub-box">
                <span class="sub-label">ELECTROSTATIC PRECIPITATOR (ESP)</span>
                <div class="esp-status-row">
                  <span class="font-mono text-cyan" id="bms-esp-kv">80 kV BUS: 78.5 kV</span>
                  <span class="badge badge-success" id="bms-esp-badge">ENERGIZED</span>
                </div>
                <span class="text-xs text-muted">Auto-tripped on High CO (>1500 ppm) to prevent arc ignition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}updateTelemetry(){const e=this.state.bmsCems,t=document.getElementById("cems-o2-val");t&&(t.textContent=`${e.o2Percent.toFixed(1)} %`);const s=document.getElementById("bar-o2");s&&(s.style.width=`${Math.min(100,e.o2Percent*10)}%`);const a=document.getElementById("cems-co-val"),i=document.getElementById("cems-co-pill"),o=document.getElementById("bar-co");if(a&&i&&o){a.textContent=`${e.coPpm} ppm`;const y=Math.min(100,e.coPpm/2500*100);o.style.width=`${y}%`,e.coPpm>1500?(a.className="gas-num font-mono text-red font-bold",i.textContent="EXPLOSION RISK",i.className="gas-status-pill pill-danger",o.className="gas-bar-fill fill-red"):e.coPpm>1e3?(a.className="gas-num font-mono text-amber font-bold",i.textContent="ELEVATED",i.className="gas-status-pill pill-warning",o.className="gas-bar-fill fill-amber"):(a.className="gas-num font-mono text-green",i.textContent="NORMAL",i.className="gas-status-pill pill-normal",o.className="gas-bar-fill fill-green")}const l=document.getElementById("cems-nox-val");l&&(l.textContent=`${e.noxMgNm3} mg/Nm³`);const n=document.getElementById("cems-so2-val");n&&(n.textContent=`${e.so2MgNm3} mg/Nm³`);const r=document.getElementById("co-countdown-banner"),d=document.getElementById("co-countdown-timer");r&&d&&(e.highCoTripInterlockActive&&!e.fuelSafetyTripped?(r.style.display="flex",d.textContent=`${e.coTripCountdownSeconds}s`):r.style.display="none");const c=document.getElementById("icon-sv101"),p=document.getElementById("txt-sv101");if(c&&p){const y=e.fuelShutoffValves.sv101MainBlock==="OPEN";c.className=`valve-icon-wrap ${y?"open":"closed"}`,p.textContent=e.fuelShutoffValves.sv101MainBlock,p.className=`valve-state font-mono ${y?"text-green":"text-red font-bold"}`}const m=document.getElementById("icon-sv102"),g=document.getElementById("txt-sv102");if(m&&g){const y=e.fuelShutoffValves.sv102BleedVent==="OPEN";m.className=`valve-icon-wrap ${y?"venting":"closed"}`,g.textContent=e.fuelShutoffValves.sv102BleedVent,g.className=`valve-state font-mono ${y?"text-amber font-bold":"text-green"}`}const u=document.getElementById("icon-sv103"),b=document.getElementById("txt-sv103");if(u&&b){const y=e.fuelShutoffValves.sv103BurnerBlock==="OPEN";u.className=`valve-icon-wrap ${y?"open":"closed"}`,b.textContent=e.fuelShutoffValves.sv103BurnerBlock,b.className=`valve-state font-mono ${y?"text-green":"text-red font-bold"}`}const x=document.getElementById("esp-status-badge"),v=document.getElementById("bms-esp-kv"),E=document.getElementById("bms-esp-badge");x&&v&&E&&(e.espHighVoltageActive?(x.textContent="ESP 80kV: ENERGIZED",x.className="badge badge-success",v.textContent=`80 kV BUS: ${e.espVoltageKv} kV`,E.textContent="ENERGIZED",E.className="badge badge-success"):(x.textContent="ESP 80kV: TRIPPED DE-ENERGIZED",x.className="badge badge-danger font-bold",v.textContent="80 kV BUS: 0.0 kV",E.textContent="TRIPPED (ISOLATED)",E.className="badge badge-danger"));const S=document.getElementById("flame-status-badge");S&&(e.flameIntensityPercent>50?(S.textContent=`FLAME: ${e.flameIntensityPercent}% (DUAL UV/IR)`,S.className="badge badge-info"):(S.textContent="FLAME: EXTINGUISHED",S.className="badge badge-danger"))}}class O{container;state;canvas=null;ctx=null;animFrameId=null;scanlineX=0;constructor(e,t){const s=document.getElementById(e);if(!s)throw new Error(`Container #${e} not found`);this.container=s,this.state=t,this.render(),this.initCanvas(),this.state.subscribe(()=>this.updateDiagnostics())}render(){this.container.innerHTML=`
      <div class="scanner-panel">
        <div class="panel-header">
          <div class="panel-title">
            <i class="fa-solid fa-microchip text-purple"></i>
            <span>AI REFRACTORY THERMAL SCANNER & COATING PROFILE</span>
          </div>
          <div class="panel-badges">
            <span class="badge badge-purple" id="ai-health-badge">HEALTH INDEX: 96.5%</span>
            <span class="badge badge-info" id="ai-rul-badge">RUL: 284 DAYS</span>
          </div>
        </div>

        <div class="scanner-content-grid">
          <!-- Canvas Thermal Map & Profile -->
          <div class="scanner-canvas-wrap">
            <div class="canvas-header-bar">
              <span class="text-xs text-muted font-mono">AXIAL PYRO-ZONE INFRARED SHELL SCAN (60 FPS REAL-TIME)</span>
              <span class="text-xs font-mono text-cyan" id="scanner-peak-temp">PEAK SHELL: 278°C</span>
            </div>
            <canvas id="thermal-scanner-canvas" width="620" height="150" class="thermal-canvas"></canvas>
            
            <div class="canvas-color-legend">
              <span class="text-xs text-muted">150°C</span>
              <div class="legend-gradient-bar"></div>
              <span class="text-xs text-muted">450°C (CRITICAL HOTSPOT)</span>
            </div>
          </div>

          <!-- AI Diagnostic Insights & Anomaly List -->
          <div class="scanner-insights-card">
            <div class="subcard-header">
              <span class="subcard-title"><i class="fa-solid fa-brain text-purple"></i> AI Predictive Diagnostics Engine</span>
              <span class="badge badge-success" id="ai-anomaly-status">NORMAL</span>
            </div>

            <!-- Anomaly Alerts Stream -->
            <div class="anomalies-list" id="anomalies-list-box">
              <!-- Dynamically populated -->
            </div>

            <div class="ai-meta-grid">
              <div class="ai-stat-box">
                <span class="ai-stat-lbl">C4 BLOCKAGE RISK</span>
                <span class="ai-stat-val font-mono text-cyan" id="ai-c4-risk">4.2%</span>
              </div>
              <div class="ai-stat-box">
                <span class="ai-stat-lbl">HOTSPOT DETECTION</span>
                <span class="ai-stat-val font-mono text-green" id="ai-hotspot-status">NONE</span>
              </div>
              <div class="ai-stat-box">
                <span class="ai-stat-lbl">COATING RETENTION</span>
                <span class="ai-stat-val font-mono text-amber" id="ai-coating-avg">195 mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}initCanvas(){this.canvas=document.getElementById("thermal-scanner-canvas"),this.canvas&&(this.ctx=this.canvas.getContext("2d"),this.startRenderLoop())}startRenderLoop(){const e=()=>{this.drawThermalMap(),this.animFrameId=requestAnimationFrame(e)};this.animFrameId=requestAnimationFrame(e)}drawThermalMap(){if(!this.canvas||!this.ctx)return;const e=this.ctx,t=this.canvas.width,s=this.canvas.height;e.fillStyle="#070b14",e.fillRect(0,0,t,s);const a=this.state.aiPredictive.shellAxialPoints,i=a.length,o=90,l=t/(i-1);for(let n=0;n<i-1;n++){const r=a[n],d=a[n+1],c=n*l,p=(n+1)*l,m=e.createLinearGradient(c,0,p,0);m.addColorStop(0,this.temperatureToColor(r.tempC)),m.addColorStop(1,this.temperatureToColor(d.tempC)),e.fillStyle=m,e.fillRect(c,10,l+1,o)}e.strokeStyle="rgba(15, 23, 42, 0.4)",e.lineWidth=1;for(let n=10;n<=10+o;n+=18)e.beginPath(),e.moveTo(0,n),e.lineTo(t,n),e.stroke();this.scanlineX=(this.scanlineX+2.5)%t,e.strokeStyle="#38bdf8",e.lineWidth=2,e.shadowColor="#38bdf8",e.shadowBlur=8,e.beginPath(),e.moveTo(this.scanlineX,10),e.lineTo(this.scanlineX,10+o),e.stroke(),e.shadowBlur=0,e.fillStyle="rgba(19, 29, 53, 0.8)",e.fillRect(0,105,t,40),e.strokeStyle="#f59e0b",e.lineWidth=2,e.beginPath();for(let n=0;n<i;n++){const r=a[n],d=n*l,c=142-r.coatingThicknessMm/250*32;n===0?e.moveTo(d,c):e.lineTo(d,c)}e.stroke(),e.fillStyle="#94a3b8",e.font="9px monospace",e.fillText("REFRACTORY COATING PROFILE (mm)",10,138),e.fillStyle="#64748b",e.font="9px monospace",e.fillText("Z1 CALCINER",20,8),e.fillText("Z2 TRANSITION",180,8),e.fillText("Z3 KILN INLET",380,8),e.fillText("Z4 DISCHARGE",530,8)}temperatureToColor(e){return e<240?"#0284c7":e<290?"#059669":e<340?"#f59e0b":e<380?"#ea580c":"#ef4444"}updateDiagnostics(){const e=this.state.aiPredictive,t=document.getElementById("ai-health-badge");t&&(t.textContent=`HEALTH INDEX: ${e.refractoryHealthIndexPercent}%`,t.className=e.refractoryHealthIndexPercent<70?"badge badge-danger":"badge badge-purple");const s=document.getElementById("ai-rul-badge");s&&(s.textContent=`RUL: ${e.remainingUsefulLifeDays} DAYS`);const a=document.getElementById("scanner-peak-temp");a&&(a.textContent=`PEAK SHELL: ${e.maxShellTempC}°C`,a.className=e.maxShellTempC>380?"text-xs font-mono text-red font-bold":"text-xs font-mono text-cyan");const i=document.getElementById("ai-anomaly-status");i&&(e.hotspotActive||e.c4BlockageActive?(i.textContent="ANOMALY DETECTED",i.className="badge badge-danger"):(i.textContent="NORMAL",i.className="badge badge-success"));const o=document.getElementById("anomalies-list-box");o&&(o.innerHTML=e.anomalyList.map(r=>`
        <div class="anomaly-item ${r.includes("CRITICAL")||r.includes("blockage")?"danger":"normal"}">
          <i class="fa-solid ${r.includes("CRITICAL")||r.includes("blockage")?"fa-triangle-exclamation text-red":"fa-circle-check text-green"}"></i>
          <span>${r}</span>
        </div>
      `).join(""));const l=document.getElementById("ai-c4-risk");l&&(l.textContent=`${e.c4BlockageRiskPercent.toFixed(1)}%`,l.className=e.c4BlockageRiskPercent>50?"ai-stat-val font-mono text-red font-bold":"ai-stat-val font-mono text-cyan");const n=document.getElementById("ai-hotspot-status");n&&(e.hotspotActive?(n.textContent=`${e.maxShellTempC}°C (Z3)`,n.className="ai-stat-val font-mono text-red font-bold"):(n.textContent="NONE",n.className="ai-stat-val font-mono text-green"))}}class D{container;constructor(e){const t=document.getElementById(e);if(!t)throw new Error(`Container #${e} not found`);this.container=t,this.render(),this.hookEvents()}render(){this.container.innerHTML=`
      <div class="modal-backdrop" id="dossier-modal-backdrop" style="display: none;">
        <div class="modal-dialog">
          <div class="modal-header">
            <div class="modal-title-group">
              <i class="fa-solid fa-file-shield text-cyan text-xl"></i>
              <div>
                <div class="modal-title font-mono font-bold">
                  PYRO-CLINKER: DCS AUTOMATION & PYROPROCESSING ENGINEERING DOSSIER
                </div>
                <div class="modal-subtitle text-xs text-muted">
                  Technical Specifications, Thermodynamic Formulations, Closed-Loop PID Kinetics & Safety Interlocks
                </div>
              </div>
            </div>
            <button class="modal-close-btn" id="btn-close-dossier">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div class="modal-body">
            <!-- Lead Engineer Certification Banner -->
            <div class="dossier-engineer-card">
              <div class="dossier-avatar">
                <i class="fa-solid fa-user-gear text-cyan"></i>
              </div>
              <div class="dossier-info">
                <div class="dossier-name font-bold">أ. طارق ابوعشي | Tareq Abuashi</div>
                <div class="dossier-title text-cyan text-sm">Lead Electrical & Automation Systems Engineer</div>
                <div class="dossier-dept text-xs text-muted">
                  Industrial SCADA, DCS Process Control & Functional Safety Systems Architecture
                </div>
              </div>
              <div class="dossier-stamp">
                <i class="fa-solid fa-certificate text-green"></i>
                <span class="text-green font-mono text-xs">CERTIFIED IEC 61508 / NFPA 86</span>
              </div>
            </div>

            <!-- Tabbed Navigation -->
            <div class="dossier-tabs-nav">
              <button class="dossier-tab-btn active" data-tab="tab-preheater">
                <i class="fa-solid fa-tower-observation"></i> 1. Preheater & Calciner
              </button>
              <button class="dossier-tab-btn" data-tab="tab-cooler">
                <i class="fa-solid fa-snowflake"></i> 2. Grate Cooler & PID
              </button>
              <button class="dossier-tab-btn" data-tab="tab-bms">
                <i class="fa-solid fa-shield-halved"></i> 3. BMS & CEMS Safety
              </button>
              <button class="dossier-tab-btn" data-tab="tab-refractory">
                <i class="fa-solid fa-brain"></i> 4. AI Refractory Model
              </button>
            </div>

            <!-- TAB 1: PREHEATER & CALCINER -->
            <div class="dossier-tab-content active" id="tab-preheater">
              <h4 class="section-heading text-cyan">1. 5-Stage Cyclone Heat Exchange & Calcination Kinetics</h4>
              <p class="section-p">
                The 5-stage cyclone suspension preheater system transfers thermal energy from kiln counter-current exhaust gases 
                to descending raw meal. In each cyclone stage $i$, gas-solid separation efficiency $eta_c$ and temperature reduction are governed by:
              </p>
              
              <div class="formula-card font-mono">
                $$eta_{c, i} = 1 - expleft[ -left(\frac{d_p}{d_{50}}\right)^m \right]$$
                $$dot{Q}_{	ext{trans}} = dot{m}_{	ext{meal}} cdot C_{p, 	ext{meal}} cdot (T_{	ext{meal, out}} - T_{	ext{meal, in}}) = dot{m}_{	ext{gas}} cdot C_{p, 	ext{gas}} cdot (T_{	ext{gas, in}} - T_{	ext{gas, out}})$$
              </div>

              <h5 class="sub-heading text-amber">Precalciner Endothermic Decarbonization Kinetics</h5>
              <p class="section-p">
                Over 90–95% of the limestone decarbonization occurs inside the precalciner at temperatures between $880^circ	ext{C}$ and $920^circ	ext{C}$:
              </p>
              <div class="formula-card font-mono text-amber">
                CaCO3 (solid) + 1782 kJ/kg &mdash;&gt; [890&deg;C] &mdash;&gt; CaO (solid) + CO2 (gas)
              </div>
              <p class="section-p">
                Tertiary air duct provides preheated oxygen-rich air (~$825^circ	ext{C}$) directly from the clinker cooler, reducing primary kiln fuel consumption and NOx generation.
              </p>

              <h5 class="sub-heading text-cyan">Air Blaster Cannon Acoustic Shock Wave (8.5 Bar)</h5>
              <p class="section-p">
                Cyclones C4 and C5 conical bottoms are subject to alkali/sulfur/chloride build-ups and meal bridging. Automated high-pressure pneumatic blast cannons (8.5 Bar) inject instant kinetic energy:
              </p>
              <div class="formula-card font-mono">
                $$E_{	ext{blast}} = \frac{P_0 cdot V_{	ext{cannon}}}{gamma - 1} left[ 1 - left(\frac{P_{	ext{atm}}}{P_0}\right)^{\frac{gamma-1}{gamma}} \right] approx 42.5 	ext{ kJ per pulse}$$
              </div>
            </div>

            <!-- TAB 2: COOLER & PID -->
            <div class="dossier-tab-content" id="tab-cooler">
              <h4 class="section-heading text-cyan">2. Reciprocating Grate Cooler & Kiln Hood Draft PID</h4>
              <p class="section-p">
                The reciprocating grate cooler rapidly quenches molten clinker from $1400^circ	ext{C}$ down to $< 100^circ	ext{C}$ to lock in the alite ($	ext{C}_3	ext{S}$) crystal structure and prevent retrograde conversion to belite ($	ext{C}_2	ext{S}$).
              </p>

              <div class="formula-card font-mono">
                $$eta_{	ext{recuperation}} = \frac{dot{Q}_{	ext{secondary air}} + dot{Q}_{	ext{tertiary air}}}{dot{Q}_{	ext{clinker inflow}}} ge 72.5%$$
                $$dot{Q}_{	ext{clinker}} = dot{m}_{	ext{clinker}} int_{95^circ	ext{C}}^{1400^circ	ext{C}} C_p(T) , dT$$
              </div>

              <h5 class="sub-heading text-green">Closed-Loop Kiln Hood Draft Discrete PID Algorithm</h5>
              <p class="section-p">
                Kiln hood pressure must be strictly maintained at a slightly negative setpoint ($SP = -0.80	ext{ mbar}$) to prevent hot gas puffing into the burner platform or excess ambient air ingress:
              </p>
              <div class="formula-card font-mono text-green">
                $$u(k) = u(k-1) + K_p left[ e(k) - e(k-1) \right] + \frac{K_p T_s}{T_i} e(k) + \frac{K_p T_d}{T_s} left[ e(k) - 2e(k-1) + e(k-2) \right]$$
                $$	ext{Tuned Parameters: } K_p = 2.40, ; T_i = 12.0	ext{ s}, ; T_d = 1.80	ext{ s}, ; 	ext{Deadband} = pm 0.02	ext{ mbar}$$
              </div>
            </div>

            <!-- TAB 3: BMS & CEMS -->
            <div class="dossier-tab-content" id="tab-bms">
              <h4 class="section-heading text-amber">3. Burner Management System (BMS) & CEMS Safety Interlocks</h4>
              <p class="section-p">
                Compliant with <b>NFPA 86 (Standard for Ovens and Furnaces)</b> and <b>EN 746-2 (Industrial Thermo-Processing Equipment)</b>.
              </p>

              <h5 class="sub-heading text-red">High Carbon Monoxide (CO) Electrostatic Precipitator (ESP) Explosion Hazard</h5>
              <p class="section-p">
                When flue gas CO exceeds $1.5%$ ($15,000	ext{ ppm}$), the mixture approaches the explosive flammability limit in air. Inside the Electrostatic Precipitator (operating at $80	ext{ kV}$), high-voltage corona discharges can trigger catastrophic deflagrations.
              </p>

              <div class="formula-card font-mono text-red">
                Interlock Stage 1 (Warning): CO &gt; 1000 ppm &rArr; Annunciator Yellow Alert<br>
                Interlock Stage 2 (Trip Arm): CO &gt; 1500 ppm &rArr; 15-second fail-safe countdown timer<br>
                Interlock Stage 3 (Trip Exec): Timer expires &rArr; ESP 80kV VCB Trip + BMS Double Block &amp; Bleed Shutoff
              </div>

              <h5 class="sub-heading text-cyan">Double Block & Bleed (DB&B) Valve Sequence</h5>
              <p class="section-p">
                Upon trip condition, main fuel shutoff valves SV-101 and SV-103 snap closed within &lt; 0.8 seconds via pneumatic spring return, while intermediate vent valve SV-102 snaps open to release any trapped fuel to atmosphere.
              </p>
            </div>

            <!-- TAB 4: AI REFRACTORY -->
            <div class="dossier-tab-content" id="tab-refractory">
              <h4 class="section-heading text-purple">4. AI Predictive Refractory Lining Diagnostics & Hotspot Detection</h4>
              <p class="section-p">
                Thermal conduction through the high-alumina/magnesite-spinel refractory lining and outer steel kiln shell is modeled using multi-layer 1D cylindrical heat conduction:
              </p>

              <div class="formula-card font-mono text-purple">
                $$q = \frac{2pi L (T_{	ext{internal}} - T_{	ext{ambient}})}{\frac{1}{k_{	ext{coating}}}ln\frac{r_1}{r_0} + \frac{1}{k_{	ext{brick}}}ln\frac{r_2}{r_1} + \frac{1}{k_{	ext{shell}}}ln\frac{r_3}{r_2} + \frac{1}{h_{	ext{conv}} r_3}}$$
              </div>

              <h5 class="sub-heading text-cyan">Anomaly Classification Algorithms</h5>
              <ul class="dossier-list">
                <li><b>Zone 3 Hotspot Alert:</b> Shell temperature exceeding $380^circ	ext{C}$ indicates refractory brick spalling or loss of protective coating, necessitating immediate burner flame shaping or clinker cooling.</li>
                <li><b>C4 Cyclone Plugging Predictor:</b> Divergence between stage C3 and C4 static pressure accompanied by drop in draft vacuum identifies cone meal stagnation prior to full chute clogging.</li>
                <li><b>Remaining Useful Life (RUL):</b> Continuously calculated using exponential degradation tracking calibrated against historical campaign cycles (nominal 300 days).</li>
              </ul>
            </div>
          </div>

          <div class="modal-footer">
            <span class="text-xs text-muted font-mono">PYRO-CLINKER DCS SUITE &bull; TAREQ ABUASHI</span>
            <button class="btn btn-secondary" id="btn-modal-dismiss">Close Dossier</button>
          </div>
        </div>
      </div>
    `}hookEvents(){const e=document.getElementById("dossier-modal-backdrop"),t=document.getElementById("btn-close-dossier"),s=document.getElementById("btn-modal-dismiss"),a=()=>{e&&(e.style.display="none")};t&&t.addEventListener("click",a),s&&s.addEventListener("click",a),e&&e.addEventListener("click",o=>{o.target===e&&a()});const i=this.container.querySelectorAll(".dossier-tab-btn");i.forEach(o=>{o.addEventListener("click",l=>{i.forEach(c=>c.classList.remove("active"));const n=l.currentTarget;n.classList.add("active");const r=n.getAttribute("data-tab");if(this.container.querySelectorAll(".dossier-tab-content").forEach(c=>c.classList.remove("active")),r){const c=document.getElementById(r);c&&c.classList.add("active")}})})}open(){const e=document.getElementById("dossier-modal-backdrop");e&&(e.style.display="flex")}}document.addEventListener("DOMContentLoaded",()=>{console.log("Initializing PYRO-CLINKER Industrial DCS Suite..."),new B("preheater-container",h),new L("cooler-container",h),new N("bms-cems-container",h),new O("scanner-container",h);const T=new D("dossier-modal-container"),e=document.getElementById("btn-audio-toggle"),t=document.getElementById("audio-icon"),s=document.getElementById("audio-text"),a=document.getElementById("btn-screen-share"),i=document.getElementById("btn-open-dossier"),o=document.getElementById("btn-quick-reset"),l=document.getElementById("alarm-badge-status"),n=document.getElementById("alarm-banner-message"),r=document.getElementById("soe-timestamp"),d=document.getElementById("header-clock"),c=document.getElementById("header-grid-freq"),p=document.getElementById("header-bus-volts"),m=document.getElementById("btn-fault-c4"),g=document.getElementById("btn-fault-co"),u=document.getElementById("btn-fault-cooler"),b=document.getElementById("btn-fault-reset"),x=document.getElementById("soe-table-body"),v=document.getElementById("btn-clear-soe"),E=document.getElementById("btn-export-soe");e&&t&&s&&e.addEventListener("click",()=>{f.toggleMute()?(t.className="fa-solid fa-volume-xmark text-muted",s.textContent="Audio: Muted"):(t.className="fa-solid fa-volume-high text-cyan",s.textContent="Audio: Active",f.playClick())}),a&&a.addEventListener("click",async()=>{f.playClick();try{navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia?await navigator.mediaDevices.getDisplayMedia({video:!0}):document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()}catch{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})}}),i&&i.addEventListener("click",()=>{f.playClick(),T.open()}),o&&o.addEventListener("click",()=>{h.triggerEmergencyResetAndPurge()}),m&&m.addEventListener("click",()=>{h.triggerC4Plugging()}),g&&g.addEventListener("click",()=>{h.triggerHighCoSpike()}),u&&u.addEventListener("click",()=>{h.triggerCoolerStall()}),b&&b.addEventListener("click",()=>{h.triggerEmergencyResetAndPurge()}),v&&v.addEventListener("click",()=>{f.playClick(),h.soeLog=[],y()}),E&&E.addEventListener("click",()=>{f.playClick(),S()});function S(){const C=["Timestamp","Source","EventCode","Description","Severity"],k=h.soeLog.map(A=>[`"${A.timestamp}"`,`"${A.source}"`,`"${A.code}"`,`"${A.description.replace(/"/g,'""')}"`,`"${A.severity}"`]),w="data:text/csv;charset=utf-8,"+[C.join(","),...k.map(A=>A.join(","))].join(`
`),P=encodeURI(w),I=document.createElement("a");I.setAttribute("href",P),I.setAttribute("download",`PYRO_CLINKER_SOE_LOG_${Date.now()}.csv`),document.body.appendChild(I),I.click(),document.body.removeChild(I)}function y(){if(!x)return;const C=h.soeLog;x.innerHTML=C.slice(0,30).map(k=>`
      <tr>
        <td class="text-cyan">${k.timestamp}</td>
        <td class="text-muted">${k.source}</td>
        <td class="text-amber font-bold">${k.code}</td>
        <td>${k.description}</td>
        <td>
          <span class="severity-tag ${k.severity.toLowerCase()}">${k.severity}</span>
        </td>
      </tr>
    `).join("")}h.subscribe(()=>{if(d&&(d.textContent=h.soeClockString.split(".")[0]),r&&(r.textContent=h.soeClockString),c){const C=(50+(Math.random()*.04-.02)).toFixed(2);c.textContent=`${C} Hz`}if(p){const C=Math.round(6600+(Math.random()*12-6));p.textContent=`${C.toLocaleString()} V`}l&&n&&(l.textContent=h.masterStatus,n.textContent=h.masterMessage,h.masterStatus==="TRIP"?l.className="alarm-badge tripped":h.masterStatus==="WARNING"?l.className="alarm-badge warning":l.className="alarm-badge healthy"),y()}),y()});
