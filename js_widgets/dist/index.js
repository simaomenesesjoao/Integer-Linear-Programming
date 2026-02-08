import * as l from "three";
import { Controls as Ht, MOUSE as $, Vector3 as F, Vector2 as R, Quaternion as qt, MathUtils as Mt, Matrix4 as zt, Object3D as Yt } from "three";
import { Graphics as Z, Text as D, Container as Xt, TextStyle as Gt, Application as At } from "pixi.js";
const wt = { type: "change" }, yt = { type: "start" }, bt = { type: "end" }, Ct = 1e-6, S = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 }, it = new R(), H = new R(), Kt = new F(), st = new F(), mt = new F(), G = new qt(), Tt = new F(), ot = new F(), _t = new F(), nt = new F();
class $t extends Ht {
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
    ], this.mouseButtons = { LEFT: $.ROTATE, MIDDLE: $.DOLLY, RIGHT: $.PAN }, this.target = new F(), this.state = S.NONE, this.keyState = S.NONE, this._lastPosition = new F(), this._lastZoom = 1, this._touchZoomDistanceStart = 0, this._touchZoomDistanceEnd = 0, this._lastAngle = 0, this._eye = new F(), this._movePrev = new R(), this._moveCurr = new R(), this._lastAxis = new F(), this._zoomStart = new R(), this._zoomEnd = new R(), this._panStart = new R(), this._panEnd = new R(), this._pointers = [], this._pointerPositions = {}, this._onPointerMove = Jt.bind(this), this._onPointerDown = Qt.bind(this), this._onPointerUp = te.bind(this), this._onPointerCancel = ee.bind(this), this._onContextMenu = he.bind(this), this._onMouseWheel = ae.bind(this), this._onKeyDown = se.bind(this), this._onKeyUp = ie.bind(this), this._onTouchStart = ce.bind(this), this._onTouchMove = le.bind(this), this._onTouchEnd = de.bind(this), this._onMouseDown = oe.bind(this), this._onMouseMove = ne.bind(this), this._onMouseUp = re.bind(this), this._target0 = this.target.clone(), this._position0 = this.object.position.clone(), this._up0 = this.object.up.clone(), this._zoom0 = this.object.zoom, e !== null && (this.connect(e), this.handleResize()), this.update();
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
    this._eye.subVectors(this.object.position, this.target), this.noRotate || this._rotateCamera(), this.noZoom || this._zoomCamera(), this.noPan || this._panCamera(), this.object.position.addVectors(this.target, this._eye), this.object.isPerspectiveCamera ? (this._checkDistances(), this.object.lookAt(this.target), this._lastPosition.distanceToSquared(this.object.position) > Ct && (this.dispatchEvent(wt), this._lastPosition.copy(this.object.position))) : this.object.isOrthographicCamera ? (this.object.lookAt(this.target), (this._lastPosition.distanceToSquared(this.object.position) > Ct || this._lastZoom !== this.object.zoom) && (this.dispatchEvent(wt), this._lastPosition.copy(this.object.position), this._lastZoom = this.object.zoom)) : console.warn("THREE.TrackballControls: Unsupported camera type.");
  }
  /**
   * Resets the controls to its initial state.
   */
  reset() {
    this.state = S.NONE, this.keyState = S.NONE, this.target.copy(this._target0), this.object.position.copy(this._position0), this.object.up.copy(this._up0), this.object.zoom = this._zoom0, this.object.updateProjectionMatrix(), this._eye.subVectors(this.object.position, this.target), this.object.lookAt(this.target), this.dispatchEvent(wt), this._lastPosition.copy(this.object.position), this._lastZoom = this.object.zoom;
  }
  _panCamera() {
    if (H.copy(this._panEnd).sub(this._panStart), H.lengthSq()) {
      if (this.object.isOrthographicCamera) {
        const t = (this.object.right - this.object.left) / this.object.zoom / this.domElement.clientWidth, e = (this.object.top - this.object.bottom) / this.object.zoom / this.domElement.clientWidth;
        H.x *= t, H.y *= e;
      }
      H.multiplyScalar(this._eye.length() * this.panSpeed), st.copy(this._eye).cross(this.object.up).setLength(H.x), st.add(Kt.copy(this.object.up).setLength(H.y)), this.object.position.add(st), this.target.add(st), this.staticMoving ? this._panStart.copy(this._panEnd) : this._panStart.add(H.subVectors(this._panEnd, this._panStart).multiplyScalar(this.dynamicDampingFactor));
    }
  }
  _rotateCamera() {
    nt.set(this._moveCurr.x - this._movePrev.x, this._moveCurr.y - this._movePrev.y, 0);
    let t = nt.length();
    t ? (this._eye.copy(this.object.position).sub(this.target), Tt.copy(this._eye).normalize(), ot.copy(this.object.up).normalize(), _t.crossVectors(ot, Tt).normalize(), ot.setLength(this._moveCurr.y - this._movePrev.y), _t.setLength(this._moveCurr.x - this._movePrev.x), nt.copy(ot.add(_t)), mt.crossVectors(nt, this._eye).normalize(), t *= this.rotateSpeed, G.setFromAxisAngle(mt, t), this._eye.applyQuaternion(G), this.object.up.applyQuaternion(G), this._lastAxis.copy(mt), this._lastAngle = t) : !this.staticMoving && this._lastAngle && (this._lastAngle *= Math.sqrt(1 - this.dynamicDampingFactor), this._eye.copy(this.object.position).sub(this.target), G.setFromAxisAngle(this._lastAxis, this._lastAngle), this._eye.applyQuaternion(G), this.object.up.applyQuaternion(G)), this._movePrev.copy(this._moveCurr);
  }
  _zoomCamera() {
    let t;
    this.state === S.TOUCH_ZOOM_PAN ? (t = this._touchZoomDistanceStart / this._touchZoomDistanceEnd, this._touchZoomDistanceStart = this._touchZoomDistanceEnd, this.object.isPerspectiveCamera ? this._eye.multiplyScalar(t) : this.object.isOrthographicCamera ? (this.object.zoom = Mt.clamp(this.object.zoom / t, this.minZoom, this.maxZoom), this._lastZoom !== this.object.zoom && this.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")) : (t = 1 + (this._zoomEnd.y - this._zoomStart.y) * this.zoomSpeed, t !== 1 && t > 0 && (this.object.isPerspectiveCamera ? this._eye.multiplyScalar(t) : this.object.isOrthographicCamera ? (this.object.zoom = Mt.clamp(this.object.zoom / t, this.minZoom, this.maxZoom), this._lastZoom !== this.object.zoom && this.object.updateProjectionMatrix()) : console.warn("THREE.TrackballControls: Unsupported camera type")), this.staticMoving ? this._zoomStart.copy(this._zoomEnd) : this._zoomStart.y += (this._zoomEnd.y - this._zoomStart.y) * this.dynamicDampingFactor);
  }
  _getMouseOnScreen(t, e) {
    return it.set(
      (t - this.screen.left) / this.screen.width,
      (e - this.screen.top) / this.screen.height
    ), it;
  }
  _getMouseOnCircle(t, e) {
    return it.set(
      (t - this.screen.width * 0.5 - this.screen.left) / (this.screen.width * 0.5),
      (this.screen.height + 2 * (this.screen.top - e)) / this.screen.width
      // screen.width intentional
    ), it;
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
function Qt(s) {
  this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s));
}
function Jt(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function te(s) {
  this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchEnd(s) : this._onMouseUp(), this._removePointer(s), this._pointers.length === 0 && (this.domElement.releasePointerCapture(s.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp)));
}
function ee(s) {
  this._removePointer(s);
}
function ie() {
  this.enabled !== !1 && (this.keyState = S.NONE, window.addEventListener("keydown", this._onKeyDown));
}
function se(s) {
  this.enabled !== !1 && (window.removeEventListener("keydown", this._onKeyDown), this.keyState === S.NONE && (s.code === this.keys[S.ROTATE] && !this.noRotate ? this.keyState = S.ROTATE : s.code === this.keys[S.ZOOM] && !this.noZoom ? this.keyState = S.ZOOM : s.code === this.keys[S.PAN] && !this.noPan && (this.keyState = S.PAN)));
}
function oe(s) {
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
    case $.DOLLY:
      this.state = S.ZOOM;
      break;
    case $.ROTATE:
      this.state = S.ROTATE;
      break;
    case $.PAN:
      this.state = S.PAN;
      break;
    default:
      this.state = S.NONE;
  }
  const e = this.keyState !== S.NONE ? this.keyState : this.state;
  e === S.ROTATE && !this.noRotate ? (this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY)), this._movePrev.copy(this._moveCurr)) : e === S.ZOOM && !this.noZoom ? (this._zoomStart.copy(this._getMouseOnScreen(s.pageX, s.pageY)), this._zoomEnd.copy(this._zoomStart)) : e === S.PAN && !this.noPan && (this._panStart.copy(this._getMouseOnScreen(s.pageX, s.pageY)), this._panEnd.copy(this._panStart)), this.dispatchEvent(yt);
}
function ne(s) {
  const t = this.keyState !== S.NONE ? this.keyState : this.state;
  t === S.ROTATE && !this.noRotate ? (this._movePrev.copy(this._moveCurr), this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY))) : t === S.ZOOM && !this.noZoom ? this._zoomEnd.copy(this._getMouseOnScreen(s.pageX, s.pageY)) : t === S.PAN && !this.noPan && this._panEnd.copy(this._getMouseOnScreen(s.pageX, s.pageY));
}
function re() {
  this.state = S.NONE, this.dispatchEvent(bt);
}
function ae(s) {
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
    this.dispatchEvent(yt), this.dispatchEvent(bt);
  }
}
function he(s) {
  this.enabled !== !1 && s.preventDefault();
}
function ce(s) {
  if (this._trackPointer(s), this._pointers.length === 1)
    this.state = S.TOUCH_ROTATE, this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX, this._pointers[0].pageY)), this._movePrev.copy(this._moveCurr);
  else {
    this.state = S.TOUCH_ZOOM_PAN;
    const t = this._pointers[0].pageX - this._pointers[1].pageX, e = this._pointers[0].pageY - this._pointers[1].pageY;
    this._touchZoomDistanceEnd = this._touchZoomDistanceStart = Math.sqrt(t * t + e * e);
    const i = (this._pointers[0].pageX + this._pointers[1].pageX) / 2, o = (this._pointers[0].pageY + this._pointers[1].pageY) / 2;
    this._panStart.copy(this._getMouseOnScreen(i, o)), this._panEnd.copy(this._panStart);
  }
  this.dispatchEvent(yt);
}
function le(s) {
  if (this._trackPointer(s), this._pointers.length === 1)
    this._movePrev.copy(this._moveCurr), this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY));
  else {
    const t = this._getSecondPointerPosition(s), e = s.pageX - t.x, i = s.pageY - t.y;
    this._touchZoomDistanceEnd = Math.sqrt(e * e + i * i);
    const o = (s.pageX + t.x) / 2, n = (s.pageY + t.y) / 2;
    this._panEnd.copy(this._getMouseOnScreen(o, n));
  }
}
function de(s) {
  switch (this._pointers.length) {
    case 0:
      this.state = S.NONE;
      break;
    case 1:
      this.state = S.TOUCH_ROTATE, this._moveCurr.copy(this._getMouseOnCircle(s.pageX, s.pageY)), this._movePrev.copy(this._moveCurr);
      break;
    case 2:
      this.state = S.TOUCH_ZOOM_PAN;
      for (let t = 0; t < this._pointers.length; t++)
        if (this._pointers[t].pointerId !== s.pointerId) {
          const e = this._pointerPositions[this._pointers[t].pointerId];
          this._moveCurr.copy(this._getMouseOnCircle(e.x, e.y)), this._movePrev.copy(this._moveCurr);
          break;
        }
      break;
  }
  this.dispatchEvent(bt);
}
class pe extends Yt {
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
const K = new F(), St = new zt(), Et = new zt(), Pt = new F(), Ot = new F();
class ue {
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
    }, c = t.element !== void 0 ? t.element : document.createElement("div");
    c.style.overflow = "hidden", this.domElement = c, this.sortObjects = !0, this.getSize = function() {
      return {
        width: i,
        height: o
      };
    }, this.render = function(d, f) {
      d.matrixWorldAutoUpdate === !0 && d.updateMatrixWorld(), f.parent === null && f.matrixWorldAutoUpdate === !0 && f.updateMatrixWorld(), St.copy(f.matrixWorldInverse), Et.multiplyMatrices(f.projectionMatrix, St), p(d, d, f), this.sortObjects && v(d);
    }, this.setSize = function(d, f) {
      i = d, o = f, n = i / 2, r = o / 2, c.style.width = d + "px", c.style.height = f + "px";
    };
    function h(d) {
      d.isCSS2DObject && (d.element.style.display = "none");
      for (let f = 0, w = d.children.length; f < w; f++)
        h(d.children[f]);
    }
    function p(d, f, w) {
      if (d.visible === !1) {
        h(d);
        return;
      }
      if (d.isCSS2DObject) {
        K.setFromMatrixPosition(d.matrixWorld), K.applyMatrix4(Et);
        const g = K.z >= -1 && K.z <= 1 && d.layers.test(w.layers) === !0, y = d.element;
        y.style.display = g === !0 ? "" : "none", g === !0 && (d.onBeforeRender(e, f, w), y.style.transform = "translate(" + -100 * d.center.x + "%," + -100 * d.center.y + "%)translate(" + (K.x * n + n) + "px," + (-K.y * r + r) + "px)", y.parentNode !== c && c.appendChild(y), d.onAfterRender(e, f, w));
        const b = {
          distanceToCameraSquared: u(w, d)
        };
        a.objects.set(d, b);
      }
      for (let g = 0, y = d.children.length; g < y; g++)
        p(d.children[g], f, w);
    }
    function u(d, f) {
      return Pt.setFromMatrixPosition(d.matrixWorld), Ot.setFromMatrixPosition(f.matrixWorld), Pt.distanceToSquared(Ot);
    }
    function m(d) {
      const f = [];
      return d.traverseVisible(function(w) {
        w.isCSS2DObject && f.push(w);
      }), f;
    }
    function v(d) {
      const f = m(d).sort(function(g, y) {
        if (g.renderOrder !== y.renderOrder)
          return y.renderOrder - g.renderOrder;
        const b = a.objects.get(g).distanceToCameraSquared, M = a.objects.get(y).distanceToCameraSquared;
        return b - M;
      }), w = f.length;
      for (let g = 0, y = f.length; g < y; g++)
        f[g].element.style.zIndex = w - g;
    }
  }
}
function Ae(s, t) {
  let e = 400, i = 400;
  const o = document.getElementById(s), n = new ue();
  n.setSize(e, i), o.appendChild(n.domElement);
  const r = new l.Scene(), a = new l.PerspectiveCamera(75, e / i, 0.1, 1e3), c = new l.WebGLRenderer({
    canvas: t,
    antialias: !0
  });
  c.setPixelRatio(window.devicePixelRatio), c.setSize(e, i), a.position.set(0, 0, 15);
  const h = {
    camera_tilt: 0,
    z_height: 0,
    a_coef: 0
  };
  a.lookAt(0, 0, 0), c.render(r, a);
  const p = new $t(a, c.domElement);
  p.rotateSpeed = 1, p.zoomSpeed = 1.2, p.panSpeed = 0.8, p.noZoom = !1, p.noPan = !1, p.staticMoving = !0, p.dynamicDampingFactor = 0.1, p.target.set(5, 5, 0);
  function u(E, L = {}) {
    if (E.length < 3)
      throw new Error("Need at least 3 points");
    const {
      color: V = 65484,
      opacity: k = 0.7,
      side: ct = l.DoubleSide
    } = L, Q = new l.Plane().setFromCoplanarPoints(
      E[0],
      E[1],
      E[2]
    ).normal.clone(), J = new l.Vector3(), Y = new l.Vector3();
    J.crossVectors(
      Math.abs(Q.x) > 0.9 ? new l.Vector3(0, 1, 0) : new l.Vector3(1, 0, 0),
      Q
    ).normalize(), Y.crossVectors(Q, J);
    const dt = E.map(
      (et) => new l.Vector2(et.dot(J), et.dot(Y))
    ), pt = l.ShapeUtils.triangulateShape(dt, []), vt = [];
    for (const et of pt)
      for (const Bt of et) {
        const ft = E[Bt];
        vt.push(ft.x, ft.y, ft.z);
      }
    const ut = new l.BufferGeometry();
    ut.setAttribute(
      "position",
      new l.Float32BufferAttribute(vt, 3)
    ), ut.computeVertexNormals();
    const It = new l.MeshStandardMaterial({
      color: V,
      transparent: k < 1,
      opacity: k,
      side: ct
    });
    return new l.Mesh(ut, It);
  }
  function m(E, L, V = 16777215) {
    const k = new l.Vector3().subVectors(L, E), ct = k.length(), lt = 0.02, Q = new l.CylinderGeometry(
      lt,
      lt,
      ct,
      64
    ), J = new l.MeshStandardMaterial({ color: V }), Y = new l.Mesh(Q, J), dt = new l.Vector3().addVectors(E, L).multiplyScalar(0.5);
    Y.position.copy(dt);
    const pt = new l.Vector3(0, 1, 0);
    return Y.quaternion.setFromUnitVectors(
      pt,
      k.clone().normalize()
    ), r.add(Y), Y;
  }
  function v(E, L) {
    const V = document.createElement("div");
    V.className = "label", V.textContent = E, V.style.color = "white", V.style.fontSize = "20px", V.style.background = "rgba(0,0,0,0.6)", V.style.padding = "4px 8px", V.style.borderRadius = "6px", V.style.border = "1px solid rgba(255,255,255,0.3)";
    const k = new pe(V);
    return k.position.copy(L), r.add(k), k;
  }
  function d(E, L) {
    E.position.copy(L);
  }
  let f = v("Start", new l.Vector3(0.3, -0.5, 0));
  m(new l.Vector3(-2, 0, 0), new l.Vector3(10, 0, 0)), m(new l.Vector3(0, -2, 0), new l.Vector3(0, 10, 0)), m(new l.Vector3(-2, 5, 0), new l.Vector3(5, -2, 0)), m(new l.Vector3(-2, 11, 0), new l.Vector3(11, -2, 0)), m(new l.Vector3(0, 0, -2), new l.Vector3(0, 0, 8));
  const w = new l.SphereGeometry(
    0.2,
    // radius
    32,
    // width segments
    16
    // height segments
  ), g = new l.MeshStandardMaterial({
    color: 16776960
  }), y = new l.Mesh(w, g);
  y.position.set(0, 0, 0), r.add(y);
  let b = u([
    new l.Vector3(3, 0, 0),
    new l.Vector3(9, 0, 0),
    new l.Vector3(0, 9, 0),
    new l.Vector3(0, 3, 0)
  ]), M = u([
    new l.Vector3(9, 0, 0),
    new l.Vector3(0, 9, 0),
    new l.Vector3(0, 9, h.z_height),
    new l.Vector3(9, 0, h.z_height)
  ]), x = u([
    new l.Vector3(3, 0, 0),
    new l.Vector3(0, 3, 0),
    new l.Vector3(0, 3, 0)
  ], { color: 16711680 }), _ = u([
    new l.Vector3(0, 3, 0),
    new l.Vector3(0, 9, 0),
    new l.Vector3(0, 9, h.z_height),
    new l.Vector3(0, h.a_coef, h.z_height)
  ]), C = u([
    new l.Vector3(3, 0, 0),
    new l.Vector3(9, 0, 0),
    new l.Vector3(9, 0, h.z_height),
    new l.Vector3(h.a_coef, 0, h.z_height)
  ]);
  r.add(x, b, C, _, M);
  const O = new l.PointLight(16777215, 20);
  O.position.set(2, 2, 5);
  const z = new l.AmbientLight(16777215, 0.1);
  r.add(z), r.add(O), new l.PointLightHelper(O);
  const U = new l.GridHelper(200, 50);
  U.rotation.x = Math.PI / 2;
  function I(E, L, V = {}) {
    const k = u(L, V);
    E.geometry.dispose(), E.geometry = k.geometry, E.material.dispose(), E.material = k.material;
  }
  function N(E, L) {
    I(M, [
      new l.Vector3(9, 0, 0),
      new l.Vector3(0, 9, 0),
      new l.Vector3(0, 9, L),
      new l.Vector3(9, 0, L)
    ]);
    let V = Math.max(0, 3 - E * L), k = L;
    E > 3 / L && (k = 3 / E), I(x, [
      new l.Vector3(3, 0, 0),
      new l.Vector3(0, 3, 0),
      new l.Vector3(0, V, k),
      new l.Vector3(V, 0, k)
    ], { color: 16711680 }), I(_, [
      new l.Vector3(0, 3, 0),
      new l.Vector3(0, 9, 0),
      new l.Vector3(0, 9, L),
      new l.Vector3(0, V, L),
      new l.Vector3(0, V, k)
    ]), I(C, [
      new l.Vector3(3, 0, 0),
      new l.Vector3(9, 0, 0),
      new l.Vector3(9, 0, L),
      new l.Vector3(V, 0, L),
      new l.Vector3(V, 0, k)
    ]);
  }
  let P = 100;
  function j(E) {
    if (P -= 1, !(P >= 0)) {
      if (h.camera_tilt <= 1) {
        a.position.x += 0.01, a.position.y -= 0.03, a.position.z -= 0.07, h.camera_tilt += 0.01;
        return;
      }
      if (h.z_height <= 7) {
        f.visible = !1, h.z_height += 0.06, h.z_height > 7 && (P = 100), N(h.a_coef, h.z_height);
        return;
      }
      if (h.a_coef <= 1) {
        h.a_coef += 0.01, h.a_coef > 1 && (P = 100), N(h.a_coef, h.z_height);
        return;
      }
      d(f, new l.Vector3(0.3, -0.5, h.a_coef * 3)), y.position.set(0, 0, 3), f.visible = !0;
    }
  }
  function B() {
    requestAnimationFrame(B), c.render(r, a), n.render(r, a), j(), p.update();
  }
  B();
}
const W = 1e-9;
function kt(s, t) {
  return Math.abs(s - t) < W;
}
class Lt {
  constructor({ lower: t, a: e, b: i, upper: o, label: n }) {
    this.lower = t, this.upper = o, this.row = new Array(2), this.row[0] = e, this.row[1] = i, this.label = n;
  }
}
function fe(s, t, e) {
  const i = s[t][e];
  if (kt(i, 0))
    throw new Error("Gaussian elimination on zero entry");
  const o = s.length, n = s[0].length;
  for (let r = 0; r < n; r++)
    s[t][r] /= i;
  for (let r = 0; r < o; r++) {
    if (r === t) continue;
    const a = s[r][e];
    for (let c = 0; c < n; c++)
      s[r][c] -= s[t][c] * a;
  }
}
function gt(s, t) {
  for (let e = 0; e < s.length; e++)
    if (s[e] === t) return e;
}
function we(s, t, e) {
  const i = s[0].length - 1;
  let o, n;
  for (let r = 0; r < e; r++) {
    const a = s[r][t], c = s[r][i];
    if (a < W || c < W) continue;
    const h = c / a;
    (o === void 0 || h < o) && (o = h, n = r);
  }
  return n;
}
class ht {
  constructor(t, e, i, o) {
    this.dimension = e, this.basis_dimension = e + o, this.num_constraints = i, this.num_artificial = o, this.rhsCol = e + i, this.matrix = t, this.basis = new Array(this.basis_dimension).fill(0), this.dictionary = new Array(i).fill(0);
    for (let n = 0; n < this.basis_dimension; n++)
      this.basis[n] = n;
    for (let n = 0; n < i; n++)
      this.dictionary[n] = n + this.basis_dimension;
  }
  clone() {
    const t = new ht(structuredClone(this.matrix), this.dimension, this.num_constraints, this.num_artificial);
    return t.dimension = this.dimension, t.num_constraints = this.num_constraints, t.basis = structuredClone(this.basis), t.dictionary = structuredClone(this.dictionary), t.rhsCol = this.rhsCol, t;
  }
  pivot(t, e) {
    fe(this.matrix, t, e);
    const i = this.dictionary[t], o = gt(this.basis, e);
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
    return Math.abs(n) > W;
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
    if (gt(this.basis, t) === void 0)
      throw new Error("Cannot pivot variable not in basis");
    const i = we(
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
      if (rt(a, this.basis_dimension - this.num_artificial, this.num_artificial)) {
        let c = !1;
        for (let h = 0; h < this.basis_dimension + this.num_constraints; h++) {
          const p = this.basis[h];
          if (rt(p, this.basis_dimension - this.num_artificial, this.num_artificial))
            continue;
          const u = this.matrix[r][h];
          if (!kt(u, 0)) {
            this.pivot(r, p), c = !0;
            break;
          }
        }
        if (!c)
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
      rt(r, t, this.num_artificial) || i.push(
        Vt(r, t, this.num_artificial) ? r - this.num_artificial : r
      );
    const o = [];
    for (const r of this.dictionary) {
      if (rt(r, t, this.num_artificial))
        throw new Error("Artificial variable in dictionary");
      o.push(
        Vt(r, t, this.num_artificial) ? r - this.num_artificial : r
      );
    }
    const n = new ht(e, t, this.num_constraints, 0);
    return n.basis = i, n.dictionary = o, n;
  }
  extract_coordinates() {
    const t = [];
    for (let e = 0; e < this.dimension; e++)
      if (this.basis.includes(e))
        t[e] = 0;
      else {
        const i = gt(this.dictionary, e);
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
function me(s) {
  let t, e;
  for (let i = 0; i < s.length; i++)
    s[i] > W && (t === void 0 || s[i] > t) && (t = s[i], e = i);
  return e;
}
function rt(s, t, e) {
  return s >= t && s < t + e;
}
function Vt(s, t, e) {
  return s >= t + e;
}
function _e(s) {
  for (let t = 0; t < s.num_artificial; t++) {
    const e = t + s.basis_dimension - s.num_artificial;
    s.simplex_pivot(e);
  }
}
function ge(s) {
  const t = s.get_rhs();
  for (const e of t)
    if (e < -W) throw new Error("Negative RHS");
  for (; ; ) {
    const e = me(s.get_cost_function());
    if (e === void 0) return !0;
    s.simplex_pivot(e);
  }
}
function Dt(s, t, e) {
  const i = t.length;
  let o = 0, n = 0;
  for (const m of s) {
    const v = m.lower, d = m.upper;
    v !== void 0 && (o++, v > W && n++), d !== void 0 && (o++, d < -W && n++);
  }
  e || (n = 0);
  const r = o + 2, a = i + o + n + 1, c = a - 1, h = Array.from(
    { length: r },
    () => new Array(a).fill(0)
  );
  let p = 0, u = 0;
  for (const m of s) {
    const v = m.lower, d = m.row, f = m.upper;
    if (v !== void 0) {
      for (let w = 0; w < i; w++)
        h[p][w] = -d[w];
      if (h[p][i + n + p] = 1, h[p][c] = -v, v > W) {
        e && (h[p][i + u] = -1, u++);
        for (let w = 0; w < a; w++)
          h[p][w] *= -1;
      }
      p++;
    }
    if (f !== void 0) {
      for (let w = 0; w < i; w++)
        h[p][w] = d[w];
      if (h[p][i + n + p] = 1, h[p][c] = f, f < -W) {
        e && (h[p][i + u] = -1, u++);
        for (let w = 0; w < a; w++)
          h[p][w] *= -1;
      }
      p++;
    }
  }
  for (let m = 0; m < i; m++)
    h[o][m] = t[m];
  for (let m = 0; m < n; m++)
    h[o + 1][i + m] = -1;
  return new ht(
    h,
    i,
    o,
    n
  );
}
const A = 1e-7, at = 16544547;
class xt {
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
class q extends xt {
}
class X extends xt {
}
class T extends xt {
}
class ye {
  constructor() {
    this.count = 0;
  }
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
function be(s, t, e) {
  const i = s.subtract(t), o = e.subtract(s).dot(i) / i.dot(i);
  return s.add(i.scale(o));
}
function tt(s, t, e, i) {
  const o = i.subtract(e), n = new T(o.y, -o.x), r = s.subtract(e);
  if (Math.abs(t.dot(n)) < A)
    return { t: 9999999, p: s };
  const a = -r.dot(n) / t.dot(n);
  return { t: a, p: s.add(t.scale(a)), u: t };
}
function xe(s, t, e, i) {
  const { xmin: o, xmax: n, ymin: r, ymax: a } = i;
  let c, h;
  if (Math.abs(s) < A)
    c = new T(o, -e / t), h = new T(n, -e / t);
  else if (Math.abs(t) < A)
    c = new T(-e / s, r), h = new T(-e / s, a);
  else {
    const p = -(e + t * r) / s, u = -(e + t * a) / s, m = -(e + s * o) / t, v = -(e + s * n) / t;
    p >= o && p <= n ? c = new T(p, r) : p < o ? c = new T(o, m) : c = new T(n, v), u >= o && u <= n ? h = new T(u, a) : u < o ? h = new T(o, m) : h = new T(n, v);
  }
  return { p1: c, p2: h };
}
class jt {
  constructor(t) {
    this.origin = t;
  }
  to_window(t) {
    return new X(t.x - this.origin.x, this.origin.y - t.y);
  }
  to_page(t) {
    return new q(t.x + this.origin.x, this.origin.y - t.y);
  }
}
class Ft {
  constructor(t, e, i, o) {
    this.windowBotLeft = t, this.windowTopRight = e, this.coordBotLeft = i, this.coordTopRight = o, this.w_width = e.x - t.x, this.w_height = e.y - t.y, this.c_width = o.x - i.x, this.c_height = o.y - i.y;
  }
  to_coord(t) {
    const e = (t.x - this.windowBotLeft.x) / this.w_width, i = (t.y - this.windowBotLeft.y) / this.w_height;
    return new T(this.coordBotLeft.x + e * this.c_width, this.coordBotLeft.y + i * this.c_height);
  }
  to_window(t) {
    const e = (t.x - this.coordBotLeft.x) / this.c_width, i = (t.y - this.coordBotLeft.y) / this.c_height;
    return new X(this.windowBotLeft.x + e * this.w_width, this.windowBotLeft.y + i * this.w_height);
  }
}
class Ut {
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
class Nt extends Z {
  constructor(t, e, i, o) {
    super(), this.botLeft = t, this.topRight = e, this.delta = i, this.converter = o;
    let n = t.x, r = e.x, a = t.y, c = e.y, h = Math.trunc(n / i), p = Math.trunc(r / i), u = Math.trunc(a / i), m = Math.trunc(c / i), v = Math.abs(Math.round(n / i) - n / i) < A, d = Math.abs(Math.round(r / i) - r / i) < A, f = Math.abs(Math.round(a / i) - a / i) < A, w = Math.abs(Math.round(c / i) - c / i) < A;
    console.log("GRID", h, p, v, d);
    for (let g = u; g <= m; g++) {
      if (g == u && f || g == m && w)
        continue;
      let y = g * this.delta;
      const b = this.converter.to_page(new T(n, y)), M = this.converter.to_page(new T(r, y));
      this.moveTo(Math.trunc(b.x), Math.trunc(b.y)), this.lineTo(Math.trunc(M.x), Math.trunc(M.y)), this.stroke({
        width: g == 0 ? 2 : 0.5,
        color: 8947848
      });
    }
    for (let g = h; g <= p; g++) {
      if (g == h && v || g == p && d)
        continue;
      let y = g * this.delta;
      const b = this.converter.to_page(new T(y, a)), M = this.converter.to_page(new T(y, c));
      this.moveTo(b.x, b.y), this.lineTo(M.x, M.y), this.stroke({
        width: g == 0 ? 2 : 0.5,
        color: 8947848
      });
    }
  }
}
function Rt(s, t, e, i = 8, o = Math.PI / 6) {
  const n = t.x - e.x, r = t.y - e.y, a = Math.atan2(r, n), c = a + Math.PI - o, h = a + Math.PI + o;
  s.moveTo(t.x, t.y).lineTo(
    t.x + i * Math.cos(c),
    t.y + i * Math.sin(c)
  ).moveTo(t.x, t.y).lineTo(
    t.x + i * Math.cos(h),
    t.y + i * Math.sin(h)
  );
}
class ve extends Z {
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
    if (!this.visible) {
      console.log("Arrow not update!");
      return;
    }
    console.log("Arrow update!"), this.draw(t);
  }
  draw(t) {
    const e = t.add(this.direction), i = this.converter.to_page(t), o = this.converter.to_page(e);
    this.clear(), this.moveTo(i.x, i.y).lineTo(o.x, o.y), Rt(this, o, i), this.stroke({
      width: 2,
      color: 16711680
    });
  }
}
class Me extends Z {
  constructor(t, e, i, o, n, r) {
    super(), this.eq = t, this.p1 = e, this.p2 = i, this.limits = o, this.id = n, this.converter = r, this.visible = !1, this.lscale = Math.sqrt(t.a * t.a + t.b * t.b), this.lab = new D({
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
    const e = be(this.p1, this.p2, t);
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
    const c = Math.sqrt(a.x * a.x + a.y * a.y);
    a = a.scale(1 / c);
    const h = t, p = new T(i, r), u = new T(o, r), m = new T(o, n), v = new T(i, n), d = [
      tt(h, a, this.p1, this.p2),
      tt(h, a, p, u),
      tt(h, a, u, m),
      tt(h, a, m, v),
      tt(h, a, v, p)
    ], f = d.reduce((x, _, C) => _.t < 0 ? x : x === -1 || d[x].t < 0 || _.t < d[x].t ? C : x, -1), w = this.converter.to_page(t), g = this.converter.to_page(d[f].p);
    this.clear(), this.moveTo(w.x, w.y).lineTo(g.x, g.y), f === 0 && Rt(this, g, w), this.stroke({
      width: 1,
      color: 3355443
    });
    const y = t.subtract(e), b = y.dot(new T(this.eq.a, this.eq.b)) > 0 ? -1 : 1, M = Math.sqrt(y.x * y.x + y.y * y.y) * this.lscale * b;
    this.lab.text = this.id + "=" + M.toFixed(1), this.lab.x = (w.x + g.x) * 0.5, this.lab.y = (w.y + g.y) * 0.5;
  }
}
class Ce {
  constructor(t, e, i, o) {
    this.visited = !1, this.active = !1, this.lit = !1, this.hit = new Z(), this.visual = new Z(), this.labelText = new D(), this.onClick = null, this.onMouseMove = null;
    let n = xe(e.a, e.b, e.d, t);
    this.p1_page = i.to_page(n.p1), this.p2_page = i.to_page(n.p2), this.p1 = n.p1, this.p2 = n.p2, this.id = o, this.labelText = new D({
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
      color: t ? at : 0
    });
  }
}
class Te {
  constructor(t, e) {
    this.lines = /* @__PURE__ */ new Map(), this.linesStatus = [], this.labelToId = /* @__PURE__ */ new Map(), this.idToLabel = /* @__PURE__ */ new Map(), this.items = new ye(), this.numLines = 0, this.onUpdate = null, this.onWarning = null, this.labelToId = e;
    for (const [i, o] of this.labelToId)
      this.idToLabel.set(o, i);
    this.tableau = t, this.origTableau = t.clone(), this.numLines = t.num_constraints + t.dimension;
    for (let i = 0; i < this.numLines; i++)
      this.linesStatus.push(!1);
    this.linesStatus[0] = !0, this.linesStatus[1] = !0, console.log("LInesStatus: ", this.linesStatus), this.items.count = 2, this.items.oldest = 0, this.items.newest = 1;
  }
  activeLines() {
    let t = [];
    for (let e = 0; e < this.numLines; e++)
      this.linesStatus[e] && t.push(e);
    return console.log("active: ", t), t;
  }
  inactiveLines() {
    let t = [];
    for (let e = 0; e < this.numLines; e++)
      this.linesStatus[e] || t.push(e);
    return console.log("inactive: ", t), t;
  }
  update(t, e) {
    let i = !0;
    const o = this.labelToId.get(t);
    let n = this.items;
    if (console.log("onUpdate: labelToId ", this.labelToId), console.log("onUpdate: clickedLineLabel ", t), console.log("onUpdate: numLines ", this.numLines), console.log("onUpdate: items ", n), console.log("onUpdate: id ", o), e)
      console.log("onUpdate: line was active"), this.items.remove(o), this.linesStatus[o] = !1, this.onUpdate?.();
    else if (console.log("onUpdate: line was inactive"), n.count === 2)
      console.log("onUpdate: there are currently two lines"), this.tableau.canPivot(o, n.oldest) ? (console.log("onUpdate: pivot the oldest"), this.tableau.pivotVar(o, n.oldest), this.linesStatus[o] = !0, this.linesStatus[n.oldest] = !1, n.oldest = n.newest, n.newest = o) : this.tableau.canPivot(o, n.newest) ? (console.log("onUpdate: pivot the newest"), this.tableau.pivotVar(o, n.newest), this.linesStatus[o] = !0, this.linesStatus[n.newest] = !1, n.newest = o) : (console.log("onUpdate: no pivot"), i = !1);
    else if (n.count === 1) {
      console.log("onUpdate: there is currently one line"), this.tableau = this.origTableau.clone(), console.log("Current tableau"), this.tableau.print();
      const r = n.newest ?? n.oldest;
      console.log("onUpdate: item", r);
      let a = !0, c = !0;
      this.tableau.canPivot(o, 0) ? (this.tableau.pivotVar(o, 0), this.tableau.canPivot(r, 1) ? this.tableau.pivotVar(r, 1) : (a = !1, this.tableau = this.origTableau.clone())) : a = !1, console.log("onUpdate: first success? ", a), !a && this.tableau.canPivot(o, 1) ? (this.tableau.pivotVar(o, 1), this.tableau.canPivot(r, 0) ? this.tableau.pivotVar(r, 0) : (c = !1, this.tableau = this.origTableau.clone())) : c = !1, console.log("onUpdate: second success? ", c), !a && !c ? (i = !1, this.onWarning?.()) : (this.linesStatus[o] = !0, n.oldest = r, n.newest = o, n.count++);
    } else
      console.log("onUpdate: there is currently no line"), this.linesStatus[o] = !0, n.newest = o, n.count++, this.onUpdate?.();
    i && (console.log("onUpdate: pivot was possible"), this.onUpdate?.()), this.tableau.print();
  }
}
class Se {
  constructor(t, e, i, o) {
    this.dictionaryTexts = [], this.labelToId = /* @__PURE__ */ new Map(), this.idToLabel = /* @__PURE__ */ new Map(), this.labelToId = e, this.idToLabel = i, this.converter = o, this.numSlacks = t;
    for (let n = 0; n < t; n++) {
      const r = new D({
        text: "",
        style: {
          fill: "#000000",
          fontSize: 16,
          fontFamily: "Montserrat Medium"
        }
      });
      r.visible = !0, this.dictionaryTexts.push(r);
    }
    this.costText = new D({
      text: "",
      style: {
        fill: "#000000",
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      }
    }), this.costText.visible = !0, this.descriptionText = new D({
      text: "",
      style: {
        fill: "#000000",
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      }
    }), this.descriptionText.visible = !0, this.warningText = new D({
      text: "Warning  ",
      style: {
        fill: at,
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      }
    }), this.warningText.visible = !0, this.titleText = new D({
      text: "Coordinate System ",
      style: {
        fill: "#000000",
        fontSize: 25,
        fontFamily: "Montserrat Medium"
      }
    }), this.titleText.visible = !0;
  }
  setWarning() {
    this.warningText.text = "Cannot use parallel lines as basis!  ";
  }
  resetWarning() {
    this.warningText.text = "";
  }
  pos(t) {
    const e = this.converter.to_page(t), i = e.x, o = e.y - 200;
    this.titleText.position = new q(i, o), this.descriptionText.position = new q(i, o + 50);
    for (let n = 0; n < this.numSlacks; n++) {
      const r = this.dictionaryTexts[n];
      r.position = new q(i, o + 100 + n * 22);
    }
    this.costText.position = new q(i, o + 120 + this.numSlacks * 22), this.warningText.position = new q(i, o + 150 + this.numSlacks * 22);
  }
  updateCostFunction(t) {
    const e = t.rhsCol, i = t.matrix, o = t.basis, n = t.num_constraints;
    let r = 0;
    for (const u of o)
      r += Math.abs(i[n][u]);
    if (r < A)
      return;
    const a = this.costText;
    a.removeChildren();
    const c = -i[n][e].toFixed(1), h = new D(`Cost = ${c}`, {
      fill: 0,
      // color for base part
      fontSize: 16,
      fontFamily: "Montserrat Medium"
    });
    h.x = 0, a.addChild(h);
    let p = h.width;
    for (let u = 0; u < o.length; u++) {
      const m = o[u], v = this.idToLabel.get(m), d = i[n][m];
      if (Math.abs(d) < A) continue;
      const f = d > 0 ? "+" : "-", w = Math.abs(d), g = Math.abs(w - 1) < A ? "" : w.toFixed(1), y = new D(` ${f} ${g}`, {
        fill: 0,
        // different color for basis variable
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      });
      y.x = p, a.addChild(y), p += y.width;
      const b = new D(`${v}`, {
        fill: at,
        // different color for basis variable
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      });
      b.x = p, a.addChild(b), p += b.width;
    }
  }
  update(t) {
    const e = t.rhsCol, i = t.matrix, o = t.basis, n = t.dictionary, r = t.num_constraints;
    for (let c = 0; c < r; c++) {
      const h = n[c], p = this.idToLabel.get(h), m = i[c][h] > 0 ? 1 : -1, v = (m * i[c][e]).toFixed(1), d = this.dictionaryTexts[c];
      d.removeChildren();
      const f = new D(`${p} = ${v}`, {
        fill: 0,
        // color for base part
        fontSize: 16,
        fontFamily: "Montserrat Medium"
      });
      f.x = 0, d.addChild(f);
      let w = f.width;
      for (const g of o) {
        const y = this.idToLabel.get(g), b = -i[c][g] * m;
        if (Math.abs(b) < A) continue;
        const M = b > 0 ? "+" : "-", x = Math.abs(b), _ = Math.abs(x - 1) < A ? "" : x.toFixed(1), C = new D(` ${M} ${_}`, {
          fill: 0,
          // different color for basis variable
          fontSize: 16,
          fontFamily: "Montserrat Medium"
        });
        C.x = w, d.addChild(C), w += C.width;
        const O = new D(`${y}`, {
          fill: at,
          // different color for basis variable
          fontSize: 16,
          fontFamily: "Montserrat Medium"
        });
        O.x = w, d.addChild(O), w += O.width;
      }
    }
    this.updateCostFunction(t);
    let a = [];
    for (const c of o)
      a.push(this.idToLabel.get(c));
    this.descriptionText.text = "Basis variables: " + a.join(", ") + `  
`, a = [];
    for (const c of n)
      a.push(this.idToLabel.get(c));
    this.descriptionText.text += "Dictionary variables: " + a.join(", ") + "  ";
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
class Wt {
  constructor(t, e) {
    this.xExists = !1, this.yExists = !1, this.linesFinalized = !1, this.lines = [], this.arrows = [], this.constraints = [], this.labelDictionary = /* @__PURE__ */ new Map(), this.coordLimits = t, this.pageToCoord = e;
  }
  addLine(t) {
    if (this.linesFinalized)
      throw "Additional lines should not be defined after the tableau is built";
    this.labelDictionary.set(t.label, this.constraints.length), console.log("constraint ", t);
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
    const o = new Ce(this.coordLimits, e, this.pageToCoord, i), n = new Me(e, o.p1, o.p2, this.coordLimits, i, this.pageToCoord);
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
      console.log("getManager: ", o.label), !(o.label === "x" || o.label === "y") && e.push(o);
    console.log("getManager: ", e), this.linesFinalized = !0, t === void 0 && (t = [0, 0]);
    const i = Dt(e, t, !1);
    return console.log("getManager: ", i), new Te(i, this.labelDictionary);
  }
}
function Zt(s, t) {
  const e = [];
  for (const u of s)
    u.label === "x" || u.label === "y" || e.push(u);
  e.push(new Lt({ lower: void 0, a: 0, b: 1, upper: t.ymax, label: "ytop" })), e.push(new Lt({ lower: void 0, a: 1, b: 0, upper: t.xmax, label: "xtop" }));
  const i = [];
  i.push(0), i.push(0);
  let o = Dt(e, i, !0);
  _e(o), ge(o);
  const n = o.trim_tableau(), r = [];
  for (let u = 0; u < o.rhsCol; u++)
    r.push(!1);
  const a = [];
  let c = n.basis[0], h = n.basis[1];
  const p = n.extract_coordinates();
  a.push(new T(p[0], p[1])), r[c] = !0;
  for (let u = 0; u < 99; u++) {
    console.log("basis:", n.basis), console.log("dict:", n.dictionary), console.log("old, rec: ", c, h);
    let m = n.simplex_pivot(c);
    c = h, h = m;
    const v = n.extract_coordinates();
    if (a.push(new T(v[0], v[1])), console.log(v), r[c])
      break;
    r[c] = !0;
  }
  return console.log(a), a;
}
class Pe extends Z {
  constructor(t, e) {
    super(), this.normalColor = 10670076, this.hoverColor = 3381759, this.onOver = null, this.onOverOut = null, this.onMove = null, this.verticesPage = t.flatMap((i) => {
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
class Oe extends Xt {
  draw(t, e = {}) {
    this.removeChildren(0, this.children.length, !0);
    const {
      fontSize: i = 20,
      cellPadding: o = 5,
      fontFamily: n = "Courier New",
      color: r = 0
    } = e, a = t.length - 1, c = t[0].length, h = new Gt({
      fontFamily: n,
      fontSize: i,
      fill: r
    }), p = new Array(c).fill(0);
    for (let x = 0; x < c; x++) {
      for (let _ = 0; _ < a; _++) {
        const C = new D(String(t[_][x]), h);
        p[x] = Math.max(p[x], C.width), C.destroy();
      }
      p[x] += o * 2;
    }
    const u = new D("0", h), m = u.height + o * 1.5;
    u.destroy();
    const v = [];
    let d = 0;
    for (let x = 0; x < c; x++)
      v[x] = d, d += p[x];
    for (let x = 0; x < a; x++)
      for (let _ = 0; _ < c; _++) {
        const C = new D(String(t[x][_]), h);
        C.anchor.set(0.5), C.x = v[_] + p[_] / 2, C.y = x * m + m / 2, this.addChild(C);
      }
    const f = new Z(), w = a * m, g = d, y = 6, b = -4, M = 2;
    f.moveTo(b + y, -M), f.lineTo(b, -M), f.lineTo(b, w + M), f.lineTo(b + y, w + M), f.moveTo(-b + g - y, -M), f.lineTo(-b + g, -M), f.lineTo(-b + g, w + M), f.lineTo(-b + g - y, w + M), f.stroke({
      width: 1,
      color: r,
      alpha: 1
    }), this.addChild(f);
  }
}
class ke {
  constructor({ container: t, width: e, height: i, app_width: o, constraints: n, costFunction: r, showMatrix: a, topRightCoord: c, botLeftCoord: h }) {
    this.container = t, this.width = e, this.height = i, this.app_width = o, this.constraints = n, this.costFunction = r, this.showMatrix = a, this.topRightCoord = c, this.botLeftCoord = h, this.app = new At();
  }
  async init() {
    await this.app.init({
      width: this.width,
      height: this.height,
      backgroundAlpha: 0,
      antialias: !0
    }), this.container.appendChild(this.app.canvas);
    const t = new q(0, this.app_width), e = new jt(t), i = new X(0, 0), o = new X(this.app_width, this.app_width), n = new T(this.topRightCoord.x, this.topRightCoord.y), r = new T(this.botLeftCoord.x, this.botLeftCoord.y), a = { xmin: r.x, xmax: n.x, ymin: r.y, ymax: n.y }, c = (a.xmin + a.xmax) * 0.5, h = (a.ymin + a.ymax) * 0.5, p = new Ft(i, o, r, n), u = new Ut(p, e), m = e.to_page(i), v = e.to_page(o), d = new Z().rect(m.x, v.y, v.x - m.x, m.y - v.y).fill({
      color: 15658734,
      alpha: 0.8
    });
    this.app.stage.addChild(d);
    let f = new Nt(r, n, 1, u);
    this.app.stage.addChild(f);
    const w = this.constraints, y = Zt(w, a).flatMap((P) => {
      const j = u.to_page(P);
      return [j.x, j.y];
    }), b = new Z();
    b.beginFill(3381759, 0.2), b.drawPolygon(y), b.endFill(), this.app.stage.addChild(b);
    const M = new Wt(a, u);
    for (const P of w)
      M.addLine(P);
    let x = new T(0, 0);
    this.costFunction !== void 0 && (x = new T(this.costFunction[0], this.costFunction[1])), console.log("PivotSpinnet: ", x);
    const _ = new ve(x, u);
    this.app.stage.addChild(_);
    const C = M.getLines(), O = M.getArrows(), z = M.getManager(this.costFunction), U = new Se(z.tableau.num_constraints, z.labelToId, z.idToLabel, e), I = new Oe();
    this.showMatrix && (I.draw(z.tableau.matrix, { fontSize: 20 }), I.position = { x: 600, y: 100 }, this.app.stage.addChild(I)), this.app.stage.addChild(...U.dictionaryTexts), this.app.stage.addChild(U.costText), this.app.stage.addChild(U.descriptionText), this.app.stage.addChild(U.warningText), this.app.stage.addChild(U.titleText), U.pos(new X(this.app_width + 50, 50));
    for (const P of C)
      this.app.stage.addChild(P.visual), this.app.stage.addChild(P.labelText);
    for (const P of C)
      this.app.stage.addChild(P.hit);
    this.app.stage.addChild(...O);
    for (const P of O)
      this.app.stage.addChild(P.lab);
    let N = u.to_page(new T(c, h));
    for (const P of C)
      P.onClick = () => {
        console.log("Clicked"), z.update(P.id, P.active);
      }, P.onMouseMove = (j) => {
        const B = j.global;
        N.x = B.x, N.y = B.y;
        const E = u.to_coord(N);
        for (const L of O)
          L.update(E);
        _.update(E);
      };
    z.onUpdate = () => {
      console.log("coordinates:", z.tableau.extract_coordinates());
      const P = u.to_coord(N);
      for (const j of z.activeLines())
        C[j].activate(), O[j].activate(), O[j].update(P);
      _.update(P);
      for (const j of z.inactiveLines())
        C[j].deactivate(), O[j].deactivate();
      U.update(z.tableau), U.resetWarning(), this.showMatrix && I.draw(z.tableau.matrix, { fontSize: 20 });
    }, z.onWarning = () => {
      U.setWarning();
    }, z.onUpdate(), d.eventMode = "static", d.on("pointermove", (P) => {
      const j = P.global;
      N.x = j.x, N.y = j.y;
      const B = u.to_coord(N);
      for (const E of O)
        E.update(B);
      _.update(B);
    });
  }
  destroy() {
    this.app.destroy(!0), this.container.innerHTML = "";
  }
}
class De {
  constructor({ container: t, width: e, height: i, app_width: o, constraints: n, include_polygon: r, interactive_lines: a, active_lines: c, topRightCoord: h, botLeftCoord: p }) {
    this.container = t, this.width = e, this.height = i, this.app_width = o, this.constraints = n, this.include_polygon = r, this.interactive_lines = a, this.active_lines = c, this.topRightCoord = h, this.botLeftCoord = p, this.app = new At();
  }
  async init() {
    await this.app.init({
      width: this.width,
      height: this.height,
      backgroundAlpha: 0,
      antialias: !0
    }), this.container.appendChild(this.app.canvas);
    const t = new q(0, this.app_width), e = new jt(t), i = new X(0, 0), o = new X(this.app_width, this.app_width), n = new T(this.topRightCoord.x, this.topRightCoord.y), r = new T(this.botLeftCoord.x, this.botLeftCoord.y), a = { xmin: r.x, xmax: n.x, ymin: r.y, ymax: n.y }, c = (a.xmin + a.xmax) * 0.5, h = (a.ymin + a.ymax) * 0.5, p = new Ft(i, o, r, n), u = new Ut(p, e), m = e.to_page(i), v = e.to_page(o), d = new Z().rect(m.x, v.y, v.x - m.x, m.y - v.y).fill({
      color: 15658734,
      alpha: 0.8
    });
    this.app.stage.addChild(d);
    const f = Zt(this.constraints, a), w = new Pe(f, u);
    this.include_polygon && this.app.stage.addChild(w);
    let g = new Nt(r, n, 1, u);
    this.app.stage.addChild(g);
    const y = new Wt(a, u);
    for (const _ of this.constraints)
      y.addLine(_);
    const b = y.getLines(), M = y.getArrows();
    for (const _ of b)
      this.app.stage.addChild(_.visual);
    for (const _ of b)
      this.app.stage.addChild(_.hit);
    this.app.stage.addChild(...M);
    for (const _ of M)
      this.app.stage.addChild(_.lab);
    for (let _ = 0; _ < b.length; _++)
      this.interactive_lines.includes(_) && (b[_].onClick = () => {
        M[_].toggleActivate(), b[_].toggleActivate();
      });
    for (let _ = 0; _ < b.length; _++)
      b[_].onMouseMove = (C) => {
        const O = C.global;
        x.x = O.x, x.y = O.y;
        const z = u.to_coord(x);
        for (const U of M)
          U.update(z);
      };
    for (let _ = 0; _ < b.length; _++)
      this.active_lines.includes(_) && (M[_].activate(), b[_].activate());
    let x = u.to_page(new T(c, h));
    d.eventMode = "static", d.on("pointermove", (_) => {
      const C = _.global;
      x.x = C.x, x.y = C.y;
      const O = u.to_coord(x);
      for (const z of M)
        z.update(O);
    }), this.include_polygon && (w.onMove = (_) => {
      const C = _.global;
      x.x = C.x, x.y = C.y;
      const O = u.to_coord(x);
      for (const z of M)
        z.update(O);
    });
  }
  destroy() {
    this.app.destroy(!0), this.container.innerHTML = "";
  }
}
export {
  Lt as Constraint,
  ke as PivotSnippet,
  De as SlackSnippet,
  Ae as init3D
};
