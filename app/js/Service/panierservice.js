app.service("PanierService", function ($sessionStorage) {
    if ($sessionStorage.Panier === undefined) {
        this.Panier = [];
    } else if ($sessionStorage.Panier.length > 0) {

        this.Panier = $sessionStorage.Panier;
    }

    this.AjouterLivre = function (livre) {

        var estNonAjoute = this.LivreAjoute(livre.Id);
        if (estNonAjoute)
            this.Panier.push(livre);
        else {
            this.SupprimerLivre(livre);
            this.Panier.push(livre);
        }
    }
    this.SupprimerLivre = function (livre) {
        var index = this.indexOf(livre);
        if (index != -1)
            this.Panier.splice(index, 1);
    }
    this.LivreAjoute = function (id) {
        angular.forEach(this.Panier, function (item) {
            if (item.Id == id) {
                return true;
            }
        });
        return false;
    }
    this.indexOf = function (obj) {
        for (var i = 0; i < this.Panier.length; i++) {
            if (this.Panier[i].Id == obj.Id) {
                return i;
            }
        }
        return -1;
    };
});