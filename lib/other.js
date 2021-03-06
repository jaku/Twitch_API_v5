'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {

    // Usernames of people in chat in the specified channel
    chatters: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: none

        if(!data.channelName) return callback('channelName is required');

        let options = {};
        options.url = `http://tmi.twitch.tv/group/user/${data.channelName}/chatters`;

        request('GET', options, callback);
    },

    // Channels that are hosting the specified channelID
    hosts: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: none

        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `http://tmi.twitch.tv/hosts?include_logins=1&target=${data.channelID}`;

        request('GET', options, callback);
    },

    // Who the specified channelID is hosting
    hosting: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: none

        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `http://tmi.twitch.tv/hosts?include_logins=1&host=${data.channelID}`;

        request('GET', options, callback);
    },

    // Who a user is subbed to
    subsTo: (data, callback) => {
        // Authentication: user_subscriptions
        // Required Parameters: channelName
        // Optional Parameters: none

        if(!data.auth) return callback('auth is required');
        if(!data.channelName) return callback('channelName is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/users/${data.channelName}/tickets`;
        options.auth = data.auth;

        request('GET', options, callback);
    },

    // Random stream
    randomStream: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: none

        if(typeof data === 'function') callback = data;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/random`;

        request('GET', options, callback);
    },

    // Provides user data not returned in the documented endpoint
    getUser: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: none

        if(!data.channelName) return callback('channelName is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/channels/${data.channelName}`;

        request('GET', options, callback);
    },

    chatProperties: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: none
        
        if(!data.channelName) return callback('channelName is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/channels/${data.channelName}/chat_properties`;

        request('GET', options, callback);
    },

    // Channels subscription program details
    product: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: none
        
        if(!data.channelID) return callback('channelName is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/channels/${data.channelName}/product`;

        request('GET', options, callback);
    },

    panels: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: none
        
        if(!data.channelName) return callback('channelName is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/channels/${data.channelName}/panels`;

        request('GET', options, callback);
    },

    playlist: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: none
        
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://api.twitch.tv/api/playlists/channels/${data.channelID}`;

        request('GET', options, callback);
    },

    // Followed channels that are hosting someone else
    followedHosting: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: limit, offset
        
        if(!data.channelName) return callback('channelName is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/api/users/${data.channelName}/followed/hosting?${querystring.stringify(params)}`;

        request('GET', options, callback);   
    },

    // Games that a user follows
    followedGames: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: limit, offset
        
        if(!data.channelName) return callback('channelName is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/api/users/${data.channelName}/follows/games?${querystring.stringify(params)}`;

        request('GET', options, callback);   
    },

    // Live games that a user follows
    followedGamesLive: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName
        // Optional Parameters: limit, offset
        
        if(!data.channelName) return callback('channelName is required');

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/api/users/${data.channelName}/follows/games/live?${querystring.stringify(params)}`;

        request('GET', options, callback); 
    },

    // Check if a user follows a game
    checkFollowGame: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelName, game
        // Optional Parameters: limit, offset
        
        if(!data.channelName) return callback('channelName is required');
        if(!data.game) return callback('game is required');

        let params = {};
        params.name = data.game;
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/api/users/${data.channelName}/follows/games/isFollowing?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    badges: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: none

        if(typeof data === 'function') callback = data;

        let options = {};
        options.url = `https://badges.twitch.tv/v1/badges/global/display`;

        request('GET', options, callback);
    },

    subBadges: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: none
        
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://badges.twitch.tv/v1/badges/channels/${data.channelID}/display`;

        request('GET', options, callback);
    },

    recentChat: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: none
        
        if(!data.channelID) return callback('channelID is required');

        let options = {};
        options.url = `https://tmi.twitch.tv/api/rooms/${data.channelID}/recent_messages`;

        request('GET', options, callback);
    },

    cs: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: none

        if(typeof data === 'function') callback = data;

        let options = {};
        options.url = `https://api.twitch.tv/api/cs`;

        request('GET', options, callback);
    },

    csMaps: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: none

        if(typeof data === 'function') callback = data;

        let options = {};
        options.url = `https://api.twitch.tv/api/cs/maps`;

        request('GET', options, callback);
    }
};
