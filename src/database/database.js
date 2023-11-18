import Sequelize from "sequelize";

// export const sequelize = new Sequelize("clinica","postgres","admin",{
//     host:"localhost",
//     dialect:"postgres"
// })


export const sequelize = new Sequelize("database", "fl0user", "b0KlYoMTPm9U", {
    host: "ep-young-bonus-47903336.us-east-2.aws.neon.fl0.io",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});  



