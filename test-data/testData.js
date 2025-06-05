const testData = {
  validCredentials: {
    username: 'Admin',
    password: 'admin123'
  },
  
  invalidCredentials: [
    {
      scenario: 'Invalid Username',
      username: 'InvalidUser',
      password: 'admin123',
      expectedError: 'Invalid credentials'
    },
    {
      scenario: 'Invalid Password',
      username: 'Admin',
      password: 'wrongpassword',
      expectedError: 'Invalid credentials'
    },
    {
      scenario: 'Empty Username',
      username: '',
      password: 'admin123',
      expectedError: 'Required'
    },
    {
      scenario: 'Empty Password',
      username: 'Admin',
      password: '',
      expectedError: 'Required'
    },
    {
      scenario: 'Both Fields Empty',
      username: '',
      password: '',
      expectedError: 'Required'
    }
  ],

  urls: {
    loginPage: '/web/index.php/auth/login',
    dashboard: '/web/index.php/dashboard/index'
  },

  pageElements: {
    pageTitle: 'OrangeHRM',
    loginTitle: 'Login',
    dashboardTitle: 'Dashboard'
  }
};