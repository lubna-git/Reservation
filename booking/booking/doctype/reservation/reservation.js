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
	before_save: function(frm) {
		frm.set_value("costus",Math.floor(Math.random() * 1000))
		frm.set_value("support_number","+97710000000")
	},
    from: function(frm) {
		const date = new Date();
		const date_from = new Date(frm.doc.from);
		if(Math.ceil(date_from - date) <= 0){
			frappe.throw("Please put date after today in the (from field)")};
		},
    to: function(frm) {
		const date_from = new Date(frm.doc.from);
		const date_to = new Date(frm.doc.to);
		const time = Math.abs(date_to - date_from);
		const Days = Math.ceil(time/(1000 * 3600 * 24));
		frm.set_value("number_of_nights",Days);  
},
});



