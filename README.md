# Discord ban bot

A discord bot that allows users to self ban themselves when they want to lock in

# How it works?

The bot uses role based banning, Users are assigned a role that isolates them from all or specific channels in the server

Users enter a **Ban list** by using the command `<insert-command>``

The **Ban list** is a list of members who are currently banned

## Staggered bans

Users can impose a self-ban in intervals of some amount of time.

For example, you configure the bot to ban you for 1 hour and unban you for 15 minutes.

## Blocked bans

A user can ban themselves for a set period of time, after which the bot will automatically unban you and remove you from the ban list

# Exiting the Ban list

In the case, a member wants to be unbanned before the completion of their ban period. They will have to ping a server admin / moderator to remove them from the ban list
(In the future, I hope to implement an annoying game to disincentivize unbanning)

# Commands
