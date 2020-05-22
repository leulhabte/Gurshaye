
            const selector = {
                "e-link" : "e-card",
                "c-link" : "c-card",
                "h-link" : "h-card",
                "j-link" : "j-card",
            };

            var temp = 0;
                $(".e-link,.c-link,.h-link,.j-link ").click(()=>{
                    for(s in selector){
                        if($(`.${s}`).is(`.${s}:hover`)){
                            $(`.${selector[s]}`).collapse("show");
                            console.log(selector[s]);
                            $(`.${selector[s]}`).hover(()=>{
                            },()=>{
                                $(`.${selector[s]}`).collapse("hide")
                            })
                                break;
                        }
                    }
                }
                );
                