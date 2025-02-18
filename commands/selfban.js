const {
  InteractionContextType,
  PermissionFlagsBits,
  SlashCommandBuilder,
} = require("discord.js");
const { roleId } = require("../config.json");
const interactionCreate = require("../events/interactionCreate");
const { validate, timeValidate } = require("../utils/timeHandler");

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
    if (subcommand === "timeblock") {
      // Fetch the option string
      const banDuration = interaction.options.getString("ban-duration");
      const inMs = timeValidate(banDuration); // ban duration in ms
      if (inMs != "") {
        console.log(inMs);
        interaction.member.roles.add(roleId);
        setTimeout(() => {
          interaction.member.roles.remove(roleId);
        }, inMs);
        await interaction.reply(
          `${interaction.user} You've been banned for ${banDuration}`,
        );
      } else {
        await interaction.reply(
          `${interaction.user} please enter the duration in the right format!`,
        );
      }
    } else if (subcommand === "staggered") {
      // two string options: ban time and unban time?
      const banDuration = interaction.options.getString("ban-duration");
      const unbanDuration = interaction.options.getString("unban-duration");
      // perform input validation? is it in the expected format?
      //
      // if no then send a message saying "Invalid time format"
      // else
      // parse everything into ms
      // Ban this user immediately and store the unban time in a database called Unbans
      // The next ban time will also be stored in the database called Bans
      interaction.member.roles.add(roleId);
      setTimeout(() => interaction.member.roles.remove(roleId), 5000);
      await interaction.reply(
        `${interaction.user} you're banned for ${durationArgs}`,
      );
    } else {
      await interaction.reply("something is wrong?");
    }
  },
};
