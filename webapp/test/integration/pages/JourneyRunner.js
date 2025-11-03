sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zflight/flightlistrepevi/test/integration/pages/FlightList",
	"zflight/flightlistrepevi/test/integration/pages/FlightObjectPage",
	"zflight/flightlistrepevi/test/integration/pages/FlightDetailsEVIObjectPage"
], function (JourneyRunner, FlightList, FlightObjectPage, FlightDetailsEVIObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zflight/flightlistrepevi') + '/test/flp.html#app-preview',
        pages: {
			onTheFlightList: FlightList,
			onTheFlightObjectPage: FlightObjectPage,
			onTheFlightDetailsEVIObjectPage: FlightDetailsEVIObjectPage
        },
        async: true
    });

    return runner;
});

