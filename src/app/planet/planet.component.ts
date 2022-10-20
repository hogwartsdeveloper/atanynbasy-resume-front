import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss']
})
export class PlanetComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') canvasRef: ElementRef | undefined;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }
  private texture: string = "/assets/planet.jpg";
  private camera!: THREE.PerspectiveCamera;
  private loader = new THREE.TextureLoader;
  private geometry = new THREE.SphereGeometry(1.5, 30, 30);
  private material = new THREE.MeshBasicMaterial({
    // color: 0xFF8001
    map: this.loader.load(this.texture)
  });
  private planet: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createCamera();
    this.startRenderingLoop();
  }

  private createCamera() {
    this.scene = new THREE.Scene();
    this.scene.add(this.planet);

    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      1,
      this.getAspectRatio(),
      1,
      1000
    );
    this.camera.position.z = 400;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animatePlanet() {
    this.planet.rotateY(0.004);
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let self = this;
    (function render() {
      requestAnimationFrame(render);
      self.animatePlanet();
      self.renderer.render(self.scene, self.camera);
    }());
  }
}
