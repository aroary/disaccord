<!-- ![badge](https://github.com/aroary/disaccord/actions/workflows/main.yml/badge.svg) -->
[![GitHub release](https://img.shields.io/github/v/release/aroary/disaccord.svg)](https://GitHub.com/aroary/disaccord/releases/)
[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/aroary/disaccord)
[![Discord](https://img.shields.io/discord/854114095929491456.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/BHtNSq5bq2)
# Disaccord
## Getting started
#### Fill in this inforamtion in the `/.secrets.json` file.
```json
{
    "token": "TOKEN",
    "intents": ["INTENT"],
    "port": 443,
    "redeploy": true,
    "prefix": "PREFIX",
    "developer": ["DEVELOPER_ID"],
    "statusInterval": 60000,
    "version": "3.0.1"
}
```
* **`token`**: *`String`* The bots login *token*.
* **`intents`**: *`Array`* The bots *intent*s.
* **`port`**: *`Integer`* The *port* number your bots app will listen at (defults `80`, `443`).
* **`reDeploy`**: *`Boolean`* Weather or not to reregister the slash commands.
* **`prefix`**: *`String`* The *prefix* used to execute commands.
* **`developer`**: *`Array`* The *developers* of the bot.
* **`statusInterval`**: *`Number`* The *interval* to cycle to the next value in the *status* array.
* **`version`**: *`String`* Ther version of your the bot.
## Requirements
* [Node.js](https://nodejs.org/en/) `^14.17.5`
## Details
### [Join](https://discord.gg/BHtNSq5bq2) the discord server!
##### You can ask for help, report problem and help others in our discord server!
### [Invite](https://discord.com/api/oauth2/authorize?client_id=852018638369062913&permissions=8&scope=bot%20applications.commands) our defult bot!
##### You can invite our defult discord bot to your server to see that this code works!
___
### Template by [aroary](https://github.com/aroary)
[![Profile views](https://gpvc.arturio.dev/aroary)](https://github.com/aroary)
###### MIT License | Copyright Ⓒ 2021 aroary