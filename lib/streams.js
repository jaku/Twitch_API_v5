'use strict';

const request = require('./request');
const querystring = require('querystring');

module.exports = {
    channel: (data, callback) => {
        // Authentication: none
        // Required Parameters: channelID
        // Optional Parameters: stream_type

        if(!data.channelID) return callback('channelID is required');

        let params = {};
        if(data.stream_type) params.stream_type = data.stream_type;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/${data.channelID}?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    live: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: channel, game, language, stream_type, limit, offset

        let params = {};
        if(data.channel) params.channel = data.channel;
        if(data.game) params.game = data.game;
        if(data.language) params.language = data.language;
        if(data.stream_type) params.stream_type = data.stream_type;
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    summary: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: game

        let params = {};
        if(data.game) params.game = data.game;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/summary?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    featured: (data, callback) => {
        // Authentication: none
        // Required Parameters: none
        // Optional Parameters: limit, offset

        let params = {};
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/featured?${querystring.stringify(params)}`;

        request('GET', options, callback);
    },

    followed: (data, callback) => {
        // Authentication: user_read
        // Required Parameters: none
        // Optional Parameters: stream_type, limit, offset

        if(!data.auth) return callback('auth is required');

        let params = {};
        if(data.stream_type) params.stream_type = data.stream_type;
        if(data.limit) params.limit = data.limit;
        if(data.offset) params.offset = data.offset;

        let options = {};
        options.url = `https://api.twitch.tv/kraken/streams/followed?${querystring.stringify(params)}`;
        options.auth = data.auth;

        request('GET', options, callback);
    },
};