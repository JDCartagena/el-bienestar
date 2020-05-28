function datos(num){
	var imagen = $('#img'+num).attr('src');
	var precio = $('#precio'+num).text();
	$('#modalprecio').text(precio);
	$('#imagen').attr("src", imagen);

	$('.table').html('');
}

function calcular(){
	// Creas la fecha
	var fecha = new Date();
	var dia = fecha.getDate();
	var mes = fecha.getMonth()+1;
	var year = fecha.getFullYear();

	//var fecha1 = dia+"/"+(mes+1)+"/"+year;
	//var fecha2 = dia+"/"+(mes+2)+"/"+year;
	//var fecha3 = dia+"/"+(mes+3)+"/"+year;

	var inicial, saldo, amortizacion;
	var cliente = $('#cliente').val();
	var meses = $('#meses').val();

	var precio = $('#modalprecio').text();
	
	if (cliente === "nuevo") {
		inicial = precio * 0.4;
		saldo = precio - inicial;
	} else{
		inicial = precio * 0.3;
		saldo = precio - inicial;
	}

	var interes = Math.round(saldo * 0.03);

	var tabla = '';

	if (meses == "3") {
		amortizacion = Math.round(saldo/3);
		tabla = '<h6 class="mt-3">Cuota inicial Bs. '+inicial+'</h6><h6>Saldo Bs. '+saldo+'</h6><h6>Interes 3% Bs. '+interes+'</h6>'+
				'<table class="table table-sm">'+
					'<thead>'+
						'<th>Fecha de Pago</th><th>Amortizacion</th><th>Interes</th><th>Cuotas</th>'+
  					'</thead>'+
  					'<tbody>'+
    					'<tr><td>'+dia+"/"+(mes+1)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+2)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+3)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
					'</tbody>'+
				'</table>';
	}
	if (meses == "4") {
		amortizacion = Math.round(saldo/4);
		tabla = '<h6 class="mt-3">Cuota inicial Bs. '+inicial+'</h6><h6>Saldo Bs. '+saldo+'</h6><h6>Interes 3% Bs. '+interes+'</h6>'+
				'<table class="table table-sm">'+
					'<thead>'+
						'<th>Fecha de Pago</th><th>Amortizacion</th><th>Interes</th><th>Cuotas</th>'+
  					'</thead>'+
  					'<tbody>'+
    					'<tr><td>'+dia+"/"+(mes+1)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+2)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+3)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+4)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
					'</tbody>'+
				'</table>';
	}
	if (meses == "5") {
		amortizacion = Math.round(saldo/5);
		tabla = '<h6 class="mt-3">Cuota inicial Bs. '+inicial+'</h6><h6>Saldo Bs. '+saldo+'</h6><h6>Interes 3% Bs. '+interes+'</h6>'+
				'<table class="table table-sm">'+
					'<thead>'+
						'<th>Fecha de Pago</th><th>Amortizacion</th><th>Interes</th><th>Cuotas</th>'+
  					'</thead>'+
  					'<tbody>'+
    					'<tr><td>'+dia+"/"+(mes+1)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+2)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+3)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+4)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+5)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
					'</tbody>'+
				'</table>';
	}
	if (meses == "6") {
		amortizacion = Math.round(saldo/6);
		tabla = '<h6 class="mt-3">Cuota inicial Bs. '+inicial+'</h6><h6>Saldo Bs. '+saldo+'</h6><h6>Interes 3% Bs. '+interes+'</h6>'+
				'<table class="table table-sm">'+
					'<thead>'+
						'<th>Fecha de Pago</th><th>Amortizacion</th><th>Interes</th><th>Cuotas</th>'+
  					'</thead>'+
  					'<tbody>'+
    					'<tr><td>'+dia+"/"+(mes+1)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+2)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+3)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+4)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+5)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
    					'<tr><td>'+dia+"/"+(mes+6)+"/"+year+'</td><td>'+amortizacion+'</td><td>'+interes+'</td><td>'+(amortizacion+interes)+'</td></tr>'+
					'</tbody>'+
				'</table>';
	}

	$('.table').html(tabla);

	var cuota = amortizacion + interes;

	//console.log("C inicial: "+inicial+" - saldo: "+saldo+" - interes: "+interes+" - amortizacion: "+amortizacion+" - cuota: "+cuota);
/*
	$('#inicial').text(inicial);
	$('#saldo').text(saldo);
	$('#interes').text(interes);
	$('#interes1').text(interes);
	$('#interes2').text(interes);
	$('#interes3').text(interes);
	$('#amortizacion1').text(amortizacion);
	$('#amortizacion2').text(amortizacion);
	$('#amortizacion3').text(amortizacion);
	$('#cuota1').text(cuota);
	$('#cuota2').text(cuota);
	$('#cuota3').text(cuota);
	$('#fecha1').text(fecha1);
	$('#fecha2').text(fecha2);
	$('#fecha3').text(fecha3);	
*/
}