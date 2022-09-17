const Esfera = ({ position, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry arg={[1, 1, 1]} />
      <meshPhongMaterial color={color} specular={"white"} />
    </mesh>
  );
};

export default Esfera;
