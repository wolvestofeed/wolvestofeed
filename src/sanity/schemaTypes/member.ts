export const member = {
    name: 'member',
    title: 'Member',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) => Rule.required().email(),
        },
        {
            name: 'contactInfo',
            title: 'Contact Info',
            type: 'object',
            fields: [
                { name: 'phone', title: 'Phone', type: 'string' },
                { name: 'address', title: 'Mailing Address', type: 'text' },
            ],
        },
        {
            name: 'website',
            title: 'Website',
            type: 'url',
        },
        {
            name: 'status',
            title: 'Member Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Processing', value: 'Processing' },
                    { title: 'Initiated', value: 'Initiated' },
                    { title: 'Suspended', value: 'Suspended' },
                    { title: 'Exiled', value: 'Exiled' },
                ],
            },
            initialValue: 'Processing',
        },
        {
            name: 'role',
            title: 'Member Role',
            type: 'string',
            options: {
                list: [
                    { title: 'Founders', value: 'Founders' },
                    { title: 'Leaders', value: 'Leaders' },
                    { title: 'Client', value: 'Client' },
                    { title: 'Camp', value: 'Camp' },
                ],
            },
        },
    ],
};
