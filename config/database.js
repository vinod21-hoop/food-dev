require('dotenv').config(); // Load environment variables

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL', // Use environment variable for database URL
    dialect: 'postgres',
  },
  test: {
    use_env_variable: 'DATABASE_URL', // Use environment variable for database URL
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL', // Use environment variable for database URL
    dialect: 'postgres',
  },
};
