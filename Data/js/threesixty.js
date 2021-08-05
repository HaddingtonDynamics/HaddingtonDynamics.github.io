
threeSixty = {
    init: function () {
        this._vr = new AC.VR('viewer', 'images/Frame######.jpg', [120, 1], {
            invert: false
        });
    },
    didShow: function() {
        this.init();
    },
    willHide: function() {
        recycleObjectValueForKey(this, "_vr");
    },
    shouldCache: function() {
        return false;
    }
}
if (!window.isLoaded) {
    window.addEventListener("load", function() {
        threeSixty.init();
    }, false);
}
