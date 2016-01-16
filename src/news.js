/**
 * Created by edwin on 2016/1/16.
 */
import Vue from 'vue'

var apiURL = 'https://cnodejs.org/api/v1/topics';
var apiDetailURL = 'https://cnodejs.org/api/v1/topic/';

var demo = new Vue({

    el: '#demo',
    data: {
        commits: null,
        content: null
    },
    created: function () {
        this.fetchData()
    },
    methods: {
        fetchData: function () {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiURL )
            xhr.onload = function () {
                self.commits = JSON.parse(xhr.responseText);
                var id = self.commits.data[0].id;
                demo.say(id);
            };
            xhr.send()
        },
        say: function (id) {
            var xhr = new XMLHttpRequest()
            var self = this
            xhr.open('GET', apiDetailURL+id )
            xhr.onload = function () {
                self.content = JSON.parse(xhr.responseText).data.content

            }
            xhr.send()
        }
    }
});

