import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Cubola = (props) => {
  const ref = useRef();
  const { nodes /*, materials */ } = useGLTF("/Cubola.glb");

  useFrame(() => {
    ref.current.rotation.y += 0.05;
    ref.current.rotation.x += 0.01;
  });

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        // material={materials.Material}
        position={[0, 0, 0]}
      >
        <meshPhongMaterial color={"red"} specular={"white"} shininess={50} />
      </mesh>

      <mesh
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
        position={[0, 0.99, 0]}
      >
        <meshPhongMaterial
          color={"dodgerblue"}
          specular={"white"}
          shininess={100}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload("/Cubola.glb");

export default Cubola;
