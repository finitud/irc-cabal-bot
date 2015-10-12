# The IRC Cabal bot

This is a bot I wrote as an in-joke for the #london-hack-space IRC channel on freenode quite a while ago.

It has two "services":

* There is a "boring dude" listener which just sits in the channel waiting for someone to mention the IRC cabal,

* and the "IRC cabal" user, who upon being nudged by the "boring dude" will join the channel,
  claim "There is no IRC cabal", and leave the channel.

Everything currently happens on a single file with hardcoded configuration and no automated testing.
I was younger back then and we all learn. Besides, this was meant to be a quick hack for an easy joke,
and maybe shouldn't have seen the light of day :-)

# Use

* Make sure you try it first on a test channel without real conversations before leaving it running in the wild.

* Pick nicknames for the services and check things are properly configured in `index.js`, then run
```
$ node index.js
```

* Voilà!

This was running with this pedestrian setup for a year or more, left on a `tmux` tab in an AWS box,
with only the occasional `^C` followed by a restart due to the process hanging.

# Licensing

This project is licensed under the 2 clause BSD licence.
Mainly because that's what the `package.json` file seems to have defaulted to whenever it was created.

`¯\_(ツ)_/¯`
