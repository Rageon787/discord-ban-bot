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
      subcommand
        .setName("timeblock")
        .setDescription("timeblock ban")
        .addStringOption((option) =>
          option
            .setName("ban-duration")
            .setDescription("Enter the duration you want to be banned for?")
            .setRequired(true),
        ),
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("staggered")
        .setDescription("staggered ban")
        .addStringOption((option) =>
          option
            .setName("ban-duration")
            .setDescription(
              "Enter the time duration you want to be banned for?",
            )
            .setRequired(true),
        )
        .addStringOption((option) =>
          option
            .setName("unban-duration")
            .setDescription("Enter the time duration you want be unbanned for")
            .setRequired(true),
        ),
    ),
  async execute(interaction) {
    const subcommand = interaction.options.getSubcommand;
    if (subcommand == "timeblock") {
    } else if (subcommand == "staggered") {
    }

    await interaction.reply("you're banned now");
  },
};
