// Creation of invoice model
Ext.define('Invoice', {
	extend: 'Ext.data.Model',
	fields: [
	{ name: 'invoice_number', mapping: 'invoice_number' },
	{ name: 'customer_name', mapping: 'customer_name' },
	{ name: 'date', mapping: 'date' },
	{ name: 'due_date', mapping: 'due_date' },
	{ name: 'total', mapping: 'total' },
	{ name: 'currency_code', mapping: 'currency_code' }
	]
});

Ext.onReady(function(){
	//Creation data Store
	var invoices = Ext.create('Ext.data.Store', {
		model: 'Invoice',
		proxy : {
			type : 'rest',
		    actionMethods : {
		        read : 'GET'
		    },
			url : 'invoices',
			reader: {
				type : 'json',
				root : 'invoices'
			}
		},
		autoLoad: true
	});

	var containerPanel = Ext.create('Ext.grid.Panel', {
	 	id                : 'gridId',
	 	store             : invoices,
	 	stripeRows        : true,
	 	renderTo          :'invoiceTable',
	 	columns           :
	 	[{ 
	 		header: "Número Factura",
	 		dataIndex: 'invoice_number',	
	 		id : 'invoice_id',
	 		flex: .4,
	 		hideable: false,    
	 		sortable: true
	 	},{
	 		header: "Nombre cliente", 
	 		dataIndex: 'customer_name',
	 		flex: 1,
	 		sortable: true
	 	},{
	 		header: "Fecha facturación",
	 		dataIndex: "date",
	 		flex: .4,
	 		sortable: true
	 	},{
	 		header: "Fecha vencimiento",
	 		dataIndex: "due_date",
	 		flex: .4,
	 		sortable: true
	 	},{
	 		header: "Total",
	 		dataIndex: "total",
	 		flex: .3,
	 		hideable: false,
	 		sortable: true
	 	},{
	 		header: "Moneda",
	 		dataIndex: "currency_code",
	 		flex: .3,
	 		hideable: false
	 	}]
	 });
});