sap.ui.define(
  ["sap/m/MessageToast", "sap/m/URLHelper", "sap/base/Log"],
  function (MessageToast, URLHelper, Log) {
    "use strict";

    return {
      onGoToWeb: function (oEvent) {
        try {
          const ctx = oEvent.getSource().getBindingContext();
          if (!ctx) { MessageToast.show("No context."); return; }

          const url = ctx.getProperty("Url");
          if (!url) { MessageToast.show("No URL maintained."); return; }

          URLHelper.redirect(/^https?:\/\//i.test(url) ? url : "https://" + url, true);
        } catch (e) {
          Log.error("GoToWeb failed", e);
          MessageToast.show("Could not open URL.");
        }
      }
    };
  }
);
