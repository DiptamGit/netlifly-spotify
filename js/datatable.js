// Call the dataTables jQuery plugin
$(document).ready(function () {
    $('#datatable').hide();
    //     const datatablesSimple = document.getElementById('datatable');

    //    table = new simpleDatatables.DataTable(datatablesSimple, {
    //         scrollY:        '50vh',
    //         scrollCollapse: true,
    //         paging:         false,
    //         searchable: false
    //    });

    // table.columns.adjust().responsive.recalc();
    $("#tableBtn").click(function () {
        console.log("Button clicked")
        $.ajax({
            type: "GET",
            url: "popular_before_90s_tabledata.csv",
            dataType: "text",
            success: function (response) {
                $('#datatable').find('tbody').empty();
                console.log(response)
                let output = response.split("\r\n");
                console.log(output.length)
                for (let i = 0; i < output.length; i++) {
                    const element = output[i];
                    let elementArray = element.split(",");
                    console.log(elementArray.length)
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
                $('#datatable').show();
                //console.log(JSON.stringify(response))
            }
        });
    });

});