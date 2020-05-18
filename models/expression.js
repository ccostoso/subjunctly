module.exports = (sequelize, DataTypes) => {
    const Expression = sequelize.define("Expression", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        source_html: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        plain_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        top_desc: {
            type: DataTypes.TEXT,
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
        first_desc: DataTypes.TEXT,
        exen_2: DataTypes.TEXT,
        exfr_2: DataTypes.TEXT,
        second_desc: DataTypes.TEXT,
        exen_3: DataTypes.TEXT,
        exfr_3: DataTypes.TEXT,
        third_desc: DataTypes.TEXT,
        exen_4: DataTypes.TEXT,
        exfr_4: DataTypes.TEXT,
        fourth_desc: DataTypes.TEXT,
        bottom_desc: DataTypes.TEXT,
        bottom_desc_2: DataTypes.TEXT,
    });
    return Expression;
}