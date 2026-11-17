(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=128,t=64,n=8192,r=12,i=`#version 300 es
precision highp float;
out vec2 vUv;
void main() {
  vec2 pos = vec2(
    float((gl_VertexID & 1) << 2) - 1.0,
    float((gl_VertexID & 2) << 1) - 1.0
  );
  vUv = pos * 0.5 + 0.5;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`,a=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTexture;
uniform float uValue;
out vec4 outColor;
void main() {
  outColor = uValue * texture(uTexture, vUv);
}
`,o=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uTarget;
uniform sampler2D uObstacles;
uniform float uAspect;
uniform vec2 uPoint;
uniform vec3 uValue;
uniform float uRadius;
uniform int uCheckObstacle;
out vec4 outColor;
void main() {
  if (uCheckObstacle == 1 && texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  float splat = exp(-dot(p, p) / max(uRadius, 1e-6));
  vec3 base = texture(uTarget, vUv).xyz;
  outColor = vec4(base + splat * uValue, 1.0);
}
`,s=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uObstacles;
uniform float uAspect;
uniform vec2 uPoint;
uniform float uRadius;
uniform float uErase;
out vec4 outColor;
void main() {
  float current = texture(uObstacles, vUv).r;
  vec2 p = vUv - uPoint;
  p.x *= uAspect;
  float dist = length(p);
  if (dist < uRadius) {
    current = uErase > 0.5 ? 0.0 : 1.0;
  }
  outColor = vec4(current, 0.0, 0.0, 1.0);
}
`,c=`#version 300 es
precision highp float;
in vec2 vUv;
uniform float uAspect;
uniform int uPreset; // 0 = cylinder, 1 = airfoil, 2 = twin_cylinders
out vec4 outColor;

float sdAirfoil(vec2 p) {
  // Rotate -9 degrees angle of attack
  float a = 0.16;
  mat2 rot = mat2(cos(a), -sin(a), sin(a), cos(a));
  p = rot * p;
  float chord = 0.24;
  float x = (p.x + chord * 0.45) / chord;
  if (x < 0.0 || x > 1.0) return 1.0;
  // NACA 0018 symmetric thickness distribution
  float yt = 0.9 * 0.18 * (0.2969 * sqrt(max(x, 0.0)) - 0.1260 * x - 0.3516 * x * x + 0.2843 * x * x * x - 0.1015 * x * x * x * x);
  return abs(p.y) - yt * chord * 1.4;
}

void main() {
  vec2 p = vUv - vec2(0.28, 0.5);
  p.x *= uAspect;
  float solid = 0.0;
  if (uPreset == 0) {
    if (length(p) < 0.068) solid = 1.0;
  } else if (uPreset == 1) {
    if (sdAirfoil(p) < 0.0) solid = 1.0;
  } else {
    vec2 p1 = vUv - vec2(0.27, 0.38);
    p1.x *= uAspect;
    vec2 p2 = vUv - vec2(0.27, 0.62);
    p2.x *= uAspect;
    if (length(p1) < 0.052 || length(p2) < 0.052) solid = 1.0;
  }
  outColor = vec4(solid, 0.0, 0.0, 1.0);
}
`,l=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform vec2 uTexelSize;
out vec4 outColor;
void main() {
  float L = texture(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).y;
  float R = texture(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).y;
  float T = texture(uVelocity, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture(uVelocity, vUv - vec2(0.0, uTexelSize.y)).x;
  float vorticity = 0.5 * ((R - L) - (T - B));
  outColor = vec4(vorticity, 0.0, 0.0, 1.0);
}
`,u=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
uniform float uCurlStrength;
uniform float uDt;
out vec4 outColor;
void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  float L = abs(texture(uCurl, vUv - vec2(uTexelSize.x, 0.0)).x);
  float R = abs(texture(uCurl, vUv + vec2(uTexelSize.x, 0.0)).x);
  float T = abs(texture(uCurl, vUv + vec2(0.0, uTexelSize.y)).x);
  float B = abs(texture(uCurl, vUv - vec2(0.0, uTexelSize.y)).x);
  float C = texture(uCurl, vUv).x;

  vec2 force = 0.5 * vec2(T - B, L - R);
  force /= (length(force) + 1e-4);
  force *= uCurlStrength * C;

  vec2 vel = texture(uVelocity, vUv).xy;
  vel += force * uDt;
  outColor = vec4(vel, 0.0, 1.0);
}
`,d=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uObstacles;
uniform int uMode; // 0=plasma, 1=ferrofluid, 2=karman, 3=plankton
uniform float uDt;
uniform float uTime;
uniform float uWindJet;
uniform float uAutoDemo;
uniform int uMagnetCount;
uniform vec4 uMagnets[${r}];
out vec4 outColor;

void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }

  vec2 vel = texture(uVelocity, vUv).xy;

  // Global Wind / Gravity Jet
  vel.x += uWindJet * 1.4 * uDt;

  // Mode 2: Karman Wind Tunnel Left Boundary Inflow
  if (uMode == 2) {
    if (vUv.x < 0.045 && vUv.y > 0.03 && vUv.y < 0.97) {
      float targetVx = 1.95 + max(uWindJet, -0.8) * 1.1;
      float perturbation = 0.05 * sin(uTime * 3.1 + vUv.y * 24.0);
      vel = mix(vel, vec2(targetVx, perturbation), 0.72);
    }
    // Top/bottom no-slip channel walls
    if (vUv.y < 0.02 || vUv.y > 0.98) {
      vel *= 0.2;
    }
  }

  // Mode 1: Ferrofluid Magnetic Dipole Kelvin & Lorentz Forces
  if (uMode == 1) {
    for (int i = 0; i < ${r}; i++) {
      if (i >= uMagnetCount) break;
      vec4 m = uMagnets[i];
      vec2 d = m.xy - vUv;
      float dist2 = dot(d, d) + 0.0028;
      float dist = sqrt(dist2);
      // Kelvin magnetic gradient pull/push + swirling dipole instability
      float falloff = exp(-dist2 / max(m.w * m.w * 2.2, 0.003));
      vec2 radial = d / dist;
      vec2 tangent = vec2(-radial.y, radial.x);
      float spikeWave = sin(atan(d.y, d.x) * 9.0 + uTime * 3.0) * 0.45;
      vel += (radial * (m.z * 3.6 + spikeWave * abs(m.z)) + tangent * (m.z * 0.95)) * falloff * uDt;
    }
  }

  // Auto-Turbulence Demo stirrers for Plasma / Plankton
  if (uAutoDemo > 0.5 && (uMode == 0 || uMode == 3)) {
    vec2 c1 = vec2(0.5 + 0.26 * cos(uTime * 0.85), 0.5 + 0.22 * sin(uTime * 1.3));
    vec2 c2 = vec2(0.5 + 0.28 * sin(uTime * 0.72 + 2.1), 0.5 + 0.24 * cos(uTime * 1.05));
    vec2 d1 = vUv - c1;
    vec2 d2 = vUv - c2;
    float e1 = exp(-dot(d1, d1) / 0.0022);
    float e2 = exp(-dot(d2, d2) / 0.0022);
    vel += vec2(-sin(uTime * 1.3), cos(uTime * 0.85)) * 2.8 * e1 * uDt;
    vel += vec2(cos(uTime * 1.05), -sin(uTime * 0.72 + 2.1)) * 2.8 * e2 * uDt;
  }

  outColor = vec4(clamp(vel, vec2(-12.0), vec2(12.0)), 0.0, 1.0);
}
`,f=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uDye;
uniform sampler2D uObstacles;
uniform int uMode;
uniform float uTime;
uniform float uAutoDemo;
uniform int uMagnetCount;
uniform vec4 uMagnets[${r}];
out vec4 outColor;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  vec3 dye = texture(uDye, vUv).rgb;

  // Karman Wind Tunnel striped inflow ribbons
  if (uMode == 2 && vUv.x < 0.032 && vUv.y > 0.05 && vUv.y < 0.95) {
    float band = sin(vUv.y * 54.0);
    if (band > 0.25) {
      vec3 c1 = vec3(0.05, 0.82, 0.95);
      vec3 c2 = vec3(0.58, 0.35, 0.98);
      vec3 c3 = vec3(0.98, 0.65, 0.12);
      float sel = fract(vUv.y * 4.5);
      vec3 ribbon = sel < 0.33 ? c1 : (sel < 0.66 ? c2 : c3);
      dye = max(dye, ribbon * 0.95);
    }
  }

  // Ferrofluid carrier pool near magnetic poles so spikes stay lush
  if (uMode == 1) {
    for (int i = 0; i < ${r}; i++) {
      if (i >= uMagnetCount) break;
      vec4 m = uMagnets[i];
      vec2 d = vUv - m.xy;
      float pool = exp(-dot(d, d) / max(m.w * m.w * 0.65, 0.003));
      dye = max(dye, vec3(0.75, 0.82, 0.95) * pool * 0.65);
    }
  }

  // Auto-Demo Plasma / Plankton dye injection
  if (uAutoDemo > 0.5 && (uMode == 0 || uMode == 3)) {
    vec2 c1 = vec2(0.5 + 0.26 * cos(uTime * 0.85), 0.5 + 0.22 * sin(uTime * 1.3));
    vec2 c2 = vec2(0.5 + 0.28 * sin(uTime * 0.72 + 2.1), 0.5 + 0.24 * cos(uTime * 1.05));
    float s1 = exp(-dot(vUv - c1, vUv - c1) / 0.00055);
    float s2 = exp(-dot(vUv - c2, vUv - c2) / 0.00055);
    if (uMode == 0) {
      vec3 col1 = hsv2rgb(vec3(fract(uTime * 0.08), 0.88, 1.0));
      vec3 col2 = hsv2rgb(vec3(fract(uTime * 0.08 + 0.5), 0.88, 1.0));
      dye += col1 * s1 * 0.45 + col2 * s2 * 0.45;
    } else {
      dye += vec3(0.02, 0.35, 0.55) * (s1 + s2) * 0.28;
    }
  }

  outColor = vec4(min(dye, vec3(3.5)), 1.0);
}
`,p=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
uniform float uDt;
uniform float uDissipation;
uniform int uMode;
out vec4 outColor;
void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  vec2 vel = texture(uVelocity, vUv).xy;
  vec2 coord = vUv - uDt * vel * uTexelSize * 85.0;
  if (uMode == 2) {
    coord.x = max(coord.x, 0.0);
  }
  vec4 result = uDissipation * texture(uSource, clamp(coord, vec2(0.001), vec2(0.999)));
  outColor = result;
}
`,m=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
out vec4 outColor;
void main() {
  float L = texture(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture(uVelocity, vUv + vec2(0.0, uTexelSize.y)).y;
  float B = texture(uVelocity, vUv - vec2(0.0, uTexelSize.y)).y;

  vec2 C = texture(uVelocity, vUv).xy;
  if (texture(uObstacles, vUv - vec2(uTexelSize.x, 0.0)).r > 0.5) L = -C.x;
  if (texture(uObstacles, vUv + vec2(uTexelSize.x, 0.0)).r > 0.5) R = -C.x;
  if (texture(uObstacles, vUv + vec2(0.0, uTexelSize.y)).r > 0.5) T = -C.y;
  if (texture(uObstacles, vUv - vec2(0.0, uTexelSize.y)).r > 0.5) B = -C.y;

  float div = 0.5 * (R - L + T - B);
  outColor = vec4(div, 0.0, 0.0, 1.0);
}
`,h=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
out vec4 outColor;
void main() {
  float C = texture(uPressure, vUv).x;
  float L = texture(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;

  // Neumann boundary condition on obstacle faces
  if (texture(uObstacles, vUv - vec2(uTexelSize.x, 0.0)).r > 0.5) L = C;
  if (texture(uObstacles, vUv + vec2(uTexelSize.x, 0.0)).r > 0.5) R = C;
  if (texture(uObstacles, vUv + vec2(0.0, uTexelSize.y)).r > 0.5) T = C;
  if (texture(uObstacles, vUv - vec2(0.0, uTexelSize.y)).r > 0.5) B = C;

  float div = texture(uDivergence, vUv).x;
  float pressure = (L + R + B + T - div) * 0.25;
  outColor = vec4(pressure, 0.0, 0.0, 1.0);
}
`,g=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
uniform float uAlpha;
uniform float uRbeta;
out vec4 outColor;
void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  vec2 C = texture(uVelocity, vUv).xy;
  vec2 L = texture(uVelocity, vUv - vec2(uTexelSize.x, 0.0)).xy;
  vec2 R = texture(uVelocity, vUv + vec2(uTexelSize.x, 0.0)).xy;
  vec2 T = texture(uVelocity, vUv + vec2(0.0, uTexelSize.y)).xy;
  vec2 B = texture(uVelocity, vUv - vec2(0.0, uTexelSize.y)).xy;
  vec2 diffused = (L + R + B + T + uAlpha * C) * uRbeta;
  outColor = vec4(diffused, 0.0, 1.0);
}
`,_=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;
uniform sampler2D uObstacles;
uniform vec2 uTexelSize;
out vec4 outColor;
void main() {
  if (texture(uObstacles, vUv).r > 0.5) {
    outColor = vec4(0.0);
    return;
  }
  float C = texture(uPressure, vUv).x;
  float L = texture(uPressure, vUv - vec2(uTexelSize.x, 0.0)).x;
  float R = texture(uPressure, vUv + vec2(uTexelSize.x, 0.0)).x;
  float T = texture(uPressure, vUv + vec2(0.0, uTexelSize.y)).x;
  float B = texture(uPressure, vUv - vec2(0.0, uTexelSize.y)).x;

  if (texture(uObstacles, vUv - vec2(uTexelSize.x, 0.0)).r > 0.5) L = C;
  if (texture(uObstacles, vUv + vec2(uTexelSize.x, 0.0)).r > 0.5) R = C;
  if (texture(uObstacles, vUv + vec2(0.0, uTexelSize.y)).r > 0.5) T = C;
  if (texture(uObstacles, vUv - vec2(0.0, uTexelSize.y)).r > 0.5) B = C;

  vec2 vel = texture(uVelocity, vUv).xy;
  vel -= 0.5 * vec2(R - L, T - B);
  outColor = vec4(vel, 0.0, 1.0);
}
`,v=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uParticles;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform sampler2D uObstacles;
uniform vec2 uSimTexel;
uniform float uDt;
uniform float uTime;
uniform int uMode;
uniform float uBiolumSens;
out vec4 outColor;

