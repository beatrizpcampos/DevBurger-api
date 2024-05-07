module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres', 
    password: 'postgres',
    database: 'devburger-postgres',
    define: {
        timestamps: true,
        underscored: true,
        underscoredALL: true,
    },
};