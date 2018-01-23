var movie_form = new Ext.FormPanel({
    url: 'localhost:3000/users/new',
    renderTo: document.body,
    frame: true,
    hidden:true,
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
        xtype: 'radio',
        fieldLabel: 'HI',
        name: 'filmed_in',
        boxLabel: 'ahihi'
    }, {
        xtype: 'radio',
        hideLabel: false,
        labelSeparator: '',
        name: 'filmed_in',
        boxLabel: 'Black & White'
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
                    method: 'POST',
                    params: { name: a, email: b, login: c },
                    success: function(response, opts) {
                        window.location.replace("http://0.0.0.0:3000/users");
                    },
                    failure: function(response, opts) {

                    }
                });
            }
        },
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