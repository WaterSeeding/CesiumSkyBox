import "./app.css";
import * as dat from "dat.gui";
import { viewer } from "./main";
import Scene from "./Scene/index";
import SkyBox from "./SkyBox/index";
import Camera from "./Camera/index";

const gui = new dat.GUI({
  name: "Cesium GUI",
  width: 450,
  autoPlace: true,
  closed: false,
});
gui.domElement.id = "gui";
gui.show();

const scene = new Scene(viewer, gui);
const skyBox = new SkyBox(viewer, gui);
// skyBox.setSources({
//   positiveX: "",
//   negativeX: "",
//   positiveY: "",
//   negativeY: "",
//   positiveZ: "",
//   negativeZ: "",
// });
const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      height: 27067269,
      longitude: 96.337443,
      latitude: 31.767829,
    },
    headingPitchRoll: {
      heading: 0,
      pitch: -90,
      roll: 0,
    },
  },
  true
);
