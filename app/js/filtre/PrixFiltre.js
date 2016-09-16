'use strict';

app.filter('inferieurA', function () {
    return function (input, MaxPrix) {
        var livreAffiche = [];
        if (MaxPrix != null) {
            input.forEach(function (livre) {
                if (livre.Prix < MaxPrix) {
                    livreAffiche.push(livre);
                }
            });
        } else {
            return input;
        }
        return livreAffiche;
    }
});