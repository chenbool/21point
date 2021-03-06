// 程序入口
var Main = (function () {
    function Main() {
        Laya.init(480, 800);
        this.init();
    }
    // 初始化
    Main.prototype.init = function () {
        Laya.stage.scaleMode = Laya.Stage.SCALE_EXACTFIT;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_VERTICAL;
        // 加载(图片 和 图集)
        var resArray = [
            { url: "res/atlas/ui.json", type: Laya.Loader.ATLAS },
            { url: "ui/titleScreen.jpg", type: Laya.Loader.IMAGE },
            { url: "ui/background.jpg", type: Laya.Loader.IMAGE }
        ];
        Laya.loader.load(resArray, Laya.Handler.create(this, this.onLoaded), Laya.Handler.create(this, this.onProgress));
    };
    //加载进度
    Main.prototype.onProgress = function (value) {
        console.log("加载进度: ", value);
    };
    //加载完成 回调函数
    Main.prototype.onLoaded = function () {
        var startView = new StartView();
        Laya.stage.addChild(startView);
    };
    return Main;
}());
new Main();
//# sourceMappingURL=LayaSample.js.map