
// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)

$(document).ready(function() {

	loadData();
});

function loadData() {

	$.getJSON("js/donations_over_5K.json", function(donationData) {
        
        writeTable(donationData);
    });
}

function writeTable(data) {

	for(i=0; i<data.length; i++) {
        
        var committee = data[i]["Committee"];
        var date = data[i]["Contribution Date"];
        var info = data[i]["Contribution Information"];
        var amount = data[i]["Amount"];
        
      
        //var noZeroes = amount.toString();
            
	// Make a list of every donation made to "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL"
	// Do this by looping through the data and writing a new table row (<tr></tr>) for every donation.
	// Each row should contain of three columns (<td></td>): 
	// - Contribution Date
	// - Contributon Information
	// - Amount


         if (committee === "CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL") {
            
        	$(".chart .table .tbody").append( //I dont know if this is right
                
                "<tr>"+
                    "<td>"+date+"</td>"+
                    "<td>"+info+"</td>"+
                    "<td id='amount'>"+amount+"</td>"+
                "</tr>"
                
			);
            

		}
        
    }
}

