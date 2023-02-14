import { Vector3 } from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { SpotLight } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "@react-three/drei/core";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./laptop5.gltf");

  return (
    <>
      <primitive object={gltf.scene} scale={0.3} />
    </>
  );
};

function Box() {
  return (
    <>
      <MovieSpotLight color="#a3e635" position={[1, 3, 0]} />
      <MovieSpotLight color="#ffffff" position={[-1, 3, 0]} />
      <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50, 50]} />
        <meshPhongMaterial />
      </mesh>
    </>
  );
}

const MovieSpotLight = ({ vec = new Vector3(), ...props }) => {
  const lightRef = useRef<HTMLInputElement>(null);
  const viewport = useThree((state) => state.viewport);
  /*
  useFrame((state) => {
    lightRef.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    lightRef.current.target.updateMatrixWorld();
  });*/
  return (
    <SpotLight
      castShadow
      // ref={lightRef}
      penumbra={1}
      distance={5}
      angle={0.3}
      attenuation={5}
      anglePower={3}
      intensity={2}
    />
  );
};

export default function Three() {
  return (
    <Canvas shadows camera={{ position: [-2, 2, 6] }}>
      <ambientLight intensity={0.015} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
}
