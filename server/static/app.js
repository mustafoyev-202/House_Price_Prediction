function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return -1; // Invalid Value
}

function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return -1; // Invalid Value
}

function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    var url = "/predict_home_price";  // Match Flask endpoint

    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathrooms,
        location: location
    }, function (data, status) {
        if (status === "success") {
            estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
        } else {
            estPrice.innerHTML = "<h2>Error in fetching the estimated price</h2>";
        }
    }).fail(function () {
        estPrice.innerHTML = "<h2>Error in fetching the estimated price</h2>";
    });
}

function onPageLoad() {
    console.log("document loaded");
    var url = "/get_location_names";  // Match Flask endpoint

    $.get(url, function (data, status) {
        if (status === "success" && data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            for (var i = 0; i < locations.length; i++) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    }).fail(function () {
        console.log("Error in fetching location names");
    });
}

window.onload = onPageLoad;
