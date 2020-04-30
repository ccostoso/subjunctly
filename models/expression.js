module.exports = (sequelize, DataTypes) => {
    const Expression = sequelize.define("Expression", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        alt_names: DataTypes.ARRAY(DataTypes.DECIMAL),
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exen_1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        exfr_1: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        exen_2: DataTypes.TEXT,
        exfr_2: DataTypes.TEXT,
        exen_3: DataTypes.TEXT,
        exfr_3: DataTypes.TEXT,
    });
    return Expression;
}