float hash12(vec2 p) {
  vec3 p3  = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec4 p = texelFetch(uParticles, ivec2(gl_FragCoord.xy), 0);
  vec2 pos = p.xy;
  float energy = p.z;
  float life = p.w;

  // RK2 Midpoint Advection
  vec2 v1 = texture(uVelocity, pos).xy;
  vec2 scale = uSimTexel * 85.0;
  vec2 mid = clamp(pos + 0.5 * uDt * v1 * scale, vec2(0.002), vec2(0.998));
  vec2 v2 = texture(uVelocity, mid).xy;
  pos += uDt * v2 * scale;

  // Compute local Shear Rate + Curl for bioluminescent excitation
  vec2 vL = texture(uVelocity, pos - vec2(uSimTexel.x, 0.0)).xy;
  vec2 vR = texture(uVelocity, pos + vec2(uSimTexel.x, 0.0)).xy;
  vec2 vB = texture(uVelocity, pos - vec2(0.0, uSimTexel.y)).xy;
  vec2 vT = texture(uVelocity, pos + vec2(0.0, uSimTexel.y)).xy;
  float shear = length(vR - vL) + length(vT - vB);
  float curlVal = abs(texture(uCurl, pos).x);
  float speed = length(v2);

  float targetEnergy = clamp((shear * 0.9 + curlVal * 0.65 + speed * 0.25) * uBiolumSens, 0.0, 2.0);
  energy = mix(energy * 0.94, targetEnergy, targetEnergy > energy ? 0.42 : 0.08);

  life -= uDt * 0.16;

  bool hitObstacle = texture(uObstacles, pos).r > 0.5;
  bool outOfBounds = pos.x < 0.002 || pos.x > 0.998 || pos.y < 0.002 || pos.y > 0.998;

  if (life <= 0.0 || outOfBounds || hitObstacle) {
    float r1 = hash12(vUv * 123.4 + uTime * 1.13);
    float r2 = hash12(vUv * 456.7 + uTime * 2.71);
    if (uMode == 2) {
      // Wind tunnel respawns cleanly at inlet
      pos = vec2(0.008 + r1 * 0.03, 0.04 + r2 * 0.92);
    } else {
      pos = vec2(0.02 + r1 * 0.96, 0.02 + r2 * 0.96);
    }
    energy = 0.08;
    life = 0.5 + 0.5 * hash12(vUv * 789.1 + uTime);
  }

  outColor = vec4(pos, energy, life);
}
`,y=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
out vec4 outColor;
void main() {
  vec2 vel = texture(uVelocity, vUv).xy;
  float speed = length(vel);
  float curl = abs(texture(uCurl, vUv).x);
  float ke = 0.5 * dot(vel, vel);
  outColor = vec4(
    clamp(speed / 6.0, 0.0, 1.0),
    clamp(curl / 4.0, 0.0, 1.0),
    clamp(ke / 12.0, 0.0, 1.0),
    1.0
  );
}
`,b=`#version 300 es
precision highp float;
in vec2 vUv;
uniform sampler2D uDye;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform sampler2D uObstacles;
uniform vec2 uDyeTexel;
uniform vec2 uSimTexel;
uniform float uAspect;
uniform float uTime;
uniform int uMode;
uniform float uMagneticGain;
uniform int uMagnetCount;
uniform vec4 uMagnets[${r}];
out vec4 outColor;

float ferroHeight(vec2 uv) {
  vec3 d = texture(uDye, uv).rgb;
  float density = clamp(dot(d, vec3(0.333)), 0.0, 1.4);
  float field = 0.0;
  float spikePattern = 0.0;

  for (int i = 0; i < ${r}; i++) {
    if (i >= uMagnetCount) break;
    vec4 m = uMagnets[i];
    vec2 diff = uv - m.xy;
    diff.x *= uAspect;
    float dist = length(diff);
    float infl = exp(-(dist * dist) / max(m.w * m.w * 0.9, 0.0025));
    field += abs(m.z) * infl;

    // Rosensweig hexagonal normal-field instability spikes
    float angle = atan(diff.y, diff.x);
    float freq = 115.0 + 35.0 * abs(m.z);
    float ring = cos(dist * freq - uTime * 2.2 * sign(m.z));
    float petals = cos(angle * 10.0 + sin(dist * 40.0 + uTime));
    float hex = 0.5 + 0.5 * ring * (0.65 + 0.35 * petals);
    spikePattern += pow(hex, 2.2) * infl * abs(m.z);
  }

  float curlMod = abs(texture(uCurl, uv).x) * 0.14;
  return density * 0.45 + field * 0.5 + spikePattern * uMagneticGain * (0.35 + density * 0.9) + curlMod;
}

void main() {
  float obs = texture(uObstacles, vUv).r;
  vec3 dye = texture(uDye, vUv).rgb;
  vec2 vel = texture(uVelocity, vUv).xy;
  float speed = length(vel);
  float curl = texture(uCurl, vUv).x;

  vec3 col = vec3(0.015, 0.025, 0.052);

  if (uMode == 0) {
    // Mode 0: Neon Plasma Advection
    float glow = dot(dye, vec3(0.333));
    vec3 plasmaBoost = vec3(0.04, 0.18, 0.32) * smoothstep(0.0, 2.2, speed) * 0.45;
    col += dye * 1.15 + plasmaBoost + vec3(0.18, 0.06, 0.35) * smoothstep(0.5, 2.5, abs(curl)) * glow * 0.4;
  } else if (uMode == 1) {
    // Mode 1: Ferrofluid Magnetic Spikes (PBR Liquid Obsidian + Chrome Specular)
    vec2 eps = uDyeTexel * 2.2;
    float hL = ferroHeight(vUv - vec2(eps.x, 0.0));
    float hR = ferroHeight(vUv + vec2(eps.x, 0.0));
    float hB = ferroHeight(vUv - vec2(0.0, eps.y));
    float hT = ferroHeight(vUv + vec2(0.0, eps.y));
    float hC = ferroHeight(vUv);

    vec3 normal = normalize(vec3((hL - hR) * 3.4, (hB - hT) * 3.4, 0.18));
    vec3 viewDir = vec3(0.0, 0.0, 1.0);
    vec3 light1 = normalize(vec3(-0.6, 0.7, 0.85));
    vec3 light2 = normalize(vec3(0.75, -0.45, 0.6));

    vec3 half1 = normalize(light1 + viewDir);
    vec3 half2 = normalize(light2 + viewDir);
    float spec1 = pow(max(dot(normal, half1), 0.0), 84.0);
    float spec2 = pow(max(dot(normal, half2), 0.0), 48.0);
    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.2);

    float metalMask = smoothstep(0.06, 0.42, hC);
    vec3 obsidian = vec3(0.015, 0.02, 0.032);
    vec3 silverRim = vec3(0.78, 0.9, 1.0) * fresnel * 0.85;
    vec3 ferroCol = obsidian
      + vec3(0.9, 0.96, 1.0) * spec1 * 1.65
      + vec3(0.35, 0.72, 0.98) * spec2 * 0.75
      + silverRim;

    // Subtle metallic studio floor
    vec3 studioBg = vec3(0.035, 0.045, 0.075) + vec3(0.02, 0.03, 0.05) * (1.0 - length(vUv - 0.5));
    col = mix(studioBg, ferroCol, metalMask);

    // Render magnetic dipole indicators
    for (int i = 0; i < ${r}; i++) {
      if (i >= uMagnetCount) break;
      vec4 m = uMagnets[i];
      vec2 d = vUv - m.xy;
      d.x *= uAspect;
      float dist = length(d);
      float ring = smoothstep(0.004, 0.0, abs(dist - 0.024));
      float core = smoothstep(0.01, 0.0, dist);
      vec3 poleCol = m.z >= 0.0 ? vec3(0.04, 0.85, 0.98) : vec3(0.95, 0.45, 0.12);
      col += poleCol * (ring * 0.9 + core * 1.1);
    }
  } else if (uMode == 2) {
    // Mode 2: Karman Vortex Street & Wind Tunnel
    float vortPos = clamp(curl * 0.35, 0.0, 1.0);
    float vortNeg = clamp(-curl * 0.35, 0.0, 1.0);
    vec3 vortTint = vec3(0.02, 0.65, 0.95) * vortPos + vec3(0.96, 0.36, 0.45) * vortNeg;
    col += dye * 0.95 + vortTint * 0.55;
    // Subtle wind-tunnel grid lines
    float grid = step(0.985, fract(vUv.y * 12.0)) * 0.05;
    col += vec3(0.08, 0.2, 0.35) * grid;
  } else {
    // Mode 3: Bioluminescent Plankton Abyss
    vec3 abyss = vec3(0.006, 0.015, 0.038);
    float currentGlow = smoothstep(0.05, 1.8, abs(curl) + speed * 0.35);
    col = abyss + dye * 0.6 + vec3(0.01, 0.14, 0.28) * currentGlow;
  }

  // Render crisp solid obstacles
  if (obs > 0.5) {
    float edge = 0.0;
    edge += 1.0 - texture(uObstacles, vUv + vec2(uDyeTexel.x * 2.0, 0.0)).r;
    edge += 1.0 - texture(uObstacles, vUv - vec2(uDyeTexel.x * 2.0, 0.0)).r;
    edge += 1.0 - texture(uObstacles, vUv + vec2(0.0, uDyeTexel.y * 2.0)).r;
    edge += 1.0 - texture(uObstacles, vUv - vec2(0.0, uDyeTexel.y * 2.0)).r;
    vec3 solidBody = vec3(0.07, 0.1, 0.17);
    vec3 solidRim = vec3(0.22, 0.85, 0.98) * clamp(edge, 0.0, 1.0) * 0.85;
    col = solidBody + solidRim;
  }

  // Tone mapping
  col = col / (1.0 + col * 0.25);
  outColor = vec4(col, 1.0);
}
`,x=`#version 300 es
precision highp float;
precision highp int;
uniform sampler2D uParticles;
uniform float uPointScale;
uniform int uMode;
out float vEnergy;
out float vLife;

void main() {
  int id = gl_VertexID;
  ivec2 coord = ivec2(id % ${e}, id / ${e});
  vec4 p = texelFetch(uParticles, coord, 0);
  vEnergy = p.z;
  vLife = p.w;

  gl_Position = vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
  float baseSize = (uMode == 3) ? 2.6 : 1.9;
  gl_PointSize = (baseSize + clamp(p.z, 0.0, 1.5) * 3.2) * uPointScale;
}
`,S=`#version 300 es
precision highp float;
precision highp int;
in float vEnergy;
in float vLife;
uniform int uMode;
out vec4 outColor;

void main() {
  vec2 d = gl_PointCoord - vec2(0.5);
  float r2 = dot(d, d);
  if (r2 > 0.25) discard;
  float alpha = exp(-r2 * 14.0) * smoothstep(0.0, 0.15, vLife);

  vec3 col;
  if (uMode == 3) {
    // Bioluminescent Plankton: Deep pelagic blue -> Electric Cyan -> Bright Aqua Spark
    float e = clamp(vEnergy, 0.0, 1.4);
    vec3 calm = vec3(0.03, 0.18, 0.55);
    vec3 mid = vec3(0.02, 0.72, 0.92);
    vec3 peak = vec3(0.45, 0.98, 1.0);
    col = e < 0.5 ? mix(calm, mid, e * 2.0) : mix(mid, peak, (e - 0.5) * 1.1);
    alpha *= (0.28 + 0.72 * clamp(e, 0.0, 1.0));
  } else if (uMode == 1) {
    // Ferrofluid subtle silver-cyan flux tracers
    col = vec3(0.45, 0.85, 1.0);
    alpha *= 0.22 * clamp(vEnergy + 0.2, 0.0, 1.0);
  } else if (uMode == 2) {
    // Wind tunnel streamlines
    col = mix(vec3(0.25, 0.85, 0.98), vec3(0.98, 0.75, 0.25), clamp(vEnergy, 0.0, 1.0));
    alpha *= 0.45;
  } else {
    // Neon Plasma tracer sparks
    col = mix(vec3(0.35, 0.75, 1.0), vec3(0.95, 0.45, 1.0), clamp(vEnergy * 0.7, 0.0, 1.0));
    alpha *= 0.38;
  }

  outColor = vec4(col * alpha, alpha);
}
`,C=class{backendLabel=`WebGL2 Ping-Pong FBO`;particleCount=n;canvas;gl;simW=256;simH=144;dyeW=1024;dyeH=576;velocity;dye;pressure;obstacles;particles;divergence;curl;telemetryFBO;programs={};uniforms={};emptyVAO;time=0;frameCounter=0;fps=60;lastFpsTime=performance.now();fpsFrames=0;telemetryBuf=new Uint8Array(4096);telemetryPBOs=[null,null];telemetryPboIdx=0;telemetrySync=null;telemetryPendingIdx=0;lastTelemetry={fps:60,reynoldsNumber:1200,peakVorticity:0,kineticEnergy:0,turbulenceRatio:.15,particleCount:n,backendLabel:this.backendLabel};useFloat32Particles=!1;floatTexType;constructor(e){this.canvas=e;let t=e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0});if(!t)throw Error(`WebGL2 unavailable`);this.gl=t;let n=t.getExtension(`EXT_color_buffer_float`),r=t.getExtension(`EXT_color_buffer_half_float`);if(t.getExtension(`OES_texture_float_linear`),!n&&!r)throw Error(`Floating-point FBO rendering unsupported`);this.useFloat32Particles=!!n,this.floatTexType=t.HALF_FLOAT,this.emptyVAO=t.createVertexArray();for(let e=0;e<2;e++){let n=t.createBuffer();t.bindBuffer(t.PIXEL_PACK_BUFFER,n),t.bufferData(t.PIXEL_PACK_BUFFER,4096,t.DYNAMIC_READ),this.telemetryPBOs[e]=n}t.bindBuffer(t.PIXEL_PACK_BUFFER,null),this.compileAllPrograms(),this.initDimensions(e.width||1280,e.height||720),this.initFramebuffers(),this.seedParticles()}compileShader(e,t){let n=this.gl,r=n.createShader(e);if(n.shaderSource(r,t),n.compileShader(r),!n.getShaderParameter(r,n.COMPILE_STATUS)){let e=n.getShaderInfoLog(r);throw n.deleteShader(r),Error(`Shader compile error: ${e}`)}return r}createProgram(e,t,n,r){let i=this.gl,a=this.compileShader(i.VERTEX_SHADER,t),o=this.compileShader(i.FRAGMENT_SHADER,n),s=i.createProgram();if(i.attachShader(s,a),i.attachShader(s,o),i.linkProgram(s),i.deleteShader(a),i.deleteShader(o),!i.getProgramParameter(s,i.LINK_STATUS))throw Error(`Program link error (${e}): ${i.getProgramInfoLog(s)}`);this.programs[e]=s;let c={};for(let e of r)c[e]=i.getUniformLocation(s,e);this.uniforms[e]=c}compileAllPrograms(){this.gl;let e=Array.from({length:r},(e,t)=>`uMagnets[${t}]`);this.createProgram(`clear`,i,a,[`uTexture`,`uValue`]),this.createProgram(`splat`,i,o,[`uTarget`,`uObstacles`,`uAspect`,`uPoint`,`uValue`,`uRadius`,`uCheckObstacle`]),this.createProgram(`obstacleBrush`,i,s,[`uObstacles`,`uAspect`,`uPoint`,`uRadius`,`uErase`]),this.createProgram(`obstaclePreset`,i,c,[`uAspect`,`uPreset`]),this.createProgram(`curl`,i,l,[`uVelocity`,`uTexelSize`]),this.createProgram(`vorticity`,i,u,[`uVelocity`,`uCurl`,`uObstacles`,`uTexelSize`,`uCurlStrength`,`uDt`]),this.createProgram(`forces`,i,d,[`uVelocity`,`uObstacles`,`uMode`,`uDt`,`uTime`,`uWindJet`,`uAutoDemo`,`uMagnetCount`,...e]),this.createProgram(`dyeInject`,i,f,[`uDye`,`uObstacles`,`uMode`,`uTime`,`uAutoDemo`,`uMagnetCount`,...e]),this.createProgram(`advect`,i,p,[`uVelocity`,`uSource`,`uObstacles`,`uTexelSize`,`uDt`,`uDissipation`,`uMode`]),this.createProgram(`divergence`,i,m,[`uVelocity`,`uObstacles`,`uTexelSize`]),this.createProgram(`jacobi`,i,h,[`uPressure`,`uDivergence`,`uObstacles`,`uTexelSize`]),this.createProgram(`viscous`,i,g,[`uVelocity`,`uObstacles`,`uTexelSize`,`uAlpha`,`uRbeta`]),this.createProgram(`gradSub`,i,_,[`uPressure`,`uVelocity`,`uObstacles`,`uTexelSize`]),this.createProgram(`particleAdvect`,i,v,[`uParticles`,`uVelocity`,`uCurl`,`uObstacles`,`uSimTexel`,`uDt`,`uTime`,`uMode`,`uBiolumSens`]),this.createProgram(`telemetry`,i,y,[`uVelocity`,`uCurl`]),this.createProgram(`display`,i,b,[`uDye`,`uVelocity`,`uCurl`,`uObstacles`,`uDyeTexel`,`uSimTexel`,`uAspect`,`uTime`,`uMode`,`uMagneticGain`,`uMagnetCount`,...e]),this.createProgram(`particleRender`,x,S,[`uParticles`,`uPointScale`,`uMode`])}initDimensions(e,t){let n=Math.max(.5,Math.min(2.5,e/Math.max(t,1)));n>=1?(this.simW=256,this.simH=Math.max(128,Math.round(256/n)),this.dyeW=1024,this.dyeH=Math.max(512,Math.round(1024/n))):(this.simH=256,this.simW=Math.max(128,Math.round(256*n)),this.dyeH=1024,this.dyeW=Math.max(512,Math.round(1024*n)))}createFBO(e,t,n,r,i,a,o=null){let s=this.gl,c=s.createTexture();s.bindTexture(s.TEXTURE_2D,c),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,a),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,n,e,t,0,r,i,o);let l=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,l),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,c,0);let u=s.checkFramebufferStatus(s.FRAMEBUFFER);if(u!==s.FRAMEBUFFER_COMPLETE)throw Error(`Incomplete FBO status: ${u}`);return s.viewport(0,0,e,t),o||(s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT)),{texture:c,fbo:l,width:e,height:t,attach(e){return s.activeTexture(s.TEXTURE0+e),s.bindTexture(s.TEXTURE_2D,c),e}}}createDoubleFBO(e,t,n,r,i,a){let o=this.createFBO(e,t,n,r,i,a),s=this.createFBO(e,t,n,r,i,a);return{width:e,height:t,get read(){return o},get write(){return s},swap(){let e=o;o=s,s=e}}}initFramebuffers(){let n=this.gl;this.velocity=this.createDoubleFBO(this.simW,this.simH,n.RGBA16F,n.RGBA,this.floatTexType,n.LINEAR),this.pressure=this.createDoubleFBO(this.simW,this.simH,n.RGBA16F,n.RGBA,this.floatTexType,n.NEAREST),this.divergence=this.createFBO(this.simW,this.simH,n.RGBA16F,n.RGBA,this.floatTexType,n.NEAREST),this.curl=this.createFBO(this.simW,this.simH,n.RGBA16F,n.RGBA,this.floatTexType,n.LINEAR),this.dye=this.createDoubleFBO(this.dyeW,this.dyeH,n.RGBA16F,n.RGBA,this.floatTexType,n.LINEAR),this.obstacles=this.createDoubleFBO(this.dyeW,this.dyeH,n.RGBA8,n.RGBA,n.UNSIGNED_BYTE,n.NEAREST),this.telemetryFBO=this.createFBO(32,32,n.RGBA8,n.RGBA,n.UNSIGNED_BYTE,n.NEAREST),this.particles=this.useFloat32Particles?this.createDoubleFBO(e,t,n.RGBA32F,n.RGBA,n.FLOAT,n.NEAREST):this.createDoubleFBO(e,t,n.RGBA16F,n.RGBA,this.floatTexType,n.NEAREST)}seedParticles(){let r=this.gl,i=n;if(this.useFloat32Particles){let n=new Float32Array(i*4);for(let e=0;e<i;e++)n[e*4+0]=Math.random(),n[e*4+1]=Math.random(),n[e*4+2]=.08+Math.random()*.15,n[e*4+3]=.2+Math.random()*.8;r.bindTexture(r.TEXTURE_2D,this.particles.read.texture),r.texSubImage2D(r.TEXTURE_2D,0,0,0,e,t,r.RGBA,r.FLOAT,n)}else r.bindFramebuffer(r.FRAMEBUFFER,this.particles.read.fbo),r.clearColor(.5,.5,.1,0),r.clear(r.COLOR_BUFFER_BIT)}blit(e,t,n){let r=this.gl;e?(r.bindFramebuffer(r.FRAMEBUFFER,e.fbo),r.viewport(0,0,e.width,e.height)):(r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t??this.canvas.width,n??this.canvas.height)),r.bindVertexArray(this.emptyVAO),r.drawArrays(r.TRIANGLES,0,3)}modeToInt(e){return e===`plasma`?0:e===`ferrofluid`?1:e===`karman`?2:3}uploadMagnets(e,t){let n=this.gl,i=this.uniforms[e],a=Math.min(t.length,r);n.uniform1i(i.uMagnetCount,a);for(let e=0;e<a;e++){let r=t[e];n.uniform4f(i[`uMagnets[${e}]`],r.x,r.y,r.strength,r.radius)}}resize(e,t){e<=0||t<=0||(this.canvas.width=e,this.canvas.height=t)}splat(e,t,n,r,i,a){let o=this.gl,s=this.canvas.width/Math.max(this.canvas.height,1);o.useProgram(this.programs.splat);let c=this.uniforms.splat;o.uniform1f(c.uAspect,s),o.uniform2f(c.uPoint,e,t),o.uniform1f(c.uRadius,a),o.uniform1i(c.uObstacles,this.obstacles.read.attach(1)),o.uniform1i(c.uCheckObstacle,1),o.uniform1i(c.uTarget,this.velocity.read.attach(0)),o.uniform3f(c.uValue,n,r,0),this.blit(this.velocity.write),this.velocity.swap(),o.uniform1i(c.uTarget,this.dye.read.attach(0)),o.uniform3f(c.uValue,i[0],i[1],i[2]),this.blit(this.dye.write),this.dye.swap()}drawObstacle(e,t,n,r){let i=this.gl,a=this.canvas.width/Math.max(this.canvas.height,1);i.useProgram(this.programs.obstacleBrush);let o=this.uniforms.obstacleBrush;i.uniform1i(o.uObstacles,this.obstacles.read.attach(0)),i.uniform1f(o.uAspect,a),i.uniform2f(o.uPoint,e,t),i.uniform1f(o.uRadius,n),i.uniform1f(o.uErase,+!!r),this.blit(this.obstacles.write),this.obstacles.swap()}clearObstacles(){let e=this.gl;e.bindFramebuffer(e.FRAMEBUFFER,this.obstacles.read.fbo),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.bindFramebuffer(e.FRAMEBUFFER,this.obstacles.write.fbo),e.clear(e.COLOR_BUFFER_BIT)}applyKarmanPreset(e){let t=this.gl,n=this.canvas.width/Math.max(this.canvas.height,1),r=e===`cylinder`?0:e===`airfoil`?1:2;t.useProgram(this.programs.obstaclePreset);let i=this.uniforms.obstaclePreset;t.uniform1f(i.uAspect,n),t.uniform1i(i.uPreset,r),this.blit(this.obstacles.write),this.obstacles.swap()}burstPulse(e,t,n){for(let r=0;r<12;r++){let i=r/12*Math.PI*2,a=Math.cos(i)*5.2,o=Math.sin(i)*5.2,s=e+Math.cos(i)*.025,c=t+Math.sin(i)*.025,l=n===`ferrofluid`?[.7,.85,1]:n===`plankton`?[.05,.9,1]:r%2==0?[.1,.9,1]:[.85,.3,1];this.splat(s,c,a,o,l,.0018)}}resetField(e){let t=this.gl;for(let e of[this.velocity.read,this.velocity.write,this.dye.read,this.dye.write,this.pressure.read,this.pressure.write])t.bindFramebuffer(t.FRAMEBUFFER,e.fbo),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT);e!==`karman`&&this.clearObstacles(),this.seedParticles()}step(e,t,n){let r=this.gl,i=Math.min(e,.025);this.time+=i,this.frameCounter++;let a=this.modeToInt(t.mode),o=1/this.simW,s=1/this.simH;r.useProgram(this.programs.curl),r.uniform1i(this.uniforms.curl.uVelocity,this.velocity.read.attach(0)),r.uniform2f(this.uniforms.curl.uTexelSize,o,s),this.blit(this.curl),r.useProgram(this.programs.vorticity),r.uniform1i(this.uniforms.vorticity.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.uniforms.vorticity.uCurl,this.curl.attach(1)),r.uniform1i(this.uniforms.vorticity.uObstacles,this.obstacles.read.attach(2)),r.uniform2f(this.uniforms.vorticity.uTexelSize,o,s),r.uniform1f(this.uniforms.vorticity.uCurlStrength,t.vorticity),r.uniform1f(this.uniforms.vorticity.uDt,i),this.blit(this.velocity.write),this.velocity.swap(),r.useProgram(this.programs.forces);let c=this.uniforms.forces;if(r.uniform1i(c.uVelocity,this.velocity.read.attach(0)),r.uniform1i(c.uObstacles,this.obstacles.read.attach(1)),r.uniform1i(c.uMode,a),r.uniform1f(c.uDt,i),r.uniform1f(c.uTime,this.time),r.uniform1f(c.uWindJet,t.windJet),r.uniform1f(c.uAutoDemo,+!!t.autoDemo),this.uploadMagnets(`forces`,n),this.blit(this.velocity.write),this.velocity.swap(),t.viscosity>1e-5){let e=t.viscosity*1800,n=1/Math.max(e*i,1e-4),a=1/(4+n);r.useProgram(this.programs.viscous),r.uniform1i(this.uniforms.viscous.uObstacles,this.obstacles.read.attach(1)),r.uniform2f(this.uniforms.viscous.uTexelSize,o,s),r.uniform1f(this.uniforms.viscous.uAlpha,n),r.uniform1f(this.uniforms.viscous.uRbeta,a);for(let e=0;e<6;e++)r.uniform1i(this.uniforms.viscous.uVelocity,this.velocity.read.attach(0)),this.blit(this.velocity.write),this.velocity.swap()}r.useProgram(this.programs.divergence),r.uniform1i(this.uniforms.divergence.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.uniforms.divergence.uObstacles,this.obstacles.read.attach(1)),r.uniform2f(this.uniforms.divergence.uTexelSize,o,s),this.blit(this.divergence),r.useProgram(this.programs.clear),r.uniform1i(this.uniforms.clear.uTexture,this.pressure.read.attach(0)),r.uniform1f(this.uniforms.clear.uValue,.8),this.blit(this.pressure.write),this.pressure.swap(),r.useProgram(this.programs.jacobi),r.uniform1i(this.uniforms.jacobi.uDivergence,this.divergence.attach(1)),r.uniform1i(this.uniforms.jacobi.uObstacles,this.obstacles.read.attach(2)),r.uniform2f(this.uniforms.jacobi.uTexelSize,o,s);for(let e=0;e<t.jacobiIterations;e++)r.uniform1i(this.uniforms.jacobi.uPressure,this.pressure.read.attach(0)),this.blit(this.pressure.write),this.pressure.swap();r.useProgram(this.programs.gradSub),r.uniform1i(this.uniforms.gradSub.uPressure,this.pressure.read.attach(0)),r.uniform1i(this.uniforms.gradSub.uVelocity,this.velocity.read.attach(1)),r.uniform1i(this.uniforms.gradSub.uObstacles,this.obstacles.read.attach(2)),r.uniform2f(this.uniforms.gradSub.uTexelSize,o,s),this.blit(this.velocity.write),this.velocity.swap(),r.useProgram(this.programs.advect),r.uniform1i(this.uniforms.advect.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.uniforms.advect.uSource,this.velocity.read.attach(0)),r.uniform1i(this.uniforms.advect.uObstacles,this.obstacles.read.attach(1)),r.uniform2f(this.uniforms.advect.uTexelSize,o,s),r.uniform1f(this.uniforms.advect.uDt,i),r.uniform1f(this.uniforms.advect.uDissipation,.996),r.uniform1i(this.uniforms.advect.uMode,a),this.blit(this.velocity.write),this.velocity.swap(),r.useProgram(this.programs.dyeInject);let l=this.uniforms.dyeInject;r.uniform1i(l.uDye,this.dye.read.attach(0)),r.uniform1i(l.uObstacles,this.obstacles.read.attach(1)),r.uniform1i(l.uMode,a),r.uniform1f(l.uTime,this.time),r.uniform1f(l.uAutoDemo,+!!t.autoDemo),this.uploadMagnets(`dyeInject`,n),this.blit(this.dye.write),this.dye.swap(),r.useProgram(this.programs.advect),r.uniform1i(this.uniforms.advect.uVelocity,this.velocity.read.attach(0)),r.uniform1i(this.uniforms.advect.uSource,this.dye.read.attach(1)),r.uniform1i(this.uniforms.advect.uObstacles,this.obstacles.read.attach(2)),r.uniform2f(this.uniforms.advect.uTexelSize,o,s),r.uniform1f(this.uniforms.advect.uDt,i),r.uniform1f(this.uniforms.advect.uDissipation,t.dissipation),r.uniform1i(this.uniforms.advect.uMode,a),this.blit(this.dye.write),this.dye.swap(),r.useProgram(this.programs.particleAdvect);let u=this.uniforms.particleAdvect;r.uniform1i(u.uParticles,this.particles.read.attach(0)),r.uniform1i(u.uVelocity,this.velocity.read.attach(1)),r.uniform1i(u.uCurl,this.curl.attach(2)),r.uniform1i(u.uObstacles,this.obstacles.read.attach(3)),r.uniform2f(u.uSimTexel,o,s),r.uniform1f(u.uDt,i),r.uniform1f(u.uTime,this.time),r.uniform1i(u.uMode,a),r.uniform1f(u.uBiolumSens,t.biolumSensitivity),this.blit(this.particles.write),this.particles.swap(),this.pollOrRequestTelemetry(t)}pollOrRequestTelemetry(e){let t=this.gl;if(this.telemetrySync){let n=t.clientWaitSync(this.telemetrySync,0,0);(n===t.ALREADY_SIGNALED||n===t.CONDITION_SATISFIED)&&(t.bindBuffer(t.PIXEL_PACK_BUFFER,this.telemetryPBOs[this.telemetryPendingIdx]),t.getBufferSubData(t.PIXEL_PACK_BUFFER,0,this.telemetryBuf),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),t.deleteSync(this.telemetrySync),this.telemetrySync=null,this.computeTelemetryFromBuffer(e))}else if(this.frameCounter%10==0){let e=this.telemetryPboIdx;this.telemetryPboIdx=1-this.telemetryPboIdx,this.telemetryPendingIdx=e,t.useProgram(this.programs.telemetry),t.uniform1i(this.uniforms.telemetry.uVelocity,this.velocity.read.attach(0)),t.uniform1i(this.uniforms.telemetry.uCurl,this.curl.attach(1)),this.blit(this.telemetryFBO),t.bindBuffer(t.PIXEL_PACK_BUFFER,this.telemetryPBOs[e]),t.readPixels(0,0,32,32,t.RGBA,t.UNSIGNED_BYTE,0),t.bindBuffer(t.PIXEL_PACK_BUFFER,null),this.telemetrySync=t.fenceSync(t.SYNC_GPU_COMMANDS_COMPLETE,0)}}computeTelemetryFromBuffer(e){let t=0,r=0,i=0,a=1024;for(let e=0;e<a;e++){let n=e*4,a=this.telemetryBuf[n]/255*6,o=this.telemetryBuf[n+1]/255*4,s=this.telemetryBuf[n+2]/255*12;t+=a,i+=s,o>r&&(r=o)}let o=t/a,s=i/a,c=r*18.5,l=Math.max(e.viscosity,4e-5),u=Math.round(o*.25/l),d=Math.min(1,s/2.2);this.lastTelemetry={fps:this.fps,reynoldsNumber:u,peakVorticity:c,kineticEnergy:s,turbulenceRatio:d,particleCount:n,backendLabel:this.backendLabel}}render(e,t){this.updateFps(),this.renderToScreen(e,t,this.canvas.width,this.canvas.height,1)}renderToScreen(e,t,r,i,a){let o=this.gl,s=this.modeToInt(e.mode),c=r/Math.max(i,1);o.disable(o.BLEND),o.useProgram(this.programs.display);let l=this.uniforms.display;o.uniform1i(l.uDye,this.dye.read.attach(0)),o.uniform1i(l.uVelocity,this.velocity.read.attach(1)),o.uniform1i(l.uCurl,this.curl.attach(2)),o.uniform1i(l.uObstacles,this.obstacles.read.attach(3)),o.uniform2f(l.uDyeTexel,1/this.dyeW,1/this.dyeH),o.uniform2f(l.uSimTexel,1/this.simW,1/this.simH),o.uniform1f(l.uAspect,c),o.uniform1f(l.uTime,this.time),o.uniform1i(l.uMode,s),o.uniform1f(l.uMagneticGain,e.magneticGain),this.uploadMagnets(`display`,t),this.blit(null,r,i),o.enable(o.BLEND),o.blendFunc(o.SRC_ALPHA,o.ONE),o.useProgram(this.programs.particleRender);let u=this.uniforms.particleRender;o.uniform1i(u.uParticles,this.particles.read.attach(0)),o.uniform1f(u.uPointScale,a),o.uniform1i(u.uMode,s),o.bindVertexArray(this.emptyVAO),o.drawArrays(o.POINTS,0,n),o.disable(o.BLEND)}updateFps(){this.fpsFrames++;let e=performance.now(),t=e-this.lastFpsTime;t>=450&&(this.fps=Math.round(this.fpsFrames*1e3/t),this.lastTelemetry.fps=this.fps,this.fpsFrames=0,this.lastFpsTime=e)}getTelemetry(){return this.lastTelemetry}export4KSnapshot(e,t){let n=this.canvas.width,r=this.canvas.height,i=3840,a=2160;this.canvas.width=i,this.canvas.height=a,this.renderToScreen(e,t,i,a,2.5);let o=document.createElement(`canvas`);o.width=i,o.height=a;let s=o.getContext(`2d`);s.drawImage(this.canvas,0,0,i,a),s.save(),s.fillStyle=`rgba(6, 9, 19, 0.72)`,s.strokeStyle=`rgba(6, 182, 212, 0.55)`,s.lineWidth=2,s.beginPath(),s.roundRect(2860,2030,930,86,14),s.fill(),s.stroke(),s.fillStyle=`#06b6d4`,s.font=`bold 28px "Fira Code", monospace`,s.fillText(`AETHER-FLUID // NAVIER-STOKES CFD STUDIO (4K)`,2890,2074),s.fillStyle=`#f59e0b`,s.font=`600 22px "Outfit", sans-serif`,s.fillText(`أ. طارق ابوعشي | Tareq Abuashi — Lead Creative Technologist & Systems Architect`,2890,2104),s.restore();let c=o.toDataURL(`image/png`);return this.canvas.width=n,this.canvas.height=r,this.renderToScreen(e,t,n,r,1),c}dispose(){let e=this.gl;for(let t of Object.keys(this.programs))e.deleteProgram(this.programs[t]);this.telemetrySync&&e.deleteSync(this.telemetrySync),e.deleteBuffer(this.telemetryPBOs[0]),e.deleteBuffer(this.telemetryPBOs[1]),e.deleteVertexArray(this.emptyVAO)}},w=128,T=72,E=9216,D=6400,O=class{backendLabel=`Canvas 2D TypedArray Fallback`;particleCount=D;canvas;ctx;offscreen;offCtx;imgData;u=new Float32Array(E);v=new Float32Array(E);uPrev=new Float32Array(E);vPrev=new Float32Array(E);p=new Float32Array(E);div=new Float32Array(E);curl=new Float32Array(E);dyeR=new Float32Array(E);dyeG=new Float32Array(E);dyeB=new Float32Array(E);dyeR0=new Float32Array(E);dyeG0=new Float32Array(E);dyeB0=new Float32Array(E);obstacles=new Uint8Array(E);px=new Float32Array(D);py=new Float32Array(D);pEnergy=new Float32Array(D);pLife=new Float32Array(D);time=0;fps=60;lastFpsTime=performance.now();fpsFrames=0;telemetry={fps:60,reynoldsNumber:1200,peakVorticity:0,kineticEnergy:0,turbulenceRatio:.1,particleCount:D,backendLabel:this.backendLabel};constructor(e){this.canvas=e;let t=e.getContext(`2d`);if(!t)throw Error(`2D Canvas context unavailable`);this.ctx=t,this.offscreen=document.createElement(`canvas`),this.offscreen.width=w,this.offscreen.height=T,this.offCtx=this.offscreen.getContext(`2d`),this.imgData=this.offCtx.createImageData(w,T),this.seedParticles()}idx(e,t){let n=e<0?0:e>=w?127:e;return(t<0?0:t>=T?71:t)*w+n}seedParticles(){for(let e=0;e<D;e++)this.px[e]=Math.random(),this.py[e]=Math.random(),this.pEnergy[e]=.1,this.pLife[e]=.2+Math.random()*.8}resize(e,t){e<=0||t<=0||(this.canvas.width=e,this.canvas.height=t)}splat(e,t,n,r,i,a){let o=e*w,s=(1-t)*T,c=Math.max(2,Math.sqrt(a)*w*1.4),l=c*c,u=Math.max(1,Math.floor(o-c)),d=Math.min(126,Math.ceil(o+c)),f=Math.max(1,Math.floor(s-c)),p=Math.min(70,Math.ceil(s+c));for(let e=f;e<=p;e++)for(let t=u;t<=d;t++){let a=e*w+t;if(this.obstacles[a])continue;let c=(t-o)*(t-o)+(e-s)*(e-s);if(c>l)continue;let u=Math.exp(-c/(l*.35));this.u[a]+=n*u*1.8,this.v[a]-=r*u*1.8,this.dyeR[a]=Math.min(3,this.dyeR[a]+i[0]*u),this.dyeG[a]=Math.min(3,this.dyeG[a]+i[1]*u),this.dyeB[a]=Math.min(3,this.dyeB[a]+i[2]*u)}}drawObstacle(e,t,n,r){let i=e*w,a=(1-t)*T,o=Math.max(1.5,n*w),s=o*o;for(let e=1;e<71;e++)for(let t=1;t<127;t++)if((t-i)*(t-i)+(e-a)*(e-a)<=s){let n=e*w+t;this.obstacles[n]=+!r,r||(this.u[n]=0,this.v[n]=0,this.dyeR[n]=0,this.dyeG[n]=0,this.dyeB[n]=0)}}clearObstacles(){this.obstacles.fill(0)}applyKarmanPreset(e){this.clearObstacles();let t=.28*w,n=.5*T;for(let r=1;r<71;r++)for(let i=1;i<127;i++){let a=!1;if(e===`cylinder`)a=(i-t)**2+(r-n)**2<(.07*T*1.4)**2;else if(e===`airfoil`){let e=(i-t)/(.22*w),o=(r-n)/(.09*T);a=e>-.4&&e<.6&&Math.abs(o)<Math.max(0,.55*(1-e))}else{let e=(i-t)**2+(r-.38*T)**2,n=(i-t)**2+(r-.62*T)**2,o=(.055*T*1.3)**2;a=e<o||n<o}a&&(this.obstacles[r*w+i]=1)}}burstPulse(e,t,n){for(let r=0;r<12;r++){let i=r/12*Math.PI*2,a=n===`ferrofluid`?[.7,.85,1]:n===`plankton`?[.05,.9,1]:r%2==0?[.1,.9,1]:[.85,.3,1];this.splat(e+Math.cos(i)*.02,t+Math.sin(i)*.02,Math.cos(i)*4,Math.sin(i)*4,a,.002)}}resetField(e){this.u.fill(0),this.v.fill(0),this.p.fill(0),this.dyeR.fill(0),this.dyeG.fill(0),this.dyeB.fill(0),e!==`karman`&&this.clearObstacles(),this.seedParticles()}sampleField(e,t,n){let r=Math.max(.5,Math.min(126.5,t)),i=Math.max(.5,Math.min(70.5,n)),a=Math.floor(r),o=Math.floor(i),s=r-a,c=i-o,l=o*w+a,u=l+1,d=l+w,f=d+1,p=e[l]*(1-s)+e[u]*s,m=e[d]*(1-s)+e[f]*s;return p*(1-c)+m*c}advect(e,t,n,r){let i=n*36;for(let n=1;n<71;n++)for(let a=1;a<127;a++){let o=n*w+a;if(this.obstacles[o]){t[o]=0;continue}let s=a-i*this.u[o],c=n-i*this.v[o];t[o]=r*this.sampleField(e,s,c)}}project(e){for(let e=1;e<71;e++)for(let t=1;t<127;t++){let n=e*w+t;this.obstacles[n]?(this.div[n]=0,this.p[n]=0):(this.div[n]=.5*(this.u[n+1]-this.u[n-1]+this.v[n+w]-this.v[n-w]),this.p[n]*=.8)}for(let t=0;t<e;t++)for(let e=1;e<71;e++)for(let t=1;t<127;t++){let n=e*w+t;if(this.obstacles[n])continue;let r=this.p[n],i=this.obstacles[n-1]?r:this.p[n-1],a=this.obstacles[n+1]?r:this.p[n+1],o=this.obstacles[n-w]?r:this.p[n-w],s=this.obstacles[n+w]?r:this.p[n+w];this.p[n]=(i+a+o+s-this.div[n])*.25}for(let e=1;e<71;e++)for(let t=1;t<127;t++){let n=e*w+t;if(this.obstacles[n]){this.u[n]=0,this.v[n]=0;continue}let r=this.p[n],i=this.obstacles[n-1]?r:this.p[n-1],a=this.obstacles[n+1]?r:this.p[n+1],o=this.obstacles[n-w]?r:this.p[n-w],s=this.obstacles[n+w]?r:this.p[n+w];this.u[n]-=.5*(a-i),this.v[n]-=.5*(s-o)}}step(e,t,n){let r=Math.min(e,.025);this.time+=r;let i=0,a=0,o=0;for(let e=1;e<71;e++)for(let t=1;t<127;t++){let n=e*w+t;this.curl[n]=.5*(this.v[n+1]-this.v[n-1]-(this.u[n+w]-this.u[n-w]));let r=Math.abs(this.curl[n]);r>i&&(i=r)}let s=t.vorticity*r*.06;for(let e=1;e<71;e++)for(let n=1;n<127;n++){let i=e*w+n;if(this.obstacles[i])continue;let a=Math.abs(this.curl[i+1])-Math.abs(this.curl[i-1]),o=Math.abs(this.curl[i+w])-Math.abs(this.curl[i-w]),c=Math.hypot(a,o)+1e-4;this.u[i]+=o/c*this.curl[i]*s,this.v[i]-=a/c*this.curl[i]*s,this.u[i]+=t.windJet*1.4*r,t.mode===`karman`&&n<4&&(this.u[i]=1.9+Math.max(t.windJet,-.8),this.v[i]=.05*Math.sin(this.time*3+e*.4),Math.sin(e*.8)>.25&&(this.dyeR[i]=.1,this.dyeG[i]=.85,this.dyeB[i]=.98))}if(t.mode===`ferrofluid`)for(let e of n){let t=e.x*w,n=(1-e.y)*T,i=Math.max(4,e.radius*w);for(let a=1;a<71;a++)for(let o=1;o<127;o++){let s=a*w+o,c=t-o,l=n-a,u=c*c+l*l+2,d=Math.exp(-u/(i*i*1.4)),f=Math.sqrt(u);this.u[s]+=c/f*e.strength*2.5*d*r,this.v[s]+=l/f*e.strength*2.5*d*r,this.dyeR[s]=Math.max(this.dyeR[s],.7*d),this.dyeG[s]=Math.max(this.dyeG[s],.8*d),this.dyeB[s]=Math.max(this.dyeB[s],.9*d)}}if(t.autoDemo&&(t.mode===`plasma`||t.mode===`plankton`)){let e=.5+.25*Math.cos(this.time*.85),n=.5+.22*Math.sin(this.time*1.3),r=t.mode===`plasma`?[.1,.85,1]:[.02,.35,.55];this.splat(e,n,-Math.sin(this.time*1.3)*1.8,Math.cos(this.time*.85)*1.8,r,.0012)}this.project(t.jacobiIterations),this.uPrev.set(this.u),this.vPrev.set(this.v),this.advect(this.uPrev,this.u,r,.994),this.advect(this.vPrev,this.v,r,.994),this.project(t.jacobiIterations),this.dyeR0.set(this.dyeR),this.dyeG0.set(this.dyeG),this.dyeB0.set(this.dyeB),this.advect(this.dyeR0,this.dyeR,r,t.dissipation),this.advect(this.dyeG0,this.dyeG,r,t.dissipation),this.advect(this.dyeB0,this.dyeB,r,t.dissipation);for(let e=0;e<E;e++){let t=this.u[e]*this.u[e]+this.v[e]*this.v[e];a+=.5*t,o+=Math.sqrt(t)}for(let e=0;e<D;e++){let n=this.px[e]*w,i=(1-this.py[e])*T,a=this.sampleField(this.u,n,i),o=this.sampleField(this.v,n,i),s=Math.abs(this.sampleField(this.curl,n,i));this.px[e]+=a*r*.28,this.py[e]-=o*r*.28,this.pEnergy[e]=this.pEnergy[e]*.9+Math.min(1.5,(s*1.4+Math.hypot(a,o)*.35)*t.biolumSensitivity)*.1,this.pLife[e]-=r*.15;let c=Math.floor(this.px[e]*w),l=Math.floor((1-this.py[e])*T),u=c>=0&&c<w&&l>=0&&l<T&&this.obstacles[this.idx(c,l)]===1;(this.pLife[e]<=0||this.px[e]<0||this.px[e]>1||this.py[e]<0||this.py[e]>1||u)&&(this.px[e]=t.mode===`karman`?Math.random()*.03:Math.random(),this.py[e]=Math.random(),this.pEnergy[e]=.1,this.pLife[e]=.5+Math.random()*.5)}let c=o/E,l=a/E,u=Math.max(t.viscosity,4e-5);this.telemetry={fps:this.fps,reynoldsNumber:Math.round(c*.25/u),peakVorticity:i*18.5,kineticEnergy:l,turbulenceRatio:Math.min(1,l/2.2),particleCount:D,backendLabel:this.backendLabel}}render(e,t){this.fpsFrames++;let n=performance.now();n-this.lastFpsTime>=450&&(this.fps=Math.round(this.fpsFrames*1e3/(n-this.lastFpsTime)),this.telemetry.fps=this.fps,this.fpsFrames=0,this.lastFpsTime=n);let r=this.imgData.data;for(let t=0;t<E;t++){let n=t*4;if(this.obstacles[t])r[n]=22,r[n+1]=36,r[n+2]=60,r[n+3]=255;else if(e.mode===`ferrofluid`){let e=Math.min(1,(this.dyeR[t]+this.dyeG[t]+this.dyeB[t])*.33),i=Math.min(255,Math.round(e*210+Math.abs(this.curl[t])*180));r[n]=Math.round(10+i*.7),r[n+1]=Math.round(14+i*.85),r[n+2]=Math.round(24+i),r[n+3]=255}else r[n]=Math.min(255,Math.round(8+this.dyeR[t]*220)),r[n+1]=Math.min(255,Math.round(12+this.dyeG[t]*220)),r[n+2]=Math.min(255,Math.round(24+this.dyeB[t]*220)),r[n+3]=255}this.offCtx.putImageData(this.imgData,0,0);let i=this.canvas.width,a=this.canvas.height;this.ctx.imageSmoothingEnabled=!0,this.ctx.drawImage(this.offscreen,0,0,i,a),this.ctx.save(),this.ctx.globalCompositeOperation=`lighter`;for(let t=0;t<D;t++){let n=this.px[t]*i,r=(1-this.py[t])*a,o=Math.min(1,this.pEnergy[t]),s=e.mode===`plankton`?1.5+o*2.2:1.2+o*1.4;this.ctx.fillStyle=e.mode===`plankton`?`rgba(6, 220, 255, ${.22+o*.72})`:`rgba(120, 210, 255, ${.15+o*.45})`,this.ctx.fillRect(n,r,s,s)}if(this.ctx.restore(),e.mode===`ferrofluid`)for(let e of t){let t=e.x*i,n=(1-e.y)*a;this.ctx.beginPath(),this.ctx.arc(t,n,12,0,Math.PI*2),this.ctx.strokeStyle=e.strength>=0?`#06b6d4`:`#f59e0b`,this.ctx.lineWidth=2,this.ctx.stroke()}}getTelemetry(){return this.telemetry}export4KSnapshot(e,t){let n=document.createElement(`canvas`);n.width=3840,n.height=2160;let r=n.getContext(`2d`);return this.render(e,t),r.drawImage(this.canvas,0,0,3840,2160),n.toDataURL(`image/png`)}dispose(){}},k=class{ctx=null;masterGain=null;noiseFilter=null;noiseGain=null;droneOsc1=null;droneOsc2=null;droneFilter=null;droneGain=null;enabled=!1;get isEnabled(){return this.enabled}toggle(){return this.ctx||this.init(),this.enabled=!this.enabled,this.ctx&&this.ctx.state===`suspended`&&this.enabled&&this.ctx.resume(),this.masterGain&&this.ctx&&this.masterGain.gain.setTargetAtTime(this.enabled?.22:0,this.ctx.currentTime,.08),this.enabled}init(){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t;let n=t.createGain();n.gain.value=0,n.connect(t.destination),this.masterGain=n;let r=t.sampleRate*2,i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0),o=0,s=0,c=0;for(let e=0;e<r;e++){let t=Math.random()*2-1;o=.99765*o+t*.099046,s=.963*s+t*.2965164,c=.57*c+t*1.0526913,a[e]=(o+s+c+t*.1848)*.12}let l=t.createBufferSource();l.buffer=i,l.loop=!0;let u=t.createBiquadFilter();u.type=`bandpass`,u.frequency.value=320,u.Q.value=1.6,this.noiseFilter=u;let d=t.createGain();d.gain.value=.12,this.noiseGain=d,l.connect(u),u.connect(d),d.connect(n),l.start();let f=t.createBiquadFilter();f.type=`lowpass`,f.frequency.value=420,this.droneFilter=f;let p=t.createGain();p.gain.value=.15,this.droneGain=p;let m=t.createOscillator();m.type=`sine`,m.frequency.value=110,this.droneOsc1=m;let h=t.createOscillator();h.type=`triangle`,h.frequency.value=164.81,this.droneOsc2=h,m.connect(f),h.connect(f),f.connect(p),p.connect(n),m.start(),h.start()}update(e,t){if(!this.enabled||!this.ctx||!this.noiseFilter||!this.noiseGain||!this.droneFilter||!this.droneGain||!this.droneOsc1||!this.droneOsc2)return;let n=this.ctx.currentTime,r=Math.min(1,e.turbulenceRatio),i=Math.min(1,e.peakVorticity/40),a=(t===`plankton`?420:t===`ferrofluid`?180:280)+r*1650+i*650;this.noiseFilter.frequency.setTargetAtTime(a,n,.12),this.noiseGain.gain.setTargetAtTime(.05+r*.28,n,.12);let o=t===`ferrofluid`?82.41:t===`plankton`?130.81:110;this.droneOsc1.frequency.setTargetAtTime(o+r*8,n,.25),this.droneOsc2.frequency.setTargetAtTime(o*1.498+i*14,n,.25),this.droneFilter.frequency.setTargetAtTime(240+r*720,n,.2),this.droneGain.gain.setTargetAtTime(.11+(1-r*.3)*.08,n,.2)}dispose(){this.ctx&&=(this.ctx.close(),null)}},A=class{canvas;ctx;keHistory=[];vortHistory=[];maxSamples=96;constructor(e){this.canvas=e,this.ctx=e.getContext(`2d`),this.resize()}resize(){let e=this.canvas.getBoundingClientRect(),t=Math.min(window.devicePixelRatio||1,2),n=Math.max(200,Math.round(e.width*t)),r=Math.max(100,Math.round(e.height*t));(this.canvas.width!==n||this.canvas.height!==r)&&(this.canvas.width=n,this.canvas.height=r)}pushAndRender(e){this.keHistory.push(Math.min(1,e.kineticEnergy/2.5)),this.vortHistory.push(Math.min(1,e.peakVorticity/55)),this.keHistory.length>this.maxSamples&&this.keHistory.shift(),this.vortHistory.length>this.maxSamples&&this.vortHistory.shift();let t=this.canvas.width,n=this.canvas.height,r=this.ctx;r.clearRect(0,0,t,n),r.fillStyle=`#040711`,r.fillRect(0,0,t,n),r.strokeStyle=`rgba(139, 92, 246, 0.14)`,r.lineWidth=1;for(let e=1;e<4;e++){let i=n*e/4;r.beginPath(),r.moveTo(0,i),r.lineTo(t,i),r.stroke()}this.drawSeries(this.keHistory,`#06b6d4`,`rgba(6, 182, 212, 0.18)`,t,n),this.drawSeries(this.vortHistory,`#f59e0b`,`rgba(245, 158, 11, 0.10)`,t,n),r.font=`${Math.max(10,Math.round(n*.1))}px "Fira Code", monospace`,r.fillStyle=`#06b6d4`,r.fillText(`Ek (Cyan)`,8,16),r.fillStyle=`#f59e0b`,r.fillText(`ω_max (Gold)`,92,16)}drawSeries(e,t,n,r,i){if(e.length<2)return;let a=this.ctx,o=r/(this.maxSamples-1);a.beginPath();for(let t=0;t<e.length;t++){let n=t*o,r=i-8-e[t]*(i-22);t===0?a.moveTo(n,r):a.lineTo(n,r)}a.strokeStyle=t,a.lineWidth=2,a.stroke(),a.lineTo((e.length-1)*o,i),a.lineTo(0,i),a.closePath(),a.fillStyle=n,a.fill()}},j=class{modalEl;constructor(e){this.modalEl=e,this.render(),this.bindEvents()}render(){this.modalEl.innerHTML=`
      <div class="modal-dialog">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-badge">CFD &amp; CONTINUUM MECHANICS DOSSIER</span>
            <h2 id="dossier-title">AETHER-FLUID: Incompressible Navier-Stokes &amp; Magnetohydrodynamics</h2>
            <p class="modal-author">
              Exclusive Lead Architect: <strong>أ. طارق ابوعشي | Tareq Abuashi — Lead Creative Technologist &amp; Systems Architect</strong>
            </p>
          </div>
          <button id="close-dossier-x" class="close-btn" aria-label="Close CFD Dossier">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div class="modal-body custom-scroll">
          <section class="math-section">
            <span class="section-tag">01 // EULERIAN MOMENTUM CONSERVATION</span>
            <h3>Incompressible Navier-Stokes Equations</h3>
            <p>
              The fluid continuum evolves on an Eulerian MAC/collocated grid by enforcing conservation of linear momentum and
              zero mass divergence (incompressibility):
            </p>
            <div class="formula-box highlight">
              <div>∂<strong>u</strong>/∂t + (<strong>u</strong> · ∇)<strong>u</strong> = &minus;(1/ρ)∇p + ν∇²<strong>u</strong> + <strong>f</strong><sub>ext</sub></div>
              <div>∇ · <strong>u</strong> = 0 &nbsp;&nbsp;(Incompressibility Constraint)</div>
            </div>
            <p>
              Here <strong>u</strong> = (u, v) is the velocity field, p is scalar pressure, ρ is fluid density, ν is kinematic viscosity,
              and <strong>f</strong><sub>ext</sub> encapsulates wind-tunnel jets, Kelvin magnetic forces, and vorticity confinement.
            </p>
          </section>

          <section class="math-section">
            <span class="section-tag">02 // JOS STAM STABLE FLUIDS PIPELINE</span>
            <h3>Unconditionally Stable Operator Splitting</h3>
            <p>
              Each time-step Δt splits the PDE into four sequential GPU ping-pong framebuffer passes:
            </p>
            <div class="formula-box">
              <div>1. Force Injection: &nbsp;<strong>u</strong>₁ = <strong>u</strong>₀ + Δt · <strong>f</strong><sub>ext</sub></div>
              <div>2. Viscous Diffusion: (I &minus; νΔt∇²)<strong>u</strong>₂ = <strong>u</strong>₁ &nbsp;(Jacobi Relaxation)</div>
              <div>3. Helmholtz-Hodge Projection: ∇²p = ∇·<strong>u</strong>₂ &nbsp;⇒&nbsp; <strong>u</strong>₃ = <strong>u</strong>₂ &minus; ∇p</div>
              <div>4. Semi-Lagrangian Advection: <strong>u</strong><sub>next</sub>(<strong>x</strong>) = <strong>u</strong>₃(<strong>x</strong> &minus; Δt·<strong>u</strong>₃(<strong>x</strong>))</div>
            </div>
          </section>

          <section class="math-section">
            <span class="section-tag">03 // VORTICITY CONFINEMENT &amp; KÁRMÁN SHEDDING</span>
            <h3>Restoring Sub-Grid Rotational Energy</h3>
            <p>
              First-order semi-Lagrangian advection introduces numerical dissipation that damps fine eddies. Vorticity confinement
              re-injects rotational energy along normalized curl gradients:
            </p>
            <div class="formula-box">
              <div>ω = (∇ × <strong>u</strong>)<sub>z</sub> = ∂v/∂x &minus; ∂u/∂y</div>
              <div><strong>N</strong> = ∇|ω| / (|∇|ω|| + ε₀), &nbsp;&nbsp;<span class="highlight-text"><strong>f</strong><sub>conf</sub> = ε · h · (<strong>N</strong> × ω<strong>k̂</strong>)</span></div>
            </div>
            <p>
              In Wind Tunnel mode, solid obstacle cells enforce no-slip velocity (<strong>u</strong> = 0) and Neumann pressure boundaries
              (∂p/∂n = 0), triggering periodic alternating vortex shedding known as a <strong>Kármán Vortex Street</strong>.
            </p>
          </section>

          <section class="math-section">
            <span class="section-tag">04 // FERROFLUID &amp; BIOLUMINESCENT COUPLING</span>
            <h3>Rosensweig Magnetic Spikes &amp; Lagrangian Plankton</h3>
            <p>
              In Ferrofluid mode, magnetic dipoles exert a Kelvin body force <strong>F</strong><sub>m</sub> = μ₀(<strong>M</strong> · ∇)<strong>H</strong>
              while Rosensweig normal-field instability sculpts specular obsidian-chrome peaks. In Bioluminescent Plankton mode,
              8,192+ GPU Lagrangian tracers advect via RK2 midpoint integration and emit cyan-blue bioluminescence proportional to
              local shear rate ‖∇<strong>u</strong>‖ and vorticity |ω|.
            </p>
          </section>
        </div>

        <div class="modal-footer">
          <span class="footer-note">AETHER-FLUID // Engineered by أ. طارق ابوعشي | Tareq Abuashi</span>
          <button id="close-dossier-btn" class="action-btn">Return to CFD Studio</button>
        </div>
      </div>
    `}bindEvents(){let e=this.modalEl.querySelector(`#close-dossier-x`),t=this.modalEl.querySelector(`#close-dossier-btn`);e?.addEventListener(`click`,()=>this.close()),t?.addEventListener(`click`,()=>this.close()),this.modalEl.addEventListener(`click`,e=>{e.target===this.modalEl&&this.close()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&!this.modalEl.classList.contains(`hidden`)&&this.close()})}open(){this.modalEl.classList.remove(`hidden`)}close(){this.modalEl.classList.add(`hidden`)}},M={plasma:{title:`Neon Plasma Advection`,hint:`Drag across canvas to inject momentum & thermal plasma filaments`},ferrofluid:{title:`Ferrofluid Magnetic Spikes`,hint:`Drag magnetic poles or switch tool to add attract/repel dipoles`},karman:{title:`Kármán Vortex Street & Wind Tunnel`,hint:`Draw obstacles directly in the wind tunnel to observe alternating vortex shedding`},plankton:{title:`Bioluminescent Plankton`,hint:`Stir the pelagic abyss — 8,192+ plankton ignite with local shear rate & curl`}};function N(e){try{return{engine:new C(e),canvas:e}}catch(t){console.warn(`WebGL2 FBO solver unavailable, activating Canvas 2D TypedArray fallback:`,t);let n=e.cloneNode(!1);return e.parentNode?.replaceChild(n,e),{engine:new O(n),canvas:n}}}var P=class{canvas;engine;audio=new k;scope;dossier;params={mode:`plasma`,viscosity:2e-4,vorticity:28,dissipation:.985,windJet:0,jacobiIterations:20,autoDemo:!0,magneticGain:.95,biolumSensitivity:1.15,brushRadius:.032};activeTool=`fluid`;plasmaPalette=`cyan_violet`;newMagnetStrength=1.15;nextMagnetId=1;magnets=[{id:1,x:.36,y:.52,strength:1.2,radius:.14},{id:2,x:.64,y:.48,strength:1.2,radius:.14}];isPaused=!1;isPointerDown=!1;draggingMagnetId=null;lastNx=.5;lastNy=.5;lastTime=performance.now();hueClock=0;constructor(){let e=document.getElementById(`fluid-canvas`);this.canvas=e,this.resizeArenaCanvas();let t=N(this.canvas);this.engine=t.engine,this.canvas=t.canvas,this.resizeArenaCanvas(),this.scope=new A(document.getElementById(`telemetry-canvas`)),this.dossier=new j(document.getElementById(`math-modal`)),this.nextMagnetId=3,this.updateBackendBadge(),this.bindUI(),this.bindPointerEvents(),this.renderModeToolsPanel(),this.syncModeUI(),this.engine.burstPulse(.5,.5,this.params.mode),requestAnimationFrame(e=>this.loop(e))}resizeArenaCanvas(){let e=this.canvas.parentElement;if(!e)return;let t=e.getBoundingClientRect(),n=Math.min(window.devicePixelRatio||1,2),r=Math.max(320,Math.round(t.width*n)),i=Math.max(240,Math.round(t.height*n));(this.canvas.width!==r||this.canvas.height!==i)&&(this.canvas.width=r,this.canvas.height=i,this.engine?.resize(r,i))}updateBackendBadge(){let e=document.getElementById(`hud-backend`),t=document.getElementById(`val-particle-count`);e&&(e.textContent=this.engine.backendLabel),t&&(t.textContent=this.engine.particleCount.toLocaleString())}bindUI(){window.addEventListener(`resize`,()=>{this.resizeArenaCanvas(),this.scope.resize()}),document.querySelectorAll(`.system-tab`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.mode;t&&this.switchMode(t)})});let e=document.getElementById(`audio-toggle-btn`),t=document.getElementById(`audio-status-text`),n=document.getElementById(`audio-icon`);e.addEventListener(`click`,()=>{let r=this.audio.toggle();e.classList.toggle(`active`,r),t.textContent=r?`Audio: ON`:`Audio: OFF`,n.innerHTML=r?`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>`:`<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>`}),document.getElementById(`open-math-btn`)?.addEventListener(`click`,()=>this.dossier.open()),document.getElementById(`btn-export-4k`)?.addEventListener(`click`,()=>this.export4K()),document.getElementById(`btn-play-pause`).addEventListener(`click`,()=>this.togglePause()),document.getElementById(`btn-burst-pulse`)?.addEventListener(`click`,()=>{this.engine.burstPulse(.5,.5,this.params.mode)});let r=document.getElementById(`btn-auto-demo`);r.addEventListener(`click`,()=>{this.params.autoDemo=!this.params.autoDemo,r.classList.toggle(`active`,this.params.autoDemo)}),document.getElementById(`btn-clear-obstacles`)?.addEventListener(`click`,()=>{this.engine.clearObstacles(),this.params.mode===`ferrofluid`&&(this.magnets=[],this.renderModeToolsPanel())}),document.getElementById(`btn-reset-fluid`)?.addEventListener(`click`,()=>{this.engine.resetField(this.params.mode),this.params.mode===`karman`?this.engine.applyKarmanPreset(`cylinder`):this.engine.burstPulse(.5,.5,this.params.mode)}),this.bindSlider(`slider-viscosity`,`disp-viscosity`,e=>(this.params.viscosity=e,e.toFixed(4))),this.bindSlider(`slider-vorticity`,`disp-vorticity`,e=>(this.params.vorticity=e,e.toFixed(1))),this.bindSlider(`slider-dissipation`,`disp-dissipation`,e=>(this.params.dissipation=e,e.toFixed(3))),this.bindSlider(`slider-wind-jet`,`disp-wind-jet`,e=>(this.params.windJet=e,e.toFixed(2))),document.querySelectorAll(`[data-iters]`).forEach(e=>{e.addEventListener(`click`,()=>{document.querySelectorAll(`[data-iters]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`);let t=Number(e.dataset.iters||20);this.params.jacobiIterations=t;let n=document.getElementById(`disp-iterations`);n&&(n.textContent=`${t} iters`)})}),window.addEventListener(`keydown`,t=>{t.target instanceof HTMLInputElement||(t.code===`Space`?(t.preventDefault(),this.togglePause()):t.key.toLowerCase()===`b`?this.engine.burstPulse(.5,.5,this.params.mode):t.key.toLowerCase()===`c`?this.engine.clearObstacles():t.key.toLowerCase()===`m`&&e.click())})}bindSlider(e,t,n){let r=document.getElementById(e),i=document.getElementById(t);r&&i&&r.addEventListener(`input`,()=>{let e=parseFloat(r.value);i.textContent=n(e)})}togglePause(){this.isPaused=!this.isPaused;let e=document.getElementById(`txt-play-pause`),t=document.getElementById(`icon-play-pause`);e&&(e.textContent=this.isPaused?`Resume`:`Pause`),t&&(t.innerHTML=this.isPaused?`<polygon points="5 3 19 12 5 21 5 3"></polygon>`:`<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>`)}switchMode(e){this.params.mode=e,document.querySelectorAll(`.system-tab`).forEach(t=>{t.classList.toggle(`active`,t.dataset.mode===e)}),e===`karman`?(this.activeTool=`obstacle_draw`,this.engine.resetField(`karman`),this.engine.applyKarmanPreset(`cylinder`)):e===`ferrofluid`?(this.activeTool=`fluid`,this.engine.clearObstacles(),this.magnets.length===0&&(this.magnets=[{id:this.nextMagnetId++,x:.36,y:.52,strength:1.2,radius:.14},{id:this.nextMagnetId++,x:.64,y:.48,strength:1.2,radius:.14}])):(this.activeTool=`fluid`,this.engine.clearObstacles(),this.engine.burstPulse(.5,.5,e)),this.syncModeUI(),this.renderModeToolsPanel()}syncModeUI(){let e=M[this.params.mode],t=document.getElementById(`hud-mode-title`),n=document.getElementById(`hud-interaction-hint`);t&&(t.textContent=e.title),n&&(n.innerHTML=`<span>${e.hint}</span>`)}renderModeToolsPanel(){let e=document.getElementById(`panel-mode-tools`);e&&(this.params.mode===`plasma`?(e.innerHTML=`
        <div class="panel-header">
          <span>Thermal Plasma Controls</span>
          <span class="badge">MODE 01</span>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Plasma Chromatic Spectrum</span>
          </div>
          <div class="preset-btn-group">
            <button class="sub-btn ${this.plasmaPalette===`cyan_violet`?`active`:``}" data-pal="cyan_violet">Cyan / Violet</button>
            <button class="sub-btn ${this.plasmaPalette===`solar`?`active`:``}" data-pal="solar">Solar Ember</button>
            <button class="sub-btn ${this.plasmaPalette===`aurora`?`active`:``}" data-pal="aurora">Aurora Bio</button>
          </div>
        </div>
        <div class="helper-note">
          Drag pointer anywhere to inject high-momentum plasma filaments amplified by Vorticity Confinement.
        </div>
      `,e.querySelectorAll(`[data-pal]`).forEach(e=>{e.addEventListener(`click`,()=>{this.plasmaPalette=e.dataset.pal,this.renderModeToolsPanel()})})):this.params.mode===`ferrofluid`?(e.innerHTML=`
        <div class="panel-header">
          <span>Ferrofluid Dipole Studio</span>
          <span class="badge">${this.magnets.length} POLES</span>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Pointer Tool</span>
          </div>
          <div class="preset-btn-group">
            <button class="sub-btn ${this.activeTool===`fluid`?`active`:``}" data-tool="fluid">Drag Poles / Stir</button>
            <button class="sub-btn ${this.activeTool===`magnet_place`?`active`:``}" data-tool="magnet_place">Place New Pole</button>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>New Pole Polarity</span>
            <span class="control-val">${this.newMagnetStrength>=0?`North (Attract)`:`South (Repel)`}</span>
          </div>
          <div class="preset-btn-group">
            <button class="sub-btn ${this.newMagnetStrength>=0?`active`:``}" id="btn-pol-attract">Attract (+N)</button>
            <button class="sub-btn ${this.newMagnetStrength<0?`active`:``}" id="btn-pol-repel">Repel (-S)</button>
            <button class="sub-btn" id="btn-flip-all">Invert All</button>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Rosensweig Spike Gain</span>
            <span class="control-val" id="disp-mag-gain">${this.params.magneticGain.toFixed(2)}</span>
          </div>
          <input type="range" id="slider-mag-gain" min="0.2" max="2.0" step="0.05" value="${this.params.magneticGain}" />
        </div>
        <div class="helper-note">
          Drag cyan/orange dipole rings directly to sculpt liquid obsidian Rosensweig magnetic spikes in real time.
        </div>
      `,e.querySelectorAll(`[data-tool]`).forEach(e=>{e.addEventListener(`click`,()=>{this.activeTool=e.dataset.tool,this.renderModeToolsPanel()})}),e.querySelector(`#btn-pol-attract`)?.addEventListener(`click`,()=>{this.newMagnetStrength=1.2,this.renderModeToolsPanel()}),e.querySelector(`#btn-pol-repel`)?.addEventListener(`click`,()=>{this.newMagnetStrength=-1.2,this.renderModeToolsPanel()}),e.querySelector(`#btn-flip-all`)?.addEventListener(`click`,()=>{this.magnets=this.magnets.map(e=>({...e,strength:-e.strength})),this.renderModeToolsPanel()}),this.bindSlider(`slider-mag-gain`,`disp-mag-gain`,e=>(this.params.magneticGain=e,e.toFixed(2)))):this.params.mode===`karman`?(e.innerHTML=`
        <div class="panel-header">
          <span>Wind Tunnel &amp; Obstacles</span>
          <span class="badge">BOUNDARY CFD</span>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Mouse Interaction Tool</span>
          </div>
          <div class="preset-btn-group">
            <button class="sub-btn ${this.activeTool===`obstacle_draw`?`active`:``}" data-tool="obstacle_draw">Draw Obstacles</button>
            <button class="sub-btn ${this.activeTool===`obstacle_erase`?`active`:``}" data-tool="obstacle_erase">Erase</button>
            <button class="sub-btn ${this.activeTool===`fluid`?`active`:``}" data-tool="fluid">Stir Flow</button>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Aerodynamic Obstacle Presets</span>
          </div>
          <div class="preset-btn-group">
            <button class="sub-btn" data-preset="cylinder">Cylinder</button>
            <button class="sub-btn" data-preset="airfoil">NACA Airfoil</button>
            <button class="sub-btn" data-preset="twin_cylinders">Twin Cylinders</button>
          </div>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Obstacle Brush Radius</span>
            <span class="control-val" id="disp-brush-rad">${(this.params.brushRadius*100).toFixed(1)}%</span>
          </div>
          <input type="range" id="slider-brush-rad" min="0.012" max="0.075" step="0.002" value="${this.params.brushRadius}" />
        </div>
        <div class="helper-note">
          Paint solid bluff bodies or wings directly in the wind tunnel to induce alternating von Kármán vortex streets.
        </div>
      `,e.querySelectorAll(`[data-tool]`).forEach(e=>{e.addEventListener(`click`,()=>{this.activeTool=e.dataset.tool,this.renderModeToolsPanel()})}),e.querySelectorAll(`[data-preset]`).forEach(e=>{e.addEventListener(`click`,()=>{this.engine.applyKarmanPreset(e.dataset.preset)})}),this.bindSlider(`slider-brush-rad`,`disp-brush-rad`,e=>(this.params.brushRadius=e,`${(e*100).toFixed(1)}%`))):(e.innerHTML=`
        <div class="panel-header">
          <span>Bioluminescent Ocean Lab</span>
          <span class="badge">${this.engine.particleCount.toLocaleString()} PLANKTON</span>
        </div>
        <div class="control-group">
          <div class="control-label-row">
            <span>Shear Bioluminescence Gain</span>
            <span class="control-val" id="disp-biolum">${this.params.biolumSensitivity.toFixed(2)}×</span>
          </div>
          <input type="range" id="slider-biolum" min="0.3" max="2.5" step="0.05" value="${this.params.biolumSensitivity}" />
        </div>
        <div class="preset-btn-group">
          <button class="sub-btn" id="btn-plankton-wave">Trigger Pelagic Current Wave</button>
        </div>
        <div class="helper-note">
          Over 8,192 Lagrangian bioluminescent plankton follow RK2 streamlines and glow cyan/electric blue with fluid shear &amp; curl.
        </div>
      `,this.bindSlider(`slider-biolum`,`disp-biolum`,e=>(this.params.biolumSensitivity=e,`${e.toFixed(2)}×`)),e.querySelector(`#btn-plankton-wave`)?.addEventListener(`click`,()=>{this.engine.burstPulse(.32,.5,`plankton`),this.engine.burstPulse(.68,.5,`plankton`)})))}getNormalizedCoords(e){let t=this.canvas.getBoundingClientRect();return[Math.max(0,Math.min(1,(e.clientX-t.left)/Math.max(t.width,1))),Math.max(0,Math.min(1,1-(e.clientY-t.top)/Math.max(t.height,1)))]}getSplatColor(){if(this.params.mode===`ferrofluid`)return[.75,.85,.96];if(this.params.mode===`plankton`)return[.02,.45,.72];if(this.params.mode===`karman`)return[.08,.85,.96];if(this.hueClock=(this.hueClock+.015)%1,this.plasmaPalette===`solar`)return[1,.35+.35*Math.sin(this.hueClock*6.28),.06];if(this.plasmaPalette===`aurora`)return[.06,.92,.45+.4*Math.cos(this.hueClock*6.28)];let e=.5+.5*Math.sin(this.hueClock*Math.PI*2);return[.05+e*.65,.82-e*.45,1]}findNearestMagnet(e,t){let n=null,r=.045;for(let i of this.magnets){let a=Math.hypot(i.x-e,i.y-t);a<r&&(r=a,n=i)}return n}bindPointerEvents(){this.canvas.addEventListener(`pointerdown`,e=>{this.canvas.setPointerCapture(e.pointerId);let[t,n]=this.getNormalizedCoords(e);if(this.isPointerDown=!0,this.lastNx=t,this.lastNy=n,this.params.mode===`ferrofluid`){let e=this.findNearestMagnet(t,n);if(e){this.draggingMagnetId=e.id;return}if(this.activeTool===`magnet_place`){this.magnets.length>=12&&this.magnets.shift();let e={id:this.nextMagnetId++,x:t,y:n,strength:this.newMagnetStrength,radius:.14};this.magnets.push(e),this.draggingMagnetId=e.id,this.renderModeToolsPanel();return}}(this.activeTool===`obstacle_draw`||this.activeTool===`obstacle_erase`)&&this.engine.drawObstacle(t,n,this.params.brushRadius,this.activeTool===`obstacle_erase`)}),this.canvas.addEventListener(`pointermove`,e=>{if(!this.isPointerDown)return;let[t,n]=this.getNormalizedCoords(e);if(this.draggingMagnetId!==null){let e=this.magnets.find(e=>e.id===this.draggingMagnetId);e&&(e.x=t,e.y=n),this.lastNx=t,this.lastNy=n}else{if(this.activeTool===`obstacle_draw`||this.activeTool===`obstacle_erase`){let e=this.activeTool===`obstacle_erase`;for(let r=1;r<=6;r++){let i=this.lastNx+(t-this.lastNx)*r/6,a=this.lastNy+(n-this.lastNy)*r/6;this.engine.drawObstacle(i,a,this.params.brushRadius,e)}}else{let e=(t-this.lastNx)*32,r=(n-this.lastNy)*32;this.engine.splat(t,n,e,r,this.getSplatColor(),.0014)}this.lastNx=t,this.lastNy=n}});let e=e=>{this.canvas.hasPointerCapture(e.pointerId)&&this.canvas.releasePointerCapture(e.pointerId),this.isPointerDown=!1,this.draggingMagnetId=null};this.canvas.addEventListener(`pointerup`,e),this.canvas.addEventListener(`pointercancel`,e)}updateTelemetryUI(){let e=this.engine.getTelemetry(),t=`${e.fps} FPS`,n=e.reynoldsNumber.toLocaleString(),r=`${e.peakVorticity.toFixed(1)} s⁻¹`,i=e.kineticEnergy.toFixed(2),a=Math.round(e.turbulenceRatio*100),o=(e,t)=>{let n=document.getElementById(e);n&&(n.innerHTML=t)};o(`hud-fps`,t),o(`hud-re`,n),o(`hud-vort`,r),o(`hud-ke`,i),o(`val-fps`,`${e.fps}<span class="unit">FPS</span>`),o(`val-reynolds`,n),o(`val-vorticity`,`${e.peakVorticity.toFixed(1)}<span class="unit">s⁻¹</span>`),o(`val-ke`,`${i}<span class="unit">J/m²</span>`),o(`val-turb-pct`,`${a}%`);let s=document.getElementById(`bar-turbulence`);s&&(s.style.width=`${Math.max(4,a)}%`);let c=document.getElementById(`flow-regime-badge`);c&&(e.reynoldsNumber<600?(c.textContent=`LAMINAR`,c.style.color=`#10b981`):e.reynoldsNumber<2400?(c.textContent=`TRANSITIONAL`,c.style.color=`#06b6d4`):(c.textContent=`TURBULENT`,c.style.color=`#f59e0b`)),this.scope.pushAndRender(e),this.audio.update(e,this.params.mode)}export4K(){let e=this.engine.export4KSnapshot(this.params,this.magnets),t=document.createElement(`a`);t.download=`aether-fluid-4k-${this.params.mode}.png`,t.href=e,t.click()}loop(e){let t=Math.min(.033,Math.max(.004,(e-this.lastTime)/1e3));this.lastTime=e,this.isPaused||(this.engine.step(t,this.params,this.magnets),this.updateTelemetryUI()),this.engine.render(this.params,this.magnets),requestAnimationFrame(e=>this.loop(e))}};document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,()=>new P):new P;