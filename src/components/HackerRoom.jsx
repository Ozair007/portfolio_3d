import { useGLTF, useTexture } from "@react-three/drei";

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF("/models/hacker-room.glb");

  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[119.3439, 0, 281.8432]}
          rotation={[-Math.PI / 2, 0, 1.2902]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_light_green_0.geometry}
            material={materials.light_green}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_light_blue_0.geometry}
            material={materials.light_blue}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Gears_blue_0.geometry}
            material={materials.blue}
          />
        </group>
        <group
          position={[-119.9375, 7.5075, -156.045]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_001_Material013_0.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_001_Material012_0.geometry}
            material={materials["Material.012"]}
          />
        </group>
        <group
          position={[119.9374, 7.5075, -156.045]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_001_Material014_0.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_001_Material015_0.geometry}
            material={materials["Material.015"]}
          />
        </group>
        <group
          position={[-117.0153, 135.7998, -207.0611]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material004_0.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material011_0.geometry}
            material={materials["Material.011"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material009_0.geometry}
            material={materials["Material.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material006_0.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material008_0.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material010_0.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material007_0.geometry}
            material={materials["Material.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_2_detail_002_Material005_0.geometry}
            material={materials["Material.005"]}
          />
        </group>
        <group
          position={[122.8596, 135.7998, -207.0611]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material019_0.geometry}
            material={materials["Material.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material018_0.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_002_Material021_0.geometry}
            material={materials["Material.021"]}
          />
        </group>
        <group
          position={[186.6, 117.8957, -197.7591]}
          rotation={[-0.381, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_1_0.geometry}
            material={materials.graph_1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_2_0.geometry}
            material={materials.graph_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_3_0.geometry}
            material={materials.graph_3}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_006_graph_4_0.geometry}
            material={materials.graph_4}
          />
        </group>
        <group
          position={[85.1874, 113.4967, -197.2834]}
          rotation={[-0.3723, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_3002_0.geometry}
            material={materials["graph_3.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_2002_0.geometry}
            material={materials["graph_2.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_4002_0.geometry}
            material={materials["graph_4.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_gray_0.geometry}
            material={materials.gray}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Window_1_detail_005_graph_1002_0.geometry}
            material={materials["graph_1.002"]}
          />
        </group>
        <group
          position={[0, -5.4096, -143.5911]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material002_0.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.laptop_screen_Material003_0.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.JS_text001_0.geometry}
          material={materials["text.001"]}
          position={[376.6818, -7.0908, 50.9277]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.HTML_text002_0.geometry}
          material={materials["text.002"]}
          position={[-462.2116, 33.5602, -281.908]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CSS_text_0.geometry}
          material={materials.text}
          position={[-355.4754, -11.127, -14.4165]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lines_line_0.geometry}
          material={materials.line}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Wi-Fi_Material022_0"].geometry}
          material={materials["Material.022"]}
          position={[-77.3841, 336.6237, -298.4063]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["@_Material025_0"].geometry}
          material={materials["Material.025"]}
          position={[-106.4885, 0, 272.3751]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["<>_text001_0"].geometry}
          material={materials["text.001"]}
          position={[171.1632, 322.3003, -327.7839]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_1_detail_003_blue001_0.geometry}
          material={materials["blue.001"]}
          position={[28.5268, 240.4109, -246.2104]}
          rotation={[-0.3764, 0, -0.4943]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Window_1_detail_004_Material020_0.geometry}
          material={materials["Material.020"]}
          position={[66.7862, 189.0971, -228.0918]}
          rotation={[-0.3769, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.laptop_body_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-3.4828, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.laptop_key_bord_Material_0.geometry}
          material={materials.Material}
          position={[3.0851, -4.8076, -34.7838]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
};
useGLTF.preload("/models/hacker-room.glb");

export default HackerRoom;
