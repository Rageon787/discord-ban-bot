const {
  InteractionContextType,
  PermissionFlagsBits,
  SlashCommandBuilder,
} = require("discord.js");
const { roleId } = require("../config.json");
const interactionCreate = require("../events/interactionCreate");
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
    const subcommand = interaction.options.getSubcommand();
    const durationArgs = interaction.options.getString();
    console.log(subcommand);
    if (subcommand === "timeblock") {
      // Perform input validation? is it the right format?
      // parse the time string ("y mo d h m") -to ms
      // Ban this user immediately and store the unban time in a database
      await interaction.member.roles.add(roleId);
      setTimeout(() => interaction.member.roles.remove(roleId), 5000);
      await interaction.reply(
        `${interaction.user} you're banned for ${durationArgs}`,
      );
    } else if (subcommand === "staggered") {
      // two string options: ban time and unban time?
      // perform input validation? is it in the expected format?
      // if no then send a message saying "Invalid time format"
      // else
      // parse everything into ms
      // Ban this user immediately and store the unban time in a database called Unbans
      // The next ban time will also be stored in the database called Bans
      await interaction.member.roles.add(roleId);
      setTimeout(() => interaction.member.roles.remove(roleId), 5000);
      await interaction.reply(
        `${interaction.user} you're banned for ${durationArgs}`,
      );
    } else {
      await interaction.reply("something is wrong?");
    }
  },
};
