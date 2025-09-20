// src/components/3D/Scene.jsx
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import SpinningBox from "./SpinningBox";

export default function Scene() {
  // Load gambar background
  const texture = useLoader(
    THREE.TextureLoader,
    "https://i.pinimg.com/1200x/e5/c6/d2/e5c6d27f647ac21cb0d03f88908e293a.jpg"
  );

  return (
    <>
      {/* Background full */}
      <primitive attach="background" object={texture} />

      {/* Lampu */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* Object 3D */}
      <SpinningBox position={[0, 0, 0]} />
      <SpinningBox position={[-2, 1, -1]} color="green" />
      <SpinningBox position={[2, -1, -1]} color="red" />
    </>
  );
}
