const {
  InteractionContextType,
  PermissionFlagsBits,
  SlashCommandBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("selfban")
    .setDescription("self ban command")
    .addSubcommand((subcommand) =>
      subcommand.setName("timeblock").setDescription("timeblock ban"),
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("staggered").setDescription("staggered ban"),
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand;
    if (subcommand == "timeblock") {
      // do something
    } else if (subcommand == "staggered") {
      // do something
    }
  },
};
