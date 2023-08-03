import * as Cesium from "cesium";
import * as dat from "dat.gui";
import { SkyBoxParamsInterface } from "./index";
import { setGuiCheckbox } from "./utils/setGuiCheckbox";
import { downloadJson } from "./utils/downloadJson";

const reviseGui = (skyBox: Cesium.SkyBox, guiParams: SkyBoxParamsInterface) => {
  skyBox.show = guiParams.show;
};

const storeGui = (guiParams: SkyBoxParamsInterface, storeCb: Function) => {
  storeCb({
    show: guiParams.show,
  });
};

export const setGui = (
  gui: dat.GUI,
  guiParams: SkyBoxParamsInterface,
  skyBox: Cesium.SkyBox,
  storeCb: Function
) => {
  let skyBox_folder = gui.addFolder("skyBox");
  skyBox_folder.open();

  let initGuiParams = Object.assign({}, guiParams);
  reviseGui(skyBox, initGuiParams);
  let downloadGuiParams = Object.assign({}, guiParams);

  setGuiCheckbox(skyBox_folder, guiParams, "show", "show", () => {
    reviseGui(skyBox, guiParams);
  });

  let obj = {
    ensure: () => {
      storeGui(guiParams, storeCb);
      downloadGuiParams = Object.assign({}, guiParams);
    },
    reset: () => {
      reviseGui(skyBox, initGuiParams);
      storeGui(initGuiParams, storeCb);
      skyBox_folder.revert(skyBox_folder);
      downloadGuiParams = Object.assign({}, initGuiParams);
    },
    download: () => {
      downloadJson("skyBox.json", downloadGuiParams);
    },
  };

  skyBox_folder.add(obj, "ensure").name("确定参数");
  skyBox_folder.add(obj, "reset").name("重置参数");
  skyBox_folder.add(obj, "download").name("下载参数");

  return skyBox_folder;
};
