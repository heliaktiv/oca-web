odoo.define("web_notify.Notification", function(require) {
    "use strict";

    var Notification = require("web.Notification");

    Notification.include({
        icon_mapping: {
            success: "fa-thumbs-up",
            danger: "fa-exclamation-triangle",
            warning: "fa-exclamation",
            info: "fa-info",
            default: "fa-lightbulb-o",
        },

        are_we_in_test_mode: function() {
            // This is a dirty little hack to figure out if we are in the test mode
            return (
                this.getParent() &&
                this.getParent().$el &&
                this.getParent().$el.length &&
                this.getParent().$el[0].baseURI &&
                this.getParent().$el[0].baseURI.includes("/web/tests")
            );
        },

        init: function() {
            this._super.apply(this, arguments);

            // In case we are in test mode we want to skip custom configuration
            // so we don't break Odoo base code tests
            if (this.are_we_in_test_mode(arguments)) return;

            // Delete default classes
            this.className = this.className.replace(" o_error", "");
            // Add custom icon and custom class
            this.icon =
                this.type in this.icon_mapping
                    ? this.icon_mapping[this.type]
                    : this.icon_mapping.default;
            this.className += " o_" + this.type;
        },
    });
});
