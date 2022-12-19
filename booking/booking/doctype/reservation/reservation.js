// Copyright (c) 2022, Lubna Hameed and contributors
// For license information, please see license.txt


frappe.ui.form.on('Reservation', {
	destination_name: function(frm) {
		const list = [frm.doc.air_travel,frm.doc.sea_travel,frm.doc.overland_travel]
		const travel_list = []
		const list1 = [frm.doc.business_class,frm.doc.vip_class,frm.doc.economy_class]
		const class_list = []

		cur_frm.set_query("hotel_name", function(){
			return {
				"filters": {
					"place": frm.doc.destination_name
				}
			}
		})
		cur_frm.set_query("activites", function(){
			return {
				"filters": {
					"city": frm.doc.destination_name
				}
			}
		})
		cur_frm.set_query("travel_type", function(){
			return {
				"filters": {
					"place": frm.doc.destination_name
				}
			}
		})
		list.forEach(function(item,index){
			if(item == 'True'){
			if(index == 0){travel_list.push("Air Travel")};
			if(index == 1){travel_list.push("Sea Travel")};
			if(index == 2){travel_list.push("Overland Travel");
		}
		}	
		})
		set_field_options("travel_type", travel_list);	
		list1.forEach(function(item,index){
			if(item == 'True'){
			if(index == 0){class_list.push("Business Class")};
			if(index == 1){class_list.push("Vip Class")};
			if(index == 2){class_list.push("Economy Class");
		}
	    }	
	    })
		frappe.msgprint(class_list)
		set_field_options("ticket_class", class_list);
	},
	distination: function(frm) {
		frm.set_value("costus",Math.floor(Math.random() * 1000))
	},
    from: function(frm) {
		var date = new Date();
	    var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
		Difference_In_Time = current_date.getTime() - date1.getTime();
		},
    to: function(frm) {
    //frappe.msgprint(frm.doc.to.getTime() - frm.doc.from.getTime())
},
});



