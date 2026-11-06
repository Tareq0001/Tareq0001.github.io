(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();var oc={};(function r(t,e,n,i){var s=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=(function(){if(!t.OffscreenCanvas)return!1;try{var I=new OffscreenCanvas(1,1),P=I.getContext("2d");P.fillRect(0,0,1,1);var et=I.transferToImageBitmap();P.createPattern(et,"no-repeat")}catch{return!1}return!0})();function l(){}function c(I){var P=e.exports.Promise,et=P!==void 0?P:t.Promise;return typeof et=="function"?new et(I):(I(l,l),null)}var h=(function(I,P){return{transform:function(et){if(I)return et;if(P.has(et))return P.get(et);var lt=new OffscreenCanvas(et.width,et.height),k=lt.getContext("2d");return k.drawImage(et,0,0),P.set(et,lt),lt},clear:function(){P.clear()}}})(o,new Map),u=(function(){var I=Math.floor(16.666666666666668),P,et,lt={},k=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function($){var it=Math.random();return lt[it]=requestAnimationFrame(function Z(at){k===at||k+I-1<at?(k=at,delete lt[it],$()):lt[it]=requestAnimationFrame(Z)}),it},et=function($){lt[$]&&cancelAnimationFrame(lt[$])}):(P=function($){return setTimeout($,I)},et=function($){return clearTimeout($)}),{frame:P,cancel:et}})(),d=(function(){var I,P,et={};function lt(k){function $(it,Z){k.postMessage({options:it||{},callback:Z})}k.init=function(Z){var at=Z.transferControlToOffscreen();k.postMessage({canvas:at},[at])},k.fire=function(Z,at,bt){if(P)return $(Z,null),P;var ct=Math.random().toString(36).slice(2);return P=c(function(Dt){function It(wt){wt.data.callback===ct&&(delete et[ct],k.removeEventListener("message",It),P=null,h.clear(),bt(),Dt())}k.addEventListener("message",It),$(Z,ct),et[ct]=It.bind(null,{data:{callback:ct}})}),P},k.reset=function(){k.postMessage({reset:!0});for(var Z in et)et[Z](),delete et[Z]}}return function(){if(I)return I;if(!n&&s){var k=["var CONFETTI, SIZE = {}, module = {};","("+r.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{I=new Worker(URL.createObjectURL(new Blob([k])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}lt(I)}return I}})(),f={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(I,P){return P?P(I):I}function g(I){return I!=null}function m(I,P,et){return _(I&&g(I[P])?I[P]:f[P],et)}function p(I){return I<0?0:Math.floor(I)}function M(I,P){return Math.floor(Math.random()*(P-I))+I}function S(I){return parseInt(I,16)}function x(I){return I.map(A)}function A(I){var P=String(I).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:S(P.substring(0,2)),g:S(P.substring(2,4)),b:S(P.substring(4,6))}}function w(I){var P=m(I,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function T(I){I.width=document.documentElement.clientWidth,I.height=document.documentElement.clientHeight}function C(I){var P=I.getBoundingClientRect();I.width=P.width,I.height=P.height}function v(I){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=I,P}function y(I,P,et,lt,k,$,it,Z,at){I.save(),I.translate(P,et),I.rotate($),I.scale(lt,k),I.arc(0,0,1,it,Z,at),I.restore()}function D(I){var P=I.angle*(Math.PI/180),et=I.spread*(Math.PI/180);return{x:I.x,y:I.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:I.startVelocity*.5+Math.random()*I.startVelocity,angle2D:-P+(.5*et-Math.random()*et),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:I.color,shape:I.shape,tick:0,totalTicks:I.ticks,decay:I.decay,drift:I.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:I.gravity*3,ovalScalar:.6,scalar:I.scalar,flat:I.flat}}function N(I,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var et=P.tick++/P.totalTicks,lt=P.x+P.random*P.tiltCos,k=P.y+P.random*P.tiltSin,$=P.wobbleX+P.random*P.tiltCos,it=P.wobbleY+P.random*P.tiltSin;if(I.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-et)+")",I.beginPath(),a&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))I.fill(j(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs($-lt)*.1,Math.abs(it-k)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var Z=Math.PI/10*P.wobble,at=Math.abs($-lt)*.1,bt=Math.abs(it-k)*.1,ct=P.shape.bitmap.width*P.scalar,Dt=P.shape.bitmap.height*P.scalar,It=new DOMMatrix([Math.cos(Z)*at,Math.sin(Z)*at,-Math.sin(Z)*bt,Math.cos(Z)*bt,P.x,P.y]);It.multiplySelf(new DOMMatrix(P.shape.matrix));var wt=I.createPattern(h.transform(P.shape.bitmap),"no-repeat");wt.setTransform(It),I.globalAlpha=1-et,I.fillStyle=wt,I.fillRect(P.x-ct/2,P.y-Dt/2,ct,Dt),I.globalAlpha=1}else if(P.shape==="circle")I.ellipse?I.ellipse(P.x,P.y,Math.abs($-lt)*P.ovalScalar,Math.abs(it-k)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):y(I,P.x,P.y,Math.abs($-lt)*P.ovalScalar,Math.abs(it-k)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var L=Math.PI/2*3,oe=4*P.scalar,Nt=8*P.scalar,Ft=P.x,Mt=P.y,$t=5,vt=Math.PI/$t;$t--;)Ft=P.x+Math.cos(L)*Nt,Mt=P.y+Math.sin(L)*Nt,I.lineTo(Ft,Mt),L+=vt,Ft=P.x+Math.cos(L)*oe,Mt=P.y+Math.sin(L)*oe,I.lineTo(Ft,Mt),L+=vt;else I.moveTo(Math.floor(P.x),Math.floor(P.y)),I.lineTo(Math.floor(P.wobbleX),Math.floor(k)),I.lineTo(Math.floor($),Math.floor(it)),I.lineTo(Math.floor(lt),Math.floor(P.wobbleY));return I.closePath(),I.fill(),P.tick<P.totalTicks}function F(I,P,et,lt,k){var $=P.slice(),it=I.getContext("2d"),Z,at,bt=c(function(ct){function Dt(){Z=at=null,it.clearRect(0,0,lt.width,lt.height),h.clear(),k(),ct()}function It(){n&&!(lt.width===i.width&&lt.height===i.height)&&(lt.width=I.width=i.width,lt.height=I.height=i.height),!lt.width&&!lt.height&&(et(I),lt.width=I.width,lt.height=I.height),it.clearRect(0,0,lt.width,lt.height),$=$.filter(function(wt){return N(it,wt)}),$.length?Z=u.frame(It):Dt()}Z=u.frame(It),at=Dt});return{addFettis:function(ct){return $=$.concat(ct),bt},canvas:I,promise:bt,reset:function(){Z&&u.cancel(Z),at&&at()}}}function V(I,P){var et=!I,lt=!!m(P||{},"resize"),k=!1,$=m(P,"disableForReducedMotion",Boolean),it=s&&!!m(P||{},"useWorker"),Z=it?d():null,at=et?T:C,bt=I&&Z?!!I.__confetti_initialized:!1,ct=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Dt;function It(L,oe,Nt){for(var Ft=m(L,"particleCount",p),Mt=m(L,"angle",Number),$t=m(L,"spread",Number),vt=m(L,"startVelocity",Number),R=m(L,"decay",Number),E=m(L,"gravity",Number),H=m(L,"drift",Number),Q=m(L,"colors",x),nt=m(L,"ticks",Number),J=m(L,"shapes"),Tt=m(L,"scalar"),ut=!!m(L,"flat"),_t=w(L),Xt=Ft,st=[],xt=I.width*_t.x,Ut=I.height*_t.y;Xt--;)st.push(D({x:xt,y:Ut,angle:Mt,spread:$t,startVelocity:vt,color:Q[Xt%Q.length],shape:J[M(0,J.length)],ticks:nt,decay:R,gravity:E,drift:H,scalar:Tt,flat:ut}));return Dt?Dt.addFettis(st):(Dt=F(I,st,at,oe,Nt),Dt.promise)}function wt(L){var oe=$||m(L,"disableForReducedMotion",Boolean),Nt=m(L,"zIndex",Number);if(oe&&ct)return c(function(vt){vt()});et&&Dt?I=Dt.canvas:et&&!I&&(I=v(Nt),document.body.appendChild(I)),lt&&!bt&&at(I);var Ft={width:I.width,height:I.height};Z&&!bt&&Z.init(I),bt=!0,Z&&(I.__confetti_initialized=!0);function Mt(){if(Z){var vt={getBoundingClientRect:function(){if(!et)return I.getBoundingClientRect()}};at(vt),Z.postMessage({resize:{width:vt.width,height:vt.height}});return}Ft.width=Ft.height=null}function $t(){Dt=null,lt&&(k=!1,t.removeEventListener("resize",Mt)),et&&I&&(document.body.contains(I)&&document.body.removeChild(I),I=null,bt=!1)}return lt&&!k&&(k=!0,t.addEventListener("resize",Mt,!1)),Z?Z.fire(L,Ft,$t):It(L,Ft,$t)}return wt.reset=function(){Z&&Z.reset(),Dt&&Dt.reset()},wt}var G;function X(){return G||(G=V(null,{useWorker:!0,resize:!0})),G}function j(I,P,et,lt,k,$,it){var Z=new Path2D(I),at=new Path2D;at.addPath(Z,new DOMMatrix(P));var bt=new Path2D;return bt.addPath(at,new DOMMatrix([Math.cos(it)*k,Math.sin(it)*k,-Math.sin(it)*$,Math.cos(it)*$,et,lt])),bt}function W(I){if(!a)throw new Error("path confetti are not supported in this browser");var P,et;typeof I=="string"?P=I:(P=I.path,et=I.matrix);var lt=new Path2D(P),k=document.createElement("canvas"),$=k.getContext("2d");if(!et){for(var it=1e3,Z=it,at=it,bt=0,ct=0,Dt,It,wt=0;wt<it;wt+=2)for(var L=0;L<it;L+=2)$.isPointInPath(lt,wt,L,"nonzero")&&(Z=Math.min(Z,wt),at=Math.min(at,L),bt=Math.max(bt,wt),ct=Math.max(ct,L));Dt=bt-Z,It=ct-at;var oe=10,Nt=Math.min(oe/Dt,oe/It);et=[Nt,0,0,Nt,-Math.round(Dt/2+Z)*Nt,-Math.round(It/2+at)*Nt]}return{type:"path",path:P,matrix:et}}function ot(I){var P,et=1,lt="#000000",k='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof I=="string"?P=I:(P=I.text,et="scalar"in I?I.scalar:et,k="fontFamily"in I?I.fontFamily:k,lt="color"in I?I.color:lt);var $=10*et,it=""+$+"px "+k,Z=new OffscreenCanvas($,$),at=Z.getContext("2d");at.font=it;var bt=at.measureText(P),ct=Math.ceil(bt.actualBoundingBoxRight+bt.actualBoundingBoxLeft),Dt=Math.ceil(bt.actualBoundingBoxAscent+bt.actualBoundingBoxDescent),It=2,wt=bt.actualBoundingBoxLeft+It,L=bt.actualBoundingBoxAscent+It;ct+=It+It,Dt+=It+It,Z=new OffscreenCanvas(ct,Dt),at=Z.getContext("2d"),at.font=it,at.fillStyle=lt,at.fillText(P,wt,L);var oe=1/et;return{type:"bitmap",bitmap:Z.transferToImageBitmap(),matrix:[oe,0,0,oe,-ct*oe/2,-Dt*oe/2]}}e.exports=function(){return X().apply(this,arguments)},e.exports.reset=function(){X().reset()},e.exports.create=V,e.exports.shapeFromPath=W,e.exports.shapeFromText=ot})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),oc,!1);const xs=oc.exports;oc.exports.create;const Jn=[{index:0,titleAr:"استقطاب العملاء وبناء العلاقات المستدامة",titleEn:"Lead Prospecting & Strategic Enterprise Outreach",badgeAr:"المرحلة 1: التنقيب والتواصل",badgeEn:"Stage 1: Inbound & Outbound Pipeline",descAr:"تحديد الحسابات الاستراتيجية المستهدفة (ABM)، صياغة القيمة المقترحة والتواصل مع صناع القرار التنفيذيين.",descEn:"Account-Based Marketing, CXO multi-threading, personalized value propositions and inbound pipeline activation.",actionAr:"تأهيل المؤشرات الأولية وملاءمة الحل (BANT Initial Sweep)",actionEn:"Initial ICP qualification & BANT readiness review",colorHex:"#06b6d4",conversionBenchmark:"معدل التحويل المعياري: 35% - 42%"},{index:1,titleAr:"تحديد الفرص وتأهيل الشراكات الاستراتيجية (MEDDIC)",titleEn:"Opportunity Identification & Rigorous MEDDIC Qualification",badgeAr:"المرحلة 2: التأهيل العميق",badgeEn:"Stage 2: Enterprise Discovery & Qualification",descAr:"اكتشاف التحديات المؤسسية، تحديد المشتري الاقتصادي، توثيق مقاييس النجاح وحشد البطل الداخلي (Champion).",descEn:"Validating Economic Buyer, quantifiable business metrics, decision governance and activating enterprise internal champions.",actionAr:"اعتماد مصفوفة التأهيل وسد الفجوات التحليلية",actionEn:"Lock MEDDIC score and define joint evaluation milestones",colorHex:"#3b82f6",conversionBenchmark:"معدل التحويل المعياري: 52% - 60%"},{index:2,titleAr:"إعداد العروض الفنية والتجارية وإثبات المفهوم (PoC)",titleEn:"Commercial Proposal, Solution Architecture & PoC Structuring",badgeAr:"المرحلة 3: العرض الهندسي والتجاري",badgeEn:"Stage 3: Technical & Commercial Validation",descAr:"تصميم العرض الفني المتكامل، إجراء إثبات المفهوم التجريبي لبرهنة العائد على الاستثمار، وهيكلة الأسعار والحلول المخصصة.",descEn:"Enterprise solution blueprint, rapid proof-of-concept validation, quantifiable ROI model and executive presentation.",actionAr:"تقديم مذكرة القيمة المشتركة واجتياز لجنة التقييم الفني",actionEn:"Deliver joint business case & pass technical gatekeeping",colorHex:"#8b5cf6",conversionBenchmark:"معدل التحويل المعياري: 68% - 74%"},{index:3,titleAr:"التفاوض الاستراتيجي وهيكلة اتفاقيات SLA والتحالفات",titleEn:"Win-Win Strategic Negotiation, SLA Alignment & Partner Co-sell",badgeAr:"المرحلة 4: التفاوض والشروط",badgeEn:"Stage 4: Legal, SLA & Commercial Alignment",descAr:"التفاوض حول شروط التعاقد والخصم، ضبط اتفاقيات مستوى الخدمة (SLA 99.99%)، وإشراك شركاء التحالف لتعظيم القيمة.",descEn:"Contractual terms negotiation, SLA commitments, legal/cybersecurity compliance, and co-selling ecosystem alignment.",actionAr:"اعتماد مسودة العقد النهائي والترتيب للتوقيع التنفيذي",actionEn:"Finalize master services agreement (MSA) and approvals",colorHex:"#f59e0b",conversionBenchmark:"معدل التحويل المعياري: 82% - 88%"},{index:4,titleAr:"إتمام التعاقد وتنمية الإيرادات الدورية (Closed-Won)",titleEn:"Contract Execution, ARR Expansion & Customer Success Onboarding",badgeAr:"المرحلة 5: إتمام التعاقد",badgeEn:"Stage 5: Closed-Won & ARR Expansion",descAr:"توقيع العقود الرسمية، بدء مسار نجاح العملاء، ووضع خطة التوسع المتبادل لزيادة معدل صافي الإيرادات المتكررة (NRR).",descEn:"Contract signature, immediate onboarding kickoff, customer success alignment and land-and-expand ARR strategy.",actionAr:"تفعيل حساب العميل المؤسسي وبدء قياس القيمة المحققة",actionEn:"Activate enterprise subscription and land-and-expand plan",colorHex:"#10b981",conversionBenchmark:"إتمام مؤكد بنسبة 100% مع مسار توسع سنوي"}],Qi={fintech:{nameAr:"التقنية المالية والمصارف الرقمية",nameEn:"FinTech & Digital Banking Platforms",clientAr:"مصرف الإنماء والمدفوعات الفورية المفتوحة",clientEn:"Alinma Bank & Open Banking Infrastructure",acv:125e4,years:3,discount:10,meddicScore:84,leverRoi:!0,leverSla:!0,leverPoc:!0,leverAlliance:!1,colorHex:"#10b981"},govtech:{nameAr:"الحكومة الرقمية والمدن الذكية",nameEn:"GovTech & Smart Cities Enterprise",clientAr:"الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)",clientEn:"SDAIA & Sovereign AI Digital Twin Initiatives",acv:28e5,years:4,discount:8,meddicScore:88,leverRoi:!0,leverSla:!0,leverPoc:!0,leverAlliance:!0,colorHex:"#06b6d4"},cloud_ai:{nameAr:"البنية التحتية السحابية ونماذج الذكاء الاصطناعي",nameEn:"Enterprise Cloud & Sovereign AI Infrastructure",clientAr:"المركز الوطني للحوسبة السحابية ومصانع الذكاء الاصطناعي",clientEn:"National Cloud Center & Sovereign LLM Foundry",acv:195e4,years:3,discount:12,meddicScore:79,leverRoi:!0,leverSla:!1,leverPoc:!0,leverAlliance:!0,colorHex:"#8b5cf6"},telecom:{nameAr:"مشغلو الاتصالات والشبكات الخاصة 5G",nameEn:"Telecom Giants & 5G Private Networks",clientAr:"شركة الاتصالات السعودية (stc) - قطاع الأعمال",clientEn:"stc Enterprise & Smart Infrastructure Solutions",acv:34e5,years:5,discount:15,meddicScore:92,leverRoi:!0,leverSla:!0,leverPoc:!0,leverAlliance:!0,colorHex:"#3b82f6"},healthtech:{nameAr:"الرعاية الصحية الرقمية والمستشفيات",nameEn:"HealthTech Enterprise & Smart Hospitals",clientAr:"مستشفى الملك فيصل التخصصي ومركز الأبحاث",clientEn:"King Faisal Specialist Hospital & Research Centre",acv:16e5,years:3,discount:10,meddicScore:82,leverRoi:!0,leverSla:!0,leverPoc:!0,leverAlliance:!1,colorHex:"#ec4899"},retail:{nameAr:"سلاسل الإمداد والتجزئة الذكية",nameEn:"Smart Retail & Supply Chain Platforms",clientAr:"مجموعة الدانوب وبن داود القابضة",clientEn:"BinDawood Holding & Smart Omnichannel Supply Chain",acv:145e4,years:3,discount:12,meddicScore:80,leverRoi:!0,leverSla:!1,leverPoc:!0,leverAlliance:!0,colorHex:"#f59e0b"}},bf=[{id:"node_fintech",nameAr:"التقنية المالية والمصارف",nameEn:"FinTech & Banking",acvLabel:"1.25M SAR / yr",colorHex:"#10b981",angle:0,dist:6.8,y:2.4},{id:"node_govtech",nameAr:"الحكومة الرقمية والمدن الذكية",nameEn:"GovTech & Smart Cities",acvLabel:"2.80M SAR / yr",colorHex:"#06b6d4",angle:Math.PI/3*1,dist:7.2,y:2.8},{id:"node_cloud_ai",nameAr:"الحوسبة السحابية والذكاء الاصطناعي",nameEn:"Cloud & AI Infrastructure",acvLabel:"1.95M SAR / yr",colorHex:"#8b5cf6",angle:Math.PI/3*2,dist:6.6,y:2.2},{id:"node_telecom",nameAr:"الاتصالات وشبكات 5G الخاصة",nameEn:"Telecom & 5G Networks",acvLabel:"3.40M SAR / yr",colorHex:"#3b82f6",angle:Math.PI/3*3,dist:7.4,y:2.9},{id:"node_healthtech",nameAr:"الرعاية الصحية الرقمية والمستشفيات",nameEn:"HealthTech Enterprise",acvLabel:"1.60M SAR / yr",colorHex:"#ec4899",angle:Math.PI/3*4,dist:6.9,y:2.5},{id:"node_retail",nameAr:"سلاسل الإمداد والتجزئة الذكية",nameEn:"Smart Retail & Supply Chain",acvLabel:"1.45M SAR / yr",colorHex:"#f59e0b",angle:Math.PI/3*5,dist:6.7,y:2.3}],Zo=[{id:"opp_sama",accountAr:"البنك المركزي السعودي (ساما) - منصة المصرفية المفتوحة",accountEn:"SAMA Open Banking & Regulatory Sandbox",sectorAr:"التقنية المالية",sectorEn:"FinTech",acv:185e4,cycleDays:110,winProb:78,stageIndex:3,color:"#10b981"},{id:"opp_riyadh",accountAr:"أمانة منطقة الرياض - التوأمة الرقمية للمشاريع الكبرى",accountEn:"Riyadh Municipality Digital Twin Platform",sectorAr:"المدن الذكية والحكومة",sectorEn:"GovTech",acv:24e5,cycleDays:145,winProb:65,stageIndex:2,color:"#06b6d4"},{id:"opp_sdaia",accountAr:"سدايا - البنية التحتية للنماذج اللغوية السيادية",accountEn:"SDAIA Sovereign AI & LLM Cluster Integration",sectorAr:"الذكاء الاصطناعي السحابي",sectorEn:"Cloud & AI",acv:32e5,cycleDays:95,winProb:88,stageIndex:4,color:"#8b5cf6"},{id:"opp_stc",accountAr:"stc - شبكات الجيل الخامس الخاصة للموانئ واللوجستيات",accountEn:"stc Private 5G Core for Red Sea Ports",sectorAr:"الاتصالات المؤسسية",sectorEn:"Telecom",acv:29e5,cycleDays:130,winProb:72,stageIndex:3,color:"#3b82f6"},{id:"opp_kfshrc",accountAr:"مستشفى الملك فيصل التخصصي - المنظومة الصحية التنبؤية",accountEn:"KFSH&RC Clinical Predictive Intelligence",sectorAr:"تقنيات الصحة",sectorEn:"HealthTech",acv:16e5,cycleDays:85,winProb:82,stageIndex:2,color:"#ec4899"},{id:"opp_sal",accountAr:"شركة سال السعودية للخدمات اللوجستية - إدارة السلاسل الذكية",accountEn:"SAL Logistics Air Cargo Digital Ecosystem",sectorAr:"النقل واللوجستيات",sectorEn:"Logistics",acv:145e4,cycleDays:75,winProb:91,stageIndex:4,color:"#10b981"},{id:"opp_aramco",accountAr:"أرامكو السعودية - تحليلات الصيانة الاستباقية لمنشآت الطاقة",accountEn:"Aramco Energy IoT Diagnostics & Predictive Maintenance",sectorAr:"الطاقة والصناعة",sectorEn:"Energy & Industry",acv:45e5,cycleDays:180,winProb:58,stageIndex:1,color:"#f59e0b"},{id:"opp_futtaim",accountAr:"مجموعة الفطيم للتجزئة - منصة الولاء والذكاء التسويقي الموحد",accountEn:"Al-Futtaim Retail Omnichannel Customer Data Platform",sectorAr:"التجزئة والتجارة الرقمية",sectorEn:"Smart Retail",acv:98e4,cycleDays:60,winProb:84,stageIndex:3,color:"#06b6d4"}];function lc(r){const t=Math.max(0,Math.min(35,r.discount)),e=Math.max(1,Math.min(5,r.years)),n=Math.round(r.acv*(1-t/100)),i=n*e,s=[22,40,60,78,98][Math.max(0,Math.min(4,r.activeStage))],a=(r.meddicScore-60)*.35;let o=0;r.leverRoi&&(o+=5),r.leverSla&&(o+=4),r.leverPoc&&(o+=6),r.leverAlliance&&(o+=5);let l=0;t>=5&&t<=15?l=3:t>20&&(l=-2);let c=Math.round(s+a+o+l);c=Math.max(18,Math.min(99,c)),r.activeStage===4&&(c=Math.max(95,c));let d=({fintech:76,govtech:73,cloud_ai:78,telecom:71,healthtech:75,retail:72}[r.sector]||74)-t*.85-(r.leverPoc?2.5:0)-(r.leverSla?1.5:0)+(e-1)*1.8;d=Math.round(Math.max(38,Math.min(88,d))*10)/10;const f=50+Math.round(Math.sqrt(r.acv/18e3)*11);let _=0;r.leverPoc&&(_+=14),r.leverRoi&&(_+=9),r.leverAlliance&&(_+=11);const g=Math.round((r.meddicScore-50)*.4);let m=f-_-g;m=Math.max(35,Math.min(240,m));const p=Math.round(n*(c/100));let M="ممتازة - مسار إغلاق متسارع ومؤهل",S="Exceptional - High Close Velocity & Low Risk";c<45||r.meddicScore<50?(M="عالية المخاطر - فجوة في اعتماد المشتري والمعايير",S="High Risk - Qualification Gaps in MEDDIC & Criteria"):c<65||r.meddicScore<70?(M="متوسطة - تحتاج تعزيز البطل الداخلي وتوثيق العائد",S="Moderate - Needs Champion Enablement & ROI Proof"):c<82&&(M="قوية - تأهيل مكتمل وجاهزة للإغلاق التجاري",S="Strong - Fully Qualified for Commercial Execution");const x=Math.max(20,Math.min(100,Math.round(r.meddicScore*.95+(r.leverRoi?12:-6)))),A=Math.max(20,Math.min(100,Math.round(r.meddicScore*1.02+(r.activeStage>=2?8:-4)))),w=Math.max(20,Math.min(100,Math.round(r.meddicScore*.98+(r.leverPoc?10:-3)))),T=Math.max(20,Math.min(100,Math.round(r.meddicScore*.94+(r.leverSla?8:0)))),C=Math.max(20,Math.min(100,Math.round(r.meddicScore*1.05+4))),v=Math.max(20,Math.min(100,Math.round(r.meddicScore*.96+(r.leverAlliance?11:-2))));return{tcv:i,netAcv:n,winProbability:c,netMargin:d,salesCycleDays:m,estimatedArrImpact:p,dealHealthLabelAr:M,dealHealthLabelEn:S,meddicAxes:[{key:"M",labelAr:"المقاييس الكمية (Metrics)",labelEn:"Metrics (ROI & KPI Impact)",score:x},{key:"E",labelAr:"المشتري الاقتصادي (Economic Buyer)",labelEn:"Economic Buyer Direct Access",score:A},{key:"D1",labelAr:"معايير القرار (Decision Criteria)",labelEn:"Decision Criteria Alignment",score:w},{key:"D2",labelAr:"مسار اتخاذ القرار (Decision Process)",labelEn:"Decision Process & Governance",score:T},{key:"I",labelAr:"تحديد الألم المؤسسي (Identify Pain)",labelEn:"Identify Compelling Enterprise Pain",score:C},{key:"C",labelAr:"البطل الداخلي (Champion Enablement)",labelEn:"Champion Power & Influence",score:v}]}}function Lu(r){const t=Math.max(1,r.monthlyLeads),e=Math.max(1,Math.min(100,r.conversionRate))/100,n=Math.max(1,Math.round(t*12*e)),i=Math.round(n*r.avgAcv),s=1.28+(r.nrr-100)/100*.5,a=Math.round(i*s),o=Math.max(.04,1-Math.min(.96,r.nrr/100)+.08),l=Math.round(r.avgAcv*(r.grossMargin/100)/o),c=r.cac>0?Number((l/r.cac).toFixed(1)):4.5,h=r.avgAcv*(r.grossMargin/100)/12,u=h>0?Math.max(2.5,Number((r.cac/h).toFixed(1))):6,d=[],f=[];for(let _=1;_<=12;_++){const g=_/12,m=(Math.sin((g-.5)*Math.PI)+1)/2,p=Math.round(i*(.15+.85*m)),M=Math.round(a*(.12+.88*Math.pow(g,1.35)));d.push(p),f.push(M)}return{newClientsPerYear:n,projectedArr:i,strategicArr:a,ltv:l,ltvCacRatio:c,cacPaybackMonths:u,baselineMonthlyArr:d,strategicMonthlyArr:f}}let hr=null,ur=!0;function Ws(){if(typeof window>"u")return null;if(!hr){const r=window.AudioContext||window.webkitAudioContext;r&&(hr=new r)}return hr&&hr.state==="suspended"&&hr.resume(),hr}class is{static setEnabled(t){ur=t}static isEnabled(){return ur}static playClick(){if(!ur)return;const t=Ws();if(t)try{const e=t.createOscillator(),n=t.createGain(),i=t.currentTime;e.type="sine",e.frequency.setValueAtTime(640,i),e.frequency.exponentialRampToValueAtTime(320,i+.04),n.gain.setValueAtTime(.08,i),n.gain.exponentialRampToValueAtTime(.001,i+.04),e.connect(n),n.connect(t.destination),e.start(i),e.stop(i+.045)}catch{}}static playStage(t){if(!ur)return;const e=Ws();if(e)try{const n=[329.63,392,493.88,587.33,783.99],i=n[Math.max(0,Math.min(n.length-1,t))]||440,s=e.currentTime,a=e.createOscillator(),o=e.createGain();a.type="triangle",a.frequency.setValueAtTime(i,s),a.frequency.exponentialRampToValueAtTime(i*1.25,s+.08),o.gain.setValueAtTime(.12,s),o.gain.exponentialRampToValueAtTime(.001,s+.16);const l=e.createOscillator(),c=e.createGain();l.type="sine",l.frequency.setValueAtTime(i*1.5,s),c.gain.setValueAtTime(.06,s),c.gain.exponentialRampToValueAtTime(.001,s+.22),a.connect(o),o.connect(e.destination),l.connect(c),c.connect(e.destination),a.start(s),l.start(s),a.stop(s+.18),l.stop(s+.24)}catch{}}static playToggle(t){if(!ur)return;const e=Ws();if(e)try{const n=e.createOscillator(),i=e.createGain(),s=e.currentTime;n.type="sine";const a=t?440:580,o=t?660:360;n.frequency.setValueAtTime(a,s),n.frequency.exponentialRampToValueAtTime(o,s+.06),i.gain.setValueAtTime(.09,s),i.gain.exponentialRampToValueAtTime(.001,s+.07),n.connect(i),i.connect(e.destination),n.start(s),n.stop(s+.075)}catch{}}static playContractClosedChord(){if(!ur)return;const t=Ws();if(t)try{const e=[523.25,659.25,783.99,1046.5],n=t.currentTime;e.forEach((i,s)=>{const a=t.createOscillator(),o=t.createGain(),l=s*.07;a.type=s===3?"triangle":"sine",a.frequency.setValueAtTime(i,n+l),o.gain.setValueAtTime(.001,n+l),o.gain.linearRampToValueAtTime(.14-s*.02,n+l+.02),o.gain.exponentialRampToValueAtTime(.001,n+l+.6),a.connect(o),o.connect(t.destination),a.start(n+l),a.stop(n+l+.65)})}catch{}}}function Tf(r){is.setEnabled(r)}function Af(){return is.isEnabled()}function Ne(){is.playClick()}function $a(r){is.playStage(r)}function wf(r){is.playToggle(r)}function ja(){is.playContractClosedChord()}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="174",Or={ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cf=0,Qc=1,Rf=2,Iu=1,Pf=2,Zn=3,Ti=0,Je=1,Mn=2,ii=0,Br=1,$i=2,th=3,eh=4,Df=5,Xi=100,Lf=101,If=102,Uf=103,Nf=104,Ff=200,Of=201,Bf=202,zf=203,Jo=204,Qo=205,kf=206,Vf=207,Hf=208,Gf=209,Wf=210,Xf=211,qf=212,Yf=213,$f=214,tl=0,el=1,nl=2,Wr=3,il=4,rl=5,sl=6,al=7,Uu=0,jf=1,Kf=2,Mi=0,Zf=1,Jf=2,Qf=3,Nu=4,tp=5,ep=6,np=7,Fu=300,Xr=301,qr=302,ol=303,ll=304,Ka=306,cl=1e3,ji=1001,hl=1002,Fn=1003,ip=1004,Xs=1005,En=1006,ao=1007,Ki=1008,ai=1009,Ou=1010,Bu=1011,ws=1012,hc=1013,rr=1014,ei=1015,ri=1016,uc=1017,dc=1018,Yr=1020,zu=35902,ku=1021,Vu=1022,Nn=1023,Hu=1024,Gu=1025,zr=1026,$r=1027,Wu=1028,fc=1029,Xu=1030,pc=1031,mc=1033,Ma=33776,Sa=33777,Ea=33778,ba=33779,ul=35840,dl=35841,fl=35842,pl=35843,ml=36196,gl=37492,_l=37496,vl=37808,xl=37809,yl=37810,Ml=37811,Sl=37812,El=37813,bl=37814,Tl=37815,Al=37816,wl=37817,Cl=37818,Rl=37819,Pl=37820,Dl=37821,Ta=36492,Ll=36494,Il=36495,qu=36283,Ul=36284,Nl=36285,Fl=36286,rp=3200,sp=3201,Yu=0,ap=1,gi="",yn="srgb",jr="srgb-linear",Da="linear",ee="srgb",dr=7680,nh=519,op=512,lp=513,cp=514,$u=515,hp=516,up=517,dp=518,fp=519,Ol=35044,ih="300 es",ni=2e3,La=2001;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Aa=Math.PI/180,Bl=180/Math.PI;function Si(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[r&255]+Be[r>>8&255]+Be[r>>16&255]+Be[r>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Wt(r,t,e){return Math.max(t,Math.min(e,r))}function pp(r,t){return(r%t+t)%t}function oo(r,t,e){return(1-e)*r+e*t}function kn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ne(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const mp={DEG2RAD:Aa};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,s,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],A=i[2],w=i[5],T=i[8];return s[0]=a*g+o*M+l*A,s[3]=a*m+o*S+l*w,s[6]=a*p+o*x+l*T,s[1]=c*g+h*M+u*A,s[4]=c*m+h*S+u*w,s[7]=c*p+h*x+u*T,s[2]=d*g+f*M+_*A,s[5]=d*m+f*S+_*w,s[8]=d*p+f*x+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=e*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(lo.makeScale(t,e)),this}rotate(t){return this.premultiply(lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Vt;function ju(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ia(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gp(){const r=Ia("canvas");return r.style.display="block",r}const rh={};function Vi(r){r in rh||(rh[r]=!0,console.warn(r))}function _p(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function vp(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xp(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const sh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ah=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yp(){const r={enabled:!0,workingColorSpace:jr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ee&&(i.r=si(i.r),i.g=si(i.g),i.b=si(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ee&&(i.r=kr(i.r),i.g=kr(i.g),i.b=kr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gi?Da:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[jr]:{primaries:t,whitePoint:n,transfer:Da,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:t,whitePoint:n,transfer:ee,toXYZ:sh,fromXYZ:ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),r}const Zt=yp();function si(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function kr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fr;class Mp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fr===void 0&&(fr=Ia("canvas")),fr.width=t.width,fr.height=t.height;const n=fr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fr}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ia("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=si(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sp=0;class gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Si(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(co(i[a].image)):s.push(co(i[a]))}else s=co(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function co(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Mp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ep=0;class Ye extends or{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=ji,i=ji,s=En,a=Ki,o=Nn,l=ai,c=Ye.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Si(),this.name="",this.source=new gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cl:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case hl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cl:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case hl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Fu;Ye.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,i=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,x=(f+1)/2,A=(p+1)/2,w=(h+d)/4,T=(u+g)/4,C=(_+m)/4;return S>x&&S>A?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=w/n,s=T/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bp extends or{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new gc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class On extends bp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ku extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tp extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-o;const p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const A=Math.sqrt(S),w=Math.atan2(A,p*M);m=Math.sin(m*w)/A,o=Math.sin(o*w)/A}const x=o*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+_*x,u=u*m+g*x,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+h*u+l*f-c*d,t[e+1]=l*_+h*d+c*u-o*f,t[e+2]=c*_+h*f+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>u){const f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-n-u);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-s*i),u=2*(s*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ho.copy(this).projectOnVector(t),this.sub(ho)}reflect(t){return this.sub(ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ho=new U,oh=new sr;class Fs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),Ys.subVectors(this.max,as),pr.subVectors(t.a,as),mr.subVectors(t.b,as),gr.subVectors(t.c,as),ci.subVectors(mr,pr),hi.subVectors(gr,mr),Ii.subVectors(pr,gr);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ii.z,Ii.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ii.z,0,-Ii.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ii.y,Ii.x,0];return!uo(e,pr,mr,gr,Ys)||(e=[1,0,0,0,1,0,0,0,1],!uo(e,pr,mr,gr,Ys))?!1:($s.crossVectors(ci,hi),e=[$s.x,$s.y,$s.z],uo(e,pr,mr,gr,Ys))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qn=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,qs=new Fs,pr=new U,mr=new U,gr=new U,ci=new U,hi=new U,Ii=new U,as=new U,Ys=new U,$s=new U,Ui=new U;function uo(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ui.fromArray(r,s);const o=i.x*Math.abs(Ui.x)+i.y*Math.abs(Ui.y)+i.z*Math.abs(Ui.z),l=t.dot(Ui),c=e.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ap=new Fs,os=new U,fo=new U;class Os{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(fo)),this.expandByPoint(os.copy(t.center).sub(fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new U,po=new U,js=new U,ui=new U,mo=new U,Ks=new U,go=new U;class Bs{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){po.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(po);const s=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=ui.dot(this.direction),l=-ui.dot(js),c=ui.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(po).addScaledVector(js,d),f}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){mo.subVectors(e,t),Ks.subVectors(n,t),go.crossVectors(mo,Ks);let a=this.direction.dot(go),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ui.subVectors(this.origin,t);const l=o*this.direction.dot(Ks.crossVectors(ui,Ks));if(l<0)return null;const c=o*this.direction.dot(mo.cross(ui));if(c<0||l+c>a)return null;const h=-o*ui.dot(go);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m)}set(t,e,n,i,s,a,o,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_r.setFromMatrixColumn(t,0).length(),s=1/_r.setFromMatrixColumn(t,1).length(),a=1/_r.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+f,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*u+_,e[10]=d-g*u}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=f*u-_,e[2]=_*u-f,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wp,t,Cp)}lookAt(t,e,n){const i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(n,an),di.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(n,an)),di.normalize(),Zs.crossVectors(an,di),i[0]=di.x,i[4]=Zs.x,i[8]=an.x,i[1]=di.y,i[5]=Zs.y,i[9]=an.y,i[2]=di.z,i[6]=Zs.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],A=n[15],w=i[0],T=i[4],C=i[8],v=i[12],y=i[1],D=i[5],N=i[9],F=i[13],V=i[2],G=i[6],X=i[10],j=i[14],W=i[3],ot=i[7],I=i[11],P=i[15];return s[0]=a*w+o*y+l*V+c*W,s[4]=a*T+o*D+l*G+c*ot,s[8]=a*C+o*N+l*X+c*I,s[12]=a*v+o*F+l*j+c*P,s[1]=h*w+u*y+d*V+f*W,s[5]=h*T+u*D+d*G+f*ot,s[9]=h*C+u*N+d*X+f*I,s[13]=h*v+u*F+d*j+f*P,s[2]=_*w+g*y+m*V+p*W,s[6]=_*T+g*D+m*G+p*ot,s[10]=_*C+g*N+m*X+p*I,s[14]=_*v+g*F+m*j+p*P,s[3]=M*w+S*y+x*V+A*W,s[7]=M*T+S*D+x*G+A*ot,s[11]=M*C+S*N+x*X+A*I,s[15]=M*v+S*F+x*j+A*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*f-n*l*f)+g*(+e*l*f-e*c*d+s*a*d-i*a*f+i*c*h-s*l*h)+m*(+e*c*u-e*o*f-s*a*u+n*a*f+s*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=u*m*c-g*d*c+g*l*f-o*m*f-u*l*p+o*d*p,S=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,x=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,A=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*M+n*S+i*x+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=M*T,t[1]=(g*d*s-u*m*s-g*i*f+n*m*f+u*i*p-n*d*p)*T,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*T,t[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*f-n*l*f)*T,t[4]=S*T,t[5]=(h*m*s-_*d*s+_*i*f-e*m*f-h*i*p+e*d*p)*T,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*T,t[7]=(a*d*s-h*l*s+h*i*c-e*d*c-a*i*f+e*l*f)*T,t[8]=x*T,t[9]=(_*u*s-h*g*s-_*n*f+e*g*f+h*n*p-e*u*p)*T,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*T,t[11]=(h*o*s-a*u*s-h*n*c+e*u*c+a*n*f-e*o*f)*T,t[12]=A*T,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*T,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*T,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,m=a*u,p=o*u,M=l*c,S=l*h,x=l*u,A=n.x,w=n.y,T=n.z;return i[0]=(1-(g+p))*A,i[1]=(f+x)*A,i[2]=(_-S)*A,i[3]=0,i[4]=(f-x)*w,i[5]=(1-(d+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(_+S)*T,i[9]=(m-M)*T,i[10]=(1-(d+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=_r.set(i[0],i[1],i[2]).length();const a=_r.set(i[4],i[5],i[6]).length(),o=_r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Pn.copy(this);const c=1/s,h=1/a,u=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=u,Pn.elements[9]*=u,Pn.elements[10]*=u,e.setFromRotationMatrix(Pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=ni){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,_;if(o===ni)f=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===La)f=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=ni){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-s),d=(e+t)*c,f=(n+i)*h;let _,g;if(o===ni)_=(a+s)*u,g=-2*u;else if(o===La)_=s*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _r=new U,Pn=new se,wp=new U(0,0,0),Cp=new U(1,1,1),di=new U,Zs=new U,an=new U,lh=new se,ch=new sr;class Gn{constructor(t=0,e=0,n=0,i=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ch.setFromEuler(this),this.setFromQuaternion(ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Rp=0;const hh=new U,vr=new sr,$n=new se,Js=new U,ls=new U,Pp=new U,Dp=new sr,uh=new U(1,0,0),dh=new U(0,1,0),fh=new U(0,0,1),ph={type:"added"},Lp={type:"removed"},xr={type:"childadded",child:null},_o={type:"childremoved",child:null};class we extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=we.DEFAULT_UP.clone();const t=new U,e=new Gn,n=new sr,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Vt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=we.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.multiply(vr),this}rotateOnWorldAxis(t,e){return vr.setFromAxisAngle(t,e),this.quaternion.premultiply(vr),this}rotateX(t){return this.rotateOnAxis(uh,t)}rotateY(t){return this.rotateOnAxis(dh,t)}rotateZ(t){return this.rotateOnAxis(fh,t)}translateOnAxis(t,e){return hh.copy(t).applyQuaternion(this.quaternion),this.position.add(hh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uh,t)}translateY(t){return this.translateOnAxis(dh,t)}translateZ(t){return this.translateOnAxis(fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(ls,Js,this.up):$n.lookAt(Js,ls,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),vr.setFromRotationMatrix($n),this.quaternion.premultiply(vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ph),xr.child=t,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lp),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ph),xr.child=t,this.dispatchEvent(xr),xr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,Pp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,Dp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}we.DEFAULT_UP=new U(0,1,0);we.DEFAULT_MATRIX_AUTO_UPDATE=!0;we.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new U,jn=new U,vo=new U,Kn=new U,yr=new U,Mr=new U,mh=new U,xo=new U,yo=new U,Mo=new U,So=new re,Eo=new re,bo=new re;class Sn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Dn.subVectors(t,e),i.cross(Dn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Dn.subVectors(i,e),jn.subVectors(n,e),vo.subVectors(t,e);const a=Dn.dot(Dn),o=Dn.dot(jn),l=Dn.dot(vo),c=jn.dot(jn),h=jn.dot(vo),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(a,Kn.y),l.addScaledVector(o,Kn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return So.setScalar(0),Eo.setScalar(0),bo.setScalar(0),So.fromBufferAttribute(t,e),Eo.fromBufferAttribute(t,n),bo.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(So,s.x),a.addScaledVector(Eo,s.y),a.addScaledVector(bo,s.z),a}static isFrontFacing(t,e,n,i){return Dn.subVectors(n,e),jn.subVectors(t,e),Dn.cross(jn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Dn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Dn.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;yr.subVectors(i,n),Mr.subVectors(s,n),xo.subVectors(t,n);const l=yr.dot(xo),c=Mr.dot(xo);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,i);const h=yr.dot(yo),u=Mr.dot(yo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(yr,a);Mo.subVectors(t,s);const f=yr.dot(Mo),_=Mr.dot(Mo);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Mr,o);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return mh.subVectors(s,i),o=(u-h)/(u-h+(f-_)),e.copy(i).addScaledVector(mh,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(yr,a).addScaledVector(Mr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fi={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function To(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class At{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=pp(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=To(a,s,t+1/3),this.g=To(a,s,t),this.b=To(a,s,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=yn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const n=Zu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return Zt.fromWorkingColorSpace(ze.copy(this),t),Math.round(Wt(ze.r*255,0,255))*65536+Math.round(Wt(ze.g*255,0,255))*256+Math.round(Wt(ze.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(ze.copy(this),e);const n=ze.r,i=ze.g,s=ze.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(ze.copy(this),e),t.r=ze.r,t.g=ze.g,t.b=ze.b,t}getStyle(t=yn){Zt.fromWorkingColorSpace(ze.copy(this),t);const e=ze.r,n=ze.g,i=ze.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fi),this.setHSL(fi.h+t,fi.s+e,fi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fi),t.getHSL(Qs);const n=oo(fi.h,Qs.h,e),i=oo(fi.s,Qs.s,e),s=oo(fi.l,Qs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ze=new At;At.NAMES=Zu;let Ip=0;class Ri extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Br,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Qo,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Qo&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class In extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new U,ta=new gt;let Up=0;class An{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Up++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=ei,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ta.fromBufferAttribute(this,e),ta.applyMatrix3(t),this.setXY(e,ta.x,ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}}class Ju extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qu extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Np=0;const vn=new se,Ao=new we,Sr=new U,on=new Fs,cs=new Fs,De=new U;class Ce extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ju(t)?Qu:Ju)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ao.lookAt(t),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];on.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(on.min,cs.min),on.expandByPoint(De),De.addVectors(on.max,cs.max),on.expandByPoint(De)):(on.expandByPoint(cs.min),on.expandByPoint(cs.max))}on.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Sr.fromBufferAttribute(t,c),De.add(Sr)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new U,l[C]=new U;const c=new U,h=new U,u=new U,d=new gt,f=new gt,_=new gt,g=new U,m=new U;function p(C,v,y){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,y),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,y),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),o[C].add(g),o[v].add(g),o[y].add(g),l[C].add(m),l[v].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,v=M.length;C<v;++C){const y=M[C],D=y.start,N=y.count;for(let F=D,V=D+N;F<V;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const S=new U,x=new U,A=new U,w=new U;function T(C){A.fromBufferAttribute(i,C),w.copy(A);const v=o[C];S.copy(v),S.sub(A.multiplyScalar(A.dot(v))).normalize(),x.crossVectors(w,v);const D=x.dot(l[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,D)}for(let C=0,v=M.length;C<v;++C){const y=M[C],D=y.start,N=y.count;for(let F=D,V=D+N;F<V;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gh=new se,Ni=new Bs,ea=new Os,_h=new U,na=new U,ia=new U,ra=new U,wo=new U,sa=new U,vh=new U,aa=new U;class de extends we{constructor(t=new Ce,e=new In){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){sa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(wo.fromBufferAttribute(u,t),a?sa.addScaledVector(wo,h):sa.addScaledVector(wo.sub(e),h))}e.add(sa)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),Ni.copy(t.ray).recast(t.near),!(ea.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(ea,_h)===null||Ni.origin.distanceToSquared(_h)>(t.far-t.near)**2))&&(gh.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ni)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=S;x<A;x+=3){const w=o.getX(x),T=o.getX(x+1),C=o.getX(x+2);i=oa(this,p,t,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=oa(this,a,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,A=S;x<A;x+=3){const w=x,T=x+1,C=x+2;i=oa(this,p,t,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,x=m+2;i=oa(this,a,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Fp(r,t,e,n,i,s,a,o){let l;if(t.side===Je?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Ti,o),l===null)return null;aa.copy(o),aa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(aa);return c<e.near||c>e.far?null:{distance:c,point:aa.clone(),object:r}}function oa(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,na),r.getVertexPosition(l,ia),r.getVertexPosition(c,ra);const h=Fp(r,t,e,n,na,ia,ra,vh);if(h){const u=new U;Sn.getBarycoord(vh,na,ia,ra,u),i&&(h.uv=Sn.getInterpolatedAttribute(i,o,l,c,u,new gt)),s&&(h.uv1=Sn.getInterpolatedAttribute(s,o,l,c,u,new gt)),a&&(h.normal=Sn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Sn.getNormal(na,ia,ra,d.normal),h.face=d,h.barycoord=u}return h}class zs extends Ce{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function _(g,m,p,M,S,x,A,w,T,C,v){const y=x/T,D=A/C,N=x/2,F=A/2,V=w/2,G=T+1,X=C+1;let j=0,W=0;const ot=new U;for(let I=0;I<X;I++){const P=I*D-F;for(let et=0;et<G;et++){const lt=et*y-N;ot[g]=lt*M,ot[m]=P*S,ot[p]=V,c.push(ot.x,ot.y,ot.z),ot[g]=0,ot[m]=0,ot[p]=w>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(et/T),u.push(1-I/C),j+=1}}for(let I=0;I<C;I++)for(let P=0;P<T;P++){const et=d+P+G*I,lt=d+P+G*(I+1),k=d+(P+1)+G*(I+1),$=d+(P+1)+G*I;l.push(et,lt,$),l.push(lt,k,$),W+=6}o.addGroup(f,W,v),f+=W,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Kr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Xe(r){const t={};for(let e=0;e<r.length;e++){const n=Kr(r[e]);for(const i in n)t[i]=n[i]}return t}function Op(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function td(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}const Ua={clone:Kr,merge:Xe};var Bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ze extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bp,this.fragmentShader=zp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=Op(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ed extends we{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=ni}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new U,xh=new gt,yh=new gt;class cn extends ed{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,xh,yh),e.subVectors(yh,xh)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Aa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Er=-90,br=1;class kp extends we{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new cn(Er,br,t,e);i.layers=this.layers,this.add(i);const s=new cn(Er,br,t,e);s.layers=this.layers,this.add(s);const a=new cn(Er,br,t,e);a.layers=this.layers,this.add(a);const o=new cn(Er,br,t,e);o.layers=this.layers,this.add(o);const l=new cn(Er,br,t,e);l.layers=this.layers,this.add(l);const c=new cn(Er,br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nd extends Ye{constructor(t,e,n,i,s,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Xr,super(t,e,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vp extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new nd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zs(5,5,5),s=new Ze({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:ii});s.uniforms.tEquirect.value=e;const a=new de(i,s),o=e.minFilter;return e.minFilter===Ki&&(e.minFilter=En),new kp(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class Un extends we{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hp={type:"move"};class Co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Na{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(t),this.density=e}clone(){return new Na(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Gp extends we{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wp{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new U;class Fa{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ne(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),n=ne(n,this.array),i=ne(i,this.array),s=ne(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Fa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class zl extends Ri{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Tr;const hs=new U,Ar=new U,wr=new U,Cr=new gt,us=new gt,id=new se,la=new U,ds=new U,ca=new U,Mh=new gt,Ro=new gt,Sh=new gt;class Eh extends we{constructor(t=new zl){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Ce;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wp(e,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new Fa(n,3,0,!1)),Tr.setAttribute("uv",new Fa(n,2,3,!1))}this.geometry=Tr,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),id.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-wr.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;ha(la.set(-.5,-.5,0),wr,a,Ar,i,s),ha(ds.set(.5,-.5,0),wr,a,Ar,i,s),ha(ca.set(.5,.5,0),wr,a,Ar,i,s),Mh.set(0,0),Ro.set(1,0),Sh.set(1,1);let o=t.ray.intersectTriangle(la,ds,ca,!1,hs);if(o===null&&(ha(ds.set(-.5,.5,0),wr,a,Ar,i,s),Ro.set(0,1),o=t.ray.intersectTriangle(la,ca,ds,!1,hs),o===null))return;const l=t.ray.origin.distanceTo(hs);l<t.near||l>t.far||e.push({distance:l,point:hs.clone(),uv:Sn.getInterpolation(hs,la,ds,ca,Mh,Ro,Sh,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ha(r,t,e,n,i,s){Cr.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(us.x=s*Cr.x-i*Cr.y,us.y=i*Cr.x+s*Cr.y):us.copy(Cr),r.copy(t),r.x+=us.x,r.y+=us.y,r.applyMatrix4(id)}const Po=new U,Xp=new U,qp=new Vt;class mi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Po.subVectors(n,e).cross(Xp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||qp.getNormalMatrix(t),i=this.coplanarPoint(Po).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new Os,ua=new U;class vc{constructor(t=new mi,e=new mi,n=new mi,i=new mi,s=new mi,a=new mi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ni){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+a,d+h,m+_,x+M).normalize(),n[3].setComponents(l-a,d-h,m-_,x-M).normalize(),n[4].setComponents(l-o,d-u,m-g,x-S).normalize(),e===ni)n[5].setComponents(l+o,d+u,m+g,x+S).normalize();else if(e===La)n[5].setComponents(o,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ua.x=i.normal.x>0?t.max.x:t.min.x,ua.y=i.normal.y>0?t.max.y:t.min.y,ua.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ua)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xc extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new At(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Oa=new U,Ba=new U,bh=new se,fs=new Bs,da=new Os,Do=new U,Th=new U;class rd extends we{constructor(t=new Ce,e=new xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Oa.fromBufferAttribute(e,i-1),Ba.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Oa.distanceTo(Ba);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(i),da.radius+=s,t.ray.intersectsSphere(da)===!1)return;bh.copy(i).invert(),fs.copy(t.ray).applyMatrix4(bh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=h.getX(g),M=h.getX(g+1),S=fa(this,t,fs,l,p,M,g);S&&e.push(S)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=fa(this,t,fs,l,g,m,_-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=fa(this,t,fs,l,g,g+1,g);p&&e.push(p)}if(this.isLineLoop){const g=fa(this,t,fs,l,_-1,f,_-1);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function fa(r,t,e,n,i,s,a){const o=r.geometry.attributes.position;if(Oa.fromBufferAttribute(o,i),Ba.fromBufferAttribute(o,s),e.distanceSqToSegment(Oa,Ba,Do,Th)>n)return;Do.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Do);if(!(c<t.near||c>t.far))return{distance:c,point:Th.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Ah=new U,wh=new U;class Yp extends rd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Ah.fromBufferAttribute(e,i),wh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ah.distanceTo(wh);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sd extends Ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ch=new se,kl=new Bs,pa=new Os,ma=new U;class $p extends we{constructor(t=new Ce,e=new sd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(i),pa.radius+=s,t.ray.intersectsSphere(pa)===!1)return;Ch.copy(i).invert(),kl.copy(t.ray).applyMatrix4(Ch);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);ma.fromBufferAttribute(u,m),Rh(ma,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)ma.fromBufferAttribute(u,_),Rh(ma,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Rh(r,t,e,n,i,s,a){const o=kl.distanceSqToPoint(r);if(o<e){const l=new U;kl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ph extends Ye{constructor(t,e,n,i,s,a,o,l,c){super(t,e,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ad extends Ye{constructor(t,e,n,i,s,a,o,l,c,h=zr){if(h!==zr&&h!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zr&&(n=rr),n===void 0&&h===$r&&(n=Yr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jp{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(a-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new gt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,i=[],s=[],a=[],o=new U,l=new se;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Wt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Wt(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function Kp(r,t){const e=1-r;return e*e*t}function Zp(r,t){return 2*(1-r)*r*t}function Jp(r,t){return r*r*t}function Lo(r,t,e,n){return Kp(r,t)+Zp(r,e)+Jp(r,n)}class Qp extends jp{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(Lo(t,i.x,s.x,a.x),Lo(t,i.y,s.y,a.y),Lo(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ys extends Ce{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;M(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function M(){const x=new U,A=new U;let w=0;const T=(e-t)/n;for(let C=0;C<=s;C++){const v=[],y=C/s,D=y*(e-t)+t;for(let N=0;N<=i;N++){const F=N/i,V=F*l+o,G=Math.sin(V),X=Math.cos(V);A.x=D*G,A.y=-y*n+m,A.z=D*X,u.push(A.x,A.y,A.z),x.set(G,T,X).normalize(),d.push(x.x,x.y,x.z),f.push(F,1-y),v.push(_++)}g.push(v)}for(let C=0;C<i;C++)for(let v=0;v<s;v++){const y=g[v][C],D=g[v+1][C],N=g[v+1][C+1],F=g[v][C+1];(t>0||v!==0)&&(h.push(y,D,F),w+=3),(e>0||v!==s-1)&&(h.push(D,N,F),w+=3)}c.addGroup(p,w,0),p+=w}function S(x){const A=_,w=new gt,T=new U;let C=0;const v=x===!0?t:e,y=x===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),_++;const D=_;for(let N=0;N<=i;N++){const V=N/i*l+o,G=Math.cos(V),X=Math.sin(V);T.x=v*X,T.y=m*y,T.z=v*G,u.push(T.x,T.y,T.z),d.push(0,y,0),w.x=G*.5+.5,w.y=X*.5*y+.5,f.push(w.x,w.y),_++}for(let N=0;N<i;N++){const F=A+N,V=D+N;x===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Za extends Ce{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(s.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const S=new U,x=new U,A=new U;for(let w=0;w<e.length;w+=3)f(e[w+0],S),f(e[w+1],x),f(e[w+2],A),l(S,x,A,M)}function l(M,S,x,A){const w=A+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const v=M.clone().lerp(x,C/w),y=S.clone().lerp(x,C/w),D=w-C;for(let N=0;N<=D;N++)N===0&&C===w?T[C][N]=v:T[C][N]=v.clone().lerp(y,N/D)}for(let C=0;C<w;C++)for(let v=0;v<2*(w-C)-1;v++){const y=Math.floor(v/2);v%2===0?(d(T[C][y+1]),d(T[C+1][y]),d(T[C][y])):(d(T[C][y+1]),d(T[C+1][y+1]),d(T[C+1][y]))}}function c(M){const S=new U;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(M),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){const M=new U;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];const x=m(M)/2/Math.PI+.5,A=p(M)/Math.PI+.5;a.push(x,1-A)}_(),u()}function u(){for(let M=0;M<a.length;M+=6){const S=a[M+0],x=a[M+2],A=a[M+4],w=Math.max(S,x,A),T=Math.min(S,x,A);w>.9&&T<.1&&(S<.2&&(a[M+0]+=1),x<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,S){const x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function _(){const M=new U,S=new U,x=new U,A=new U,w=new gt,T=new gt,C=new gt;for(let v=0,y=0;v<s.length;v+=9,y+=6){M.set(s[v+0],s[v+1],s[v+2]),S.set(s[v+3],s[v+4],s[v+5]),x.set(s[v+6],s[v+7],s[v+8]),w.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),C.set(a[y+4],a[y+5]),A.copy(M).add(S).add(x).divideScalar(3);const D=m(A);g(w,y+0,M,D),g(T,y+2,S,D),g(C,y+4,x,D)}}function g(M,S,x,A){A<0&&M.x===1&&(a[S]=M.x-1),x.x===0&&x.z===0&&(a[S]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.vertices,t.indices,t.radius,t.details)}}class yc extends Za{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yc(t.radius,t.detail)}}class za extends Za{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new za(t.radius,t.detail)}}class Ja extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const M=p*d-a;for(let S=0;S<c;S++){const x=S*u-s;_.push(x,-M,0),g.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const S=M+c*p,x=M+c*(p+1),A=M+1+c*(p+1),w=M+1+c*p;f.push(S,x,w),f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ja(t.width,t.height,t.widthSegments,t.heightSegments)}}class ka extends Ce{constructor(t=.5,e=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,f=new U,_=new gt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,x=M+n+1,A=M+n+2,w=M+1;o.push(S,x,w),o.push(x,A,w)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ka(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ms extends Ce{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&a===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const w=A/e;u.x=-t*Math.cos(i+w*s)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(i+w*s)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+x,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const S=h[p][M+1],x=h[p][M],A=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(S,x,w),(p!==n-1||l<Math.PI)&&f.push(x,A,w)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(g,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ss extends Ce{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new U,u=new U,d=new U;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,M=(i+1)*f+_;a.push(g,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Rr extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yu,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class tm extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class em extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Mc extends we{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Io=new se,Dh=new U,Lh=new U;class od{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Lh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Lh),e.updateMatrixWorld(),Io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ih=new se,ps=new U,Uo=new U;class nm extends od{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ps.setFromMatrixPosition(t.matrixWorld),n.position.copy(ps),Uo.copy(n.position),Uo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Uo),n.updateMatrixWorld(),i.makeTranslation(-ps.x,-ps.y,-ps.z),Ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ih)}}class Uh extends Mc{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Sc extends ed{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class im extends od{constructor(){super(new Sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rm extends Mc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(we.DEFAULT_UP),this.updateMatrix(),this.target=new we,this.shadow=new im}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sm extends Mc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class am extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class ld{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nh(){return performance.now()}const Fh=new se;class om{constructor(t,e,n=0,i=1/0){this.ray=new Bs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new _c,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fh),this}intersectObject(t,e=!0,n=[]){return Vl(t,this,n,e),n.sort(Oh),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Vl(t[i],this,n,e);return n.sort(Oh),n}}function Oh(r,t){return r.distance-t.distance}function Vl(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Vl(s[a],t,e,!0)}}class Bh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class No extends Yp{constructor(t=10,e=10,n=4473924,i=8947848){n=new At(n),i=new At(i);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=e;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===s?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new Ce;h.setAttribute("position",new ae(l,3)),h.setAttribute("color",new ae(c,3));const u=new xc({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class lm extends or{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function zh(r,t,e,n){const i=cm(n);switch(e){case ku:return r*t;case Hu:return r*t;case Gu:return r*t*2;case Wu:return r*t/i.components*i.byteLength;case fc:return r*t/i.components*i.byteLength;case Xu:return r*t*2/i.components*i.byteLength;case pc:return r*t*2/i.components*i.byteLength;case Vu:return r*t*3/i.components*i.byteLength;case Nn:return r*t*4/i.components*i.byteLength;case mc:return r*t*4/i.components*i.byteLength;case Ma:case Sa:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ea:case ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dl:case pl:return Math.max(r,16)*Math.max(t,8)/4;case ul:case fl:return Math.max(r,8)*Math.max(t,8)/2;case ml:case gl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case bl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Pl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ta:case Ll:case Il:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qu:case Ul:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Nl:case Fl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function cm(r){switch(r){case ai:case Ou:return{byteLength:1,components:1};case ws:case Bu:case ri:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case rr:case hc:case ei:return{byteLength:4,components:1};case zu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function cd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function hm(r){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,o),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Em=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Um=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ym=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$m=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Km=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$g=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,r_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,__=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,x_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,w_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,D_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,I_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,N_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,H_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:vm,batching_pars_vertex:xm,batching_vertex:ym,begin_vertex:Mm,beginnormal_vertex:Sm,bsdfs:Em,iridescence_fragment:bm,bumpmap_pars_fragment:Tm,clipping_planes_fragment:Am,clipping_planes_pars_fragment:wm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Rm,color_fragment:Pm,color_pars_fragment:Dm,color_pars_vertex:Lm,color_vertex:Im,common:Um,cube_uv_reflection_fragment:Nm,defaultnormal_vertex:Fm,displacementmap_pars_vertex:Om,displacementmap_vertex:Bm,emissivemap_fragment:zm,emissivemap_pars_fragment:km,colorspace_fragment:Vm,colorspace_pars_fragment:Hm,envmap_fragment:Gm,envmap_common_pars_fragment:Wm,envmap_pars_fragment:Xm,envmap_pars_vertex:qm,envmap_physical_pars_fragment:ig,envmap_vertex:Ym,fog_vertex:$m,fog_pars_vertex:jm,fog_fragment:Km,fog_pars_fragment:Zm,gradientmap_pars_fragment:Jm,lightmap_pars_fragment:Qm,lights_lambert_fragment:tg,lights_lambert_pars_fragment:eg,lights_pars_begin:ng,lights_toon_fragment:rg,lights_toon_pars_fragment:sg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:vg,map_particle_fragment:xg,map_particle_pars_fragment:yg,metalnessmap_fragment:Mg,metalnessmap_pars_fragment:Sg,morphinstance_vertex:Eg,morphcolor_vertex:bg,morphnormal_vertex:Tg,morphtarget_pars_vertex:Ag,morphtarget_vertex:wg,normal_fragment_begin:Cg,normal_fragment_maps:Rg,normal_pars_fragment:Pg,normal_pars_vertex:Dg,normal_vertex:Lg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Og,opaque_fragment:Bg,packing:zg,premultiplied_alpha_fragment:kg,project_vertex:Vg,dithering_fragment:Hg,dithering_pars_fragment:Gg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:$g,shadowmask_pars_fragment:jg,skinbase_vertex:Kg,skinning_pars_vertex:Zg,skinning_vertex:Jg,skinnormal_vertex:Qg,specularmap_fragment:t_,specularmap_pars_fragment:e_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:r_,transmission_pars_fragment:s_,uv_pars_fragment:a_,uv_pars_vertex:o_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:__,distanceRGBA_vert:v_,distanceRGBA_frag:x_,equirect_vert:y_,equirect_frag:M_,linedashed_vert:S_,linedashed_frag:E_,meshbasic_vert:b_,meshbasic_frag:T_,meshlambert_vert:A_,meshlambert_frag:w_,meshmatcap_vert:C_,meshmatcap_frag:R_,meshnormal_vert:P_,meshnormal_frag:D_,meshphong_vert:L_,meshphong_frag:I_,meshphysical_vert:U_,meshphysical_frag:N_,meshtoon_vert:F_,meshtoon_frag:O_,points_vert:B_,points_frag:z_,shadow_vert:k_,shadow_frag:V_,sprite_vert:H_,sprite_frag:G_},ht={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},zn={basic:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Xe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Xe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Xe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new At(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Xe([ht.points,ht.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Xe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Xe([ht.common,ht.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Xe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Xe([ht.sprite,ht.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Xe([ht.common,ht.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Xe([ht.lights,ht.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};zn.physical={uniforms:Xe([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const ga={r:0,b:0,g:0},Oi=new Gn,W_=new se;function X_(r,t,e,n,i,s,a){const o=new At(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1;const A=_(S);A===null?p(o,l):A&&A.isColor&&(p(A,1),x=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){const A=_(x);A&&(A.isCubeTexture||A.mapping===Ka)?(h===void 0&&(h=new de(new zs(1,1,1),new Ze({name:"BackgroundCubeMaterial",uniforms:Kr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(x.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(Oi)),h.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ee,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new de(new Ja(2,2),new Ze({name:"BackgroundMaterial",uniforms:Kr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(A.colorSpace)!==ee,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(ga,td(r)),n.buffers.color.setClear(ga.r,ga.g,ga.b,x,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:g,addToRenderList:m,dispose:M}}function q_(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(y,D,N,F,V){let G=!1;const X=u(F,N,D);s!==X&&(s=X,c(s.object)),G=f(y,F,N,V),G&&_(y,F,N,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,x(y,D,N,F),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,D,N){const F=N.wireframe===!0;let V=n[y.id];V===void 0&&(V={},n[y.id]=V);let G=V[D.id];G===void 0&&(G={},V[D.id]=G);let X=G[F];return X===void 0&&(X=d(l()),G[F]=X),X}function d(y){const D=[],N=[],F=[];for(let V=0;V<e;V++)D[V]=0,N[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,D,N,F){const V=s.attributes,G=D.attributes;let X=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){const I=V[W];let P=G[W];if(P===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(P=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(P=y.instanceColor)),I===void 0||I.attribute!==P||P&&I.data!==P.data)return!0;X++}return s.attributesNum!==X||s.index!==F}function _(y,D,N,F){const V={},G=D.attributes;let X=0;const j=N.getAttributes();for(const W in j)if(j[W].location>=0){let I=G[W];I===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(I=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(I=y.instanceColor));const P={};P.attribute=I,I&&I.data&&(P.data=I.data),V[W]=P,X++}s.attributes=V,s.attributesNum=X,s.index=F}function g(){const y=s.newAttributes;for(let D=0,N=y.length;D<N;D++)y[D]=0}function m(y){p(y,0)}function p(y,D){const N=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;N[y]=1,F[y]===0&&(r.enableVertexAttribArray(y),F[y]=1),V[y]!==D&&(r.vertexAttribDivisor(y,D),V[y]=D)}function M(){const y=s.newAttributes,D=s.enabledAttributes;for(let N=0,F=D.length;N<F;N++)D[N]!==y[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function S(y,D,N,F,V,G,X){X===!0?r.vertexAttribIPointer(y,D,N,V,G):r.vertexAttribPointer(y,D,N,F,V,G)}function x(y,D,N,F){g();const V=F.attributes,G=N.getAttributes(),X=D.defaultAttributeValues;for(const j in G){const W=G[j];if(W.location>=0){let ot=V[j];if(ot===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const I=ot.normalized,P=ot.itemSize,et=t.get(ot);if(et===void 0)continue;const lt=et.buffer,k=et.type,$=et.bytesPerElement,it=k===r.INT||k===r.UNSIGNED_INT||ot.gpuType===hc;if(ot.isInterleavedBufferAttribute){const Z=ot.data,at=Z.stride,bt=ot.offset;if(Z.isInstancedInterleavedBuffer){for(let ct=0;ct<W.locationSize;ct++)p(W.location+ct,Z.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let ct=0;ct<W.locationSize;ct++)S(W.location+ct,P/W.locationSize,k,I,at*$,(bt+P/W.locationSize*ct)*$,it)}else{if(ot.isInstancedBufferAttribute){for(let Z=0;Z<W.locationSize;Z++)p(W.location+Z,ot.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<W.locationSize;Z++)m(W.location+Z);r.bindBuffer(r.ARRAY_BUFFER,lt);for(let Z=0;Z<W.locationSize;Z++)S(W.location+Z,P/W.locationSize,k,I,P*$,P/W.locationSize*Z*$,it)}}else if(X!==void 0){const I=X[j];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(W.location,I);break;case 3:r.vertexAttrib3fv(W.location,I);break;case 4:r.vertexAttrib4fv(W.location,I);break;default:r.vertexAttrib1fv(W.location,I)}}}}M()}function A(){C();for(const y in n){const D=n[y];for(const N in D){const F=D[N];for(const V in F)h(F[V].object),delete F[V];delete D[N]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const N in D){const F=D[N];for(const V in F)h(F[V].object),delete F[V];delete D[N]}delete n[y.id]}function T(y){for(const D in n){const N=n[D];if(N[y.id]===void 0)continue;const F=N[y.id];for(const V in F)h(F[V].object),delete F[V];delete N[y.id]}}function C(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:v,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Y_(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function $_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Nn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===ri&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ei&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:A,maxSamples:w}}function j_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new mi,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{const M=s?0:n,S=M*4;let x=p.clippingState||null;l.value=x,x=h(_,d,S,f);for(let A=0;A!==S;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==g;++S,x+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function K_(r){let t=new WeakMap;function e(a,o){return o===ol?a.mapping=Xr:o===ll&&(a.mapping=qr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ol||o===ll)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Vp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Ur=4,kh=[.125,.215,.35,.446,.526,.582],qi=20,Fo=new Sc,Vh=new At;let Oo=null,Bo=0,zo=0,ko=!1;const Hi=(1+Math.sqrt(5))/2,Pr=1/Hi,Hh=[new U(-Hi,Pr,0),new U(Hi,Pr,0),new U(-Pr,0,Hi),new U(Pr,0,Hi),new U(0,Hi,-Pr),new U(0,Hi,Pr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Z_=new U;class Gh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=Z_}=s;Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,zo),this._renderer.xr.enabled=ko,t.scissorTest=!1,_a(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xr||t.mapping===qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ri,format:Nn,colorSpace:jr,depthBuffer:!1},i=Wh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=J_(s)),this._blurMaterial=Q_(s,t,e)}return i}_compileMaterial(t){const e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Fo)}_sceneToCubeUV(t,e,n,i,s){const l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Vh),u.toneMapping=Mi,u.autoClear=!1;const _=new In({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new de(new zs,_);let m=!1;const p=t.background;p?p.isColor&&(_.color.copy(p),t.background=null,m=!0):(_.color.copy(Vh),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));const x=this._cubeSize;_a(i,S*x,M>2?x:0,x,x),u.setRenderTarget(i),m&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Xr||t.mapping===qr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=qh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new de(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;_a(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hh[(i-s-1)%Hh.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new de(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qi-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):qi;m>qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qi}`);const p=[];let M=0;for(let T=0;T<qi;++T){const C=T/g,v=Math.exp(-C*C/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;const x=this._sizeLods[i],A=3*x*(i>S-Ur?i-S+Ur:0),w=4*(this._cubeSize-x);_a(e,A,w,3*x,2*x),l.setRenderTarget(e),l.render(u,Fo)}}function J_(r){const t=[],e=[],n=[];let i=r;const s=r-Ur+1+kh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Ur?l=kh[a-r+Ur-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),S=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,v=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(v,g*_*w),S.set(d,m*_*w);const y=[w,w,w,w,w,w];x.set(y,p*_*w)}const A=new Ce;A.setAttribute("position",new An(M,g)),A.setAttribute("uv",new An(S,m)),A.setAttribute("faceIndex",new An(x,p)),t.push(A),i>Ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wh(r,t,e){const n=new On(r,t,e);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _a(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Q_(r,t,e){const n=new Float32Array(qi),i=new U(0,1,0);return new Ze({name:"SphericalGaussianBlur",defines:{n:qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Xh(){return new Ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function qh(){return new Ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t0(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ol||l===ll,h=l===Xr||l===qr;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Gh(r)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Gh(r)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function e0(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function n0(r,t,e,n){const i={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let S=0,x=M.length;S<x;S+=3){const A=M[S+0],w=M[S+1],T=M[S+2];d.push(A,w,w,T,T,A)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const A=S+0,w=S+1,T=S+2;d.push(A,w,w,T,T,A)}}else return;const m=new(ju(d)?Qu:Ju)(d,1);m.version=g;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i0(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),e.update(f,n,_))}function h(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r0(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function s0(r,t,e){const n=new WeakMap,i=new re;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let y=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let A=o.attributes.position.count*x,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*u),C=new Ku(T,A,w,u);C.type=ei,C.needsUpdate=!0;const v=x*4;for(let D=0;D<u;D++){const N=p[D],F=M[D],V=S[D],G=A*w*4*D;for(let X=0;X<N.count;X++){const j=X*v;_===!0&&(i.fromBufferAttribute(N,X),T[G+j+0]=i.x,T[G+j+1]=i.y,T[G+j+2]=i.z,T[G+j+3]=0),g===!0&&(i.fromBufferAttribute(F,X),T[G+j+4]=i.x,T[G+j+5]=i.y,T[G+j+6]=i.z,T[G+j+7]=0),m===!0&&(i.fromBufferAttribute(V,X),T[G+j+8]=i.x,T[G+j+9]=i.y,T[G+j+10]=i.z,T[G+j+11]=V.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new gt(A,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function a0(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const hd=new Ye,Yh=new ad(1,1),ud=new Ku,dd=new Tp,fd=new nd,$h=[],jh=[],Kh=new Float32Array(16),Zh=new Float32Array(9),Jh=new Float32Array(4);function rs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=$h[i];if(s===void 0&&(s=new Float32Array(i),$h[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Re(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Pe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Qa(r,t){let e=jh[t];e===void 0&&(e=new Int32Array(t),jh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function o0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function l0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2fv(this.addr,t),Pe(e,t)}}function c0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;r.uniform3fv(this.addr,t),Pe(e,t)}}function h0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4fv(this.addr,t),Pe(e,t)}}function u0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Jh.set(n),r.uniformMatrix2fv(this.addr,!1,Jh),Pe(e,n)}}function d0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Zh.set(n),r.uniformMatrix3fv(this.addr,!1,Zh),Pe(e,n)}}function f0(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;Kh.set(n),r.uniformMatrix4fv(this.addr,!1,Kh),Pe(e,n)}}function p0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function m0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2iv(this.addr,t),Pe(e,t)}}function g0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3iv(this.addr,t),Pe(e,t)}}function _0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4iv(this.addr,t),Pe(e,t)}}function v0(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function x0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;r.uniform2uiv(this.addr,t),Pe(e,t)}}function y0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;r.uniform3uiv(this.addr,t),Pe(e,t)}}function M0(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;r.uniform4uiv(this.addr,t),Pe(e,t)}}function S0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Yh.compareFunction=$u,s=Yh):s=hd,e.setTexture2D(t||s,i)}function E0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||dd,i)}function b0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fd,i)}function T0(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ud,i)}function A0(r){switch(r){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return h0;case 35674:return u0;case 35675:return d0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return _0;case 5125:return v0;case 36294:return x0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return S0;case 35679:case 36299:case 36307:return E0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return T0}}function w0(r,t){r.uniform1fv(this.addr,t)}function C0(r,t){const e=rs(t,this.size,2);r.uniform2fv(this.addr,e)}function R0(r,t){const e=rs(t,this.size,3);r.uniform3fv(this.addr,e)}function P0(r,t){const e=rs(t,this.size,4);r.uniform4fv(this.addr,e)}function D0(r,t){const e=rs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function L0(r,t){const e=rs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function I0(r,t){const e=rs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function U0(r,t){r.uniform1iv(this.addr,t)}function N0(r,t){r.uniform2iv(this.addr,t)}function F0(r,t){r.uniform3iv(this.addr,t)}function O0(r,t){r.uniform4iv(this.addr,t)}function B0(r,t){r.uniform1uiv(this.addr,t)}function z0(r,t){r.uniform2uiv(this.addr,t)}function k0(r,t){r.uniform3uiv(this.addr,t)}function V0(r,t){r.uniform4uiv(this.addr,t)}function H0(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||hd,s[a])}function G0(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||dd,s[a])}function W0(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||fd,s[a])}function X0(r,t,e){const n=this.cache,i=t.length,s=Qa(e,i);Re(n,s)||(r.uniform1iv(this.addr,s),Pe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ud,s[a])}function q0(r){switch(r){case 5126:return w0;case 35664:return C0;case 35665:return R0;case 35666:return P0;case 35674:return D0;case 35675:return L0;case 35676:return I0;case 5124:case 35670:return U0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return k0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return H0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return W0;case 36289:case 36303:case 36311:case 36292:return X0}}class Y0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}}class $0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q0(e.type)}}class j0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Vo=/(\w+)(\])?(\[|\.)?/g;function Qh(r,t){r.seq.push(t),r.map[t.id]=t}function K0(r,t,e){const n=r.name,i=n.length;for(Vo.lastIndex=0;;){const s=Vo.exec(n),a=Vo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Qh(e,c===void 0?new Y0(o,r,t):new $0(o,r,t));break}else{let u=e.map[o];u===void 0&&(u=new j0(o),Qh(e,u)),e=u}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);K0(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function tu(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Z0=37297;let J0=0;function Q0(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const eu=new Vt;function tv(r){Zt._getMatrix(eu,Zt.workingColorSpace,r);const t=`mat3( ${eu.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(r)){case Da:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function nu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Q0(r.getShaderSource(t),a)}else return i}function ev(r,t){const e=tv(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function nv(r,t){let e;switch(t){case Zf:e="Linear";break;case Jf:e="Reinhard";break;case Qf:e="Cineon";break;case Nu:e="ACESFilmic";break;case ep:e="AgX";break;case np:e="Neutral";break;case tp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const va=new U;function iv(){Zt.getLuminanceCoefficients(va);const r=va.x.toFixed(4),t=va.y.toFixed(4),e=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function sv(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function av(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function gs(r){return r!==""}function iu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ru(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hl(r){return r.replace(ov,cv)}const lv=new Map;function cv(r,t){let e=Gt[t];if(e===void 0){const n=lv.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hl(e)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(r){return r.replace(hv,uv)}function uv(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function au(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dv(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Pf?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Zn&&(t="SHADOWMAP_TYPE_VSM"),t}function fv(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Xr:case qr:t="ENVMAP_TYPE_CUBE";break;case Ka:t="ENVMAP_TYPE_CUBE_UV";break}return t}function pv(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qr:t="ENVMAP_MODE_REFRACTION";break}return t}function mv(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Uu:t="ENVMAP_BLENDING_MULTIPLY";break;case jf:t="ENVMAP_BLENDING_MIX";break;case Kf:t="ENVMAP_BLENDING_ADD";break}return t}function gv(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _v(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=dv(e),c=fv(e),h=pv(e),u=mv(e),d=gv(e),f=rv(e),_=sv(s),g=i.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Mi?nv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,ev("linearToOutputTexel",e.outputColorSpace),iv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gs).join(`
`)),a=Hl(a),a=iu(a,e),a=ru(a,e),o=Hl(o),o=iu(o,e),o=ru(o,e),a=su(a),o=su(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+a,x=M+p+o,A=tu(i,i.VERTEX_SHADER,S),w=tu(i,i.FRAGMENT_SHADER,x);i.attachShader(g,A),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(D){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(g).trim(),F=i.getShaderInfoLog(A).trim(),V=i.getShaderInfoLog(w).trim();let G=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const j=nu(i,A,"vertex"),W=nu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+N+`
`+j+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||V==="")&&(X=!1);X&&(D.diagnostics={runnable:G,programLog:N,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(A),i.deleteShader(w),C=new wa(i,g),v=av(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,Z0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let vv=0;class xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new yv(t),e.set(t,n)),n}}class yv{constructor(t){this.id=vv++,this.code=t,this.usedTimes=0}}function Mv(r,t,e,n,i,s,a){const o=new _c,l=new xv,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,D,N,F){const V=N.fog,G=F.geometry,X=v.isMeshStandardMaterial?N.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),W=j&&j.mapping===Ka?j.image.height:null,ot=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const I=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,P=I!==void 0?I.length:0;let et=0;G.morphAttributes.position!==void 0&&(et=1),G.morphAttributes.normal!==void 0&&(et=2),G.morphAttributes.color!==void 0&&(et=3);let lt,k,$,it;if(ot){const te=zn[ot];lt=te.vertexShader,k=te.fragmentShader}else lt=v.vertexShader,k=v.fragmentShader,l.update(v),$=l.getVertexShaderID(v),it=l.getFragmentShaderID(v);const Z=r.getRenderTarget(),at=r.state.buffers.depth.getReversed(),bt=F.isInstancedMesh===!0,ct=F.isBatchedMesh===!0,Dt=!!v.map,It=!!v.matcap,wt=!!j,L=!!v.aoMap,oe=!!v.lightMap,Nt=!!v.bumpMap,Ft=!!v.normalMap,Mt=!!v.displacementMap,$t=!!v.emissiveMap,vt=!!v.metalnessMap,R=!!v.roughnessMap,E=v.anisotropy>0,H=v.clearcoat>0,Q=v.dispersion>0,nt=v.iridescence>0,J=v.sheen>0,Tt=v.transmission>0,ut=E&&!!v.anisotropyMap,_t=H&&!!v.clearcoatMap,Xt=H&&!!v.clearcoatNormalMap,st=H&&!!v.clearcoatRoughnessMap,xt=nt&&!!v.iridescenceMap,Ut=nt&&!!v.iridescenceThicknessMap,Ot=J&&!!v.sheenColorMap,St=J&&!!v.sheenRoughnessMap,Yt=!!v.specularMap,Ht=!!v.specularColorMap,he=!!v.specularIntensityMap,O=Tt&&!!v.transmissionMap,dt=Tt&&!!v.thicknessMap,K=!!v.gradientMap,tt=!!v.alphaMap,mt=v.alphaTest>0,pt=!!v.alphaHash,kt=!!v.extensions;let ve=Mi;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ve=r.toneMapping);const Oe={shaderID:ot,shaderType:v.type,shaderName:v.name,vertexShader:lt,fragmentShader:k,defines:v.defines,customVertexShaderID:$,customFragmentShaderID:it,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ct,batchingColor:ct&&F._colorsTexture!==null,instancing:bt,instancingColor:bt&&F.instanceColor!==null,instancingMorph:bt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?r.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:jr,alphaToCoverage:!!v.alphaToCoverage,map:Dt,matcap:It,envMap:wt,envMapMode:wt&&j.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:oe,bumpMap:Nt,normalMap:Ft,displacementMap:d&&Mt,emissiveMap:$t,normalMapObjectSpace:Ft&&v.normalMapType===ap,normalMapTangentSpace:Ft&&v.normalMapType===Yu,metalnessMap:vt,roughnessMap:R,anisotropy:E,anisotropyMap:ut,clearcoat:H,clearcoatMap:_t,clearcoatNormalMap:Xt,clearcoatRoughnessMap:st,dispersion:Q,iridescence:nt,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:St,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:he,transmission:Tt,transmissionMap:O,thicknessMap:dt,gradientMap:K,opaque:v.transparent===!1&&v.blending===Br&&v.alphaToCoverage===!1,alphaMap:tt,alphaTest:mt,alphaHash:pt,combine:v.combine,mapUv:Dt&&g(v.map.channel),aoMapUv:L&&g(v.aoMap.channel),lightMapUv:oe&&g(v.lightMap.channel),bumpMapUv:Nt&&g(v.bumpMap.channel),normalMapUv:Ft&&g(v.normalMap.channel),displacementMapUv:Mt&&g(v.displacementMap.channel),emissiveMapUv:$t&&g(v.emissiveMap.channel),metalnessMapUv:vt&&g(v.metalnessMap.channel),roughnessMapUv:R&&g(v.roughnessMap.channel),anisotropyMapUv:ut&&g(v.anisotropyMap.channel),clearcoatMapUv:_t&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(v.sheenRoughnessMap.channel),specularMapUv:Yt&&g(v.specularMap.channel),specularColorMapUv:Ht&&g(v.specularColorMap.channel),specularIntensityMapUv:he&&g(v.specularIntensityMap.channel),transmissionMapUv:O&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:tt&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ft||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Dt||tt),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:at,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:Dt&&v.map.isVideoTexture===!0&&Zt.getTransfer(v.map.colorSpace)===ee,decodeVideoTextureEmissive:$t&&v.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(v.emissiveMap.colorSpace)===ee,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Je,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:kt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&v.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)y.push(D),y.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(M(y,v),S(y,v),y.push(r.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){const y=_[v.type];let D;if(y){const N=zn[y];D=Ua.clone(N.uniforms)}else D=v.uniforms;return D}function A(v,y){let D;for(let N=0,F=h.length;N<F;N++){const V=h[N];if(V.cacheKey===y){D=V,++D.usedTimes;break}}return D===void 0&&(D=new _v(r,y,v,s),h.push(D)),D}function w(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),v.destroy()}}function T(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function Sv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ev(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function ou(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function lu(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),t++,p}function o(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,_,g,m){const p=a(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||Ev),n.length>1&&n.sort(d||ou),i.length>1&&i.sort(d||ou)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:h,sort:c}}function bv(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new lu,r.set(n,[a])):i>=s.length?(a=new lu,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Tv(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new At};break;case"SpotLight":e={position:new U,direction:new U,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Av(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let wv=0;function Cv(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Rv(r){const t=new Tv,e=Av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new se,a=new se;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,S=0,x=0,A=0,w=0,T=0;c.sort(Cv);for(let v=0,y=c.length;v<y;v++){const D=c[v],N=D.color,F=D.intensity,V=D.distance,G=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=N.r*F,u+=N.g*F,d+=N.b*F;else if(D.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(D.sh.coefficients[X],F);T++}else if(D.isDirectionalLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const j=D.shadow,W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=D.shadow.matrix,M++}n.directional[f]=X,f++}else if(D.isSpotLight){const X=t.get(D);X.position.setFromMatrixPosition(D.matrixWorld),X.color.copy(N).multiplyScalar(F),X.distance=V,X.coneCos=Math.cos(D.angle),X.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),X.decay=D.decay,n.spot[g]=X;const j=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,j.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[g]=j.matrix,D.castShadow){const W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=G,x++}g++}else if(D.isRectAreaLight){const X=t.get(D);X.color.copy(N).multiplyScalar(F),X.halfWidth.set(D.width*.5,0,0),X.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=X,m++}else if(D.isPointLight){const X=t.get(D);if(X.color.copy(D.color).multiplyScalar(D.intensity),X.distance=D.distance,X.decay=D.decay,D.castShadow){const j=D.shadow,W=e.get(D);W.shadowIntensity=j.intensity,W.shadowBias=j.bias,W.shadowNormalBias=j.normalBias,W.shadowRadius=j.radius,W.shadowMapSize=j.mapSize,W.shadowCameraNear=j.camera.near,W.shadowCameraFar=j.camera.far,n.pointShadow[_]=W,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=D.shadow.matrix,S++}n.point[_]=X,_++}else if(D.isHemisphereLight){const X=t.get(D);X.skyColor.copy(D.color).multiplyScalar(F),X.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=T,n.version=wv++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function cu(r){const t=new Rv(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Pv(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new cu(r),t.set(i,[o])):s>=a.length?(o=new cu(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Iv(r,t,e){let n=new vc;const i=new gt,s=new gt,a=new re,o=new tm({depthPacking:sp}),l=new em,c={},h=e.maxTextureSize,u={[Ti]:Je,[Je]:Ti,[Mn]:Mn},d=new Ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Dv,fragmentShader:Lv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Ce;_.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new de(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const v=r.getRenderTarget(),y=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),N=r.state;N.setBlending(ii),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const F=p!==Zn&&this.type===Zn,V=p===Zn&&this.type!==Zn;for(let G=0,X=w.length;G<X;G++){const j=w[G],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const ot=W.getFrameExtents();if(i.multiply(ot),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ot.x),i.x=s.x*ot.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ot.y),i.y=s.y*ot.y,W.mapSize.y=s.y)),W.map===null||F===!0||V===!0){const P=this.type!==Zn?{minFilter:Fn,magFilter:Fn}:{};W.map!==null&&W.map.dispose(),W.map=new On(i.x,i.y,P),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const I=W.getViewportCount();for(let P=0;P<I;P++){const et=W.getViewport(P);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),N.viewport(a),W.updateMatrices(j,P),n=W.getFrustum(),x(T,C,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===Zn&&M(W,C),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,y,D)};function M(w,T){const C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,f,g,null)}function S(w,T,C,v){let y=null;const D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)y=D;else if(y=C.isPointLight===!0?l:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const N=y.uuid,F=T.uuid;let V=c[N];V===void 0&&(V={},c[N]=V);let G=V[F];G===void 0&&(G=y.clone(),V[F]=G,T.addEventListener("dispose",A)),y=G}if(y.visible=T.visible,y.wireframe=T.wireframe,v===Zn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:u[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=r.properties.get(y);N.light=C}return y}function x(w,T,C,v,y){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Zn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const F=t.update(w),V=w.material;if(Array.isArray(V)){const G=F.groups;for(let X=0,j=G.length;X<j;X++){const W=G[X],ot=V[W.materialIndex];if(ot&&ot.visible){const I=S(w,ot,v,y);w.onBeforeShadow(r,w,T,C,F,I,W),r.renderBufferDirect(C,null,F,I,w,W),w.onAfterShadow(r,w,T,C,F,I,W)}}}else if(V.visible){const G=S(w,V,v,y);w.onBeforeShadow(r,w,T,C,F,G,null),r.renderBufferDirect(C,null,F,G,w,null),w.onAfterShadow(r,w,T,C,F,G,null)}}const N=w.children;for(let F=0,V=N.length;F<V;F++)x(N[F],T,C,v,y)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const v=c[C],y=w.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const Uv={[tl]:el,[nl]:sl,[il]:al,[Wr]:rl,[el]:tl,[sl]:nl,[al]:il,[rl]:Wr};function Nv(r,t){function e(){let O=!1;const dt=new re;let K=null;const tt=new re(0,0,0,0);return{setMask:function(mt){K!==mt&&!O&&(r.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){O=mt},setClear:function(mt,pt,kt,ve,Oe){Oe===!0&&(mt*=ve,pt*=ve,kt*=ve),dt.set(mt,pt,kt,ve),tt.equals(dt)===!1&&(r.clearColor(mt,pt,kt,ve),tt.copy(dt))},reset:function(){O=!1,K=null,tt.set(-1,0,0,0)}}}function n(){let O=!1,dt=!1,K=null,tt=null,mt=null;return{setReversed:function(pt){if(dt!==pt){const kt=t.get("EXT_clip_control");dt?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const ve=mt;mt=null,this.setClear(ve)}dt=pt},getReversed:function(){return dt},setTest:function(pt){pt?Z(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(pt){K!==pt&&!O&&(r.depthMask(pt),K=pt)},setFunc:function(pt){if(dt&&(pt=Uv[pt]),tt!==pt){switch(pt){case tl:r.depthFunc(r.NEVER);break;case el:r.depthFunc(r.ALWAYS);break;case nl:r.depthFunc(r.LESS);break;case Wr:r.depthFunc(r.LEQUAL);break;case il:r.depthFunc(r.EQUAL);break;case rl:r.depthFunc(r.GEQUAL);break;case sl:r.depthFunc(r.GREATER);break;case al:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}tt=pt}},setLocked:function(pt){O=pt},setClear:function(pt){mt!==pt&&(dt&&(pt=1-pt),r.clearDepth(pt),mt=pt)},reset:function(){O=!1,K=null,tt=null,mt=null,dt=!1}}}function i(){let O=!1,dt=null,K=null,tt=null,mt=null,pt=null,kt=null,ve=null,Oe=null;return{setTest:function(te){O||(te?Z(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(te){dt!==te&&!O&&(r.stencilMask(te),dt=te)},setFunc:function(te,wn,Xn){(K!==te||tt!==wn||mt!==Xn)&&(r.stencilFunc(te,wn,Xn),K=te,tt=wn,mt=Xn)},setOp:function(te,wn,Xn){(pt!==te||kt!==wn||ve!==Xn)&&(r.stencilOp(te,wn,Xn),pt=te,kt=wn,ve=Xn)},setLocked:function(te){O=te},setClear:function(te){Oe!==te&&(r.clearStencil(te),Oe=te)},reset:function(){O=!1,dt=null,K=null,tt=null,mt=null,pt=null,kt=null,ve=null,Oe=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,A=null,w=null,T=new At(0,0,0),C=0,v=!1,y=null,D=null,N=null,F=null,V=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),X=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),X=j>=2);let ot=null,I={};const P=r.getParameter(r.SCISSOR_BOX),et=r.getParameter(r.VIEWPORT),lt=new re().fromArray(P),k=new re().fromArray(et);function $(O,dt,K,tt){const mt=new Uint8Array(4),pt=r.createTexture();r.bindTexture(O,pt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let kt=0;kt<K;kt++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(dt,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,mt):r.texImage2D(dt+kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,mt);return pt}const it={};it[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(r.DEPTH_TEST),a.setFunc(Wr),Nt(!1),Ft(Qc),Z(r.CULL_FACE),L(ii);function Z(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function at(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function bt(O,dt){return u[O]!==dt?(r.bindFramebuffer(O,dt),u[O]=dt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=dt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=dt),!0):!1}function ct(O,dt){let K=f,tt=!1;if(O){K=d.get(dt),K===void 0&&(K=[],d.set(dt,K));const mt=O.textures;if(K.length!==mt.length||K[0]!==r.COLOR_ATTACHMENT0){for(let pt=0,kt=mt.length;pt<kt;pt++)K[pt]=r.COLOR_ATTACHMENT0+pt;K.length=mt.length,tt=!0}}else K[0]!==r.BACK&&(K[0]=r.BACK,tt=!0);tt&&r.drawBuffers(K)}function Dt(O){return _!==O?(r.useProgram(O),_=O,!0):!1}const It={[Xi]:r.FUNC_ADD,[Lf]:r.FUNC_SUBTRACT,[If]:r.FUNC_REVERSE_SUBTRACT};It[Uf]=r.MIN,It[Nf]=r.MAX;const wt={[Ff]:r.ZERO,[Of]:r.ONE,[Bf]:r.SRC_COLOR,[Jo]:r.SRC_ALPHA,[Wf]:r.SRC_ALPHA_SATURATE,[Hf]:r.DST_COLOR,[kf]:r.DST_ALPHA,[zf]:r.ONE_MINUS_SRC_COLOR,[Qo]:r.ONE_MINUS_SRC_ALPHA,[Gf]:r.ONE_MINUS_DST_COLOR,[Vf]:r.ONE_MINUS_DST_ALPHA,[Xf]:r.CONSTANT_COLOR,[qf]:r.ONE_MINUS_CONSTANT_COLOR,[Yf]:r.CONSTANT_ALPHA,[$f]:r.ONE_MINUS_CONSTANT_ALPHA};function L(O,dt,K,tt,mt,pt,kt,ve,Oe,te){if(O===ii){g===!0&&(at(r.BLEND),g=!1);return}if(g===!1&&(Z(r.BLEND),g=!0),O!==Df){if(O!==m||te!==v){if((p!==Xi||x!==Xi)&&(r.blendEquation(r.FUNC_ADD),p=Xi,x=Xi),te)switch(O){case Br:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $i:r.blendFunc(r.ONE,r.ONE);break;case th:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Br:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case $i:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case th:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case eh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,S=null,A=null,w=null,T.set(0,0,0),C=0,m=O,v=te}return}mt=mt||dt,pt=pt||K,kt=kt||tt,(dt!==p||mt!==x)&&(r.blendEquationSeparate(It[dt],It[mt]),p=dt,x=mt),(K!==M||tt!==S||pt!==A||kt!==w)&&(r.blendFuncSeparate(wt[K],wt[tt],wt[pt],wt[kt]),M=K,S=tt,A=pt,w=kt),(ve.equals(T)===!1||Oe!==C)&&(r.blendColor(ve.r,ve.g,ve.b,Oe),T.copy(ve),C=Oe),m=O,v=!1}function oe(O,dt){O.side===Mn?at(r.CULL_FACE):Z(r.CULL_FACE);let K=O.side===Je;dt&&(K=!K),Nt(K),O.blending===Br&&O.transparent===!1?L(ii):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const tt=O.stencilWrite;o.setTest(tt),tt&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),$t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Z(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(O){y!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),y=O)}function Ft(O){O!==Cf?(Z(r.CULL_FACE),O!==D&&(O===Qc?r.cullFace(r.BACK):O===Rf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),D=O}function Mt(O){O!==N&&(X&&r.lineWidth(O),N=O)}function $t(O,dt,K){O?(Z(r.POLYGON_OFFSET_FILL),(F!==dt||V!==K)&&(r.polygonOffset(dt,K),F=dt,V=K)):at(r.POLYGON_OFFSET_FILL)}function vt(O){O?Z(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function R(O){O===void 0&&(O=r.TEXTURE0+G-1),ot!==O&&(r.activeTexture(O),ot=O)}function E(O,dt,K){K===void 0&&(ot===null?K=r.TEXTURE0+G-1:K=ot);let tt=I[K];tt===void 0&&(tt={type:void 0,texture:void 0},I[K]=tt),(tt.type!==O||tt.texture!==dt)&&(ot!==K&&(r.activeTexture(K),ot=K),r.bindTexture(O,dt||it[O]),tt.type=O,tt.texture=dt)}function H(){const O=I[ot];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Q(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function nt(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xt(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(O){lt.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),lt.copy(O))}function St(O){k.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),k.copy(O))}function Yt(O,dt){let K=c.get(dt);K===void 0&&(K=new WeakMap,c.set(dt,K));let tt=K.get(O);tt===void 0&&(tt=r.getUniformBlockIndex(dt,O.name),K.set(O,tt))}function Ht(O,dt){const tt=c.get(dt).get(O);l.get(dt)!==tt&&(r.uniformBlockBinding(dt,tt,O.__bindingPointIndex),l.set(dt,tt))}function he(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ot=null,I={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,A=null,w=null,T=new At(0,0,0),C=0,v=!1,y=null,D=null,N=null,F=null,V=null,lt.set(0,0,r.canvas.width,r.canvas.height),k.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:at,bindFramebuffer:bt,drawBuffers:ct,useProgram:Dt,setBlending:L,setMaterial:oe,setFlipSided:Nt,setCullFace:Ft,setLineWidth:Mt,setPolygonOffset:$t,setScissorTest:vt,activeTexture:R,bindTexture:E,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:xt,texImage3D:Ut,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:Xt,texStorage3D:st,texSubImage2D:J,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:_t,scissor:Ot,viewport:St,reset:he}}function Fv(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):Ia("canvas")}function g(R,E,H){let Q=1;const nt=vt(R);if((nt.width>H||nt.height>H)&&(Q=H/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(Q*nt.width),Tt=Math.floor(Q*nt.height);u===void 0&&(u=_(J,Tt));const ut=E?_(J,Tt):u;return ut.width=J,ut.height=Tt,ut.getContext("2d").drawImage(R,0,0,J,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+J+"x"+Tt+")."),ut}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,E,H,Q,nt=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===r.RED&&(H===r.FLOAT&&(J=r.R32F),H===r.HALF_FLOAT&&(J=r.R16F),H===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.R8UI),H===r.UNSIGNED_SHORT&&(J=r.R16UI),H===r.UNSIGNED_INT&&(J=r.R32UI),H===r.BYTE&&(J=r.R8I),H===r.SHORT&&(J=r.R16I),H===r.INT&&(J=r.R32I)),E===r.RG&&(H===r.FLOAT&&(J=r.RG32F),H===r.HALF_FLOAT&&(J=r.RG16F),H===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RG8UI),H===r.UNSIGNED_SHORT&&(J=r.RG16UI),H===r.UNSIGNED_INT&&(J=r.RG32UI),H===r.BYTE&&(J=r.RG8I),H===r.SHORT&&(J=r.RG16I),H===r.INT&&(J=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGB8UI),H===r.UNSIGNED_SHORT&&(J=r.RGB16UI),H===r.UNSIGNED_INT&&(J=r.RGB32UI),H===r.BYTE&&(J=r.RGB8I),H===r.SHORT&&(J=r.RGB16I),H===r.INT&&(J=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(J=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(J=r.RGBA16UI),H===r.UNSIGNED_INT&&(J=r.RGBA32UI),H===r.BYTE&&(J=r.RGBA8I),H===r.SHORT&&(J=r.RGBA16I),H===r.INT&&(J=r.RGBA32I)),E===r.RGB&&H===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),E===r.RGBA){const Tt=nt?Da:Zt.getTransfer(Q);H===r.FLOAT&&(J=r.RGBA32F),H===r.HALF_FLOAT&&(J=r.RGBA16F),H===r.UNSIGNED_BYTE&&(J=Tt===ee?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function x(R,E){let H;return R?E===null||E===rr||E===Yr?H=r.DEPTH24_STENCIL8:E===ei?H=r.DEPTH32F_STENCIL8:E===ws&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===rr||E===Yr?H=r.DEPTH_COMPONENT24:E===ei?H=r.DEPTH_COMPONENT32F:E===ws&&(H=r.DEPTH_COMPONENT16),H}function A(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==En?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){const E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function T(R){const E=R.target;E.removeEventListener("dispose",T),y(E)}function C(R){const E=n.get(R);if(E.__webglInit===void 0)return;const H=R.source,Q=d.get(H);if(Q){const nt=Q[E.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&v(R),Object.keys(Q).length===0&&d.delete(H)}n.remove(R)}function v(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const H=R.source,Q=d.get(H);delete Q[E.__cacheKey],a.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let nt=0;nt<E.__webglFramebuffer[Q].length;nt++)r.deleteFramebuffer(E.__webglFramebuffer[Q][nt]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,nt=H.length;Q<nt;Q++){const J=n.get(H[Q]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(H[Q])}n.remove(R)}let D=0;function N(){D=0}function F(){const R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function V(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function G(R,E){const H=n.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(H,R,E);return}}e.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function X(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){k(H,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function j(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){k(H,R,E);return}e.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function W(R,E){const H=n.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const ot={[cl]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[hl]:r.MIRRORED_REPEAT},I={[Fn]:r.NEAREST,[ip]:r.NEAREST_MIPMAP_NEAREST,[Xs]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[ao]:r.LINEAR_MIPMAP_NEAREST,[Ki]:r.LINEAR_MIPMAP_LINEAR},P={[op]:r.NEVER,[fp]:r.ALWAYS,[lp]:r.LESS,[$u]:r.LEQUAL,[cp]:r.EQUAL,[dp]:r.GEQUAL,[hp]:r.GREATER,[up]:r.NOTEQUAL};function et(R,E){if(E.type===ei&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===En||E.magFilter===ao||E.magFilter===Xs||E.magFilter===Ki||E.minFilter===En||E.minFilter===ao||E.minFilter===Xs||E.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ot[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ot[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ot[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Fn||E.minFilter!==Xs&&E.minFilter!==Ki||E.type===ei&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function lt(R,E){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));const Q=E.source;let nt=d.get(Q);nt===void 0&&(nt={},d.set(Q,nt));const J=V(E);if(J!==R.__cacheKey){nt[J]===void 0&&(nt[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),nt[J].usedTimes++;const Tt=nt[R.__cacheKey];Tt!==void 0&&(nt[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&v(E)),R.__cacheKey=J,R.__webglTexture=nt[J].texture}return H}function k(R,E,H){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);const nt=lt(R,E),J=E.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+H);const Tt=n.get(J);if(J.version!==Tt.__version||nt===!0){e.activeTexture(r.TEXTURE0+H);const ut=Zt.getPrimaries(Zt.workingColorSpace),_t=E.colorSpace===gi?null:Zt.getPrimaries(E.colorSpace),Xt=E.colorSpace===gi||ut===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let st=g(E.image,!1,i.maxTextureSize);st=$t(E,st);const xt=s.convert(E.format,E.colorSpace),Ut=s.convert(E.type);let Ot=S(E.internalFormat,xt,Ut,E.colorSpace,E.isVideoTexture);et(Q,E);let St;const Yt=E.mipmaps,Ht=E.isVideoTexture!==!0,he=Tt.__version===void 0||nt===!0,O=J.dataReady,dt=A(E,st);if(E.isDepthTexture)Ot=x(E.format===$r,E.type),he&&(Ht?e.texStorage2D(r.TEXTURE_2D,1,Ot,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Ot,st.width,st.height,0,xt,Ut,null));else if(E.isDataTexture)if(Yt.length>0){Ht&&he&&e.texStorage2D(r.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let K=0,tt=Yt.length;K<tt;K++)St=Yt[K],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,St.width,St.height,xt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,K,Ot,St.width,St.height,0,xt,Ut,St.data);E.generateMipmaps=!1}else Ht?(he&&e.texStorage2D(r.TEXTURE_2D,dt,Ot,st.width,st.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,st.width,st.height,xt,Ut,st.data)):e.texImage2D(r.TEXTURE_2D,0,Ot,st.width,st.height,0,xt,Ut,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ht&&he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ot,Yt[0].width,Yt[0].height,st.depth);for(let K=0,tt=Yt.length;K<tt;K++)if(St=Yt[K],E.format!==Nn)if(xt!==null)if(Ht){if(O)if(E.layerUpdates.size>0){const mt=zh(St.width,St.height,E.format,E.type);for(const pt of E.layerUpdates){const kt=St.data.subarray(pt*mt/St.data.BYTES_PER_ELEMENT,(pt+1)*mt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,pt,St.width,St.height,1,xt,kt)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,St.width,St.height,st.depth,xt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,K,Ot,St.width,St.height,st.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,K,0,0,0,St.width,St.height,st.depth,xt,Ut,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,K,Ot,St.width,St.height,st.depth,0,xt,Ut,St.data)}else{Ht&&he&&e.texStorage2D(r.TEXTURE_2D,dt,Ot,Yt[0].width,Yt[0].height);for(let K=0,tt=Yt.length;K<tt;K++)St=Yt[K],E.format!==Nn?xt!==null?Ht?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,K,0,0,St.width,St.height,xt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,K,Ot,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,St.width,St.height,xt,Ut,St.data):e.texImage2D(r.TEXTURE_2D,K,Ot,St.width,St.height,0,xt,Ut,St.data)}else if(E.isDataArrayTexture)if(Ht){if(he&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,Ot,st.width,st.height,st.depth),O)if(E.layerUpdates.size>0){const K=zh(st.width,st.height,E.format,E.type);for(const tt of E.layerUpdates){const mt=st.data.subarray(tt*K/st.data.BYTES_PER_ELEMENT,(tt+1)*K/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,xt,Ut,mt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Ut,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,st.width,st.height,st.depth,0,xt,Ut,st.data);else if(E.isData3DTexture)Ht?(he&&e.texStorage3D(r.TEXTURE_3D,dt,Ot,st.width,st.height,st.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Ut,st.data)):e.texImage3D(r.TEXTURE_3D,0,Ot,st.width,st.height,st.depth,0,xt,Ut,st.data);else if(E.isFramebufferTexture){if(he)if(Ht)e.texStorage2D(r.TEXTURE_2D,dt,Ot,st.width,st.height);else{let K=st.width,tt=st.height;for(let mt=0;mt<dt;mt++)e.texImage2D(r.TEXTURE_2D,mt,Ot,K,tt,0,xt,Ut,null),K>>=1,tt>>=1}}else if(Yt.length>0){if(Ht&&he){const K=vt(Yt[0]);e.texStorage2D(r.TEXTURE_2D,dt,Ot,K.width,K.height)}for(let K=0,tt=Yt.length;K<tt;K++)St=Yt[K],Ht?O&&e.texSubImage2D(r.TEXTURE_2D,K,0,0,xt,Ut,St):e.texImage2D(r.TEXTURE_2D,K,Ot,xt,Ut,St);E.generateMipmaps=!1}else if(Ht){if(he){const K=vt(st);e.texStorage2D(r.TEXTURE_2D,dt,Ot,K.width,K.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,Ut,st)}else e.texImage2D(r.TEXTURE_2D,0,Ot,xt,Ut,st);m(E)&&p(Q),Tt.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function $(R,E,H){if(E.image.length!==6)return;const Q=lt(R,E),nt=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+H);const J=n.get(nt);if(nt.version!==J.__version||Q===!0){e.activeTexture(r.TEXTURE0+H);const Tt=Zt.getPrimaries(Zt.workingColorSpace),ut=E.colorSpace===gi?null:Zt.getPrimaries(E.colorSpace),_t=E.colorSpace===gi||Tt===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Xt&&!st?xt[tt]=g(E.image[tt],!0,i.maxCubemapSize):xt[tt]=st?E.image[tt].image:E.image[tt],xt[tt]=$t(E,xt[tt]);const Ut=xt[0],Ot=s.convert(E.format,E.colorSpace),St=s.convert(E.type),Yt=S(E.internalFormat,Ot,St,E.colorSpace),Ht=E.isVideoTexture!==!0,he=J.__version===void 0||Q===!0,O=nt.dataReady;let dt=A(E,Ut);et(r.TEXTURE_CUBE_MAP,E);let K;if(Xt){Ht&&he&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Yt,Ut.width,Ut.height);for(let tt=0;tt<6;tt++){K=xt[tt].mipmaps;for(let mt=0;mt<K.length;mt++){const pt=K[mt];E.format!==Nn?Ot!==null?Ht?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,pt.width,pt.height,Ot,pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Yt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,0,0,pt.width,pt.height,Ot,St,pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt,Yt,pt.width,pt.height,0,Ot,St,pt.data)}}}else{if(K=E.mipmaps,Ht&&he){K.length>0&&dt++;const tt=vt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Yt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,Ot,St,xt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,xt[tt].width,xt[tt].height,0,Ot,St,xt[tt].data);for(let mt=0;mt<K.length;mt++){const kt=K[mt].image[tt].image;Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,kt.width,kt.height,Ot,St,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Yt,kt.width,kt.height,0,Ot,St,kt.data)}}else{Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ot,St,xt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,Ot,St,xt[tt]);for(let mt=0;mt<K.length;mt++){const pt=K[mt];Ht?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,0,0,Ot,St,pt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,mt+1,Yt,Ot,St,pt.image[tt])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),J.__version=nt.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function it(R,E,H,Q,nt,J){const Tt=s.convert(H.format,H.colorSpace),ut=s.convert(H.type),_t=S(H.internalFormat,Tt,ut,H.colorSpace),Xt=n.get(E),st=n.get(H);if(st.__renderTarget=E,!Xt.__hasExternalTextures){const xt=Math.max(1,E.width>>J),Ut=Math.max(1,E.height>>J);nt===r.TEXTURE_3D||nt===r.TEXTURE_2D_ARRAY?e.texImage3D(nt,J,_t,xt,Ut,E.depth,0,Tt,ut,null):e.texImage2D(nt,J,_t,xt,Ut,0,Tt,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),Ft(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,nt,st.__webglTexture,0,Nt(E)):(nt===r.TEXTURE_2D||nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,nt,st.__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Z(R,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const Q=E.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,J=x(E.stencilBuffer,nt),Tt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=Nt(E);Ft(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,J,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,J,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,R)}else{const Q=E.textures;for(let nt=0;nt<Q.length;nt++){const J=Q[nt],Tt=s.convert(J.format,J.colorSpace),ut=s.convert(J.type),_t=S(J.internalFormat,Tt,ut,J.colorSpace),Xt=Nt(E);H&&Ft(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,_t,E.width,E.height):Ft(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,_t,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,_t,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const nt=Q.__webglTexture,J=Nt(E);if(E.depthTexture.format===zr)Ft(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,nt,0);else if(E.depthTexture.format===$r)Ft(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0,J):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function bt(R){const E=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const nt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),E.__depthDisposeCallback=nt}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,R)}else if(H){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),Z(E.__webglDepthbuffer[Q],R,!1);else{const nt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,J)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Z(E.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,nt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ct(R,E,H){const Q=n.get(R);E!==void 0&&it(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&bt(R)}function Dt(R){const E=R.texture,H=n.get(R),Q=n.get(E);R.addEventListener("dispose",T);const nt=R.textures,J=R.isWebGLCubeRenderTarget===!0,Tt=nt.length>1;if(Tt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,a.memory.textures++),J){H.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ut]=[];for(let _t=0;_t<E.mipmaps.length;_t++)H.__webglFramebuffer[ut][_t]=r.createFramebuffer()}else H.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ut=0;ut<E.mipmaps.length;ut++)H.__webglFramebuffer[ut]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let ut=0,_t=nt.length;ut<_t;ut++){const Xt=n.get(nt[ut]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ft(R)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ut=0;ut<nt.length;ut++){const _t=nt[ut];H.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ut]);const Xt=s.convert(_t.format,_t.colorSpace),st=s.convert(_t.type),xt=S(_t.internalFormat,Xt,st,_t.colorSpace,R.isXRRenderTarget===!0),Ut=Nt(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut,xt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,H.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Z(H.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),et(r.TEXTURE_CUBE_MAP,E);for(let ut=0;ut<6;ut++)if(E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)it(H.__webglFramebuffer[ut][_t],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,_t);else it(H.__webglFramebuffer[ut],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ut=0,_t=nt.length;ut<_t;ut++){const Xt=nt[ut],st=n.get(Xt);e.bindTexture(r.TEXTURE_2D,st.__webglTexture),et(r.TEXTURE_2D,Xt),it(H.__webglFramebuffer,R,Xt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),m(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,Q.__webglTexture),et(ut,E),E.mipmaps&&E.mipmaps.length>0)for(let _t=0;_t<E.mipmaps.length;_t++)it(H.__webglFramebuffer[_t],R,E,r.COLOR_ATTACHMENT0,ut,_t);else it(H.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ut,0);m(E)&&p(ut),e.unbindTexture()}R.depthBuffer&&bt(R)}function It(R){const E=R.textures;for(let H=0,Q=E.length;H<Q;H++){const nt=E[H];if(m(nt)){const J=M(R),Tt=n.get(nt).__webglTexture;e.bindTexture(J,Tt),p(J),e.unbindTexture()}}}const wt=[],L=[];function oe(R){if(R.samples>0){if(Ft(R)===!1){const E=R.textures,H=R.width,Q=R.height;let nt=r.COLOR_BUFFER_BIT;const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(R),ut=E.length>1;if(ut)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(nt|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(nt|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(E[_t]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,H,Q,0,0,H,Q,nt,r.NEAREST),l===!0&&(wt.length=0,L.length=0,wt.push(r.COLOR_ATTACHMENT0+_t),R.depthBuffer&&R.resolveDepthBuffer===!1&&(wt.push(J),L.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,wt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const Xt=n.get(E[_t]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Nt(R){return Math.min(i.maxSamples,R.samples)}function Ft(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Mt(R){const E=a.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function $t(R,E){const H=R.colorSpace,Q=R.format,nt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==jr&&H!==gi&&(Zt.getTransfer(H)===ee?(Q!==Nn||nt!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=ct,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Ft}function Ov(r,t){function e(n,i=gi){let s;const a=Zt.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ou)return r.BYTE;if(n===Bu)return r.SHORT;if(n===ws)return r.UNSIGNED_SHORT;if(n===hc)return r.INT;if(n===rr)return r.UNSIGNED_INT;if(n===ei)return r.FLOAT;if(n===ri)return r.HALF_FLOAT;if(n===ku)return r.ALPHA;if(n===Vu)return r.RGB;if(n===Nn)return r.RGBA;if(n===Hu)return r.LUMINANCE;if(n===Gu)return r.LUMINANCE_ALPHA;if(n===zr)return r.DEPTH_COMPONENT;if(n===$r)return r.DEPTH_STENCIL;if(n===Wu)return r.RED;if(n===fc)return r.RED_INTEGER;if(n===Xu)return r.RG;if(n===pc)return r.RG_INTEGER;if(n===mc)return r.RGBA_INTEGER;if(n===Ma||n===Sa||n===Ea||n===ba)if(a===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ma)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ul||n===dl||n===fl||n===pl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ul)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ml||n===gl||n===_l)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ml||n===gl)return a===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_l)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vl||n===xl||n===yl||n===Ml||n===Sl||n===El||n===bl||n===Tl||n===Al||n===wl||n===Cl||n===Rl||n===Pl||n===Dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Ll||n===Il)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Ta)return a===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===Ul||n===Nl||n===Fl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ta)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ul)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const Bv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ye,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ze({vertexShader:Bv,fragmentShader:zv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new Ja(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vv extends or{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new kv,m=e.getContextAttributes();let p=null,M=null;const S=[],x=[],A=new gt;let w=null;const T=new cn;T.viewport=new re;const C=new cn;C.viewport=new re;const v=[T,C],y=new am;let D=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=S[k];return $===void 0&&($=new Co,S[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=S[k];return $===void 0&&($=new Co,S[k]=$),$.getGripSpace()},this.getHand=function(k){let $=S[k];return $===void 0&&($=new Co,S[k]=$),$.getHandSpace()};function F(k){const $=x.indexOf(k.inputSource);if($===-1)return;const it=S[$];it!==void 0&&(it.update(k.inputSource,k.frame,c||a),it.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",G);for(let k=0;k<S.length;k++){const $=x[k];$!==null&&(x[k]=null,S[k].disconnect($))}D=null,N=null,g.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,M=null,lt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",V),i.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let it=null,Z=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?$r:zr,Z=m.stencil?Yr:rr);const bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new On(d.textureWidth,d.textureHeight,{format:Nn,type:ai,depthTexture:new ad(d.textureWidth,d.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new On(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(k){for(let $=0;$<k.removed.length;$++){const it=k.removed[$],Z=x.indexOf(it);Z>=0&&(x[Z]=null,S[Z].disconnect(it))}for(let $=0;$<k.added.length;$++){const it=k.added[$];let Z=x.indexOf(it);if(Z===-1){for(let bt=0;bt<S.length;bt++)if(bt>=x.length){x.push(it),Z=bt;break}else if(x[bt]===null){x[bt]=it,Z=bt;break}if(Z===-1)break}const at=S[Z];at&&at.connect(it)}}const X=new U,j=new U;function W(k,$,it){X.setFromMatrixPosition($.matrixWorld),j.setFromMatrixPosition(it.matrixWorld);const Z=X.distanceTo(j),at=$.projectionMatrix.elements,bt=it.projectionMatrix.elements,ct=at[14]/(at[10]-1),Dt=at[14]/(at[10]+1),It=(at[9]+1)/at[5],wt=(at[9]-1)/at[5],L=(at[8]-1)/at[0],oe=(bt[8]+1)/bt[0],Nt=ct*L,Ft=ct*oe,Mt=Z/(-L+oe),$t=Mt*-L;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX($t),k.translateZ(Mt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),at[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const vt=ct+Mt,R=Dt+Mt,E=Nt-$t,H=Ft+(Z-$t),Q=It*Dt/R*vt,nt=wt*Dt/R*vt;k.projectionMatrix.makePerspective(E,H,Q,nt,vt,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function ot(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let $=k.near,it=k.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(it=g.depthFar)),y.near=C.near=T.near=$,y.far=C.far=T.far=it,(D!==y.near||N!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),D=y.near,N=y.far),T.layers.mask=k.layers.mask|2,C.layers.mask=k.layers.mask|4,y.layers.mask=T.layers.mask|C.layers.mask;const Z=k.parent,at=y.cameras;ot(y,Z);for(let bt=0;bt<at.length;bt++)ot(at[bt],Z);at.length===2?W(y,T,C):y.projectionMatrix.copy(T.projectionMatrix),I(k,y,Z)};function I(k,$,it){it===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(it.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Bl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(k){l=k,d!==null&&(d.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let P=null;function et(k,$){if(h=$.getViewerPose(c||a),_=$,h!==null){const it=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Z=!1;it.length!==y.cameras.length&&(y.cameras.length=0,Z=!0);for(let ct=0;ct<it.length;ct++){const Dt=it[ct];let It=null;if(f!==null)It=f.getViewport(Dt);else{const L=u.getViewSubImage(d,Dt);It=L.viewport,ct===0&&(t.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let wt=v[ct];wt===void 0&&(wt=new cn,wt.layers.enable(ct),wt.viewport=new re,v[ct]=wt),wt.matrix.fromArray(Dt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Dt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(It.x,It.y,It.width,It.height),ct===0&&(y.matrix.copy(wt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Z===!0&&y.cameras.push(wt)}const at=i.enabledFeatures;if(at&&at.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const ct=u.getDepthInformation(it[0]);ct&&ct.isValid&&ct.texture&&g.init(t,ct,i.renderState)}}for(let it=0;it<S.length;it++){const Z=x[it],at=S[it];Z!==null&&at!==void 0&&at.update(Z,$,c||a)}P&&P(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const lt=new cd;lt.setAnimationLoop(et),this.setAnimationLoop=function(k){P=k},this.dispose=function(){}}}const Bi=new Gn,Hv=new se;function Gv(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,td(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Bi.copy(x),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hv.makeRotationFromEuler(Bi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wv(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(_(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));const A=S.program;n.updateUBOMapping(M,A);const w=t.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function h(M){const S=u();M.__bindingPointIndex=S;const x=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=i[M.id],x=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let w=0,T=x.length;w<T;w++){const C=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,y=C.length;v<y;v++){const D=C[v];if(f(D,w,v,A)===!0){const N=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let G=0;G<F.length;G++){const X=F[G],j=g(X);typeof X=="number"||typeof X=="boolean"?(D.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,N+V,D.__data)):X.isMatrix3?(D.__data[0]=X.elements[0],D.__data[1]=X.elements[1],D.__data[2]=X.elements[2],D.__data[3]=0,D.__data[4]=X.elements[3],D.__data[5]=X.elements[4],D.__data[6]=X.elements[5],D.__data[7]=0,D.__data[8]=X.elements[6],D.__data[9]=X.elements[7],D.__data[10]=X.elements[8],D.__data[11]=0):(X.toArray(D.__data,V),V+=j.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,x,A){const w=M.value,T=S+"_"+x;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(M){const S=M.uniforms;let x=0;const A=16;for(let T=0,C=S.length;T<C;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,D=v.length;y<D;y++){const N=v[y],F=Array.isArray(N.value)?N.value:[N.value];for(let V=0,G=F.length;V<G;V++){const X=F[V],j=g(X),W=x%A,ot=W%j.boundary,I=W+ot;x+=ot,I!==0&&A-I<j.storage&&(x+=A-I),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=j.storage}}}const w=x%A;return w>0&&(x+=A-w),M.__size=x,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class Xv{constructor(t={}){const{canvas:e=gp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Mi,this.toneMappingExposure=1;const x=this;let A=!1,w=0,T=0,C=null,v=-1,y=null;const D=new re,N=new re;let F=null;const V=new At(0);let G=0,X=e.width,j=e.height,W=1,ot=null,I=null;const P=new re(0,0,X,j),et=new re(0,0,X,j);let lt=!1;const k=new vc;let $=!1,it=!1;this.transmissionResolutionScale=1;const Z=new se,at=new se,bt=new U,ct=new re,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function wt(){return C===null?W:1}let L=n;function oe(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),L===null){const B="webgl2";if(L=oe(B,b),L===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,Ft,Mt,$t,vt,R,E,H,Q,nt,J,Tt,ut,_t,Xt,st,xt,Ut,Ot,St,Yt,Ht,he,O;function dt(){Nt=new e0(L),Nt.init(),Ht=new Ov(L,Nt),Ft=new $_(L,Nt,t,Ht),Mt=new Nv(L,Nt),Ft.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),$t=new r0(L),vt=new Sv,R=new Fv(L,Nt,Mt,vt,Ft,Ht,$t),E=new K_(x),H=new t0(x),Q=new hm(L),he=new q_(L,Q),nt=new n0(L,Q,$t,he),J=new a0(L,nt,Q,$t),Ot=new s0(L,Ft,R),st=new j_(vt),Tt=new Mv(x,E,H,Nt,Ft,he,st),ut=new Gv(x,vt),_t=new bv,Xt=new Pv(Nt),Ut=new X_(x,E,H,Mt,J,f,l),xt=new Iv(x,J,Ft),O=new Wv(L,$t,Ft,Mt),St=new Y_(L,Nt,$t),Yt=new i0(L,Nt,$t),$t.programs=Tt.programs,x.capabilities=Ft,x.extensions=Nt,x.properties=vt,x.renderLists=_t,x.shadowMap=xt,x.state=Mt,x.info=$t}dt();const K=new Vv(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(X,j,!1))},this.getSize=function(b){return b.set(X,j)},this.setSize=function(b,B,q=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,j=B,e.width=Math.floor(b*W),e.height=Math.floor(B*W),q===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(X*W,j*W).floor()},this.setDrawingBufferSize=function(b,B,q){X=b,j=B,W=q,e.width=Math.floor(b*q),e.height=Math.floor(B*q),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,B,q,Y){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,B,q,Y),Mt.viewport(D.copy(P).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,B,q,Y){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,B,q,Y),Mt.scissor(N.copy(et).multiplyScalar(W).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){Mt.setScissorTest(lt=b)},this.setOpaqueSort=function(b){ot=b},this.setTransparentSort=function(b){I=b},this.getClearColor=function(b){return b.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,q=!0){let Y=0;if(b){let z=!1;if(C!==null){const rt=C.texture.format;z=rt===mc||rt===pc||rt===fc}if(z){const rt=C.texture.type,ft=rt===ai||rt===rr||rt===ws||rt===Yr||rt===uc||rt===dc,yt=Ut.getClearColor(),Et=Ut.getClearAlpha(),Bt=yt.r,zt=yt.g,Ct=yt.b;ft?(_[0]=Bt,_[1]=zt,_[2]=Ct,_[3]=Et,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Bt,g[1]=zt,g[2]=Ct,g[3]=Et,L.clearBufferiv(L.COLOR,0,g))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),Ut.dispose(),_t.dispose(),Xt.dispose(),vt.dispose(),E.dispose(),H.dispose(),J.dispose(),he.dispose(),O.dispose(),Tt.dispose(),K.dispose(),K.removeEventListener("sessionstart",qc),K.removeEventListener("sessionend",Yc),Di.stop()};function tt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=$t.autoReset,B=xt.enabled,q=xt.autoUpdate,Y=xt.needsUpdate,z=xt.type;dt(),$t.autoReset=b,xt.enabled=B,xt.autoUpdate=q,xt.needsUpdate=Y,xt.type=z}function pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function kt(b){const B=b.target;B.removeEventListener("dispose",kt),ve(B)}function ve(b){Oe(b),vt.remove(b)}function Oe(b){const B=vt.get(b).programs;B!==void 0&&(B.forEach(function(q){Tt.releaseProgram(q)}),b.isShaderMaterial&&Tt.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,q,Y,z,rt){B===null&&(B=Dt);const ft=z.isMesh&&z.matrixWorld.determinant()<0,yt=vf(b,B,q,Y,z);Mt.setMaterial(Y,ft);let Et=q.index,Bt=1;if(Y.wireframe===!0){if(Et=nt.getWireframeAttribute(q),Et===void 0)return;Bt=2}const zt=q.drawRange,Ct=q.attributes.position;let jt=zt.start*Bt,Jt=(zt.start+zt.count)*Bt;rt!==null&&(jt=Math.max(jt,rt.start*Bt),Jt=Math.min(Jt,(rt.start+rt.count)*Bt)),Et!==null?(jt=Math.max(jt,0),Jt=Math.min(Jt,Et.count)):Ct!=null&&(jt=Math.max(jt,0),Jt=Math.min(Jt,Ct.count));const Ee=Jt-jt;if(Ee<0||Ee===1/0)return;he.setup(z,Y,yt,q,Et);let xe,Kt=St;if(Et!==null&&(xe=Q.get(Et),Kt=Yt,Kt.setIndex(xe)),z.isMesh)Y.wireframe===!0?(Mt.setLineWidth(Y.wireframeLinewidth*wt()),Kt.setMode(L.LINES)):Kt.setMode(L.TRIANGLES);else if(z.isLine){let Lt=Y.linewidth;Lt===void 0&&(Lt=1),Mt.setLineWidth(Lt*wt()),z.isLineSegments?Kt.setMode(L.LINES):z.isLineLoop?Kt.setMode(L.LINE_LOOP):Kt.setMode(L.LINE_STRIP)}else z.isPoints?Kt.setMode(L.POINTS):z.isSprite&&Kt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Vi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Lt=z._multiDrawStarts,Ie=z._multiDrawCounts,Qt=z._multiDrawCount,Cn=Et?Q.get(Et).bytesPerElement:1,cr=vt.get(Y).currentProgram.getUniforms();for(let sn=0;sn<Qt;sn++)cr.setValue(L,"_gl_DrawID",sn),Kt.render(Lt[sn]/Cn,Ie[sn])}else if(z.isInstancedMesh)Kt.renderInstances(jt,Ee,z.count);else if(q.isInstancedBufferGeometry){const Lt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ie=Math.min(q.instanceCount,Lt);Kt.renderInstances(jt,Ee,Ie)}else Kt.render(jt,Ee)};function te(b,B,q){b.transparent===!0&&b.side===Mn&&b.forceSinglePass===!1?(b.side=Je,b.needsUpdate=!0,Gs(b,B,q),b.side=Ti,b.needsUpdate=!0,Gs(b,B,q),b.side=Mn):Gs(b,B,q)}this.compile=function(b,B,q=null){q===null&&(q=b),p=Xt.get(q),p.init(B),S.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==q&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const rt=z.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const yt=rt[ft];te(yt,q,z),Y.add(yt)}else te(rt,q,z),Y.add(rt)}),p=S.pop(),Y},this.compileAsync=function(b,B,q=null){const Y=this.compile(b,B,q);return new Promise(z=>{function rt(){if(Y.forEach(function(ft){vt.get(ft).currentProgram.isReady()&&Y.delete(ft)}),Y.size===0){z(b);return}setTimeout(rt,10)}Nt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let wn=null;function Xn(b){wn&&wn(b)}function qc(){Di.stop()}function Yc(){Di.start()}const Di=new cd;Di.setAnimationLoop(Xn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(b){wn=b,K.setAnimationLoop(b),b===null?Di.stop():Di.start()},K.addEventListener("sessionstart",qc),K.addEventListener("sessionend",Yc),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,C),p=Xt.get(b,S.length),p.init(B),S.push(p),at.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),k.setFromProjectionMatrix(at),it=this.localClippingEnabled,$=st.init(this.clippingPlanes,it),m=_t.get(b,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const rt=x.xr.getDepthSensingMesh();rt!==null&&ro(rt,B,-1/0,x.sortObjects)}ro(b,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ot,I),It=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,It&&Ut.addToRenderList(m,b),this.info.render.frame++,$===!0&&st.beginShadows();const q=p.state.shadowsArray;xt.render(q,b,B),$===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const rt=B.cameras;if(z.length>0)for(let ft=0,yt=rt.length;ft<yt;ft++){const Et=rt[ft];jc(Y,z,b,Et)}It&&Ut.render(b);for(let ft=0,yt=rt.length;ft<yt;ft++){const Et=rt[ft];$c(m,b,Et,Et.viewport)}}else z.length>0&&jc(Y,z,b,B),It&&Ut.render(b),$c(m,b,B);C!==null&&T===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,B),he.resetDefaultState(),v=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],$===!0&&st.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ro(b,B,q,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||k.intersectsSprite(b)){Y&&ct.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const ft=J.update(b),yt=b.material;yt.visible&&m.push(b,ft,yt,q,ct.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||k.intersectsObject(b))){const ft=J.update(b),yt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ct.copy(b.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),ct.copy(ft.boundingSphere.center)),ct.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(yt)){const Et=ft.groups;for(let Bt=0,zt=Et.length;Bt<zt;Bt++){const Ct=Et[Bt],jt=yt[Ct.materialIndex];jt&&jt.visible&&m.push(b,ft,jt,q,ct.z,Ct)}}else yt.visible&&m.push(b,ft,yt,q,ct.z,null)}}const rt=b.children;for(let ft=0,yt=rt.length;ft<yt;ft++)ro(rt[ft],B,q,Y)}function $c(b,B,q,Y){const z=b.opaque,rt=b.transmissive,ft=b.transparent;p.setupLightsView(q),$===!0&&st.setGlobalState(x.clippingPlanes,q),Y&&Mt.viewport(D.copy(Y)),z.length>0&&Hs(z,B,q),rt.length>0&&Hs(rt,B,q),ft.length>0&&Hs(ft,B,q),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function jc(b,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new On(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?ri:ai,minFilter:Ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));const rt=p.state.transmissionRenderTarget[Y.id],ft=Y.viewport||D;rt.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const yt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(V),G=x.getClearAlpha(),G<1&&x.setClearColor(16777215,.5),x.clear(),It&&Ut.render(q);const Et=x.toneMapping;x.toneMapping=Mi;const Bt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),$===!0&&st.setGlobalState(x.clippingPlanes,Y),Hs(b,q,Y),R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ct=0,jt=B.length;Ct<jt;Ct++){const Jt=B[Ct],Ee=Jt.object,xe=Jt.geometry,Kt=Jt.material,Lt=Jt.group;if(Kt.side===Mn&&Ee.layers.test(Y.layers)){const Ie=Kt.side;Kt.side=Je,Kt.needsUpdate=!0,Kc(Ee,q,Y,xe,Kt,Lt),Kt.side=Ie,Kt.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(rt),R.updateRenderTargetMipmap(rt))}x.setRenderTarget(yt),x.setClearColor(V,G),Bt!==void 0&&(Y.viewport=Bt),x.toneMapping=Et}function Hs(b,B,q){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,rt=b.length;z<rt;z++){const ft=b[z],yt=ft.object,Et=ft.geometry,Bt=Y===null?ft.material:Y,zt=ft.group;yt.layers.test(q.layers)&&Kc(yt,B,q,Et,Bt,zt)}}function Kc(b,B,q,Y,z,rt){b.onBeforeRender(x,B,q,Y,z,rt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(x,B,q,Y,b,rt),z.transparent===!0&&z.side===Mn&&z.forceSinglePass===!1?(z.side=Je,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,b,rt),z.side=Ti,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,b,rt),z.side=Mn):x.renderBufferDirect(q,B,Y,z,b,rt),b.onAfterRender(x,B,q,Y,z,rt)}function Gs(b,B,q){B.isScene!==!0&&(B=Dt);const Y=vt.get(b),z=p.state.lights,rt=p.state.shadowsArray,ft=z.state.version,yt=Tt.getParameters(b,z.state,rt,B,q),Et=Tt.getProgramCacheKey(yt);let Bt=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?H:E).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",kt),Bt=new Map,Y.programs=Bt);let zt=Bt.get(Et);if(zt!==void 0){if(Y.currentProgram===zt&&Y.lightsStateVersion===ft)return Jc(b,yt),zt}else yt.uniforms=Tt.getUniforms(b),b.onBeforeCompile(yt,x),zt=Tt.acquireProgram(yt,Et),Bt.set(Et,zt),Y.uniforms=yt.uniforms;const Ct=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ct.clippingPlanes=st.uniform),Jc(b,yt),Y.needsLights=yf(b),Y.lightsStateVersion=ft,Y.needsLights&&(Ct.ambientLightColor.value=z.state.ambient,Ct.lightProbe.value=z.state.probe,Ct.directionalLights.value=z.state.directional,Ct.directionalLightShadows.value=z.state.directionalShadow,Ct.spotLights.value=z.state.spot,Ct.spotLightShadows.value=z.state.spotShadow,Ct.rectAreaLights.value=z.state.rectArea,Ct.ltc_1.value=z.state.rectAreaLTC1,Ct.ltc_2.value=z.state.rectAreaLTC2,Ct.pointLights.value=z.state.point,Ct.pointLightShadows.value=z.state.pointShadow,Ct.hemisphereLights.value=z.state.hemi,Ct.directionalShadowMap.value=z.state.directionalShadowMap,Ct.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ct.spotShadowMap.value=z.state.spotShadowMap,Ct.spotLightMatrix.value=z.state.spotLightMatrix,Ct.spotLightMap.value=z.state.spotLightMap,Ct.pointShadowMap.value=z.state.pointShadowMap,Ct.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=zt,Y.uniformsList=null,zt}function Zc(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=wa.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Jc(b,B){const q=vt.get(b);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function vf(b,B,q,Y,z){B.isScene!==!0&&(B=Dt),R.resetTextureUnits();const rt=B.fog,ft=Y.isMeshStandardMaterial?B.environment:null,yt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:jr,Et=(Y.isMeshStandardMaterial?H:E).get(Y.envMap||ft),Bt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ct=!!q.morphAttributes.position,jt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color;let Ee=Mi;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ee=x.toneMapping);const xe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Kt=xe!==void 0?xe.length:0,Lt=vt.get(Y),Ie=p.state.lights;if($===!0&&(it===!0||b!==y)){const Ge=b===y&&Y.id===v;st.setState(Y,b,Ge)}let Qt=!1;Y.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Ie.state.version||Lt.outputColorSpace!==yt||z.isBatchedMesh&&Lt.batching===!1||!z.isBatchedMesh&&Lt.batching===!0||z.isBatchedMesh&&Lt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Lt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Lt.instancing===!1||!z.isInstancedMesh&&Lt.instancing===!0||z.isSkinnedMesh&&Lt.skinning===!1||!z.isSkinnedMesh&&Lt.skinning===!0||z.isInstancedMesh&&Lt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Lt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Lt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Lt.instancingMorph===!1&&z.morphTexture!==null||Lt.envMap!==Et||Y.fog===!0&&Lt.fog!==rt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==st.numPlanes||Lt.numIntersection!==st.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==zt||Lt.morphTargets!==Ct||Lt.morphNormals!==jt||Lt.morphColors!==Jt||Lt.toneMapping!==Ee||Lt.morphTargetsCount!==Kt)&&(Qt=!0):(Qt=!0,Lt.__version=Y.version);let Cn=Lt.currentProgram;Qt===!0&&(Cn=Gs(Y,B,z));let cr=!1,sn=!1,ss=!1;const ue=Cn.getUniforms(),gn=Lt.uniforms;if(Mt.useProgram(Cn.program)&&(cr=!0,sn=!0,ss=!0),Y.id!==v&&(v=Y.id,sn=!0),cr||y!==b){Mt.buffers.depth.getReversed()?(Z.copy(b.projectionMatrix),vp(Z),xp(Z),ue.setValue(L,"projectionMatrix",Z)):ue.setValue(L,"projectionMatrix",b.projectionMatrix),ue.setValue(L,"viewMatrix",b.matrixWorldInverse);const $e=ue.map.cameraPosition;$e!==void 0&&$e.setValue(L,bt.setFromMatrixPosition(b.matrixWorld)),Ft.logarithmicDepthBuffer&&ue.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,sn=!0,ss=!0)}if(z.isSkinnedMesh){ue.setOptional(L,z,"bindMatrix"),ue.setOptional(L,z,"bindMatrixInverse");const Ge=z.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ue.setValue(L,"boneTexture",Ge.boneTexture,R))}z.isBatchedMesh&&(ue.setOptional(L,z,"batchingTexture"),ue.setValue(L,"batchingTexture",z._matricesTexture,R),ue.setOptional(L,z,"batchingIdTexture"),ue.setValue(L,"batchingIdTexture",z._indirectTexture,R),ue.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&ue.setValue(L,"batchingColorTexture",z._colorsTexture,R));const _n=q.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&Ot.update(z,q,Cn),(sn||Lt.receiveShadow!==z.receiveShadow)&&(Lt.receiveShadow=z.receiveShadow,ue.setValue(L,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(gn.envMap.value=Et,gn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),sn&&(ue.setValue(L,"toneMappingExposure",x.toneMappingExposure),Lt.needsLights&&xf(gn,ss),rt&&Y.fog===!0&&ut.refreshFogUniforms(gn,rt),ut.refreshMaterialUniforms(gn,Y,W,j,p.state.transmissionRenderTarget[b.id]),wa.upload(L,Zc(Lt),gn,R)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(wa.upload(L,Zc(Lt),gn,R),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(L,"center",z.center),ue.setValue(L,"modelViewMatrix",z.modelViewMatrix),ue.setValue(L,"normalMatrix",z.normalMatrix),ue.setValue(L,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ge=Y.uniformsGroups;for(let $e=0,so=Ge.length;$e<so;$e++){const Li=Ge[$e];O.update(Li,Cn),O.bind(Li,Cn)}}return Cn}function xf(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function yf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,B,q){vt.get(b.texture).__webglTexture=B,vt.get(b.depthTexture).__webglTexture=q;const Y=vt.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const q=vt.get(b);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};const Mf=L.createFramebuffer();this.setRenderTarget=function(b,B=0,q=0){C=b,w=B,T=q;let Y=!0,z=null,rt=!1,ft=!1;if(b){const Et=vt.get(b);if(Et.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(Et.__hasExternalTextures)R.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ct=b.depthTexture;if(Et.__boundDepthTexture!==Ct){if(Ct!==null&&vt.has(Ct)&&(b.width!==Ct.image.width||b.height!==Ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(ft=!0);const zt=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[B])?z=zt[B][q]:z=zt[B],rt=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?z=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[q]:z=zt,D.copy(b.viewport),N.copy(b.scissor),F=b.scissorTest}else D.copy(P).multiplyScalar(W).floor(),N.copy(et).multiplyScalar(W).floor(),F=lt;if(q!==0&&(z=Mf),Mt.bindFramebuffer(L.FRAMEBUFFER,z)&&Y&&Mt.drawBuffers(b,z),Mt.viewport(D),Mt.scissor(N),Mt.setScissorTest(F),rt){const Et=vt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Et.__webglTexture,q)}else if(ft){const Et=vt.get(b.texture),Bt=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Et.__webglTexture,q,Bt)}else if(b!==null&&q!==0){const Et=vt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Et.__webglTexture,q)}v=-1},this.readRenderTargetPixels=function(b,B,q,Y,z,rt,ft){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){Mt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const Et=b.texture,Bt=Et.format,zt=Et.type;if(!Ft.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&q>=0&&q<=b.height-z&&L.readPixels(B,q,Y,z,Ht.convert(Bt),Ht.convert(zt),rt)}finally{const Et=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(b,B,q,Y,z,rt,ft){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const Et=b.texture,Bt=Et.format,zt=Et.type;if(!Ft.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-Y&&q>=0&&q<=b.height-z){Mt.bindFramebuffer(L.FRAMEBUFFER,yt);const Ct=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(B,q,Y,z,Ht.convert(Bt),Ht.convert(zt),0);const jt=C!==null?vt.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(L.FRAMEBUFFER,jt);const Jt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _p(L,Jt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ct),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(Ct),L.deleteSync(Jt),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,q=0){b.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),z=Math.floor(b.image.width*Y),rt=Math.floor(b.image.height*Y),ft=B!==null?B.x:0,yt=B!==null?B.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,ft,yt,z,rt),Mt.unbindTexture()};const Sf=L.createFramebuffer(),Ef=L.createFramebuffer();this.copyTextureToTexture=function(b,B,q=null,Y=null,z=0,rt=null){b.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],B=arguments[2],rt=arguments[3]||0,q=null),rt===null&&(z!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),rt=z,z=0):rt=0);let ft,yt,Et,Bt,zt,Ct,jt,Jt,Ee;const xe=b.isCompressedTexture?b.mipmaps[rt]:b.image;if(q!==null)ft=q.max.x-q.min.x,yt=q.max.y-q.min.y,Et=q.isBox3?q.max.z-q.min.z:1,Bt=q.min.x,zt=q.min.y,Ct=q.isBox3?q.min.z:0;else{const _n=Math.pow(2,-z);ft=Math.floor(xe.width*_n),yt=Math.floor(xe.height*_n),b.isDataArrayTexture?Et=xe.depth:b.isData3DTexture?Et=Math.floor(xe.depth*_n):Et=1,Bt=0,zt=0,Ct=0}Y!==null?(jt=Y.x,Jt=Y.y,Ee=Y.z):(jt=0,Jt=0,Ee=0);const Kt=Ht.convert(B.format),Lt=Ht.convert(B.type);let Ie;B.isData3DTexture?(R.setTexture3D(B,0),Ie=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Ie=L.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Ie=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const Qt=L.getParameter(L.UNPACK_ROW_LENGTH),Cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),cr=L.getParameter(L.UNPACK_SKIP_PIXELS),sn=L.getParameter(L.UNPACK_SKIP_ROWS),ss=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,xe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,xe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),L.pixelStorei(L.UNPACK_SKIP_ROWS,zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ct);const ue=b.isDataArrayTexture||b.isData3DTexture,gn=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const _n=vt.get(b),Ge=vt.get(B),$e=vt.get(_n.__renderTarget),so=vt.get(Ge.__renderTarget);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,$e.__webglFramebuffer),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,so.__webglFramebuffer);for(let Li=0;Li<Et;Li++)ue&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,z,Ct+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,rt,Ee+Li)),L.blitFramebuffer(Bt,zt,ft,yt,jt,Jt,ft,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||b.isRenderTargetTexture||vt.has(b)){const _n=vt.get(b),Ge=vt.get(B);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,Sf),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ef);for(let $e=0;$e<Et;$e++)ue?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_n.__webglTexture,z,Ct+$e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,_n.__webglTexture,z),gn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ge.__webglTexture,rt,Ee+$e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ge.__webglTexture,rt),z!==0?L.blitFramebuffer(Bt,zt,ft,yt,jt,Jt,ft,yt,L.COLOR_BUFFER_BIT,L.NEAREST):gn?L.copyTexSubImage3D(Ie,rt,jt,Jt,Ee+$e,Bt,zt,ft,yt):L.copyTexSubImage2D(Ie,rt,jt,Jt,Bt,zt,ft,yt);Mt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else gn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Ie,rt,jt,Jt,Ee,ft,yt,Et,Kt,Lt,xe.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ie,rt,jt,Jt,Ee,ft,yt,Et,Kt,xe.data):L.texSubImage3D(Ie,rt,jt,Jt,Ee,ft,yt,Et,Kt,Lt,xe):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,rt,jt,Jt,ft,yt,Kt,Lt,xe.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,rt,jt,Jt,xe.width,xe.height,Kt,xe.data):L.texSubImage2D(L.TEXTURE_2D,rt,jt,Jt,ft,yt,Kt,Lt,xe);L.pixelStorei(L.UNPACK_ROW_LENGTH,Qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,cr),L.pixelStorei(L.UNPACK_SKIP_ROWS,sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ss),rt===0&&B.generateMipmaps&&L.generateMipmap(Ie),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,B,q=null,Y=null,z=0){return b.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],B=arguments[3],z=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,q,Y,z)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,Mt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}}const hu={type:"change"},bc={type:"start"},pd={type:"end"},xa=new Bs,uu=new mi,qv=Math.cos(70*mp.DEG2RAD),Ae=new U,je=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ho=1e-6;class Yv extends lm{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Or.ROTATE,MIDDLE:Or.DOLLY,RIGHT:Or.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new sr,this._lastTargetPosition=new U,this._quat=new sr().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Bh,this._sphericalDelta=new Bh,this._scale=1,this._panOffset=new U,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new U,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=jv.bind(this),this._onPointerDown=$v.bind(this),this._onPointerUp=Kv.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=Qv.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=Zv.bind(this),this._onMouseMove=Jv.bind(this),this._interceptControlDown=rx.bind(this),this._interceptControlUp=sx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(hu),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=je:n>Math.PI&&(n-=je),i<-Math.PI?i+=je:i>Math.PI&&(i-=je),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ae.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<qv?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ho||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ho||this._lastTargetPosition.distanceToSquared(this.target)>Ho?(this.dispatchEvent(hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ae.copy(i).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $v(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function jv(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Kv(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pd),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Zv(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Or.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=ie.DOLLY;break;case Or.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ie.ROTATE}break;case Or.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(bc)}function Jv(r){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Qv(r){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(r.preventDefault(),this.dispatchEvent(bc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(pd))}function tx(r){this.enabled!==!1&&this._handleKeyDown(r)}function ex(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Ir.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=ie.TOUCH_ROTATE;break;case Ir.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Ir.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=ie.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(bc)}function nx(r){switch(this._trackPointer(r),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=ie.NONE}}function ix(r){this.enabled!==!1&&r.preventDefault()}function rx(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sx(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const md={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ks{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ax=new Sc(-1,1,1,-1,0,1);class ox extends Ce{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const lx=new ox;class gd{constructor(t){this._mesh=new de(lx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ax)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class cx extends ks{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ze?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ua.clone(t.uniforms),this.material=new Ze({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new gd(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class du extends ks{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class hx extends ks{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ux{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new gt);this._width=n.width,this._height=n.height,e=new On(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cx(md),this.copyPass.material.blending=ii,this.clock=new ld}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}du!==void 0&&(a instanceof du?n=!0:a instanceof hx&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dx extends ks{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new At}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const fx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new At(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zr extends ks{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new At(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new On(s,a,{type:ri}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new On(s,a,{type:ri});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new On(s,a,{type:ri});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=fx;this.highPassUniforms=Ua.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ze({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new gt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=md;this.copyUniforms=Ua.clone(h.uniforms),this.blendMaterial=new Ze({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:$i,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new At,this.oldClearAlpha=1,this.basic=new In,this.fsQuad=new gd(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new gt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ze({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new Ze({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zr.BlurDirectionX=new gt(1,0);Zr.BlurDirectionY=new gt(0,1);function Qn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _d(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Cs={duration:.5,overwrite:!1,delay:0},Tc,Fe,pe,bn=1e8,ce=1/bn,Gl=Math.PI*2,px=Gl/4,mx=0,vd=Math.sqrt,gx=Math.cos,_x=Math.sin,Le=function(t){return typeof t=="string"},ye=function(t){return typeof t=="function"},oi=function(t){return typeof t=="number"},Ac=function(t){return typeof t>"u"},Wn=function(t){return typeof t=="object"},Qe=function(t){return t!==!1},wc=function(){return typeof window<"u"},ya=function(t){return ye(t)||Le(t)},xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},He=Array.isArray,vx=/random\([^)]+\)/g,xx=/,\s*/g,fu=/(?:-?\.?\d|\.)+/gi,yd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Go=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Md=/[+-]=-?[.\d]+/,yx=/[^,'"\[\]\s]+/gi,Mx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ge,Bn,Wl,Cc,pn={},Va={},Sd,Ed=function(t){return(Va=Jr(t,pn))&&rn},Rc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Rs=function(t,e){return!e&&console.warn(t)},bd=function(t,e){return t&&(pn[t]=e)&&Va&&(Va[t]=e)||pn},Ps=function(){return 0},Sx={suppressEvents:!0,isStart:!0,kill:!1},Ca={suppressEvents:!0,kill:!1},Ex={suppressEvents:!0},Pc={},Ei=[],Xl={},Td,ln={},Wo={},pu=30,Ra=[],Dc="",Lc=function(t){var e=t[0],n,i;if(Wn(e)||ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ra.length;i--&&!Ra[i].targetTest(e););n=Ra[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Yd(t[i],n)))||t.splice(i,1);return t},tr=function(t){return t._gsap||Lc(Tn(t))[0]._gsap},Ad=function(t,e,n){return(n=t[e])&&ye(n)?t[e]():Ac(n)&&t.getAttribute&&t.getAttribute(e)||n},tn=function(t,e){return(t=t.split(",")).forEach(e)||t},Me=function(t){return Math.round(t*1e5)/1e5||0},me=function(t){return Math.round(t*1e7)/1e7||0},Vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},bx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ha=function(){var t=Ei.length,e=Ei.slice(0),n,i;for(Xl={},Ei.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ic=function(t){return!!(t._initted||t._startAt||t.add)},wd=function(t,e,n,i){Ei.length&&!Fe&&Ha(),t.render(e,n,!!(Fe&&e<0&&Ic(t))),Ei.length&&!Fe&&Ha()},Cd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(yx).length<2?e:Le(t)?t.trim():t},Rd=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Jr=function(t,e){for(var n in e)t[n]=e[n];return t},mu=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Wn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Es=function(t){var e=t.parent||ge,n=t.keyframes?Tx(He(t.keyframes)):mn;if(Qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ax=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Pd=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},to=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ai=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},er=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},wx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ql=function(t,e,n,i){return t._startAt&&(Fe?t._startAt.revert(Ca):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Cx=function r(t){return!t||t._ts&&r(t.parent)},gu=function(t){return t._repeat?Qr(t._tTime,t=t.duration()+t._rDelay)*t:0},Qr=function(t,e){var n=Math.floor(t=me(t/e));return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},eo=function(t){return t._end=me(t._start+(t._tDur/Math.abs(t._ts||t._rts||ce)||0))},no=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=me(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),eo(t),n._dirty||er(n,t)),t},Dd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wa(t.rawTime(),e),(!e._dur||Vs(0,e.totalDuration(),n)-e._tTime>ce)&&e.render(n,!0)),er(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ce}},Vn=function(t,e,n,i){return e.parent&&Ai(e),e._start=me((oi(n)?n:n||t!==ge?xn(t,n,e):t._time)+e._delay),e._end=me(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Pd(t,e,"_first","_last",t._sort?"_start":0),Yl(e)||(t._recent=e),i||Dd(t,e),t._ts<0&&no(t,t._tTime),t},Ld=function(t,e){return(pn.ScrollTrigger||Rc("scrollTrigger",e))&&pn.ScrollTrigger.create(e,t)},Id=function(t,e,n,i,s){if(Nc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Fe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Td!==hn.frame)return Ei.push(t),t._lazy=[s,i],1},Rx=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Yl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Px=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Rx(t)&&!(!t._initted&&Yl(t))||(t._ts<0||t._dp._ts<0)&&!Yl(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=Vs(0,t._tDur,e),h=Qr(l,o),t._yoyo&&h&1&&(a=1-a),h!==Qr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||Fe||i||t._zTime===ce||!e&&t._zTime){if(!t._initted&&Id(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?ce:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ql(t,e,n,!0),t._onUpdate&&!n&&un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ai(t,1),!n&&!Fe&&(un(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Dx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ts=function(t,e,n,i){var s=t._repeat,a=me(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:me(a*(s+1)+t._rDelay*s):a,o>0&&!i&&no(t,t._tTime=t._tDur*o),t.parent&&eo(t),n||er(t.parent,t),t},_u=function(t){return t instanceof Ke?er(t):ts(t,t._dur)},Lx={_start:0,endTime:Ps,totalDuration:Ps},xn=function r(t,e,n){var i=t.labels,s=t._recent||Lx,a=t.duration()>=bn?s.endTime(!1):t._dur,o,l,c;return Le(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(He(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},bs=function(t,e,n){var i=oi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qe(l.vars.inherit)&&l.parent;a.immediateRender=Qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Te(e[0],a,e[s+1])},Pi=function(t,e){return t||t===0?e(t):e},Vs=function(t,e,n){return n<t?t:n>e?e:n},Ve=function(t,e){return!Le(t)||!(e=Mx.exec(t))?"":e[1]},Ix=function(t,e,n){return Pi(n,function(i){return Vs(t,e,i)})},$l=[].slice,Ud=function(t,e){return t&&Wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Wn(t[0]))&&!t.nodeType&&t!==Bn},Ux=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Le(i)&&!e||Ud(i,1)?(s=n).push.apply(s,Tn(i)):n.push(i)})||n},Tn=function(t,e,n){return pe&&!e&&pe.selector?pe.selector(t):Le(t)&&!n&&(Wl||!es())?$l.call((e||Cc).querySelectorAll(t),0):He(t)?Ux(t,n):Ud(t)?$l.call(t,0):t?[t]:[]},jl=function(t){return t=Tn(t)[0]||Rs("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Tn(e,n.querySelectorAll?n:n===t?Rs("Invalid scope")||Cc.createElement("div"):t)}},Nd=function(t){return t.sort(function(){return .5-Math.random()})},Fd=function(t){if(ye(t))return t;var e=Wn(t)?t:{each:t},n=nr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Le(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,M,S,x,A,w,T,C,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,bn])[1],!v){for(T=-bn;T<(T=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*h-.5:i%v,M=v===bn?0:l?g*u/v-.5:i/v|0,T=0,C=bn,w=0;w<g;w++)S=w%v-p,x=M-(w/v|0),m[w]=A=c?Math.abs(c==="y"?x:S):vd(S*S+x*x),A>T&&(T=A),A<C&&(C=A);i==="random"&&Nd(m),m.max=T-C,m.min=C,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ve(e.amount||e.each)||0,n=n&&g<0?Yx(n):n}return g=(m[d]-m.min)/m.max||0,me(m.b+(n?n(g):g)*m.v)+m.u}},Kl=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=me(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(oi(n)?0:Ve(n))}},Od=function(t,e){var n=He(t),i,s;return!n&&Wn(t)&&(i=n=t.radius||bn,t.values?(t=Tn(t.values),(s=!oi(t[0]))&&(i*=i)):t=Kl(t.increment)),Pi(e,n?ye(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=bn,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-o,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,s||h===a||oi(a)?h:h+Ve(a)}:Kl(t))},Bd=function(t,e,n,i){return Pi(He(t)?!e:n===!0?!!(n=0):!i,function(){return He(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Nx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Fx=function(t,e){return function(n){return t(parseFloat(n))+(e||Ve(n))}},Ox=function(t,e,n){return kd(t,e,0,1,n)},zd=function(t,e,n){return Pi(n,function(i){return t[~~e(i)]})},Bx=function r(t,e,n){var i=e-t;return He(t)?zd(t,r(0,t.length),e):Pi(n,function(s){return(i+(s-t)%i)%i+t})},zx=function r(t,e,n){var i=e-t,s=i*2;return He(t)?zd(t,r(0,t.length-1),e):Pi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Ds=function(t){return t.replace(vx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(xx);return Bd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},kd=function(t,e,n,i,s){var a=e-t,o=i-n;return Pi(s,function(l){return n+((l-t)/a*o||0)})},kx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=Le(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(He(t)&&!He(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=Jr(He(t)?[]:{},t));if(!h){for(l in e)Uc.call(o,t,l,"get",e[l]);s=function(_){return Bc(_,o)||(a?t.p:t)}}}return Pi(n,s)},vu=function(t,e,n){var i=t.labels,s=bn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},un=function(t,e,n){var i=t.vars,s=i[e],a=pe,o=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ei.length&&Ha(),o&&(pe=o),h=l?s.apply(c,l):s.call(c),pe=a,h},_s=function(t){return Ai(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fe),t.progress()<1&&un(t,"onInterrupt"),t},Fr,Vd=[],Hd=function(t){if(t)if(t=!t.name&&t.default||t,wc()||t.headless){var e=t.name,n=ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ps,render:Bc,add:Uc,kill:iy,modifier:ny,rawVars:0},a={targetTest:0,get:0,getSetter:Oc,aliases:{},register:0};if(es(),t!==i){if(ln[e])return;mn(i,mn(Ga(t,s),a)),Jr(i.prototype,Jr(s,Ga(t,a))),ln[i.prop=e]=i,t.targetTest&&(Ra.push(i),Pc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}bd(e,i),t.register&&t.register(rn,i,en)}else Vd.push(t)},le=255,vs={aqua:[0,le,le],lime:[0,le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,le],navy:[0,0,128],white:[le,le,le],olive:[128,128,0],yellow:[le,le,0],orange:[le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[le,0,0],pink:[le,192,203],cyan:[0,le,le],transparent:[le,le,le,0]},Xo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*le+.5|0},Gd=function(t,e,n){var i=t?oi(t)?[t>>16,t>>8&le,t&le]:0:vs.black,s,a,o,l,c,h,u,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),vs[t])i=vs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&le,i&le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&le,t&le]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(fu),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Xo(l+1/3,s,a),i[1]=Xo(l,s,a),i[2]=Xo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(yd),n&&i.length<4&&(i[3]=1),i}else i=t.match(fu)||vs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/le,a=i[1]/le,o=i[2]/le,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Wd=function(t){var e=[],n=[],i=-1;return t.split(bi).forEach(function(s){var a=s.match(Nr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},xu=function(t,e,n){var i="",s=(t+i).match(bi),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=Gd(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Wd(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(bi,"1").split(Nr),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(bi),u=c.length-1;o<u;o++)i+=c[o]+s[o];return i+c[u]},bi=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in vs)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Vx=/hsl[a]?\(/,Xd=function(t){var e=t.join(" "),n;if(bi.lastIndex=0,bi.test(e))return n=Vx.test(e),t[1]=xu(t[1],n),t[0]=xu(t[0],n,Wd(t[1])),!0},Ls,hn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(m){var p=r()-i,M=m===!0,S,x,A,w;if((p>t||p<0)&&(n+=p-e),i+=p,A=i-n,S=A-a,(S>0||M)&&(w=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=S+(S>=s?4:s-S),x=1),M||(l=c(g)),x)for(f=0;f<o.length;f++)o[f](A,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Sd&&(!Wl&&wc()&&(Bn=Wl=window,Cc=Bn.document||{},pn.gsap=rn,(Bn.gsapVersions||(Bn.gsapVersions=[])).push(rn.version),Ed(Va||Bn.GreenSockGlobals||!Bn.gsap&&Bn||{}),Vd.forEach(Hd)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ls=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ls=0,c=Ps},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,M){var S=p?function(x,A,w,T){m(x,A,w,T),u.remove(S)}:m;return u.remove(m),o[M?"unshift":"push"](S),es(),S},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),es=function(){return!Ls&&hn.wake()},qt={},Hx=/^[\d.\-M][\d.\-,\s]/,Gx=/["']/g,Wx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Gx,"").trim():+c,i=l.substr(o+1).trim();return e},Xx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},qx=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Wx(e[1])]:Xx(t).split(",").map(Cd)):qt._CE&&Hx.test(t)?qt._CE("",t):n},Yx=function(t){return function(e){return 1-t(1-e)}},nr=function(t,e){return t&&(ye(t)?t:qt[t]||qx(t))||e},lr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return tn(t,function(o){qt[o]=pn[o]=s,qt[a=o.toLowerCase()]=n;for(var l in s)qt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[o+"."+l]=s[l]}),s},qd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qo=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Gl*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*_x((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:qd(o);return s=Gl/s,l.config=function(c,h){return r(t,c,h)},l},Yo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:qd(n);return i.config=function(s){return r(t,s)},i};tn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;lr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;lr("Elastic",qo("in"),qo("out"),qo());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};lr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);lr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});lr("Circ",function(r){return-(vd(1-r*r)-1)});lr("Sine",function(r){return r===1?1:-gx(r*px)+1});lr("Back",Yo("in"),Yo("out"),Yo());qt.SteppedEase=qt.steps=pn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ce;return function(o){return((i*Vs(0,a,o)|0)+s)*n}}};Cs.ease=qt["quad.out"];tn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Dc+=r+","+r+"Params,"});var Yd=function(t,e){this.id=mx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ad,this.set=e?e.getSetter:Oc},Is=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ts(this,+e.duration,1,1),this.data=e.data,pe&&(this._ctx=pe,pe.data.push(this)),Ls||hn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(es(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(no(this,n),!s._dp||s.parent||Dd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ce||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Qr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ce?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ce?0:this._rts,this.totalTime(Vs(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),eo(this),wx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(es(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ce&&(this._tTime-=ce)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=me(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vn(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ex);var i=Fe;return Fe=n,Ic(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Fe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,_u(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,_u(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(xn(this,n),Qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Qe(i)),this._dur||(this._zTime=-ce),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ce:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ce,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ce)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ye(n)?n:Rd,l=function(){var h=i.then;i.then=null,s&&s(),ye(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){_s(this)},r})();mn(Is.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ce,_prom:0,_ps:!1,_rts:1});var Ke=(function(r){_d(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Qe(n.sortChildren),ge&&Vn(n.parent||ge,Qn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ld(Qn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return bs(0,arguments,this),this},e.from=function(i,s,a){return bs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return bs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Es(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Te(i,s,xn(this,a),1),this},e.call=function(i,s,a){return Vn(this,Te.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Te(i,a,xn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,h){return a.runBackwards=1,Es(a).immediateRender=Qe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,h)},e.staggerFromTo=function(i,s,a,o,l,c,h,u){return o.startAt=a,Es(o).immediateRender=Qe(o.immediateRender),this.staggerTo(i,s,o,l,c,h,u)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:me(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,M,S,x,A,w,T;if(this!==ge&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,x=this._start,S=this._ts,p=!S,u&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=me(h%m),h===l?(g=this._repeat,d=c):(A=me(h/m),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=Qr(this._tTime,m),!o&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),w&&g&1&&(d=c-d,T=1),g!==A&&!this._lock){var C=w&&A&1,v=C===(w&&g&1);if(g<A&&(C=!C),o=C?0:h%c?c:h,this._lock=1,this.render(o||(T?0:me(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Dx(this,me(o),me(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&c&&!s&&!A&&(un(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-ce);break}}f=_}else{f=this._last;for(var y=i<0?i:d;f;){if(_=f._prev,(f._act||y<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(y-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(y-f._start)*f._ts,s,a||Fe&&Ic(f)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=y?-ce:ce);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=o?0:-ce)._zTime=d>=o?1:-1,this._ts))return this._start=x,eo(this),this.render(i,s,a);this._onUpdate&&!s&&un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ai(this,1),!s&&!(i<0&&!o)&&(h||o||!l)&&(un(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(oi(s)||(s=xn(this,s,i)),!(i instanceof Is)){if(He(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Le(i))return this.addLabel(i,s);if(ye(i))i=Te.delayedCall(0,i);else return this}return this!==i?Vn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Te?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Le(i)?this.removeLabel(i):ye(i)?this.killTweensOf(i):(i.parent===this&&to(this,i),i===this._recent&&(this._recent=this._last),er(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=me(hn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=xn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Te.delayedCall(0,s||Ps,a);return o.data="isPause",this._hasPause=1,Vn(this,o,xn(this,i))},e.removePause=function(i){var s=this._first;for(i=xn(this,i);s;)s._start===i&&s.data==="isPause"&&Ai(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)_i!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Tn(i),l=this._first,c=oi(s),h;l;)l instanceof Te?bx(l._targets,o)&&(c?(!_i||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=xn(a,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=Te.to(a,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ce,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ts(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,mn({startAt:{time:xn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vu(this,xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vu(this,xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ce)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=me(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return er(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),er(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=bn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=me(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ts(a,a===ge&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ge._ts&&(wd(ge,Wa(i,ge)),Td=hn.frame),hn.frame>=pu){pu+=fn.autoSleep||120;var s=ge._first;if((!s||!s._ts)&&fn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},t})(Is);mn(Ke.prototype,{_lock:0,_hasPause:0,_forcing:0});var $x=function(t,e,n,i,s,a,o){var l=new en(this._pt,t,e,0,1,Qd,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ds(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(Go)||[];u=Go.exec(i);)_=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?Vr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Go.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Md.test(i)||p)&&(l.e=0),this._pt=l,l},Uc=function(t,e,n,i,s,a,o,l,c,h){ye(i)&&(i=i(s||0,t,a));var u=t[e],d=n!=="get"?n:ye(u)?c?t[e.indexOf("set")||!ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=ye(u)?c?Qx:Zd:Fc,_;if(Le(i)&&(~i.indexOf("random(")&&(i=Ds(i)),i.charAt(1)==="="&&(_=Vr(d,i)+(Ve(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Zl)return!isNaN(d*i)&&i!==""?(_=new en(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?ey:Jd,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&Rc(e,i),$x.call(this,t,e,d,i,f,l||fn.stringFilter,c))},jx=function(t,e,n,i,s){if(ye(t)&&(t=Ts(t,s,e,n,i)),!Wn(t)||t.style&&t.nodeType||He(t)||xd(t))return Le(t)?Ts(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ts(t[o],s,e,n,i);return a},$d=function(t,e,n,i,s,a){var o,l,c,h;if(ln[t]&&(o=new ln[t]).init(s,o.rawVars?e[t]:jx(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new en(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Fr))for(c=n._ptLookup[n._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},_i,Zl,Nc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Tc,x=t.timeline,A=i.easeReverse||u,w,T,C,v,y,D,N,F,V,G,X,j,W;if(x&&(!d||!s)&&(s="none"),t._ease=nr(s,Cs.ease),t._rEase=A&&(nr(A)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||d&&!i.stagger){if(F=m[0]?tr(m[0]).harness:0,j=F&&i[F.prop],w=Ga(i,Pc),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&_?Ca:Sx),g._lazy=0),a){if(Ai(t._startAt=Te.set(m,mn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Qe(l),startAt:null,delay:0,onUpdate:c&&function(){return un(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe||!o&&!f)&&t._startAt.revert(Ca),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),C=mn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Qe(l),immediateRender:o,stagger:0,parent:p},w),j&&(C[F.prop]=j),Ai(t._startAt=Te.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Fe?t._startAt.revert(Ca):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ce,ce);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Qe(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],N=y._gsap||Lc(m)[T]._gsap,t._ptLookup[T]=G={},Xl[N.id]&&Ei.length&&Ha(),X=M===m?T:M.indexOf(y),F&&(V=new F).init(y,j||w,t,X,M)!==!1&&(t._pt=v=new en(t._pt,y,V.name,0,1,V.render,V,0,V.priority),V._props.forEach(function(ot){G[ot]=v}),V.priority&&(D=1)),!F||j)for(C in w)ln[C]&&(V=$d(C,w,t,X,y,M))?V.priority&&(D=1):G[C]=v=Uc.call(t,y,C,"get",w[C],X,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),S&&t._pt&&(_i=t,ge.killTweensOf(y,G,t.globalTime(e)),W=!t.parent,_i=0),t._pt&&l&&(Xl[N.id]=1)}D&&tf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&x.render(bn,!0,!0)},Kx=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Zl=1,t.vars[e]="+=0",Nc(t,o),Zl=0,l?Rs(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=Me(n)+Ve(u.e)),u.b&&(u.b=h.s+Ve(u.b))},Zx=function(t,e){var n=t[0]?tr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Jr({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Jx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(He(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ts=function(t,e,n,i,s){return ye(t)?t.call(e,n,i,s):Le(t)&&~t.indexOf("random(")?Ds(t):t},jd=Dc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Kd={};tn(jd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Kd[r]=1});var Te=(function(r){_d(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Es(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||ge,M=(He(n)||xd(n)?oi(n[0]):"length"in i)?[n]:Tn(n),S,x,A,w,T,C,v,y;if(o._targets=M.length?Lc(M):Rs("GSAP target "+n+" not found. https://gsap.com",!fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||ya(c)||ya(h)){i=o.vars;var D=i.easeReverse||i.yoyoEase;if(S=o.timeline=new Ke({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Qn(o),S._start=0,d||ya(c)||ya(h)){if(w=M.length,v=d&&Fd(d),Wn(d))for(T in d)~jd.indexOf(T)&&(y||(y={}),y[T]=d[T]);for(x=0;x<w;x++)A=Ga(i,Kd),A.stagger=0,D&&(A.easeReverse=D),y&&Jr(A,y),C=M[x],A.duration=+Ts(c,Qn(o),x,C,M),A.delay=(+Ts(h,Qn(o),x,C,M)||0)-o._delay,!d&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),S.to(C,A,v?v(x,C,M):0),S._ease=qt.none;S.duration()?c=h=0:o.timeline=0}else if(_){Es(mn(S.vars.defaults,{ease:"none"})),S._ease=nr(_.ease||i.ease||"none");var N=0,F,V,G;if(He(_))_.forEach(function(X){return S.to(M,X,">")}),S.duration();else{A={};for(T in _)T==="ease"||T==="easeEach"||Jx(T,_[T],A,_.easeEach);for(T in A)for(F=A[T].sort(function(X,j){return X.t-j.t}),N=0,x=0;x<F.length;x++)V=F[x],G={ease:V.e,duration:(V.t-(x?F[x-1].t:0))/100*c},G[T]=V.v,S.to(M,G,N),N+=G.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!Tc&&(_i=Qn(o),ge.killTweensOf(M),_i=0),Vn(p,Qn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===me(p._time)&&Qe(u)&&Cx(Qn(o))&&p.data!=="nested")&&(o._tTime=-ce,o.render(Math.max(0,-h)||0)),m&&Ld(Qn(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-ce&&!h?l:i<ce?0:i,d,f,_,g,m,p,M,S;if(!c)Px(this,i,s,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,a);if(d=me(u%g),u===l?(_=this._repeat,d=c):(m=me(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(d=c-d),m=Qr(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(me(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Id(this,h?i:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var x=d<o;if(x!==this._inv){var A=x?o:c-o;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(x?-1:1)/A:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!s&&!m&&(un(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&ql(this,i,s,a),un(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&ql(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ai(this,1),!s&&!(h&&!o)&&(u||o||p)&&(un(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ls||hn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Nc(this,c),h=this._ease(c/this._dur),Kx(this,i,s,a,o,h,c,l)?this.resetTo(i,s,a,o,1):(no(this,0),this.parent||Pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_s(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fe),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,_i&&_i.vars.overwrite!==!0)._first||_s(this),this.parent&&a!==this.timeline.totalDuration()&&ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Tn(i):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&Ax(o,l))return s==="all"&&(this._pt=0),_s(this);for(u=this._op=this._op||[],s!=="all"&&(Le(s)&&(g={},tn(s,function(M){return g[M]=1}),s=g),s=Zx(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&to(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&_s(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return bs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return bs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ge.killTweensOf(i,s,a)},t})(Is);mn(Te.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});tn("staggerTo,staggerFrom,staggerFromTo",function(r){Te[r]=function(){var t=new Ke,e=$l.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fc=function(t,e,n){return t[e]=n},Zd=function(t,e,n){return t[e](n)},Qx=function(t,e,n,i){return t[e](i.fp,n)},ty=function(t,e,n){return t.setAttribute(e,n)},Oc=function(t,e){return ye(t[e])?Zd:Ac(t[e])&&t.setAttribute?ty:Fc},Jd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ey=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ny=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},iy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?to(this,e,"_pt"):e.dep||(n=1),e=i;return!n},ry=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},tf=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},en=(function(){function r(e,n,i,s,a,o,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Jd,this.d=l||this,this.set=c||Fc,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ry,this.m=n,this.mt=s,this.tween=i},r})();tn(Dc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Pc[r]=1});pn.TweenMax=pn.TweenLite=Te;pn.TimelineLite=pn.TimelineMax=Ke;ge=new Ke({sortChildren:!1,defaults:Cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fn.stringFilter=Xd;var ir=[],Pa={},sy=[],yu=0,ay=0,$o=function(t){return(Pa[t]||sy).map(function(e){return e()})},Jl=function(){var t=Date.now(),e=[];t-yu>2&&($o("matchMediaInit"),ir.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Bn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),$o("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),yu=t,$o("matchMedia"))},ef=(function(){function r(e,n){this.selector=n&&jl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ay++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ye(n)&&(s=i,i=n,n=ye);var a=this,o=function(){var c=pe,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=jl(s)),pe=a,u=i.apply(a,arguments),ye(u)&&a._r.push(u),pe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===ye?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=pe;pe=null,n(this),pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Te&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ke?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Te)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ir.length;a--;)ir[a].id===this.id&&ir.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),oy=(function(){function r(e){this.contexts=[],this.scope=e,pe&&pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Wn(n)||(n={matches:n});var a=new ef(0,s||this.scope),o=a.conditions={},l,c,h;pe&&!a.selector&&(a.selector=pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Bn.matchMedia(n[c]),l&&(ir.indexOf(a)<0&&ir.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Jl):l.addEventListener("change",Jl)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Hd(i)})},timeline:function(t){return new Ke(t)},getTweensOf:function(t,e){return ge.getTweensOf(t,e)},getProperty:function(t,e,n,i){Le(t)&&(t=Tn(t)[0]);var s=tr(t||{}).get,a=n?Rd:Cd;return n==="native"&&(n=""),t&&(e?a((ln[e]&&ln[e].get||s)(t,e,n,i)):function(o,l,c){return a((ln[o]&&ln[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Tn(t),t.length>1){var i=t.map(function(h){return rn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var a=ln[e],o=tr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Fr._pt=0,u.init(t,n?h+n:h,Fr,0,[t]),u.render(1,u),Fr._pt&&Bc(1,Fr)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,s=rn.to(t,mn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=nr(t.ease,Cs.ease)),mu(Cs,t||{})},config:function(t){return mu(fn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ln[o]&&!pn[o]&&Rs(e+" effect requires "+o+" plugin.")}),Wo[e]=function(o,l,c){return n(Tn(o),mn(l||{},s),c)},a&&(Ke.prototype[e]=function(o,l,c){return this.add(Wo[e](o,Wn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=nr(e)},parseEase:function(t,e){return arguments.length?nr(t,e):qt},getById:function(t){return ge.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ke(t),i,s;for(n.smoothChildTiming=Qe(t.smoothChildTiming),ge.remove(n),n._dp=0,n._time=n._tTime=ge._time,i=ge._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Te&&i.vars.onComplete===i._targets[0]))&&Vn(n,i,i._start-i._delay),i=s;return Vn(ge,n,0),n},context:function(t,e){return t?new ef(t,e):pe},matchMedia:function(t){return new oy(t)},matchMediaRefresh:function(){return ir.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Jl()},addEventListener:function(t,e){var n=Pa[t]||(Pa[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Pa[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Bx,wrapYoyo:zx,distribute:Fd,random:Bd,snap:Od,normalize:Ox,getUnit:Ve,clamp:Ix,splitColor:Gd,toArray:Tn,selector:jl,mapRange:kd,pipe:Nx,unitize:Fx,interpolate:kx,shuffle:Nd},install:Ed,effects:Wo,ticker:hn,updateRoot:Ke.updateRoot,plugins:ln,globalTimeline:ge,core:{PropTween:en,globals:bd,Tween:Te,Timeline:Ke,Animation:Is,getCache:tr,_removeLinkedListItem:to,reverting:function(){return Fe},context:function(t){return t&&pe&&(pe.data.push(t),t._ctx=pe),pe},suppressOverwrites:function(t){return Tc=t}}};tn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Xa[r]=Te[r]});hn.add(Ke.updateRoot);Fr=Xa.to({},{duration:0});var ly=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},cy=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=ly(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},jo=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Le(s)&&(l={},tn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}cy(o,s)}}}},rn=Xa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Fe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},jo("roundProps",Kl),jo("modifiers"),jo("snap",Od))||Xa;Te.version=Ke.version=rn.version="3.15.0";Sd=1;wc()&&es();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mu,vi,Hr,zc,Zi,Su,kc,hy=function(){return typeof window<"u"},li={},Gi=180/Math.PI,Gr=Math.PI/180,Dr=Math.atan2,Eu=1e8,Vc=/([A-Z])/g,uy=/(left|right|width|margin|padding|x)/i,dy=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ql=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fy=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},py=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},my=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},gy=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},rf=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},_y=function(t,e,n){return t.style[e]=n},vy=function(t,e,n){return t.style.setProperty(e,n)},xy=function(t,e,n){return t._gsap[e]=n},yy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},My=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Sy=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},_e="transform",nn=_e+"Origin",Ey=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in li&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Hn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=ti(i,o)}):this.tfm[t]=a.x?a[t]:ti(i,t),t===nn&&(this.tfm.zOrigin=a.zOrigin);else return Hn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(_e)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=_e}(s||e)&&this.props.push(t,e,s[t])},sf=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},by=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=kc(),(!s||!s.isStart)&&!n[_e]&&(sf(n),i.zOrigin&&n[nn]&&(n[nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},af=function(t,e){var n={target:t,props:[],revert:by,save:Ey};return t._gsap||rn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},of,tc=function(t,e){var n=vi.createElementNS?vi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):vi.createElement(t);return n&&n.style?n:vi.createElement(t)},dn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ns(e)||e,1)||""},bu="O,Moz,ms,Ms,Webkit".split(","),ns=function(t,e,n){var i=e||Zi,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(bu[a]+t in s););return a<0?null:(a===3?"ms":a>=0?bu[a]:"")+t},ec=function(){hy()&&window.document&&(Mu=window,vi=Mu.document,Hr=vi.documentElement,Zi=tc("div")||{style:{}},tc("div"),_e=ns(_e),nn=_e+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",of=!!ns("perspective"),kc=rn.core.reverting,zc=1)},Tu=function(t){var e=t.ownerSVGElement,n=tc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hr.removeChild(n),s},Au=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},lf=function(t){var e,n;try{e=t.getBBox()}catch{e=Tu(t),n=1}return e&&(e.width||e.height)||n||(e=Tu(t)),e&&!e.width&&!e.x&&!e.y?{x:+Au(t,["x","cx","x1"])||0,y:+Au(t,["y","cy","y1"])||0,width:0,height:0}:e},cf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&lf(t))},wi=function(t,e){if(e){var n=t.style,i;e in li&&e!==nn&&(e=_e),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vc,"-$1").toLowerCase())):n.removeAttribute(e)}},xi=function(t,e,n,i,s,a){var o=new en(t._pt,e,n,0,1,a?rf:nf);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},wu={deg:1,rad:1,turn:1},Ty={grid:1,flex:1},Ci=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zi.style,l=uy.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||wu[i]||wu[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&cf(t),(f||a==="%")&&(li[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Me(f?s/_*u:s/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===vi||!g.appendChild)&&(g=vi.body),m=g._gsap,m&&f&&m.width&&l&&m.time===hn.time&&!m.uncache)return Me(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:wi(t,e)}else(f||a==="%")&&!Ty[dn(g,"display")]&&(o.position=dn(t,"position")),g===t&&(o.position="static"),g.appendChild(Zi),_=Zi[h],g.removeChild(Zi),o.position="absolute";return l&&f&&(m=tr(g),m.time=hn.time,m.width=g[h]),Me(d?_*s/u:_&&s?u/_*s:0)},ti=function(t,e,n,i){var s;return zc||ec(),e in Hn&&e!=="transform"&&(e=Hn[e],~e.indexOf(",")&&(e=e.split(",")[0])),li[e]&&e!=="transform"?(s=Ns(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ya(dn(t,nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=qa[e]&&qa[e](t,e,n)||dn(t,e)||Ad(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ci(t,e,s,n)+n:s},Ay=function(t,e,n,i){if(!n||n==="none"){var s=ns(e,t,1),a=s&&dn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=dn(t,"borderTopColor"))}var o=new en(this._pt,t.style,e,0,1,Qd),l=0,c=0,h,u,d,f,_,g,m,p,M,S,x,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=dn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=dn(t,e)||i,g?t.style[e]=g:wi(t,e)),h=[n,i],Xd(h),n=h[0],i=h[1],d=n.match(Nr)||[],A=i.match(Nr)||[],A.length){for(;u=Nr.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=Vr(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Nr.lastIndex-S.length,S||(S=S||fn.units[e]||x,l===i.length&&(i+=S,o.e+=S)),x!==S&&(f=Ci(t,e,g,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?rf:nf;return Md.test(i)&&(o.e=0),this._pt=o,o},Cu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wy=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Cu[n]||n,e[1]=Cu[i]||i,e.join(" ")},Cy=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],li[o]&&(l=1,o=o==="transformOrigin"?nn:_e),wi(n,o);l&&(wi(n,_e),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ns(n,1),a.uncache=1,sf(i)))}},qa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new en(t._pt,e,n,0,0,Cy);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Us=[1,0,0,1,0,0],hf={},uf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ru=function(t){var e=dn(t,_e);return uf(e)?Us:e.substr(7).match(yd).map(Me)},Hc=function(t,e){var n=t._gsap||tr(t),i=t.style,s=Ru(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Us:s):(s===Us&&!t.offsetParent&&t!==Hr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Hr.appendChild(t)),s=Ru(t),l?i.display=l:wi(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Hr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nc=function(t,e,n,i,s,a){var o=t._gsap,l=s||Hc(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,A=parseFloat(S[1])||0,w,T,C,v;n?l!==Us&&(T=f*m-_*g)&&(C=x*(m/T)+A*(-g/T)+(g*M-m*p)/T,v=x*(-_/T)+A*(f/T)-(f*M-_*p)/T,x=C,A=v):(w=lf(t),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),A=w.y+(~(S[1]||S[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(p=x-c,M=A-h,o.xOffset=u+(p*f+M*g)-p,o.yOffset=d+(p*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[nn]="0px 0px",a&&(xi(a,o,"xOrigin",c,x),xi(a,o,"yOrigin",h,A),xi(a,o,"xOffset",u,o.xOffset),xi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+A)},Ns=function(t,e){var n=t._gsap||new Yd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=dn(t,nn)||"0",h,u,d,f,_,g,m,p,M,S,x,A,w,T,C,v,y,D,N,F,V,G,X,j,W,ot,I,P,et,lt,k,$;return h=u=d=g=m=p=M=S=x=0,f=_=1,n.svg=!!(t.getCTM&&cf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[_e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[_e]!=="none"?l[_e]:"")),i.scale=i.rotate=i.translate="none"),T=Hc(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),nc(t,j||c,!!j||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==Us&&(D=T[0],N=T[1],F=T[2],V=T[3],h=G=T[4],u=X=T[5],T.length===6?(f=Math.sqrt(D*D+N*N),_=Math.sqrt(V*V+F*F),g=D||N?Dr(N,D)*Gi:0,M=F||V?Dr(F,V)*Gi+g:0,M&&(_*=Math.abs(Math.cos(M*Gr))),n.svg&&(h-=A-(A*D+w*F),u-=w-(A*N+w*V))):($=T[6],lt=T[7],I=T[8],P=T[9],et=T[10],k=T[11],h=T[12],u=T[13],d=T[14],C=Dr($,et),m=C*Gi,C&&(v=Math.cos(-C),y=Math.sin(-C),j=G*v+I*y,W=X*v+P*y,ot=$*v+et*y,I=G*-y+I*v,P=X*-y+P*v,et=$*-y+et*v,k=lt*-y+k*v,G=j,X=W,$=ot),C=Dr(-F,et),p=C*Gi,C&&(v=Math.cos(-C),y=Math.sin(-C),j=D*v-I*y,W=N*v-P*y,ot=F*v-et*y,k=V*y+k*v,D=j,N=W,F=ot),C=Dr(N,D),g=C*Gi,C&&(v=Math.cos(C),y=Math.sin(C),j=D*v+N*y,W=G*v+X*y,N=N*v-D*y,X=X*v-G*y,D=j,G=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Me(Math.sqrt(D*D+N*N+F*F)),_=Me(Math.sqrt(X*X+$*$)),C=Dr(G,X),M=Math.abs(C)>2e-4?C*Gi:0,x=k?1/(k<0?-k:k):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!uf(dn(t,_e)),j&&t.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Me(f),n.scaleY=Me(_),n.rotation=Me(g)+o,n.rotationX=Me(m)+o,n.rotationY=Me(p)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[nn]=Ya(c)),n.xOffset=n.yOffset=0,n.force3D=fn.force3D,n.renderTransform=n.svg?Py:of?df:Ry,n.uncache=0,n},Ya=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ko=function(t,e,n){var i=Ve(e);return Me(parseFloat(e)+parseFloat(Ci(t,"x",n+"px",i)))+i},Ry=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,df(t,e)},zi="0deg",ms="0px",ki=") ",df=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",A=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==zi||h!==zi)){var w=parseFloat(h)*Gr,T=Math.sin(w),C=Math.cos(w),v;w=parseFloat(u)*Gr,v=Math.cos(w),a=Ko(M,a,T*v*-S),o=Ko(M,o,-Math.sin(w)*-S),l=Ko(M,l,C*v*-S+S)}m!==ms&&(x+="perspective("+m+ki),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(A||a!==ms||o!==ms||l!==ms)&&(x+=l!==ms||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ki),c!==zi&&(x+="rotate("+c+ki),h!==zi&&(x+="rotateY("+h+ki),u!==zi&&(x+="rotateX("+u+ki),(d!==zi||f!==zi)&&(x+="skew("+d+", "+f+ki),(_!==1||g!==1)&&(x+="scale("+_+", "+g+ki),M.style[_e]=x||"translate(0, 0)"},Py=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(a),x=parseFloat(o),A,w,T,C,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Gr,c*=Gr,A=Math.cos(l)*u,w=Math.sin(l)*u,T=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Gr,v=Math.tan(c-h),v=Math.sqrt(1+v*v),T*=v,C*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),A*=v,w*=v)),A=Me(A),w=Me(w),T=Me(T),C=Me(C)):(A=u,C=d,w=T=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=Ci(f,"x",a,"px"),x=Ci(f,"y",o,"px")),(_||g||m||p)&&(S=Me(S+_-(_*A+g*T)+m),x=Me(x+g-(_*w+g*C)+p)),(i||s)&&(v=f.getBBox(),S=Me(S+i/100*v.width),x=Me(x+s/100*v.height)),v="matrix("+A+","+w+","+T+","+C+","+S+","+x+")",f.setAttribute("transform",v),M&&(f.style[_e]=v)},Dy=function(t,e,n,i,s){var a=360,o=Le(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Gi:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Eu)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Eu)%a-~~(c/a)*a)),t._pt=d=new en(t._pt,e,n,i,c,fy),d.e=h,d.u="deg",t._props.push(n),d},Pu=function(t,e){for(var n in e)t[n]=e[n];return t},Ly=function(t,e,n){var i=Pu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[_e]=e,o=Ns(n,1),wi(n,_e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[_e],a[_e]=e,o=Ns(n,1),a[_e]=c);for(l in li)c=i[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Ve(c),_=Ve(h),u=f!==_?Ci(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new en(t._pt,o,l,u,d-u,Ql),t._pt.u=_||0,t._props.push(l));Pu(o,i)};tn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});qa[t>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return ti(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var ff={name:"css",register:ec,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,f,_,g,m,p,M,S,x,A,w,T,C,v;zc||ec(),this.styles=this.styles||af(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ln[g]&&$d(g,e,n,i,t,s)))){if(f=typeof h,_=qa[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ds(h)),_)_(this,t,g,h,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",bi.lastIndex=0,bi.test(c)||(m=Ve(c),p=Ve(h),p?m!==p&&(c=Ci(t,g,c,p)+p):m&&(h+=m)),this.add(o,"setProperty",c,h,i,s,0,0,g),a.push(g),C.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Le(c)&&~c.indexOf("random(")&&(c=Ds(c)),Ve(c+"")||c==="auto"||(c+=fn.units[g]||Ve(ti(t,g))||""),(c+"").charAt(1)==="="&&(c=ti(t,g))):c=ti(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in Hn&&(g==="autoAlpha"&&(d===1&&ti(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,o.visibility),xi(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Hn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in li,S){if(this.styles.save(g),v=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=dn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var y=t.style.perspective;t.style.perspective=h,h=dn(t,"perspective"),y?t.style.perspective=y:wi(t,"perspective")}u=parseFloat(h)}if(x||(A=t._gsap,A.renderTransform&&!e.parseTransform||Ns(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,x=this._pt=new en(this._pt,o,_e,0,1,A.renderTransform,A,0,-1),x.dep=1),g==="scale")this._pt=new en(this._pt,A,"scaleY",A.scaleY,(M?Vr(A.scaleY,M+u):u)-A.scaleY||0,Ql),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(nn,0,o[nn]),h=wy(h),A.svg?nc(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&xi(this,A,"zOrigin",A.zOrigin,p),xi(this,o,g,Ya(c),Ya(h)));continue}else if(g==="svgOrigin"){nc(t,h,1,w,0,this);continue}else if(g in hf){Dy(this,A,g,d,M?Vr(d,M+h):h);continue}else if(g==="smoothOrigin"){xi(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Ly(this,h,t);continue}}else g in o||(g=ns(g)||g);if(S||(u||u===0)&&(d||d===0)&&!dy.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),p=Ve(h)||(g in fn.units?fn.units[g]:m),m!==p&&(d=Ci(t,g,c,p)),this._pt=new en(this._pt,S?A:o,g,d,(M?Vr(d,M+u):u)-d,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?gy:Ql),this._pt.u=p||0,S&&v!==h?(this._pt.b=c,this._pt.e=v,this._pt.r=my):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=py);else if(g in o)Ay.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){Rc(g,h);continue}S||(g in o?C.push(g,0,o[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),a.push(g)}}T&&tf(this)},render:function(t,e){if(e.tween._time||!kc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ti,aliases:Hn,getSetter:function(t,e,n){var i=Hn[e];return i&&i.indexOf(",")<0&&(e=i),e in li&&e!==nn&&(t._gsap.x||ti(t,"x"))?n&&Su===n?e==="scale"?yy:xy:(Su=n||{})&&(e==="scale"?My:Sy):t.style&&!Ac(t.style[e])?_y:~e.indexOf("-")?vy:Oc(t,e)},core:{_removeProperty:wi,_getMatrix:Hc}};rn.utils.checkPrefix=ns;rn.core.getStyleSaver=af;(function(r,t,e,n){var i=tn(r+","+t+","+e,function(s){li[s]=1});tn(t,function(s){fn.units[s]="deg",hf[s]=1}),Hn[i[13]]=r+","+t,tn(n,function(s){var a=s.split(":");Hn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");tn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){fn.units[r]="px"});rn.registerPlugin(ff);var Ln=rn.registerPlugin(ff)||rn;Ln.core.Tween;class Iy{container;onStageSelect;scene;camera;renderer;composer;controls;ambientLight;dirLight;corePointLight;gridHelper;radarRingsGroup;starsParticles;reactorGroup;reactorInnerMesh;reactorCageMesh;energyPillarMesh;energyRingMesh;funnelGroup;funnelRings=[];interactiveMeshes=[];sectorsGroup;photonPackets=[];dealOrbsGroup;dealOrbs=[];shockwaveMesh;burstParticles=[];activeStageIndex=0;isLightMode=!1;reactorSpinSpeed=1;orbVelocityMultiplier=1;animationFrameId=null;clock=new ld;raycaster=new om;mouse=new gt;isPointerDown=!1;pointerDownPos=new gt;resizeObserver;constructor(t,e){this.container=t,this.onStageSelect=e,this.scene=new Gp,this.scene.background=new At(264469),this.scene.fog=new Na(264469,.02);const n=this.container.clientWidth/(this.container.clientHeight||1);this.camera=new cn(46,n,.1,100),this.camera.position.set(11.8,7.2,13.2),this.renderer=new Xv({antialias:!0,powerPreference:"high-performance",alpha:!1}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Nu,this.renderer.toneMappingExposure=1.15,this.container.appendChild(this.renderer.domElement);const i=new dx(this.scene,this.camera),s=new Zr(new gt(this.container.clientWidth,this.container.clientHeight),.75,.35,.82);this.composer=new ux(this.renderer),this.composer.addPass(i),this.composer.addPass(s),this.controls=new Yv(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.maxDistance=32,this.controls.minDistance=3.5,this.controls.maxPolarAngle=Math.PI/2+.08,this.controls.target.set(0,-.2,0),typeof ResizeObserver<"u"&&(this.resizeObserver=new ResizeObserver(()=>{this.resize()}),this.resizeObserver.observe(this.container)),this.ambientLight=new sm(14412542,.7),this.scene.add(this.ambientLight),this.dirLight=new rm(16777215,1.3),this.dirLight.position.set(12,22,10),this.scene.add(this.dirLight),this.corePointLight=new Uh(1096065,2.8,22),this.corePointLight.position.set(0,.6,0),this.scene.add(this.corePointLight);const a=new Uh(440020,1.8,25);a.position.set(-10,4,-8),this.scene.add(a),this.gridHelper=new No(36,36,1096065,1976635),this.gridHelper.position.y=-3.5,this.gridHelper.material.transparent=!0,this.gridHelper.material.opacity=.32,this.scene.add(this.gridHelper);const o=new No(36,12,16096779,988970);o.position.y=-3.49,o.material.transparent=!0,o.material.opacity=.2,this.scene.add(o),this.radarRingsGroup=new Un,this.radarRingsGroup.position.y=-3.48,this.radarRingsGroup.rotation.x=-Math.PI/2,[3.5,6,9,12].forEach(d=>{const f=new ka(d-.03,d+.03,64),_=new In({color:3900150,transparent:!0,opacity:.16,side:Mn}),g=new de(f,_);this.radarRingsGroup.add(g)}),this.scene.add(this.radarRingsGroup);const l=350,c=new Ce,h=new Float32Array(l*3);for(let d=0;d<l*3;d+=3)h[d]=(Math.random()-.5)*36,h[d+1]=Math.random()*18-4,h[d+2]=(Math.random()-.5)*36;c.setAttribute("position",new An(h,3));const u=new sd({color:9684477,size:.08,transparent:!0,opacity:.45});this.starsParticles=new $p(c,u),this.scene.add(this.starsParticles),this.reactorGroup=new Un,this.funnelGroup=new Un,this.sectorsGroup=new Un,this.dealOrbsGroup=new Un,this.scene.add(this.reactorGroup),this.scene.add(this.funnelGroup),this.scene.add(this.sectorsGroup),this.scene.add(this.dealOrbsGroup),this.buildReactorCore(),this.buildKineticFunnel(),this.buildOrbitingSectors(),this.buildDescendingDealOrbs(),this.buildShockwaveMesh(),this.setupInteractions(),this.animate=this.animate.bind(this),this.animationFrameId=requestAnimationFrame(this.animate)}buildReactorCore(){const t=new yc(.88,2),e=new Rr({color:16096779,emissive:1096065,emissiveIntensity:1.6,roughness:.2,metalness:.9,wireframe:!1});this.reactorInnerMesh=new de(t,e),this.reactorInnerMesh.position.y=.6,this.reactorGroup.add(this.reactorInnerMesh);const n=new Ss(1.65,.04,16,64),i=new In({color:16498468,transparent:!0,opacity:.75,blending:$i});this.energyRingMesh=new de(n,i),this.energyRingMesh.position.y=.6,this.energyRingMesh.rotation.x=Math.PI/2,this.reactorGroup.add(this.energyRingMesh);const s=new za(1.35,1),a=new Rr({color:3718648,emissive:165063,emissiveIntensity:.6,wireframe:!0,roughness:.3,metalness:.9});this.reactorCageMesh=new de(s,a),this.reactorCageMesh.position.y=.6,this.reactorGroup.add(this.reactorCageMesh);const o=new ys(.08,.22,7.8,16),l=new In({color:7268279,transparent:!0,opacity:.35,blending:$i});this.energyPillarMesh=new de(o,l),this.energyPillarMesh.position.y=.6,this.reactorGroup.add(this.energyPillarMesh)}createFunnelStageSprite(t,e){const n=document.createElement("canvas");n.width=420,n.height=120;const i=n.getContext("2d");if(i){const u=n.width-20,d=n.height-20;i.beginPath(),i.moveTo(30,10),i.arcTo(10+u,10,10+u,10+d,20),i.arcTo(10+u,10+d,10,10+d,20),i.arcTo(10,10+d,10,10,20),i.arcTo(10,10,10+u,10,20),i.closePath(),i.fillStyle="rgba(7, 13, 28, 0.88)",i.fill(),i.strokeStyle=t.colorHex,i.lineWidth=3,i.shadowColor=t.colorHex,i.shadowBlur=14,i.stroke(),i.shadowBlur=0,i.beginPath(),i.arc(50,60,22,0,Math.PI*2),i.fillStyle=t.colorHex,i.fill(),i.fillStyle="#030712",i.font='bold 24px "JetBrains Mono", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText(String(t.index+1),50,60),i.textAlign="left",i.textBaseline="alphabetic",i.fillStyle="#ffffff",i.font='bold 22px "Plus Jakarta Sans", "Cairo", sans-serif';const f=t.badgeEn.replace(/Stage \d+:\s*/,"");i.fillText(f,86,56),i.fillStyle=t.colorHex,i.font='bold 20px "JetBrains Mono", monospace',i.fillText("Conv: "+e,86,90)}const s=new Ph(n);s.minFilter=En;const a=new zl({map:s,transparent:!0,depthWrite:!1}),o=new Eh(a);return o.scale.set(1.9,.54,1),o}createSectorSprite(t){const e=document.createElement("canvas");e.width=380,e.height=100;const n=e.getContext("2d");if(n){const h=e.width-12,u=e.height-12;n.beginPath(),n.roundRect(6,6,h,u,16),n.fillStyle="rgba(7, 13, 28, 0.90)",n.fill(),n.strokeStyle=t.colorHex,n.lineWidth=3,n.stroke(),n.beginPath(),n.arc(30,6+u/2,8,0,Math.PI*2),n.fillStyle=t.colorHex,n.fill(),n.font='bold 22px "Plus Jakarta Sans", "Cairo", sans-serif',n.fillStyle="#ffffff",n.textAlign="left",n.textBaseline="middle",n.fillText(t.nameEn,48,6+u/2-12),n.font='bold 18px "JetBrains Mono", monospace',n.fillStyle="#fbbf24",n.fillText(t.acvLabel,48,6+u/2+14)}const i=new Ph(e);i.minFilter=En;const s=new zl({map:i,transparent:!0,depthWrite:!1}),a=new Eh(s);return a.scale.set(2.1,.52,1),a}buildKineticFunnel(){const t=[3.2,1.9,.6,-.7,-2],e=[4.2,3.5,2.8,2.1,1.4];Jn.forEach((n,i)=>{const s=t[i],a=e[i],o=i<4?e[i+1]:a*.75,l=i<4?t[i]-t[i+1]:1.1,c=new Ss(a,.08,16,64),h=new Rr({color:new At(n.colorHex),emissive:new At(n.colorHex),emissiveIntensity:i===0?1.4:.6,roughness:.25,metalness:.8}),u=new de(c,h);u.rotation.x=Math.PI/2,u.position.y=s,this.funnelGroup.add(u);const d=new ys(a,o,l,32,1,!0),f=new Rr({color:new At(n.colorHex),emissive:new At(n.colorHex),emissiveIntensity:.18,transparent:!0,opacity:.14,roughness:.4,metalness:.2,side:Mn}),_=new de(d,f);_.position.y=s-l/2,this.funnelGroup.add(_);const g=new ys(a+.35,o+.35,l,16,1,!1),m=new In({visible:!1}),p=new de(g,m);p.position.y=s-l/2,p.userData={stageIndex:i},this.funnelGroup.add(p),this.interactiveMeshes.push(p),this.funnelRings.push({stageIndex:i,ringMesh:u,coneMesh:_,hitMesh:p,y:s,radius:a,colorHex:n.colorHex})})}buildOrbitingSectors(){bf.forEach((n,i)=>{const s=new Un,a=Math.cos(n.angle)*6.8,o=Math.sin(n.angle)*6.8,l=n.y;s.position.set(a,l,o);const c=new za(.38,0),h=new Rr({color:new At(n.colorHex),emissive:new At(n.colorHex),emissiveIntensity:.9,roughness:.2,metalness:.9}),u=new de(c,h);s.add(u);const d=new Ss(.55,.025,8,32),f=new In({color:new At(n.colorHex),transparent:!0,opacity:.45}),_=new de(d,f);_.rotation.x=Math.PI/2.3,s.add(_);const g=this.createSectorSprite(n);g.position.set(a,l+.65,o),this.sectorsGroup.add(g),this.sectorsGroup.add(s);const m=new U(a,l,o),p=n.angle,M=new U(Math.cos(p)*4.2,3.2,Math.sin(p)*4.2),S=new U((m.x+M.x)*.55,Math.max(m.y,M.y)+.8,(m.z+M.z)*.55),x=new Qp(m,S,M),A=x.getPoints(36),w=new Ce().setFromPoints(A),T=new xc({color:new At(n.colorHex),transparent:!0,opacity:.35}),C=new rd(w,T);this.sectorsGroup.add(C);for(let v=0;v<3;v++){const y=new Ms(.09,12,12),D=new In({color:new At(n.colorHex),blending:$i}),N=new de(y,D);this.sectorsGroup.add(N),this.photonPackets.push({mesh:N,curve:x,progress:v/3+i*.12,speed:.0045+Math.random()*.002})}})}buildDescendingDealOrbs(){const e=[new At(Jn[0].colorHex),new At(Jn[1].colorHex),new At(Jn[2].colorHex),new At(Jn[3].colorHex),new At(Jn[4].colorHex)];for(let n=0;n<22;n++){const i=new Ms(.13,16,16),s=e[n%5],a=new Rr({color:s,emissive:s,emissiveIntensity:.85,roughness:.2,metalness:.8}),o=new de(i,a);this.dealOrbsGroup.add(o),this.dealOrbs.push({mesh:o,progress:n/22+Math.random()*.05,angle:n/22*Math.PI*8,speed:.0018+Math.random()*.0012,radiusOffset:(Math.random()-.5)*.28,baseColor:s})}}buildShockwaveMesh(){const t=new ka(.5,.75,48),e=new In({color:1096065,transparent:!0,opacity:0,side:Mn});this.shockwaveMesh=new de(t,e),this.shockwaveMesh.rotation.x=-Math.PI/2,this.shockwaveMesh.position.y=-2,this.scene.add(this.shockwaveMesh)}setupInteractions(){const t=this.renderer.domElement;t.addEventListener("pointerdown",e=>{this.isPointerDown=!0,this.pointerDownPos.set(e.clientX,e.clientY)}),t.addEventListener("pointerup",e=>{if(!this.isPointerDown)return;this.isPointerDown=!1;const n=Math.abs(e.clientX-this.pointerDownPos.x),i=Math.abs(e.clientY-this.pointerDownPos.y);if(n>5||i>5)return;const s=t.getBoundingClientRect();this.mouse.x=(e.clientX-s.left)/s.width*2-1,this.mouse.y=-((e.clientY-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const a=this.raycaster.intersectObjects(this.interactiveMeshes,!1);if(a.length>0){const l=a[0].object.userData.stageIndex;typeof l=="number"&&(this.setHighlightedStage(l),$a(l),this.onStageSelect&&this.onStageSelect(l))}}),window.addEventListener("resize",()=>this.resize())}updateDealParams(t,e){this.activeStageIndex=Math.max(0,Math.min(4,t.activeStage));const n=e.winProbability/100;this.reactorSpinSpeed=.8+n*2.2,this.orbVelocityMultiplier=.8+(1-e.salesCycleDays/240)*1.5;const i=new At(Jn[this.activeStageIndex].colorHex);this.reactorInnerMesh.material.emissive.copy(i),this.reactorInnerMesh.material.color.copy(i),this.corePointLight.color.copy(i),this.corePointLight.intensity=2+n*2,this.setHighlightedStage(this.activeStageIndex)}setHighlightedStage(t){this.activeStageIndex=Math.max(0,Math.min(4,t)),this.funnelRings.forEach((e,n)=>{const i=n===this.activeStageIndex,s=i?1.6:.45,a=i?.32:.12,o=i?1.04:1;Ln.to(e.ringMesh.material,{emissiveIntensity:s,duration:.5,ease:"power2.out"}),Ln.to(e.coneMesh.material,{opacity:a,duration:.5,ease:"power2.out"}),Ln.to(e.ringMesh.scale,{x:o,y:o,z:o,duration:.4,ease:"back.out(1.5)"})})}setCameraPreset(t){const e={orbit:{pos:new U(11.8,7.2,13.2),target:new U(0,-.2,0)},ecosystem:{pos:new U(.1,16.5,8.5),target:new U(0,1.2,0)},funnel:{pos:new U(8.5,2.2,8.5),target:new U(0,.5,0)},radar:{pos:new U(.01,19.5,.1),target:new U(0,0,0)},core:{pos:new U(4.2,1.2,4.2),target:new U(0,.6,0)}},n=e[t]||e.orbit;Ln.killTweensOf(this.camera.position),Ln.killTweensOf(this.controls.target),Ln.to(this.camera.position,{x:n.pos.x,y:n.pos.y,z:n.pos.z,duration:1.3,ease:"power2.inOut"}),Ln.to(this.controls.target,{x:n.target.x,y:n.target.y,z:n.target.z,duration:1.3,ease:"power2.inOut",onUpdate:()=>this.controls.update()})}triggerContractClosedWave(){this.shockwaveMesh.scale.set(1,1,1),this.shockwaveMesh.material.opacity=.95,this.shockwaveMesh.material.color.setHex(1096065),Ln.to(this.shockwaveMesh.scale,{x:18,y:18,z:1,duration:1.6,ease:"power2.out"}),Ln.to(this.shockwaveMesh.material,{opacity:0,duration:1.6,ease:"power2.out"}),Ln.fromTo(this.reactorInnerMesh.scale,{x:1,y:1,z:1},{x:1.6,y:1.6,z:1.6,duration:.35,yoyo:!0,repeat:1,ease:"power2.out"});for(let t=0;t<28;t++){const e=new Ms(.09,8,8),n=new In({color:t%2===0?1096065:16096779,blending:$i}),i=new de(e,n);i.position.set(0,-2,0),this.scene.add(i);const s=Math.random()*Math.PI*2,a=.08+Math.random()*.12,o=.03+Math.random()*.08;this.burstParticles.push({mesh:i,velocity:new U(Math.cos(s)*a,o,Math.sin(s)*a),lifetime:1.4,age:0})}}setTheme(t){this.isLightMode=t;const e=t?16317180:396054,n=t?16317180:396054;this.scene.background=new At(e),this.scene.fog=new Na(n,.022),this.ambientLight.color.setHex(t?16777215:14412542),this.ambientLight.intensity=t?1:.7,this.scene.remove(this.gridHelper),this.gridHelper=new No(32,32,t?9741240:1981066,t?14870768:988970),this.gridHelper.position.y=-3.5,this.scene.add(this.gridHelper)}resize(){const t=this.container.clientWidth,e=this.container.clientHeight||1;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer&&this.composer.setSize(t,e)}dispose(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId),this.resizeObserver&&this.resizeObserver.disconnect(),window.removeEventListener("resize",()=>this.resize()),this.controls.dispose(),this.renderer.dispose(),this.renderer.domElement.parentElement&&this.renderer.domElement.parentElement.removeChild(this.renderer.domElement)}animate(){this.animationFrameId=requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=this.clock.getElapsedTime();if(this.reactorInnerMesh&&this.reactorCageMesh){this.reactorInnerMesh.rotation.y+=t*.9*this.reactorSpinSpeed,this.reactorInnerMesh.rotation.x+=t*.4*this.reactorSpinSpeed,this.reactorCageMesh.rotation.y-=t*.6*this.reactorSpinSpeed,this.reactorCageMesh.rotation.z+=t*.3*this.reactorSpinSpeed,this.energyRingMesh&&(this.energyRingMesh.rotation.z+=t*.45*this.reactorSpinSpeed);const a=1+Math.sin(e*3.5)*.04;this.reactorInnerMesh.scale.set(a,a,a)}this.sectorsGroup.children.forEach((a,o)=>{a instanceof Un&&(a.rotation.y=e*.3+o)}),this.photonPackets.forEach(a=>{a.progress+=a.speed*this.reactorSpinSpeed,a.progress>=1&&(a.progress=0);const o=a.curve.getPointAt(a.progress);a.mesh.position.copy(o);const l=.08+Math.sin(a.progress*Math.PI)*.06;a.mesh.scale.set(l,l,l)});const n=3.2,s=n- -2;this.dealOrbs.forEach(a=>{a.progress+=a.speed*this.orbVelocityMultiplier,a.angle+=.02*this.orbVelocityMultiplier,a.progress>=1&&(a.progress=0,a.angle=Math.random()*Math.PI*2);const o=n-a.progress*s,l=4.2-a.progress*2.8+a.radiusOffset,c=Math.cos(a.angle)*l,h=Math.sin(a.angle)*l;a.mesh.position.set(c,o,h)});for(let a=this.burstParticles.length-1;a>=0;a--){const o=this.burstParticles[a];if(o.age+=t,o.age>=o.lifetime)this.scene.remove(o.mesh),o.mesh.geometry.dispose(),this.burstParticles.splice(a,1);else{o.mesh.position.addScaledVector(o.velocity,t*60),o.velocity.y-=t*.15;const l=1-o.age/o.lifetime;o.mesh.scale.set(l,l,l)}}this.starsParticles&&(this.starsParticles.rotation.y=e*.015),this.controls.update(),this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}}function Se(r,t){if(r>=1e6){const e=(r/1e6).toFixed(2);return t==="ar"?`${e} مليون ر.س`:`${e}M SAR`}if(r>=1e3){const e=(r/1e3).toFixed(0);return t==="ar"?`${e} ألف ر.س`:`${e}K SAR`}return t==="ar"?`${r.toLocaleString("ar-SA")} ر.س`:`${r.toLocaleString("en-US")} SAR`}function Uy(r,t,e,n){const i=r.getContext("2d");if(!i)return;const s=window.devicePixelRatio||1,a=r.getBoundingClientRect(),o=a.width>0?a.width:r.parentElement?.clientWidth||440,l=a.height>0?a.height:360;(r.width!==Math.round(o*s)||r.height!==Math.round(l*s))&&(r.width=Math.round(o*s),r.height=Math.round(l*s)),i.save(),i.scale(s,s),i.clearRect(0,0,o,l);const c=o/2,h=l/2+8,u=Math.min(o,l)*.36,d=t.meddicAxes&&t.meddicAxes.length===6?t.meddicAxes.map(v=>({key:v.key,label:n==="ar"?v.labelAr:v.labelEn,score:v.score})):[{key:"M",label:n==="ar"?"المقاييس (M)":"Metrics (M)",score:85},{key:"E",label:n==="ar"?"المشتري المالي (E)":"Econ Buyer (E)",score:80},{key:"D1",label:n==="ar"?"معايير القرار (D1)":"Decision Crit (D1)",score:88},{key:"D2",label:n==="ar"?"مسار القرار (D2)":"Decision Proc (D2)",score:75},{key:"I",label:n==="ar"?"الألم المؤسسي (I)":"Identify Pain (I)",score:92},{key:"C",label:n==="ar"?"البطل الداخلي (C)":"Champion (C)",score:82}],f=d.length,_=Math.PI*2/f,g=-Math.PI/2,m=e?"rgba(15, 23, 42, 0.12)":"rgba(255, 255, 255, 0.12)",p=e?"#64748b":"#94a3b8",M=e?"#0f172a":"#f8fafc",S="#10b981",x="#06b6d4",A=[.2,.4,.6,.8,1];i.lineWidth=1,A.forEach(v=>{i.beginPath();for(let y=0;y<f;y++){const D=g+y*_,N=c+Math.cos(D)*(u*v),F=h+Math.sin(D)*(u*v);y===0?i.moveTo(N,F):i.lineTo(N,F)}i.closePath(),i.strokeStyle=m,i.stroke(),i.fillStyle=p,i.font='9px "JetBrains Mono", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText(`${Math.round(v*100)}%`,c,h-u*v-2)});for(let v=0;v<f;v++){const y=g+v*_,D=c+Math.cos(y)*u,N=h+Math.sin(y)*u;i.beginPath(),i.moveTo(c,h),i.lineTo(D,N),i.strokeStyle=m,i.stroke()}const w=[];i.beginPath();for(let v=0;v<f;v++){const y=g+v*_,D=d[v].score,N=Math.max(.12,Math.min(1,D/100)),F=u*N,V=c+Math.cos(y)*F,G=h+Math.sin(y)*F;w.push({x:V,y:G,score:D}),v===0?i.moveTo(V,G):i.lineTo(V,G)}i.closePath();const T=i.createRadialGradient(c,h,10,c,h,u);T.addColorStop(0,"rgba(16, 185, 129, 0.45)"),T.addColorStop(.65,"rgba(6, 182, 212, 0.3)"),T.addColorStop(1,"rgba(16, 185, 129, 0.12)"),i.fillStyle=T,i.fill(),i.lineWidth=2.5,i.strokeStyle=S,i.shadowColor="rgba(16, 185, 129, 0.65)",i.shadowBlur=12,i.stroke(),i.shadowBlur=0,w.forEach(v=>{i.beginPath(),i.arc(v.x,v.y,4.5,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=2,i.strokeStyle=x,i.stroke()});for(let v=0;v<f;v++){const y=g+v*_,D=u+34,N=c+Math.cos(y)*D,F=h+Math.sin(y)*D;i.fillStyle=M,i.font="bold 11px Cairo, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(`${d[v].label} (${d[v].score}%)`,N,F)}const C=Math.round(d.reduce((v,y)=>v+y.score,0)/d.length);i.beginPath(),i.arc(c,h,26,0,Math.PI*2),i.fillStyle=e?"rgba(255, 255, 255, 0.94)":"rgba(6, 11, 22, 0.94)",i.fill(),i.lineWidth=1.5,i.strokeStyle=C>=75?S:"#f59e0b",i.stroke(),i.fillStyle=C>=75?e?"#065f46":"#34d399":"#f59e0b",i.font='bold 13px "JetBrains Mono", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText(`${C}%`,c,h-3),i.fillStyle=p,i.font="8px Cairo, sans-serif",i.fillText(n==="ar"?"جاهزية MEDDIC":"Readiness",c,h+11),i.restore()}function Ny(r,t,e,n,i,s){const a=r.getContext("2d");if(!a)return;const o=window.devicePixelRatio||1,l=r.getBoundingClientRect(),c=l.width>0?l.width:r.parentElement?.clientWidth||550,h=l.height>0?l.height:360;(r.width!==Math.round(c*o)||r.height!==Math.round(h*o))&&(r.width=Math.round(c*o),r.height=Math.round(h*o)),a.save(),a.scale(o,o),a.clearRect(0,0,c,h);const u=60,d=30,f=35,_=50,g=c-u-d,m=h-f-_,p=30,M=180,S=I=>u+(Math.min(M,Math.max(p,I))-p)/(M-p)*g,x=I=>f+m-Math.min(100,Math.max(0,I))/100*m,A=105,w=50,T=S(A),C=x(w);a.fillStyle=i?"rgba(16, 185, 129, 0.08)":"rgba(16, 185, 129, 0.06)",a.fillRect(u,f,T-u,C-f),a.fillStyle=i?"rgba(6, 182, 212, 0.08)":"rgba(6, 182, 212, 0.06)",a.fillRect(T,f,c-d-T,C-f),a.fillStyle=i?"rgba(245, 158, 11, 0.07)":"rgba(245, 158, 11, 0.04)",a.fillRect(u,C,T-u,h-_-C),a.fillStyle=i?"rgba(239, 68, 68, 0.07)":"rgba(239, 68, 68, 0.04)",a.fillRect(T,C,c-d-T,h-_-C),a.strokeStyle=i?"rgba(15, 23, 42, 0.18)":"rgba(255, 255, 255, 0.16)",a.setLineDash([4,4]),a.lineWidth=1.2,a.beginPath(),a.moveTo(T,f),a.lineTo(T,h-_),a.stroke(),a.beginPath(),a.moveTo(u,C),a.lineTo(c-d,C),a.stroke(),a.setLineDash([]),a.font="bold 11px Cairo, sans-serif",a.fillStyle=i?"rgba(15, 23, 42, 0.45)":"rgba(255, 255, 255, 0.35)",a.textAlign="left",a.fillText(s==="ar"?"⚡ صفقات سريعة عالية العائد":"⚡ Fast Strategic Wins",u+12,f+16),a.textAlign="right",a.fillText(s==="ar"?"🐋 صفقات كبرى استراتيجية":"🐋 Enterprise Whales",c-d-12,f+16),a.textAlign="left",a.fillText(s==="ar"?"🌱 فرص تنمية ونمو تكتيكي":"🌱 Tactical Nurture",u+12,h-_-10),a.textAlign="right",a.fillText(s==="ar"?"⚠️ فرص تتطلب إعادة هيكلة":"⚠️ Re-qualify Needed",c-d-12,h-_-10),a.strokeStyle=i?"#cbd5e1":"#334155",a.lineWidth=1.5,a.beginPath(),a.moveTo(u,h-_),a.lineTo(c-d,h-_),a.moveTo(u,f),a.lineTo(u,h-_),a.stroke(),a.font='10px "JetBrains Mono", monospace',a.fillStyle=i?"#64748b":"#94a3b8",[0,25,50,75,100].forEach(I=>{const P=x(I);a.textAlign="right",a.textBaseline="middle",a.fillText(`${I}%`,u-8,P),a.beginPath(),a.moveTo(u,P),a.lineTo(c-d,P),a.strokeStyle=i?"rgba(0,0,0,0.04)":"rgba(255,255,255,0.04)",a.stroke()}),[30,60,90,120,150,180].forEach(I=>{const P=S(I);a.textAlign="center",a.textBaseline="top",a.fillText(`${I}d`,P,h-_+6)}),a.font="bold 11px Cairo, sans-serif",a.fillStyle=i?"#1e293b":"#e2e8f0",a.textAlign="center",a.fillText(s==="ar"?"دورة المبيعات المتوقعة بالأيام (Sales Cycle Days)":"Expected Sales Cycle (Days)",u+g/2,h-14),a.save(),a.translate(16,f+m/2),a.rotate(-Math.PI/2),a.textAlign="center",a.fillText(s==="ar"?"احتمالية الإغلاق (Win Prob %)":"Win Probability (%)",0,0),a.restore(),(t||[]).forEach((I,P)=>{const et=S(I.cycleDays),lt=x(I.winProb),k=Math.max(7,Math.min(18,Math.sqrt(I.acv/1e3)*.4)),$=I.color||"#06b6d4";a.beginPath(),a.arc(et,lt,k,0,Math.PI*2),a.fillStyle=`${$}cc`,a.fill(),a.lineWidth=1.5,a.strokeStyle=$,a.stroke();const Z=(s==="ar"?I.accountAr:I.accountEn).split(" - ")[0].trim(),at=P%2===0,bt=at?-k-12:k+14;a.font="bold 10px Cairo, sans-serif";const ct=a.measureText(Z).width+8,Dt=16,It=Math.min(c-d-ct/2,Math.max(u+ct/2,et))-ct/2,wt=lt+bt-(at?Dt:0);a.fillStyle=i?"rgba(255, 255, 255, 0.92)":"rgba(15, 23, 42, 0.90)",a.strokeStyle=$,a.lineWidth=1,a.beginPath(),a.roundRect(It,wt,ct,Dt,4),a.fill(),a.stroke(),a.fillStyle=i?"#0f172a":"#f8fafc",a.textAlign="center",a.textBaseline="middle",a.fillText(Z,It+ct/2,wt+Dt/2)});const v=S(n.salesCycleDays),y=x(n.winProbability),D=Math.max(10,Math.min(26,Math.sqrt(e.acv/1e3)*.46));a.beginPath(),a.arc(v,y,D+8,0,Math.PI*2),a.fillStyle="rgba(245, 158, 11, 0.2)",a.fill(),a.lineWidth=2,a.strokeStyle="#f59e0b",a.setLineDash([3,3]),a.stroke(),a.setLineDash([]),a.beginPath(),a.arc(v,y,D,0,Math.PI*2);const N=a.createRadialGradient(v,y,2,v,y,D);N.addColorStop(0,"#fde047"),N.addColorStop(.7,"#f59e0b"),N.addColorStop(1,"#d97706"),a.fillStyle=N,a.shadowColor="rgba(245, 158, 11, 0.8)",a.shadowBlur=15,a.fill(),a.shadowBlur=0,a.lineWidth=2.5,a.strokeStyle="#ffffff",a.stroke(),a.fillStyle="#060b16",a.font="bold 12px sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillText("★",v,y);const G=`⭐ ${(Qi[e.sector]?s==="ar"?Qi[e.sector].clientAr:Qi[e.sector].clientEn:s==="ar"?"الصفقة الحالية قيد التفاوض":"Active Simulated Deal").split(" - ")[0]} (${Se(e.acv,s)})`;a.font="bold 11px Cairo, sans-serif";const X=a.measureText(G).width+16,j=22,W=Math.min(c-d-X,Math.max(u,v-X/2)),ot=y-D-j-6;a.fillStyle="#0f172a",a.strokeStyle="#f59e0b",a.lineWidth=1.5,a.beginPath(),a.roundRect(W,ot,X,j,6),a.fill(),a.stroke(),a.fillStyle="#fde047",a.textAlign="center",a.textBaseline="middle",a.fillText(G,W+X/2,ot+j/2),a.restore()}function pf(r,t,e,n){const i=r.getContext("2d");if(!i)return;const s=window.devicePixelRatio||1,a=r.getBoundingClientRect(),o=a.width>0?a.width:r.parentElement?.clientWidth||550,l=a.height>0?a.height:360;(r.width!==Math.round(o*s)||r.height!==Math.round(l*s))&&(r.width=Math.round(o*s),r.height=Math.round(l*s)),i.save(),i.scale(s,s),i.clearRect(0,0,o,l);const c=75,h=35,u=45,d=45,f=o-c-h,_=l-u-d,g=["M1","M2","M3","M4","M5","M6","M7","M8","M9","M10","M11","M12"],m=t.baselineMonthlyArr||[],p=t.strategicMonthlyArr||[],M=Math.max(1e6,...m,...p,t.strategicArr||0)*1.15,S=N=>c+N/(g.length-1)*f,x=N=>u+_-N/M*_,A=5;i.font='10px "JetBrains Mono", monospace',i.fillStyle=e?"#64748b":"#94a3b8",i.textAlign="right",i.textBaseline="middle";for(let N=0;N<=A;N++){const F=M/A*N,V=x(F);i.beginPath(),i.moveTo(c,V),i.lineTo(o-h,V),i.strokeStyle=e?"rgba(0,0,0,0.06)":"rgba(255,255,255,0.06)",i.lineWidth=1,i.stroke(),i.fillText(Se(F,n),c-8,V)}if(g.forEach((N,F)=>{const V=S(F);i.textAlign="center",i.textBaseline="top",i.font='10px "JetBrains Mono", monospace',i.fillStyle=e?"#64748b":"#94a3b8",i.fillText(N,V,l-d+8)}),p.length>0){i.beginPath(),i.moveTo(S(0),x(0)),p.forEach((F,V)=>{i.lineTo(S(V),x(F))}),i.lineTo(S(p.length-1),x(0)),i.closePath();const N=i.createLinearGradient(0,u,0,l-d);N.addColorStop(0,"rgba(16, 185, 129, 0.35)"),N.addColorStop(.7,"rgba(16, 185, 129, 0.1)"),N.addColorStop(1,"rgba(16, 185, 129, 0.0)"),i.fillStyle=N,i.fill()}m.length>0&&(i.beginPath(),m.forEach((N,F)=>{const V=S(F),G=x(N);F===0?i.moveTo(V,G):i.lineTo(V,G)}),i.strokeStyle="#38bdf8",i.lineWidth=2,i.setLineDash([5,4]),i.stroke(),i.setLineDash([]),m.forEach((N,F)=>{(F%2===0||F===m.length-1)&&(i.beginPath(),i.arc(S(F),x(N),3,0,Math.PI*2),i.fillStyle="#38bdf8",i.fill())})),p.length>0&&(i.beginPath(),p.forEach((N,F)=>{const V=S(F),G=x(N);F===0?i.moveTo(V,G):i.lineTo(V,G)}),i.strokeStyle="#10b981",i.lineWidth=3,i.shadowColor="rgba(16, 185, 129, 0.5)",i.shadowBlur=10,i.stroke(),i.shadowBlur=0,p.forEach((N,F)=>{const V=S(F),G=x(N);if(i.beginPath(),i.arc(V,G,4.5,0,Math.PI*2),i.fillStyle="#ffffff",i.fill(),i.lineWidth=2,i.strokeStyle="#10b981",i.stroke(),F===2||F===5||F===8||F===p.length-1){const X=Se(N,n);i.font='bold 9px "JetBrains Mono", monospace';const j=i.measureText(X).width+8,W=16,ot=V-j/2,I=G-W-6;i.fillStyle=e?"#065f46":"#064e3b",i.beginPath(),i.roundRect(ot,I,j,W,4),i.fill(),i.fillStyle="#a7f3d0",i.textAlign="center",i.textBaseline="middle",i.fillText(X,V,I+W/2)}}));const w=18;i.beginPath(),i.arc(c+10,w,5,0,Math.PI*2),i.fillStyle="#10b981",i.fill(),i.font="bold 11px Cairo, sans-serif",i.fillStyle=e?"#065f46":"#34d399",i.textAlign="left";const T=n==="ar"?"مسار نَمَاء لتطوير الأعمال (NAMA Strategic Acceleration)":"NAMA Strategic Acceleration";i.fillText(T,c+22,w);const C=i.measureText(T).width,v=c+22+C+24;i.beginPath(),i.strokeStyle="#38bdf8",i.lineWidth=2,i.setLineDash([4,3]),i.moveTo(v,w),i.lineTo(v+16,w),i.stroke(),i.setLineDash([]),i.fillStyle=e?"#0284c7":"#38bdf8",i.textAlign="left";const y=n==="ar"?"المسار العضوي الأساسي (Baseline)":"Organic Baseline";i.fillText(y,v+22,w);const D=(t.strategicArr||0)-(t.projectedArr||0);if(D>0){const N=`+${Se(D,n)} ${n==="ar"?"تسارع استراتيجي":"Strategic Lift"}`;i.font='bold 10px "JetBrains Mono", monospace';const F=i.measureText(N).width+12,V=o-h-F,G=w-8;i.fillStyle="rgba(245, 158, 11, 0.15)",i.strokeStyle="#f59e0b",i.lineWidth=1,i.beginPath(),i.roundRect(V,G,F,18,4),i.fill(),i.stroke(),i.fillStyle="#f59e0b",i.textAlign="center",i.textBaseline="middle",i.fillText(N,V+F/2,G+9)}i.restore()}const Fy=[{id:"lead_gen",number:1,titleAr:"استقطاب العملاء وبناء شبكة العلاقات المؤسسية",titleEn:"B2B Lead Generation & Enterprise Outreach",icon:"fa-solid fa-users-viewfinder",badgeAr:"الركيزة الأولى: توليد الفرص",summaryAr:"تطوير الأعمال في قطاع B2B لا يعتمد على الحملات الإعلانية العشوائية، بل يقوم على منهجية التسويق المعتمد على الحسابات (Account-Based Marketing - ABM) واستهداف صناع القرار بدقة.",coreConceptsAr:[{title:"الفرق الجوهري بين B2B و B2C",desc:"في B2C القرار فردي وعاطفي وسريع. أما في B2B فالقرار مؤسسي، يشترك فيه 6 إلى 10 مسؤولين، وتمر دورة الشراء بعدة لجان وميزانيات معتمدة."},{title:"تحديد الملف التعريفي للعميل المثالي (ICP)",desc:"تحديد حجم المنظمة المستهدفة، إيراداتها السنوية، البنية التقنية المستخدمة، وحجم التحديات التي يمكن لحلولنا معالجتها بفاعلية."},{title:"خريطة أصحاب المصلحة (Stakeholder Mapping)",desc:"بناء علاقات متوازية مع: المشتري الاقتصادي (CFO/CEO)، المستخدم الفني (CIO/CTO)، والبطل الداخلي (Champion) الذي يدعم المشروع من الداخل."}],strategicTipAr:'نصيحة أخصائي تطوير الأعمال: لا تبدأ بالتحدث عن ميزات منتجك الفنية؛ ابدأ دائماً بـ "الألم المؤسسي" للعميل والتكلفة المالية لعدم حل هذا التحدي.'},{id:"meddic",number:2,titleAr:"تأهيل الصفقات الكبرى بإطار MEDDIC المتطور",titleEn:"Enterprise Deal Qualification via MEDDIC",icon:"fa-solid fa-crosshairs",badgeAr:"الركيزة الثانية: حوكمة التأهيل",summaryAr:"إطار MEDDIC هو المعيار العالمي المعتمد في كبرى شركات التقنية لتقييم جاهزية الصفقات، وحماية أخصائي تطوير الأعمال من إهدار الوقت في فرص وهمية لن تُغلق.",coreConceptsAr:[{title:"M - Metrics (المقاييس الكمية)",desc:"الأثر الاقتصادي الملموس بالأرقام: توفير 25% من التكاليف التشغيلية أو زيادة المبيعات بمقدار 4 ملايين ريال."},{title:"E - Economic Buyer (المشتري الاقتصادي)",desc:"الشخص الوحيد داخل المنشأة الذي يملك الصلاحية المالية للتوقيع وتحريك الميزانية (عادة الرئيس التنفيذي أو المدير المالي)."},{title:"D - Decision Criteria & Process (معايير ومسار القرار)",desc:"المعايير الفنية والتجارية والقانونية التي ستقارن بها شركتنا، بالإضافة للمراحل واللجان التي يجب أن تمر بها الصفقة حتى التوقيع."},{title:"I - Identify Pain (تحديد الألم المؤسسي)",desc:"المشكلة الحرجة التي تُعيق نمو العميل أو تُكبده خسائر مادية فادحة إذا لم تُحل خلال الربع المالي الحالي."},{title:"C - Champion (البطل الداخلي)",desc:"مسؤول نافذ داخل شركة العميل يملك مصلحة مباشرة في نجاح حلك، ولديه القدرة والتأثير على إقناع لجنة القرار."}],strategicTipAr:"قاعدة ذهبية: إذا لم تجتمع مع المشتري الاقتصادي (Economic Buyer) ولم تحدد بطلك الداخلي (Champion)، فإن احتمالية إغلاق الصفقة لا تتجاوز 20% مهما كان إعجاب الفريق الفني بحلك."},{id:"proposal_levers",number:3,titleAr:"هندسة العروض التجارية واستراتيجيات التفاوض الرابح",titleEn:"Commercial Proposal Structuring & Win-Win Negotiation",icon:"fa-solid fa-handshake-angle",badgeAr:"الركيزة الثالثة: حماية الهامش الربحي",summaryAr:"التفاوض الاحترافي في B2B ليس مساومة على السعر، بل هو تبادل للقيمة. عندما يطلب العميل خفض السعر، يُقابله أخصائي تطوير الأعمال بطلب قيمة مقابلة (مثل زيادة مدة العقد أو تقديم دراسة حالة تسويقية).",coreConceptsAr:[{title:"قيمة التعاقد السنوي (ACV) وإجمالي العقد (TCV)",desc:"الـ ACV يمثل الإيراد المتكرر لكل سنة، بينما TCV يمثل إجمالي التدفق النقدي على مدار كامل مدة العقد (مثلاً 3 سنوات)."},{title:"رافعة ضمان العائد الاستثماري (ROI Guarantee)",desc:"بند يربط جزءاً من التكلفة بتحقيق أهداف تشغيلية ملموسة، مما يزيل مخاطر الشراء لدى العميل ويزيد احتمالية التوقيع فوراً."},{title:"رافعة مستوى الخدمة الصارم (99.99% SLA)",desc:"تقديم التزامات موثوقية عالية جداً تبرر التسعير المرتفع وتمنع العميل من مقارنتك بالحلول الرخيصة غير المستقرة."},{title:"رافعة إثبات المفهوم المدفوع (Paid PoC)",desc:"تجربة محدودة مدفوعة التكاليف تثبت الجدارة الفنية وتمنع العميل من استهلاك وقت فريقك الهندسي مجاناً."}],formulaAr:{name:"معادلة إجمالي قيمة التعاقد (TCV)",formula:"TCV = (ACV × Years) - Total Discount",example:"عقد بـ 1.25 مليون ريال سنوياً لمدة 3 سنوات مع خصم 10% = (3.75 مليون) - 375,000 = 3,375,000 ر.س"},strategicTipAr:"احذر من حرق الأسعار: الخصم السعري العشوائي يخفض صافي هامش الربح (Net Margin) بنسبة مضاعفة ويقلل من مكانة منتجك في نظر صناع القرار."},{id:"pipeline_closedwon",number:4,titleAr:"إدارة مسار الصفقات حتى التوقيع النهائي (Closed-Won)",titleEn:"Full-Cycle Deal Pipeline Management",icon:"fa-solid fa-diagram-project",badgeAr:"الركيزة الرابعة: قيادة التنفيذ",summaryAr:"متابعة مسار الصفقة عبر قمع المبيعات يتطلب تنسيقاً محكماً بين الإدارات: الفريق الفني، القانوني، المالي، وفريق نجاح العملاء، لإزالة أي عائق يظهر قبل توقيع العقد.",coreConceptsAr:[{title:"مراحل قمع المبيعات الخمس (5-Stage Pipeline)",desc:"1. التنقيب والاستقطاب -> 2. تأهيل MEDDIC -> 3. العرض الفني والـ PoC -> 4. التفاوض وشروط SLA -> 5. إتمام التعاقد (Closed-Won)."},{title:"سرعة دورة المبيعات (Sales Cycle Velocity)",desc:"الوقت المستغرق من لحظة التواصل الأول حتى التوقيع. كلما قلت دورة المبيعات بفضل الروافع، انخفضت تكلفة الاستقطاب (CAC)."},{title:"التعامل مع شروط المشتريات والاعتماد",desc:"معرفة منصات الشراء الحكومية والخاصة (مثل منصة اعتماد، أنظمة المشتريات Ariba/SAP) ومتطلبات الفوترة وضريبة القيمة المضافة."}],strategicTipAr:'التفاوض الحقيقي يبدأ بعد كلمة "نعم" المبدئية: 40% من الصفقات تتعثر في مرحلة المراجعة القانونية والشروط التعاقدية إذا لم يتدخل أخصائي تطوير الأعمال لتسهيل الصياغة.'},{id:"arr_ltv_economics",number:5,titleAr:"اقتصاديات النمو وحسابات الإيرادات المتكررة والعائد",titleEn:"Unit Economics, ARR & LTV:CAC Growth",icon:"fa-solid fa-chart-line",badgeAr:"الركيزة الخامسة: ذكاء الإيرادات",summaryAr:"المعيار الأسمى لنجاح شركات التقنية والاشتراكات B2B هو اقتصاديات الوحدة (Unit Economics). استقطاب العملاء يجب أن يولد قيمة مضاعفة تفوق تكلفة الاستقطاب بكثير.",coreConceptsAr:[{title:"ARR (الإيراد السنوي المتكرر)",desc:"القيمة السنوية المستقرة الناتجة عن اشتراكات وعقود العملاء، وتعتبر المؤشر الرئيسي لتقييم الشركات التقنية."},{title:"نسبة LTV:CAC (القيمة الدائمة إلى تكلفة الاستقطاب)",desc:"تقارن إجمالي ما يدفعه العميل طوال فترة بقائه بتكلفة استقطابه. النسبة الصحية في B2B تتراوح بين 3x إلى 5x."},{title:"فترة استرداد تكلفة الاستقطاب (CAC Payback Months)",desc:"كم شهراً تحتاج المنشأة لاسترداد ما أنفقته في استقطاب العميل. الرقم المثالي أقل من 12 إلى 14 شهراً."},{title:"صافي الاحتفاظ بالإيرادات (NRR)",desc:"يقيس نمو إيرادات نفس العملاء الحاليين سنوياً عبر التوسع والترقية (Upsell). أي نسبة فوق 110% تعني نمواً ذاتياً متسارعاً."}],formulaAr:{name:"معادلة القيمة الدائمة للعميل (LTV)",formula:"LTV = (ACV × Gross Margin %) ÷ Churn Rate %",example:"عقد 1.25M بهامش 75% ونسبة تسرب 10% = (1,250,000 × 0.75) ÷ 0.10 = 9,375,000 ر.س"},strategicTipAr:"النمو الحقيقي ليس فقط في جلب عملاء جدد، بل في حماية العملاء الحاليين ورفع نسبة التوسع (Expansion ARR) لتقليل تكلفة الاستقطاب المستمرة."}],Gc=[{id:"case_fintech",titleAr:"حالة مصرف الإنماء: معضلة المشتري الاقتصادي والمدفوعات الفورية",sectorAr:"التقنية المالية (FinTech)",clientAr:"مصرف الإنماء والمدفوعات الفورية",icon:"fa-solid fa-building-columns",scenarioAr:"قدمت عرضاً لتطبيق منظومة متقدمة للمدفوعات الفورية والتسوية الذكية بقيمة تعاقد سنوي (ACV) تبلغ 1,250,000 ريال لمدة 3 سنوات. رئيس قطاع التقنية (CTO) معجب بالحل ويعتبر بطلك الداخلي (Champion)، لكن المدير المالي (CFO - المشتري الاقتصادي) متردد بسبب التكلفة المبدئية ومخاوف انقطاع الخدمة.",challengeAr:"طلب المدير المالي خصماً فورياً 35% أو تأجيل المشروع للعام القادم. كيف تتصرف كأخصائي تطوير أعمال محترف؟",options:[{id:"opt_1",textAr:"الموافقة الفورية على خصم 35% لإغلاق الصفقة في أسرع وقت وتفادي التأجيل.",isCorrect:!1,explanationAr:"قرار خاطئ: الموافقة الفورية على خصم 35% تدمر صافي هامش الربح، وتُرسل إشارة للمدير المالي بأن سعرك الأصلي كان غير مبرر ومبالغاً فيه.",impactAr:"انخفاض الهامش الربحي بأكثر من 40%، وتزعزع الثقة في القيمة المؤسسية للحل."},{id:"opt_2",textAr:'تفعيل رافعة "ضمان العائد الاستثماري (ROI Guarantee)" مع "إثبات المفهوم المدفوع (PoC)" لحساب وفر مالي ملموس مع تثبيت الخصم عند 10%.',isCorrect:!0,explanationAr:"قرار استراتيجي متميز: استجبت لمخاوف المدير المالي من خلال إزالة المخاطر المالية وربط التكلفة بالأثر الاقتصادي، وحافظت على إجمالي التعاقد (3.375M) وهامش ربحي قوي.",impactAr:"ارتفاع احتمالية الإغلاق إلى 88%، تسريع دورة القرار بـ 35 يوماً، وحماية الهامش الربحي."},{id:"opt_3",textAr:"إلغاء بنود الصيانة ومستوى الخدمة SLA لتخفيض التكلفة إلى السعر الذي يريده المدير المالي.",isCorrect:!1,explanationAr:"قرار خطير: في القطاع البنكي والمدفوعات الفورية، التنازل عن معايير الخدمة يعرض البنك لمخاطر تشغيلية وغرامات تنظيمية يرفضها البنك المركزي قطوعاً.",impactAr:"فشل المشروع أثناء المراجعة الفنية والقانونية من قِبل لجان الحوكمة والمخاطر."}]},{id:"case_govtech",titleAr:"حالة أمانة منطقة الرياض: تسريع دورة مبيعات المدن الذكية الطويلة",sectorAr:"القطاع الحكومي والمدن الذكية (GovTech)",clientAr:"أمانة منطقة الرياض - منصة التوأمة الرقمية",icon:"fa-solid fa-landmark",scenarioAr:"صفقة استراتيجية بقيمة 2.80 مليون ريال سنوياً لتشغيل منصة توأمة رقمية للمدن الذكية. تجاوزت دورة المبيعات 140 يوماً بسبب تعدد لجان المراجعة وتشتت متطلبات اللجان الفنية والقانونية.",challengeAr:"كيف تقود الصفقة لتجاوز البيروقراطية وتسريع دورة المبيعات قبل إغلاق السنة المالية؟",options:[{id:"opt_1",textAr:"تقليص نطاق العمل إلى مشروع صغير لمدة 6 أشهر دون أي أرباح مستقبلية مضمونة.",isCorrect:!1,explanationAr:"حل ضعيف: تقليص النطاق دون خطة توسع يقلل من القيمة الدائمة للعميل (LTV) ويجعله مشروعاً مؤقتاً لا يحقق عوائد مستدامة.",impactAr:"خسارة فرصة العقد المؤسسي المليوني وتحوله لمجرد دراسة استشارية عابرة."},{id:"opt_2",textAr:"تأهيل البطل الداخلي (Champion Enablement) وصياغة مصفوفة معايير القرار (Decision Criteria) المتوافقة مع مؤشرات رؤية 2030 ومنصة اعتماد.",isCorrect:!0,explanationAr:"إجراء قيادي احترافي: تمكين البطل الداخلي وتزويده ببيانات الجدوى ومطابقة أهداف المشروع مع مؤشرات الأمانة الوطنية يمنحه الأدوات اللازمة للدفاع عن المشروع أمام اللجان المالية.",impactAr:"اعتماد الميزانية عبر منصة اعتماد وتسريع توقيع العقد بـ 45 يوماً."},{id:"opt_3",textAr:"الانتظار حتى انتهاء دورة اللجان الروتينية دون أي تواصل أو تدخل استباقي.",isCorrect:!1,explanationAr:"نهج سلبي: الصفقات الحكومية غير المتابعة تتلاشى أو تُلغى مخصصاتها المالية لنهاية السنة المالية إذا لم يتم دفعها للأمام.",impactAr:"تأجيل المشروع لأجل غير مسمى أو تحويل ميزانيته لمشاريع حكومية أخرى."}]},{id:"case_cloud_ai",titleAr:"حالة أرامكو والسحابة الوطنية: التفاوض على الموثوقية والحوكمة السيادية",sectorAr:"السحابة والذكاء الاصطناعي (Cloud & AI)",clientAr:"أرامكو السعودية - البنية التحتية السحابية والذكاء الاصطناعي",icon:"fa-solid fa-server",scenarioAr:"أكبر فرصة في محفظة صفقاتك بقيمة 4.50 مليون ريال سنوياً. العميل لا يبحث عن السعر الأرخص نهائياً، بل يركز 100% على الأمن السيبراني السيادي، موثوقية تشغيلية 99.99%، والتكامل مع الذكاء الاصطناعي التوليدي الداخلي.",challengeAr:"المنافس الأجنبي قدم عرضاً بتقنية معروفة عالمياً ولكن بخوادم خارج المملكة. كيف تثبت وتغلق الصفقة لصالح حلك الوطني؟",options:[{id:"opt_1",textAr:"تفعيل رافعة التحالف الاستراتيجي والشراكة المحلية (Strategic Alliance) مع التزام صارم بـ 99.99% SLA واستضافة البيانات بنسبة 100% داخل المملكة.",isCorrect:!0,explanationAr:"استراتيجية فوز حاسمة: الامتثال لضوابط الأمن السيبراني الوطنية (NCA) وتوطين البيانات مع ضمان مستوى الخدمة يغلق الباب تماماً أمام المنافس الأجنبي ويجعل حلك هو الخيار السيادي الوحيد.",impactAr:"إغلاق الصفقة بقيمتها الكاملة (TCV تتجاوز 15 مليون ريال على 5 سنوات)."},{id:"opt_2",textAr:"الدخول في حرب أسعار وتقديم خصم 50% للتغلب على شهرة المنافس الأجنبي.",isCorrect:!1,explanationAr:"خطأ استراتيجي فادح: أرامكو والشركات الكبرى تشك في جودة وأمان أي حل يخفض سعره بشكل مفرط، لأن معايير الموثوقية والأمن هي الأساس.",impactAr:"استبعاد العرض فوراً لعدم استيفاء اشتراطات الملاءة الفنية والموثوقية المؤسسية."},{id:"opt_3",textAr:"اقتراح استضافة جزء من البيانات في الخارج لتوفير التكاليف.",isCorrect:!1,explanationAr:"مخالفة صريحة للأنظمة: استضافة البيانات الحساسة للقطاعات الاستراتيجية خارج المملكة مخالفة لسياسات تصنيف وحوكمة البيانات الوطنية.",impactAr:"الرفض القطعي من قِبل قطاع الأمن السيبراني وإلغاء التعامل مع الشركة."}]},{id:"case_retail",titleAr:"حالة قطاع التجزئة وسلاسل الإمداد: معادلة الاسترداد السريع ونقاط البيع",sectorAr:"التجزئة وسلاسل الإمداد (Retail & Supply Chain)",clientAr:"مجموعة الفطيم للتجزئة وشبكات التوزيع",icon:"fa-solid fa-cart-shopping",scenarioAr:"مجموعة كبرى تضم أكثر من 200 فرع ترغب في أتمتة إدارة المخزون اللحظي عبر إنترنت الأشياء بقيمة تعاقد سنوي 980,000 ريال. مدراء العمليات يشتكون من ضيق هوامش الربح في قطاع التجزئة (Retail Margins).",challengeAr:"كيف تقنعهم بجدوى التعاقد في ظل ضيق هوامش الربح مقارنة بالقطاعات المالية؟",options:[{id:"opt_1",textAr:"بناء دراسة جدوى رقمية تثبت فترة استرداد التكلفة (Payback Period < 7 months) عبر خفض هدر المخزون بنسبة 18% وربطه بـ PoC تجريبي.",isCorrect:!0,explanationAr:"طرح ذكي وموجه: في قطاع التجزئة، لغة الأرقام الملموسة في خفض الهدر والتلف وسرعة استرداد رأس المال هي المفتاح الحاسم لإقناع الإدارة التنفيذية.",impactAr:"توقيع العقد مع التوسع اللاحق لـ 500 فرع إضافي بنظام Upsell."},{id:"opt_2",textAr:"إقناعهم بالتركيز على المظهر العصري للتقنية بدلاً من الحسابات المالية.",isCorrect:!1,explanationAr:"طرح غير مقنع: مدراء قطاع التجزئة يعملون بأرقام يومية دقيقة وهوامش ربح متدنية، والمظهر التقني لا يبرر صرف أي ميزانية إن لم يحقق عائداً.",impactAr:"رفض العرض واختيار الحل التقليدي القائم."},{id:"opt_3",textAr:"تحمل تكاليف تركيب أجهزة الاستشعار بالكامل على حساب شركتنا مجاناً.",isCorrect:!1,explanationAr:"خسارة محققة: تحمل تكاليف الأجهزة يرفع تكلفة الاستقطاب (CAC) بشكل حاد ويزيد فترة الاسترداد لأكثر من سنتين.",impactAr:"تآكل السيولة المالية لشركتنا وتحول الصفقة لمشروع خاسر."}]}],ic=[{id:1,type:"mcq",questionAr:'ما هو الدور الحقيقي لـ "المشتري الاقتصادي" (Economic Buyer) في إطار MEDDIC؟',options:["المسؤول الفني الذي يتولى فحص الكود البرمجي وتجربة الواجهة.","الشخص الوحيد الذي يملك الصلاحية المالية للتوقيع وتحريك الميزانية المؤسسية.","مدير المشتريات الذي يتفاوض على الخصم التجاري بعد اختيار الحل.","المهندس المشرف على الدعم الفني وتطبيق النظام بعد الشراء."],correctAnswer:1,explanationAr:"المشتري الاقتصادي (Economic Buyer) في إطار MEDDIC هو صاحب السلطة المطلقة على الميزانية القادر على اعتماد الصرف المالي، وبدونه لا يمكن إغلاق الصفقة.",domainAr:"تأهيل الصفقات الكبرى (MEDDIC)"},{id:2,type:"tf",questionAr:"في صفقات الـ B2B التقنية، تقديم خصم تجاري كبير وسريع للعميل يعتبر دائماً أفضل استراتيجية لتسريع توقيع العقد.",options:["صح","خطأ"],correctAnswer:"خطأ",explanationAr:"خطأ: الخصومات السريعة تحرق صافي هامش الربح (Net Margin) وتقلل القيمة المتصورة للحل في نظر صناع القرار. البديل الاحترافي هو مبادلة القيمة بروافع تعاقدية.",domainAr:"هندسة العروض والتفاوض"},{id:3,type:"mcq",questionAr:"ماذا يمثل مؤشر (TCV - Total Contract Value) في العقود السحابية والاشتراكات؟",options:["التكلفة الإجمالية التي تدفعها الشركة لتطوير المنتج البرمجي.","إجمالي القيمة التعاقدية الكاملة لجميع سنوات العقد بعد خصم التخفيضات.","تكلفة استقطاب العميل الواحد عبر الحملات التسويقية.","الإيراد الشهري الناتج عن الاشتراكات المتكررة فقط."],correctAnswer:1,explanationAr:"الـ TCV يمثل إجمالي التدفق النقدي المتفق عليه طوال فترة سريان العقد (ACV × Years - الخصم)، وهو يعكس الحجم الكلي للصفقة.",domainAr:"اقتصاديات الإيرادات"},{id:4,type:"mcq",questionAr:"ما هي النسبة الصحية المعتمدة عالمياً لمؤشر القيمة الدائمة إلى تكلفة الاستقطاب (LTV:CAC) لشركات البرمجيات المؤسسية المستقرة؟",options:["أقل من 1.0x (التكلفة أعلى من القيمة).","بين 1.5x إلى 2.0x فقط.","بين 3.0x إلى 5.0x (القيمة تعادل 3 إلى 5 أضعاف تكلفة الاستقطاب).","أكثر من 20.0x دائماً دون استثناء."],correctAnswer:2,explanationAr:"النسبة المثالية لـ LTV:CAC في قطاع B2B تتراوح بين 3x و 5x. النسبة الأقل تعني استنزافاً للأرباح، بينما النسبة الأعلى قد تعني تقصيراً في الاستثمار في النمو.",domainAr:"اقتصاديات النمو والوحدة"},{id:5,type:"tf",questionAr:"البطل الداخلي (Champion) هو مجرد شخص ودود ومعجب بمنتجك، ولا يُشترط أن يملك تأثيراً على صناع القرار أو مصلحة مباشرة في نجاح المشروع.",options:["صح","خطأ"],correctAnswer:"خطأ",explanationAr:"خطأ: المعجب (Coach) يختلف عن البطل (Champion). البطل الحقيقي يملك مصلحة وظيفية في نجاح الحل ولديه نفوذ وتأثير فعلي لتوجيه لجنة القرار.",domainAr:"إطار MEDDIC"},{id:6,type:"mcq",questionAr:'ما الفائدة الاستراتيجية لتفعيل رافعة "إثبات المفهوم المدفوع" (Paid PoC) بدلاً من التجربة المجانية؟',options:["تحقيق أرباح ضخمة من مرحلة التجربة فقط.","إثبات جدية العميل الفنية والتنظيمية وحماية وقت الفريق الهندسي من الفرص غير الجادة.","إجبار العميل على توقيع العقد النهائي دون تجربة الحل.","تجنب إعداد أي عروض تقديمية أو اجتماعات فنية."],correctAnswer:1,explanationAr:"الـ Paid PoC يختبر التزام العميل وميزانيته، ويضمن أن كلا الطرفين جادان في قياس مؤشرات النجاح للانتقال الفوري إلى التعاقد النهائي.",domainAr:"روافع التفاوض وإغلاق الصفقات"},{id:7,type:"mcq",questionAr:"إذا كانت تكلفة استقطاب العميل (CAC) تبلغ 180,000 ريال، وصافي إيراده الشهري المتبقي 15,000 ريال، فكم تبلغ فترة الاسترداد (Payback Period)؟",options:["6 أشهر.","12 شهراً (سنة واحدة).","24 شهراً.","36 شهراً."],correctAnswer:1,explanationAr:"فترة الاسترداد = 180,000 ÷ 15,000 = 12 شهراً، وهي فترة مثالية في مبيعات المؤسسات الكبرى وتؤكد كفاءة رأس المال.",domainAr:"حسابات النمو"},{id:8,type:"tf",questionAr:"منهجية التسويق المعتمد على الحسابات (Account-Based Marketing - ABM) تركز على استهداف قائمة محددة من الشركات الاستراتيجية برسائل مخصصة بدلاً من الحملات العامة الواسعة.",options:["صح","خطأ"],correctAnswer:"صح",explanationAr:"صح: في مبيعات الشركات الكبرى B2B، يُخصص لكل حساب استراتيجي (مثل مصرف الإنماء أو أرامكو) خطة دخول وتواصل متكاملة تناسب واقعه واحتياجاته.",domainAr:"استقطاب العملاء B2B"},{id:9,type:"mcq",questionAr:"ما هو المقصود بمؤشر صافي الاحتفاظ بالإيرادات (Net Revenue Retention - NRR)؟",options:["إجمالي المبيعات المحققة من العملاء الجدد فقط خلال الشهر الحالي.","النسبة المئوية للإيرادات المتكررة المحتفظ بها من نفس العملاء الحاليين بعد احتساب التوسع والتسرب.","قيمة المصروفات التشغيلية المخصصة لقسم المبيعات والتسويق.","معدل دوران الموظفين داخل فريق تطوير الأعمال."],correctAnswer:1,explanationAr:"مؤشر NRR يقيس مدى قدرة المنشأة على الحفاظ على إيرادات عملائها وتوسيعها (Upsell) بمرور الوقت. أي نسبة أعلى من 100% تعني أن الإيرادات تنمو حتى دون جلب عملاء جدد.",domainAr:"ذكاء الإيرادات"},{id:10,type:"mcq",questionAr:"أي من الروافع التفاوضية التالية هي الأكثر فاعلية لإقناع مدير تقنية المعلومات (CIO) والمطالبة بأسعار أعلى؟",options:["توفير وجبات غداء مجانية لفريق العمل أثناء التثبيت.","اتفاقية مستوى الخدمة الصارمة (99.99% SLA Guarantee) مع بنود حوكمة الدعم والأمن السيبراني.","وعد شفهي بعدم حدوث أي مشاكل فنية مستقبلاً.","تأجيل إرسال الفواتير لعدة سنوات."],correctAnswer:1,explanationAr:"مسؤولو التقنية التنفيذيون يعتبرون الموثوقية واستقرار الخدمة والالتزام القانوني بـ 99.99% SLA أولوية قصوى تبرر السعر المرتفع وتمنع حدوث أي انقطاع في الأعمال.",domainAr:"روافع إغلاق الصفقات"}],Oy=[{code:"TCV",nameAr:"إجمالي قيمة التعاقد",nameEn:"Total Contract Value",category:"financial",definitionAr:"القيمة المالية الإجمالية المتفق عليها لكامل مدة التعاقد متضمنة رسوم الاشتراك السنوي بعد تطبيق الخصومات ورسوم الخدمات المهنية.",formula:"TCV = (ACV × Years) - Total Discount + Implementation Fees",exampleAr:"عقد ACV بقيمة 1,000,000 ر.س لمدة 3 سنوات بخصم 10% = 2,700,000 ر.س"},{code:"ACV",nameAr:"قيمة التعاقد السنوي",nameEn:"Annual Contract Value",category:"financial",definitionAr:"متوسط الإيراد السنوي المتكرر الذي تدفعه المنشأة المستفيدة سنوياً بموجب الاتفاقية التجارية.",formula:"ACV = Net Contract Value ÷ Contract Duration (Years)",exampleAr:"عقد مدته سنتان بقيمة صافية 2,400,000 ر.س يكون الـ ACV الخاص به 1,200,000 ر.س سنوياً."},{code:"ARR",nameAr:"الإيراد السنوي المتكرر",nameEn:"Annual Recurring Revenue",category:"financial",definitionAr:"إجمالي التدفقات النقدية السنوية المضمونة الناتجة عن كافة الاشتراكات والعقود المتكررة النشطة.",formula:"ARR = ∑ (Active Client Subscriptions Normalized to 1 Year)",exampleAr:"محفظة تضم 10 عملاء يدفع كل منهم 500,000 ر.س سنوياً تحقق ARR بمقدار 5,000,000 ر.س."},{code:"LTV",nameAr:"القيمة الدائمة للعميل",nameEn:"Customer Lifetime Value",category:"financial",definitionAr:"إجمالي الربح الإجمالي المتوقع تحقيقه من علاقة العمل مع العميل طوال فترة بقائه مع الشركة.",formula:"LTV = (ACV × Gross Margin %) ÷ Churn Rate %",exampleAr:"ACV = 1M، هامش الربح 75%، ونسبة التسرب السنوي 10% -> LTV = 7.5 مليون ريال."},{code:"CAC",nameAr:"تكلفة استقطاب العميل",nameEn:"Customer Acquisition Cost",category:"financial",definitionAr:"إجمالي ميزانية المبيعات والتسويق ورواتب فريق تطوير الأعمال مقسومة على عدد العملاء الجدد المكتسبين.",formula:"CAC = Total Sales & Marketing Spend ÷ Number of New Customers Acquired",exampleAr:"إنفاق 900,000 ر.س لاستقطاب 5 عملاء مؤسسيين كبار يعني أن CAC = 180,000 ر.س لكل عميل."},{code:"LTV:CAC",nameAr:"نسبة العائد إلى تكلفة الاستقطاب",nameEn:"LTV to CAC Ratio",category:"financial",definitionAr:"مؤشر الكفاءة الاستثمارية الذي يقارن بين ما نربحه من العميل طوال حياته وما كلفنا استقطابه.",formula:"Ratio = LTV ÷ CAC",exampleAr:"LTV = 7,500,000 ر.س و CAC = 180,000 ر.س -> النسبة 4.16x (ممتازة جداً ومغرية للمستثمرين)."},{code:"MEDDIC",nameAr:"منهجية تأهيل الصفقات الكبرى",nameEn:"Metrics, Economic Buyer, Decision Criteria & Process, Identify Pain, Champion",category:"methodology",definitionAr:"إطار سداسي لحوكمة صفقات الـ B2B، يضمن التحقق من وجود ميزانية ومشتري اقتصادي وألم مالي حقيقي قبل الالتزام بموارد الشركة.",exampleAr:"تأهيل صفقة حكومية عبر قياس الوفر (M)، تحديد المدير العام (E)، والاتفاق مع مدير التقنية كبطل (C)."},{code:"NRR",nameAr:"صافي الاحتفاظ بالإيرادات",nameEn:"Net Revenue Retention",category:"pipeline",definitionAr:"النسبة المئوية للإيراد المتكرر الناتج عن نفس عملاء العام الماضي بعد احتساب ترقية الاشتراكات والتسرب.",formula:"NRR = (Starting ARR + Expansion - Churn) ÷ Starting ARR × 100",exampleAr:"بدء العام بـ 10M، إضافة 2M ترقيات، وفقدان 0.5M -> NRR = 11.5 ÷ 10 = 115%."},{code:"SLA",nameAr:"اتفاقية مستوى الخدمة",nameEn:"Service Level Agreement",category:"strategy",definitionAr:"التزام تعاقدي ملزم يحدد نسبة موثوقية النظام وزمن الاستجابة للأعطال والتعويضات المالية في حال الانقطاع.",formula:"99.99% Uptime = Less than 4.38 minutes of unplanned downtime per month",exampleAr:"تقديم ضمان 99.99% للقطاع البنكي يبرر تسعيراً أعلى بنسبة 25% مقارنة بالحلول العادية."},{code:"PoC",nameAr:"إثبات المفهوم",nameEn:"Proof of Concept",category:"strategy",definitionAr:"مشروع تجريبي محدود النطاق والمدة يُنفذ في بيئة العميل لإثبات الفاعلية التقنية وحساب مؤشرات العائد قبل توقيع العقد الكامل.",exampleAr:"تطبيق تجريبي لمدة 14 يوماً على عينة من فروع البنك لإثبات سرعة تسوية المدفوعات الفورية."}],By={acv:{titleAr:"قيمة التعاقد السنوي (ACV)",descAr:"المبلغ المالي الذي يدفعه العميل سنوياً مقابل تراخيص النظام والخدمات السحابية.",tipAr:"كلما ارتفع الـ ACV، تحسنت كفاءة فريق تطوير الأعمال وأصبح بالإمكان تخصيص موارد دعم أكبر للعميل."},years:{titleAr:"مدة التعاقد الاستراتيجي (Contract Duration)",descAr:"عدد سنوات الالتزام التعاقدي (من سنة إلى 5 سنوات).",tipAr:"العقود متعددة السنوات (3-5 سنوات) توفر استقراراً مالياً وتضمن تدفقاً نقدياً عالياً، مما يبرر تقديم خصم تجاري معقول."},discount:{titleAr:"نسبة الخصم التجاري والتفاوضي (Discount %)",descAr:"نسبة التخفيض الممنوحة للعميل من القيمة الاسمية للعقد.",tipAr:"لا تقدم خصماً مجانياً! اربطه دائماً بمدة تعاقد أطول (3+ سنوات) أو دفعات سداد مبكرة لحماية صافي هامش الربح."},meddic:{titleAr:"معيار الجاهزية والتأهيل (MEDDIC Score)",descAr:"مؤشر مئوي يقيس استيفاء أركان الصفقة الستة: المقاييس، المشتري، معايير ومسار القرار، الألم، والبطل الداخلي.",tipAr:"أي صفقة درجتها أقل من 60% تعتبر عالية المخاطر وتتطلب تدخلاً فورياً لسد الفجوات مع صناع القرار."},levers:{titleAr:"روافع التفاوض وإغلاق الصفقات (Strategic Levers)",descAr:"أدوات تعاقدية واستراتيجية تُستخدم لطمأنة العميل وتسريع دورة المبيعات وتبرير السعر.",tipAr:"تفعيل رافعة ضمان العائد (ROI) مع الـ SLA يرفع احتمالية الإغلاق بأكثر من 20% دون الحاجة للتنازل عن السعر."},tcv:{titleAr:"إجمالي قيمة التعاقد (TCV)",descAr:"حجم التدفق النقدي الإجمالي الناتج عن كامل مدة العقد.",tipAr:"الـ TCV هو المقياس الأكبر لقيمة الشراكة وتأثيرها على القيمة السوقية للشركة."},winProb:{titleAr:"احتمالية إغلاق الصفقة (Win Probability %)",descAr:"النسبة الإحصائية المتوقعة لتحول هذه الفرصة إلى عقد رسمي موقع.",tipAr:"تتأثر هذه النسبة مباشرة بدرجة MEDDIC والمرحلة الحالية والروافع المفعلة."},ltvCac:{titleAr:"نسبة LTV:CAC واقتصاديات الوحدة",descAr:"تقارن إجمالي ما يدفعه العميل طوال فترة بقائه بتكلفة استقطابه.",tipAr:"النسبة الصحية تبدأ من 3.0x فما فوق، مما يثبت أن نموذج العمل قابل للتوسع بربحية عالية."},cycle:{titleAr:"دورة المبيعات المتوقعة (Sales Cycle Velocity)",descAr:"عدد الأيام المتوقعة لإتمام التعاقد من أول تواصل.",tipAr:"تقليص دورة المبيعات عبر تمكين البطل الداخلي يوفر مئات الساعات التشغيلية لفريق العمل."}};let Rt="ar",yi=!1,Pt={sector:"fintech",acv:125e4,years:3,discount:10,meddicScore:84,leverRoi:!0,leverSla:!0,leverPoc:!0,leverAlliance:!1,activeStage:0},fe=lc(Pt),qe={monthlyLeads:24,conversionRate:18,avgAcv:125e4,cac:18e4,grossMargin:75,nrr:118},ke=Lu(qe),Ue=null;window.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("canvas-container");r&&(Ue=new Iy(r,t=>{Wc(t)}),Ue.updateDealParams(Pt,fe)),zy(),ky(),Vy(),Hy(),Gy(),Wy(),Xy(),qy(),$y(),gf(),Ky(),nM(),io(),Xc(),ar(),window.addEventListener("resize",()=>{Ue&&Ue.resize(),ar()})});function zy(){const r=document.querySelectorAll(".tab-btn"),t=document.querySelectorAll(".tab-panel");r.forEach(e=>{e.addEventListener("click",()=>{Ne();const n=e.getAttribute("data-tab");r.forEach(s=>s.classList.remove("active")),t.forEach(s=>s.classList.remove("active")),e.classList.add("active");const i=document.getElementById(n||"");i&&i.classList.add("active"),n==="panel-3d"&&Ue&&setTimeout(()=>Ue?.resize(),50),(n==="panel-radar"||n==="panel-calc")&&setTimeout(()=>ar(),60)})})}function ky(){const r=document.querySelectorAll(".cam-btn");r.forEach(t=>{t.addEventListener("click",()=>{Ne(),r.forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-cam");Ue&&e&&Ue.setCameraPreset(e)})})}function Vy(){document.querySelectorAll(".pipeline-step").forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.getAttribute("data-stage")||"0",10);Wc(e)})})}function Wc(r){const t=Math.max(0,Math.min(4,r));Pt.activeStage=t,$a(t),document.querySelectorAll(".pipeline-step").forEach((n,i)=>{i===t?n.classList.add("active"):n.classList.remove("active")}),fe=lc(Pt),Ue&&(Ue.updateDealParams(Pt,fe),Ue.setHighlightedStage(t)),io(),ar()}function Hy(){const r=document.querySelectorAll(".sector-pill");r.forEach(t=>{t.addEventListener("click",()=>{Ne(),r.forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-sector");if(e&&Qi[e]){const n=Qi[e];Pt.sector=e,Pt.acv=n.acv,Pt.years=n.years,Pt.discount=n.discount,Pt.meddicScore=n.meddicScore,Pt.leverRoi=n.leverRoi,Pt.leverSla=n.leverSla,Pt.leverPoc=n.leverPoc,Pt.leverAlliance=n.leverAlliance,mf(),Ji()}})})}function Gy(){const r=document.getElementById("acvSlider"),t=document.getElementById("yearsSlider"),e=document.getElementById("discountSlider"),n=document.getElementById("meddicSlider");r?.addEventListener("input",i=>{Pt.acv=parseInt(i.target.value,10),Ji()}),t?.addEventListener("input",i=>{Pt.years=parseInt(i.target.value,10),Ji()}),e?.addEventListener("input",i=>{Pt.discount=parseInt(i.target.value,10),Ji()}),n?.addEventListener("input",i=>{Pt.meddicScore=parseInt(i.target.value,10),Ji()})}function Wy(){const r=document.getElementById("leverRoi"),t=document.getElementById("leverSla"),e=document.getElementById("leverPoc"),n=document.getElementById("leverAlliance"),i=(s,a)=>{s?.addEventListener("change",()=>{const o=s.checked;Pt[a]=o,wf(o),Ji()})};i(r,"leverRoi"),i(t,"leverSla"),i(e,"leverPoc"),i(n,"leverAlliance")}function mf(){const r=document.getElementById("acvSlider"),t=document.getElementById("yearsSlider"),e=document.getElementById("discountSlider"),n=document.getElementById("meddicSlider");r&&(r.value=String(Pt.acv)),t&&(t.value=String(Pt.years)),e&&(e.value=String(Pt.discount)),n&&(n.value=String(Pt.meddicScore));const i=document.getElementById("leverRoi"),s=document.getElementById("leverSla"),a=document.getElementById("leverPoc"),o=document.getElementById("leverAlliance");i&&(i.checked=Pt.leverRoi),s&&(s.checked=Pt.leverSla),a&&(a.checked=Pt.leverPoc),o&&(o.checked=Pt.leverAlliance)}function Ji(){fe=lc(Pt),Ue&&Ue.updateDealParams(Pt,fe),io(),ar()}function Xy(){const r=document.getElementById("leadsInput"),t=document.getElementById("convInput"),e=document.getElementById("avgAcvInput"),n=document.getElementById("cacInput"),i=document.getElementById("grossMarginInput"),s=document.getElementById("nrrInput"),a=()=>{qe.monthlyLeads=parseInt(r?.value||"24",10),qe.conversionRate=parseInt(t?.value||"18",10),qe.avgAcv=parseInt(e?.value||"1250000",10),qe.cac=parseInt(n?.value||"180000",10),qe.grossMargin=parseInt(i?.value||"75",10),qe.nrr=parseInt(s?.value||"118",10),ke=Lu(qe),Xc();const o=document.getElementById("arrChartCanvas");o&&pf(o,ke,yi,Rt)};[r,t,e,n,i,s].forEach(o=>{o?.addEventListener("input",a)})}function io(){const r=document.getElementById("acvVal"),t=document.getElementById("yearsVal"),e=document.getElementById("discountVal"),n=document.getElementById("meddicVal");r&&(r.textContent=Se(Pt.acv,Rt)),t&&(t.textContent=Rt==="ar"?`${Pt.years} سنوات`:`${Pt.years} Years`),e&&(e.textContent=`${Pt.discount}%`),n&&(n.textContent=`${Pt.meddicScore}%`);const i=document.getElementById("kpiTcv"),s=document.getElementById("kpiWinProb"),a=document.getElementById("kpiMargin"),o=document.getElementById("kpiCycle"),l=document.getElementById("kpiNetAcvHint"),c=document.getElementById("kpiArrImpactHint");i&&(i.textContent=Se(fe.tcv,Rt)),s&&(s.textContent=`${fe.winProbability}%`),a&&(a.textContent=`${fe.netMargin}%`),o&&(o.textContent=Rt==="ar"?`${fe.salesCycleDays} يوماً`:`${fe.salesCycleDays} Days`),l&&(l.textContent=Rt==="ar"?`صافي سنوي: ${Se(fe.netAcv,Rt)}`:`Net ARR: ${Se(fe.netAcv,Rt)}`),c&&(c.textContent=Rt==="ar"?`الأثر المرجح: ${Se(fe.estimatedArrImpact,Rt)}`:`Weighted ARR: ${Se(fe.estimatedArrImpact,Rt)}`);const h=document.getElementById("hudClientName"),u=document.getElementById("hudStageName"),d=document.getElementById("hudDealHealth"),f=Qi[Pt.sector];h&&f&&(h.textContent=Rt==="ar"?f.clientAr:f.clientEn);const _=Jn[Pt.activeStage];u&&_&&(u.textContent=Rt==="ar"?_.badgeAr:_.badgeEn),d&&(d.textContent=`${fe.winProbability}% (${Rt==="ar"?fe.dealHealthLabelAr:fe.dealHealthLabelEn})`);const g=document.getElementById("stageInsightTitle"),m=document.getElementById("stageInsightDesc"),p=document.getElementById("stageInsightAction");if(g&&_&&(g.textContent=Rt==="ar"?_.titleAr:_.titleEn),m&&_&&(m.textContent=Rt==="ar"?_.descAr:_.descEn),p&&_){const x=Rt==="ar"?"الإجراء التنفيذي الموصى به: ":"Recommended Specialist Action: ";p.textContent=`${x}${Rt==="ar"?_.actionAr:_.actionEn}`}const M=document.getElementById("meddicBreakdownList"),S=document.getElementById("meddicHeaderScore");S&&(S.textContent=`${Pt.meddicScore}% ${Rt==="ar"?"مؤهل":"Qualified"}`),M&&fe.meddicAxes&&(M.innerHTML=fe.meddicAxes.map(x=>`
        <div class="meddic-item-box">
          <span class="meddic-item-label">${Rt==="ar"?x.labelAr:x.labelEn}</span>
          <span class="meddic-item-score">${x.score}%</span>
        </div>
      `).join(""))}function Xc(){const r=document.getElementById("leadsVal"),t=document.getElementById("convVal"),e=document.getElementById("avgAcvVal"),n=document.getElementById("cacVal"),i=document.getElementById("grossMarginVal"),s=document.getElementById("nrrVal");r&&(r.textContent=Rt==="ar"?`${qe.monthlyLeads} فرصة`:`${qe.monthlyLeads} Leads`),t&&(t.textContent=`${qe.conversionRate}%`),e&&(e.textContent=Se(qe.avgAcv,Rt)),n&&(n.textContent=Se(qe.cac,Rt)),i&&(i.textContent=`${qe.grossMargin}%`),s&&(s.textContent=`${qe.nrr}%`);const a=document.getElementById("outProjectedArr"),o=document.getElementById("resNewClients"),l=document.getElementById("outLtvCac"),c=document.getElementById("resLtvVal"),h=document.getElementById("outPayback"),u=document.getElementById("outStrategicLift"),d=document.getElementById("arrBadgeTotal");if(a&&(a.textContent=Se(ke.projectedArr,Rt)),o&&(o.textContent=Rt==="ar"?`${ke.newClientsPerYear} عميلاً جديداً سنوياً`:`${ke.newClientsPerYear} New Clients / Yr`),l&&(l.textContent=`${ke.ltvCacRatio}x`),c&&(c.textContent=Rt==="ar"?`القيمة الدائمة: ${Se(ke.ltv,Rt)}`:`Lifetime Value: ${Se(ke.ltv,Rt)}`),h&&(h.textContent=Rt==="ar"?`${ke.cacPaybackMonths} شهراً`:`${ke.cacPaybackMonths} Months`),u){const f=ke.strategicArr-ke.projectedArr;u.textContent=`+${Se(f,Rt)}`}if(d){const f=ke.strategicArr-ke.projectedArr,_=Math.round(f/(ke.projectedArr||1)*100);d.textContent=`+${_}% ${Rt==="ar"?"نمو متسارع":"Strategic Lift"}`}}function ar(){const r=document.getElementById("meddicCanvas");r&&Uy(r,fe,yi,Rt);const t=document.getElementById("matrixCanvas");t&&Ny(t,Zo,Pt,fe,yi,Rt);const e=document.getElementById("arrChartCanvas");e&&pf(e,ke,yi,Rt)}function gf(){const r=document.getElementById("opportunityTableBody");if(!r)return;r.innerHTML=Zo.map(e=>{const n=Rt==="ar"?e.accountAr:e.accountEn,i=Rt==="ar"?e.sectorAr:e.sectorEn,s=Jn[e.stageIndex],a=Rt==="ar"?s.badgeAr:s.badgeEn;return`
      <tr class="opp-row" data-id="${e.id}">
        <td class="opp-account-name">${n}</td>
        <td>${i}</td>
        <td class="opp-acv-badge">${Se(e.acv,Rt)}</td>
        <td style="font-family: var(--font-mono);">${e.cycleDays}d</td>
        <td style="font-family: var(--font-mono); font-weight: 700; color: #10b981;">${e.winProb}%</td>
        <td><span class="badge-tech" style="font-size: 0.68rem;">${a}</span></td>
      </tr>
    `}).join(""),r.querySelectorAll(".opp-row").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-id"),i=Zo.find(s=>s.id===n);i&&(Ne(),Pt.acv=i.acv,Pt.activeStage=i.stageIndex,i.sectorEn.includes("FinTech")?Pt.sector="fintech":i.sectorEn.includes("GovTech")||i.sectorEn.includes("Smart Cities")?Pt.sector="govtech":i.sectorEn.includes("Cloud")||i.sectorEn.includes("AI")?Pt.sector="cloud_ai":i.sectorEn.includes("Telecom")&&(Pt.sector="telecom"),mf(),Ji(),document.getElementById("tab-3d")?.click())})})}function qy(){const r=document.getElementById("openReportBtn"),t=document.getElementById("closeReportBtn"),e=document.getElementById("printReportBtn"),n=document.getElementById("reportModal"),i=document.getElementById("executeDealBtn"),s=()=>{Ne(),Yy(),n?.classList.add("show")},a=()=>{Ne(),n?.classList.remove("show")};r?.addEventListener("click",s),t?.addEventListener("click",a),n?.addEventListener("click",o=>{o.target===n&&a()}),e?.addEventListener("click",()=>{window.print()}),i?.addEventListener("click",()=>{Wc(4),ja(),Ue&&Ue.triggerContractClosedWave(),xs({particleCount:80,spread:70,origin:{y:.6},colors:["#10b981","#f59e0b","#06b6d4","#ffffff"]}),setTimeout(()=>{xs({particleCount:60,angle:60,spread:55,origin:{x:0},colors:["#10b981","#fbbf24"]}),xs({particleCount:60,angle:120,spread:55,origin:{x:1},colors:["#06b6d4","#34d399"]})},250),setTimeout(()=>{s()},600)})}function Yy(){const r=Qi[Pt.sector],t=Rt==="ar"?r.clientAr:r.clientEn,e=Rt==="ar"?r.nameAr:r.nameEn,n=document.getElementById("docTargetClient"),i=document.getElementById("docSectorName"),s=document.getElementById("docSignClientName");n&&(n.textContent=t),i&&(i.textContent=e),s&&(s.textContent=Rt==="ar"?`المفوض بالتوقيع — ${t.split(" - ")[0]}`:`Authorized Signatory — ${t.split(" - ")[0]}`);const a=document.getElementById("docAcvVal"),o=document.getElementById("docDurationVal"),l=document.getElementById("docDiscountVal"),c=document.getElementById("docNetAcvVal"),h=document.getElementById("docTcvVal"),u=document.getElementById("docMarginVal"),d=document.getElementById("docMeddicVal");if(a&&(a.textContent=Se(Pt.acv,Rt)),o&&(o.textContent=Rt==="ar"?`${Pt.years} سنوات`:`${Pt.years} Years`),l){const f=Math.round(Pt.acv*(Pt.discount/100));l.textContent=`${Pt.discount}% (${Se(f,Rt)})`}c&&(c.textContent=Se(fe.netAcv,Rt)),h&&(h.textContent=Se(fe.tcv,Rt)),u&&(u.textContent=`${fe.netMargin}%`),d&&(d.textContent=`${Pt.meddicScore}%`)}function $y(){const r=document.getElementById("audioToggleBtn"),t=document.getElementById("audioIcon");r?.addEventListener("click",()=>{const a=!Af();Tf(a),t&&(t.innerHTML=a?'<i class="fa-solid fa-volume-high"></i>':'<i class="fa-solid fa-volume-xmark"></i>'),a&&Ne()});const e=document.getElementById("themeToggleBtn"),n=document.getElementById("themeIcon");e?.addEventListener("click",()=>{yi=!yi,Ne(),yi?(document.body.classList.add("light-theme"),n&&(n.innerHTML='<i class="fa-solid fa-moon"></i>')):(document.body.classList.remove("light-theme"),n&&(n.innerHTML='<i class="fa-solid fa-sun"></i>')),Ue&&Ue.setTheme(yi),ar()});const i=document.getElementById("langToggleBtn"),s=document.getElementById("langText");i?.addEventListener("click",()=>{Rt=Rt==="ar"?"en":"ar",Ne(),s&&(s.textContent=Rt==="ar"?"EN":"عربي"),document.documentElement.lang=Rt,document.documentElement.dir=Rt==="ar"?"rtl":"ltr",jy(Rt),io(),Xc(),gf(),ar()})}function jy(r){const t=r==="ar",e=(n,i,s)=>{const a=document.getElementById(n);a&&(a.textContent=t?i:s)};e("appTitle","نَمَاء | NAMA 3D","NAMA 3D | نَمَاء"),e("appSubtitle","منظومة تطوير الأعمال والشراكات الاستراتيجية وذكاء الإيرادات المؤسسية","Enterprise B2B Business Development, Strategic Partnerships & Revenue Intelligence Suite"),e("authorBadge","إعداد وتطوير: أ. طارق ابوعشي","Architect: Tareq Abuashi"),e("reportBtnText","العرض التجاري المعتمد","B2B Commercial Proposal"),e("tabLabel3d","الفضاء ثلاثي الأبعاد وقمع الصفقات","3D Ecosystem & Deal Funnel"),e("tabLabelRadar","رادار MEDDIC ومصفوفة الفرص","MEDDIC Radar & Opportunity Matrix"),e("tabLabelCalc","حاسبة نمو الإيرادات والعائد ARR","Revenue Growth & LTV:CAC Engine"),e("camPresetsLabel","زوايا الكاميرا:","Camera Angles:"),e("camBtnOrbit","مدار حر (Orbit)","Free Orbit"),e("camBtnEco","المنظومة (Ecosystem)","Ecosystem View"),e("camBtnFunnel","قمع الصفقات (Funnel)","Funnel View"),e("camBtnRadar","الرادار العلوي (Top-Down)","Top-Down Radar"),e("camBtnCore","قلب الإيرادات (Core)","Revenue Core"),e("liveStatusText","محاكاة حية متزامنة","Live Synchronized Simulation"),e("hudClientLabel","العميل المستهدف:","Target Enterprise Client:"),e("hudStageLabel","المرحلة الحالية:","Active Pipeline Stage:"),e("hudHealthLabel","مؤشر جودة الصفقة:","Deal Health & Score:"),e("sidebarTitle","محاكي هيكلة الصفقات والتفاوض","Deal Structuring & Negotiation"),e("sidebarSubtitle","ضبط المتغيرات التجارية واستراتيجيات التفاوض المتقدمة","Configure commercial levers and strategic deal terms"),e("sectorSelectLabel","القطاع الاستراتيجي المستهدف:","Target Enterprise Sector:"),e("acvLabel","قيمة التعاقد السنوي (ACV):","Annual Contract Value (ACV):"),e("yearsLabel","مدة التعاقد الاستراتيجي:","Strategic Contract Duration:"),e("discountLabel","نسبة الخصم التفاوضي التجاري:","Commercial Negotiation Discount:"),e("meddicLabel","معيار الجاهزية والتأهيل (MEDDIC):","MEDDIC Qualification Score:"),e("leversLabel","روافع التفاوض وإغلاق الصفقات (Strategic Levers):","Strategic Negotiation Levers:"),e("leverRoiName","ضمان العائد الاستثماري (ROI Guarantee)","Value-Based ROI Guarantee Clause"),e("leverRoiSub","بند توثيق واسترداد القيمة الملموسة (+5% احتمالية)","Commitment to quantifiable value realization (+5% Win Prob)"),e("leverSlaName","اتفاقية مستوى خدمة ذهبية (SLA 99.99%)","Tier-1 Mission-Critical SLA (99.99%)"),e("leverSlaSub","استجابة فورية وحوكمة حرجة (+4% احتمالية)","Sub-15m critical incident response (+4% Win Prob)"),e("leverPocName","إثبات مفهوم تجريبي سريع (14-Day PoC)","14-Day Rapid Pilot / PoC Sandbox"),e("leverPocSub","بيئة رملية آمنة تزيل المخاطر الفنية (-14 يوم دورة)","De-risks architecture and shortens sales cycle (-14 Days)"),e("leverAllianceName","تحالف استراتيجي وتكامل بيئي (Partner Co-Sell)","Co-Marketing & Strategic Channel Alliance"),e("leverAllianceSub","بيع مشترك وتكامل منظومة الشركاء (+5% احتمالية)","Leverages joint ecosystem go-to-market (+5% Win Prob)"),e("kpiTcvLabel","إجمالي قيمة التعاقد (TCV)","Total Contract Value (TCV)"),e("kpiWinProbLabel","احتمالية إغلاق الصفقة (Win Prob)","Win Probability (%)"),e("kpiMarginLabel","صافي هامش الربح (Net Margin)","Net Delivery Margin (%)"),e("kpiCycleLabel","دورة المبيعات المتوقعة (Cycle Velocity)","Predicted Sales Cycle"),e("executeBtnText","إتمام التعاقد وتوقيع الشراكة (Execute Closed-Won)","Execute Closed-Won Contract"),e("meddicCardTitle","رادار تأهيل الفرص الكبرى (MEDDIC Qualification Radar)","MEDDIC Enterprise Qualification Radar"),e("meddicCardSub","التحليل السداسي العميق لجاهزية الصفقة وإزالة مخاطر الإلغاء","Deep 6-axis qualification telemetry for risk mitigation"),e("matrixCardTitle","مصفوفة الفرص التجارية وحسابات الشركات (Opportunity Matrix)","Enterprise Opportunity & Velocity Matrix"),e("matrixCardSub","تحليل السرعة مقابل الاحتمالية وحجم التعاقد (اضغط على أي صف لتفعيله)","Cycle days vs. win probability & ACV bubble sizing (Click row to load)"),e("matrixHint","8 حسابات قيادية نشطة","8 Key Strategic Accounts"),e("thAccount","الحساب المستهدف / المنظمة","Target Enterprise Account"),e("thSector","القطاع","Sector"),e("thAcv","قيمة التعاقد (ACV)","ACV (SAR)"),e("thCycle","دورة المبيعات","Sales Cycle"),e("thWinProb","احتمالية الإغلاق","Win Prob %"),e("thStage","المرحلة","Stage"),e("calcCardTitle","محرك نمو الإيرادات واقتصاديات الوحدة (B2B Unit Economics)","B2B Unit Economics & Growth Engine"),e("calcCardSub","نمذجة استقطاب العملاء المؤسسيين، تكلفة الاستحواذ والقيمة الدائمة","Enterprise cohort modeling, CAC payback & LTV expansion"),e("leadsLabel","الفرص المؤهلة شهرياً (Monthly Leads):","Qualified Enterprise Leads / Month:"),e("convLabel","معدل تحويل الفرص الكلي (Conversion %):","Overall Pipeline Conversion Rate (%):"),e("avgAcvLabel","متوسط قيمة الصفقة (Average ACV):","Average Contract Value (ACV):"),e("cacLabel","تكلفة الاستحواذ المؤسسية (CAC):","Customer Acquisition Cost (CAC):"),e("grossMarginLabel","الهامش الإجمالي المباشر (Gross Margin %):","Gross Margin (%):"),e("nrrLabel","معدل الاحتفاظ الصافي والتوسع (NRR %):","Net Revenue Retention (NRR %):"),e("resArrLabel","الإيراد السنوي المتكرر (ARR المتوقع)","Projected Ending ARR"),e("resLtvCacLabel","مؤشر كفاءة رأس المال (LTV : CAC)","Capital Efficiency (LTV : CAC)"),e("resPaybackLabel","فترة استرداد تكلفة الاستحواذ","CAC Payback Period"),e("resStrategicLiftLabel","الأثر الاستراتيجي عبر نَمَاء","NAMA Strategic Lift"),e("arrChartTitle","منحنى نمو الإيرادات السنوية المتكررة (12-Month ARR Trajectory)","12-Month ARR Cumulative Trajectory"),e("arrChartSub","مقارنة المسار العضوي الأساسي مقابل تسارع نَمَاء الاستراتيجي عبر التحالفات","Baseline organic curve vs. NAMA strategic BD acceleration"),e("tabLabelEdu","المختبر التعليمي والمعجم B2B","Educational Academy & Glossary"),e("eduBtnText","أكاديمية B2B","B2B Academy"),e("academyBadgeText","المختبر التعليمي والمعجم التفاعلي B2B","B2B Interactive Learning Lab & Glossary"),e("academyTitle","أكاديمية تطوير الأعمال والشراكات الاستراتيجية وذكاء الإيرادات","B2B Business Development, Strategic Partnerships & Revenue Academy"),e("academySubtitle","منهج تفاعلي متكامل يجمع بين الشرح الأكاديمي الرصين، محاكاة السيناريوهات الحية، حل معضلات التفاوض، والاختبار المهاري الختامي المقنن","A rigorous, interactive curriculum combining pedagogical depth, real-world case simulations, negotiation dilemmas, and verified skills mastery"),e("subtabTitleModules","الركائز التعليمية الخمس","5 Core Learning Modules"),e("subtabTitleCases","محاكي السيناريوهات والحالات الواقعية","Real-World Case Simulator"),e("subtabTitleQuiz","الاختبار المهاري الختامي (10 أسئلة)","Mastery Skills Quiz (10 Questions)"),e("subtabTitleGlossary","معجم المعادلات والمصطلحات المشروحة","Formulas & Terminology Glossary"),e("footerAuthor","تصميم وتطوير: أ. طارق ابوعشي — أخصائي تطوير الأعمال والشراكات الاستراتيجية","Architected & Developed by: Tareq Abuashi — Lead B2B Business Development Specialist")}let As=0,Yi=0,Wi=0,rc=!1,sc="all",Lr="";function Ky(){document.getElementById("openEduTabBtn")?.addEventListener("click",()=>{Ne(),document.getElementById("tab-edu")?.click(),window.scrollTo({top:0,behavior:"smooth"})});const t=document.querySelectorAll(".academy-subtab-btn"),e=document.querySelectorAll(".academy-subpanel");t.forEach(n=>{n.addEventListener("click",()=>{Ne();const i=n.getAttribute("data-subtab");t.forEach(a=>a.classList.remove("active")),e.forEach(a=>a.classList.remove("active")),n.classList.add("active"),document.getElementById(`subpanel-${i}`)?.classList.add("active")})}),Zy(),Jy(),_f(),ac(),eM()}function Zy(){const r=document.getElementById("modulesContainer");r&&(r.innerHTML=Fy.map((t,e)=>`
      <div class="module-card ${e===0?"expanded":""}" id="modCard-${t.id}">
        <div class="module-card-header" onclick="window.toggleModuleCard('${t.id}')">
          <div class="module-header-main">
            <span class="module-number-badge">0${t.number}</span>
            <div class="module-icon-pill"><i class="${t.icon}"></i></div>
            <div class="module-titles">
              <span class="module-badge-tag">${t.badgeAr}</span>
              <h4 class="module-title">${t.titleAr}</h4>
              <span class="module-title-en">${t.titleEn}</span>
            </div>
          </div>
          <button class="module-expand-btn" aria-label="Toggle Module">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>

        <div class="module-card-body">
          <p class="module-summary">${t.summaryAr}</p>

          <div class="module-concepts-list">
            <h5 class="concepts-list-title"><i class="fa-solid fa-key"></i> المفاهيم والمحاور الجوهرية:</h5>
            ${t.coreConceptsAr.map(i=>`
              <div class="concept-item">
                <span class="concept-bullet"><i class="fa-solid fa-check"></i></span>
                <div>
                  <strong>${i.title}:</strong>
                  <p>${i.desc}</p>
                </div>
              </div>
            `).join("")}
          </div>

          ${t.formulaAr?`
            <div class="module-formula-box">
              <span class="formula-box-header"><i class="fa-solid fa-calculator"></i> ${t.formulaAr.name}:</span>
              <div class="formula-code">${t.formulaAr.formula}</div>
              <p class="formula-example"><strong>تطبيق عملي:</strong> ${t.formulaAr.example}</p>
            </div>
          `:""}

          <div class="module-strategic-tip">
            <span class="tip-icon"><i class="fa-solid fa-lightbulb"></i></span>
            <p>${t.strategicTipAr}</p>
          </div>
        </div>
      </div>
    `).join(""))}window.toggleModuleCard=r=>{Ne();const t=document.getElementById(`modCard-${r}`);t&&t.classList.toggle("expanded")};function Jy(){const r=document.getElementById("caseSelectorBar");r&&(r.innerHTML=Gc.map((t,e)=>`
    <button class="case-pill-btn ${e===As?"active":""}" data-case-idx="${e}">
      <i class="${t.icon}"></i>
      <span>${t.sectorAr.split(" (")[0]}</span>
    </button>
  `).join(""),r.querySelectorAll(".case-pill-btn").forEach(t=>{t.addEventListener("click",()=>{Ne(),As=parseInt(t.getAttribute("data-case-idx")||"0",10),r.querySelectorAll(".case-pill-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),Du()})}),Du())}function Du(){const r=document.getElementById("caseActiveContainer");if(!r)return;const t=Gc[As];r.innerHTML=`
    <div class="case-study-card">
      <div class="case-header">
        <div class="case-header-left">
          <span class="case-sector-badge"><i class="${t.icon}"></i> ${t.sectorAr}</span>
          <h4 class="case-title">${t.titleAr}</h4>
          <span class="case-client-tag">الجهة الشريكة: <strong>${t.clientAr}</strong></span>
        </div>
        <div class="case-index-pill">دراسة حالة #${As+1} من 4</div>
      </div>

      <div class="case-body">
        <div class="case-scenario-box">
          <h5 class="box-title"><i class="fa-solid fa-briefcase"></i> معطيات الموقف التعاقدي:</h5>
          <p>${t.scenarioAr}</p>
        </div>

        <div class="case-challenge-box">
          <h5 class="challenge-title"><i class="fa-solid fa-triangle-exclamation"></i> التحدي التفاوضي أمامك:</h5>
          <p>${t.challengeAr}</p>
        </div>

        <div class="case-options-section">
          <h5 class="options-prompt"><i class="fa-solid fa-hand-pointer"></i> اختر القرار الاستراتيجي الذي ستتخذه كأخصائي تطوير أعمال:</h5>
          <div class="case-options-list">
            ${t.options.map((e,n)=>`
              <button class="case-option-btn" onclick="window.selectCaseOption(${As}, ${n})">
                <span class="opt-letter">${String.fromCharCode(65+n)}</span>
                <span class="opt-text">${e.textAr}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <div class="case-feedback-area" id="caseFeedbackArea" style="display: none;"></div>
      </div>
    </div>
  `}window.selectCaseOption=(r,t)=>{const e=Gc[r],n=e.options[t],i=document.getElementById("caseFeedbackArea");if(!i)return;document.querySelectorAll(".case-option-btn").forEach((a,o)=>{a.disabled=!0,o===t?a.classList.add(n.isCorrect?"chosen-correct":"chosen-incorrect"):e.options[o].isCorrect&&a.classList.add("reveal-correct")}),n.isCorrect?(ja(),xs({particleCount:50,spread:60,origin:{y:.7},colors:["#10b981","#f59e0b","#06b6d4"]})):$a(1),i.style.display="block",i.className=`case-feedback-area ${n.isCorrect?"feedback-success":"feedback-warning"}`,i.innerHTML=`
    <div class="feedback-header">
      <span class="feedback-icon"><i class="fa-solid ${n.isCorrect?"fa-circle-check":"fa-circle-xmark"}"></i></span>
      <h5 class="feedback-title">${n.isCorrect?"قرار استراتيجي ممتاز وصحيح 100%":"قرار يحتاج إلى إعادة تقييم وتصحيح"}</h5>
    </div>
    <p class="feedback-explanation">${n.explanationAr}</p>
    <div class="feedback-impact-box">
      <strong><i class="fa-solid fa-chart-line"></i> الأثر الاستراتيجي والمالي لهذا القرار:</strong>
      <p>${n.impactAr}</p>
    </div>
  `};function _f(){const r=document.getElementById("quizContainerCard");if(!r)return;if(Yi>=ic.length){Qy(r);return}const t=ic[Yi];rc=!1,r.innerHTML=`
    <div class="quiz-active-block">
      <!-- Quiz Progress Header -->
      <div class="quiz-top-bar">
        <div class="quiz-step-tag">
          <i class="fa-solid fa-list-ol"></i>
          <span>السؤال <strong>${Yi+1}</strong> من <strong>10</strong></span>
        </div>
        <div class="quiz-domain-tag">
          <i class="fa-solid fa-tag"></i>
          <span>${t.domainAr}</span>
        </div>
      </div>

      <!-- Quiz Progress Bar -->
      <div class="quiz-progress-track">
        <div class="quiz-progress-fill" style="width: ${Yi/10*100}%;"></div>
      </div>

      <!-- Question Text -->
      <div class="quiz-question-box">
        <h4 class="quiz-question-text">${t.questionAr}</h4>
      </div>

      <!-- Options -->
      <div class="quiz-answers-list" id="quizAnswersList">
        ${t.options?t.options.map((e,n)=>`
          <button class="quiz-answer-btn" onclick="window.handleQuizAnswer(${n})">
            <span class="ans-letter">${t.type==="tf"?e==="صح"?"✓":"✗":String.fromCharCode(65+n)}</span>
            <span class="ans-text">${e}</span>
          </button>
        `).join(""):""}
      </div>

      <!-- Realtime Feedback -->
      <div class="quiz-feedback-box" id="quizFeedbackBox" style="display: none;"></div>

      <!-- Next Button -->
      <div class="quiz-action-footer" id="quizActionFooter" style="display: none;">
        <button class="quiz-next-btn" onclick="window.advanceQuizQuestion()">
          <span>${Yi===9?"عرض النتيجة النهائية والتقييم المهاري":"السؤال التالي"}</span>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
  `}window.handleQuizAnswer=r=>{if(rc)return;rc=!0;const t=ic[Yi],e=document.querySelectorAll(".quiz-answer-btn"),n=document.getElementById("quizFeedbackBox"),i=document.getElementById("quizActionFooter");let s=!1;t.type==="mcq"?s=r===t.correctAnswer:t.type==="tf"&&(s=(t.options?t.options[r]:"")===t.correctAnswer),s?(Wi++,ja()):$a(0),e.forEach((a,o)=>{a.disabled=!0;let l=!1;t.type==="mcq"?l=o===t.correctAnswer:t.type==="tf"&&(l=t.options?t.options[o]===t.correctAnswer:!1),l&&a.classList.add("correct-answer"),o===r&&!s&&a.classList.add("wrong-answer")}),n&&(n.style.display="block",n.className=`quiz-feedback-box ${s?"fb-correct":"fb-incorrect"}`,n.innerHTML=`
      <div class="fb-header">
        <i class="fa-solid ${s?"fa-circle-check":"fa-circle-xmark"}"></i>
        <strong>${s?"إجابة صحيحة ومتقنة!":"إجابة غير صحيحة — التوضيح التعليمي:"}</strong>
      </div>
      <p class="fb-explanation">${t.explanationAr}</p>
    `),i&&(i.style.display="flex")};window.advanceQuizQuestion=()=>{Ne(),Yi++,_f()};function Qy(r){ja(),Wi>=8&&xs({particleCount:100,spread:70,origin:{y:.6},colors:["#10b981","#f59e0b","#06b6d4","#ffffff"]});let t="",e="",n="";Wi>=8?(n="mastery-high",e="إتقان مهاري متقدم في تطوير الأعمال",t="أحسنت، أنت الآن قادر على قيادة وتأهيل صفقات الـ B2B الكبرى، صياغة العروض الرابحة وحساب اقتصاديات النمو بكفاءة واحترافية."):Wi>=5?(n="mastery-mid",e="مستوى جيد وقريب من الإتقان الكامل",t="مستوى جيد وقريب من الإتقان الكامل؛ راجع الركائز التعليمية ومحاكي الحالات لتعزيز مهارات التفاوض وتأهيل MEDDIC."):(n="mastery-low",e="في طور البناء وتطوير المهارة",t="أنت في طور التقدم وبناء المهارة؛ راجع بطاقات الشرح ومعجم المصطلحات ثم جرب السيناريوهات العملية مجدداً."),r.innerHTML=`
    <div class="quiz-result-card ${n}">
      <div class="result-celebration-icon">
        <i class="fa-solid ${Wi>=8?"fa-trophy":Wi>=5?"fa-award":"fa-book-open-reader"}"></i>
      </div>
      <span class="result-badge">${e}</span>
      <h3 class="result-title">نتيجة التقييم النهائي لمهارات تطوير الأعمال B2B</h3>

      <div class="score-display-wrap">
        <span class="score-text-label">الدرجة المكتسبة:</span>
        <span class="score-number-badge" style="direction: ltr; display: inline-block;">${Wi} / 10</span>
      </div>

      <p class="result-pedagogical-feedback">${t}</p>

      <div class="result-author-footer">
        <i class="fa-solid fa-crown"></i>
        <span>معتمد ضمن منظومة نَمَاء — إعداد وتطوير: <strong>أ. طارق ابوعشي</strong></span>
      </div>
    </div>
  `}function ac(){const r=document.getElementById("glossaryCardsGrid");if(!r)return;const t=Oy.filter(e=>{const n=sc==="all"||e.category===sc,i=Lr===""||e.code.toLowerCase().includes(Lr.toLowerCase())||e.nameAr.toLowerCase().includes(Lr.toLowerCase())||e.nameEn.toLowerCase().includes(Lr.toLowerCase())||e.definitionAr.toLowerCase().includes(Lr.toLowerCase());return n&&i});if(t.length===0){r.innerHTML=`
      <div class="glossary-empty-state">
        <i class="fa-solid fa-search"></i>
        <p>لا توجد مصطلحات مطابقة لبحثك الحالي.</p>
      </div>
    `;return}r.innerHTML=t.map(e=>`
    <div class="glossary-term-card">
      <div class="term-header">
        <span class="term-code-pill">${e.code}</span>
        <span class="term-cat-tag ${e.category}">${tM(e.category)}</span>
      </div>
      <h4 class="term-name-ar">${e.nameAr}</h4>
      <span class="term-name-en">${e.nameEn}</span>
      <p class="term-definition">${e.definitionAr}</p>

      ${e.formula?`
        <div class="term-formula-strip">
          <span class="formula-label"><i class="fa-solid fa-function"></i> الصيغة الرياضية:</span>
          <code class="formula-math">${e.formula}</code>
        </div>
      `:""}

      <div class="term-example-box">
        <strong>مثال تطبيقي:</strong> ${e.exampleAr}
      </div>
    </div>
  `).join("")}function tM(r){switch(r){case"financial":return"مالية واقتصادية";case"methodology":return"منهجية MEDDIC";case"pipeline":return"مسار الصفقات";case"strategy":return"استراتيجية وتفاوض";default:return"عام"}}function eM(){const r=document.querySelectorAll("#glossaryFilterPills .filter-pill");r.forEach(e=>{e.addEventListener("click",()=>{Ne(),r.forEach(n=>n.classList.remove("active")),e.classList.add("active"),sc=e.getAttribute("data-category")||"all",ac()})}),document.getElementById("glossarySearchInput")?.addEventListener("input",e=>{Lr=e.target.value.trim(),ac()})}function nM(){const r=document.getElementById("eduTooltipModal"),t=document.getElementById("eduTooltipBackdrop"),e=document.getElementById("eduTooltipCloseBtn"),n=document.getElementById("eduTooltipTitle"),i=document.getElementById("eduTooltipDesc"),s=document.getElementById("eduTooltipTip"),a=()=>{Ne(),r?.classList.remove("show"),r?.setAttribute("aria-hidden","true")};e?.addEventListener("click",a),t?.addEventListener("click",a),document.querySelectorAll(".edu-info-btn").forEach(l=>{l.addEventListener("click",c=>{c.stopPropagation(),Ne();const h=l.getAttribute("data-info");if(!h)return;const u=By[h];u&&(n&&(n.textContent=u.titleAr),i&&(i.textContent=u.descAr),s&&(s.textContent=u.tipAr),r?.classList.add("show"),r?.setAttribute("aria-hidden","false"))})})}
