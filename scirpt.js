$(document).ready(function(){
    let types='';
    $.ajax({
        type:'POST',
        url:'http://localhost/lol/Back/Libary/getalltypes.php',
        success: function(response){
            
            let jsonData=JSON.parse(response);
            //console.log(jsonData);
            let select=$('#booktypes');
            $.each(jsonData,function(key,value){
                select.append($('<option>',{
                    value: value.typeId,
                    text: value.name
                }));

            });

            
        },
        error:{}

    });

    $("select#booktypes").click(function(){

        let id=$('select#booktypes option:selected').attr('value');
        //console.log(id);
        $.ajax({
            type:'POST',
            url:'http://localhost/lol/Back/Libary/getbookstypeid.php',
            data: {'id':id},
            success: function(response){
                
                let jsonData=JSON.parse(response);
                console.log(jsonData);
               
    
                
            },
            error:{}
    
        });
    
    });
});