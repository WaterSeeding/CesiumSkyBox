import * as dat from "dat.gui";
import * as Cesium from "cesium";
import { skyBoxTable } from "./_db";
import { setParams } from "./_params";
import { setGui } from "./_gui";

export interface SkyBoxParamsInterface {
  show: boolean;
}

export default class SkyBox {
  viewer: Cesium.Viewer;
  skyBox: Cesium.SkyBox;
  skyBoxParams: SkyBoxParamsInterface | undefined;
  constructor(
    viewer: Cesium.Viewer,
    gui: dat.GUI,
    skyBoxParams?: SkyBoxParamsInterface,
    hideGui?: boolean
  ) {
    this.viewer = viewer;
    this.skyBox = viewer.scene.skyBox;
    this.setInit(gui, skyBoxParams, hideGui);
  }

  setInit(
    gui: dat.GUI,
    skyBoxParams?: SkyBoxParamsInterface,
    hideGui?: boolean
  ) {
    setParams(this.skyBox, skyBoxTable).then(
      (storeCameraParams: SkyBoxParamsInterface) => {
        this.skyBoxParams = skyBoxParams || storeCameraParams;
        let skyBoxGui = setGui(
          gui,
          this.skyBoxParams,
          this.skyBox,
          (data: SkyBoxParamsInterface) => {
            skyBoxTable.add(data);
          }
        );
        if (hideGui) {
          skyBoxGui.hide();
        }
      }
    );
  }

  setSources({
    positiveX,
    negativeX,
    positiveY,
    negativeY,
    positiveZ,
    negativeZ,
  }: {
    [key: string]: string;
  }) {
    this.skyBox.sources = {
      positiveX,
      negativeX,
      positiveY,
      negativeY,
      positiveZ,
      negativeZ,
    };
    this.skyBox.update();
  }
}
