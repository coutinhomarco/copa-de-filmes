const Filme = (sequelize, DataTypes) => {
  const Filme = sequelize.define('Filme', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      },
    titulo:{
      type: DataTypes.STRING,
      allowNull: false,
      },
    ano:{
      type: DataTypes.INTEGER,
      allowNull: false,
        },
    nota:{
      type: DataTypes.FLOAT,
      allowNull: false,
        },}, {
          timestamps: false
        });
  return Filme
}

module.exports = Filme;