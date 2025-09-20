// src/components/3D/SpinningBox.jsx
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SpinningBox({ position = [0, 0, 0], color = "orange" }) {
  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
