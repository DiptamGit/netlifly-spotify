// Call the dataTables jQuery plugin
$(document).ready(function () {

    $("#scatter").append('<iframe src="charts/pre/popular_danceability.html" width="100%" height="600" title="description"></iframe>');

    $('#metrics').change(function (e) {

        let selectedOption = $("#metrics option:selected" ).text();
        if(selectedOption == "Danceability"){
            $('#scatter').empty().append('<iframe src="charts/pre/popular_danceability.html" width="100%" height="600" title="description"></iframe>')
        }
        if(selectedOption == "Energy"){
            $("#scatter").empty().append('<iframe src="charts/pre/popular_energy.html" width="100%" height="600" title="description"></iframe>');
        }
        if(selectedOption == "Acousticness"){
            $("#scatter").empty().append('<iframe src="charts/pre/popular_acousticness.html" width="100%" height="600" title="description"></iframe>');
        }
        if(selectedOption == "Liveness"){
            $("#scatter").empty().append('<iframe src="charts/pre/popular_liveness.html" width="100%" height="600" title="description"></iframe>');
        }
        if(selectedOption == "Valence"){
            $("#scatter").empty().append('<iframe src="charts/pre/popular_valence.html" width="100%" height="600" title="description"></iframe>');
        }
        if(selectedOption == "Tempo"){
            $('#scatter').empty().append('<iframe src="charts/pre/popular_tempo.html" width="100%" height="600" title="description"></iframe>')
        }
        
    });

    $.ajax({
        type: "GET",
        url: "charts/pre/data/popular.csv",
        dataType: "text",
        success: function (response) {
            $('#datatable').find('tbody').empty();
            //console.log(response)
            let output = response.split("\r\n");
            //console.log(output.length)
            for (let i = 0; i < output.length; i++) {
                const element = output[i];
                let elementArray = element.split(",");
                //console.log(elementArray.length)
                $('#datatable tbody').append("<tr><td>" + elementArray[0] +
                    "</td><td>" + elementArray[1] +
                    "</td><td>" + elementArray[2] +
                    "</td><td>" + elementArray[3] +
                    "</td><td>" + elementArray[4] +
                    "</td><td>" + elementArray[5] +
                    "</td><td>" + elementArray[6] +
                    "</td><td>" + elementArray[7] +
                    "</td><td>" + elementArray[8] +
                    "</td></tr>");
            }
        }
    });
});