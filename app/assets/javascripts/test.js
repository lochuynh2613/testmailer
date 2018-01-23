var movie_form = new Ext.FormPanel({
    url: 'localhost:3000/users/new',
    renderTo: document.body,
    frame: true,
    hidden: true,
    title: 'Movie Information Form',
    width: 250,
    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        id: 'name',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email',
        name: 'email',
        id: 'email',
        allowBlank: false
    }, {
        xtype: 'textfield',
        fieldLabel: 'Login',
        name: 'login',
        id: 'login',
        allowBlank: false
    }, {
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
                        window.location.reload();
                        movie_form.hide();
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