app.controller("dashboardCTRL", [
    '$rootScope', '$scope', '$http', '$q', '$filter', '$translate', function ($rootScope, $scope, $http, $q, $filter, $translate) {
        $rootScope.dashboardParam = {}
        $rootScope.panels = {};

        // dashboards
        $rootScope.dashboardParam["mainDashboard"] = {
            "skin": "skin2", "barColor": "red", "searchPageContentId": "", "sideNavPageContentId": "", "pages": []
        };
        $rootScope.dashboardParam["viewerDashboard"] = {
            "skin": "skin2", "barColor": "",
            "pages": []
        };
        $rootScope.dashboardParam["drDashboard"] = {
            "skin": "skin1",
			"toolbarColor":"#00d7b1",
			"logoColor":"#00d7b1",
			"logoBackgroundColor":"#052963",
            "barColor": "blue",
            "searchPageContentId": "190624",
            "sideNavPageContentId": "DD_DoctorSideNav",
            "pages": []
        };
        $rootScope.dashboardParam["secretaryDashboard"] = {
            "skin": "skin1",
			"toolbarColor":"#00C6D7",
			"logoColor":"#00C6D7",
			"logoBackgroundColor":"#052963",
            "barColor": "blue",
            "searchPageContentId": "190624",
            "sideNavPageContentId": "SD_SecretarySideNav",
            "pages": []
        };
        $rootScope.dashboardParam["patientDashboard"] = {
            "skin": "skin1",
			"toolbarColor":"#00C6D7",
			"logoColor":"#00C6D7",
			"logoBackgroundColor":"#052963",
            "barColor": "blue",
			"searchPageContentId": "190624",
            "sideNavPageContentId": "PD_PatientSideNav",
            "pages": []
        };
        $rootScope.dashboardParam["mainDashboard"] = {
            "skin": "skin2",
			"toolbarColor":"#00C6D7",
			"logoColor":"#00C6D7",
			"logoBackgroundColor":"#052963",
            "barColor": "blue",
            "searchPageContentId": "190624",
            "sideNavPageContentId": "PD_PatientSideNav",
            "pages": []
        };


        // panels
        $rootScope.panels["viewerPanel"] = [];
        $rootScope.panels["mainPanel"] = [
            {"pageId": "MemberShip", "pageContentId": "MS_FirstPage"}
        ];
        $rootScope.panels["drProfilePanel"] = [
            {"pageId": "DoctorDashboard_FirstPage", "pageContentId": "DD_FirstPage"}
        ];
        $rootScope.panels["patientProfilePanel"] = [
            {"pageId": "PatientDashboard_FirstPage", "pageContentId": "PD_FirstPage"}
        ];
        $rootScope.panels["patientToDoctorPanel"] = [
            {"pageId": "DoctorSignUp", "pageContentId": "DSU_PhysicianCouncilCode"}
        ];


        $rootScope.partsStorage = {};
        $rootScope.signOut = function () {
            localStorage.removeItem("__localStorage.__partsStorage");
            $rootScope.setDashboard('mainDashboard', 'mainPanel');
            $rootScope.__signOutTime = new Date();
        }

        $rootScope.setDashboard = function (dashboard, panel) {
            //clean partsStorage for new Dashboard
            if (localStorage.getItem("__localStorage.__dashboard") != dashboard)
                localStorage.setItem("__localStorage.__partsStorage", "{}");

            localStorage.setItem("__localStorage.__dashboard", dashboard);
            localStorage.setItem("__localStorage.__panel", panel);
            $rootScope.dashboardName = dashboard;
            $rootScope.panelName = panel;
            $rootScope.skinPath = 'Skin/' + $rootScope.dashboardParam[dashboard].skin + '/';
            $rootScope.barColor = $rootScope.dashboardParam[dashboard].barColor;
            $rootScope.toolbarColor = $rootScope.dashboardParam[dashboard].toolbarColor;
            $rootScope.logoColor = $rootScope.dashboardParam[dashboard].logoColor;
            $rootScope.logoBackgroundColor = $rootScope.dashboardParam[dashboard].logoBackgroundColor;
            if (panel != "viewerPanel") {
                $rootScope.dashboardParam[dashboard].pages = $rootScope.panels[panel];
            }
        }

        $rootScope.loadDashboard = function (dashboard, panel) {
            if (localStorage.getItem("__localStorage.__dashboard") == null) {
                localStorage.setItem("__localStorage.__dashboard", dashboard);
                localStorage.setItem("__localStorage.__panel", panel);
            }
            $rootScope.dashboardName = localStorage.getItem("__localStorage.__dashboard");
            $rootScope.panelName = localStorage.getItem("__localStorage.__panel");
            ;
            $rootScope.skinPath = 'Skin/' + $rootScope.dashboardParam[dashboard].skin + '/';
            $rootScope.barColor = $rootScope.dashboardParam[dashboard].barColor;
            $rootScope.toolbarColor = $rootScope.dashboardParam[dashboard].toolbarColor;
            $rootScope.logoColor = $rootScope.dashboardParam[dashboard].logoColor;
            $rootScope.logoBackgroundColor = $rootScope.dashboardParam[dashboard].logoBackgroundColor;
            if (panel != "viewerPanel") {
                $rootScope.dashboardParam[dashboard].pages = $rootScope.panels[panel];
            }
        }

        // remove in production mode
        viewerSplit = window.location.href.split("/viewer/");
        if (viewerSplit.length > 1) {
            pageContentIdSplit = window.location.href.split("pageContentId=");
            $rootScope.dashboardParam["viewerDashboard"].pages[0] = {};
            if (pageContentIdSplit.length > 1)
                $rootScope.dashboardParam["viewerDashboard"].pages[0].pageContentId = pageContentIdSplit[1].split("&")[0];

            pageIdSplit = window.location.href.split("pageId=");
            if (pageIdSplit.length > 1)
                $rootScope.dashboardParam["viewerDashboard"].pages[0].pageId = pageIdSplit[1].split("&")[0];
            $rootScope.loadDashboard("viewerDashboard", "viewerPanel");
        }
        else if (localStorage.getItem("__localStorage.__dashboard") != null && localStorage.getItem("__localStorage.__panel") != null) {
            $rootScope.loadDashboard(localStorage.getItem("__localStorage.__dashboard"), localStorage.getItem("__localStorage.__panel"));
        }
        else
            $rootScope.loadDashboard('mainDashboard', 'mainPanel');

    }]);
