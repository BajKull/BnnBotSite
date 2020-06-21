const commands = {
  fighting: [
    {
      title: "fight",
      description: "Allows you to fight other members of the fighting club.",
      usage: "bnn fight @friend",
    },
    {
      title: "class",
      description: "Allows you to fight other members of the fighting club.",
      usage: "bnn class warrior",
    },
    {
      title: "classinfo",
      description: "Allows you to fight other members of the fighting club.",
      usage: "bnn classinfo rogue",
    },
  ],
  utility: [
    {
      title: "help",
      description:
        "Displays list of available commands, if used with <command> option displays information about that command.",
      usage: "bnn help xp",
    },
    {
      title: "info",
      description: "Displays all of your stats.",
      usage: "bnn info",
    },
    {
      title: "level",
      description: "Shows you your current level progress.",
      usage: "bnn level",
    },
    {
      title: "poll",
      description: "Allows you to create a poll.",
      usage: "bnn poll Do you like ducks ? yes no idk",
    },
    {
      title: "roll",
      description: "Allows you to roll a number or roll dice.",
      usage: "bnn roll 3 20 (rolls 3x d20)",
    },
    {
      title: "top10",
      description: "Shows you top 10 list of the richest fighters!",
      usage: "bnn top10",
    },
    {
      title: "vote",
      description: "Allows you to vote in a poll.",
      usage: "bnn vote 1",
    },
    {
      title: "xp",
      description: "Allows you to buy xp for money. 1$ = 1xp",
      usage: "bnn xp 100",
    },
  ],
  gambling: [
    {
      title: "flip",
      description: "Allows you to play heads or tails with your money.",
      usage: "bnn flip tails 10",
    },
    {
      title: "highlow",
      description: "Allows you to play high low with your money.",
      usage: "bnn highlow 15",
    },
    {
      title: "heist",
      description: "Allows you to attempt a heist with your friends.",
      usage: "bnn heist 150",
    },
    {
      title: "jackpot",
      description:
        "Allows you to play jackpot with your friends! One person can join multiple times.",
      usage: "bnn jackpot 100",
    },
  ],
  pictures: [
    {
      title: "pic",
      description: "Sends you a picture of an animal.",
      usage: "bnn pic duck",
    },
    {
      title: "piclist",
      description: "Sends you a list of animals the bot can send.",
      usage: "bnn piclist",
    },
    {
      title: "porn",
      description: "Sends you naughty pictures.",
      usage: "bnn porn",
    },
  ],
  money: [
    {
      title: "balance",
      description: "Displays balance of your account.",
      usage: "bnn balance",
    },
    {
      title: "collect",
      description:
        "Allows you to earn money which is used to gamble or level up your profile!",
      usage: "bnn collect",
    },
    {
      title: "donate",
      description: "Allows you to transfer money to someone else!",
      usage: "bnn donate 15 @friend",
    },
  ],
};

export default commands;
