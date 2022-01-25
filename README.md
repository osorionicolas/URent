Data Structure

Inmuebles

	Inmueble
		Tipo
			Casa
			PH
			Departamento
			Local Comercial
			Campo
			Cochera
			Terreno
			Otro
		Orientacion
			Norte
			Sur
			Este
			Oeste
		Antiguedad(int)
		Cochera (bool)
		Baulera (bool)
		Apto Profesional (bool)
		m2 (int)
		Ambientes (int)
		Observaciones
		
	Ubicacion
		Calle
		Altura (int)
		Entre calles
		Piso (int)
		Departamento
		CP
		Barrio
	
	Servicios
		Tipo
			Agua
			Luz
			Gas
			Impuesto Municipal
			Cable
			Telefono
			Expensas
			Otro
		Descripcion
		Observaciones
	
	Artefactos
		Descripcion
		Estado
			Muy Bueno
			Bueno
			Regular
			Malo
			Muy Malo
		Observaciones


Contratos
	
	Contrato
		Tipo
			Alquiler Comercial
			Alquiler Particular
			Alquiler Temporal
		Domicilio del Inmueble (buscar domicilio de los creados)
		Fecha de Firma (date)
		Observaciones
		
	Fechas y Montos
		Inmobiliaria
			Comision (int)
		
		Fechas
			Fecha de Inicio (date)
			Meses (int)
			Fecha Fin (date)
			Dia limite de pago (int)
		
		Montos
			Monto al inicio (decimal)
			Moneda (pesos / dolares)
			Punitorio (decimal) (porcentaje)
				
	
	
	Dueños e Inquilinos
		Inquilinos (busca de algun lado) (agregar inquilinos )
			
	Periodos
		Fecha Desde
		Fecha Hasta
		Monto Periodos
		Monto Deposito Garantia
		Monto Multa Recision de Contrato
		
	Recibos
		(vacio)
	Fotos
		Fotos del contrato 	(drag and drop)

Pagos

	Domicilio del Inmueble (buscar domicilio de los creados)
	Servicio Abonado (listar servicios del domicilio)
	Fecha de Pagos (date)
	Fecha de Vencimiento (date)
	Importe (decimal)
	Imagen (drag and drop)
	Observaciones
	


Gastos totales
Gastos individuales
por inmueble / por todos
ingresos