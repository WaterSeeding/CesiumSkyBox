import * as Cesium from "cesium";
import { SkyBoxParamsInterface } from "./index";
import { skyBoxTableInterface } from "./_db";

const defaultParams = {
  show: true,
};

export const setParams = async (
  skyBox: Cesium.SkyBox,
  skyBoxTable: skyBoxTableInterface
): Promise<SkyBoxParamsInterface> => {
  let res = await skyBoxTable.toArray();
  let latestResValue = res[res.length - 1];
  return latestResValue || defaultParams;
};
