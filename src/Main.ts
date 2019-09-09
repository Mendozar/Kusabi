import Editor from "./Editor";
import RenderView from "./RenderView";
const THREE = require("three");

const renderView = new RenderView();
new Editor(renderView);

// global context
window.port = renderView.port;
window.THREE = THREE;
