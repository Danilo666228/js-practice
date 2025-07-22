/** @type {import('mock-config-server').FlatMockServerConfig} */
const flatMockServerConfig = [
    {
        baseUrl: '/api'
    },
    {
        configs: [
            {
                path: '/users',
                method: 'get',
                routes: [{ data: { emoji: '🦁', name: 'Nursultan' } }]
            },
            {
                path : '/products',
                method: 'get',
                routes: [
                    {
                        data : [
                            {
                                id : 1,
                                title : 'Огурец'
                            },
                            {
                                id : 2,
                                title : 'Помидор'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

export default flatMockServerConfig;