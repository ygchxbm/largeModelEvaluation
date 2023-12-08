export default [
    {
        path:'/',
        name:'home',
        // component: ()=>import("../components/Home.vue"),
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'home',
                component: () => import('@/components/Home.vue'),
                meta: {
                    title: "首页",
                }
            },
            {
                path: '/initiateEvaluation',
                name: 'InitiateEvaluation',
                component: () => import('@/components/InitiateEvaluation.vue'),
                meta: {
                    title: "发起评测",
                }
            },
            {
                path: '/myAssessment',
                name: 'MyAssessment',
                component: () => import('@/components/MyAssessment.vue'),
                meta: {
                    title: "我的测评",
                }
            },
            {
                path: '/questionBankManagement',
                name: 'QuestionBankManagement',
                component: () => import('@/components/QuestionBankManagement.vue'),
                meta: {
                    title: "题库管理",
                }
            },
            {
                path: '/modelDetails',
                name: 'ModelDetails',
                component: () => import('@/components/ModelDetails.vue'),
                meta: {
                    title: "模型详情",
                    isHide:true,
                }
            },
        ]
    }
]
