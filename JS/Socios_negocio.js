var UrlGetSocios_negocios= 'http://34.68.196.220:90/G5_20/Socios_negocios/controller/socios_negocio.php?opcion=GetSocios_negocios';
var UrlPostSocios_negocios= 'http://34.68.196.220:90/G5_20/Socios_negocios/controller/socios_negocio.php?opcion=Insertar_Socio_negocios';
var UrlGetUno= 'http://34.68.196.220:90/G5_20/Socios_negocios/controller/socios_negocio.php?opcion=GetUno';
var UrlPostActualizar= 'http://34.68.196.220:90/G5_20/Socios_negocios/controller/socios_negocio.php?opcion=Actualizar_Socio_negocios';
var UrlDelet= 'http://34.68.196.220:90/G5_20/Socios_negocios/controller/socios_negocio.php?opcion=Eliminar_Socio_negocios';


$(document).ready(function(){
    CargarSocios_negocios();
});

function CargarSocios_negocios(){
    $.ajax({
        url: UrlGetSocios_negocios,
        type : 'GET',
        datatype: 'JSON',
        success: function(response){
            var MiItems=response;
            var Valores='';

            for (i= 0; i< MiItems.length; i++){
                Valores +='<tr>'+
                '<td>'+MiItems[i].ID+'</td>'+
                '<td>'+MiItems[i].NOMBRE+'</td>'+
                '<td>'+MiItems[i].RAZÓN_SOCIAL+'</td>'+
                '<td>'+MiItems[i].DIRECCIÓN+'</t>'+
                '<td>'+MiItems[i].TIPO_SOCIO+'</td>'+
                '<td>'+MiItems[i].CONTACTO+'</td>'+
                '<td>'+MiItems[i].EMAIL+'</td>'+
                '<td>'+MiItems[i].FECHA_CREADO+'</td>'+
                '<td>'+MiItems[i].ESTADO+'</td>'+
                '<td>'+MiItems[i].TELEFONO+'</td>'+
                '<td>'+
                '<button class="btn btn-outline-warning" onclick="CargarSocio_negocio('+ MiItems[i].ID +')">Editar</button>'+ 
                '<button class="btn btn-outline-danger" onclick="EliminarSocio_negocio('+MiItems[i].ID+')">Eliminar</button>'+  
                '<td>'+
             '</tr>';
            $('.Socios_negocios').html(Valores);
            }
        }
    });    
}
function AgregarSocio_negocio(){
    var datosSocio_negocio={
        id: $('#id').val(),
        nombre: $('#nombre').val(),
        razón_social: $('#razón_social').val(),
        dirección: $('#dirección').val(),
        tipo_socio: $('#tipo_socio').val(),
        contacto: $('#contacto').val(),
        email: $('#email').val(),
        fecha_creado: $('#fecha_creado').val(),
        estado: $('#estado').val(),
        telefono: $('#telefono').val()
    };
    var datosSocio_negociojson= JSON.stringify(datosSocio_negocio);

    $.ajax({
        url: UrlPostSocios_negocios,
        type: 'POST',
        data: datosSocio_negociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
        console.log(response);
        }
    });
     alert("Socio de negocios agregado exitosamente");
}

function CargarSocio_negocio(idSocio_negocio){
    var datosSocio_negocio={
        id: idSocio_negocio
    };
    var datosSocio_negociojson=JSON.stringify(datosSocio_negocio);

    $.ajax({
        url: UrlGetUno,
        type:'POST',
        data: datosSocio_negociojson,
        datatype: 'JSON',
        contentType:'application/json',
        success: function(response){
            var MiItems= response;
            $('#id').val(MiItems[0].ID);
            $('#nombre').val(MiItems[0].NOMBRE);
            $('#razón_social').val(MiItems[0].RAZÓN_SOCIAL);
            $('#dirección').val(MiItems[0].DIRECCIÓN);
            $('#tipo_socio').val(MiItems[0].TIPO_SOCIO);
            $('#contacto').val(MiItems[0].CONTACTO);
            $('#email').val(MiItems[0].EMAIL);
            $('#fecha_creado').val(MiItems[0].FECHA_CREADO);
            $('#estado').val(MiItems[0].ESTADO);
            $('#telefono').val(MiItems[0].TELEFONO);
            
            var btnactualizar = '<input type="submit" id="btn_actualizar" onclick="ActualizarSocio_negocio('+MiItems[0].id+')" '+
            'value="Actualizar Socio de negocio" class="btn btn-primary"></input>';  
            $('.btnagregar').html(btnactualizar);
        }
    });
}

function ActualizarSocio_negocio(idSocio_negocio){
    var datosSocio_negocio={
        id: idSocio_negocio,
        id: $('#id').val(),
        nombre: $('#nombre').val(),
        razón_social: $('#razón_social').val(),
        dirección: $('#dirección').val(),
        tipo_socio: $('#tipo_socio').val(),
        contacto: $('#contacto').val(),
        email: $('#email').val(),
        fecha_creado: $('#fecha_creado').val(),
        estado: $('#estado').val(),
        telefono: $('#telefono').val()
    };
    var datosSocio_negociojson=JSON.stringify(datosSocio_negocio);

    $.ajax({
        url: UrlPostActualizar,
        type:'PUT',
        data: datosSocio_negociojson,
        datatype:'JSON',
        contentType:'application/json',
        success:function(response){
            console.log(response);
        }
    });
    alert("Socio de negocios actualizado correctamente");
}

function EliminarSocio_negocio(idSocio_negocio){
    var datosSocio_negocio={
        id: idSocio_negocio
    };
    var datosSocio_negociojson=JSON.stringify(datosSocio_negocio);

    $.ajax({
        url: UrlDelet,
        type:'DELETE',
        data:datosSocio_negociojson,
        datatype:'JSON',
        contentType:'application/json',
        success:function(response){
            console.log(response);
        }
    });    
    alert("Socio de negocios eliminado satisfactori")
}