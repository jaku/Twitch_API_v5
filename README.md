# Twitch_API_v5
Simple module to use Twitch's API v5 for all endpoints (with the exception of clips and video upload which are only available using v4). For details on optional parameters or required authentication scopes please follow the links to the Twitch docs.

This module also includes undocumented endpoints (such as the chatters endpoint to view which users are currently in a channels chat), these should be used at your own risk and are should be expected to change or be removed at any time.

## Contents

- [Getting Started](#getting-started)
- [Feed](#feed)
- [Channels](#channels)
- [Chat](#chat)
- [Clips](#clips)
- [Communities](#communities)
- [Games](#games)
- [Ingests](#ingests)
- [Search](#search)
- [Streams](#streams)
- [Teams](#teams)
- [Users](#users)
- [Videos](#videos)
- [Video Upload](#video-upload)
- [Other](#other)

---

## Getting Started

#### Install
``` bash
npm install twitch-api-v5 --save
```

#### Examples

``` js
var api = require('twitch-api-v5');

api.clientId = 'Twitch app client-id';

app.user.getByID({ userID: '12826' }, (err, res) => {
    if(err) {
        console.log(err);
    } else {
        console.log(res);
        /* Example response
        {
            display_name: 'Twitch',
            _id: '12826',
            name: 'twitch',
            type: 'user',
            ...
        }
        */
    }
});

api.feed.createPost({ auth: 'OAuth ...', channelID: '12826', post: 'New Post!' }, (err, res) => {
    ...
});
```

---

## Feed
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/channel-feed/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.feed.getPosts | any (optional) | channelID |
| api.feed.getPost | any (optional)| postID |
| api.feed.createPost | channel\_feed\_edit | auth, channelID, post |
| api.feed.deletePost | channel\_feed\_edit | auth, channelID, postID |
| api.feed.createReaction | channel\_feed\_edit | auth, channelID, postID, emoteID |
| api.feed.deleteReaction | channel\_feed\_edit | auth, channelID, postID, emoteID |
| api.feed.getComments | any (optional) | channelID, postID |
| api.feed.createComment | channel\_feed\_edit | auth, channelID, postID, comment |
| api.feed.deleteComment | channel\_feed\_edit | auth, channelID, postID, commentID |
| api.feed.createCommentReaction | channel\_feed\_edit | auth, channelID, postID, commentID, emoteID |
| api.feed.deleteCommentReaction | channel\_feed\_edit | auth, channelID, postID, commentID, emoteID |


---

## Channels
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/channels/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.channels.channel | channel\_read | auth |
| api.channels.channelByID | none | channelID |
| api.channels.updateChannel | channel\_editor | channelID, and at least one of status, game, delay or channel\_feed\_enabled |
| api.channels.editors | channel\_read | auth, channelID |
| api.channels.followers | none | channelID |
| api.channels.teams | none | channelID |
| api.channels.subs | channel\_subscriptions | auth, channelID |
| api.channels.checkSub | channel\_check\_subscription | auth, channelID, userID |
| api.channels.videos | none | channelID |
| api.channels.startAd | channel\_commercial | auth, channelID, duration |
| api.channels.resetStreamKey | channel\_stream | auth, channelID |
| api.channels.getCommunity | none | channelID |
| api.channels.setCommunity | any | auth, channelID, communityID |
| api.channels.leaveCommunity | any | auth, channelID |

---

## Chat
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/chat/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.chat.badges | none | channelID |
| api.chat.emoteSet | none | none |
| api.chat.emotes | none | none |

---

## Clips
[Twitch Doc](https://dev.twitch.tv/docs/v5/guides/clips-discovery/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.clips.getClip | none | channelName, slug |
| api.clips.top | none | none |
| api.clips.followed | user\_read | none |

---

## Communities
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/communities/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.communities.getByName | none | name |
| api.communities.getByID | none | communityID |
| api.communities.create | any | auth, name, summary, description, rules |
| api.communities.update | any (community owner) | auth, communityID |
| api.communities.top | none | none |
| api.communities.bans | any (community owner or moderator) | auth, communityID |
| api.communities.addBan | any (community owner or moderator) | auth, communityID, userID |
| api.communities.unBan | any (community owner or moderator) | auth, communityID, userID |
| api.communities.createAvatar | any (community owner) | auth, communityID, avatar\_image |
| api.communities.deleteAvatar | any (community owner) | auth, communityID |
| api.communities.createCover | any (community owner) | auth, communityID, cover\_image |
| api.communities.deleteCover | any (community owner) | auth, communityID |
| api.communities.mods | none | communityID |
| api.communities.addMods | any (community owner) | auth, communityID, userID |
| api.communities.delMod | any (community owner) | auth, communityID, userID |
| api.communities.getPermissions | any | auth, communityID |
| api.communities.report | none | channelID, communityID |
| api.communities.timeouts | any (community owner or moderator) | auth, communityID |
| api.communities.addTimeout | any (Owner or mod) | auth, communityID, userID, duration |
| api.communities.delTimeout | any (Owner or mod) | auth, communityID, userID |

---

## Games
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/games/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.games.top | none | none |

---

## Ingests
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/ingests/)

#### Example
``` js
api.ingests.({  }, (err, res) => {
    ...
});
```

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.ingests.serverList | none | none |

---

## Search
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/search/)

#### Example
``` js
api.search.({  }, (err, res) => {
    ...
});
```

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.search.channels | none | query |
| api.search.games | none | query |
| api.search.streams | none | query |

---

## Streams
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/streams/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.streams.channel | none | channelID |
| api.streams.live | none | none |
| api.streams.summary | none | none |
| api.streams.featured | none | none |
| api.streams.followed | user\_read | auth |

---

## Teams
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/teams/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.teams.getAll | none | none |
| api.teams.getTeam | none | team |

---

## Users
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/users/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.users.user | user\_read | auth |
| api.users.userByID | none | userID |
| api.users.usersByName | none | users |
| api.users.userEmotes | user\_subscriptions | auth, userID |
| api.users.checkSub | user\_subscriptions | auth, userID, channelID |
| api.users.follows | none | userID |
| api.users.checkFollow | none | userID, channelID |
| api.users.followChannel | user\_follows\_edit | auth, userID, channelID |
| api.users.unfollowChannel | user\_follows\_edit | auth, userID, channelID |
| api.users.blockList | user\_blocks\_read | auth, userID |
| api.users.blockUser | user\_blocks\_edit  | auth, sourceUserID, targetUserID |
| api.users.unblockUser | user\_blocks\_edit | auth, sourceUserID, targetUserID |
| api.users.createVHS | viewing\_activity\_read | auth, identifier |
| api.users.checkVHS | user\_read | auth |
| api.users.deleteVHS | viewing\_activity\_read | auth |

---

## Videos
[Twitch Doc](https://dev.twitch.tv/docs/v5/reference/videos/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.video.getVideo | none | videoID |
| api.video.top | none | none |
| api.video.followed | none | none |

---

## Video Upload
[Twitch Doc](https://dev.twitch.tv/docs/v5/guides/video-upload/)

| Function | Auth Scope | Required Parameters |
| -------- | ---------- | ------------------- |
| api.videoUpload.create | channel\_editor | auth, channelName, title |
| api.videoUpload.upload | none | videoID, part, uploadToken, videoData, contentLength |
| api.videoUpload.complete | none | videoID, uploadToken |

---

## Other
*__Warning:__* *These endpoints are undocumented and should be expected to change or cease to function at any point!*

| Function | Auth Scope | Required Parameters | Description |
| -------- | ---------- | ------------------- | ----------- |
| api.other.chatters | none | channelName | Usernames of people in chat in the specified channel |
| api.other.hosts | none | channelID | Channels that are hosting the specified channelID |
| api.other.hosting | none | channelID | Who the specified channelID is hosting |
| api.other.subsTo | user\_subscriptions | channelName | Who a user is subbed to |
| api.other.randomStream | none | none | Random stream |
| api.other.getUser | none | channelName | Provides user data not returned in the documented endpoint |
| api.other.chatProperties | none | channelName | Chat properties, such as subs only, rules etc... |
| api.other.product | none | channelName | Channels subscription program details |
| api.other.panels | none | channelName | Info on each of a channels panels |
| api.other.playlist | none | channelID | Info on a currently running playlist |
| api.other.followedHosting | none | channelName | Followed channels that are hosting someone else |
| api.other.followedGames | none | channelName | Games that a user follows |
| api.other.followedGamesLive | none | channelName | Live games that a user follows |
| api.other.checkFollowGame | none | channelName, game | Check if a user follows a game |
| api.other.badges | none | none | All chat badges |
| api.other.subBadges | none | channelID | A channels sub badges |
| api.other.recentChat | none | channelID | Recent chat in the specified channel |
| api.other.cs | none | none | List of CS streams with extra details |
| api.other.csMaps | none | none | List of CS maps and their viewers |

