define(["jquery"],
function($){

    const apiService = function(){
        //Consumo de api Rick And Morty
            return{
                getCharacters: function(){
                    return $.ajax({
                        type: "GET",
                        url: "https://rickandmortyapi.com/api/character",
                        datatype: "json"
                    })
                }    
    }
    }
        return apiService;
});