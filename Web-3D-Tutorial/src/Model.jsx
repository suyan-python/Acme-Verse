/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ../public/model.glb 
*/

import React, { useRef } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export default function Model(...props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/model.glb");
  return (
    <group {...props} dispose={null}>
      <PerspectiveCamera
        makeDefault={true}
        far={1000}
        near={0.1}
        fov={10.895}
        position={[48.925, 25.773, 22.894]}
        rotation={[-0.5, 0.717, 0.345]}
        scale={1.899}
      />
      <mesh geometry={nodes.Plane.geometry} material={materials["Material.002"]} position={[13.108, 0.006, -15.294]} scale={7.598} />
      <mesh geometry={nodes.Plane001.geometry} material={materials["Material.004"]} position={[13.108, 0.006, -15.294]} scale={7.598} />
      <mesh geometry={nodes.Plane002.geometry} material={materials["Material.003"]} position={[13.108, 0.006, -15.294]} scale={7.598} />
      <group position={[12.944, 1.667, -16.366]} scale={[6.871, 4.795, 4.795]}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials["Material.005"]} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials["Material.006"]} />
      </group>
      <mesh
        geometry={nodes.Plane005.geometry}
        material={materials["Material.004"]}
        position={[12.944, 1.667, -16.366]}
        scale={[6.871, 4.795, 4.795]}
      />
      <mesh
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[12.944, 1.667, -16.366]}
        scale={[6.871, 4.795, 4.795]}
      >
        <mesh geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} />
        <mesh geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} />
      </mesh>
      <mesh geometry={nodes.Plane010.geometry} material={nodes.Plane010.material} position={[13.108, 0.006, -15.294]} scale={7.598} />
      <mesh geometry={nodes.Circle.geometry} material={materials["Material.007"]} position={[12.708, 10.99, -16.554]} scale={2.212}>
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials["Material.007"]}
          position={[-0.216, -0.037, 0]}
          scale={[1, 1, 0.621]}
        />
      </mesh>
      <mesh
        geometry={nodes.Plane011.geometry}
        material={materials["Material.002"]}
        position={[7.548, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <mesh
        geometry={nodes.Plane012.geometry}
        material={materials["Material.002"]}
        position={[9.615, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text001.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <mesh
        geometry={nodes.Plane013.geometry}
        material={materials["Material.002"]}
        position={[11.683, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text002.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <mesh
        geometry={nodes.Plane014.geometry}
        material={materials["Material.002"]}
        position={[13.75, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text003.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <mesh
        geometry={nodes.Plane015.geometry}
        material={materials["Material.002"]}
        position={[15.817, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text004.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <mesh
        geometry={nodes.Plane016.geometry}
        material={materials["Material.002"]}
        position={[17.885, 11.925, -11.145]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.737}
      >
        <mesh geometry={nodes.Text005.geometry} material={materials["Material.005"]} position={[0, -0.01, 0]} />
      </mesh>
      <group position={[6.883, 1.523, -8.699]} scale={1.899}>
        <mesh geometry={nodes.Circle002_1.geometry} material={materials["Material.008"]} />
        <mesh geometry={nodes.Circle002_2.geometry} material={materials["Material.006"]} />
      </group>
      <mesh geometry={nodes.Plane017.geometry} material={materials["Material.001"]} position={[13.108, 0.006, -15.294]} scale={57.114} />
    </group>
  );
}

useGLTF.preload("/model.glb");
