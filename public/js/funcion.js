    // Valores de Compra y Venta
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre",
            "Octubre", "Noviembre", "Diciembre");
    var fh = new Date();
    var Fecha = 'Fecha: ' + (fh.getDate() + " de " + meses[fh.getMonth()] + " de " + fh
            .getFullYear());
    var Hora = 'Hora: ' + (fh.getHours() + ':' + fh.getMinutes() + ':' + fh.getSeconds());
    var Compra, pagoCompra, TotalCompraCV, CambioCompra;

    // Funciones Compra y Venta
    function MostrarCompra() {
        console.log('Aiudaaaaa');
        Compra = $('#Compra').val();
        pagoCompra = $('#pagoCompra').val();
        if (Compra != '' && pagoCompra != '') {
            TotalCompraCV = (Compra * 18.41).toFixed(2);
            CambioCompra = (pagoCompra - Compra).toFixed(2);
            document.getElementById('APC').value = (TotalCompraCV);
            document.getElementById('ADC').value = (Compra);
            console.log(TotalCompraCV)
            console.log(Compra)
            $('#TCD').text('$ ' + TotalCompraCV);
            $('#CCD').text('$ ' + CambioCompra);
            $('#OcultoCompra').show();
        } else {
            alert('Rellene todos los campos');
        }
    }

    function MostrarTicket1() {
        $('#OcultoTicket1').show();
        $('#IdFechaC').text(Fecha);
        $('#IdHoraC').text(Hora);
        $('#IdPagoC').text('Pago: $ ' + pagoCompra + ' USD');
        $('#IdTotalC').text('Total: $ ' + Compra + ' USD');
        $('#IdCambioC').text('Cambio: $ ' + CambioCompra + ' USD');
        $('#IdRecibeC').text('Recibe: $ ' + TotalCompraCV + ' MXN');
    }

    var Venta, pagoVenta, TotalVentaCC, CambioVenta;

    function MostrarVenta() {
        Venta = $('#Venta').val();
        pagoVenta = $('#pagoVenta').val();
        if (Venta != '' && pagoVenta != '') {
            TotalVentaCC = (Venta / 19.97).toFixed(2);
            CambioVenta = (pagoVenta - Venta).toFixed(2);
            document.getElementById('APV').value = (Venta);
            document.getElementById('ADV').value = (TotalVentaCC);
            $('#TVD').text('$ ' + TotalVentaCC);
            $('#CVD').text('$ ' + CambioVenta);
            $('#OcultoVenta').show();
        } else {
            alert('Rellene todos los campos');
        }
    }

    function MostrarTicket2() {
        $('#OcultoTicket2').show();
        $('#IdFechaV').text(Fecha);
        $('#IdHoraV').text(Hora);
        $('#IdPagoV').text('Pago: $ ' + pagoVenta + ' MXN');
        $('#IdTotalV').text('Total: $ ' + Venta + ' MXN');
        $('#IdCambioV').text('Cambio: $ ' + CambioVenta + ' MXN');
        $('#IdRecibeV').text('Recibe: $ ' + TotalVentaCC + ' USD');
    }
