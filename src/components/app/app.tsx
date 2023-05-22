import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Leva, useControls } from 'leva';
import { Perf } from 'r3f-perf';

import { Box } from '../box';

export function App() {
  const { performance } = useControls('Monitoring', { performance: false });

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
      <Leva hideCopyButton={true} />
      <Canvas camera={{ position: [0, 10, 10], fov: 71 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {performance && <Perf position={'top-left'} />}
        <Box />
      </Canvas>
    </div>
  );
}
