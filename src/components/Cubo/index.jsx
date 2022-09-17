const Cubo = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry arg={[1, 1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

export default Cubo;
