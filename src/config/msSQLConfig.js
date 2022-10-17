const msSQLConfig = {
  serverName: "localhost",
  dbName: "productManagement",
  userName: "MyUser",
  password: "House@6197",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

export default msSQLConfig;
