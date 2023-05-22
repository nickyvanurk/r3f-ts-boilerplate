import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { type Mesh } from 'three';

export function Box() {
  const ref = useRef<Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} rotation-y={Math.PI * 0.25} rotation-z={Math.PI * 0.25}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
}
