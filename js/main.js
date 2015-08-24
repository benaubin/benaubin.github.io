angular.module('BenSites',[])
    .controller('IndexCtrl',function($scope, $sce){
        $scope.projects = [
                {
                    name: 'Room305',
                    desc: "Room305 is an awesome student literary magizine. " +
                          "I've helped with most of the backend management, hosting, and design.",
                    img: 'Room305.png',
                    url: 'Room305.org'
                },
                {
                    name: 'PlanHW',
                    desc: "PlanHW is your new homework planner. It has features that understand you, not make you understand them. " +
                    "Easily add homework using plain english, pretty much as you'd describe it to any other human, and get reminders " +
                    "at a great time to work on it, instead of when it's due. Oh - and your teachers can send you homework just as easily, "+
                    "so you don't have to type anything at all. Did I mention it's free?",
                    img: 'PlanHW.jpg',
                    url: 'PlanHW.com'
                },
                {
                    name: 'St. Bernard Ski',
                    desc: "Working closely with a ski club, I developed a Wordpress website as it was requested, and " + 
                          "helped them understand and use their website, and its backend. Working through Skype, I was able to " +
                          "perfect each and every aspect of their design.",
                    size: 3,
                    img: 'StBernardSki.jpg',
                    url: 'Stbernardski.org'
                },
                {
                    name: 'AllForFun\'s Modpack',
                    img: "AllForFun's Modpack Items.png",
                    url: 'www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/mod-packs/2146221-allforfuns-modpack-its-a-custom-coded-modpack-in-a',
                    desc: 'A custom coded modpack for Minecraft in a mod, this was one of my first projects, and it\'s pretty cool. Although it\'s not currently in active development, at it\'s peek, over 6 developers contributed with over 150 players downloading it in a month.'
                },
                {
                    name: 'Imaginary Numbers',
                    desc: 'I made a video about imaginary numbers. People say it\'s pretty good. I put it on youtube if you like it. So watch it and tell me what you think in the comments.',
                    video: $sce.trustAs('resourceUrl','https://www.youtube.com/embed/9djGgSnyJZY')
                },
                {
                    name: 'EasyCalc',
                    desc: "EasyCalc knows 1 + 1 is. It knows what you mean when you are typing, and it's modular, " + 
                    "meaning you can write your own operators. It's even open source, so everyone has the best calculator. Ever.",
                    size: 2,
                    url: 'EasyCalc.bensites.com'
                },
                {
                    name: 'Groovy Things',
                    size: 2,
                    desc: 'If you code in Groovy, here are some Groovy things to help you. Puns aside, it\'s just a bunch of cool code that an help you in a project, or teach you about random Groovy things. Either way, check it out.',
                    url: 'github.com/penne12/GroovyThings'
                },
                {
                    name: 'TextBox Server',
                    size: 2,
                    desc: 'A quick server I made that has a RESTfull api to get and set text, made for a friend. Install it: `gem install TextBox`.',
                    url: 'github.com/penne12/TextBox'
                }
                
            ]
    })


$(function(){
    $('#about').pushpin({bottom: $('#projects').offset().top - $('#about').height()});
})