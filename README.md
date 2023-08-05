# 1.1 SkyBox

> - [国内查看地址](https://main--sweet-dasik-754a3a.netlify.app/)
> - [国外查看地址](https://cesium-camera.vercel.app/)
> - [Github仓库地址](https://github.com/WaterSeeding/CesiumScene)

## 作用

`SkyBox`提供了一种通过 GUI 界面控件操作的形式，用于更新设置场景`SkyBox`的天空盒图片。

它允许你传入初始化参数设置 SkyBox 显示和图片类型。

## 示例

以下展示`SkyBox`组件用法，使用者可以通过 GUI 界面控制操作的形式，修改参数信息，来达到场景镜头的变化。

```jsx
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

const camera = new Camera(
  viewer,
  gui,
  {
    position: {
      height: 37067269,
      longitude: 90,
      latitude: -90,
    },
    headingPitchRoll: {
      heading: 0,
      pitch: -90,
      roll: 0,
    },
  },
  true
);

const scene = new Scene(viewer, gui);
const skyBox = new SkyBox(
  viewer,
  gui,
  {
    show: true,
    sourcesType: "default",
    sourcesList: [
      {
        name: "daytime",
        sources: {
          positiveX: "./static/skybox/daytime/px.jpg",
          positiveY: "./static/skybox/daytime/ny.jpg",
          positiveZ: "./static/skybox/daytime/pz.jpg",
          negativeX: "./static/skybox/daytime/nx.jpg",
          negativeY: "./static/skybox/daytime/py.jpg",
          negativeZ: "./static/skybox/daytime/nz.jpg",
        },
      },
      {
        name: "night",
        sources: {
          positiveX: "./static/skybox/night/px.jpg",
          negativeX: "./static/skybox/night/nx.jpg",
          positiveY: "./static/skybox/night/ny.jpg",
          negativeY: "./static/skybox/night/py.jpg",
          positiveZ: "./static/skybox/night/pz.jpg",
          negativeZ: "./static/skybox/night/nz.jpg",
        },
      },
    ],
  },
  false
);
```

## API

### `new SkyBox(viewer: Cesium.Viewer, gui: dat.GUI, skyBoxParams?: SkyBoxParamsInterface, hideGui?: boolean)`

创建一个`SkyBox`对象。

| 参数         | 类型                  | 描述                                    |
| ------------ | --------------------- | --------------------------------------- |
| viewer       | Cesium.Viewer         | Cesium.Viewer 对象                      |
| gui          | dat.GUI               | dat.GUI 对象                            |
| skyBoxParams | SkyBoxParamsInterface | （可选）相机镜头参数接口                |
| hideGui      | boolean               | （可选）控制相机的 GUI 界面控件显示隐藏 |

### `setShow(value: boolean)`

控制`SkyBox`天空盒显示和隐藏。

### `setSources(sources: { [key: string]: string })`

更新`SkyBox`天空盒图片内容。

## 类型

### `SkyBoxParamsInterface`

场景`SkyBox`天空盒信息。

| 参数        | 类型          | 描述                 |
| ----------- | ------------- | -------------------- |
| show        | boolean       | 控制天空盒显示和隐藏 |
| sourcesType | string        | 设置天空盒类型       |
| sourcesList | SourcesType[] | 天空盒数据           |

### `SourcesType`

场景`SkyBox`天空盒图片。

| 参数    | 类型   | 描述       |
| ------- | ------ | ---------- |
| name    | string | 天空盒名称 |
| sources | any    | 天空盒图片 |

## 相关资料

- [Cesium](https://cesium.com/)
- [Cesium Documentation](https://cesium.com/docs/)
