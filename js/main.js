var loadSpeed = 3;

var loadMultiplier = 1 / loadSpeed;

mynameisben = "My name is Ben.".split('')

function loadPage(callback){
    $('body').addClass('loaded').removeClass('loading');
    $('#nameisben').hide();
    if(callback)callback();
};

var addLetter = function(){
    letter = mynameisben.shift();
    $('#nameisben').text($('#nameisben').text() + letter);
    if(mynameisben.length >= 1){
        setTimeout(addLetter,60 * loadMultiplier);
    } else {
        setTimeout(loadPage,2000 * loadMultiplier);             
    }
}
$(document).ready(addLetter)

angular.module('BenSites',[])
    .controller('IndexCtrl',function($scope){
        $scope.projects = [
                {
                    name: 'Room305',
                    desc: "Room305 is an awesome student literary magizine. " +
                          "I've helped with most of the backend management and design.",
                    size: 3,
                    url: 'Room305.org'
                },
                {
                    name: 'PlanHW',
                    desc: "PlanHW is your new homework planner. It has features that understand you, not make you understand them. " +
                    "Easily add homework, and get reminders at a great time to work on it. Your teachers can easily send you homework, "+
                    "so you don't have to do anything at all. Did I mention it's free?",
                    size: 6,
                    url: 'PlanHW.com'
                },
                {
                    name: 'EasyCalc',
                    desc: "EasyCalc knows 1 + 1 is. It knows what you mean when you are typing, and it's modular, " + 
                    "meaning you can write your own operators. It's even open source, so everyone has the best calculator. Ever.",
                    size: 3,
                    url: 'EasyCalc.bensites.com'
                },
                {
                    name: 'AllForFun\'s Modpack',
                    size: '2',
                    class: 'col-md-offset-1',
                    url: 'www.minecraftforum.net/forums/mapping-and-modding/minecraft-mods/mod-packs/2146221-allforfuns-modpack-its-a-custom-coded-modpack-in-a',
                    desc: 'A custom coded modpack for Minecraft in a mod, this was one of my first projects, and it\'s pretty cool. Although it\'s not currently in active development, at it\'s peek, over 6 developers contributed with over 150 players downloading it in a month.'
                },
                {
                    name: 'BenSites',
                    size: 2,
                    desc: 'You are here. Right now. I think it\'s pretty cool, but I guess you can decide.'
                },
                {
                    name: 'Imaginary Numbers',
                    size: 2,
                    desc: 'I made a video about imaginary numbers. People say it\'s pretty good. I put it on youtube if you like it. So watch it and tell me what you think in the comments.',
                    url: 'youtu.be/9djGgSnyJZY'
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
        
        $scope.unshowcase = function(){
            $scope.showcaseProject = null
            setTimeout($scope.yesCanShowcase,250)
        }
        $scope.yesCanShowcase = function(){
            $scope.canShowcase = true
        }
        
        $scope.canShowcase = true
        
        $scope.showcase = function(project, force){
            if($scope.canShowcase && (force || project.size >= 3)){
                $scope.showcaseProject = project;
                $scope.canShowcase = false
            }
        }
    })