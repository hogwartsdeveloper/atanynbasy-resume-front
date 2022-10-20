import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas') private canvasRef: ElementRef | undefined;

  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  // @Input() public texture: string = "/assets/texture.jpg";

  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  private loader = new THREE.TextureLoader;
  private geometry = new THREE.BoxGeometry(3, 3, 3);
  private material = new THREE.MeshBasicMaterial({
    // map: this.loader.load(this.texture),
    color: 0xFF8001
  });
  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }

  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.add(this.cube);

    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    );
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

}
