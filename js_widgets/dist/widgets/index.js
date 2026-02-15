import * as c from "three";
import { Controls as Bt, MOUSE as X, Vector3 as j, Vector2 as R, Quaternion as It, MathUtils as vt, Matrix4 as Vt, Object3D as qt } from "three";
import { Graphics as Z, Text as _t, Application as At } from "pixi.js";
const pt = { type: "change" }, ft = { type: "start" }, gt = { type: "end" }, Ct = 1e-6, v = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 }, tt = new R(), U = new R(), Yt = new j(), et = new j(), ut = new j(), q = new It(), Mt = new j(), it = new j(), mt = new j(), st = new j();
class Xt extends Bt {
  /**
   * Constructs a new controls instance.
   *
   * @param {Object3D} object - The object that is managed by the controls.
   * @param {?HTMLElement} domElement - The HTML element used for event listeners.
   */
  constructor(t, e = null) {
    super(t, e), this.screen = { left: 0, top: 0, width: 0, height: 0 }, this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.staticMoving = !1, this.dynamicDampingFactor = 0.2, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.keys = [
      "KeyA",
      "KeyS",
      "KeyD"
      /*D*/
    ], this.mouseButtons = { LEFT: X.ROTATE, MIDDLE: X.DOLLY, RIGHT: X.PAN }, this.target = new j(), this.state = v.NONE, this.keyState = v.NONE, this._lastPosition = new j(), this._lastZoom = 1, this._touchZoomDistanceStart = 0, this._touchZoomDistanceEnd = 0, this._lastAngle = 0, this._eye = new j(), this._movePrev = new R(), this._moveCurr = new R(), this._lastAxis = new j(), this._zoomStart = new R(), this._zoomEnd = new R(), this._panStart = new R(), this._panEnd = new R(), this._pointers = [], this._pointerPositions = {}, this._onPointerMove = Kt.bind(this), this._onPointerDown = Gt.bind(this), this._onPointerUp = $t.bind(this), this._onPointerCancel = Qt.bind(this), this._onContextMenu = ne.bind(this), this._onMouseWheel = oe.bind(this), this._onKeyDown = te.bind(this), this._onKeyUp = Jt.bind(this), this._onTouchStart = re.bind(this), this._onTouchMove = ae.bind(this), this._onTouchEnd = he.bind(this), this._onMouseDown = ee.bind(this), this._onMouseMove = ie.bind(this), this._onMouseUp = se.bind(this), this._target0 = this.target.clone(), this._position0 = this.object.position.clone(), this._up0 = this.object.up.clone(), this._zoom0 = this.object.zoom, e !== null && (this.connect(e), this.handleResize()), this.update();
  }
  connect(t) {
    super.connect(t), window.addEventListener("keydown", this._onKeyDown), window.addEventListener("keyup", this._onKeyUp), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerCancel), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    window.removeEventListener("keydown", this._onKeyDown), window.removeEventListener("keyup", this._onKeyUp), this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerCancel), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  /**
   * Must be called if the application window is resized.
   */
  handleResize() {
    const t = this.domElement.getBoundingClientRect(), e = this.domElement.ownerDocument.documentElement;
    this.screen.left = t.left + window.pageXOffset - e.clientLeft, this.screen.top = t.top + window.pageYOffset - e.clientTop, this.screen.width = t.width, this.screen.height = t.height;
  }
  update() {
    this._eye.subVectors(this.object.position, this.target), this.noRotate || this._rotateCamera(), this.noZoom || this._zoomCamera(), this.noPan || this._panCamera(), this.object.position.addVectors(this.target, this._eye), this.object.isPerspectiveCamera ? (this._checkDistances(), this.object.lookAt(this.target), this._lastPosition.distanceToSquared(this.object.position) > Ct && (this.dispatchEvent(pt), this._lastPosition.copy(this.object.position))) : this.object.isOrthographicCamera ? (this.object.lookAt(this.target), (this._lastPosition.distanceToSquared(this.object.position) > Ct || this._lastZoom !== this.object.zoom) && (this.dispatchEvent(pt), this._lastPosition.copy(this.object.position), this._lastZoom = this.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type.");
  }
  /**
   * Resets the controls to its initial state.
   */
  reset() {
    this.state = v.NONE, this.keyState = v.NONE, this.target.copy(this._target0), this.object.position.copy(this._position0), this.object.up.copy(this._up0), this.object.zoom = this._zoom0, this.object.updateProjectionMatrix(), this._eye.subVectors(this.object.position, this.target), this.object.lookAt(this.target), this.dispatchEvent(pt), this._lastPosition.copy(this.object.position), this._lastZoom = this.object.zoom;
  }
  _panCamera() {
    if (U.copy(this._panEnd).sub(this._panStart), U.lengthSq()) {
      if (this.object.isOrthographicCamera) {
        const t = (this.object.right - this.object.left) / this.object.zoom / this.domElement.clientWidth, e = (this.object.top - this.object.bottom) / this.object.zoom / this.domElement.clientWidth;
        U.x *= t, U.y *= e;
      }
      U.multiplyScalar(this._eye.length() * this.panSpeed), et.copy(this._eye).cross(this.object.up).setLength(U.x), et.add(Yt.copy(this.object.up).setLength(U.y)), this.object.position.add(et), this.target.add(et), this.staticMoving ? this._panStart.copy(this._panEnd) : this._panStart.add(U.subVectors(this._panEnd, this._panStart).multiplyScalar(this.dynamicDampingFactor));
    }
  }
  _rotateCamera() {
    st.set(this._moveCurr.x - this._movePrev.x, this._moveCurr.y - this._movePrev.y, 0);
    let t = st.length();
    t ? (this._eye.copy(this.object.position).sub(this.target), Mt.copy(this._eye).normalize(), it.copy(this.object.up).normalize(), mt.crossVectors(it, Mt).normalize(), it.setLength(this._moveCurr.y - this._movePrev.y), mt.setLength(this._moveCurr.x - this._movePrev.x), st.copy(it.add(mt)), ut.crossVectors(st, this._eye).normalize(), t *= this.rotateSpeed, q.setFromAxisAngle(ut, t), this._eye.applyQuaternion(q), this.object.up.applyQuaternion(q), this._lastAxis.copy(ut), this._lastAngle = t) : !this.staticMoving && this._lastAngle && (this._lastAngle *= Math.sqrt(1 - this.dynamicDampingFactor), this._eye.copy(this.object.position).sub(this.target), q.setFromAxisAngle(this._lastAxis, this._lastAngle), this._eye.applyQuaternion(q), this.object.up.applyQuaternion(q)), this._movePrev.copy(this._moveCurr);
  }
  _zoomCamera() {
    let t;
    this.state === v.TOUCH_ZOOM_PAN ? (t = this._touchZoomDistanceStart / this._touchZoomDistanceEnd, this._touchZoomDistanceStart = this._touchZoomDistanceEnd, this.object.isPerspectiveCamera ? this._eye.multiplyScalar(t) : this.object.isOrthographicCamera ? (this.object.zoom = vt.clamp(this.object.zoom / t, this.minZoom, this.maxZoom), this._lastZoom !== this.object.zoom && this.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (t = 1 + (this._zoomEnd.y - this._zoomStart.y) * this.zoomSpeed, t !== 1 && t > 0 && (this.object.isPerspectiveCamera ? this._eye.multiplyScalar(t) : this.object.isOrthographicCamera ? (this.object.zoom = vt.clamp(this.object.zoom / t, this.minZoom, this.maxZoom), this._lastZoom !== this.object.zoom && this.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), this.staticMoving ? this._zoomStart.copy(this._zoomEnd) : this._zoomStart.y += (this._zoomEnd.y - this._zoomStart.y) * this.dynamicDampingFactor);
  }
  _getMouseOnScreen(t, e) {
    return tt.set(
      (t - this.screen.left) / this.screen.width,
      (e - this.screen.top) / this.screen.height
    ), tt;
  }
  _getMouseOnCircle(t, e) {
    return tt.set(
      (t - this.screen.width * 0.5 - this.screen.left) / (this.screen.width * 0.5),
      (this.screen.height + 2 * (this.screen.top - e)) / this.screen.width
      // screen.width intentional
    ), tt;
  }
  _addPointer(t) {
    this._pointers.push(t);
  }
  _removePointer(t) {
    delete this._pointerPositions[t.pointerId];
    for (let e = 0; e < this._pointers.length; e++)
      if (this._pointers[e].pointerId == t.pointerId) {
        this._pointers.splice(e, 1);
        return;
      }
  }
  _trackPointer(t) {
    let e = this._pointerPositions[t.pointerId];
    e === void 0 && (e = new R(), this._pointerPositions[t.pointerId] = e), e.set(t.pageX, t.pageY);
  }
  _getSecondPointerPosition(t) {
    const e = t.pointerId === this._pointers[0].pointerId ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[e.pointerId];
  }
  _checkDistances() {
    (!this.noZoom || !this.noPan) && (this._eye.lengthSq() > this.maxDistance * this.maxDistance && (this.object.position.addVectors(this.target, this._eye.setLength(this.maxDistance)), this._zoomStart.copy(this._zoomEnd)), this._eye.lengthSq() < this.minDistance * this.minDistance && (this.object.position.addVectors(this.target, this._eye.setLength(this.minDistance)), this._zoomStart.copy(this._zoomEnd)));
  }
}
function Gt(s) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s));
}
function Kt(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function $t(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchEnd(s) : this._onMouseUp(), this._removePointer(s), this._pointers.length === 0 && (this.domElement.releasePointerCapture(s.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp)));
}
function Qt(s) {
  this._removePointer(s);
}
function Jt() {
  this.enabled !== !1 && (this.keyState = v.NONE, window.addEventListener("keydown", this._onKeyDown));
}
function te(s) {
  this.enabled !== !1 && (window.removeEventListener("keydown", this._onKeyDown), this.keyState === v.NONE && (s.code === this.keys[v.ROTATE] && !this.noRotate ? this.keyState = v.ROTATE : s.code === this.keys[v.ZOOM] && !this.noZoom ? this.keyState = v.ZOOM : s.code === this.keys[v.PAN] && !this.noPan && (this.keyState = v.PAN)));
}
function ee(s) {
  let t;
  switch (s.button) {
    case 0:
      t = this.mouseButtons.LEFT;
      break;
    case 1:
      t = this.mouseButtons.MIDDLE;
      break;
    case 2:
      t = this.mouseButtons.RIGHT;
      break;
    default:
      t = -1;
  }
  switch (t) {
    case X.DOLLY:
      this.state = v.ZOOM;
      break;
    case X.ROTATE:
      this.state = v.ROTATE;
      break;
    case X.PAN:
      this.state = v.PAN;
      break;
    default:
      this.state = v.NONE;
  }
  const e = this.keyState !== v.NONE ? this.keyState : this.state;
  e === v.ROTATE && !this.noRotate ? (this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY)), this._movePrev.copy(this._moveCurr)) : e === v.ZOOM && !this.noZoom ? (this._zoomStart.copy(this._getMouseOnScreen(s.pageX, s.pageY)), this._zoomEnd.copy(this._zoomStart)) : e === v.PAN && !this.noPan && (this._panStart.copy(this._getMouseOnScreen(s.pageX, s.pageY)), this._panEnd.copy(this._panStart)), this.dispatchEvent(ft);
}
function ie(s) {
  const t = this.keyState !== v.NONE ? this.keyState : this.state;
  t === v.ROTATE && !this.noRotate ? (this._movePrev.copy(this._moveCurr), this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY))) : t === v.ZOOM && !this.noZoom ? this._zoomEnd.copy(this._getMouseOnScreen(s.pageX, s.pageY)) : t === v.PAN && !this.noPan && this._panEnd.copy(this._getMouseOnScreen(s.pageX, s.pageY));
}
function se() {
  this.state = v.NONE, this.dispatchEvent(gt);
}
function oe(s) {
  if (this.enabled !== !1 && this.noZoom !== !0) {
    switch (s.preventDefault(), s.deltaMode) {
      case 2:
        this._zoomStart.y -= s.deltaY * 0.025;
        break;
      case 1:
        this._zoomStart.y -= s.deltaY * 0.01;
        break;
      default:
        this._zoomStart.y -= s.deltaY * 25e-5;
        break;
    }
    this.dispatchEvent(ft), this.dispatchEvent(gt);
  }
}
function ne(s) {
  this.enabled !== !1 && s.preventDefault();
}
function re(s) {
  if (this._trackPointer(s), this._pointers.length === 1)
    this.state = v.TOUCH_ROTATE, this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX, this._pointers[0].pageY)), this._movePrev.copy(this._moveCurr);
  else {
    this.state = v.TOUCH_ZOOM_PAN;
    const t = this._pointers[0].pageX - this._pointers[1].pageX, e = this._pointers[0].pageY - this._pointers[1].pageY;
    this._touchZoomDistanceEnd = this._touchZoomDistanceStart = Math.sqrt(t * t + e * e);
    const i = (this._pointers[0].pageX + this._pointers[1].pageX) / 2, o = (this._pointers[0].pageY + this._pointers[1].pageY) / 2;
    this._panStart.copy(this._getMouseOnScreen(i, o)), this._panEnd.copy(this._panStart);
  }
  this.dispatchEvent(ft);
}
function ae(s) {
  if (this._trackPointer(s), this._pointers.length === 1)
    this._movePrev.copy(this._moveCurr), this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY));
  else {
    const t = this._getSecondPointerPosition(s), e = s.pageX - t.x, i = s.pageY - t.y;
    this._touchZoomDistanceEnd = Math.sqrt(e * e + i * i);
    const o = (s.pageX + t.x) / 2, n = (s.pageY + t.y) / 2;
    this._panEnd.copy(this._getMouseOnScreen(o, n));
  }
}
function he(s) {
  switch (this._pointers.length) {
    case 0:
      this.state = v.NONE;
      break;
    case 1:
      this.state = v.TOUCH_ROTATE, this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY)), this._movePrev.copy(this._moveCurr);
      break;
    case 2:
      this.state = v.TOUCH_ZOOM_PAN;
      for (let t = 0; t < this._pointers.length; t++)
        if (this._pointers[t].pointerId !== s.pointerId) {
          const e = this._pointerPositions[this._pointers[t].pointerId];
          this._moveCurr.copy(this._getMouseOnCircle(e.x, e.y)), this._movePrev.copy(this._moveCurr);
          break;
        }
      break;
  }
  this.dispatchEvent(gt);
}
class ce extends qt {
  /**
   * Constructs a new CSS2D object.
   *
   * @param {HTMLElement} [element] - The DOM element.
   */
  constructor(t = document.createElement("div")) {
    super(), this.isCSS2DObject = !0, this.element = t, this.element.style.position = "absolute", this.element.style.userSelect = "none", this.element.setAttribute("draggable", !1), this.center = new R(0.5, 0.5), this.addEventListener("removed", function() {
      this.traverse(function(e) {
        e.element && e.element instanceof e.element.ownerDocument.defaultView.Element && e.element.parentNode !== null && e.element.remove();
      });
    });
  }
  copy(t, e) {
    return super.copy(t, e), this.element = t.element.cloneNode(!0), this.center = t.center, this;
  }
}
const Y = new j(), Et = new Vt(), Tt = new Vt(), St = new j(), Pt = new j();
class le {
  /**
   * Constructs a new CSS2D renderer.
   *
   * @param {CSS2DRenderer~Parameters} [parameters] - The parameters.
   */
  constructor(t = {}) {
    const e = this;
    let i, o, n, r;
    const a = {
      objects: /* @__PURE__ */ new WeakMap()
    }, l = t.element !== void 0 ? t.element : document.createElement("div");
    l.style.overflow = "hidden", this.domElement = l, this.sortObjects = !0, this.getSize = function() {
      return {
        width: i,
        height: o
      };
    }, this.render = function(p, m) {
      p.matrixWorldAutoUpdate === !0 && p.updateMatrixWorld(), m.parent === null && m.matrixWorldAutoUpdate === !0 && m.updateMatrixWorld(), Et.copy(m.matrixWorldInverse), Tt.multiplyMatrices(m.projectionMatrix, Et), u(p, p, m), this.sortObjects && b(p);
    }, this.setSize = function(p, m) {
      i = p, o = m, n = i / 2, r = o / 2, l.style.width = p + "px", l.style.height = m + "px";
    };
    function h(p) {
      p.isCSS2DObject && (p.element.style.display = "none");
      for (let m = 0, w = p.children.length; m < w; m++)
        h(p.children[m]);
    }
    function u(p, m, w) {
      if (p.visible === !1) {
        h(p);
        return;
      }
      if (p.isCSS2DObject) {
        Y.setFromMatrixPosition(p.matrixWorld), Y.applyMatrix4(Tt);
        const g = Y.z >= -1 && Y.z <= 1 && p.layers.test(w.layers) === !0, y = p.element;
        y.style.display = g === !0 ? "" : "none", g === !0 && (p.onBeforeRender(e, m, w), y.style.transform = "translate(" + -100 * p.center.x + "%," + -100 * p.center.y + "%)translate(" + (Y.x * n + n) + "px," + (-Y.y * r + r) + "px)", y.parentNode !== l && l.appendChild(y), p.onAfterRender(e, m, w));
        const C = {
          distanceToCameraSquared: d(w, p)
        };
        a.objects.set(p, C);
      }
      for (let g = 0, y = p.children.length; g < y; g++)
        u(p.children[g], m, w);
    }
    function d(p, m) {
      return St.setFromMatrixPosition(p.matrixWorld), Pt.setFromMatrixPosition(m.matrixWorld), St.distanceToSquared(Pt);
    }
    function _(p) {
      const m = [];
      return p.traverseVisible(function(w) {
        w.isCSS2DObject && m.push(w);
      }), m;
    }
    function b(p) {
      const m = _(p).sort(function(g, y) {
        if (g.renderOrder !== y.renderOrder)
          return y.renderOrder - g.renderOrder;
        const C = a.objects.get(g).distanceToCameraSquared, M = a.objects.get(y).distanceToCameraSquared;
        return C - M;
      }), w = m.length;
      for (let g = 0, y = m.length; g < y; g++)
        m[g].element.style.zIndex = w - g;
    }
  }
}
function Ve(s, t) {
  let e = 400, i = 400;
  const o = document.getElementById(s), n = new le();
  n.setSize(e, i), o.appendChild(n.domElement);
  const r = new c.Scene(), a = new c.PerspectiveCamera(75, e / i, 0.1, 1e3), l = new c.WebGLRenderer({
    canvas: t,
    antialias: !0
  });
  l.setPixelRatio(window.devicePixelRatio), l.setSize(e, i), a.position.set(0, 0, 15);
  const h = {
    camera_tilt: 0,
    z_height: 0,
    a_coef: 0
  };
  a.lookAt(0, 0, 0), l.render(r, a);
  const u = new Xt(a, l.domElement);
  u.rotateSpeed = 1, u.zoomSpeed = 1.2, u.panSpeed = 0.8, u.noZoom = !1, u.noPan = !1, u.staticMoving = !0, u.dynamicDampingFactor = 0.1, u.target.set(5, 5, 0);
  function d(E, P = {}) {
    if (E.length < 3)
      throw new Error("Need at least 3 points");
    const {
      color: L = 65484,
      opacity: k = 0.7,
      side: rt = c.DoubleSide
    } = P, K = new c.Plane().setFromCoplanarPoints(
      E[0],
      E[1],
      E[2]
    ).normal.clone(), $ = new c.Vector3(), I = new c.Vector3();
    $.crossVectors(
      Math.abs(K.x) > 0.9 ? new c.Vector3(0, 1, 0) : new c.Vector3(1, 0, 0),
      K
    ).normalize(), I.crossVectors(K, $);
    const ht = E.map(
      (J) => new c.Vector2(J.dot($), J.dot(I))
    ), ct = c.ShapeUtils.triangulateShape(ht, []), xt = [];
    for (const J of ct)
      for (const Ht of J) {
        const dt = E[Ht];
        xt.push(dt.x, dt.y, dt.z);
      }
    const lt = new c.BufferGeometry();
    lt.setAttribute(
      "position",
      new c.Float32BufferAttribute(xt, 3)
    ), lt.computeVertexNormals();
    const Ut = new c.MeshStandardMaterial({
      color: L,
      transparent: k < 1,
      opacity: k,
      side: rt
    });
    return new c.Mesh(lt, Ut);
  }
  function _(E, P, L = 16777215) {
    const k = new c.Vector3().subVectors(P, E), rt = k.length(), at = 0.02, K = new c.CylinderGeometry(
      at,
      at,
      rt,
      64
    ), $ = new c.MeshStandardMaterial({ color: L }), I = new c.Mesh(K, $), ht = new c.Vector3().addVectors(E, P).multiplyScalar(0.5);
    I.position.copy(ht);
    const ct = new c.Vector3(0, 1, 0);
    return I.quaternion.setFromUnitVectors(
      ct,
      k.clone().normalize()
    ), r.add(I), I;
  }
  function b(E, P) {
    const L = document.createElement("div");
    L.className = "label", L.textContent = E, L.style.color = "white", L.style.fontSize = "20px", L.style.background = "rgba(0,0,0,0.6)", L.style.padding = "4px 8px", L.style.borderRadius = "6px", L.style.border = "1px solid rgba(255,255,255,0.3)";
    const k = new ce(L);
    return k.position.copy(P), r.add(k), k;
  }
  function p(E, P) {
    E.position.copy(P);
  }
  let m = b("Start", new c.Vector3(0.3, -0.5, 0));
  _(new c.Vector3(-2, 0, 0), new c.Vector3(10, 0, 0)), _(new c.Vector3(0, -2, 0), new c.Vector3(0, 10, 0)), _(new c.Vector3(-2, 5, 0), new c.Vector3(5, -2, 0)), _(new c.Vector3(-2, 11, 0), new c.Vector3(11, -2, 0)), _(new c.Vector3(0, 0, -2), new c.Vector3(0, 0, 8));
  const w = new c.SphereGeometry(
    0.2,
    // radius
    32,
    // width segments
    16
    // height segments
  ), g = new c.MeshStandardMaterial({
    color: 16776960
  }), y = new c.Mesh(w, g);
  y.position.set(0, 0, 0), r.add(y);
  let C = d([
    new c.Vector3(3, 0, 0),
    new c.Vector3(9, 0, 0),
    new c.Vector3(0, 9, 0),
    new c.Vector3(0, 3, 0)
  ]), M = d([
    new c.Vector3(9, 0, 0),
    new c.Vector3(0, 9, 0),
    new c.Vector3(0, 9, h.z_height),
    new c.Vector3(9, 0, h.z_height)
  ]), S = d([
    new c.Vector3(3, 0, 0),
    new c.Vector3(0, 3, 0),
    new c.Vector3(0, 3, 0)
  ], { color: 16711680 }), f = d([
    new c.Vector3(0, 3, 0),
    new c.Vector3(0, 9, 0),
    new c.Vector3(0, 9, h.z_height),
    new c.Vector3(0, h.a_coef, h.z_height)
  ]), V = d([
    new c.Vector3(3, 0, 0),
    new c.Vector3(9, 0, 0),
    new c.Vector3(9, 0, h.z_height),
    new c.Vector3(h.a_coef, 0, h.z_height)
  ]);
  r.add(S, C, V, f, M);
  const z = new c.PointLight(16777215, 20);
  z.position.set(2, 2, 5);
  const O = new c.AmbientLight(16777215, 0.1);
  r.add(O), r.add(z), new c.PointLightHelper(z);
  const H = new c.GridHelper(200, 50);
  H.rotation.x = Math.PI / 2;
  function B(E, P, L = {}) {
    const k = d(P, L);
    E.geometry.dispose(), E.geometry = k.geometry, E.material.dispose(), E.material = k.material;
  }
  function N(E, P) {
    B(M, [
      new c.Vector3(9, 0, 0),
      new c.Vector3(0, 9, 0),
      new c.Vector3(0, 9, P),
      new c.Vector3(9, 0, P)
    ]);
    let L = Math.max(0, 3 - E * P), k = P;
    E > 3 / P && (k = 3 / E), B(S, [
      new c.Vector3(3, 0, 0),
      new c.Vector3(0, 3, 0),
      new c.Vector3(0, L, k),
      new c.Vector3(L, 0, k)
    ], { color: 16711680 }), B(f, [
      new c.Vector3(0, 3, 0),
      new c.Vector3(0, 9, 0),
      new c.Vector3(0, 9, P),
      new c.Vector3(0, L, P),
      new c.Vector3(0, L, k)
    ]), B(V, [
      new c.Vector3(3, 0, 0),
      new c.Vector3(9, 0, 0),
      new c.Vector3(9, 0, P),
      new c.Vector3(L, 0, P),
      new c.Vector3(L, 0, k)
    ]);
  }
  let T = 100;
  function D(E) {
    if (T -= 1, !(T >= 0)) {
      if (h.camera_tilt <= 1) {
        a.position.x += 0.01, a.position.y -= 0.03, a.position.z -= 0.07, h.camera_tilt += 0.01;
        return;
      }
      if (h.z_height <= 7) {
        m.visible = !1, h.z_height += 0.06, h.z_height > 7 && (T = 100), N(h.a_coef, h.z_height);
        return;
      }
      if (h.a_coef <= 1) {
        h.a_coef += 0.01, h.a_coef > 1 && (T = 100), N(h.a_coef, h.z_height);
        return;
      }
      p(m, new c.Vector3(0.3, -0.5, h.a_coef * 3)), y.position.set(0, 0, 3), m.visible = !0;
    }
  }
  function W() {
    requestAnimationFrame(W), l.render(r, a), n.render(r, a), D(), u.update();
  }
  W();
}
const F = 1e-9;
function zt(s, t) {
  return Math.abs(s - t) < F;
}
class Lt {
  lower;
  row;
  upper;
  label;
  constructor({ lower: t, a: e, b: i, upper: o, label: n }) {
    this.lower = t, this.upper = o, this.row = new Array(2), this.row[0] = e, this.row[1] = i, this.label = n;
  }
}
function de(s, t, e) {
  const i = s[t][e];
  if (zt(i, 0))
    throw new Error("Gaussian elimination on zero entry");
  const o = s.length, n = s[0].length;
  for (let r = 0; r < n; r++)
    s[t][r] /= i;
  for (let r = 0; r < o; r++) {
    if (r === t) continue;
    const a = s[r][e];
    for (let l = 0; l < n; l++)
      s[r][l] -= s[t][l] * a;
  }
}
function wt(s, t) {
  for (let e = 0; e < s.length; e++)
    if (s[e] === t) return e;
}
function pe(s, t, e) {
  const i = s[0].length - 1;
  let o, n;
  for (let r = 0; r < e; r++) {
    const a = s[r][t], l = s[r][i];
    if (a < F || l < F) continue;
    const h = l / a;
    (o === void 0 || h < o) && (o = h, n = r);
  }
  return n;
}
class nt {
  basis_dimension;
  num_constraints;
  num_artificial;
  basis;
  dictionary;
  matrix;
  dimension;
  rhsCol;
  constructor(t, e, i, o) {
    this.dimension = e, this.basis_dimension = e + o, this.num_constraints = i, this.num_artificial = o, this.rhsCol = e + i, this.matrix = t, this.basis = new Array(this.basis_dimension).fill(0), this.dictionary = new Array(i).fill(0);
    for (let n = 0; n < this.basis_dimension; n++)
      this.basis[n] = n;
    for (let n = 0; n < i; n++)
      this.dictionary[n] = n + this.basis_dimension;
  }
  clone() {
    const t = new nt(structuredClone(this.matrix), this.dimension, this.num_constraints, this.num_artificial);
    return t.dimension = this.dimension, t.num_constraints = this.num_constraints, t.basis = structuredClone(this.basis), t.dictionary = structuredClone(this.dictionary), t.rhsCol = this.rhsCol, t;
  }
  pivot(t, e) {
    de(this.matrix, t, e);
    const i = this.dictionary[t], o = wt(this.basis, e);
    if (o === void 0)
      throw new Error("Variable not in basis");
    this.basis[o] = i, this.dictionary[t] = e;
  }
  canPivot(t, e) {
    if (t === e)
      return !0;
    if (!this.dictionary.includes(t))
      return !1;
    let i = this.dictionary.indexOf(t), o = e;
    const n = this.matrix[i][o];
    return Math.abs(n) > F;
  }
  pivotVar(t, e) {
    if (t !== e) {
      if (!this.basis.includes(e))
        throw new Error("Pivot basis does not include pivoted out variable");
      if (!this.dictionary.includes(t))
        throw new Error("Pivot dictionary does not include pivoted in variable");
      console.log("vars: ", t, e), console.log("translation: ", this.dictionary.indexOf(t)), this.pivot(this.dictionary.indexOf(t), e);
    }
  }
  simplex_pivot(t) {
    if (wt(this.basis, t) === void 0)
      throw new Error("Cannot pivot variable not in basis");
    const i = pe(
      this.matrix,
      t,
      this.num_constraints
    );
    if (i === void 0) return;
    const o = this.dictionary[i];
    return this.pivot(i, t), o;
  }
  get_cost_function() {
    const t = this.matrix.length - 1;
    return this.matrix[t].slice(0, this.matrix[0].length - 1);
  }
  get_rhs() {
    const t = this.matrix[0].length - 1;
    return this.matrix.slice(0, this.num_constraints).map((e) => e[t]);
  }
  get_cost() {
    const t = this.matrix.length - 1, e = this.matrix[0].length - 1;
    return this.matrix[t][e];
  }
  get_dictionary() {
    return [...this.dictionary];
  }
  trim_tableau() {
    for (let r = 0; r < this.num_constraints; r++) {
      const a = this.dictionary[r];
      if (ot(a, this.basis_dimension - this.num_artificial, this.num_artificial)) {
        let l = !1;
        for (let h = 0; h < this.basis_dimension + this.num_constraints; h++) {
          const u = this.basis[h];
          if (ot(u, this.basis_dimension - this.num_artificial, this.num_artificial))
            continue;
          const d = this.matrix[r][h];
          if (!zt(d, 0)) {
            this.pivot(r, u), l = !0;
            break;
          }
        }
        if (!l)
          throw new Error("Failed to pivot artificial variable");
      }
    }
    const t = this.basis_dimension - this.num_artificial, e = Array.from(
      { length: this.num_constraints + 1 },
      () => new Array(t + this.num_constraints + 1).fill(0)
    );
    for (let r = 0; r <= this.num_constraints; r++) {
      for (let a = 0; a < t; a++)
        e[r][a] = this.matrix[r][a];
      for (let a = 0; a <= this.num_constraints; a++)
        e[r][t + a] = this.matrix[r][this.basis_dimension + a];
    }
    const i = [];
    for (const r of this.basis)
      ot(r, t, this.num_artificial) || i.push(
        Ot(r, t, this.num_artificial) ? r - this.num_artificial : r
      );
    const o = [];
    for (const r of this.dictionary) {
      if (ot(r, t, this.num_artificial))
        throw new Error("Artificial variable in dictionary");
      o.push(
        Ot(r, t, this.num_artificial) ? r - this.num_artificial : r
      );
    }
    const n = new nt(e, t, this.num_constraints, 0);
    return n.basis = i, n.dictionary = o, n;
  }
  extract_coordinates() {
    const t = [];
    for (let e = 0; e < this.dimension; e++)
      if (this.basis.includes(e))
        t[e] = 0;
      else {
        const i = wt(this.dictionary, e);
        t[e] = this.matrix[i][this.rhsCol];
      }
    return t;
  }
  print() {
    console.log("Basis (by column index):", this.basis), console.log("Non-basis:", this.dictionary);
    for (const t of this.matrix)
      console.log(t.map((e) => e.toFixed(1)).join(" "));
  }
}
function ue(s) {
  let t, e;
  for (let i = 0; i < s.length; i++)
    s[i] > F && (t === void 0 || s[i] > t) && (t = s[i], e = i);
  return e;
}
function ot(s, t, e) {
  return s >= t && s < t + e;
}
function Ot(s, t, e) {
  return s >= t + e;
}
function me(s) {
  for (let t = 0; t < s.num_artificial; t++) {
    const e = t + s.basis_dimension - s.num_artificial;
    s.simplex_pivot(e);
  }
}
function we(s) {
  const t = s.get_rhs();
  for (const e of t)
    if (e < -F) throw new Error("Negative RHS");
  for (; ; ) {
    const e = ue(s.get_cost_function());
    if (e === void 0) return !0;
    s.simplex_pivot(e);
  }
}
function kt(s, t, e) {
  const i = t.length;
  let o = 0, n = 0;
  for (const _ of s) {
    const b = _.lower, p = _.upper;
    b !== void 0 && (o++, b > F && n++), p !== void 0 && (o++, p < -F && n++);
  }
  e || (n = 0);
  const r = o + 2, a = i + o + n + 1, l = a - 1, h = Array.from(
    { length: r },
    () => new Array(a).fill(0)
  );
  let u = 0, d = 0;
  for (const _ of s) {
    const b = _.lower, p = _.row, m = _.upper;
    if (b !== void 0) {
      for (let w = 0; w < i; w++)
        h[u][w] = -p[w];
      if (h[u][i + n + u] = 1, h[u][l] = -b, b > F) {
        e && (h[u][i + d] = -1, d++);
        for (let w = 0; w < a; w++)
          h[u][w] *= -1;
      }
      u++;
    }
    if (m !== void 0) {
      for (let w = 0; w < i; w++)
        h[u][w] = p[w];
      if (h[u][i + n + u] = 1, h[u][l] = m, m < -F) {
        e && (h[u][i + d] = -1, d++);
        for (let w = 0; w < a; w++)
          h[u][w] *= -1;
      }
      u++;
    }
  }
  for (let _ = 0; _ < i; _++)
    h[o][_] = t[_];
  for (let _ = 0; _ < n; _++)
    h[o + 1][i + _] = -1;
  return new nt(
    h,
    i,
    o,
    n
  );
}
const A = 1e-7, _e = 16544547;
class yt {
  x;
  y;
  constructor(t, e) {
    this.x = t, this.y = e;
  }
  // return same type as subclass
  add(t) {
    return new this.constructor(this.x + t.x, this.y + t.y);
  }
  subtract(t) {
    return new this.constructor(this.x - t.x, this.y - t.y);
  }
  dot(t) {
    return this.x * t.x + this.y * t.y;
  }
  scale(t) {
    return new this.constructor(this.x * t, this.y * t);
  }
  copy() {
    return new this.constructor(this.x, this.y);
  }
}
class bt extends yt {
}
class G extends yt {
}
class x extends yt {
}
class fe {
  newest;
  oldest;
  count = 0;
  contains(t) {
    return this.newest === t || this.oldest === t;
  }
  remove(t) {
    if (this.newest === t)
      this.newest = void 0, this.count--;
    else if (this.oldest === t)
      this.oldest = void 0, this.count--;
    else
      throw "Tried to remove an element that does not exist";
  }
}
function ge(s, t, e) {
  const i = s.subtract(t), o = e.subtract(s).dot(i) / i.dot(i);
  return s.add(i.scale(o));
}
function Q(s, t, e, i) {
  const o = i.subtract(e), n = new x(o.y, -o.x), r = s.subtract(e);
  if (Math.abs(t.dot(n)) < A)
    return { t: 9999999, p: s };
  const a = -r.dot(n) / t.dot(n);
  return { t: a, p: s.add(t.scale(a)), u: t };
}
function ye(s, t, e, i) {
  const { xmin: o, xmax: n, ymin: r, ymax: a } = i;
  let l, h;
  if (Math.abs(s) < A)
    l = new x(o, -e / t), h = new x(n, -e / t);
  else if (Math.abs(t) < A)
    l = new x(-e / s, r), h = new x(-e / s, a);
  else {
    const u = -(e + t * r) / s, d = -(e + t * a) / s, _ = -(e + s * o) / t, b = -(e + s * n) / t;
    u >= o && u <= n ? l = new x(u, r) : u < o ? l = new x(o, _) : l = new x(n, b), d >= o && d <= n ? h = new x(d, a) : d < o ? h = new x(o, _) : h = new x(n, b);
  }
  return { p1: l, p2: h };
}
class Dt {
  origin;
  constructor(t) {
    this.origin = t;
  }
  to_window(t) {
    return new G(t.x - this.origin.x, this.origin.y - t.y);
  }
  to_page(t) {
    return new bt(t.x + this.origin.x, this.origin.y - t.y);
  }
}
class jt {
  windowBotLeft;
  windowTopRight;
  coordBotLeft;
  coordTopRight;
  w_width;
  w_height;
  c_width;
  c_height;
  constructor(t, e, i, o) {
    this.windowBotLeft = t, this.windowTopRight = e, this.coordBotLeft = i, this.coordTopRight = o, this.w_width = e.x - t.x, this.w_height = e.y - t.y, this.c_width = o.x - i.x, this.c_height = o.y - i.y;
  }
  to_coord(t) {
    const e = (t.x - this.windowBotLeft.x) / this.w_width, i = (t.y - this.windowBotLeft.y) / this.w_height;
    return new x(this.coordBotLeft.x + e * this.c_width, this.coordBotLeft.y + i * this.c_height);
  }
  to_window(t) {
    const e = (t.x - this.coordBotLeft.x) / this.c_width, i = (t.y - this.coordBotLeft.y) / this.c_height;
    return new G(this.windowBotLeft.x + e * this.w_width, this.windowBotLeft.y + i * this.w_height);
  }
}
class Nt {
  pageToWindow;
  windowToCoord;
  constructor(t, e) {
    this.windowToCoord = t, this.pageToWindow = e;
  }
  to_coord(t) {
    const e = this.pageToWindow.to_window(t);
    return this.windowToCoord.to_coord(e);
  }
  to_page(t) {
    const e = this.windowToCoord.to_window(t);
    return this.pageToWindow.to_page(e);
  }
}
class Rt extends Z {
  botLeft;
  topRight;
  delta;
  converter;
  constructor(t, e, i, o) {
    super(), this.botLeft = t, this.topRight = e, this.delta = i, this.converter = o;
    let n = t.x, r = e.x, a = t.y, l = e.y, h = Math.trunc(n / i), u = Math.trunc(r / i), d = Math.trunc(a / i), _ = Math.trunc(l / i), b = Math.abs(Math.round(n / i) - n / i) < A, p = Math.abs(Math.round(r / i) - r / i) < A, m = Math.abs(Math.round(a / i) - a / i) < A, w = Math.abs(Math.round(l / i) - l / i) < A;
    for (let g = d; g <= _; g++) {
      if (g == d && m || g == _ && w)
        continue;
      let y = g * this.delta;
      const C = this.converter.to_page(new x(n, y)), M = this.converter.to_page(new x(r, y));
      this.moveTo(Math.trunc(C.x), Math.trunc(C.y)), this.lineTo(Math.trunc(M.x), Math.trunc(M.y)), this.stroke({
        width: g == 0 ? 2 : 0.5,
        color: 8947848
      });
    }
    for (let g = h; g <= u; g++) {
      if (g == h && b || g == u && p)
        continue;
      let y = g * this.delta;
      const C = this.converter.to_page(new x(y, a)), M = this.converter.to_page(new x(y, l));
      this.moveTo(C.x, C.y), this.lineTo(M.x, M.y), this.stroke({
        width: g == 0 ? 2 : 0.5,
        color: 8947848
      });
    }
  }
}
function Ft(s, t, e, i = 8, o = Math.PI / 6) {
  const n = t.x - e.x, r = t.y - e.y, a = Math.atan2(r, n), l = a + Math.PI - o, h = a + Math.PI + o;
  s.moveTo(t.x, t.y).lineTo(
    t.x + i * Math.cos(l),
    t.y + i * Math.sin(l)
  ).moveTo(t.x, t.y).lineTo(
    t.x + i * Math.cos(h),
    t.y + i * Math.sin(h)
  );
}
class be extends Z {
  direction;
  converter;
  constructor(t, e) {
    super(), this.converter = e, this.direction = t;
    const i = Math.sqrt(t.x * t.x + t.y * t.y);
    if (i < A) {
      this.visible = !1;
      return;
    }
    this.direction.scale(1 / i), this.visible = !0;
  }
  update(t) {
    this.visible && this.draw(t);
  }
  draw(t) {
    const e = t.add(this.direction), i = this.converter.to_page(t), o = this.converter.to_page(e);
    this.clear(), this.moveTo(i.x, i.y).lineTo(o.x, o.y), Ft(this, o, i), this.stroke({
      width: 2,
      color: 16711680
    });
  }
}
class xe extends Z {
  p1;
  p2;
  limits;
  id;
  converter;
  lab;
  lscale;
  eq;
  constructor(t, e, i, o, n, r) {
    super(), this.eq = t, this.p1 = e, this.p2 = i, this.limits = o, this.id = n, this.converter = r, this.visible = !1, this.lscale = Math.sqrt(t.a * t.a + t.b * t.b), this.lab = new _t({
      style: {
        fill: "#000000",
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      }
    }), this.lab.visible = !1;
  }
  update(t) {
    if (!this.visible)
      return;
    const e = ge(this.p1, this.p2, t);
    this.draw(t, e);
  }
  activate() {
    this.visible = !0, this.lab.visible = !0;
  }
  deactivate() {
    this.visible = !1, this.lab.visible = !1;
  }
  toggleActivate() {
    this.visible = !this.visible, this.lab.visible = !this.lab.visible;
  }
  draw(t, e) {
    const { xmin: i, xmax: o, ymin: n, ymax: r } = this.limits;
    let a = e.subtract(t);
    const l = Math.sqrt(a.x * a.x + a.y * a.y);
    a = a.scale(1 / l);
    const h = t, u = new x(i, r), d = new x(o, r), _ = new x(o, n), b = new x(i, n), p = [
      Q(h, a, this.p1, this.p2),
      Q(h, a, u, d),
      Q(h, a, d, _),
      Q(h, a, _, b),
      Q(h, a, b, u)
    ], m = p.reduce((S, f, V) => f.t < 0 ? S : S === -1 || p[S].t < 0 || f.t < p[S].t ? V : S, -1), w = this.converter.to_page(t), g = this.converter.to_page(p[m].p);
    this.clear(), this.moveTo(w.x, w.y).lineTo(g.x, g.y), m === 0 && Ft(this, g, w), this.stroke({
      width: 1,
      color: 3355443
    });
    const y = t.subtract(e), C = y.dot(new x(this.eq.a, this.eq.b)) > 0 ? -1 : 1, M = Math.sqrt(y.x * y.x + y.y * y.y) * this.lscale * C;
    this.lab.text = this.id + "=" + M.toFixed(1), this.lab.x = (w.x + g.x) * 0.5, this.lab.y = (w.y + g.y) * 0.5;
  }
}
class ve {
  visited = !1;
  active = !1;
  lit = !1;
  hit = new Z();
  visual = new Z();
  labelText = new _t();
  p1_page;
  p2_page;
  p1;
  p2;
  id;
  onClick = null;
  onMouseMove = null;
  constructor(t, e, i, o) {
    let n = ye(e.a, e.b, e.d, t);
    this.p1_page = i.to_page(n.p1), this.p2_page = i.to_page(n.p2), this.p1 = n.p1, this.p2 = n.p2, this.id = o, this.labelText = new _t({
      text: o,
      style: {
        fill: "#000000",
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      }
    }), this.labelText.visible = !1, this.labelText.position.x = this.p1_page.x, this.labelText.position.y = this.p1_page.y, this.hit.eventMode = "static", this.hit.cursor = "pointer", this.hit.on("pointerdown", () => this.onClick?.()), this.hit.on("pointermove", (r) => this.onMouseMove?.(r)), this.hit.on("pointerover", () => this.onOver()), this.hit.on("pointerout", () => this.onOut()), this.drawHit(), this.drawVisual();
  }
  onOver() {
    this.labelText.visible = !0, !this.active && (this.visited = !0, this.lit = !0, this.drawVisual());
  }
  onOut() {
    this.labelText.visible = !1, !this.active && (this.lit = !1, this.drawVisual());
  }
  activate() {
    this.active = !0, this.visited = !0, this.drawVisual();
  }
  deactivate() {
    this.active = !1, this.lit = !1, this.visited = !0, this.drawVisual();
  }
  toggleActivate() {
    this.active ? this.deactivate() : this.activate();
  }
  // pulse(power: number){
  //     if(this.visited){
  //         return;
  //     }
  //     let start = {r: 0, g: 0, b: 0};
  //     let end = {r: 255, g: 120, b: 30};
  //     let start_width = 3.0;
  //     let end_width = 5.0;
  //     let width = end_width*power + start_width*(1-power);
  //     let current = {r: end.r*power + start.r*(1-power), g: end.g*power + start.g*(1-power), b: end.b*power + start.b*(1-power)};
  //     const p1: Point = this.converter.to_page(this.p1);
  //     const p2: Point = this.converter.to_page(this.p2);
  //     this.clear();
  //     this.moveTo(p1.x, p1.y)
  //         .lineTo(p2.x, p2.y)
  //         .stroke({
  //             width: width,
  //             color: current,
  //         });
  // }
  drawHit() {
    this.hit.clear(), this.hit.moveTo(this.p1_page.x, this.p1_page.y).lineTo(this.p2_page.x, this.p2_page.y).stroke({ width: 15, alpha: 1e-3 });
  }
  drawVisual() {
    const t = this.lit || this.active;
    this.visual.clear(), this.visual.moveTo(this.p1_page.x, this.p1_page.y).lineTo(this.p2_page.x, this.p2_page.y).stroke({
      width: t ? 5 : 3,
      color: t ? _e : 0
    });
  }
}
class Ce {
  lines = /* @__PURE__ */ new Map();
  linesStatus = [];
  labelToId = /* @__PURE__ */ new Map();
  idToLabel = /* @__PURE__ */ new Map();
  items = new fe();
  numLines = 0;
  tableau;
  origTableau;
  onUpdate = null;
  onWarning = null;
  constructor(t, e) {
    this.labelToId = e;
    for (const [i, o] of this.labelToId)
      this.idToLabel.set(o, i);
    this.tableau = t, this.origTableau = t.clone(), this.numLines = t.num_constraints + t.dimension;
    for (let i = 0; i < this.numLines; i++)
      this.linesStatus.push(!1);
    this.linesStatus[0] = !0, this.linesStatus[1] = !0, this.items.count = 2, this.items.oldest = 0, this.items.newest = 1;
  }
  activeLines() {
    let t = [];
    for (let e = 0; e < this.numLines; e++)
      this.linesStatus[e] && t.push(e);
    return t;
  }
  inactiveLines() {
    let t = [];
    for (let e = 0; e < this.numLines; e++)
      this.linesStatus[e] || t.push(e);
    return t;
  }
  update(t, e) {
    let i = !0;
    const o = this.labelToId.get(t);
    let n = this.items;
    if (e)
      this.items.remove(o), this.linesStatus[o] = !1, this.onUpdate?.();
    else if (n.count === 2)
      this.tableau.canPivot(o, n.oldest) ? (this.tableau.pivotVar(o, n.oldest), this.linesStatus[o] = !0, this.linesStatus[n.oldest] = !1, n.oldest = n.newest, n.newest = o) : this.tableau.canPivot(o, n.newest) ? (this.tableau.pivotVar(o, n.newest), this.linesStatus[o] = !0, this.linesStatus[n.newest] = !1, n.newest = o) : i = !1;
    else if (n.count === 1) {
      this.tableau = this.origTableau.clone(), this.tableau.print();
      const r = n.newest ?? n.oldest;
      let a = !0, l = !0;
      this.tableau.canPivot(o, 0) ? (this.tableau.pivotVar(o, 0), this.tableau.canPivot(r, 1) ? this.tableau.pivotVar(r, 1) : (a = !1, this.tableau = this.origTableau.clone())) : a = !1, !a && this.tableau.canPivot(o, 1) ? (this.tableau.pivotVar(o, 1), this.tableau.canPivot(r, 0) ? this.tableau.pivotVar(r, 0) : (l = !1, this.tableau = this.origTableau.clone())) : l = !1, !a && !l ? (i = !1, this.onWarning?.()) : (this.linesStatus[o] = !0, n.oldest = r, n.newest = o, n.count++);
    } else
      this.linesStatus[o] = !0, n.newest = o, n.count++, this.onUpdate?.();
    i && this.onUpdate?.(), this.tableau.print();
  }
}
class Me {
  container;
  dictionaryContainer;
  costContainer;
  descriptionText;
  warningText;
  titleText;
  idToLabel;
  numSlacks;
  constructor(t, e, i) {
    this.container = t, this.numSlacks = e, this.idToLabel = i, this.container.classList.add("tableau"), this.titleText = document.createElement("h2"), this.titleText.textContent = "Coordinate System", this.descriptionText = document.createElement("div"), this.descriptionText.className = "description", this.dictionaryContainer = document.createElement("div"), this.dictionaryContainer.className = "dictionary", this.costContainer = document.createElement("div"), this.costContainer.className = "cost", this.warningText = document.createElement("div"), this.warningText.className = "warning", this.container.append(
      this.titleText,
      this.descriptionText,
      this.dictionaryContainer,
      this.costContainer,
      this.warningText
    );
  }
  setWarning() {
    this.warningText.textContent = "Cannot use parallel lines as basis!";
  }
  resetWarning() {
    this.warningText.textContent = "";
  }
  update(t) {
    const e = t.matrix, i = t.basis, o = t.dictionary, n = t.rhsCol, r = t.num_constraints;
    this.dictionaryContainer.innerHTML = "";
    for (let h = 0; h < r; h++) {
      const u = o[h], d = this.idToLabel.get(u), b = e[h][u] > 0 ? 1 : -1, p = (b * e[h][n]).toFixed(1), m = document.createElement("div");
      m.className = "row", m.append(`${d} = ${p}`);
      for (const w of i) {
        const g = this.idToLabel.get(w), y = -e[h][w] * b;
        if (Math.abs(y) < A) continue;
        const C = y > 0 ? "+" : "-", M = Math.abs(y), S = Math.abs(M - 1) < A ? "" : M.toFixed(1);
        m.append(` ${C} ${S}`);
        const f = document.createElement("span");
        f.className = "highlight", f.textContent = g, m.append(f);
      }
      this.dictionaryContainer.appendChild(m);
    }
    this.updateCostFunction(t);
    const a = i.map((h) => this.idToLabel.get(h)), l = o.map((h) => this.idToLabel.get(h));
    this.descriptionText.innerHTML = `Basis variables: ${a.join(", ")}<br>Dictionary variables: ${l.join(", ")}`;
  }
  updateCostFunction(t) {
    const e = t.matrix, i = t.basis, o = t.rhsCol, n = t.num_constraints;
    this.costContainer.innerHTML = "";
    let r = 0;
    for (const h of i)
      r += Math.abs(e[n][h]);
    if (r < A) return;
    const a = -e[n][o].toFixed(1), l = document.createElement("div");
    l.className = "row", l.append(`Cost = ${a}`);
    for (const h of i) {
      const u = this.idToLabel.get(h), d = e[n][h];
      if (Math.abs(d) < A) continue;
      const _ = d > 0 ? "+" : "-", b = Math.abs(d), p = Math.abs(b - 1) < A ? "" : b.toFixed(1);
      l.append(` ${_} ${p}`);
      const m = document.createElement("span");
      m.className = "highlight", m.textContent = u, l.append(m);
    }
    this.costContainer.appendChild(l);
  }
}
function Ee(s) {
  const t = s.row[0], e = s.row[1], i = s.lower, o = s.upper;
  let n;
  if (i !== void 0)
    n = { a: -t, b: -e, d: i };
  else if (o !== void 0)
    n = { a: t, b: e, d: -o };
  else
    throw "either lower or upper needs to be defined";
  return n;
}
class Zt {
  coordLimits;
  pageToCoord;
  xExists = !1;
  yExists = !1;
  linesFinalized = !1;
  lines = [];
  arrows = [];
  constraints = [];
  labelDictionary = /* @__PURE__ */ new Map();
  constructor(t, e) {
    this.coordLimits = t, this.pageToCoord = e;
  }
  addLine(t) {
    if (this.linesFinalized)
      throw "Additional lines should not be defined after the tableau is built";
    this.labelDictionary.set(t.label, this.constraints.length);
    const e = Ee(t), i = t.label;
    if (i === "x") {
      if (this.xExists)
        throw "x already exists";
      if (Math.abs(e.a + 1) > A || Math.abs(e.b) > A || Math.abs(e.d) > A)
        throw "Line equation for x label does not match";
      this.xExists = !0;
    } else if (i === "y") {
      if (this.yExists)
        throw "y already exists";
      if (Math.abs(e.b + 1) > A || Math.abs(e.a) > A || Math.abs(e.d) > A)
        throw "Line equation for y label does not match";
      this.yExists = !0;
    }
    const o = new ve(this.coordLimits, e, this.pageToCoord, i), n = new xe(e, o.p1, o.p2, this.coordLimits, i, this.pageToCoord);
    return this.lines.push(o), this.arrows.push(n), this.constraints.push(t), { line: o, arrow: n };
  }
  getLines() {
    return this.linesFinalized = !0, this.lines;
  }
  getArrows() {
    return this.linesFinalized = !0, this.arrows;
  }
  getManager(t) {
    if (!this.xExists || !this.yExists)
      throw "x and y labels must be defined";
    const e = [];
    for (const o of this.constraints)
      o.label === "x" || o.label === "y" || e.push(o);
    this.linesFinalized = !0, t === void 0 && (t = [0, 0]);
    const i = kt(e, t, !1);
    return new Ce(i, this.labelDictionary);
  }
}
function Wt(s, t) {
  const e = [];
  for (const d of s)
    d.label === "x" || d.label === "y" || e.push(d);
  e.push(new Lt({ lower: void 0, a: 0, b: 1, upper: t.ymax, label: "ytop" })), e.push(new Lt({ lower: void 0, a: 1, b: 0, upper: t.xmax, label: "xtop" }));
  const i = [];
  i.push(0), i.push(0);
  let o = kt(e, i, !0);
  me(o), we(o);
  const n = o.trim_tableau(), r = [];
  for (let d = 0; d < o.rhsCol; d++)
    r.push(!1);
  const a = [];
  let l = n.basis[0], h = n.basis[1];
  const u = n.extract_coordinates();
  a.push(new x(u[0], u[1])), r[l] = !0;
  for (let d = 0; d < 99; d++) {
    let _ = n.simplex_pivot(l);
    l = h, h = _;
    const b = n.extract_coordinates();
    if (a.push(new x(b[0], b[1])), r[l])
      break;
    r[l] = !0;
  }
  return a;
}
class Te extends Z {
  verticesPage;
  normalColor = 10670076;
  hoverColor = 3381759;
  onOver = null;
  onOverOut = null;
  onMove = null;
  constructor(t, e) {
    super(), this.verticesPage = t.flatMap((i) => {
      const o = e.to_page(i);
      return [o.x, o.y];
    }), this.eventMode = "static", this.cursor = "pointer", this.draw(this.normalColor), this.on("pointerover", () => this.highlight()), this.on("pointerout", () => this.dehighlight()), this.on("pointermove", (i) => this.onMove?.(i));
  }
  draw(t) {
    this.clear(), this.beginFill(t, 0.2), this.drawPolygon(this.verticesPage), this.endFill();
  }
  highlight() {
    this.draw(this.hoverColor);
  }
  dehighlight() {
    this.draw(this.normalColor);
  }
}
class Se {
  container;
  constructor(t) {
    this.container = t;
  }
  draw(t, e = {}) {
    const {
      fontSize: i = 20,
      fontFamily: o = "Courier New",
      color: n = "#000000"
    } = e;
    this.container.innerHTML = "";
    const r = document.createElement("div");
    r.className = "matrix-wrapper";
    const a = document.createElement("table");
    a.className = "matrix-table", a.style.fontSize = `${i}px`, a.style.fontFamily = o, a.style.color = n;
    const l = t.length - 1;
    for (let h = 0; h < l; h++) {
      const u = document.createElement("tr");
      for (let d = 0; d < t[h].length; d++) {
        const _ = document.createElement("td");
        _.textContent = String(t[h][d]), u.appendChild(_);
      }
      a.appendChild(u);
    }
    r.appendChild(a), this.container.appendChild(r);
  }
}
class Ae {
  container;
  matrixContainer;
  coordinatesContainer;
  app;
  width;
  height;
  app_width;
  constraints;
  costFunction;
  showMatrix;
  showCoords;
  topRightCoord;
  botLeftCoord;
  constructor({ container: t, width: e, height: i, app_width: o, constraints: n, costFunction: r, showMatrix: a, showCoords: l, topRightCoord: h, botLeftCoord: u }) {
    this.container = t, this.width = e, this.height = i, this.app_width = o, this.constraints = n, this.costFunction = r, this.showMatrix = !!a, this.showCoords = !!l, this.topRightCoord = h, this.botLeftCoord = u, this.app = new At(), this.matrixContainer = a || t, this.coordinatesContainer = l || t;
  }
  async init() {
    await this.app.init({
      width: this.width,
      height: this.height,
      backgroundAlpha: 0,
      antialias: !0
    }), this.container.appendChild(this.app.canvas);
    const t = new bt(0, this.app_width), e = new Dt(t), i = new G(0, 0), o = new G(this.app_width, this.app_width), n = new x(this.topRightCoord.x, this.topRightCoord.y), r = new x(this.botLeftCoord.x, this.botLeftCoord.y), a = { xmin: r.x, xmax: n.x, ymin: r.y, ymax: n.y }, l = (a.xmin + a.xmax) * 0.5, h = (a.ymin + a.ymax) * 0.5, u = new jt(i, o, r, n), d = new Nt(u, e), _ = e.to_page(i), b = e.to_page(o), p = new Z().rect(_.x, b.y, b.x - _.x, _.y - b.y).fill({
      color: 15658734,
      alpha: 0.8
    });
    this.app.stage.addChild(p);
    let m = new Rt(r, n, 1, d);
    this.app.stage.addChild(m);
    const w = this.constraints, y = Wt(w, a).flatMap((T) => {
      const D = d.to_page(T);
      return [D.x, D.y];
    }), C = new Z();
    C.beginFill(3381759, 0.2), C.drawPolygon(y), C.endFill(), this.app.stage.addChild(C);
    const M = new Zt(a, d);
    for (const T of w)
      M.addLine(T);
    let S = new x(0, 0);
    this.costFunction !== void 0 && (S = new x(this.costFunction[0], this.costFunction[1])), console.log("PivotSpinnet: ", S);
    const f = new be(S, d);
    this.app.stage.addChild(f);
    const V = M.getLines(), z = M.getArrows(), O = M.getManager(this.costFunction), H = new Me(this.coordinatesContainer, O.tableau.num_constraints, O.idToLabel), B = new Se(this.matrixContainer);
    this.showMatrix && B.draw(O.tableau.matrix, { fontSize: 20 });
    for (const T of V)
      this.app.stage.addChild(T.visual), this.app.stage.addChild(T.labelText);
    for (const T of V)
      this.app.stage.addChild(T.hit);
    this.app.stage.addChild(...z);
    for (const T of z)
      this.app.stage.addChild(T.lab);
    let N = d.to_page(new x(l, h));
    for (const T of V)
      T.onClick = () => {
        console.log("Clicked"), O.update(T.id, T.active);
      }, T.onMouseMove = (D) => {
        const W = D.global;
        N.x = W.x, N.y = W.y;
        const E = d.to_coord(N);
        for (const P of z)
          P.update(E);
        f.update(E);
      };
    O.onUpdate = () => {
      console.log("coordinates:", O.tableau.extract_coordinates());
      const T = d.to_coord(N);
      for (const D of O.activeLines())
        V[D].activate(), z[D].activate(), z[D].update(T);
      f.update(T);
      for (const D of O.inactiveLines())
        V[D].deactivate(), z[D].deactivate();
      H.update(O.tableau), H.resetWarning(), this.showMatrix && B.draw(O.tableau.matrix, { fontSize: 20 });
    }, O.onWarning = () => {
      H.setWarning();
    }, O.onUpdate(), p.eventMode = "static", p.on("pointermove", (T) => {
      const D = T.global;
      N.x = D.x, N.y = D.y;
      const W = d.to_coord(N);
      for (const E of z)
        E.update(W);
      f.update(W);
    });
  }
  destroy() {
    this.app.destroy(!0), this.container.innerHTML = "";
  }
}
class ze {
  container;
  app;
  width;
  height;
  app_width;
  constraints;
  include_polygon;
  interactive_lines;
  active_lines;
  topRightCoord;
  botLeftCoord;
  constructor({ container: t, width: e, height: i, app_width: o, constraints: n, include_polygon: r, interactive_lines: a, active_lines: l, topRightCoord: h, botLeftCoord: u }) {
    this.container = t, this.width = e, this.height = i, this.app_width = o, this.constraints = n, this.include_polygon = r, this.interactive_lines = a, this.active_lines = l, this.topRightCoord = h, this.botLeftCoord = u, this.app = new At();
  }
  async init() {
    await this.app.init({
      width: this.width,
      height: this.height,
      backgroundAlpha: 0,
      antialias: !0
    }), this.container.appendChild(this.app.canvas);
    const t = new bt(0, this.app_width), e = new Dt(t), i = new G(0, 0), o = new G(this.app_width, this.app_width), n = new x(this.topRightCoord.x, this.topRightCoord.y), r = new x(this.botLeftCoord.x, this.botLeftCoord.y), a = { xmin: r.x, xmax: n.x, ymin: r.y, ymax: n.y }, l = (a.xmin + a.xmax) * 0.5, h = (a.ymin + a.ymax) * 0.5, u = new jt(i, o, r, n), d = new Nt(u, e), _ = e.to_page(i), b = e.to_page(o), p = new Z().rect(_.x, b.y, b.x - _.x, _.y - b.y).fill({
      color: 15658734,
      alpha: 0.8
    });
    this.app.stage.addChild(p);
    const m = Wt(this.constraints, a), w = new Te(m, d);
    this.include_polygon && this.app.stage.addChild(w);
    let g = new Rt(r, n, 1, d);
    this.app.stage.addChild(g);
    const y = new Zt(a, d);
    for (const f of this.constraints)
      y.addLine(f);
    const C = y.getLines(), M = y.getArrows();
    for (const f of C)
      this.app.stage.addChild(f.visual);
    for (const f of C)
      this.app.stage.addChild(f.hit);
    this.app.stage.addChild(...M);
    for (const f of M)
      this.app.stage.addChild(f.lab);
    for (let f = 0; f < C.length; f++)
      this.interactive_lines.includes(f) && (C[f].onClick = () => {
        M[f].toggleActivate(), C[f].toggleActivate();
      });
    for (let f = 0; f < C.length; f++)
      C[f].onMouseMove = (V) => {
        const z = V.global;
        S.x = z.x, S.y = z.y;
        const O = d.to_coord(S);
        for (const H of M)
          H.update(O);
      };
    for (let f = 0; f < C.length; f++)
      this.active_lines.includes(f) && (M[f].activate(), C[f].activate());
    let S = d.to_page(new x(l, h));
    p.eventMode = "static", p.on("pointermove", (f) => {
      const V = f.global;
      S.x = V.x, S.y = V.y;
      const z = d.to_coord(S);
      for (const O of M)
        O.update(z);
    }), this.include_polygon && (w.onMove = (f) => {
      const V = f.global;
      S.x = V.x, S.y = V.y;
      const z = d.to_coord(S);
      for (const O of M)
        O.update(z);
    });
  }
  destroy() {
    this.app.destroy(!0), this.container.innerHTML = "";
  }
}
export {
  Lt as Constraint,
  Ae as PivotSnippet,
  ze as SlackSnippet,
  Ve as init3D
};
