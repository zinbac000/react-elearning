export const menu = {
  mobile: [
    {
      header: 'Alert',
      link: [
        {
          path: '/404',
          label: 'Notifications',
        },
        {
          path: '/404',
          label: 'Messages',
        },
        {
          path: '/404',
          label: 'Wishlist',
        },
      ],
    },
    {
      header: 'Account',
      link: [
        {
          path: '/user/account',
          label: 'Account settings',
        },
        {
          path: '/404',
          label: 'Payment methods',
        },
        {
          path: '/404',
          label: 'Knowcode credits',
        },
        {
          path: '/404',
          label: 'Purchase history',
        },
      ],
    },
    {
      header: 'Profile',
      link: [
        {
          path: '/404',
          label: 'Public profile',
        },
        {
          path: '/404',
          label: 'Edit profile',
        },
        {
          path: '/',
          label: 'Log out',
          signoutFlag: true,
        },
      ],
    },
  ],

  desktop: [
    [
      {
        path: '/user/my-courses',
        label: 'My courses',
      },
      {
        path: '/404',
        label: 'My cart',
      },
      {
        path: '/404',
        label: 'Wishlist',
      },
      {
        path: '/404',
        label: 'Teach on Knowland',
      },
    ],
    [
      {
        path: '/user/account',
        label: 'Account settings',
      },
      {
        path: '/404',
        label: 'Payment methods',
      },
      {
        path: '/404',
        label: 'Knowcode credits',
      },
      {
        path: '/404',
        label: 'Purchase history',
      },
    ],
    [
      {
        path: '/404',
        label: 'Notifications',
      },
      {
        path: '/404',
        label: 'Messages',
      },
    ],
    [
      {
        path: '/404',
        label: 'Public profile',
      },
      {
        path: '/404',
        label: 'Edit profile',
      },
    ],
    [
      {
        path: '/404',
        label: 'Help',
      },
      {
        path: '/',
        label: 'Logout',
        signoutFlag: true,
      },
    ],
  ],
};
