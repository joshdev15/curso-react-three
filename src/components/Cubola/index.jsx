import React from "react";
import { useGLTF } from "@react-three/drei";

const Cubola = (props) => {
  const { nodes, materials } = useGLTF("/Cubola.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[0, 0, 0]}
      />
      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 0.99, 0]}
      />
    </group>
  );
};

useGLTF.preload("/Cubola.glb");

export default Cubola;
