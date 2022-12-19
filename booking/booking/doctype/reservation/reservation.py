# Copyright (c) 2022, Lubna Hameed and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from booking.booking.doctype.destination_name import destination_name

class Reservation(Document):
	def before_save(self):
		pass	
		
		
		
		
	