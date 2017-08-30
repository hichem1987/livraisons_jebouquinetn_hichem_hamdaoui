app.directive('infoAdresse', function () { 
    return { 
        restrict: 'AE', 
        scope:{ 
            adresse: '@', 
            numeroTelephone: '@', 
            email : '@' 
        }, 
        template: "<ul class='top-contact-details alignleft'>    <li class='hidden-xs'> <i class='fa fa-map-marker'></i><span>{{adresse}}</span></li>    <li class='hidden-xs'> <i class='fa fa-mobile'></i><span>{{numeroTelephone}}</span></li><li> <i class='fa fa-envelope'></i><a href='#'>{{email}}</a></li></ul>" 
}; 
}); 
 