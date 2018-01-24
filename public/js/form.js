var movie_form = new Ext.Window({
    url: 'localhost:3000/users/new',
    frame: true,
    layout: 'form',
    closeAction: 'hide',
    title: 'Movie Information Form',
    width: 280,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        id: 'name',
        cls: 'customField',
        emptyText: 'Name',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email',
        name: 'email',
        id: 'email',
        emptyText: 'Email',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Login',
        name: 'login',
        id: 'login',
        emptyText: 'Login',
        allowBlank: false
    }],
    buttons: [{
        xtype: 'tbbutton',
        text: 'Create',
        listeners: {
            click: function() {
                var a = Ext.getCmp("name").getValue();
                var b = Ext.getCmp("email").getValue();
                var c = Ext.getCmp("login").getValue();
                Ext.Ajax.request({
                    url: '/users',
                    success: function(response, opts) {
                        Ext.getCmp('myGrid').getStore().load();
                        Ext.getCmp('myGrid').getView().refresh();
                    },
                    jsonData: { name: a, email: b, login: c }
                });
            }
        }
    }, {
        xtype: 'tbbutton',
        text: 'Back',
        listeners: {
            click: function() {
                movie_form.hide();
            }
        }
    }]
});