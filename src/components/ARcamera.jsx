import React from "react";
import { UseContext } from "../context/UseContext";
import steak_and_rice from "../images/3Dmodels/steak_and_rice_scaniverse.glb";
import crackling_roast_pork_belly_rice from "../images/3Dmodels/crackling_roast_pork_belly_rice_scaniverse.glb";
import noodles_with_soybean_paste from "../images/3Dmodels/noodles_with_soybean_paste_scaniverse_lidar.glb";
import prawn_noodles from "../images/3Dmodels/prawn_noodles_scaniverse_lidar.glb";
import cold_noodles from "../images/3Dmodels/cold_noodles_scaniverse.glb";

function ARcamera() {
  const { product } = React.useContext(UseContext);
  const modelsMap = {
    steak_and_rice: steak_and_rice,
    crackling_roast_pork_belly_rice: crackling_roast_pork_belly_rice,
    noodles_with_soybean_paste: noodles_with_soybean_paste,
    prawn_noodles: prawn_noodles,
    cold_noodles: cold_noodles,
  };

  const modelUrl = modelsMap[product?.model];
  return (
    <a-scene arjs="sourceType: webcam;">
      <a-marker preset="hiro">
        <a-entity
          position="0 0 0"
          scale="15 15 15"
          rotation="-30 0 0"
          gltf-model={modelUrl}
        ></a-entity>
      </a-marker>
      <a-entity camera position="0 0 0"></a-entity>
    </a-scene>
  );
}

export default ARcamera;
