import React from "react";
import image3d from "../images/crackling_roast_pork_belly_rice_scaniverse.glb";

function ARcamera() {
  return (
    <a-scene arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-marker preset="hiro">
        <a-entity
          position="0 0 0"
          scale="8 8 8"
          rotation="-30 0 0"
          gltf-model={`url(${image3d})`}
        ></a-entity>
      </a-marker>
      <a-entity camera position="0 0 0"></a-entity>
    </a-scene>
  );
}

export default ARcamera;
