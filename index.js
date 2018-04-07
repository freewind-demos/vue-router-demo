'use strict';

const Index = {template: '<div>hello index!</div>'};
const Foo = {template: '<div>foo</div>'};
const Bar = {template: '<div>bar</div>'};

const UserHome = {
    template: `
    <div>
    <div>
        <p>{{ username }}</p>
    </div>
    <div>
        <a @click="goBack" href="javascript: void(0)">Go Back</a>
    </div>
    </div>
    `,
    
    computed: {
        username: function () {
            return this.$route.params.username
        }
    },
    methods: {
        goBack: function () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        }
    }
};

const router = new VueRouter({
    routes: [
        {path: '/foo', component: Foo},
        {path: '/bar', component: Bar},
        {path: '/user/:username', component: UserHome},
        {path: '', component: Index}
    ]
});


new Vue({router: router}).$mount('#app');

