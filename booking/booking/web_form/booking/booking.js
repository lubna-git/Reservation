frappe.ready(function() {
	frappe.web_form.after_load = () => {
		frappe.msgprint('hi')

	}
});
