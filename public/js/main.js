// Creation of invoice model
Ext.define('Invoice', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'invoice_number', mapping: 'invoice_number' },
		{ name: 'customer_name', mapping: 'customer_name' },
		{ name: 'date', mapping: 'date'},
		{ name: 'due_date', mapping: 'due_date' },
		{ name: 'total', mapping: 'total' },
		{ name: 'currency_code', mapping: 'currency_code' }
	]
});

Ext.util.Format.thousandSeparator  = ".";
Ext.util.Format.decimalSeparator  = ",";

Ext.onReady(function(){
	// Creation of data store
	var invoices = Ext.create('Ext.data.Store', {
		model: 'Invoice',
		proxy: {
			type: 'ajax',
			url: 'invoices',
			reader: {
				type: 'json',
				root: 'invoices'
			}
		},
		autoLoad: true
	});
	// Creation of grid.Panel
	var containerPanel = Ext.create('Ext.grid.Panel', {
	  	requires: [
	        'Ext.grid.feature.Grouping'
	    ],
	 	id: 'gridId',
	 	store: invoices,
	 	stripeRows: true,
	 	renderTo:'invoiceTable',
        features: [{
            id: 'group',
            ftype: 'groupingsummary',
            
            hideGroupedHeader: true,
            enableGroupingMenu: false
        }],
	    dockedItems: [
	        {
	            xtype: 'toolbar',
	            dock: 'top',  
	            items: [
	                {
	                    xtype: 'button',
	                    text: 'Actualizar',
	                    handler: function(){
	                    	//invoices.clearFilter();
	                    	invoices.load();
	                    }
	                },
	                {
	                    xtype: 'button',
	                    text: 'Facturas mayores a 100.000',
	                    handler: function(){
							var invoicesUpper100 = new Ext.util.Filter({
								id: 'filter100',
							    filterFn: function(item) {
							        return item.data.total > 100000;
							    }
							});
							if ( invoices.isFiltered() ) {
								invoices.removeFilter('filter100');
							} else {
		                    	invoices.filter(invoicesUpper100);
							};
	                    }
	                },
	                {
	                    xtype: 'button',
	                    text: 'Agrupar por cliente',
	                    handler: function(){
	                    	if ( invoices.isGrouped() ) {
	                    		invoices.clearGrouping();
	                    	} else {
	                    		invoices.group('customer_name');
	                    	};
	                    }
	                }
	            ]
	        }
	    ],
	 	columns:
	 	[{ 
	 		header: "Número Factura",
	 		dataIndex: 'invoice_number',	
	 		id : 'invoice_id',
	 		flex: .4,
	 		hideable: false,    
	 		sortable: true,
            summaryType: 'count',
            summaryRenderer: function(value, summaryData, dataIndex) {
                return ((value === 0 || value > 1) ? '(' + value + ' facturas)' : '(1 factura)');
            }
	 	},{
	 		header: "Nombre cliente", 
	 		dataIndex: 'customer_name',
	 		flex: 1,
	 		sortable: true
	 	},{
	 		header: "Fecha facturación",
	 		dataIndex: "date",
	 		flex: .4,
	 		sortable: true,
            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
            summaryRenderer: Ext.util.Format.dateRenderer('d/m/Y'),
            field: {
                xtype: 'datefield'
            }
	 	},{
	 		header: "Fecha vencimiento",
	 		dataIndex: "due_date",
	 		flex: .4,
	 		sortable: true,
            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
            summaryRenderer: Ext.util.Format.dateRenderer('d/m/Y'),
            field: {
                xtype: 'datefield'
            }
	 	},{
	 		header: "Total (COP)",
	 		dataIndex: "total",
	 		flex: .3,
	 		hideable: false,
	 		sortable: true,
            summaryType: 'sum',
            renderer: function(value, metaData, record, rowIdx, colIdx, store, view){
                return Ext.util.Format.currency(value, '$', 0);
            },
            summaryRenderer: function(value, summaryData, dataIndex) {
                return Ext.util.Format.currency(value, '$', 0);
            },
            field: {
                xtype: 'numberfield'
            }
	 	},{
	 		header: "Moneda",
	 		dataIndex: "currency_code",
	 		flex: .3,
	 		hideable: false
	 	}]
	 });
});