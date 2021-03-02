//import Leaflet from 'leaflet'
import { planningappsStyle, buildingregsapprovalStyle, buildingcertStyle, airport_public_safety_zoneStyle, ancientmonumentStyle, conservationareaStyle, employmentareasStyle, employmentproposedStyle, prowStyle, floodzonesStyle, greenbeltStyle, greenbeltmedsStyle, generalStyle, greenchainStyle, gravel_aosStyle, housingsitesStyle, landscapecharacterareaStyle, localnaturereserveStyle, localopenspaceStyle, localwildlifesitesStyle, metrolinkcorridorStyle, m60gatewaysitesStyle, parkgardenofhistoricinterestStyle, pgasStyle, predominantlyresidentialStyle, reliefroadcorridorStyle, sandaosStyle, sandgritaosStyle, shopfrontagesStyle, shoppingtcStyle, shoppingareasStyle, sbiStyle, sssiStyle, strategicopenspaceStyle, strategicrecreationroutesStyle, towncentreareasStyle, adopted_highwaysStyle, section38Style, privatestreetworksStyle, trunk200Style, roadalterationsStyle, newroadStyle, newroadconsultStyle, newrailwayStyle, waitingStyle, onewayStyle, prohibitionofdrivingStyle, pedestrianisationStyle, widthweightStyle, trafficcalmingStyle, residentsparkingStyle, minorroadalterationsStyle, cycletrackStyle, stopnoticeStyle, listbuildingenfStyle, breachconditionStyle, planningcontraStyle, othernoticeStyle, tpoStyle, radonStyle, cpoStyle, enforcementnoticeStyle} from './Styles'
import { planningappsPopup, buildingregsapprovalPopup, buildingcertPopup, airport_public_safety_zonePopup, ancientmonumentPopup, conservationareaPopup, employmentareasPopup, employmentproposedPopup, prowPopup, floodzonesPopup, greenbeltPopup, greenbeltmedsPopup, generalPopup, greenchainPopup, gravel_aosPopup, housingsitesPopup, landscapecharacterareaPopup, localnaturereservePopup, localopenspacePopup, localwildlifesitesPopup, metrolinkcorridorPopup, m60gatewaysitesPopup, parkgardenofhistoricinterestPopup, pgasPopup, predominantlyresidentialPopup, reliefroadcorridorPopup, sandaosPopup, sandgritaosPopup, shopfrontagesPopup, shoppingtcPopup, shoppingareasPopup, sbiPopup, sssiPopup, strategicopenspacePopup, strategicrecreationroutesPopup, towncentreareasPopup, adopted_highwaysPopup, section38Popup, privatestreetworksPopup, trunk200Popup, roadalterationsPopup, newroadPopup, newroadconsultPopup, newrailwayPopup, waitingPopup, onewayPopup, prohibitionofdrivingPopup, pedestrianisationPopup, widthweightPopup, trafficcalmingPopup, residentsparkingPopup, minorroadalterationsPopup, cycletrackPopup, stopnoticePopup, listbuildingenfPopup, breachconditionPopup, planningcontraPopup, othernoticePopup, tpoPopup, radonPopup, cpoPopup, enforcementnoticePopup} from './Popups'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 20,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true,
        EnableLocateControl: true,
        Class: 'govuk-grid-column-full smbc-map__container'
    },
    DynamicData: 
    [
        {
            key: 'Q1.1 - Planning Applications',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:planning_applications_con29&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: planningappsStyle,
                onEachFeature: planningappsPopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.1 - Building Regulations Approval',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:1_1j&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: buildingregsapprovalStyle,
                onEachFeature: buildingregsapprovalPopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.1 - Building Certificate',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:1_1k&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: buildingcertStyle,
                onEachFeature: buildingcertPopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q1.2 - Airport Public Safety Zone',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:airport_public_safety_zone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: airport_public_safety_zoneStyle,
                onEachFeature: airport_public_safety_zonePopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Ancient Monuments',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:ancient_monument&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: ancientmonumentStyle,
                onEachFeature: ancientmonumentPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Conservation Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:conservation_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: conservationareaStyle,
                onEachFeature: conservationareaPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Employment Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: employmentareasStyle,
                onEachFeature: employmentareasPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Employment Proposed',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:employment_proposed&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: employmentproposedStyle,
                onEachFeature: employmentproposedPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Definitive Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: prowStyle,
                onEachFeature: prowPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Flood Zones',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=flooding:flood_zones&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: floodzonesStyle,
                onEachFeature: floodzonesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Green Belt',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning:green_belt_os&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: greenbeltStyle,
                onEachFeature: greenbeltPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Major Existing Development Sites in the Green Belt (MEDS)',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:greenbelt_meds&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: greenbeltmedsStyle,
                onEachFeature: greenbeltmedsPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - General',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:general&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: generalStyle,
                onEachFeature: generalPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Green Chain',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:green_chain&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: greenchainStyle,
                onEachFeature: greenchainPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Gravel',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:gravel_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: gravel_aosStyle,
                onEachFeature: gravel_aosPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Housing Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:housing_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: housingsitesStyle,
                onEachFeature: housingsitesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Landscape Character Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:landscape_character_area&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: landscapecharacterareaStyle,
                onEachFeature: landscapecharacterareaPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Local Nature Reserves',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:local_nature_reserves&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: localnaturereserveStyle,
                onEachFeature: localnaturereservePopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Local Open Space',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: localopenspaceStyle,
                onEachFeature: localopenspacePopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Local Wildlife Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:local_wildlife_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: localwildlifesitesStyle,
                onEachFeature: localwildlifesitesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Metrolink Corridor',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:metrolink_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: metrolinkcorridorStyle,
                onEachFeature: metrolinkcorridorPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - M60 Gateway Sites',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:m60_gateway_sites&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: m60gatewaysitesStyle,
                onEachFeature: m60gatewaysitesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Parks and Gardens of Historic Interest',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=heritage:parkgarden_of_historic_interest&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: parkgardenofhistoricinterestStyle,
                onEachFeature: parkgardenofhistoricinterestPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Policy Guidance Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:pgas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: pgasStyle,
                onEachFeature: pgasPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Predominantly Residential Area',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:predominantly_residential&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: predominantlyresidentialStyle,
                onEachFeature: predominantlyresidentialPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Relief Road Corridor',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:relief_road_corridor&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: reliefroadcorridorStyle,
                onEachFeature: reliefroadcorridorPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Sand Area of Search',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sand_aos&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: sandaosStyle,
                onEachFeature: sandaosPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Sandstone/Gritstone Area of Search',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:sandstone_gritstone&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: sandgritaosStyle,
                onEachFeature: sandgritaosPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Shop Frontages',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shop_frontages&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: shopfrontagesStyle,
                onEachFeature: shopfrontagesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Shopping Areas - Town Centre',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_tc&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: shoppingtcStyle,
                onEachFeature: shoppingtcPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Shopping Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:shopping_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: shoppingareasStyle,
                onEachFeature: shoppingareasPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Sites of Biological Importance',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sbi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: sbiStyle,
                onEachFeature: sbiPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Sites of Special Scientific Importance',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=biota:sssi&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: sssiStyle,
                onEachFeature: sssiPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Strategic Open Space',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_open_space&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: strategicopenspaceStyle,
                onEachFeature: strategicopenspacePopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q1.2 - Strategic Recreation Routes',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:strategic_recreation_routes&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: strategicrecreationroutesStyle,
                onEachFeature: strategicrecreationroutesPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q1.2 - Town Centre Areas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=planning_udp:town_centre_areas&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: towncentreareasStyle,
                onEachFeature: towncentreareasPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q2.1 - Adopted Highways',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: adopted_highwaysStyle,
                onEachFeature: adopted_highwaysPopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q2.1 - Section 38 Agreements',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: section38Style,
                onEachFeature: section38Popup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q2.1 - Private Streetworks',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:2_1c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                style: privatestreetworksStyle,
                onEachFeature: privatestreetworksPopup,
                maxZoom: 20
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q2.2 - Definitive Rights of Way',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: prowStyle,
                onEachFeature: prowPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.4 - Trunk Road 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: trunk200Style,
                onEachFeature: trunk200Popup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.4 - Road Alterations',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: roadalterationsStyle,
                onEachFeature: roadalterationsPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.4 - New Road Construction',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: newroadStyle,
                onEachFeature: newroadPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.4 - Proposed New Road Consultation',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_4e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: newroadconsultStyle,
                onEachFeature: newroadconsultPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.5 - Proposed Railway Scheme Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_5&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: newrailwayStyle,
                onEachFeature: newrailwayPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Waiting or Loading Restrictions 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: waitingStyle,
                onEachFeature: waitingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - One Way 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: onewayStyle,
                onEachFeature: onewayPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Prohibition of Driving 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: prohibitionofdrivingStyle,
                onEachFeature: prohibitionofdrivingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Pedestrianisation 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: pedestrianisationStyle,
                onEachFeature: pedestrianisationPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Width or Weight Restriction 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: widthweightStyle,
                onEachFeature: widthweightPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Traffic Calming 200m Buffer',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6g&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: trafficcalmingStyle,
                onEachFeature: trafficcalmingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },
        
        {
            key: 'Q3.6 - Residents Parking Controls Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6h&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: residentsparkingStyle,
                onEachFeature: residentsparkingPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Minor Road Alteration Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6i&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: minorroadalterationsStyle,
                onEachFeature: minorroadalterationsPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.6 - Cycle Track Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_6k&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: cycletrackStyle,
                onEachFeature: cycletrackPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

       {
          key: 'Q3.9 - Enforcement Notice Buffered',
          url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9a&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
          layerOptions: {
                maxZoom: 20,
                style: enforcementnoticeStyle,
                onEachFeature: enforcementnoticePopup
        },
        displayOverlay: true,
        visibleByDefault: true
        },

        {
            key: 'Q3.9 - Stop Notice Buffered',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9b&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: stopnoticeStyle,
                onEachFeature: stopnoticePopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.9 - Listed Building Enforcement Notice',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9c&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: listbuildingenfStyle,
                onEachFeature: listbuildingenfPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.9 - Breach of Condition Notice',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9d&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: breachconditionStyle,
                onEachFeature: breachconditionPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.9 - Planning Contravention Notice',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9e&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: planningcontraStyle,
                onEachFeature: planningcontraPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.9 - Other Notice',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9f&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: othernoticeStyle,
                onEachFeature: othernoticePopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.9 - Proposed Tree Preservation Orders',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_9m&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: tpoStyle,
                onEachFeature: tpoPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.12 - Compulsory Purchase Order',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_12&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: cpoStyle,
                onEachFeature: cpoPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'Q3.14 - Radon Gas',
            url: 'https://spatial.stockport.gov.uk/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=con29:3_14&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                maxZoom: 20,
                style: radonStyle,
                onEachFeature: radonPopup
            },
            displayOverlay: true,
            visibleByDefault: true
        },

        {
            key: 'os1250_line',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        },

        {
            key: 'os1250_text',
            url: 'http://spatial.stockport.gov.uk/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true
        }
    ],

    StaticData: 
    [
        {
            key: 'boundary',
            url: 'https://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration